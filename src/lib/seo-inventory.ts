import { getBlogPosts } from "@/lib/blog";
import { getCategories, getProducts } from "@/lib/commerce";
import { speakableBlocks, wordCount } from "@/lib/delivery";
import { localizedPath } from "@/lib/locale-path";
import { absoluteUrl } from "@/lib/seo";

export function publicSeoPages() {
  const staticPaths = ["/", "/shop", "/blog", "/about", "/contact"];
  const categories = getCategories().map((category) => category.href);
  const products = getProducts().map((product) => `/product/${product.slug}`);
  const posts = getBlogPosts().map((post) => `/blog/${post.slug}`);
  return [...staticPaths, ...categories, ...products, ...posts];
}

export function getSeoInventory() {
  const pages = publicSeoPages();
  const posts = getBlogPosts();
  const speakable = [
    ...speakableBlocks(),
    ...posts
      .filter((post) => post.answer)
      .map((post) => ({
        id: post.slug,
        locale: "en" as const,
        text: post.answer ?? "",
        words: wordCount(post.answer ?? ""),
      })),
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
