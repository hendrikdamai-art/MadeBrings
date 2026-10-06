import type { Locale } from "@/lib/i18n";
import { BOOKING_PATH, sharedFaqs, type FaqItem } from "@/lib/seo-pages";

export type ComparisonRow = {
  criterion: string;
  madebrings: string;
  typical24h: string;
  sourceNote: string;
};

export type ComparisonCopy = {
  kicker: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  speakable: string;
  intro: string[];
  methodTitle: string;
  method: string[];
  tableTitle: string;
  rows: ComparisonRow[];
  limitsTitle: string;
  limits: string[];
  faqs: FaqItem[];
  ctaTitle: string;
  ctaBody: string;
};

export const comparisonCopy: Record<Locale, ComparisonCopy> = {
  en: {
    kicker: "Linkable method · not a review farm",
    h1: "How to compare alcohol delivery in Bali (without fake ratings)",
    metaTitle: "Bali alcohol delivery comparison: method, not slogans",
    metaDescription:
      "A reusable method for comparing Bali alcohol delivery: hours, areas, checkout, fees, catalog prices. MadeBrings facts only; competitor claims cited from their public pages.",
    speakable:
      "Compare Bali alcohol delivery with five checks: opening hours they actually claim, areas they list, how you check out, whether delivery is free or quoted, and whether shelf prices are public. MadeBrings is a family shop in Abianbase, Badung, owned by Made Hendrik. Checkout is WhatsApp. Payment is cash or bank transfer. You must be 21. Public catalog examples: Bintang 330ml Rp35,000, six-pack Rp200,000, Coca-Cola 250ml Rp9,000, 4kg ice Rp25,000. We deliver around Canggu, Seminyak, Kuta, Ubud, and Tanah Lot when the pin works, and we do not advertise 24/7. Competitor 24/7, free-delivery, or 20-minute claims on this page are quoted from those companies’ public websites as of October 2026, not from mystery shoppers. Use the alcohol delivery Bali page to book MadeBrings.",
    intro: [
      "Canggu and Seminyak are full of “fastest / cheapest / #1” alcohol delivery pages. This page is a method you can reuse — and a table of what MadeBrings will actually say in a chat.",
      "We do not invent star ratings for ourselves or for anyone else. Competitor cells cite public pages. MadeBrings cells use only facts on this website and in the catalog.",
    ],
    methodTitle: "The five checks",
    method: [
      "Hours: do they claim 24/7, and do they name Nyepi as closed?",
      "Area list: which south-Bali names are on the site, and is Ubud a surcharge?",
      "Checkout: website cart, WhatsApp, Grab/Gojek, or all three?",
      "Delivery fee: free in a zone, a published flat fee, or quoted per pin?",
      "Shelf prices: can a tourist screenshot a Bintang price before chatting?",
    ],
    tableTitle: "MadeBrings vs a typical 24/7 Canggu operator (public claims)",
    rows: [
      {
        criterion: "Hours",
        madebrings: "Family shop. Chat first. Not 24/7.",
        typical24h:
          "Boogaloo and Love Anchor public FAQs say 24 hours, 7 days (Boogaloo excludes Nyepi; Love Anchor’s FAQ says 365 days).",
        sourceNote:
          "theboogaloobali.com/pages/faqs · alcohol-delivery-bali-loveanchorcanggu.com FAQ",
      },
      {
        criterion: "Areas named on-site",
        madebrings:
          "Abianbase shop; runs around Canggu, Seminyak, Kuta, Ubud, Tanah Lot when the pin works.",
        typical24h:
          "Boogaloo lists Canggu through Sanur/Gianyar. WowBooze lists Canggu through Ubud. Love Anchor’s FAQ says mainly Bali, with Canggu the fastest zone.",
        sourceNote: "Competitor about/FAQ pages, October 2026",
      },
      {
        criterion: "Checkout",
        madebrings: "WhatsApp only. No website trolley.",
        typical24h:
          "Website cart plus WhatsApp is common. Boogaloo also mentions Grab, Gojek, and Tokopedia.",
        sourceNote: "Boogaloo FAQ",
      },
      {
        criterion: "Delivery fee",
        madebrings: "Quoted on WhatsApp for your pin. Not published as a fake flat fee.",
        typical24h:
          "Love Anchor FAQ: Rp60,000 flat in Bali, Rp180,000 rest of Indonesia. WowBooze: free in Canggu/Seminyak/Legian/Kerobokan/Pererenan; Rp30,000 extra under Rp200,000; other areas charged.",
        sourceNote: "Love Anchor FAQ · WowBooze about page",
      },
      {
        criterion: "Public beer price",
        madebrings:
          "Bintang 330ml Rp35,000; six-pack Rp200,000; box Rp595,000 on the MadeBrings catalog.",
        typical24h:
          "BaliDrink’s public menu (October 2026) lists Bintang 330ml carton/24 around Rp600,000. Other operators often hide unit prices until cart or chat.",
        sourceNote: "balidrink.com · madebrings.com/shop",
      },
      {
        criterion: "Age rule",
        madebrings: "21+ (Indonesian law, as stated on this site).",
        typical24h:
          "Check each operator. Some non-Indonesian sites still mention 18; Indonesian law for alcohol sales is 21.",
        sourceNote: "Indonesian law · MadeBrings age gate",
      },
    ],
    limitsTitle: "What this page will not do",
    limits: [
      "No fake MadeBrings reviews, star averages, or “best in Bali” badges.",
      "No mystery-shop of competitor ETAs. If they say 20–30 minutes on their site, we quote that as a claim, not as a fact we measured.",
      "No delivery-fee number for MadeBrings until you send a pin.",
      "Sources can change. If a competitor updates a FAQ, the method still holds even if a cell is stale.",
    ],
    faqs: [
      {
        question: "Who wins on speed?",
        answer:
          "A 24/7 Canggu warehouse will usually claim a faster night ETA than a family shop in Abianbase. We do not contest that slogan. We contest whether you can see a Bintang price and talk to a person before you pay.",
      },
      {
        question: "Who wins on inland pins (Ubud, Tanah Lot, Mengwi)?",
        answer:
          "Geography favors Abianbase for those pins. We still confirm the run in chat. Some 24/7 sites list Ubud with a surcharge or a longer window.",
      },
      ...sharedFaqs.en.slice(0, 3),
    ],
    ctaTitle: "If the method points at a family shop",
    ctaBody:
      "Use the alcohol delivery Bali page. That is the booking URL this comparison is built to support.",
  },
  id: {
    kicker: "Metode yang bisa ditautkan · bukan ladang ulasan",
    h1: "Cara membandingkan jasa antar alkohol di Bali (tanpa rating palsu)",
    metaTitle: "Perbandingan antar alkohol Bali: metode, bukan slogan",
    metaDescription:
      "Metode membandingkan jasa antar alkohol Bali: jam, wilayah, checkout, ongkir, harga rak. Fakta MadeBrings saja; klaim kompetitor dikutip dari halaman publik mereka.",
    speakable:
      "Bandingkan jasa antar alkohol Bali dengan lima cek: jam yang mereka klaim, wilayah yang ditulis, cara checkout, ongkir gratis atau dikutip, dan apakah harga rak publik. MadeBrings toko keluarga di Abianbase, Badung, milik Made Hendrik. Checkout WhatsApp. Bayar tunai atau transfer. Harus 21 tahun. Contoh katalog: Bintang 330ml Rp35.000, pak isi enam Rp200.000, Coca-Cola 250ml Rp9.000, es 4kg Rp25.000. Kami antar sekitar Canggu, Seminyak, Kuta, Ubud, dan Tanah Lot jika pinnya masuk, dan tidak mengiklankan 24/7. Klaim 24/7, antar gratis, atau 20 menit di halaman ini dikutip dari situs publik perusahaan itu per Oktober 2026, bukan dari mystery shopper. Pakai halaman jasa antar alkohol Bali untuk pesan MadeBrings.",
    intro: [
      "Canggu dan Seminyak penuh halaman antar alkohol “tercepat / termurah / nomor satu”. Halaman ini metode yang bisa dipakai ulang — dan tabel yang MadeBrings benar-benar katakan di chat.",
      "Kami tidak mengada-ada rating bintang untuk diri sendiri atau orang lain. Sel kompetitor mengutip halaman publik. Sel MadeBrings hanya memakai fakta di situs ini dan di katalog.",
    ],
    methodTitle: "Lima cek",
    method: [
      "Jam: apakah mereka klaim 24/7, dan apakah Nyepi disebut tutup?",
      "Daftar wilayah: nama Bali selatan mana yang ada di situs, dan apakah Ubud dikenai biaya tambahan?",
      "Checkout: keranjang situs, WhatsApp, Grab/Gojek, atau ketiganya?",
      "Ongkir: gratis di zona, tarif datar publik, atau dikutip per pin?",
      "Harga rak: bisakah wisatawan screenshot harga Bintang sebelum chat?",
    ],
    tableTitle: "MadeBrings vs operator 24/7 Canggu tipikal (klaim publik)",
    rows: [
      {
        criterion: "Jam",
        madebrings: "Toko keluarga. Chat dulu. Bukan 24/7.",
        typical24h:
          "FAQ publik Boogaloo dan Love Anchor menyebut 24 jam, 7 hari (Boogaloo kecuali Nyepi; FAQ Love Anchor menyebut 365 hari).",
        sourceNote:
          "theboogaloobali.com/pages/faqs · FAQ alcohol-delivery-bali-loveanchorcanggu.com",
      },
      {
        criterion: "Wilayah di situs",
        madebrings:
          "Toko Abianbase; rute sekitar Canggu, Seminyak, Kuta, Ubud, Tanah Lot jika pinnya masuk.",
        typical24h:
          "Boogaloo mencantumkan Canggu sampai Sanur/Gianyar. WowBooze mencantumkan Canggu sampai Ubud. FAQ Love Anchor: terutama Bali, Canggu zona tercepat.",
        sourceNote: "Halaman about/FAQ kompetitor, Oktober 2026",
      },
      {
        criterion: "Checkout",
        madebrings: "Hanya WhatsApp. Tidak ada keranjang situs.",
        typical24h:
          "Keranjang situs plus WhatsApp umum. Boogaloo juga menyebut Grab, Gojek, dan Tokopedia.",
        sourceNote: "FAQ Boogaloo",
      },
      {
        criterion: "Ongkir",
        madebrings: "Dikutip di WhatsApp untuk pin Anda. Bukan tarif datar fiktif.",
        typical24h:
          "FAQ Love Anchor: Rp60.000 datar di Bali, Rp180.000 luar Bali. WowBooze: gratis di Canggu/Seminyak/Legian/Kerobokan/Pererenan; Rp30.000 extra di bawah Rp200.000; area lain dikenai biaya.",
        sourceNote: "FAQ Love Anchor · halaman about WowBooze",
      },
      {
        criterion: "Harga bir publik",
        madebrings:
          "Bintang 330ml Rp35.000; pak isi enam Rp200.000; dus Rp595.000 di katalog MadeBrings.",
        typical24h:
          "Menu publik BaliDrink (Oktober 2026) mencantumkan karton Bintang 330ml/24 sekitar Rp600.000. Operator lain sering menyembunyikan harga satuan sampai keranjang atau chat.",
        sourceNote: "balidrink.com · madebrings.com/shop",
      },
      {
        criterion: "Usia",
        madebrings: "21+ (hukum Indonesia, seperti tertulis di situs ini).",
        typical24h:
          "Cek tiap operator. Beberapa situs non-Indonesia masih menyebut 18; hukum Indonesia untuk penjualan alkohol adalah 21.",
        sourceNote: "Hukum Indonesia · gerbang usia MadeBrings",
      },
    ],
    limitsTitle: "Yang tidak dilakukan halaman ini",
    limits: [
      "Tidak ada ulasan MadeBrings palsu, rata-rata bintang, atau lencana “terbaik di Bali”.",
      "Tidak ada mystery-shop ETA kompetitor. Jika mereka bilang 20–30 menit di situs, kami kutip sebagai klaim, bukan fakta yang kami ukur.",
      "Tidak ada angka ongkir MadeBrings sampai Anda kirim pin.",
      "Sumber bisa berubah. Jika kompetitor memperbarui FAQ, metodenya tetap valid meski selnya kedaluwarsa.",
    ],
    faqs: [
      {
        question: "Siapa yang unggul di kecepatan?",
        answer:
          "Gudang 24/7 Canggu biasanya mengklaim ETA malam lebih cepat daripada toko keluarga di Abianbase. Kami tidak membantah slogan itu. Kami menantang apakah Anda bisa lihat harga Bintang dan bicara dengan orang sebelum bayar.",
      },
      {
        question: "Siapa yang unggul di pin darat (Ubud, Tanah Lot, Mengwi)?",
        answer:
          "Geografi berpihak pada Abianbase untuk pin itu. Kami tetap konfirmasi rute di chat. Beberapa situs 24/7 mencantumkan Ubud dengan biaya tambahan atau jendela lebih lama.",
      },
      ...sharedFaqs.id.slice(0, 3),
    ],
    ctaTitle: "Jika metodenya mengarah ke toko keluarga",
    ctaBody:
      "Pakai halaman jasa antar alkohol Bali. Itu URL pemesanan yang didukung perbandingan ini.",
  },
};

export const comparisonBookingPath = BOOKING_PATH;
