import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const AI_BOTS = [
  "GPTBot",
  "ChatGPT-User",
  "Google-Extended",
  "GoogleOther",
  "PerplexityBot",
  "ClaudeBot",
  "Anthropic-AI",
  "Applebot-Extended",
  "CCBot",
  "cohere-ai",
  "Bytespider",
  "meta-externalagent",
  "FacebookBot",
];

export default function robots(): MetadataRoute.Robots {
  const origin = siteConfig.url.replace(/\/$/, "");
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      ...AI_BOTS.map((userAgent) => ({
        userAgent,
        allow: ["/", "/llms.txt", "/llms-full.txt"],
      })),
    ],
    sitemap: `${origin}/sitemap.xml`,
    host: origin,
  };
}
