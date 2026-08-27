export const siteConfig = {
  name: "MadeBrings",
  legalName: "MadeBrings",
  tagline: "Bali liquor and beer delivery from a family shop in Abianbase",
  shortPitch:
    "A small local shop in Abianbase, Badung. Neighborhood prices. Chat us on WhatsApp for stock and delivery.",
  description:
    "MadeBrings is a family-run liquor and beer shop in Abianbase, Badung, Bali. Browse beer, bottled drinks, mixers, ice, and snacks, then chat on WhatsApp to check stock, arrange delivery, and pay by cash or bank transfer. Delivery is not free.",
  owner: "Made Hendrik",
  address: {
    line1: "Abianbase",
    district: "Mengwi",
    regency: "Badung",
    region: "Bali",
    country: "Indonesia",
    postalCode: "80351",
    display: "Abianbase, Badung, Bali",
  },
  locale: "en_ID",
  currency: "IDR",
  ageLimit: 21,
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://127.0.0.1:43127"),
  whatsappNumber:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281234567890",
  googleSiteVerification:
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  social: {
    whatsapp:
      process.env.NEXT_PUBLIC_WHATSAPP_URL ||
      `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281234567890"}`,
    instagram:
      process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
      "https://www.instagram.com/madebrings",
    facebook:
      process.env.NEXT_PUBLIC_FACEBOOK_URL ||
      "https://www.facebook.com/madebrings",
    tripadvisor:
      process.env.NEXT_PUBLIC_TRIPADVISOR_URL ||
      "https://www.tripadvisor.com/Search?q=MadeBrings%20Abianbase%20Bali",
    maps:
      process.env.NEXT_PUBLIC_MAPS_URL ||
      "https://www.google.com/maps/search/?api=1&query=Abianbase+Badung+Bali",
  },
} as const;

export const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/shop/beer-cider", label: "Beer & cider" },
  { href: "/shop/mixers", label: "Mixers" },
  { href: "/shop/ice-water", label: "Ice & water" },
  { href: "/shop/snacks", label: "Snacks" },
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact" },
] as const;

export function whatsappHref(prefilledText?: string) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  if (!prefilledText) return base;
  return `${base}?text=${encodeURIComponent(prefilledText)}`;
}

export const defaultWhatsappGreeting =
  "Hi MadeBrings, I would like to check stock and arrange delivery from your shop in Abianbase.";
