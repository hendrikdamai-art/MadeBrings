import { LLMS_CACHE_CONTROL, llmsFullTxt } from "@/lib/llms-content";

export const dynamic = "force-static";

export function GET() {
  return new Response(llmsFullTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": LLMS_CACHE_CONTROL,
    },
  });
}
