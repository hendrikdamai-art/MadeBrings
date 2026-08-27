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
    areaServed: "Badung, Bali",
    priceRange: "Rp",
    paymentAccepted: "Cash, Bank Transfer",
    currenciesAccepted: "IDR",
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
    image: product.image,
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
