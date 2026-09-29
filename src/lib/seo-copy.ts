import type { Locale } from "@/lib/i18n";

export const indonesianKeywords = [
  "jasa antar alkohol Bali",
  "antar bir Bali",
  "kirim minuman keras Bali",
  "toko bir Abianbase",
  "pesan bir WhatsApp",
  "antar minuman villa Bali",
  "delivery bir Canggu",
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
  "alcohol delivery Bali",
  "alcohol delivery Canggu",
  "alcohol delivery Seminyak",
  "alcohol delivery Kuta",
  "alcohol delivery Ubud",
  "alcohol delivery Tanah Lot",
  "alcohol near me Bali",
  "beer delivery Bali",
  "Bintang delivery Bali",
  "villa fridge restock Bali",
  "ice delivery Bali villa",
  "WhatsApp alcohol order Bali",
  "Abianbase",
  "Badung",
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
    homeTitle: "Alcohol Delivery Bali from Abianbase | MadeBrings",
    homeDescription:
      "WhatsApp alcohol delivery from a family shop in Abianbase. Beer, Smirnoff Ice, Coke, water, and ice to villas around Canggu, Seminyak, Kuta, Ubud, and Tanah Lot. Cash or transfer. 21+.",
    shopTitle: "Shop beer, ice & mixers — alcohol delivery Bali",
    shopDescription:
      "Listed prices for beer, Smirnoff Ice, mixers, ice, and water from MadeBrings in Abianbase. WhatsApp to confirm stock, then we arrange alcohol delivery to your villa.",
    aboutTitle: "About MadeBrings alcohol delivery in Abianbase",
    aboutDescription:
      "MadeBrings is Made Hendrik’s family alcohol delivery shop in Abianbase, Badung, Bali. Beer, Ice, mixers, and ice around Canggu, Seminyak, Kuta, Ubud, and Tanah Lot. WhatsApp checkout.",
    contactTitle: "WhatsApp alcohol delivery in Bali",
    contactDescription:
      "Chat MadeBrings on WhatsApp to order beer, Ice, mixers, or ice in Abianbase and around Canggu, Seminyak, Kuta, Ubud, and Tanah Lot. Cash or bank transfer. 21+.",
    blogTitle: "Alcohol delivery guides for Bali villas",
    blogDescription:
      "Commercial guides for alcohol delivery Canggu, alcohol near me in Bali, beer delivery, Ubud and Tanah Lot stays, and villa fridge restocks — plus notes on holidays and arak.",
    ogTitle: "Alcohol delivery Bali · MadeBrings Abianbase",
    shortPitch:
      "Family alcohol delivery in Abianbase. Beer, Ice, mixers, and ice to Canggu, Seminyak, Kuta, Ubud, and Tanah Lot. Chat to order.",
    keywords: [...englishKeywords, ...indonesianKeywords],
  },
  id: {
    homeTitle: "Jasa Antar Alkohol Bali dari Abianbase | MadeBrings",
    homeDescription:
      "Antar alkohol WhatsApp dari toko keluarga di Abianbase. Bir, Smirnoff Ice, Coke, air, dan es ke villa sekitar Canggu, Seminyak, Kuta, Ubud, dan Tanah Lot. Tunai atau transfer. 21+.",
    shopTitle: "Toko bir, es, dan mixer — antar alkohol Bali",
    shopDescription:
      "Harga tertera bir, Smirnoff Ice, mixer, es, dan air dari MadeBrings di Abianbase. WhatsApp untuk konfirmasi stok, lalu kami atur antar alkohol ke villa.",
    aboutTitle: "Tentang jasa antar alkohol MadeBrings di Abianbase",
    aboutDescription:
      "MadeBrings toko antar alkohol keluarga Made Hendrik di Abianbase, Badung, Bali. Bir, Ice, mixer, dan es sekitar Canggu, Seminyak, Kuta, Ubud, dan Tanah Lot. Checkout WhatsApp.",
    contactTitle: "WhatsApp antar alkohol di Bali",
    contactDescription:
      "Chat MadeBrings di WhatsApp untuk pesan bir, Ice, mixer, atau es di Abianbase dan sekitar Canggu, Seminyak, Kuta, Ubud, dan Tanah Lot. Tunai atau transfer. 21+.",
    blogTitle: "Panduan antar alkohol untuk villa Bali",
    blogDescription:
      "Panduan komersial antar alkohol Canggu, alkohol terdekat di Bali, antar bir, Ubud dan Tanah Lot, plus restok kulkas villa — dan catatan liburan serta arak.",
    ogTitle: "Jasa antar alkohol Bali · MadeBrings Abianbase",
    shortPitch:
      "Antar alkohol keluarga di Abianbase. Bir, Ice, mixer, dan es ke Canggu, Seminyak, Kuta, Ubud, dan Tanah Lot. Chat untuk pesan.",
    keywords: [...indonesianKeywords, ...englishKeywords],
  },
};
