import type { Locale } from "@/lib/i18n";
import { areaList, CONTENT_UPDATED } from "@/lib/seo/facts";

export type FaqItem = {
  question: string;
  answer: string;
};

export type MoneyCopy = {
  kicker: string;
  h1: string;
  title: string;
  description: string;
  speakable: string;
  lead: string;
  areasTitle: string;
  areasBody: string;
  howTitle: string;
  steps: { title: string; text: string }[];
  pricesTitle: string;
  pricesBody: string;
  inclusionsTitle: string;
  notIncludedTitle: string;
  faqTitle: string;
  faqs: FaqItem[];
  relatedTitle: string;
  ctaTitle: string;
  ctaBody: string;
  shopCta: string;
  bookCta: string;
};

const en: MoneyCopy = {
  kicker: "Abianbase · Badung · Bali",
  h1: "Alcohol delivery service in Abianbase, Bali",
  title: "Alcohol delivery service in Abianbase, Bali",
  description:
    "MadeBrings is a family alcohol delivery service in Abianbase, Bali. Beer, cider, cola, water, and ice to Canggu, Seminyak, Kuta, Ubud, and Tanah Lot. Chat WhatsApp to book.",
  speakable:
    "MadeBrings is a family-run alcohol delivery service in Abianbase, Badung, Bali. If you searched alcohol near me or you are a tourist who needs drinks at a villa and does not know the area, start here. We sell beer, cider, ready-to-drink cans, cola, water, ice, and snacks. We deliver to Abianbase and around Canggu, Seminyak, Kuta, Ubud, and Tanah Lot. Browse the shelf on this website, then chat WhatsApp so Made Hendrik can confirm what is in stock today. Pay cash or bank transfer after that confirmation. Indonesian law requires buyers to be 21 or older. Neighborhood prices include Singaraja 330ml at Rp22.000, Bintang 330ml at Rp35.000, Coca-Cola 250ml at Rp9.000, and a 4kg ice bag at Rp25.000. The delivery fee is confirmed in the chat from your villa name or map pin. We do not invent a flat online fee. There is no trolley checkout.",
  lead: `Neighborhood prices from a family shop in Abianbase. Tourists searching alcohol near me, and villa guests who do not know ${areaList("en")}, chat WhatsApp after browsing the shelf. Owner: Made Hendrik.`,
  areasTitle: "Where we deliver",
  areasBody:
    "The shop is in Abianbase, Mengwi, Badung. We regularly take drinks to villas around Canggu, Seminyak, Kuta, Ubud, and Tanah Lot. Send a Google pin or the villa name in the chat so we can say yes to that run before anyone gets on a bike. If you are outside those pockets, still message us — we will tell you honestly if the rider can make it.",
  howTitle: "How to book this alcohol delivery service",
  steps: [
    {
      title: "1. Browse the shelf",
      text: "Open the shop for beer, cider, Smirnoff Ice, cola, water, ice, and snacks. Note the bottles and packs you want. Prices are in rupiah and match the product pages.",
    },
    {
      title: "2. Chat WhatsApp to confirm",
      text: "Tap ORDER NOW. Tell Made your villa name or pin, the list, and whether you will pay cash or bank transfer. We confirm what is actually in the cooler today.",
    },
    {
      title: "3. We bring it to the door",
      text: "After stock and the drop point are agreed, we arrange delivery. Ice is packed last. You must be 21 or older. There is no trolley on this site.",
    },
  ],
  pricesTitle: "Neighborhood prices (from the shop catalog)",
  pricesBody:
    "These figures are the live catalog prices on this website, not beach-club list prices. Stock moves. Chat before you count on a six-pack or a box. Delivery cost is not listed here because it depends on your pin — we confirm it in WhatsApp.",
  inclusionsTitle: "What an order can include",
  notIncludedTitle: "What we do not pretend to offer",
  faqTitle: "Alcohol delivery service FAQs",
  faqs: [
    {
      question: "Is MadeBrings an alcohol delivery service near me in Bali?",
      answer:
        "If you are in Abianbase or around Canggu, Seminyak, Kuta, Ubud, or Tanah Lot, yes — we are a family shop in Abianbase that delivers beer, cider, mixers, ice, and water to villas and homes. Send a pin on WhatsApp so we can confirm that specific address.",
    },
    {
      question: "How do tourists order if they do not know the area?",
      answer:
        "Browse this site, copy the product names, then WhatsApp a villa name or Google Maps pin. You do not need to find the shop on a scooter first. We confirm stock and the rider path before you pay.",
    },
    {
      question: "What does alcohol delivery cost?",
      answer:
        "Product prices are on the shop pages (for example Bintang 330ml at Rp35.000 and a 4kg ice bag at Rp25.000). The delivery amount is confirmed in chat from your location. We do not publish a fake flat fee.",
    },
    {
      question: "What is included in a typical villa run?",
      answer:
        "Beer or cider, ready-to-drink cans, cola or tonic, drinking water, ice, and optional snacks or a 3-day ice-box rental. We only send what we have confirmed on the shelf that day.",
    },
    {
      question: "How do I pay?",
      answer:
        "Cash or bank transfer after we confirm the order on WhatsApp. There is no card trolley on the website.",
    },
    {
      question: "Do I have to be 21?",
      answer:
        "Yes. Indonesian law only allows alcohol sales to people 21 and over. We will not sell to anyone younger.",
    },
    {
      question: "How fast is delivery?",
      answer:
        "We are a local family rider, not a 24-hour app. Timing depends on stock, traffic, and where your villa is. We give you an honest window in the chat after we confirm the pin.",
    },
  ],
  relatedTitle: "Guides for high-intent searches",
  ctaTitle: "Chat first to confirm your order",
  ctaBody:
    "WhatsApp is the till. Send your list and pin. Made Hendrik will confirm stock, payment, and delivery from Abianbase.",
  shopCta: "Browse the shop",
  bookCta: "ORDER NOW",
};

const id: MoneyCopy = {
  kicker: "Abianbase · Badung · Bali",
  h1: "Jasa antar alkohol di Abianbase, Bali",
  title: "Jasa antar alkohol di Abianbase, Bali",
  description:
    "MadeBrings jasa antar alkohol keluarga di Abianbase, Bali. Bir, sider, kola, air, dan es ke Canggu, Seminyak, Kuta, Ubud, dan Tanah Lot. Chat WhatsApp untuk pesan.",
  speakable:
    "MadeBrings adalah layanan antar alkohol keluarga di Abianbase, Badung, Bali. Jika Anda mencari alkohol near me atau wisatawan yang butuh minuman di villa dan belum kenal kawasan, mulai di sini. Kami menjual bir, sider, kaleng siap minum, kola, air, es, dan cemilan. Kami antar ke Abianbase dan sekitar Canggu, Seminyak, Kuta, Ubud, dan Tanah Lot. Lihat rak di situs ini, lalu chat WhatsApp agar Made Hendrik konfirmasi stok hari ini. Bayar tunai atau transfer setelah konfirmasi. Hukum Indonesia mewajibkan pembeli berusia 21 tahun atau lebih. Harga tetangga meliputi Singaraja 330ml Rp22.000, Bintang 330ml Rp35.000, Coca-Cola 250ml Rp9.000, dan es 4kg Rp25.000. Ongkir dikonfirmasi di chat dari nama villa atau pin peta. Kami tidak memasang ongkir datar fiktif. Tidak ada keranjang belanja di situs. Es dikemas terakhir. Jika dus habis, kami bilang sebelum rider berangkat.",
  lead: `Harga tetangga dari toko keluarga di Abianbase. Wisatawan yang mencari alkohol near me, dan tamu villa yang belum kenal ${areaList("id")}, chat WhatsApp setelah melihat rak. Pemilik: Made Hendrik.`,
  areasTitle: "Wilayah pengantaran",
  areasBody:
    "Toko kami di Abianbase, Mengwi, Badung. Kami rutin antar minuman ke villa sekitar Canggu, Seminyak, Kuta, Ubud, dan Tanah Lot. Kirim pin Google atau nama villa di chat agar kami bisa bilang ya sebelum ada yang naik motor. Jika di luar kantong itu, tetap chat — kami jujur jika rider tidak bisa.",
  howTitle: "Cara pesan jasa antar alkohol ini",
  steps: [
    {
      title: "1. Lihat rak toko",
      text: "Buka toko untuk bir, sider, Smirnoff Ice, kola, air, es, dan cemilan. Catat botol dan pak yang Anda mau. Harga dalam rupiah sesuai halaman produk.",
    },
    {
      title: "2. Chat WhatsApp untuk konfirmasi",
      text: "Ketuk PESAN SEKARANG. Sebutkan nama villa atau pin, daftar belanja, dan apakah bayar tunai atau transfer. Kami konfirmasi isi pendingin hari ini.",
    },
    {
      title: "3. Kami antar ke pintu",
      text: "Setelah stok dan titik antar disepakati, kami atur pengantaran. Es dikemas terakhir. Harus 21 tahun atau lebih. Tidak ada keranjang di situs ini.",
    },
  ],
  pricesTitle: "Harga tetangga (dari katalog toko)",
  pricesBody:
    "Angka ini harga katalog di situs, bukan daftar harga beach club. Stok bergerak. Chat dulu sebelum mengandalkan pak isi enam atau dus. Ongkir tidak ditulis di sini karena tergantung pin — kami konfirmasi di WhatsApp.",
  inclusionsTitle: "Apa yang bisa masuk pesanan",
  notIncludedTitle: "Yang tidak kami janjikan",
  faqTitle: "FAQ jasa antar alkohol",
  faqs: [
    {
      question: "Apakah MadeBrings jasa antar alkohol near me di Bali?",
      answer:
        "Jika Anda di Abianbase atau sekitar Canggu, Seminyak, Kuta, Ubud, atau Tanah Lot, ya — kami toko keluarga di Abianbase yang antar bir, sider, mixer, es, dan air ke villa dan rumah. Kirim pin di WhatsApp agar alamat itu dikonfirmasi.",
    },
    {
      question: "Bagaimana wisatawan pesan jika belum kenal kawasan?",
      answer:
        "Lihat situs ini, salin nama produk, lalu WhatsApp nama villa atau pin Google Maps. Tidak perlu mencari toko dengan skuter dulu. Kami konfirmasi stok dan jalur rider sebelum Anda bayar.",
    },
    {
      question: "Berapa biaya antar alkohol?",
      answer:
        "Harga produk ada di halaman toko (contoh Bintang 330ml Rp35.000 dan es 4kg Rp25.000). Nominal pengantaran dikonfirmasi di chat dari lokasi Anda. Kami tidak memasang ongkir datar fiktif.",
    },
    {
      question: "Apa isi pengantaran villa yang biasa?",
      answer:
        "Bir atau sider, kaleng siap minum, kola atau tonik, air minum, es, plus cemilan atau sewa kotak es 3 hari jika perlu. Kami hanya kirim yang sudah dikonfirmasi di rak hari itu.",
    },
    {
      question: "Bagaimana cara bayar?",
      answer:
        "Tunai atau transfer bank setelah kami konfirmasi pesanan di WhatsApp. Tidak ada keranjang kartu di situs.",
    },
    {
      question: "Harus 21 tahun?",
      answer:
        "Ya. Hukum Indonesia hanya mengizinkan penjualan alkohol kepada orang berusia 21 tahun ke atas. Kami tidak menjual kepada yang lebih muda.",
    },
    {
      question: "Seberapa cepat pengantarannya?",
      answer:
        "Kami rider toko keluarga, bukan aplikasi 24 jam. Waktu tergantung stok, lalu lintas, dan lokasi villa. Kami beri jendela yang jujur di chat setelah pin dikonfirmasi.",
    },
  ],
  relatedTitle: "Panduan pencarian berniat beli",
  ctaTitle: "Chat dulu untuk konfirmasi pesanan",
  ctaBody:
    "WhatsApp adalah kasirnya. Kirim daftar dan pin. Made Hendrik akan konfirmasi stok, pembayaran, dan pengantaran dari Abianbase.",
  shopCta: "Lihat toko",
  bookCta: "PESAN SEKARANG",
};

export const moneyCopy: Record<Locale, MoneyCopy> = { en, id };

export const moneyDateModified = CONTENT_UPDATED;
