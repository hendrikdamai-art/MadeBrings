import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/locale-path";
import { seoCopy } from "@/lib/seo-copy";
import { siteConfig } from "@/lib/site";

const titleTemplate = `%s · ${siteConfig.name}`;

export function absoluteUrl(path = "/") {
  const base = siteConfig.url.replace(/\/$/, "");
  if (path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function languageAlternates(path: string, locale: Locale = "en") {
  const englishPath = path === "/id" ? "/" : path.replace(/^\/id/, "") || "/";
  const indonesianPath = localizedPath("id", englishPath);
  const canonical = locale === "id" ? indonesianPath : englishPath;
  return {
    canonical,
    languages: {
      en: absoluteUrl(englishPath),
      id: absoluteUrl(indonesianPath),
      "x-default": absoluteUrl(englishPath),
    },
  };
}

export function defaultMetadataFor(locale: Locale = "en"): Metadata {
  const copy = seoCopy[locale];
  const homePath = locale === "id" ? "/id" : "/";
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: copy.homeTitle,
      template: titleTemplate,
    },
    description: copy.homeDescription,
    applicationName: siteConfig.name,
    keywords: copy.keywords,
    authors: [{ name: siteConfig.owner }],
    creator: siteConfig.owner,
    publisher: siteConfig.name,
    category: "shopping",
    alternates: languageAlternates("/", locale),
    openGraph: {
      type: "website",
      locale: locale === "id" ? "id_ID" : "en_ID",
      alternateLocale: locale === "id" ? ["en_ID"] : ["id_ID"],
      url: absoluteUrl(homePath),
      siteName: siteConfig.name,
      title: copy.ogTitle,
      description: copy.homeDescription,
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
      title: copy.ogTitle,
      description: copy.shortPitch,
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
}

export const defaultMetadata: Metadata = defaultMetadataFor("en");

export function pageMetadata({
  title,
  description,
  path,
  keywords,
  type = "website",
  locale = "en",
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
  locale?: Locale;
}): Metadata {
  const localized = localizedPath(locale, path);
  const url = absoluteUrl(localized);
  const copy = seoCopy[locale];
  return {
    title,
    description,
    keywords: keywords ?? copy.keywords,
    alternates: languageAlternates(path, locale),
    openGraph: {
      title,
      description,
      url,
      locale: locale === "id" ? "id_ID" : "en_ID",
      alternateLocale: locale === "id" ? ["en_ID"] : ["id_ID"],
      type,
    },
  };
}
