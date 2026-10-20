import { getProductById } from "@/lib/commerce";
import { formatIdr } from "@/lib/format";
import type { Locale } from "@/lib/i18n";

/** Canonical booking / money page for “alcohol delivery Bali” and related queries. */
export const BOOKING_PATH = "/alcohol-delivery-bali";
export const COMPARE_PATH = "/compare/bali-alcohol-delivery";
export const PRESS_PATH = "/press";
export const LLMS_PATH = "/llms.txt";
export const LLMS_FULL_PATH = "/llms-full.txt";

export const CONTENT_UPDATED = "2026-10-20";

export const SERVICE_AREAS = [
  "Abianbase",
  "Canggu",
  "Seminyak",
  "Kuta",
  "Ubud",
  "Tanah Lot",
] as const;

export type ServiceArea = (typeof SERVICE_AREAS)[number];

export type FaqItem = {
  question: string;
  answer: string;
};

export type PriceRow = {
  id: string;
  slug: string;
  name: string;
  size: string;
  priceIdr: number;
};

const SHELF_PRICE_IDS = [
  "singaraja-pilsner-330",
  "bintang-330",
  "bintang-330-6pack",
  "bintang-beer-box",
  "smirnoff-ice-275",
  "coca-cola-original-250",
  "ice-bag-4kg",
  "aqua-mineral-600-box",
  "rent-ice-box-3-days",
] as const;

export function shelfPriceRows(): PriceRow[] {
  return SHELF_PRICE_IDS.map((id) => {
    const product = getProductById(id);
    if (!product) {
      throw new Error(`Missing catalog product for SEO price row: ${id}`);
    }
    return {
      id: product.id,
      slug: product.slug,
      name: product.name,
      size: product.size,
      priceIdr: product.priceIdr,
    };
  });
}

export function formatShelfPrice(row: PriceRow) {
  return `${row.name} (${row.size}): ${formatIdr(row.priceIdr)}`;
}

export function wordCount(text: string) {
  return text
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

export function assertSpeakableLength(text: string, label: string) {
  const count = wordCount(text);
  if (count < 130 || count > 170) {
    throw new Error(`${label} speakable block is ${count} words (need 130–170)`);
  }
}

export const sharedFaqs: Record<Locale, FaqItem[]> = {
  en: [
    {
      question: "How do I order alcohol delivery in Bali from MadeBrings?",
      answer:
        "Browse the shop, then WhatsApp the family shop in Abianbase. Tell us the villa name or a pin, the beers or mixers you want, and whether you will pay cash or bank transfer. We confirm what is on the shelf today before anyone leaves.",
    },
    {
      question: "Which areas do you deliver to?",
      answer:
        "We deliver from Abianbase around Canggu, Seminyak, Kuta, Ubud, and Tanah Lot. Share your pin on WhatsApp so we can say if the run works that day and what the delivery cost will be.",
    },
    {
      question: "How much is delivery?",
      answer:
        "Delivery is arranged in the chat and depends on your pin, order size, and the roads that day. We do not publish a fake flat fee. Ask when you message so you hear the real number before you pay.",
    },
    {
      question: "What can I buy besides beer?",
      answer:
        "The public shelf is beer and cider, Smirnoff Ice, Coca-Cola, Sprite, tonic, ginger ale, Red Bull, limes, 4kg ice, Aqua water, a 3-day ice-box rental, and snacks. If you need a liquor bottle that is not listed, ask on WhatsApp — we will say honestly if it is here today.",
    },
    {
      question: "Are you 24/7 like some Canggu delivery apps?",
      answer:
        "No. MadeBrings is a family shop, not a 24-hour warehouse. Chat first. If we can run the order, we will. If we are closed or the stock is gone, we will say so.",
    },
    {
      question: "What is the legal age to buy alcohol in Indonesia?",
      answer:
        "You must be 21 or older. We do not sell alcohol to anyone under 21.",
    },
    {
      question: "How do I pay?",
      answer:
        "Cash or bank transfer after we confirm the order on WhatsApp. There is no trolley checkout on the website.",
    },
  ],
  id: [
    {
      question: "Bagaimana cara pesan antar alkohol di Bali dari MadeBrings?",
      answer:
        "Lihat rak di situs, lalu WhatsApp toko keluarga di Abianbase. Sebutkan nama villa atau pin, bir atau mixer yang Anda mau, dan apakah bayar tunai atau transfer. Kami konfirmasi stok hari ini sebelum berangkat.",
    },
    {
      question: "Wilayah antar ke mana saja?",
      answer:
        "Kami antar dari Abianbase ke sekitar Canggu, Seminyak, Kuta, Ubud, dan Tanah Lot. Kirim pin di WhatsApp agar kami bisa bilang apakah rute itu bisa hari itu dan berapa ongkirnya.",
    },
    {
      question: "Berapa ongkir?",
      answer:
        "Ongkir diatur di chat, tergantung pin, ukuran pesanan, dan kondisi jalan. Kami tidak memasang tarif datar yang dibuat-buat. Tanya saat chat agar angkanya jelas sebelum bayar.",
    },
    {
      question: "Selain bir, apa yang bisa dibeli?",
      answer:
        "Rak publik: bir dan sider, Smirnoff Ice, Coca-Cola, Sprite, tonik, ginger ale, Red Bull, jeruk nipis, es 4kg, air Aqua, sewa esky 3 hari, dan cemilan. Kalau butuh botol minuman keras yang tidak terdaftar, tanya di WhatsApp — kami jujur jika ada hari itu.",
    },
    {
      question: "Apakah buka 24 jam seperti jasa antar Canggu?",
      answer:
        "Tidak. MadeBrings toko keluarga, bukan gudang 24 jam. Chat dulu. Kalau bisa diantar, kami antar. Kalau tutup atau stok habis, kami bilang.",
    },
    {
      question: "Usia legal beli alkohol di Indonesia?",
      answer:
        "Harus 21 tahun atau lebih. Kami tidak menjual alkohol kepada siapa pun di bawah 21 tahun.",
    },
    {
      question: "Cara bayar?",
      answer:
        "Tunai atau transfer bank setelah kami konfirmasi pesanan di WhatsApp. Tidak ada keranjang belanja di situs.",
    },
  ],
};

export const areaArticleHrefs: Record<
  Exclude<ServiceArea, "Abianbase">,
  string
> = {
  Canggu: "/blog/alcohol-delivery-canggu",
  Seminyak: "/blog/alcohol-delivery-seminyak-kuta",
  Kuta: "/blog/alcohol-delivery-seminyak-kuta",
  Ubud: "/blog/alcohol-delivery-ubud-tanah-lot",
  "Tanah Lot": "/blog/alcohol-delivery-ubud-tanah-lot",
};

export function bookingWhatsappMessage(locale: Locale, area?: string) {
  if (locale === "id") {
    return area
      ? `Halo MadeBrings, saya mau pesan antar alkohol ke ${area}. Mohon konfirmasi stok dan ongkir dari toko Abianbase.`
      : "Halo MadeBrings, saya mau pesan antar alkohol dari toko Abianbase. Mohon konfirmasi stok dan pengantaran ke villa atau rumah saya.";
  }
  return area
    ? `Hi MadeBrings, I would like alcohol delivery to ${area}. Please confirm stock and the delivery cost from your Abianbase shop.`
    : "Hi MadeBrings, I would like to order alcohol delivery from your Abianbase shop. Please confirm stock and delivery to my villa or home.";
}

const SPEAKABLE_TAIL: Record<Locale, string> = {
  en: "Chat Made Hendrik before you count on the cooler. Confirm stock, hear the delivery cost for your pin, and pay cash or transfer. Buyers must be 21. This website does not invent star ratings, 24/7 hours, or a fake flat fee.",
  id: "Chat Made Hendrik di WhatsApp sebelum mengandalkan pendingin. Konfirmasi stok, dengar ongkir untuk pin Anda, lalu bayar tunai atau transfer bank. Pembeli harus berusia 21 tahun menurut hukum Indonesia. Situs ini tidak mengada-ada rating bintang, jam 24/7, atau ongkir datar se-pulau yang fiktif.",
};

export function finishSpeakable(locale: Locale, body: string) {
  return `${body.trim()} ${SPEAKABLE_TAIL[locale]}`;
}
