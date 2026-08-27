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
    default: `${siteConfig.name} · Family liquor & beer shop in Abianbase, Bali`,
    template: titleTemplate,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "MadeBrings",
    "Abianbase",
    "Badung",
    "Bali liquor shop",
    "beer delivery Bali",
    "family shop Bali",
    "WhatsApp order Bali",
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
    title: `${siteConfig.name} · Neighborhood prices in Abianbase`,
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
    icon: "/logo.png",
    apple: "/apple-touch-icon.png",
  },
};

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
    },
  };
}
