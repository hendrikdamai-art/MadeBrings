import { absoluteUrl } from "@/lib/seo";
import type { FaqItem } from "@/lib/commercial";
import { LLMS_FULL_PATH, LLMS_PATH } from "@/lib/geo";
import { localizedPath } from "@/lib/locale-path";
import type { Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

export function faqJsonLd(faqs: FaqItem[]) {
  if (faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function speakableSpec() {
  return {
    "@type": "SpeakableSpecification",
    cssSelector: ["[data-speakable]"],
  };
}

export function webPageJsonLd({
  locale,
  path,
  name,
  description,
  datePublished,
  dateModified,
  type = "WebPage",
}: {
  locale: Locale;
  path: string;
  name: string;
  description: string;
  datePublished?: string;
  dateModified: string;
  type?: "WebPage" | "AboutPage" | "CollectionPage";
}) {
  const localized = localizedPath(locale, path);
  return {
    "@context": "https://schema.org",
    "@type": type,
    name,
    description,
    inLanguage: locale === "id" ? "id-ID" : "en-ID",
    url: absoluteUrl(localized),
    datePublished,
    dateModified,
    isAccessibleForFree: true,
    speakable: speakableSpec(),
    relatedLink: [absoluteUrl(LLMS_PATH), absoluteUrl(LLMS_FULL_PATH)],
    significantLink: absoluteUrl("/alcohol-delivery-service"),
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}
