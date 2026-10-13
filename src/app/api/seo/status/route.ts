import { NextResponse } from "next/server";
import { collectSeoHealth } from "@/lib/seo-health";

export const dynamic = "force-dynamic";

export async function GET() {
  const health = collectSeoHealth();
  return NextResponse.json({
    ok: health.ok,
    generatedAt: health.generatedAt,
    pageCount: health.pageCount,
    speakableBlocks: health.speakableBlocks,
    issueCount: health.issues.length,
    cronSecretConfigured: Boolean(process.env.CRON_SECRET),
    siteUrlConfigured: Boolean(process.env.NEXT_PUBLIC_SITE_URL),
  });
}
