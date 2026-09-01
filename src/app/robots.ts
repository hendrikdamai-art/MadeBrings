import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "Google-Extended",
  "Google-CloudVertexBot",
  "Gemini-Deep-Research",
  "Anthropic-AI",
  "ClaudeBot",
  "Claude-Web",
  "PerplexityBot",
  "Applebot-Extended",
  "Bytespider",
  "CCBot",
  "cohere-ai",
  "YouBot",
  "Amazonbot",
  "meta-externalagent",
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
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
      })),
    ],
    sitemap: `${origin}/sitemap.xml`,
    host: origin,
  };
}
