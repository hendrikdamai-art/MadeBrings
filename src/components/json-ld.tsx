import { siteConfig } from "@/lib/site";
import type { Product } from "@/lib/commerce";
import { productCopy } from "@/lib/commerce";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/locale-path";
import { seoCopy } from "@/lib/seo-copy";
import { absoluteUrl } from "@/lib/seo";
import {
  BOOKING_PATH,
  CONTENT_UPDATED,
  LLMS_FULL_PATH,
  LLMS_PATH,
  SERVICE_AREAS,
  type FaqItem,
} from "@/lib/seo-pages";

export function localBusinessJsonLd(locale: Locale = "en") {
  const copy = seoCopy[locale];
  const url =
    locale === "id" ? `${siteConfig.url.replace(/\/$/, "")}/id` : siteConfig.url;
  return {
    "@context": "https://schema.org",
    "@type": "LiquorStore",
    name: siteConfig.name,
    alternateName: locale === "id" ? "Jasa antar alkohol MadeBrings" : undefined,
    inLanguage: locale === "id" ? "id-ID" : "en-ID",
    image: `${siteConfig.url}/logo.png`,
    url,
    telephone: `+${siteConfig.whatsappNumber}`,
    description: copy.homeDescription,
    founder: {
      "@type": "Person",
      name: siteConfig.owner,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.line1,
      addressLocality: siteConfig.address.district,
      addressRegion: siteConfig.address.regency,
      postalCode: siteConfig.address.postalCode,
      addressCountry: "ID",
    },
    hasMap: siteConfig.social.maps,
    areaServed: [...SERVICE_AREAS, "Badung", "Mengwi", "Bali"],
    priceRange: "Rp",
    paymentAccepted: locale === "id" ? "Tunai, Transfer Bank" : "Cash, Bank Transfer",
    currenciesAccepted: "IDR",
    knowsAbout:
      locale === "id"
        ? [
            "jasa antar alkohol Bali",
            "antar bir Canggu",
            "antar alkohol Seminyak",
            "pesan bir WhatsApp",
            "di mana beli alkohol Bali",
            "toko bir Abianbase",
          ]
        : [
            "alcohol delivery Bali",
            "alcohol delivery Canggu",
            "beer delivery Bali",
            "where to buy alcohol in Bali",
            "villa drinks delivery",
          ],
    availableLanguage: ["id", "en"],
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name:
          locale === "id" ? "Jasa antar alkohol" : "Alcohol delivery service",
        serviceType:
          locale === "id" ? "Pengantaran alkohol" : "Alcohol delivery",
        areaServed: [...SERVICE_AREAS],
        url: absoluteUrl(localizedPath(locale, BOOKING_PATH)),
        provider: {
          "@type": "Organization",
          name: siteConfig.name,
        },
      },
    },
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.tripadvisor,
      siteConfig.social.maps,
      absoluteUrl(LLMS_PATH),
      absoluteUrl(LLMS_FULL_PATH),
    ],
    subjectOf: {
      "@type": "CreativeWork",
      url: absoluteUrl(LLMS_PATH),
      name: "MadeBrings AI index",
    },
  };
}

export function productJsonLd(product: Product, locale: Locale = "en") {
  const copy = productCopy(product, locale);
  const path = localizedPath(locale, `/product/${product.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: copy.description,
    inLanguage: locale === "id" ? "id-ID" : "en-ID",
    image: product.image.startsWith("http")
      ? product.image
      : `${siteConfig.url}${product.image}`,
    sku: product.id,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "IDR",
      price: product.priceIdr,
      availability: "https://schema.org/LimitedAvailability",
      url: `${siteConfig.url.replace(/\/$/, "")}${path}`,
      seller: {
        "@type": "Organization",
        name: siteConfig.name,
      },
    },
  };
}

export function faqJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function webPageJsonLd({
  locale = "en",
  name,
  description,
  path,
  dateModified = CONTENT_UPDATED,
}: {
  locale?: Locale;
  name: string;
  description: string;
  path: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: absoluteUrl(localizedPath(locale, path)),
    inLanguage: locale === "id" ? "id-ID" : "en-ID",
    dateModified,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    about: {
      "@type": "Service",
      name:
        locale === "id" ? "Jasa antar alkohol Bali" : "Alcohol delivery Bali",
      provider: { "@type": "Organization", name: siteConfig.name },
      areaServed: [...SERVICE_AREAS],
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["[data-speakable]"],
    },
    describedBy: absoluteUrl(LLMS_PATH),
    relatedLink: [absoluteUrl(LLMS_PATH), absoluteUrl(LLMS_FULL_PATH)],
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
  locale: Locale = "en",
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(localizedPath(locale, item.path)),
    })),
  };
}

export function howToJsonLd({
  name,
  description,
  steps,
  locale = "en",
  path,
}: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
  locale?: Locale;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    inLanguage: locale === "id" ? "id-ID" : "en-ID",
    url: absoluteUrl(localizedPath(locale, path)),
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
