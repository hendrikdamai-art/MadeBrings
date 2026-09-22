import { revalidatePath } from "next/cache";
import { getBlogPosts } from "@/lib/blog";
import { getMoneyCopy } from "@/lib/money-copy";
import { getPressCopy } from "@/lib/press-copy";
import { getCompareCopy } from "@/lib/compare-copy";
import { commercialArticles } from "@/lib/commercial-articles";
import {
  COMPARE_PATH,
  LLMS_FULL_PATH,
  LLMS_PATH,
  MONEY_PATH,
  PRESS_PATH,
} from "@/lib/seo-paths";
import { speakableStats } from "@/lib/speakable";

export const SEO_REVALIDATE_PATHS = [
  "/",
  MONEY_PATH,
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
  const extra = getBlogPosts().flatMap((post) => [
    `/blog/${post.slug}`,
    `/blog/[slug]`,
  ]);
  const unique = Array.from(new Set([...SEO_REVALIDATE_PATHS, ...extra.filter((path) => !path.includes("["))]));
  for (const path of unique) {
    revalidatePath(path);
  }
  revalidatePath("/blog/[slug]", "page");
  revalidatePath("/shop/[category]", "page");
  revalidatePath("/product/[slug]", "page");
  return unique;
}

export function seoStatusPayload() {
  const moneyEn = getMoneyCopy("en").speakable;
  const moneyId = getMoneyCopy("id").speakable;
  const pressEn = getPressCopy("en").speakable;
  const compareEn = getCompareCopy("en").speakable;
  const articleBlocks = Object.fromEntries(
    commercialArticles.flatMap((post) => [
      [post.slug, post.speakable ?? ""],
      [`${post.slug}-id`, post.idCopy?.speakable ?? ""],
    ]),
  );

  return {
    ok: true,
    service: "madebrings-seo",
    cronConfigured: Boolean(process.env.CRON_SECRET),
    catalogSeed: false,
    note: "Catalog is TypeScript, not a CMS. Cron only revalidates paths. No seed script.",
    paths: SEO_REVALIDATE_PATHS,
    speakable: speakableStats({
      moneyEn,
      moneyId,
      pressEn,
      compareEn,
      ...articleBlocks,
    }),
  };
}
