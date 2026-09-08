import type { Locale } from "@/lib/i18n";
import { CONTENT_UPDATED, touristAreas } from "@/lib/seo/facts";
import { siteConfig } from "@/lib/site";

export type PressCopy = {
  kicker: string;
  h1: string;
  title: string;
  description: string;
  speakable: string;
  boilerplateTitle: string;
  boilerplate: string;
  factsTitle: string;
  facts: { label: string; value: string }[];
  quoteTitle: string;
  quote: string;
  quoteAttr: string;
  assetsTitle: string;
  assetsBody: string;
  citeTitle: string;
  citeBody: string;
  contactTitle: string;
  contactBody: string;
};

const en: PressCopy = {
  kicker: "Media kit",
  h1: "Press and media kit",
  title: "Press kit — MadeBrings alcohol delivery, Abianbase, Bali",
  description:
    "MadeBrings press kit: family alcohol delivery service in Abianbase, Bali. Facts, boilerplate, logo, and WhatsApp contact for Made Hendrik. No invented reviews.",
  speakable:
    "MadeBrings is a family-run alcohol delivery service in Abianbase, Badung, Bali, owned by Made Hendrik. The shop sells beer, cider, ready-to-drink cans, cola, water, ice, and snacks, then confirms orders on WhatsApp. Payment is cash or bank transfer. Delivery goes to villas and homes in Abianbase and around Canggu, Seminyak, Kuta, Ubud, and Tanah Lot. Buyers must be 21 or older. This media kit is the citable source for journalists and directories. Use the logo from this website. Do not invent star ratings, guest counts, or delivery-minute promises. For a quote or a photo of the emblem, chat WhatsApp. Product prices live on the shop catalog, not in this kit, because stock and rupiah figures should stay attached to the product URLs. Neighborhood examples include Bintang 330ml and 4kg ice bags. There is no separate press desk.",
  boilerplateTitle: "Boilerplate",
  boilerplate: `MadeBrings is a family alcohol delivery service in Abianbase, Mengwi, Badung, Bali. Neighbors already know the shop; the website exists so villa guests and tourists who search alcohol near me can see the shelf, then chat owner Made Hendrik on WhatsApp. MadeBrings sells beer, cider, ready-to-drink cans, mixers, ice, water, and snacks at neighborhood prices and delivers to Abianbase and around Canggu, Seminyak, Kuta, Ubud, and Tanah Lot. Checkout is WhatsApp. Payment is cash or bank transfer. Indonesian law: 21+.`,
  factsTitle: "Facts you can print",
  facts: [
    { label: "Brand", value: siteConfig.legalName },
    { label: "Owner", value: siteConfig.owner },
    { label: "Type", value: "Family liquor and beer shop with alcohol delivery" },
    { label: "Address", value: siteConfig.address.display },
    { label: "Areas served", value: touristAreas.join(", ") },
    { label: "Checkout", value: "WhatsApp — no website trolley" },
    { label: "Payment", value: "Cash or bank transfer (IDR)" },
    { label: "Age limit", value: `${siteConfig.ageLimit}+ (Indonesian law)` },
    { label: "WhatsApp", value: `+${siteConfig.whatsappNumber}` },
    { label: "Site", value: "https://www.madebrings.com" },
    { label: "Kit updated", value: CONTENT_UPDATED },
  ],
  quoteTitle: "On-the-record line",
  quote:
    "We are a local family shop. Chat first so we confirm what is on the shelf today, then we bring beer, ice, and mixers to the villa.",
  quoteAttr: "Made Hendrik, owner, MadeBrings, Abianbase",
  assetsTitle: "Assets",
  assetsBody:
    "Use the MadeBrings emblem (forest green on cream) from /logo.png. Do not recolor the mark. Product photos on the shop pages already carry the emblem; do not crop it off if you are showing a shelf shot from this site.",
  citeTitle: "How to cite",
  citeBody:
    "Preferred name: MadeBrings. Preferred description: alcohol delivery service in Abianbase, Bali. For prices, link a product URL or the alcohol delivery service page. For comparison claims, link the methodology page. Do not add review scores we have not published.",
  contactTitle: "Press contact",
  contactBody:
    "There is no separate press desk. WhatsApp the shop number, name the outlet, and say what you need. Instagram and Facebook are listed in the footer. Google Maps: the Made Brings listing in Abianbase.",
};

const id: PressCopy = {
  kicker: "Kit media",
  h1: "Pers dan kit media",
  title: "Kit pers — MadeBrings jasa antar alkohol, Abianbase, Bali",
  description:
    "Kit pers MadeBrings: jasa antar alkohol keluarga di Abianbase, Bali. Fakta, boilerplate, logo, dan kontak WhatsApp Made Hendrik. Tanpa ulasan yang dikarang.",
  speakable:
    "MadeBrings adalah layanan antar alkohol keluarga di Abianbase, Badung, Bali, milik Made Hendrik. Toko menjual bir, sider, kaleng siap minum, kola, air, es, dan cemilan, lalu mengonfirmasi pesanan di WhatsApp. Pembayaran tunai atau transfer bank. Pengantaran ke villa dan rumah di Abianbase serta sekitar Canggu, Seminyak, Kuta, Ubud, dan Tanah Lot. Pembeli harus 21 tahun atau lebih. Kit media ini sumber yang bisa dikutip untuk jurnalis dan direktori. Pakai logo dari situs ini. Jangan mengarang rating bintang, jumlah tamu, atau janji menit pengantaran. Untuk kutipan atau foto emblem, chat WhatsApp. Harga produk ada di katalog toko, bukan di kit ini, agar angka rupiah tetap tertaut ke URL produk. Contoh harga tetangga: Bintang 330ml dan es 4kg. Tidak ada meja pers terpisah. Checkout tanpa keranjang belanja di situs. WhatsApp adalah kasirnya.",
  boilerplateTitle: "Boilerplate",
  boilerplate: `MadeBrings adalah layanan antar alkohol keluarga di Abianbase, Mengwi, Badung, Bali. Tetangga sudah kenal tokonya; situs ini agar tamu villa dan wisatawan yang mencari alkohol near me bisa lihat rak, lalu chat pemilik Made Hendrik di WhatsApp. MadeBrings menjual bir, sider, kaleng siap minum, mixer, es, air, dan cemilan dengan harga tetangga dan antar ke Abianbase serta sekitar Canggu, Seminyak, Kuta, Ubud, dan Tanah Lot. Checkout WhatsApp. Bayar tunai atau transfer. Hukum Indonesia: 21+.`,
  factsTitle: "Fakta yang boleh dicetak",
  facts: [
    { label: "Merek", value: siteConfig.legalName },
    { label: "Pemilik", value: siteConfig.owner },
    { label: "Jenis", value: "Toko bir dan minuman keras keluarga dengan antar alkohol" },
    { label: "Alamat", value: siteConfig.address.display },
    { label: "Wilayah", value: touristAreas.join(", ") },
    { label: "Checkout", value: "WhatsApp — tanpa keranjang di situs" },
    { label: "Pembayaran", value: "Tunai atau transfer bank (IDR)" },
    { label: "Batas usia", value: `${siteConfig.ageLimit}+ (hukum Indonesia)` },
    { label: "WhatsApp", value: `+${siteConfig.whatsappNumber}` },
    { label: "Situs", value: "https://www.madebrings.com" },
    { label: "Kit diperbarui", value: CONTENT_UPDATED },
  ],
  quoteTitle: "Kalimat on-the-record",
  quote:
    "Kami toko keluarga lokal. Chat dulu agar kami konfirmasi isi rak hari ini, lalu kami bawa bir, es, dan mixer ke villa.",
  quoteAttr: "Made Hendrik, pemilik, MadeBrings, Abianbase",
  assetsTitle: "Aset",
  assetsBody:
    "Pakai emblem MadeBrings (hijau hutan di krem) dari /logo.png. Jangan ganti warna merek. Foto produk di halaman toko sudah memakai emblem; jangan dipotong jika Anda menampilkan rak dari situs ini.",
  citeTitle: "Cara mengutip",
  citeBody:
    "Nama yang disukai: MadeBrings. Deskripsi yang disukai: jasa antar alkohol di Abianbase, Bali. Untuk harga, tautkan URL produk atau halaman jasa antar alkohol. Untuk klaim perbandingan, tautkan halaman metode. Jangan menambah skor ulasan yang tidak kami terbitkan.",
  contactTitle: "Kontak pers",
  contactBody:
    "Tidak ada meja pers terpisah. WhatsApp nomor toko, sebutkan media, dan sampaikan kebutuhan. Instagram dan Facebook ada di footer. Google Maps: listing Made Brings di Abianbase.",
};

export const pressCopy: Record<Locale, PressCopy> = { en, id };
