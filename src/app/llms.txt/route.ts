import { NextResponse } from "next/server";
import { LLMS_CACHE_CONTROL, buildLlmsTxt } from "@/lib/llms";

export function GET() {
  return new NextResponse(buildLlmsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": LLMS_CACHE_CONTROL,
    },
  });
}
