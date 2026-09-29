import { getProductById } from "@/lib/commerce";
import { formatIdr } from "@/lib/format";
import type { Locale } from "@/lib/i18n";
import { serviceAreas, SEO_CONTENT_UPDATED } from "@/lib/seo-paths";

export type FaqItem = {
  question: string;
  answer: string;
};

export type MoneyCopy = {
  kicker: string;
  h1: string;
  h1Line2: string;
  lead: string;
  speakable: string;
  browseShop: string;
  bookCta: string;
  priceHeading: string;
  priceIntro: string;
  inclusionsHeading: string;
  inclusions: string[];
  areasHeading: string;
  areasBody: string;
  howHeading: string;
  steps: string[];
  faqHeading: string;
  faqs: FaqItem[];
  honestNote: string;
  relatedHeading: string;
};

function listedPrice(id: string) {
  const product = getProductById(id);
  if (!product) return "chat for today's price";
  return formatIdr(product.priceIdr);
}

export const listedPrices = {
  coke: listedPrice("coca-cola-original-250"),
  singaraja: listedPrice("singaraja-pilsner-330"),
  bintang: listedPrice("bintang-330"),
  bintangSix: listedPrice("bintang-330-6pack"),
  bintangBox: listedPrice("bintang-beer-box"),
  smirnoff: listedPrice("smirnoff-ice-275"),
  ice: listedPrice("ice-bag-4kg"),
  aqua: listedPrice("aqua-mineral-600-box"),
  esky: listedPrice("rent-ice-box-3-days"),
} as const;

export const moneyPriceRows = [
  {
    id: "singaraja-pilsner-330",
    label: { en: "Singaraja Pilsner 330ml", id: "Singaraja Pilsner 330ml" },
  },
  {
    id: "bintang-330",
    label: { en: "Bintang 330ml", id: "Bintang 330ml" },
  },
  {
    id: "bintang-330-6pack",
    label: { en: "Bintang 330ml six-pack", id: "Bintang 330ml isi enam" },
  },
  {
    id: "bintang-beer-box",
    label: { en: "Bintang box", id: "Dus Bintang" },
  },
  {
    id: "smirnoff-ice-275",
    label: { en: "Smirnoff Ice 275ml", id: "Smirnoff Ice 275ml" },
  },
  {
    id: "coca-cola-original-250",
    label: { en: "Coca-Cola Original 250ml", id: "Coca-Cola Original 250ml" },
  },
  {
    id: "ice-bag-4kg",
    label: { en: "4kg ice bag", id: "Es batu 4kg" },
  },
  {
    id: "aqua-mineral-600-box",
    label: { en: "Aqua 600ml box (24)", id: "Dus Aqua 600ml (24)" },
  },
  {
    id: "rent-ice-box-3-days",
    label: { en: "Ice box rental, 3 days", id: "Sewa kotak es, 3 hari" },
  },
] as const;

const enSpeakable = `MadeBrings is a family alcohol delivery service in Abianbase, Badung, Bali, owned by Made Hendrik. If you searched alcohol near me or alcohol delivery after landing near Canggu, Seminyak, Kuta, Ubud, or Tanah Lot, this is the neighborhood shop that answers on WhatsApp. We sell the shelf we actually keep: Singaraja and Bintang beer, lemon Radler, San Miguel Light, Smirnoff Ice, Coca-Cola, Sprite, tonic, ginger ale, Aqua water, 4kg ice bags, a three-day ice-box rental, and snacks. Listed prices start at ${listedPrices.coke} for a Coke can, ${listedPrices.singaraja} for Singaraja 330ml, and ${listedPrices.bintang} for Bintang 330ml. A Bintang six-pack is ${listedPrices.bintangSix}. A Bintang box is ${listedPrices.bintangBox}. Chat first so we confirm stock, then pay cash or bank transfer. Delivery is arranged in that same chat for villas and homes in our areas. You must be 21 or older. We are a neighborhood shop, not a 24-hour Canggu call centre, and we only promise a run after Made confirms it.`;

const idSpeakable = `MadeBrings adalah jasa antar alkohol keluarga di Abianbase, Badung, Bali, milik Made Hendrik. Kalau Anda mencari alkohol terdekat atau antar alkohol setelah mendarat di sekitar Canggu, Seminyak, Kuta, Ubud, atau Tanah Lot, ini toko tetangga yang membalas di WhatsApp. Kami menjual stok rak yang benar-benar ada: bir Singaraja dan Bintang, Radler lemon, San Miguel Light, Smirnoff Ice, Coca-Cola, Sprite, tonik, ginger ale, air Aqua, es batu 4kg, sewa kotak es tiga hari, dan cemilan. Harga tertera mulai ${listedPrices.coke} untuk kaleng Coke, ${listedPrices.singaraja} untuk Singaraja 330ml, dan ${listedPrices.bintang} untuk Bintang 330ml. Pak Bintang isi enam ${listedPrices.bintangSix}. Dus Bintang ${listedPrices.bintangBox}. Chat dulu agar kami konfirmasi stok, lalu bayar tunai atau transfer bank. Pengantaran diatur di chat yang sama untuk villa dan rumah di area kami. Anda harus berusia 21 tahun ke atas. Kami toko tetangga, bukan call centre Canggu 24 jam, dan hanya janji antar setelah Made mengonfirmasi.`;

const moneyCopy: Record<Locale, MoneyCopy> = {
  en: {
    kicker: "Abianbase · Badung · Bali",
    h1: "Alcohol delivery in Bali",
    h1Line2: "Beer, mixers, and ice to your villa",
    lead: `WhatsApp a family shop in Abianbase for beer, cider, Smirnoff Ice, Coca-Cola, water, and ice. We deliver around ${serviceAreas.join(", ")} when Made can take the run. Pay cash or bank transfer. 21+ only.`,
    speakable: enSpeakable,
    browseShop: "Browse the shelf",
    bookCta: "WhatsApp to book delivery",
    priceHeading: "Listed prices from the Abianbase shelf",
    priceIntro:
      "These are the prices on our site today. Stock moves. Chat first so we confirm the bottle is actually in the cooler before anyone gets on a bike.",
    inclusionsHeading: "What an alcohol delivery from us includes",
    inclusions: [
      "Beer, cider-style Radler, and Smirnoff Ice from the cooler",
      "Mixers: Coke, Sprite, tonic, ginger ale, Red Bull, and limes",
      "Drinking water (Aqua 600ml box) and 4kg ice bags",
      "Optional 3-day ice-box (esky) rental — ice sold separately",
      "WhatsApp confirmation of stock, villa pin, and cash or transfer",
      "Delivery arranged in chat for Abianbase and around Canggu, Seminyak, Kuta, Ubud, and Tanah Lot",
    ],
    areasHeading: "Where we deliver",
    areasBody:
      "The shop is in Abianbase, Mengwi, Badung. We take villa and home runs around Abianbase, Canggu, Seminyak, Kuta, Ubud, and Tanah Lot when we can. We do not publish a 30-minute timer. Send the villa name or a pin on WhatsApp and we tell you honestly whether the run works today.",
    howHeading: "How to order alcohol delivery",
    steps: [
      "Browse beer, mixers, ice, and water on the shop pages — prices are in rupiah.",
      "Tap WhatsApp. Send your list, villa or home pin, and whether you pay cash or bank transfer.",
      "Wait for Made to confirm what is on the shelf. Do not count on a bottle until that reply.",
      "We arrange the drop in the same chat. You must be 21 or older.",
    ],
    faqHeading: "Alcohol delivery Bali — FAQ",
    faqs: [
      {
        question: "Do you deliver alcohol in Canggu, Seminyak, Kuta, Ubud, and Tanah Lot?",
        answer:
          "Yes — those are the areas we serve around our Abianbase shop, along with Abianbase itself. Send a pin. We confirm each run on WhatsApp rather than promising a fixed timer.",
      },
      {
        question: "How do I order?",
        answer:
          "There is no trolley checkout. Open the shop, then WhatsApp. Tell us the drinks, the villa or home, and cash or bank transfer. We confirm stock first.",
      },
      {
        question: "What are your beer and mixer prices?",
        answer: `Singaraja 330ml is ${listedPrices.singaraja}. Bintang 330ml is ${listedPrices.bintang}. A Bintang six-pack is ${listedPrices.bintangSix}. A Coke can is ${listedPrices.coke}. A 4kg ice bag is ${listedPrices.ice}. Chat if you need a box or a mixed villa run.`,
      },
      {
        question: "Are you 24/7 like the Canggu alcohol delivery apps?",
        answer:
          "No. MadeBrings is a family shop, not a 24-hour call centre. We deliver when we can take the order. If we are closed or already out, we say so in the chat.",
      },
      {
        question: "Is there a delivery fee?",
        answer:
          "Delivery is arranged in WhatsApp based on where you are staying. We do not publish a fake free-delivery zone. Ask in the same message as your order list.",
      },
      {
        question: "What is the legal age?",
        answer:
          "Indonesian law: 21 or older. We will not sell alcohol to anyone under 21.",
      },
    ],
    honestNote:
      "We do not invent star ratings, 20-minute ETAs, or a full spirits cellar we do not keep. What you see in the shop is the menu.",
    relatedHeading: "Guides for the same search",
  },
  id: {
    kicker: "Abianbase · Badung · Bali",
    h1: "Jasa antar alkohol di Bali",
    h1Line2: "Bir, mixer, dan es ke villa Anda",
    lead: `Chat WhatsApp toko keluarga di Abianbase untuk bir, sider, Smirnoff Ice, Coca-Cola, air, dan es. Kami antar di sekitar ${serviceAreas.join(", ")} jika Made bisa mengambil jalan. Bayar tunai atau transfer. Hanya 21+.`,
    speakable: idSpeakable,
    browseShop: "Lihat rak toko",
    bookCta: "WhatsApp untuk pesan antar",
    priceHeading: "Harga tertera dari rak Abianbase",
    priceIntro:
      "Ini harga di situs hari ini. Stok bergerak. Chat dulu agar kami pastikan botol masih di pendingin sebelum ada yang naik motor.",
    inclusionsHeading: "Apa yang termasuk dalam antar alkohol kami",
    inclusions: [
      "Bir, Radler, dan Smirnoff Ice dari pendingin",
      "Mixer: Coke, Sprite, tonik, ginger ale, Red Bull, dan jeruk nipis",
      "Air minum (dus Aqua 600ml) dan es batu 4kg",
      "Opsional sewa kotak es 3 hari — es dijual terpisah",
      "Konfirmasi WhatsApp untuk stok, pin villa, dan tunai atau transfer",
      "Pengantaran diatur di chat untuk Abianbase dan sekitar Canggu, Seminyak, Kuta, Ubud, dan Tanah Lot",
    ],
    areasHeading: "Area pengantaran",
    areasBody:
      "Toko ada di Abianbase, Mengwi, Badung. Kami mengambil jalan villa dan rumah di sekitar Abianbase, Canggu, Seminyak, Kuta, Ubud, dan Tanah Lot jika memungkinkan. Kami tidak memasang timer 30 menit. Kirim nama villa atau pin di WhatsApp, kami bilang jujur apakah jalan itu bisa hari ini.",
    howHeading: "Cara pesan antar alkohol",
    steps: [
      "Lihat bir, mixer, es, dan air di halaman toko — harga dalam rupiah.",
      "Ketuk WhatsApp. Kirim daftar, pin villa atau rumah, dan cara bayar tunai atau transfer.",
      "Tunggu Made konfirmasi stok rak. Jangan andalkan botol sebelum balasan itu.",
      "Pengantaran diatur di chat yang sama. Anda harus 21 tahun ke atas.",
    ],
    faqHeading: "FAQ jasa antar alkohol Bali",
    faqs: [
      {
        question: "Apakah Anda antar alkohol di Canggu, Seminyak, Kuta, Ubud, dan Tanah Lot?",
        answer:
          "Ya — itu area yang kami layani dari toko Abianbase, plus Abianbase sendiri. Kirim pin. Kami konfirmasi setiap jalan di WhatsApp, bukan janji timer tetap.",
      },
      {
        question: "Bagaimana cara pesan?",
        answer:
          "Tidak ada keranjang belanja. Buka toko, lalu WhatsApp. Sebutkan minuman, villa atau rumah, dan tunai atau transfer. Kami konfirmasi stok dulu.",
      },
      {
        question: "Berapa harga bir dan mixer?",
        answer: `Singaraja 330ml ${listedPrices.singaraja}. Bintang 330ml ${listedPrices.bintang}. Pak Bintang isi enam ${listedPrices.bintangSix}. Kaleng Coke ${listedPrices.coke}. Es batu 4kg ${listedPrices.ice}. Chat jika butuh dus atau belanja villa campur.`,
      },
      {
        question: "Apakah buka 24 jam seperti layanan Canggu?",
        answer:
          "Tidak. MadeBrings toko keluarga, bukan call centre 24 jam. Kami antar jika bisa mengambil pesanan. Kalau tutup atau sudah di jalan, kami bilang di chat.",
      },
      {
        question: "Ada ongkir?",
        answer:
          "Pengantaran diatur di WhatsApp sesuai lokasi menginap. Kami tidak mengarang zona gratis. Tanyakan di pesan yang sama dengan daftar belanja.",
      },
      {
        question: "Berapa usia minimum?",
        answer:
          "Hukum Indonesia: 21 tahun ke atas. Kami tidak menjual alkohol kepada siapa pun di bawah 21 tahun.",
      },
    ],
    honestNote:
      "Kami tidak mengarang bintang ulasan, ETA 20 menit, atau rak minuman keras penuh yang tidak kami miliki. Yang ada di toko itulah menunya.",
    relatedHeading: "Panduan untuk pencarian yang sama",
  },
};

export function getMoneyCopy(locale: Locale) {
  return moneyCopy[locale];
}

export const moneyPageMeta = {
  en: {
    title: "Alcohol Delivery Bali | Canggu, Seminyak, Ubud",
    description:
      "WhatsApp alcohol delivery from a family shop in Abianbase. Beer, Ice, Coke, water, and ice bags to villas around Canggu, Seminyak, Kuta, Ubud, and Tanah Lot. Cash or transfer. 21+.",
  },
  id: {
    title: "Jasa Antar Alkohol Bali | Canggu, Seminyak, Ubud",
    description:
      "Antar alkohol WhatsApp dari toko keluarga di Abianbase. Bir, Ice, Coke, air, dan es ke villa sekitar Canggu, Seminyak, Kuta, Ubud, dan Tanah Lot. Tunai atau transfer. 21+.",
  },
} as const;

export const moneyDateModified = SEO_CONTENT_UPDATED;
