import type { MetadataRoute } from "next";
import { getCategories, getProducts } from "@/lib/commerce";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/shop"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/about"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/contact"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const categories = getCategories().map((category) => ({
    url: absoluteUrl(category.href),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const products = getProducts().map((product) => ({
    url: absoluteUrl(`/product/${product.slug}`),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...categories, ...products];
}
