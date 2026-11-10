import type { Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import { BOOKING_PATH, SERVICE_AREAS } from "@/lib/seo-pages";

export type PressCopy = {
  kicker: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  speakable: string;
  boilerplateTitle: string;
  boilerplate: string;
  factsTitle: string;
  facts: { label: string; value: string }[];
  assetsTitle: string;
  assetsBody: string;
  contactTitle: string;
  contactBody: string;
  quoteTitle: string;
  quote: string;
  quoteAttr: string;
};

export const pressCopy: Record<Locale, PressCopy> = {
  en: {
    kicker: "Media kit",
    h1: "MadeBrings press and media kit",
    metaTitle: "MadeBrings press kit · alcohol delivery, Abianbase, Bali",
    metaDescription:
      "Boilerplate, facts, logo, and contact for MadeBrings, a family alcohol delivery shop in Abianbase, Badung, Bali, owned by Made Hendrik. No invented awards.",
    speakable:
      "MadeBrings is a family-run alcohol delivery service in Abianbase, Mengwi, Badung, Bali, owned by Made Hendrik. The shop sells beer, cider, ready-to-drink cans, mixers such as Coca-Cola, water, ice, and snacks, then confirms orders on WhatsApp. Payment is cash or bank transfer. Customers must be 21 or older. Delivery is arranged to pins around Canggu, Seminyak, Kuta, Ubud, and Tanah Lot when the run works. There is no trolley checkout and no 24-hour claim. Public catalog examples include Bintang 330ml at Rp35,000 and a six-pack at Rp200,000. Journalists can use the logo at /logo.png, this boilerplate, and WhatsApp on the contact page. Do not attribute star ratings or awards that this kit does not list. The booking URL for readers is the alcohol delivery Bali page.",
    boilerplateTitle: "Boilerplate (short)",
    boilerplate: `MadeBrings is a family alcohol delivery service in Abianbase, Badung, Bali, owned by ${siteConfig.owner}. Neighbors and villa guests browse beer, mixers, ice, and water on madebrings.com, then confirm the order on WhatsApp. Payment is cash or bank transfer. Indonesian law: 21+ to buy alcohol.`,
    factsTitle: "Fact sheet",
    facts: [
      { label: "Legal / trading name", value: siteConfig.legalName },
      { label: "Owner", value: siteConfig.owner },
      { label: "Shop", value: siteConfig.address.display },
      { label: "Postal", value: siteConfig.address.postalCode },
      { label: "Service areas named on-site", value: SERVICE_AREAS.join(", ") },
      { label: "Checkout", value: "WhatsApp" },
      { label: "Payment", value: "Cash or bank transfer" },
      { label: "Age", value: `${siteConfig.ageLimit}+` },
      { label: "Currency", value: siteConfig.currency },
      { label: "Booking page", value: BOOKING_PATH },
      { label: "WhatsApp", value: `+${siteConfig.whatsappNumber}` },
    ],
    assetsTitle: "Brand assets",
    assetsBody:
      "Use the MadeBrings emblem (forest green on cream). Do not add fake seals, stars, or “official partner” marks. Product photos on the site already carry the emblem in the corner.",
    contactTitle: "Press contact",
    contactBody:
      "Message the shop WhatsApp and say you are media. There is no separate press office. We will not invent a quote about awards we do not have.",
    quoteTitle: "On-the-record line you may use",
    quote:
      "We are a small family shop in Abianbase. Chat first so we confirm what is actually in the cooler — that is the whole difference.",
    quoteAttr: `${siteConfig.owner}, owner`,
  },
  id: {
    kicker: "Kit media",
    h1: "Kit pers dan media MadeBrings",
    metaTitle: "Kit pers MadeBrings · jasa antar alkohol, Abianbase, Bali",
    metaDescription:
      "Boilerplate, fakta, logo, dan kontak MadeBrings, toko antar alkohol keluarga di Abianbase, Badung, Bali, milik Made Hendrik. Tanpa penghargaan rekaan.",
    speakable:
      "MadeBrings adalah layanan antar alkohol keluarga di Abianbase, Mengwi, Badung, Bali, milik Made Hendrik. Toko menjual bir, sider, kaleng siap minum, mixer seperti Coca-Cola, air, es, dan cemilan, lalu mengonfirmasi pesanan di WhatsApp. Bayar tunai atau transfer. Pelanggan harus 21 tahun atau lebih. Pengantaran diatur ke pin sekitar Canggu, Seminyak, Kuta, Ubud, dan Tanah Lot jika rutenya masuk. Tidak ada keranjang belanja dan tidak ada klaim 24 jam. Contoh katalog publik: Bintang 330ml Rp35.000 dan pak isi enam Rp200.000. Jurnalis boleh memakai logo di /logo.png, boilerplate ini, dan WhatsApp di halaman kontak. Jangan menambahkan rating bintang atau penghargaan yang tidak ada di kit ini. URL pemesanan untuk pembaca adalah halaman jasa antar alkohol Bali.",
    boilerplateTitle: "Boilerplate (singkat)",
    boilerplate: `MadeBrings adalah layanan antar alkohol keluarga di Abianbase, Badung, Bali, milik ${siteConfig.owner}. Tetangga dan tamu villa melihat bir, mixer, es, dan air di madebrings.com, lalu konfirmasi pesanan di WhatsApp. Bayar tunai atau transfer. Hukum Indonesia: 21+ untuk membeli alkohol.`,
    factsTitle: "Lembar fakta",
    facts: [
      { label: "Nama", value: siteConfig.legalName },
      { label: "Pemilik", value: siteConfig.owner },
      { label: "Toko", value: siteConfig.address.display },
      { label: "Kode pos", value: siteConfig.address.postalCode },
      { label: "Wilayah di situs", value: SERVICE_AREAS.join(", ") },
      { label: "Checkout", value: "WhatsApp" },
      { label: "Pembayaran", value: "Tunai atau transfer bank" },
      { label: "Usia", value: `${siteConfig.ageLimit}+` },
      { label: "Mata uang", value: siteConfig.currency },
      { label: "Halaman pesan", value: BOOKING_PATH },
      { label: "WhatsApp", value: `+${siteConfig.whatsappNumber}` },
    ],
    assetsTitle: "Aset merek",
    assetsBody:
      "Pakai emblem MadeBrings (hijau hutan di krem). Jangan menambah stempel, bintang, atau tanda “mitra resmi” palsu. Foto produk di situs sudah membawa emblem di sudut.",
    contactTitle: "Kontak pers",
    contactBody:
      "WhatsApp toko dan sebutkan Anda dari media. Tidak ada kantor pers terpisah. Kami tidak akan mengada-ada kutipan tentang penghargaan yang tidak kami miliki.",
    quoteTitle: "Kalimat on-the-record yang boleh dipakai",
    quote:
      "Kami toko keluarga kecil di Abianbase. Chat dulu agar kami konfirmasi isi pendingin yang benar-benar ada — itu saja bedanya.",
    quoteAttr: `${siteConfig.owner}, pemilik`,
  },
};
