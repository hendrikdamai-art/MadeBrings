import { getBlogPosts } from "@/lib/blog";
import { commercialIdCopy } from "@/lib/commercial-i18n";
import { compareCopy } from "@/lib/compare";
import { getCategories, getProducts } from "@/lib/commerce";
import { speakableBlocks, wordCount } from "@/lib/delivery";
import { localizedPath } from "@/lib/locale-path";
import { absoluteUrl } from "@/lib/seo";

export function publicSeoPages() {
  const staticPaths = [
    "/",
    "/shop",
    "/blog",
    "/about",
    "/contact",
    "/press",
    "/compare/bali-alcohol-delivery",
  ];
  const categories = getCategories().map((category) => category.href);
  const products = getProducts().map((product) => `/product/${product.slug}`);
  const posts = getBlogPosts().map((post) => `/blog/${post.slug}`);
  return [...staticPaths, ...categories, ...products, ...posts];
}

export function getSeoInventory() {
  const pages = publicSeoPages();
  const posts = getBlogPosts();
  const speakable: {
    id: string;
    locale: "en" | "id";
    text: string;
    words: number;
  }[] = [
    ...speakableBlocks(),
    {
      id: "compare-en",
      locale: "en" as const,
      text: compareCopy.en.answer,
      words: wordCount(compareCopy.en.answer),
    },
    {
      id: "compare-id",
      locale: "id" as const,
      text: compareCopy.id.answer,
      words: wordCount(compareCopy.id.answer),
    },
    ...posts
      .filter((post) => post.answer)
      .flatMap((post) => {
        const blocks: {
          id: string;
          locale: "en" | "id";
          text: string;
          words: number;
        }[] = [
          {
            id: post.slug,
            locale: "en",
            text: post.answer ?? "",
            words: wordCount(post.answer ?? ""),
          },
        ];
        const idCopy = commercialIdCopy[post.slug];
        if (idCopy?.answer) {
          blocks.push({
            id: `${post.slug}-id`,
            locale: "id" as const,
            text: idCopy.answer,
            words: wordCount(idCopy.answer),
          });
        }
        return blocks;
      }),
  ];

  return {
    generatedAt: new Date().toISOString(),
    pageCount: pages.length * 2,
    englishPages: pages.map((path) => absoluteUrl(path)),
    indonesianPages: pages.map((path) => absoluteUrl(localizedPath("id", path))),
    commercialPosts: posts
      .filter((post) => post.intent === "commercial")
      .map((post) => ({
        slug: post.slug,
        query: post.query,
        url: absoluteUrl(`/blog/${post.slug}`),
      })),
    speakable,
    speakableOutOfRange: speakable.filter(
      (block) => block.words < 130 || block.words > 170,
    ),
  };
}
