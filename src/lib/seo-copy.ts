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
  "alkohol dekat saya Bali",
  "antar alkohol Ubud",
  "antar alkohol Tanah Lot",
  "antar alkohol Kuta",
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
  "alcohol near me Bali",
  "villa drinks delivery Bali",
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
    homeTitle: "Alcohol delivery Bali · MadeBrings in Abianbase",
    homeDescription:
      "Neighborhood-price alcohol delivery in Abianbase, Bali. Beer, Ice, mixers, and ice to villas around Canggu, Seminyak, Kuta, Ubud, and Tanah Lot. WhatsApp checkout. 21+.",
    shopTitle: "Shop beer & mixers for alcohol delivery Bali",
    shopDescription:
      "Catalog prices for Bintang, Singaraja, Smirnoff Ice, cola, and ice from MadeBrings in Abianbase. Chat WhatsApp to confirm stock and book alcohol delivery.",
    aboutTitle: "About our alcohol delivery service",
    aboutDescription:
      "MadeBrings is a family alcohol delivery service in Abianbase, Badung, Bali, owned by Made Hendrik. Beer, liquor, and mixers to your door. WhatsApp checkout, cash or bank transfer.",
    contactTitle: "Contact",
    contactDescription:
      "Contact MadeBrings alcohol delivery in Abianbase, Badung, Bali. Chat on WhatsApp to order beer, liquor, or mixers and arrange delivery to your door.",
    blogTitle: "Bali alcohol delivery guides",
    blogDescription:
      "Commercial guides for alcohol delivery in Canggu, beer delivery Bali, alcohol near me, Ubud and Tanah Lot, plus villa fridge restock checklists from MadeBrings.",
    ogTitle: "Alcohol delivery Bali · MadeBrings Abianbase",
    shortPitch:
      "Family alcohol delivery service in Abianbase, Badung. Neighborhood prices on beer, liquor, and mixers. Chat us to order.",
    keywords: [...englishKeywords, ...indonesianKeywords],
  },
  id: {
    homeTitle: "Jasa antar alkohol Bali · MadeBrings di Abianbase",
    homeDescription:
      "Antar alkohol harga tetangga di Abianbase, Bali. Bir, Ice, mixer, dan es ke villa sekitar Canggu, Seminyak, Kuta, Ubud, dan Tanah Lot. Checkout WhatsApp. 21+.",
    shopTitle: "Toko bir & mixer untuk antar alkohol Bali",
    shopDescription:
      "Harga katalog Bintang, Singaraja, Smirnoff Ice, kola, dan es dari MadeBrings di Abianbase. Chat WhatsApp untuk stok dan pesan antar alkohol.",
    aboutTitle: "Tentang jasa antar alkohol kami",
    aboutDescription:
      "MadeBrings adalah layanan antar alkohol keluarga di Abianbase, Badung, Bali, milik Made Hendrik. Bir, minuman keras, dan mixer diantar ke rumah. Checkout WhatsApp, tunai atau transfer.",
    contactTitle: "Kontak",
    contactDescription:
      "Hubungi MadeBrings jasa antar alkohol di Abianbase, Badung, Bali. Chat WhatsApp untuk pesan bir, minuman keras, atau mixer dan atur pengantaran ke rumah.",
    blogTitle: "Panduan antar alkohol Bali",
    blogDescription:
      "Panduan komersial antar alkohol Canggu, antar bir Bali, alkohol dekat saya, Ubud dan Tanah Lot, plus daftar isi ulang kulkas villa dari MadeBrings.",
    ogTitle: "Jasa antar alkohol Bali · MadeBrings Abianbase",
    shortPitch:
      "Layanan antar alkohol keluarga di Abianbase, Badung. Harga tetangga untuk bir, minuman keras, dan mixer. Chat untuk pesan.",
    keywords: [...indonesianKeywords, ...englishKeywords],
  },
};
