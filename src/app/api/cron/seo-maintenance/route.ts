import { NextRequest, NextResponse } from "next/server";
import { getSeoInventory } from "@/lib/seo-inventory";
import { siteConfig } from "@/lib/site";

function authorized(request: NextRequest) {
  const secret = process.env.CRON_SECRET;
  if (!secret) return false;
  const header = request.headers.get("authorization");
  const bearer = header?.startsWith("Bearer ") ? header.slice(7) : "";
  const query = request.nextUrl.searchParams.get("secret");
  return bearer === secret || query === secret;
}

export async function GET(request: NextRequest) {
  if (!authorized(request)) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const inventory = getSeoInventory();
  const indexNowKey = process.env.INDEXNOW_KEY;
  let indexNow: { attempted: boolean; ok?: boolean; status?: number } = {
    attempted: false,
  };

  if (indexNowKey) {
    const host = new URL(siteConfig.url).host;
    const payload = {
      host,
      key: indexNowKey,
      keyLocation: `https://${host}/${indexNowKey}.txt`,
      urlList: inventory.commercialPosts.map((post) => post.url).slice(0, 10),
    };
    try {
      const response = await fetch("https://api.indexnow.org/indexnow", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(payload),
      });
      indexNow = {
        attempted: true,
        ok: response.ok,
        status: response.status,
      };
    } catch {
      indexNow = { attempted: true, ok: false };
    }
  }

  return NextResponse.json({
    ok: inventory.speakableOutOfRange.length === 0,
    ranAt: new Date().toISOString(),
    pageCount: inventory.pageCount,
    commercialPosts: inventory.commercialPosts.length,
    speakableOutOfRange: inventory.speakableOutOfRange,
    indexNow,
  });
}
