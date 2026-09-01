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
    homeTitle: "MadeBrings · Alcohol delivery service in Abianbase, Bali",
    homeDescription:
      "MadeBrings is a family-run alcohol delivery service in Abianbase, Badung, Bali. Order beer, liquor, mixers, ice, and snacks on WhatsApp. We deliver to your villa or home. Pay cash or bank transfer.",
    shopTitle: "Shop beer, mixers & ice",
    shopDescription:
      "Browse beer, Smirnoff Ice, mixers, ice, and snacks from MadeBrings, an alcohol delivery service in Abianbase, Badung, Bali. WhatsApp checkout and delivery to your door.",
    aboutTitle: "About our alcohol delivery service",
    aboutDescription:
      "MadeBrings is a family alcohol delivery service in Abianbase, Badung, Bali, owned by Made Hendrik. Beer, liquor, and mixers to your door. WhatsApp checkout, cash or bank transfer.",
    contactTitle: "Contact",
    contactDescription:
      "Contact MadeBrings alcohol delivery in Abianbase, Badung, Bali. Chat on WhatsApp to order beer, liquor, or mixers and arrange delivery to your door.",
    blogTitle: "Blog",
    blogDescription:
      "Notes from MadeBrings in Abianbase: Bali holiday tips, a Bali tour guide to contact, and Arak Bali as a traditional drink. Chat first to confirm your order.",
    ogTitle: "MadeBrings · Alcohol delivery in Abianbase, Bali",
    shortPitch:
      "Family alcohol delivery service in Abianbase, Badung. Neighborhood prices on beer, liquor, and mixers. Chat us to order.",
    keywords: [...englishKeywords, ...indonesianKeywords],
  },
  id: {
    homeTitle: "MadeBrings · Jasa antar alkohol di Abianbase, Bali",
    homeDescription:
      "MadeBrings adalah layanan antar alkohol keluarga di Abianbase, Badung, Bali. Pesan bir, minuman keras, mixer, es, dan cemilan lewat WhatsApp. Kami antar ke villa atau rumah. Bayar tunai atau transfer bank.",
    shopTitle: "Toko bir, mixer, dan es",
    shopDescription:
      "Lihat bir, Smirnoff Ice, mixer, es, dan cemilan dari MadeBrings, jasa antar alkohol di Abianbase, Badung, Bali. Checkout WhatsApp dan antar ke rumah.",
    aboutTitle: "Tentang jasa antar alkohol kami",
    aboutDescription:
      "MadeBrings adalah layanan antar alkohol keluarga di Abianbase, Badung, Bali, milik Made Hendrik. Bir, minuman keras, dan mixer diantar ke rumah. Checkout WhatsApp, tunai atau transfer.",
    contactTitle: "Kontak",
    contactDescription:
      "Hubungi MadeBrings jasa antar alkohol di Abianbase, Badung, Bali. Chat WhatsApp untuk pesan bir, minuman keras, atau mixer dan atur pengantaran ke rumah.",
    blogTitle: "Blog",
    blogDescription:
      "Catatan MadeBrings di Abianbase: tips liburan Bali, pemandu wisata, dan arak Bali sebagai minuman tradisional. Chat dulu untuk konfirmasi pesanan.",
    ogTitle: "MadeBrings · Jasa antar alkohol di Abianbase, Bali",
    shortPitch:
      "Layanan antar alkohol keluarga di Abianbase, Badung. Harga tetangga untuk bir, minuman keras, dan mixer. Chat untuk pesan.",
    keywords: [...indonesianKeywords, ...englishKeywords],
  },
};
