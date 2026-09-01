import type { MetadataRoute } from "next";
import { getCategories, getProducts } from "@/lib/commerce";
import { getBlogPosts } from "@/lib/blog";
import { localizedPath } from "@/lib/locale-path";
import { absoluteUrl, languageAlternates } from "@/lib/seo";

function entry(path: string, extra: Partial<MetadataRoute.Sitemap[number]> = {}) {
  return {
    url: absoluteUrl(path),
    alternates: {
      languages: languageAlternates(path).languages,
    },
    ...extra,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = [
    "/",
    "/shop",
    "/blog",
    "/about",
    "/contact",
    "/alcohol-delivery-service",
    "/compare-alcohol-delivery-bali",
    "/press",
  ];
  const staticRoutes: MetadataRoute.Sitemap = staticPaths.flatMap((path) => [
    {
      ...entry(path, {
        lastModified: now,
        changeFrequency: "weekly",
        priority: path === "/" ? 1 : 0.9,
      }),
    },
    {
      url: absoluteUrl(localizedPath("id", path)),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 0.95 : 0.85,
      alternates: { languages: languageAlternates(path, "id").languages },
    },
  ]);

  const categories = getCategories().flatMap((category) => [
    {
      ...entry(category.href, {
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.8,
      }),
    },
    {
      url: absoluteUrl(localizedPath("id", category.href)),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.75,
      alternates: { languages: languageAlternates(category.href, "id").languages },
    },
  ]);

  const products = getProducts().flatMap((product) => {
    const path = `/product/${product.slug}`;
    return [
      {
        ...entry(path, {
          lastModified: now,
          changeFrequency: "weekly" as const,
          priority: 0.6,
        }),
      },
      {
        url: absoluteUrl(localizedPath("id", path)),
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.55,
        alternates: { languages: languageAlternates(path, "id").languages },
      },
    ];
  });

  const posts = getBlogPosts().flatMap((post) => {
    const path = `/blog/${post.slug}`;
    return [
      {
        ...entry(path, {
          lastModified: new Date(post.dateModified),
          changeFrequency: "monthly" as const,
          priority: 0.7,
        }),
      },
      {
        url: absoluteUrl(localizedPath("id", path)),
        lastModified: new Date(post.dateModified),
        changeFrequency: "monthly" as const,
        priority: 0.65,
        alternates: { languages: languageAlternates(path, "id").languages },
      },
    ];
  });

  return [...staticRoutes, ...categories, ...products, ...posts];
}
