import { NextResponse } from "next/server";
import { seoCronAuthorized, seoStatusPayload } from "@/lib/seo-maintenance";

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
  return NextResponse.json(seoStatusPayload());
}
