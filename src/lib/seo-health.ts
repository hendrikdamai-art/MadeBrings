import { getBlogPosts } from "@/lib/blog";
import {
  BOOKING_PATH,
  COMPARE_PATH,
  PRESS_PATH,
  finishSpeakable,
  wordCount,
} from "@/lib/seo-pages";
import { llmsDirectAnswers, llmsFullTxt, llmsTxt } from "@/lib/llms";
import { moneyCopy, homeSeoCopy } from "@/lib/money-page";
import { comparisonCopy } from "@/lib/comparison-page";
import { pressCopy } from "@/lib/press-kit";
import { commercialArticles } from "@/lib/commercial-articles";

export type SeoHealthIssue = {
  level: "error" | "warn";
  message: string;
};

export function collectSeoHealth() {
  const issues: SeoHealthIssue[] = [];
  const pages = [
    BOOKING_PATH,
    COMPARE_PATH,
    PRESS_PATH,
    "/shop",
    "/blog",
    ...getBlogPosts("en").map((post) => `/blog/${post.slug}`),
  ];

  const speakables = [
    ["money.en", moneyCopy.en.speakable],
    ["money.id", moneyCopy.id.speakable],
    ["home.en", homeSeoCopy.en.speakable],
    ["home.id", homeSeoCopy.id.speakable],
    ["compare.en", finishSpeakable("en", comparisonCopy.en.speakable)],
    ["compare.id", finishSpeakable("id", comparisonCopy.id.speakable)],
    ["press.en", finishSpeakable("en", pressCopy.en.speakable)],
    ["press.id", finishSpeakable("id", pressCopy.id.speakable)],
    ...commercialArticles.flatMap((article) => [
      [`${article.slug}.en`, finishSpeakable("en", article.copy.en.speakable)] as const,
      [`${article.slug}.id`, finishSpeakable("id", article.copy.id.speakable)] as const,
    ]),
  ] as const;

  for (const [label, text] of speakables) {
    const count = wordCount(text);
    if (count < 130 || count > 170) {
      issues.push({
        level: "error",
        message: `${label} speakable is ${count} words (need 130–170)`,
      });
    }
  }

  for (const article of commercialArticles) {
    if (!article.copy.en.faqs.length || !article.copy.en.inclusions.length) {
      issues.push({
        level: "error",
        message: `${article.slug} missing FAQ or inclusions`,
      });
    }
  }

  const llms = llmsTxt();
  const full = llmsFullTxt();
  if (!llms.includes(BOOKING_PATH) || !full.includes("Bintang")) {
    issues.push({ level: "error", message: "llms files missing booking or price facts" });
  }

  const answers = llmsDirectAnswers();
  if (answers.length < 8) {
    issues.push({ level: "warn", message: `Only ${answers.length} direct-answer rows` });
  }

  return {
    ok: issues.filter((issue) => issue.level === "error").length === 0,
    generatedAt: new Date().toISOString(),
    pageCount: pages.length,
    pages,
    speakableBlocks: speakables.length,
    llmsBytes: llms.length,
    llmsFullBytes: full.length,
    issues,
  };
}
