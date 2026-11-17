import { getProductById } from "@/lib/commerce";
import type { Locale } from "@/lib/i18n";
import { formatIdr } from "@/lib/format";
import { siteConfig } from "@/lib/site";

/** Canonical booking / money page for “alcohol delivery Bali / Canggu”. */
export const MONEY_PAGE_PATH = "/";
export const MONEY_PAGE_MODIFIED = "2026-11-17";

export const serviceAreas = [
  "Abianbase",
  "Mengwi",
  "Canggu",
  "Berawa",
  "Pererenan",
  "Seminyak",
  "Kerobokan",
  "Kuta",
  "Legian",
  "Ubud",
  "Tanah Lot",
  "Badung",
  "Bali",
] as const;

export const starterPriceIds = [
  "singaraja-pilsner-330",
  "bintang-330",
  "bintang-330-6pack",
  "bintang-beer-box",
  "smirnoff-ice-275",
  "coca-cola-original-250",
  "ice-bag-4kg",
  "rent-ice-box-3-days",
  "aqua-mineral-600-box",
] as const;

export function starterPrices() {
  return starterPriceIds
    .map((id) => getProductById(id))
    .filter((product): product is NonNullable<typeof product> => Boolean(product))
    .map((product) => ({
      id: product.id,
      name: product.name,
      size: product.size,
      priceIdr: product.priceIdr,
      priceLabel: formatIdr(product.priceIdr),
      href: `/product/${product.slug}`,
    }));
}

export const inclusions: Record<Locale, string[]> = {
  en: [
    "WhatsApp confirmation of what is on the shelf today before anyone rides out",
    "Beer, cider, Smirnoff Ice, mixers, ice, water, and snacks from the listed shop",
    "Delivery to a villa or home in Abianbase, Canggu, Seminyak, Kuta, Ubud, Tanah Lot, and nearby Badung — cost confirmed in the chat",
    "Payment by cash or bank transfer after we confirm the order",
    "Ice bags and a 3-day ice-box rental you can add to a drinks run",
    "Honest stock answers, including when a flavour or box is not here",
  ],
  id: [
    "Konfirmasi WhatsApp untuk stok di rak hari ini sebelum kurir berangkat",
    "Bir, sider, Smirnoff Ice, mixer, es, air, dan cemilan dari toko yang tertera",
    "Antar ke villa atau rumah di Abianbase, Canggu, Seminyak, Kuta, Ubud, Tanah Lot, dan Badung sekitar — ongkir dikonfirmasi di chat",
    "Bayar tunai atau transfer bank setelah pesanan dikonfirmasi",
    "Es batu dan sewa esky 3 hari yang bisa ditambahkan ke pengantaran minuman",
    "Jawaban stok yang jujur, termasuk jika rasa atau dus sedang kosong",
  ],
};

export const notIncluded: Record<Locale, string[]> = {
  en: [
    "This is not a 24-hour warehouse or a beach-club bar catering desk",
    "Spirit bottles are a short, changing shelf — ask Made on WhatsApp; they are not all listed online",
    "We do not publish a fixed delivery fee; it depends on where you are staying",
    "You must be 21 or older under Indonesian law",
  ],
  id: [
    "Ini bukan gudang 24 jam atau meja bar catering beach club",
    "Rak minuman keras singkat dan berubah — tanya Made di WhatsApp; tidak semua tertera online",
    "Kami tidak memasang ongkir tetap; tergantung lokasi menginap Anda",
    "Harus berusia 21 tahun atau lebih menurut hukum Indonesia",
  ],
};

export type FaqItem = { question: string; answer: string };

export const moneyFaqs: Record<Locale, FaqItem[]> = {
  en: [
    {
      question: "Do you deliver alcohol to Canggu, Seminyak, Kuta, Ubud, and Tanah Lot?",
      answer:
        "Yes. MadeBrings is based in Abianbase, Badung, and we arrange alcohol delivery to villas and homes around Canggu, Seminyak, Kuta, Ubud, Tanah Lot, and nearby Mengwi. Send a villa name or map pin on WhatsApp so Made can confirm the run.",
    },
    {
      question: "How do I order alcohol delivery in Bali?",
      answer:
        "Browse the shop, then tap Order now. WhatsApp is the till: list what you want, where you are staying, and whether you will pay cash or bank transfer. We confirm stock before delivery.",
    },
    {
      question: "How much is beer delivery from MadeBrings?",
      answer:
        "Listed starter prices include Singaraja pilsner from Rp 22.000 a 330ml bottle, Bintang from Rp 35.000, a Bintang six-pack at Rp 200.000, and a Bintang box at Rp 595.000. A 4kg ice bag is Rp 25.000. Prices are neighborhood shelf prices, not beach-club mark-up.",
    },
    {
      question: "Is delivery free, and how fast do you arrive?",
      answer:
        "Delivery cost and timing depend on where you are staying and what is on the shelf. We do not claim 24/7 or a 30-minute SLA. Chat first; Made will tell you if a rider can come today.",
    },
    {
      question: "What payment methods do you take?",
      answer:
        "Cash or bank transfer after we confirm the order on WhatsApp. There is no trolley checkout on the website.",
    },
    {
      question: "What is the legal drinking age?",
      answer: `Indonesian law only allows alcohol sales to people ${siteConfig.ageLimit} and over. We will not sell to anyone under ${siteConfig.ageLimit}.`,
    },
  ],
  id: [
    {
      question: "Apakah MadeBrings antar alkohol ke Canggu, Seminyak, Kuta, Ubud, dan Tanah Lot?",
      answer:
        "Ya. MadeBrings berbasis di Abianbase, Badung, dan mengatur pengantaran alkohol ke villa dan rumah di sekitar Canggu, Seminyak, Kuta, Ubud, Tanah Lot, dan Mengwi. Kirim nama villa atau pin peta di WhatsApp agar Made bisa konfirmasi.",
    },
    {
      question: "Bagaimana cara pesan antar alkohol di Bali?",
      answer:
        "Lihat toko, lalu ketuk Pesan sekarang. WhatsApp adalah kasirnya: sebutkan pesanan, lokasi menginap, dan apakah bayar tunai atau transfer. Kami konfirmasi stok sebelum antar.",
    },
    {
      question: "Berapa harga antar bir dari MadeBrings?",
      answer:
        "Harga awal di situs: Singaraja pilsner dari Rp 22.000 per botol 330ml, Bintang dari Rp 35.000, pak isi enam Bintang Rp 200.000, dan dus Bintang Rp 595.000. Es 4kg Rp 25.000. Ini harga rak tetangga, bukan harga beach club.",
    },
    {
      question: "Apakah antar gratis, dan seberapa cepat sampai?",
      answer:
        "Ongkir dan waktu tergantung lokasi dan stok. Kami tidak mengklaim 24 jam atau sampai dalam 30 menit. Chat dulu; Made akan bilang apakah kurir bisa datang hari ini.",
    },
    {
      question: "Pembayaran apa yang diterima?",
      answer:
        "Tunai atau transfer bank setelah pesanan dikonfirmasi di WhatsApp. Tidak ada keranjang belanja di situs.",
    },
    {
      question: "Berapa usia minimum untuk membeli alkohol?",
      answer: `Hukum Indonesia hanya mengizinkan penjualan alkohol kepada orang berusia ${siteConfig.ageLimit} tahun ke atas. Kami tidak menjual kepada siapa pun di bawah ${siteConfig.ageLimit} tahun.`,
    },
  ],
};

/**
 * Self-contained 130–170 word answers for AI/featured snippets.
 * Keep these factual: family shop, real catalog prices, no fake hours or reviews.
 */
export const moneySpeakable: Record<Locale, string> = {
  en: "MadeBrings is a family-run alcohol delivery service in Abianbase, Badung, Bali, owned by Made Hendrik. If you searched alcohol near me in Canggu, Seminyak, Kuta, Ubud, or Tanah Lot and do not know the area, WhatsApp the shop with your villa name or a map pin, the drinks you want, and whether you will pay cash or bank transfer. The cooler lists beer and cider, Smirnoff Ice, mixers such as Coca-Cola and tonic, 4kg ice bags, drinking water, and snacks. Starter prices on the site are Singaraja pilsner from Rp 22.000 a bottle, Bintang from Rp 35.000, a Bintang six-pack at Rp 200.000, Smirnoff Ice from Rp 35.000, Coca-Cola 250ml from Rp 9.000, and ice at Rp 25.000 per 4kg bag. This is a neighborhood shop, not a 24-hour warehouse: stock is confirmed in the chat before anyone rides out. You must be 21 or older. Delivery cost depends on where you are staying and is agreed on WhatsApp.",
  id: "MadeBrings adalah layanan antar alkohol keluarga di Abianbase, Badung, Bali, milik Made Hendrik. Jika Anda mencari alkohol di dekat Canggu, Seminyak, Kuta, Ubud, atau Tanah Lot dan belum mengenal kawasan itu, chat WhatsApp ke toko dengan nama villa atau pin peta, minuman yang diinginkan, serta apakah bayar tunai atau transfer bank. Pendingin kami berisi bir dan sider, Smirnoff Ice, mixer seperti Coca-Cola dan tonik, es 4kg, air minum, dan cemilan. Harga awal di situs: Singaraja pilsner dari Rp 22.000 per botol, Bintang dari Rp 35.000, pak isi enam Bintang Rp 200.000, Smirnoff Ice dari Rp 35.000, Coca-Cola 250ml dari Rp 9.000, dan es Rp 25.000 per kantong 4kg. Ini toko tetangga, bukan gudang 24 jam: stok dikonfirmasi di chat sebelum kurir berangkat. Harus berusia 21 tahun atau lebih. Ongkir tergantung lokasi menginap dan disepakati di WhatsApp.",
};

export function wordCount(text: string) {
  return text
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

export function speakableBlocks() {
  return [
    { id: "home-en", locale: "en" as const, text: moneySpeakable.en },
    { id: "home-id", locale: "id" as const, text: moneySpeakable.id },
  ].map((block) => ({
    ...block,
    words: wordCount(block.text),
  }));
}
