import type { Locale } from "@/lib/i18n";
import { serviceAreas } from "@/lib/delivery";
import { siteConfig } from "@/lib/site";

export const PRESS_PATH = "/press";
export const PRESS_MODIFIED = "2026-11-17";

export const pressCopy: Record<
  Locale,
  {
    title: string;
    description: string;
    kicker: string;
    h1: string;
    lead: string;
    boilerplateTitle: string;
    boilerplate: string;
    factsTitle: string;
    assetsTitle: string;
    assetsBody: string;
    mentionTitle: string;
    mentionBody: string;
    contactTitle: string;
  }
> = {
  en: {
    title: "Press & media kit",
    description:
      "MadeBrings media kit: family alcohol delivery in Abianbase, Bali. Boilerplate, facts, logo use, and WhatsApp contact for journalists and villa hosts. No invented reviews.",
    kicker: "Media kit",
    h1: "Press & media kit",
    lead: "Short, factual copy for journalists, villa hosts, and directories. There are no fabricated reviews or awards on this page.",
    boilerplateTitle: "Boilerplate",
    boilerplate: `MadeBrings is a family-run alcohol delivery service in Abianbase, Badung, Bali, owned by ${siteConfig.owner}. Guests and neighbors WhatsApp the shop to order beer, cider, ready-to-drink cans, mixers, ice, water, and snacks at neighborhood shelf prices. Delivery is arranged to villas and homes around Canggu, Seminyak, Kuta, Ubud, and Tanah Lot after stock is confirmed. Payment is cash or bank transfer. Indonesian law: ${siteConfig.ageLimit}+ only.`,
    factsTitle: "Facts you can print",
    assetsTitle: "Logo & photo",
    assetsBody:
      "Use the MadeBrings emblem as published on this site. Do not recolor it, add fake badges, or crop the udeng off the mark. Product photos on the shop include the emblem in the corner; credit MadeBrings if you republish them.",
    mentionTitle: "How to mention the shop",
    mentionBody:
      "Preferred name: MadeBrings. Preferred description: family alcohol delivery in Abianbase, serving Canggu, Seminyak, Kuta, Ubud, and Tanah Lot via WhatsApp. Website: www.madebrings.com. Do not write that we are 24/7 or that we have a public star rating unless you are citing a third-party page we do not control.",
    contactTitle: "Press contact",
  },
  id: {
    title: "Kit pers & media",
    description:
      "Kit media MadeBrings: antar alkohol keluarga di Abianbase, Bali. Boilerplate, fakta, penggunaan logo, dan kontak WhatsApp untuk jurnalis dan tuan rumah villa. Tanpa ulasan rekaan.",
    kicker: "Kit media",
    h1: "Kit pers & media",
    lead: "Teks singkat dan faktual untuk jurnalis, tuan rumah villa, dan direktori. Tidak ada ulasan atau penghargaan rekaan di halaman ini.",
    boilerplateTitle: "Boilerplate",
    boilerplate: `MadeBrings adalah layanan antar alkohol keluarga di Abianbase, Badung, Bali, milik ${siteConfig.owner}. Tamu dan tetangga chat WhatsApp untuk pesan bir, sider, minuman siap minum, mixer, es, air, dan cemilan dengan harga rak tetangga. Pengantaran ke villa dan rumah di sekitar Canggu, Seminyak, Kuta, Ubud, dan Tanah Lot setelah stok dikonfirmasi. Bayar tunai atau transfer bank. Hukum Indonesia: ${siteConfig.ageLimit}+ saja.`,
    factsTitle: "Fakta yang boleh dicetak",
    assetsTitle: "Logo & foto",
    assetsBody:
      "Gunakan emblem MadeBrings seperti yang terbit di situs ini. Jangan ganti warna, tambah lencana palsu, atau potong udeng dari mark. Foto produk di toko memuat emblem di sudut; kredit MadeBrings jika Anda menerbitkannya ulang.",
    mentionTitle: "Cara menyebut toko",
    mentionBody:
      "Nama yang diutamakan: MadeBrings. Deskripsi yang diutamakan: antar alkohol keluarga di Abianbase, melayani Canggu, Seminyak, Kuta, Ubud, dan Tanah Lot lewat WhatsApp. Situs: www.madebrings.com. Jangan menulis kami 24 jam atau punya rating bintang publik kecuali Anda mengutip halaman pihak ketiga yang tidak kami kendalikan.",
    contactTitle: "Kontak pers",
  },
};

export const pressFacts: Record<Locale, { label: string; value: string }[]> = {
  en: [
    { label: "Legal / trading name", value: siteConfig.legalName },
    { label: "Owner", value: siteConfig.owner },
    { label: "Shop", value: siteConfig.address.display },
    { label: "WhatsApp", value: `+${siteConfig.whatsappNumber}` },
    { label: "Site", value: "https://www.madebrings.com" },
    {
      label: "Areas served",
      value: serviceAreas.filter((area) => area !== "Bali").join(", "),
    },
    {
      label: "Listed catalog",
      value: "Beer, cider, Smirnoff Ice, mixers, ice, water, snacks",
    },
    { label: "Checkout", value: "WhatsApp · cash or bank transfer" },
    { label: "Age", value: `${siteConfig.ageLimit}+ (Indonesian law)` },
  ],
  id: [
    { label: "Nama", value: siteConfig.legalName },
    { label: "Pemilik", value: siteConfig.owner },
    { label: "Toko", value: siteConfig.address.display },
    { label: "WhatsApp", value: `+${siteConfig.whatsappNumber}` },
    { label: "Situs", value: "https://www.madebrings.com" },
    {
      label: "Kawasan",
      value: serviceAreas.filter((area) => area !== "Bali").join(", "),
    },
    {
      label: "Katalog tertera",
      value: "Bir, sider, Smirnoff Ice, mixer, es, air, cemilan",
    },
    { label: "Checkout", value: "WhatsApp · tunai atau transfer bank" },
    { label: "Usia", value: `${siteConfig.ageLimit}+ (hukum Indonesia)` },
  ],
};
