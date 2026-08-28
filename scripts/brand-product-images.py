#!/usr/bin/env python3
"""Download product photos from wowbooze.com and stamp the MadeBrings emblem."""

from __future__ import annotations

import io
import re
import urllib.request
from pathlib import Path

from PIL import Image, ImageDraw

ROOT = Path("/workspace")
OUT_DIR = ROOT / "public" / "products"
LOGO_PATH = ROOT / "public" / "logo.png"
UA = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
)

CANVAS_W = 1000
CANVAS_H = 1250
LOGO_RATIO = 0.20  # of canvas width — matches the attached example
MARGIN_RATIO = 0.045

ITEMS: list[tuple[str, str]] = [
    ("singaraja-pilsner-330", "https://wowbooze.com/product/singaraja-beer-330-ml/"),
    ("bintang-330", "https://wowbooze.com/product/bintang-330ml-bottle/"),
    ("bintang-radler-lemon-330", "https://wowbooze.com/product/bintang-330ml-can/"),
    ("san-miguel-light-330", "https://wowbooze.com/product/san-miguel-light-330ml-bottle/"),
    ("bintang-crystal-330", "https://wowbooze.com/product/bintang-crystal-330ml-bottle/"),
    ("san-miguel-light-330-6pack", "https://wowbooze.com/product/san-miguel-light-330ml-bottle-6-pack/"),
    ("bintang-330-6pack", "https://wowbooze.com/product/bintang-330ml-bottle-6-pack/"),
    ("bintang-crystal-330-6pack", "https://wowbooze.com/product/bintang-crystal-330ml-bottle-6pack/"),
    ("bintang-radler-lemon-330-6pack", "https://wowbooze.com/product/bintang-radler-lemon-330ml-bottle-6pack/"),
    ("singaraja-pilsner-box", "https://wowbooze.com/product/singaraja-pilsner-box/"),
    ("bintang-beer-box", "https://wowbooze.com/product/1-box-bintang-330ml-bottle/"),
    ("bintang-radler-lemon-box", "https://wowbooze.com/product/bintang-beer-redler-box/"),
    ("san-miguel-light-box", "https://wowbooze.com/product/san-miguel-light-box-24-x-330ml/"),
    ("smirnoff-ice-275", "https://wowbooze.com/product/smirnoff-ice/"),
    ("smirnoff-ice-green-apple-275", "https://wowbooze.com/product/smirnoff-ice-apple-275ml/"),
    ("smirnoff-ice-pink-lemonade-275", "https://wowbooze.com/product/smirnoff-ice-pink-lemonade-275-ml/"),
    ("smirnoff-ice-275-6pack", "https://wowbooze.com/product/smirnoff-ice-330ml-bottles-6-pack/"),
    ("smirnoff-ice-green-apple-275-6pack", "https://wowbooze.com/product/smirnoff-ice-green-apple-275ml-bottle-6pack/"),
    ("smirnoff-ice-pink-lemonade-275-6pack", "https://wowbooze.com/product/smirnoff-ice-pink-lemonade-275ml-bottle/"),
    ("smirnoff-ice-box", "https://wowbooze.com/product/smirnoff-ice-box/"),
    ("schweppes-tonic-250", "https://wowbooze.com/product/schweppes-tonic-water-330ml-can-2/"),
    ("schweppes-ginger-ale-250", "https://wowbooze.com/product/schweppes-ginger-ale-330ml-can-2/"),
    ("coca-cola-original-250", "https://wowbooze.com/product/coca-cola-original-250ml-can/"),
    ("coca-cola-zero-250", "https://wowbooze.com/product/coca-cola-zero-330ml-can/"),
    ("sprite-250", "https://wowbooze.com/product/sprite/"),
    ("limes-x3", "https://wowbooze.com/product/limes-x-3/"),
    ("red-bull-can", "https://wowbooze.com/product/red-bull-can-2/"),
    ("schweppes-tonic-box", "https://wowbooze.com/product/schweppes-tonic-water-box/"),
    ("schweppes-ginger-ale-box", "https://wowbooze.com/product/schweppes-ginger-ale-box/"),
    ("coca-cola-zero-box", "https://wowbooze.com/product/coca-cola-zero-box/"),
    ("sprite-box", "https://wowbooze.com/product/sprite-box/"),
    ("coca-cola-original-box", "https://wowbooze.com/product/coca-cola-original-box/"),
    ("rent-ice-box-3-days", "https://wowbooze.com/product/rent-ice-box-per-day/"),
    ("ice-bag-4kg", "https://wowbooze.com/product/ice-bag/"),
    ("aqua-mineral-600-box", "https://wowbooze.com/product/aqua-mineral-water-1000ml/"),
    ("large-potato-crisps", "https://wowbooze.com/product/large-chitato/"),
    ("pringles-original-110g", "https://wowbooze.com/product/pringles-110g-original/"),
]


def fetch(url: str) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=40) as response:
        return response.read()


def fetch_text(url: str) -> str:
    return fetch(url).decode("utf-8", "ignore")


def uncrop_wp(url: str) -> str:
    return re.sub(r"-e\d{7,}", "", url)


def collect_image_urls(html: str) -> list[str]:
    """Prefer the page's own og:image / main gallery shot — not related products."""
    urls: list[str] = []
    og = re.search(
        r'<meta[^>]+property=["\']og:image["\'][^>]+content=["\']([^"\']+)',
        html,
        flags=re.I,
    )
    if not og:
        og = re.search(
            r'<meta[^>]+content=["\']([^"\']+)["\'][^>]+property=["\']og:image["\']',
            html,
            flags=re.I,
        )
    if og:
        urls.append(og.group(1).split("?")[0])
    large = re.findall(r'data-large_image=["\']([^"\']+)', html, flags=re.I)
    if large:
        urls.append(large[0].split("?")[0])
    featured = re.search(
        r'wp-post-image[^>]+src=["\']([^"\']+)',
        html,
        flags=re.I,
    )
    if featured:
        urls.append(featured.group(1).split("?")[0])

    expanded: list[str] = []
    seen: set[str] = set()
    for url in urls:
        if "wp-content/uploads" not in url:
            continue
        for candidate in (url, uncrop_wp(url)):
            if candidate not in seen:
                seen.add(candidate)
                expanded.append(candidate)
    return expanded


def load_best_image(urls: list[str]) -> Image.Image:
    best: Image.Image | None = None
    best_score = -1
    last_error: Exception | None = None
    for url in urls:
        try:
            data = fetch(url)
            image = Image.open(io.BytesIO(data))
            image.load()
            score = image.width * image.height
            if score > best_score:
                best = image.copy()
                best_score = score
            image.close()
        except Exception as exc:  # noqa: BLE001
            last_error = exc
            continue
    if best is None:
        raise RuntimeError(f"Could not download a product photo: {last_error}")
    return best


def circular_logo(size: int) -> Image.Image:
    source = Image.open(LOGO_PATH).convert("RGBA")
    # Crop to the emblem (small cream padding around the circle).
    w, h = source.size
    inset = int(min(w, h) * 0.02)
    source = source.crop((inset, inset, w - inset, h - inset))
    source = source.resize((size, size), Image.Resampling.LANCZOS)
    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).ellipse((1, 1, size - 2, size - 2), fill=255)
    source.putalpha(mask)
    return source


def fit_on_white(product: Image.Image) -> Image.Image:
    canvas = Image.new("RGB", (CANVAS_W, CANVAS_H), (255, 255, 255))
    image = product.convert("RGBA")
    # Flatten any transparency onto white first so PNG bottles stay clean.
    flat = Image.new("RGBA", image.size, (255, 255, 255, 255))
    flat.alpha_composite(image)
    image = flat.convert("RGB")

    pad_x = int(CANVAS_W * 0.10)
    pad_y = int(CANVAS_H * 0.10)
    box_w = CANVAS_W - pad_x * 2
    box_h = CANVAS_H - pad_y * 2
    scale = min(box_w / image.width, box_h / image.height)
    new_w = max(1, int(image.width * scale))
    new_h = max(1, int(image.height * scale))
    resized = image.resize((new_w, new_h), Image.Resampling.LANCZOS)
    x = (CANVAS_W - new_w) // 2
    y = (CANVAS_H - new_h) // 2
    canvas.paste(resized, (x, y))
    return canvas


def stamp_logo(canvas: Image.Image) -> Image.Image:
    logo_size = int(CANVAS_W * LOGO_RATIO)
    logo = circular_logo(logo_size)
    margin = int(CANVAS_W * MARGIN_RATIO)
    x = CANVAS_W - logo_size - margin
    y = margin
    stamped = canvas.convert("RGBA")
    stamped.alpha_composite(logo, (x, y))
    return stamped.convert("RGB")


def brand_one(slug: str, page_url: str) -> Path:
    html = fetch_text(page_url)
    urls = collect_image_urls(html)
    if not urls:
        raise RuntimeError(f"No image URLs on {page_url}")
    source = load_best_image(urls)
    branded = stamp_logo(fit_on_white(source))
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    dest = OUT_DIR / f"{slug}.jpg"
    branded.save(dest, format="JPEG", quality=84, optimize=True, progressive=True)
    print(f"OK {slug}  {dest.stat().st_size // 1024}KB  from {urls[0]}", flush=True)
    return dest


def main() -> None:
    failures: list[str] = []
    for slug, url in ITEMS:
        try:
            brand_one(slug, url)
        except Exception as exc:  # noqa: BLE001
            print(f"FAIL {slug}: {exc}", flush=True)
            failures.append(slug)
    if failures:
        raise SystemExit(f"Failed {len(failures)} items: {', '.join(failures)}")
    print(f"Wrote {len(ITEMS)} branded photos to {OUT_DIR}")


if __name__ == "__main__":
    main()
