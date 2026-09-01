# MadeBrings

A customer-facing website for **MadeBrings**, a family liquor and beer shop in Abianbase, Badung, Bali, run by Made Hendrik.

People browse the shelf on the site, then **chat first to confirm your order** on WhatsApp. There is no trolley checkout. Payment is **cash or bank transfer**.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://127.0.0.1:43127](http://127.0.0.1:43127).

## Deploy on Vercel (Hobby / free)

This is a standard Next.js App Router project. It needs no database, no serverless GPU, and no persistent server process.

1. Push the repo to GitHub / GitLab / Bitbucket.
2. Import the project in Vercel.
3. Set the environment variables below.
4. Deploy.

Product photos live in `public/products`. Each file is the matching photo from the supplier listing, with the MadeBrings emblem in the top-right corner. Regenerating them: `python3 scripts/brand-product-images.py`.

## Environment variables

Copy `.env.example` to `.env.local`.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for sitemap, robots, and Open Graph. Use your Vercel or custom domain. |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Shop WhatsApp in international format, digits only, e.g. `62812xxxxxxx`. |
| `NEXT_PUBLIC_INSTAGRAM_URL` | Instagram profile. |
| `NEXT_PUBLIC_FACEBOOK_URL` | Facebook page. |
| `NEXT_PUBLIC_TRIPADVISOR_URL` | TripAdvisor listing. |
| `NEXT_PUBLIC_MAPS_URL` | Google Maps / Business Profile link for the shop. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Token from Google Search Console HTML-tag verification. |
| `CRON_SECRET` | Shared secret for the bi-daily SEO revalidate cron at `/api/seo/cron`. Vercel sends `Authorization: Bearer $CRON_SECRET`. |

Until those social URLs are set, the header and footer still show the five icons using placeholder links.

## Google Search Console

The HTML file verification file is in the repo at `public/google65b51532d9d28066.html`. After deploy it is served at:

`https://your-domain/google65b51532d9d28066.html`

In Search Console, choose **HTML file** verification and click Verify. Then submit the sitemap at `https://your-domain/sitemap.xml`.

The site also ships:

- `https://your-domain/sitemap.xml` — pages, categories, and products
- `https://your-domain/robots.txt` — allows Googlebot and points at the sitemap
- Unique titles, descriptions, and canonical URLs on every page
- Open Graph tags and JSON-LD (`LiquorStore`, `FAQPage`, `HowTo`, `WebPage` speakable, `Product`, `BlogPosting`)
- Money page `/alcohol-delivery-service` for the main keyword, plus commercial delivery guides
- `/llms.txt` and `/llms-full.txt` for AI citation; AI crawlers allowed in `robots.txt`
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` if you prefer the HTML-tag method instead of the HTML file

## Architecture (ready to grow)

```
src/lib/commerce/     Catalog types + in-memory adapter
src/lib/whatsapp.ts   Checkout adapter (WhatsApp deep link)
public/products/      Branded product photos (MadeBrings emblem top-right)
src/app/              Storefront routes
```

Today the catalog is a typed TypeScript module so the first version stays on the Vercel free plan. Swap `src/lib/commerce/catalog.ts` later for Sanity, Shopify, Medusa, or a database API without rewriting the UI.

Checkout is already a separate adapter. Replacing WhatsApp with another payment flow later does not require a new storefront.

## Pages

- `/` Home (English)
- `/id` Indonesian home — crawlable copy for Indonesian Google queries
- `/id/shop`, `/id/product/[slug]`, `/id/about`, `/id/contact` Indonesian versions of the same pages
- `/alcohol-delivery-service` and `/id/alcohol-delivery-service` — money/booking page
- `/compare-alcohol-delivery-bali` — qualitative comparison methodology (no invented competitor prices)
- `/press` — media kit
- `/llms.txt`, `/llms-full.txt` — AI citation indexes
- `/shop` Full shelf
- `/shop/[category]` Beer & cider, RTD, mixers, ice & water, snacks
- `/product/[slug]` Product
- `/about` Family shop story
- `/contact` WhatsApp + map
- `/blog` Journal (commercial guides first)
- `/blog/alcohol-delivery-canggu`
- `/blog/alcohol-delivery-seminyak-kuta`
- `/blog/villa-alcohol-delivery-whatsapp`
- `/blog/alcohol-delivery-ubud-tanah-lot`
- `/blog/beer-run-vs-minimarket-bali`
- `/blog/bali-holiday-guide-badung`
- `/blog/bali-tour-guide-selaras` (links to [Selaras Bali Guide](https://www.selarasbaliguide.com))
- `/blog/arak-bali-traditional-drink`

Alcohol sales require confirming you are 21 or older (Indonesian law).

## Brand

Colours and type follow the MadeBrings emblem: forest green `#083820` on cream `#F3E1C7`, with **Bebas Neue** for headings (the condensed sans on the logo) and **Outfit** for body copy.
