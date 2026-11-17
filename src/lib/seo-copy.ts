import type { Locale } from "@/lib/i18n";

export const indonesianKeywords = [
  "jasa antar alkohol Bali",
  "antar bir Bali",
  "kirim minuman keras Bali",
  "toko bir Abianbase",
  "pesan bir WhatsApp",
  "antar minuman villa Bali",
  "delivery bir Canggu",
  "delivery alkohol Seminyak",
  "delivery alkohol Kuta",
  "antar bir villa Canggu",
  "delivery alkohol Badung",
  "toko minuman keras Mengwi",
  "harga bir Bali",
  "antar Bintang Bali",
  "es batu antar villa",
  "Smirnoff Ice Bali",
  "layanan antar alkohol",
  "pesan alkohol Bali",
  "antar minuman Seminyak",
];

export const englishKeywords = [
  "MadeBrings",
  "alcohol delivery service",
  "alcohol delivery Bali",
  "liquor delivery Bali",
  "beer delivery Bali",
  "wine delivery Bali",
  "spirits delivery Bali",
  "bottle shop Bali",
  "Abianbase",
  "Badung",
  "Canggu alcohol delivery",
  "Seminyak liquor delivery",
  "Kuta alcohol delivery",
  "Ubud alcohol delivery",
  "Tanah Lot alcohol delivery",
  "beer delivery Canggu",
  "beer delivery Seminyak",
  "Bintang delivery Canggu",
  "villa drinks delivery Bali",
  "WhatsApp alcohol order Bali",
  "Bintang delivery Bali",
  "alcohol near me Bali",
  "Arak Bali",
  "family shop Bali",
];

export const seoCopy: Record<
  Locale,
  {
    homeTitle: string;
    homeDescription: string;
    shopTitle: string;
    shopDescription: string;
    aboutTitle: string;
    aboutDescription: string;
    contactTitle: string;
    contactDescription: string;
    blogTitle: string;
    blogDescription: string;
    ogTitle: string;
    shortPitch: string;
    keywords: string[];
  }
> = {
  en: {
    homeTitle: "Alcohol Delivery in Canggu, Seminyak & Bali",
    homeDescription:
      "WhatsApp alcohol delivery from a family shop in Abianbase. Beer, cider, mixers, ice, and water to villas in Canggu, Seminyak, Kuta, Ubud, and Tanah Lot. Neighborhood prices. 21+.",
    shopTitle: "Shop beer, ice & mixer delivery",
    shopDescription:
      "Order Bintang, Singaraja, Smirnoff Ice, cola, and ice from MadeBrings. Alcohol delivery in Canggu, Seminyak, Kuta, and nearby Bali via WhatsApp. Cash or bank transfer.",
    aboutTitle: "About our Canggu & Bali alcohol delivery",
    aboutDescription:
      "MadeBrings is Made Hendrik’s family alcohol delivery shop in Abianbase, Badung. Beer, mixers, and ice to Canggu, Seminyak, Kuta, Ubud, and Tanah Lot. WhatsApp checkout.",
    contactTitle: "WhatsApp alcohol delivery in Canggu & Bali",
    contactDescription:
      "Chat MadeBrings on WhatsApp to order alcohol delivery in Canggu, Seminyak, Kuta, Ubud, or Tanah Lot. Confirm stock, pin, and cash or bank transfer.",
    blogTitle: "Bali alcohol delivery guides",
    blogDescription:
      "How to order alcohol delivery in Canggu, beer delivery in Seminyak, and a Kuta arrival run from MadeBrings in Abianbase. Prices, inclusions, and WhatsApp booking.",
    ogTitle: "Alcohol delivery in Canggu, Seminyak & Bali · MadeBrings",
    shortPitch:
      "Family alcohol delivery in Canggu, Seminyak, Kuta, Ubud, and Tanah Lot. Neighborhood beer prices. Chat WhatsApp to order.",
    keywords: [...englishKeywords, ...indonesianKeywords],
  },
  id: {
    homeTitle: "Antar alkohol di Canggu, Seminyak, dan Bali",
    homeDescription:
      "Jasa antar alkohol WhatsApp dari toko keluarga di Abianbase. Bir, sider, mixer, es, dan air ke villa di Canggu, Seminyak, Kuta, Ubud, dan Tanah Lot. Harga tetangga. 21+.",
    shopTitle: "Toko bir, es, dan mixer",
    shopDescription:
      "Pesan Bintang, Singaraja, Smirnoff Ice, kola, dan es dari MadeBrings. Antar alkohol di Canggu, Seminyak, Kuta, dan Bali lewat WhatsApp. Tunai atau transfer.",
    aboutTitle: "Tentang jasa antar alkohol Canggu & Bali",
    aboutDescription:
      "MadeBrings adalah toko antar alkohol keluarga Made Hendrik di Abianbase, Badung. Bir, mixer, dan es ke Canggu, Seminyak, Kuta, Ubud, dan Tanah Lot. Checkout WhatsApp.",
    contactTitle: "WhatsApp antar alkohol Canggu & Bali",
    contactDescription:
      "Chat MadeBrings di WhatsApp untuk pesan antar alkohol di Canggu, Seminyak, Kuta, Ubud, atau Tanah Lot. Konfirmasi stok, pin, dan tunai atau transfer.",
    blogTitle: "Panduan antar alkohol Bali",
    blogDescription:
      "Cara pesan antar alkohol di Canggu, antar bir di Seminyak, dan pesanan tiba di Kuta dari MadeBrings di Abianbase. Harga, yang termasuk, dan booking WhatsApp.",
    ogTitle: "Antar alkohol di Canggu, Seminyak, dan Bali · MadeBrings",
    shortPitch:
      "Antar alkohol keluarga di Canggu, Seminyak, Kuta, Ubud, dan Tanah Lot. Harga bir tetangga. Chat WhatsApp untuk pesan.",
    keywords: [...indonesianKeywords, ...englishKeywords],
  },
};
