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
  "antar alkohol Ubud",
  "antar alkohol Kuta",
  "antar alkohol Tanah Lot",
  "alkohol terdekat Bali",
  "antar es batu villa Bali",
  "antar Coca-Cola Bali",
  "antar Aqua villa Bali",
  "beli alkohol Bali",
  "di mana beli bir Canggu",
  "antar minuman bandara Bali",
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
  "villa drinks delivery Bali",
  "WhatsApp alcohol order Bali",
  "alcohol delivery Ubud",
  "alcohol delivery Kuta",
  "alcohol delivery Tanah Lot",
  "alcohol near me Bali",
  "ice delivery Bali",
  "Coca-Cola delivery Bali",
  "cheap beer delivery Bali",
  "where to buy alcohol in Bali",
  "alcohol delivery near airport Bali",
  "first night drinks Bali",
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
    homeTitle: "MadeBrings · Alcohol delivery service in Abianbase, Bali",
    homeDescription:
      "Family alcohol delivery from Abianbase, Badung. WhatsApp for beer, cider, Coke, ice, and water to villas in Canggu, Seminyak, Kuta, Ubud, and Tanah Lot. 21+. Cash or transfer.",
    shopTitle: "Shop beer, mixers & ice",
    shopDescription:
      "Browse beer, Smirnoff Ice, mixers, ice, and snacks from MadeBrings, an alcohol delivery service in Abianbase, Badung, Bali. WhatsApp checkout and delivery to your door.",
    aboutTitle: "About our alcohol delivery service",
    aboutDescription:
      "MadeBrings is a family alcohol delivery service in Abianbase, Badung, Bali, owned by Made Hendrik. Beer, liquor, and mixers to your door. WhatsApp checkout, cash or bank transfer.",
    contactTitle: "Contact",
    contactDescription:
      "Contact MadeBrings alcohol delivery in Abianbase, Badung, Bali. Chat on WhatsApp to order beer, liquor, or mixers and arrange delivery to your door.",
    blogTitle: "Alcohol delivery guides · Canggu to Ubud",
    blogDescription:
      "Book alcohol delivery in Canggu, Seminyak, Kuta, Ubud, and Tanah Lot. Where to buy alcohol in Bali, first-night drinks after landing, beer prices, and WhatsApp checkout from MadeBrings in Abianbase.",
    ogTitle: "MadeBrings · Alcohol delivery in Abianbase, Bali",
    shortPitch:
      "Family alcohol delivery service in Abianbase, Badung. Neighborhood prices on beer, liquor, and mixers. Chat us to order.",
    keywords: [...englishKeywords, ...indonesianKeywords],
  },
  id: {
    homeTitle: "MadeBrings · Jasa antar alkohol di Abianbase, Bali",
    homeDescription:
      "Antar alkohol keluarga dari Abianbase, Badung. WhatsApp untuk bir, sider, kola, es, dan air ke villa di Canggu, Seminyak, Kuta, Ubud, dan Tanah Lot. 21+. Tunai atau transfer.",
    shopTitle: "Toko bir, mixer, dan es",
    shopDescription:
      "Lihat bir, Smirnoff Ice, mixer, es, dan cemilan dari MadeBrings, jasa antar alkohol di Abianbase, Badung, Bali. Checkout WhatsApp dan antar ke rumah.",
    aboutTitle: "Tentang jasa antar alkohol kami",
    aboutDescription:
      "MadeBrings adalah layanan antar alkohol keluarga di Abianbase, Badung, Bali, milik Made Hendrik. Bir, minuman keras, dan mixer diantar ke rumah. Checkout WhatsApp, tunai atau transfer.",
    contactTitle: "Kontak",
    contactDescription:
      "Hubungi MadeBrings jasa antar alkohol di Abianbase, Badung, Bali. Chat WhatsApp untuk pesan bir, minuman keras, atau mixer dan atur pengantaran ke rumah.",
    blogTitle: "Panduan antar alkohol · Canggu sampai Ubud",
    blogDescription:
      "Pesan antar alkohol di Canggu, Seminyak, Kuta, Ubud, dan Tanah Lot. Di mana beli alkohol di Bali, minuman malam pertama setelah mendarat, harga bir, dan checkout WhatsApp dari MadeBrings di Abianbase.",
    ogTitle: "MadeBrings · Jasa antar alkohol di Abianbase, Bali",
    shortPitch:
      "Layanan antar alkohol keluarga di Abianbase, Badung. Harga tetangga untuk bir, minuman keras, dan mixer. Chat untuk pesan.",
    keywords: [...indonesianKeywords, ...englishKeywords],
  },
};
