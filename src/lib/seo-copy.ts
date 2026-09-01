import type { Locale } from "@/lib/i18n";

export const indonesianKeywords = [
  "jasa antar alkohol Bali",
  "antar bir Bali",
  "kirim minuman keras Bali",
  "toko bir Abianbase",
  "pesan bir WhatsApp",
  "antar minuman villa Bali",
  "delivery alkohol Canggu",
  "delivery alkohol Seminyak",
  "delivery alkohol Kuta",
  "delivery alkohol Ubud",
  "antar alkohol Tanah Lot",
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
  "alcohol near me",
  "alcohol delivery Canggu",
  "alcohol delivery Seminyak",
  "alcohol delivery Kuta",
  "alcohol delivery Ubud",
  "alcohol delivery Tanah Lot",
  "beer delivery Canggu",
  "villa alcohol delivery Bali",
  "WhatsApp alcohol order Bali",
  "Bintang delivery Bali",
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
    homeTitle: "Alcohol delivery service in Abianbase, Bali · MadeBrings",
    homeDescription:
      "Family alcohol delivery service in Abianbase, Bali. Beer, cider, cola, water, and ice to Canggu, Seminyak, Kuta, Ubud, and Tanah Lot. WhatsApp to book. 21+.",
    shopTitle: "Shop beer, cider, cola, ice — alcohol delivery Bali",
    shopDescription:
      "Catalog prices for beer, Smirnoff Ice, cola, water, and ice from MadeBrings alcohol delivery in Abianbase. WhatsApp checkout to Canggu, Seminyak, Kuta, Ubud, Tanah Lot.",
    aboutTitle: "About our alcohol delivery service",
    aboutDescription:
      "MadeBrings is a family alcohol delivery service in Abianbase, Badung, Bali, owned by Made Hendrik. Beer, liquor, and mixers to your door. WhatsApp checkout, cash or bank transfer.",
    contactTitle: "Contact alcohol delivery in Abianbase",
    contactDescription:
      "WhatsApp MadeBrings alcohol delivery in Abianbase, Bali. Order beer, cider, cola, water, or ice to Canggu, Seminyak, Kuta, Ubud, or Tanah Lot. Cash or transfer.",
    blogTitle: "Alcohol delivery notes from Abianbase",
    blogDescription:
      "How to book MadeBrings alcohol delivery in Canggu, Seminyak, Kuta, Ubud, and Tanah Lot — plus Bali holiday, tour-guide, and Arak notes from the Abianbase shop.",
    ogTitle: "MadeBrings · Alcohol delivery in Abianbase, Bali",
    shortPitch:
      "Family alcohol delivery service in Abianbase, Badung. Neighborhood prices on beer, liquor, and mixers. Chat us to order.",
    keywords: [...englishKeywords, ...indonesianKeywords],
  },
  id: {
    homeTitle: "Jasa antar alkohol di Abianbase, Bali · MadeBrings",
    homeDescription:
      "Layanan antar alkohol keluarga di Abianbase, Bali. Bir, sider, kola, air, dan es ke Canggu, Seminyak, Kuta, Ubud, dan Tanah Lot. Pesan WhatsApp. 21+.",
    shopTitle: "Toko bir, sider, kola, es — antar alkohol Bali",
    shopDescription:
      "Harga katalog bir, Smirnoff Ice, kola, air, dan es dari jasa antar alkohol MadeBrings di Abianbase. Checkout WhatsApp ke Canggu, Seminyak, Kuta, Ubud, Tanah Lot.",
    aboutTitle: "Tentang jasa antar alkohol kami",
    aboutDescription:
      "MadeBrings adalah layanan antar alkohol keluarga di Abianbase, Badung, Bali, milik Made Hendrik. Bir, minuman keras, dan mixer diantar ke rumah. Checkout WhatsApp, tunai atau transfer.",
    contactTitle: "Kontak jasa antar alkohol Abianbase",
    contactDescription:
      "WhatsApp MadeBrings jasa antar alkohol di Abianbase, Bali. Pesan bir, sider, kola, air, atau es ke Canggu, Seminyak, Kuta, Ubud, atau Tanah Lot. Tunai atau transfer.",
    blogTitle: "Catatan antar alkohol dari Abianbase",
    blogDescription:
      "Cara pesan antar alkohol MadeBrings di Canggu, Seminyak, Kuta, Ubud, dan Tanah Lot — plus catatan liburan, pemandu, dan arak dari toko Abianbase.",
    ogTitle: "MadeBrings · Jasa antar alkohol di Abianbase, Bali",
    shortPitch:
      "Layanan antar alkohol keluarga di Abianbase, Badung. Harga tetangga untuk bir, minuman keras, dan mixer. Chat untuk pesan.",
    keywords: [...indonesianKeywords, ...englishKeywords],
  },
};
