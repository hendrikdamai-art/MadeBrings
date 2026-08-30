import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

const titleTemplate = `%s · ${siteConfig.name}`;

export function absoluteUrl(path = "/") {
  const base = siteConfig.url.replace(/\/$/, "");
  if (path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} · Alcohol delivery service in Abianbase, Bali`,
    template: titleTemplate,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "MadeBrings",
    "alcohol delivery service",
    "alcohol delivery Bali",
    "liquor delivery Bali",
    "beer delivery Bali",
    "wine delivery Bali",
    "spirits delivery Bali",
    "bottle shop Bali",
    "Abianbase",
    "Badung",
    "Canggu alcohol delivery",
    "Seminyak liquor delivery",
    "villa drinks delivery Bali",
    "WhatsApp alcohol order Bali",
    "Bintang delivery Bali",
    "Arak Bali",
    "family shop Bali",
  ],
  authors: [{ name: siteConfig.owner }],
  creator: siteConfig.owner,
  publisher: siteConfig.name,
  category: "shopping",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_ID",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} · Alcohol delivery in Abianbase, Bali`,
    description: siteConfig.description,
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 1024,
        alt: "MadeBrings emblem",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: `${siteConfig.name} · Abianbase, Bali`,
    description: siteConfig.shortPitch,
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: siteConfig.googleSiteVerification
    ? { google: siteConfig.googleSiteVerification }
    : undefined,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: "/apple-icon.png",
    shortcut: "/favicon.ico",
  },
};

export function pageMetadata({
  title,
  description,
  path,
  keywords,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
}): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      type,
    },
  };
}
