import { timingSafeEqual } from "crypto";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { getBlogPosts } from "@/lib/blog";
import {
  COMPARISON_PATH,
  MONEY_PATH,
  PRESS_PATH,
} from "@/lib/seo/facts";

export const dynamic = "force-dynamic";

function authorized(request: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret) return false;
  const header = request.headers.get("authorization");
  const bearer = header?.startsWith("Bearer ") ? header.slice(7) : "";
  const a = Buffer.from(bearer);
  const b = Buffer.from(secret);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export async function GET(request: Request) {
  if (!authorized(request)) {
    return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }

  const paths = [
    "/",
    MONEY_PATH,
    COMPARISON_PATH,
    PRESS_PATH,
    "/blog",
    "/shop",
    "/sitemap.xml",
    "/llms.txt",
    "/llms-full.txt",
    ...getBlogPosts().map((post) => `/blog/${post.slug}`),
  ];

  for (const path of paths) {
    revalidatePath(path);
  }

  return NextResponse.json({
    ok: true,
    revalidated: paths.length,
    at: new Date().toISOString(),
  });
}
