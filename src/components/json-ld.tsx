import { siteConfig } from "@/lib/site";
import type { Product } from "@/lib/commerce";
import { productCopy } from "@/lib/commerce";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/locale-path";
import type { FaqItem } from "@/lib/money-copy";
import { absoluteUrl } from "@/lib/seo";
import { seoCopy } from "@/lib/seo-copy";
import {
  LLMS_FULL_PATH,
  LLMS_PATH,
  MONEY_PATH,
  serviceAreas,
} from "@/lib/seo-paths";

function origin() {
  return siteConfig.url.replace(/\/$/, "");
}

function aiDocuments() {
  return [
    {
      "@type": "DigitalDocument",
      name: "MadeBrings AI index",
      url: absoluteUrl(LLMS_PATH),
      encodingFormat: "text/plain",
    },
    {
      "@type": "DigitalDocument",
      name: "MadeBrings full AI index",
      url: absoluteUrl(LLMS_FULL_PATH),
      encodingFormat: "text/plain",
    },
  ];
}

export function localBusinessJsonLd(locale: Locale = "en") {
  const copy = seoCopy[locale];
  const url = locale === "id" ? `${origin()}/id` : siteConfig.url;
  return {
    "@context": "https://schema.org",
    "@type": "LiquorStore",
    name: siteConfig.name,
    alternateName: locale === "id" ? "Jasa antar alkohol MadeBrings" : undefined,
    inLanguage: locale === "id" ? "id-ID" : "en-ID",
    image: `${origin()}/logo.png`,
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
    areaServed: [...serviceAreas, "Badung", "Bali", "Mengwi"],
    priceRange: "Rp",
    paymentAccepted: locale === "id" ? "Tunai, Transfer Bank" : "Cash, Bank Transfer",
    currenciesAccepted: "IDR",
    knowsAbout:
      locale === "id"
        ? [
            "jasa antar alkohol Bali",
            "antar bir Canggu",
            "antar alkohol Ubud",
            "pesan bir WhatsApp",
            "toko bir Abianbase",
          ]
        : [
            "alcohol delivery Bali",
            "alcohol delivery Canggu",
            "beer delivery Bali",
            "alcohol near me Bali",
            "villa fridge restock",
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
        areaServed: [...serviceAreas],
        url: `${origin()}${locale === "id" ? `/id${MONEY_PATH}` : MONEY_PATH}`,
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
    subjectOf: aiDocuments(),
  };
}

export function webPageJsonLd({
  name,
  description,
  path,
  locale,
  dateModified,
}: {
  name: string;
  description: string;
  path: string;
  locale: Locale;
  dateModified: string;
}) {
  const url = absoluteUrl(localizedPath(locale, path));
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
    inLanguage: locale === "id" ? "id-ID" : "en-ID",
    dateModified,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: origin(),
    },
    about: {
      "@type": "LiquorStore",
      name: siteConfig.name,
      url: locale === "id" ? `${origin()}/id` : origin(),
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["[data-speakable]"],
    },
    significantLink: [absoluteUrl(LLMS_PATH), absoluteUrl(LLMS_FULL_PATH)],
    subjectOf: aiDocuments(),
    primaryImageOfPage: `${origin()}/logo.png`,
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

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
  locale: Locale,
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
      : `${origin()}${product.image}`,
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
      url: `${origin()}${path}`,
      seller: {
        "@type": "Organization",
        name: siteConfig.name,
      },
    },
  };
}

export function JsonLd({ data }: { data: unknown }) {
  const blocks = Array.isArray(data) ? data : [data];
  return (
    <>
      {blocks.map((block, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}
