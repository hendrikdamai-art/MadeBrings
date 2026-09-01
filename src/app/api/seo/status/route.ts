import { NextResponse } from "next/server";
import { getBlogPosts } from "@/lib/blog";
import { getProducts } from "@/lib/commerce";

export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.json({
    ok: true,
    cronConfigured: Boolean(process.env.CRON_SECRET),
    pages: {
      products: getProducts().length,
      posts: getBlogPosts().length,
    },
    generatedAt: new Date().toISOString(),
  });
}
