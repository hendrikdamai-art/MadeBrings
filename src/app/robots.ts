import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const aiBots = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "anthropic-ai",
  "Applebot-Extended",
  "Google-Extended",
  "PerplexityBot",
  "Bytespider",
  "CCBot",
  "cohere-ai",
  "YouBot",
  "Amazonbot",
];

export default function robots(): MetadataRoute.Robots {
  const origin = siteConfig.url.replace(/\/$/, "");
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: aiBots,
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${origin}/sitemap.xml`,
    host: origin,
  };
}
