import { siteConfig } from "@/lib/site";
import type { Product } from "@/lib/commerce";
import { productCopy } from "@/lib/commerce";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/locale-path";
import { seoCopy } from "@/lib/seo-copy";
import {
  MONEY_PAGE_MODIFIED,
  type FaqItem,
  serviceAreas,
} from "@/lib/delivery";
import { absoluteUrl } from "@/lib/seo";

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
    areaServed: serviceAreas.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
    priceRange: "Rp",
    paymentAccepted: locale === "id" ? "Tunai, Transfer Bank" : "Cash, Bank Transfer",
    currenciesAccepted: "IDR",
    knowsAbout:
      locale === "id"
        ? [
            "jasa antar alkohol Canggu",
            "antar bir Bali",
            "kirim minuman keras Bali",
            "pesan bir WhatsApp",
            "toko bir Abianbase",
          ]
        : [
            "alcohol delivery Canggu",
            "alcohol delivery Seminyak",
            "beer delivery Bali",
            "alcohol delivery Kuta",
            "villa drinks delivery",
          ],
    availableLanguage: ["id", "en"],
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name:
          locale === "id"
            ? "Jasa antar alkohol Canggu, Seminyak, dan Bali"
            : "Alcohol delivery in Canggu, Seminyak, and Bali",
        serviceType:
          locale === "id" ? "Pengantaran alkohol" : "Alcohol delivery",
        areaServed: serviceAreas.join(", "),
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
    ],
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
  path = "/",
  name,
  description,
  dateModified = MONEY_PAGE_MODIFIED,
  speakable = true,
}: {
  locale?: Locale;
  path?: string;
  name: string;
  description: string;
  dateModified?: string;
  speakable?: boolean;
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
      url: siteConfig.url,
    },
    about: {
      "@type": "Service",
      name:
        locale === "id" ? "Jasa antar alkohol Bali" : "Alcohol delivery Bali",
    },
    speakable: speakable
      ? {
          "@type": "SpeakableSpecification",
          cssSelector: ["[data-speakable]"],
        }
      : undefined,
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
