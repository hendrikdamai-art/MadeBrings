import { NextResponse } from "next/server";
import {
  revalidateSeoPaths,
  seoCronAuthorized,
  seoStatusPayload,
} from "@/lib/seo-maintenance";

export const dynamic = "force-dynamic";

export function GET(request: Request) {
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
  return NextResponse.json({
    ...seoStatusPayload(),
    revalidated: paths,
    ranAt: new Date().toISOString(),
  });
}
