import { llmsFullBody } from "@/lib/seo/llms";

export const revalidate = 3600;

export function GET() {
  return new Response(llmsFullBody(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
