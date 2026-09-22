import type { Locale } from "@/lib/i18n";
import { listedPrices } from "@/lib/money-copy";
import { MONEY_PATH, SEO_CONTENT_UPDATED, serviceAreas } from "@/lib/seo-paths";
import { siteConfig } from "@/lib/site";

export type PressCopy = {
  kicker: string;
  h1: string;
  lead: string;
  speakable: string;
  factsHeading: string;
  facts: { label: string; value: string }[];
  boilerplateHeading: string;
  boilerplate: string;
  assetsHeading: string;
  assetsBody: string;
  contactHeading: string;
  contactBody: string;
  usageHeading: string;
  usage: string[];
};

const enSpeakable = `MadeBrings is a family alcohol delivery shop in Abianbase, Mengwi, Badung, Bali, owned by Made Hendrik. Journalists, villa hosts, and directory editors can use this kit: we sell beer, cider-style Radler, Smirnoff Ice, Coca-Cola and other mixers, Aqua water, 4kg ice bags, a three-day ice-box rental, and snacks. Checkout is WhatsApp. Payment is cash or bank transfer. Customers must be 21 or older. Service areas we name in public are Abianbase, Canggu, Seminyak, Kuta, Ubud, and Tanah Lot. Listed starting prices include Coca-Cola at ${listedPrices.coke}, Singaraja 330ml at ${listedPrices.singaraja}, and Bintang 330ml at ${listedPrices.bintang}. We do not publish invented review scores, 24/7 hours, or 30-minute timers. For a booking story, link the alcohol delivery page. For photos, use the emblem on this site and credit MadeBrings. Contact the shop on WhatsApp using the number on madebrings.com.`;

const idSpeakable = `MadeBrings adalah toko antar alkohol keluarga di Abianbase, Mengwi, Badung, Bali, milik Made Hendrik. Jurnalis, host villa, dan editor direktori bisa memakai kit ini: kami menjual bir, Radler, Smirnoff Ice, Coca-Cola dan mixer lain, air Aqua, es batu 4kg, sewa kotak es tiga hari, dan cemilan. Checkout WhatsApp. Bayar tunai atau transfer bank. Pelanggan harus 21 tahun ke atas. Area yang kami sebut di publik: Abianbase, Canggu, Seminyak, Kuta, Ubud, dan Tanah Lot. Harga awal tertera termasuk Coca-Cola ${listedPrices.coke}, Singaraja 330ml ${listedPrices.singaraja}, dan Bintang 330ml ${listedPrices.bintang}. Kami tidak memublikasikan skor ulasan rekaan, jam 24/7, atau timer 30 menit. Untuk berita pemesanan, tautkan halaman antar alkohol. Untuk foto, pakai emblem di situs ini dan kredit MadeBrings. Hubungi toko di WhatsApp dengan nomor di madebrings.com. Tulis pin villa di pesan pertama agar Made tidak menebak alamat.`;

const pressCopy: Record<Locale, PressCopy> = {
  en: {
    kicker: "Media kit",
    h1: "Press and media kit",
    lead: "Facts for journalists, villa hosts, and local directories. Nothing here is a fabricated review or a 24/7 promise.",
    speakable: enSpeakable,
    factsHeading: "Boilerplate facts",
    facts: [
      { label: "Name", value: siteConfig.legalName },
      { label: "Owner", value: siteConfig.owner },
      { label: "Type", value: "Family alcohol delivery shop" },
      { label: "Address", value: siteConfig.address.display },
      { label: "Areas named", value: serviceAreas.join(", ") },
      { label: "Checkout", value: "WhatsApp" },
      { label: "Payment", value: "Cash or bank transfer" },
      { label: "Age", value: `${siteConfig.ageLimit}+` },
      { label: "Currency", value: siteConfig.currency },
      {
        label: "Catalog",
        value: "Beer, Radler, Smirnoff Ice, mixers, water, ice, snacks, 3-day ice-box rental",
      },
    ],
    boilerplateHeading: "Short boilerplate",
    boilerplate: `MadeBrings is a family-run alcohol delivery shop in Abianbase, Badung, Bali, owned by ${siteConfig.owner}. Guests WhatsApp for beer, ready-to-drink Ice, mixers, water, and ice. Delivery is arranged in chat for stays around ${serviceAreas.join(", ")}. Payment is cash or bank transfer. Sales of alcohol are 21+ only.`,
    assetsHeading: "Assets",
    assetsBody:
      "Use the MadeBrings emblem (logo.png on this site) on a cream or forest-green field. Do not add fake star widgets. Product photos on the shop are supplier shots with our emblem; ask before republishing a full gallery.",
    contactHeading: "Press contact",
    contactBody:
      "Message the shop on WhatsApp or Instagram. There is no separate PR desk — you will reach the same family that packs the cooler.",
    usageHeading: "When you link to us",
    usage: [
      `Money / booking page: ${MONEY_PATH}`,
      "Shop catalog for SKUs and listed prices",
      "This press page for the fact sheet",
      "Do not attribute 24/7 or 30-minute delivery to MadeBrings",
    ],
  },
  id: {
    kicker: "Kit media",
    h1: "Kit pers dan media",
    lead: "Fakta untuk jurnalis, host villa, dan direktori lokal. Tidak ada ulasan rekaan atau janji 24/7 di sini.",
    speakable: idSpeakable,
    factsHeading: "Fakta boilerplate",
    facts: [
      { label: "Nama", value: siteConfig.legalName },
      { label: "Pemilik", value: siteConfig.owner },
      { label: "Jenis", value: "Toko antar alkohol keluarga" },
      { label: "Alamat", value: siteConfig.address.display },
      { label: "Area yang disebut", value: serviceAreas.join(", ") },
      { label: "Checkout", value: "WhatsApp" },
      { label: "Pembayaran", value: "Tunai atau transfer bank" },
      { label: "Usia", value: `${siteConfig.ageLimit}+` },
      { label: "Mata uang", value: siteConfig.currency },
      {
        label: "Katalog",
        value: "Bir, Radler, Smirnoff Ice, mixer, air, es, cemilan, sewa kotak es 3 hari",
      },
    ],
    boilerplateHeading: "Boilerplate singkat",
    boilerplate: `MadeBrings adalah toko antar alkohol keluarga di Abianbase, Badung, Bali, milik ${siteConfig.owner}. Tamu WhatsApp untuk bir, Ice siap minum, mixer, air, dan es. Pengantaran diatur di chat untuk menginap di sekitar ${serviceAreas.join(", ")}. Bayar tunai atau transfer. Penjualan alkohol hanya 21+.`,
    assetsHeading: "Aset",
    assetsBody:
      "Pakai emblem MadeBrings (logo.png di situs ini) di bidang krem atau hijau hutan. Jangan menambah widget bintang palsu. Foto produk di toko adalah foto pemasok dengan emblem kami; tanya sebelum menerbitkan galeri penuh.",
    contactHeading: "Kontak pers",
    contactBody:
      "Pesan toko di WhatsApp atau Instagram. Tidak ada meja PR terpisah — Anda akan sampai ke keluarga yang mengemas pendingin.",
    usageHeading: "Saat Anda menautkan kami",
    usage: [
      `Halaman pesan: ${MONEY_PATH}`,
      "Katalog toko untuk SKU dan harga tertera",
      "Halaman pers ini untuk lembar fakta",
      "Jangan atributkan antar 24/7 atau 30 menit kepada MadeBrings",
    ],
  },
};

export function getPressCopy(locale: Locale) {
  return pressCopy[locale];
}

export const pressPageMeta = {
  en: {
    title: "Press kit | MadeBrings alcohol delivery Bali",
    description:
      "Media kit for MadeBrings, a family alcohol delivery shop in Abianbase, Bali. Owner, areas, catalog, WhatsApp checkout, and how to link the booking page. No fake reviews.",
  },
  id: {
    title: "Kit pers | MadeBrings jasa antar alkohol Bali",
    description:
      "Kit media MadeBrings, toko antar alkohol keluarga di Abianbase, Bali. Pemilik, area, katalog, checkout WhatsApp, dan cara menautkan halaman pesan. Tanpa ulasan palsu.",
  },
} as const;

export const pressDateModified = SEO_CONTENT_UPDATED;
