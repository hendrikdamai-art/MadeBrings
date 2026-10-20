import { revalidatePath } from "next/cache";
import { getBlogPosts } from "@/lib/blog";
import {
  BOOKING_PATH,
  COMPARE_PATH,
  LLMS_FULL_PATH,
  LLMS_PATH,
  PRESS_PATH,
} from "@/lib/seo-pages";

export const SEO_REVALIDATE_PATHS = [
  "/",
  BOOKING_PATH,
  PRESS_PATH,
  COMPARE_PATH,
  "/shop",
  "/blog",
  "/about",
  "/contact",
  "/sitemap.xml",
  LLMS_PATH,
  LLMS_FULL_PATH,
] as const;

export function seoCronAuthorized(request: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret) return false;
  const url = new URL(request.url);
  const querySecret = url.searchParams.get("secret");
  const header = request.headers.get("authorization");
  const bearer = header?.startsWith("Bearer ") ? header.slice(7) : null;
  return querySecret === secret || bearer === secret;
}

export function revalidateSeoPaths() {
  // revalidatePath tags the App Router file tree, not rewritten /id URLs.
  const posts = getBlogPosts("en").map((post) => `/blog/${post.slug}`);
  const unique = Array.from(new Set([...SEO_REVALIDATE_PATHS, ...posts]));
  for (const path of unique) {
    revalidatePath(path);
  }
  revalidatePath("/blog/[slug]", "page");
  revalidatePath("/shop/[category]", "page");
  revalidatePath("/product/[slug]", "page");
  return unique;
}
