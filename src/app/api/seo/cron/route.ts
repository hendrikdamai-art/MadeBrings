import { NextResponse } from "next/server";
import { collectSeoHealth } from "@/lib/seo-health";
import { revalidateSeoPaths, seoCronAuthorized } from "@/lib/seo-maintenance";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  if (!process.env.CRON_SECRET) {
    return NextResponse.json(
      { ok: false, error: "CRON_SECRET is not set" },
      { status: 401 },
    );
  }
  if (!seoCronAuthorized(request)) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const paths = revalidateSeoPaths();
  const health = collectSeoHealth();
  return NextResponse.json({
    ...health,
    source: "cron",
    revalidated: paths,
  });
}
