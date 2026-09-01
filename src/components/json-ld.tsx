import { siteConfig } from "@/lib/site";
import type { Product } from "@/lib/commerce";
import { productCopy } from "@/lib/commerce";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/locale-path";
import { absoluteUrl } from "@/lib/seo";
import { seoCopy } from "@/lib/seo-copy";
import {
  CONTENT_UPDATED,
  LLMS_FULL_PATH,
  LLMS_PATH,
  touristAreas,
} from "@/lib/seo/facts";
import type { FaqItem } from "@/lib/seo/money";

function siteOrigin() {
  return siteConfig.url.replace(/\/$/, "");
}

export function localBusinessJsonLd(locale: Locale = "en") {
  const copy = seoCopy[locale];
  const url =
    locale === "id" ? `${siteOrigin()}/id` : siteConfig.url;
  return {
    "@context": "https://schema.org",
    "@type": "LiquorStore",
    "@id": `${siteOrigin()}#business`,
    name: siteConfig.name,
    alternateName: locale === "id" ? "Jasa antar alkohol MadeBrings" : undefined,
    inLanguage: locale === "id" ? "id-ID" : "en-ID",
    image: `${siteOrigin()}/logo.png`,
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
    areaServed: [...touristAreas, "Mengwi", "Badung", "Bali"],
    priceRange: "Rp",
    paymentAccepted: locale === "id" ? "Tunai, Transfer Bank" : "Cash, Bank Transfer",
    currenciesAccepted: "IDR",
    knowsAbout:
      locale === "id"
        ? [
            "jasa antar alkohol",
            "antar bir Bali",
            "kirim minuman keras Bali",
            "pesan bir WhatsApp",
            "toko bir Abianbase",
          ]
        : [
            "alcohol delivery service",
            "beer delivery Bali",
            "liquor delivery Bali",
            "alcohol near me",
            "mixers",
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
        areaServed: touristAreas.join(", "),
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
      `${siteOrigin()}${LLMS_PATH}`,
      `${siteOrigin()}${LLMS_FULL_PATH}`,
    ],
    subjectOf: {
      "@type": "CreativeWork",
      url: `${siteOrigin()}${LLMS_PATH}`,
      name: "MadeBrings AI index (llms.txt)",
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
  title,
  description,
  path,
  locale = "en",
  dateModified = CONTENT_UPDATED,
  speakable = true,
}: {
  title: string;
  description: string;
  path: string;
  locale?: Locale;
  dateModified?: string;
  speakable?: boolean;
}) {
  const url = absoluteUrl(localizedPath(locale, path));
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    inLanguage: locale === "id" ? "id-ID" : "en-ID",
    dateModified,
    speakable: speakable
      ? {
          "@type": "SpeakableSpecification",
          cssSelector: ["[data-speakable]"],
        }
      : undefined,
    describedBy: `${siteOrigin()}${LLMS_PATH}`,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteOrigin(),
    },
    about: { "@id": `${siteOrigin()}#business` },
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

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
