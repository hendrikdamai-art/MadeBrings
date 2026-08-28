import { siteConfig } from "@/lib/site";
import type { Product } from "@/lib/commerce";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LiquorStore",
    name: siteConfig.name,
    image: `${siteConfig.url}/logo.png`,
    url: siteConfig.url,
    telephone: `+${siteConfig.whatsappNumber}`,
    description: siteConfig.description,
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
    areaServed: ["Abianbase", "Badung", "Bali", "Canggu", "Seminyak"],
    priceRange: "Rp",
    paymentAccepted: "Cash, Bank Transfer",
    currenciesAccepted: "IDR",
    knowsAbout: [
      "alcohol delivery service",
      "beer delivery Bali",
      "liquor delivery Bali",
      "mixers",
    ],
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Alcohol delivery service",
        serviceType: "Alcohol delivery",
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

export function productJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
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
      url: `${siteConfig.url}/product/${product.slug}`,
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
