import { siteConfig } from "@/lib/site";
import type { Product } from "@/lib/commerce";
import { productCopy } from "@/lib/commerce";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/locale-path";
import { seoCopy } from "@/lib/seo-copy";

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
    areaServed: ["Abianbase", "Badung", "Bali", "Canggu", "Seminyak", "Mengwi"],
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
        areaServed: "Badung, Bali",
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
