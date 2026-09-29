import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const aiCrawlers = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "Google-Extended",
  "PerplexityBot",
  "ClaudeBot",
  "Anthropic-AI",
  "Applebot-Extended",
  "CCBot",
  "Bytespider",
  "Googlebot",
];

export default function robots(): MetadataRoute.Robots {
  const origin = siteConfig.url.replace(/\/$/, "");
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      ...aiCrawlers.map((userAgent) => ({
        userAgent,
        allow: "/",
      })),
    ],
    sitemap: `${origin}/sitemap.xml`,
    host: origin,
  };
}
