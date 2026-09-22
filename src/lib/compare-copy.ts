import type { Locale } from "@/lib/i18n";
import { MONEY_PATH, SEO_CONTENT_UPDATED, serviceAreas } from "@/lib/seo-paths";

export type CompareRow = {
  criterion: string;
  madebrings: string;
  typicalCanggu: string;
};

export type CompareCopy = {
  kicker: string;
  h1: string;
  lead: string;
  speakable: string;
  methodHeading: string;
  methodBody: string[];
  sourcesHeading: string;
  sources: { name: string; href: string; note: string }[];
  tableHeading: string;
  columns: { feature: string; us: string; them: string };
  rows: CompareRow[];
  limitsHeading: string;
  limits: string[];
  ctaHeading: string;
  ctaBody: string;
};

const sources = [
  {
    name: "Wow Booze Bali",
    href: "https://wowbooze.com/",
    note: "Public 24/7 alcohol delivery and bar catering positioning",
  },
  {
    name: "The Boogaloo Bali",
    href: "https://theboogaloobali.com/",
    note: "Public 24/7 delivery and bar catering positioning",
  },
  {
    name: "Go Drinks Bali",
    href: "https://godrinksbali.com/",
    note: "Public beer and late-hours delivery positioning",
  },
  {
    name: "Canggu Beverage",
    href: "https://canggubeverage.com/",
    note: "Public 24/7 Canggu alcohol delivery catalog",
  },
  {
    name: "Love Anchor Alcohol Delivery Bali",
    href: "https://alcohol-delivery-bali-loveanchorcanggu.com/",
    note: "Public Canggu / Seminyak 24/7 beer delivery positioning",
  },
  {
    name: "Raja Botol",
    href: "https://rajabotol.com/",
    note: "Public Canggu villa alcohol delivery articles",
  },
] as const;

const enSpeakable = `This page is the methodology behind how MadeBrings talks about other Bali alcohol delivery brands. In September 2026 we read public homepages for Wow Booze, The Boogaloo, Go Drinks Bali, Canggu Beverage, Love Anchor, and Raja Botol. We scored only what those sites claim in public: hours, catalog breadth, checkout style, and named areas. We did not scrape live competitor prices into this table and we do not invent their delivery fees. MadeBrings is a family shop in Abianbase with a beer, Ice, mixer, water, and ice catalog, WhatsApp checkout, cash or bank transfer, and named areas of Abianbase, Canggu, Seminyak, Kuta, Ubud, and Tanah Lot. We are not 24/7. Use this page as a linkable comparison asset, then book on our alcohol delivery page if a neighborhood cooler is what you wanted. Tourists searching alcohol near me can treat the table as a filter, not as a ranking of star ratings we never collected.`;

const idSpeakable = `Halaman ini metodologi MadeBrings saat berbicara tentang merek antar alkohol Bali lain. Pada September 2026 kami membaca beranda publik Wow Booze, The Boogaloo, Go Drinks Bali, Canggu Beverage, Love Anchor, dan Raja Botol. Kami menilai hanya klaim publik: jam, lebar katalog, gaya checkout, dan area yang disebut. Kami tidak mencomot harga kompetitor ke tabel ini dan tidak mengarang ongkir mereka. MadeBrings toko keluarga di Abianbase dengan katalog bir, Ice, mixer, air, dan es, checkout WhatsApp, tunai atau transfer, dan area Abianbase, Canggu, Seminyak, Kuta, Ubud, dan Tanah Lot. Kami bukan 24/7. Pakai halaman ini sebagai aset perbandingan yang bisa ditautkan, lalu pesan di halaman antar alkohol jika pendingin tetangga yang Anda cari. Turis yang mencari alkohol terdekat bisa memakai tabel sebagai saringan, bukan peringkat bintang yang tidak pernah kami kumpulkan.`;

const compareCopy: Record<Locale, CompareCopy> = {
  en: {
    kicker: "Linkable method",
    h1: "How we compare alcohol delivery in Bali",
    lead: "A public-source comparison of 24/7 Canggu-style shops versus a family cooler in Abianbase. No invented competitor prices. No fake scores.",
    speakable: enSpeakable,
    methodHeading: "Method",
    methodBody: [
      "Date of review: 22 September 2026. Sources: public homepages and about pages linked below.",
      "Criteria: (1) hours they claim, (2) catalog they put on the homepage (spirits/wine vs beer-ice-mixers), (3) how you pay, (4) which areas they name, (5) whether they present as a family neighborhood shop.",
      "We do not copy their product prices into this table. Prices change. If you need a number, open their site or ours on the same day.",
      `MadeBrings areas we are willing to name: ${serviceAreas.join(", ")}. Each run is still confirmed on WhatsApp.`,
    ],
    sourcesHeading: "Public sources we read",
    sources: sources.map((source) => ({ ...source })),
    tableHeading: "What differs, in plain language",
    columns: {
      feature: "Question",
      us: "MadeBrings",
      them: "Typical 24/7 Canggu-style site (as they describe themselves)",
    },
    rows: [
      {
        criterion: "Hours claimed",
        madebrings: "Family shop hours — we confirm in chat, no 24/7 badge",
        typicalCanggu: "Often “24/7” or late-night windows on the homepage",
      },
      {
        criterion: "Catalog on the homepage",
        madebrings: "Beer, Radler, Smirnoff Ice, mixers, water, ice, snacks, esky rental",
        typicalCanggu: "Usually a full spirits and wine list plus beer",
      },
      {
        criterion: "Checkout",
        madebrings: "WhatsApp. Cash or bank transfer after stock confirm",
        typicalCanggu: "Website cart and/or WhatsApp; some take cards",
      },
      {
        criterion: "Named tourist areas",
        madebrings: serviceAreas.join(", "),
        typicalCanggu: "Canggu and Seminyak first; Ubud often an extended zone",
      },
      {
        criterion: "Shop type",
        madebrings: "Family shop in Abianbase owned by Made Hendrik",
        typicalCanggu: "Online bottle shop / bar catering brands",
      },
      {
        criterion: "Speed claims",
        madebrings: "None published — pin goes in the chat",
        typicalCanggu: "Often 20–45 minute marketing claims",
      },
    ],
    limitsHeading: "Limits of this asset",
    limits: [
      "This is not a lab test and not a paid ranking.",
      "We may miss a competitor who launched after this date.",
      "We will not paste their live prices here; that would rot and it is not our catalog.",
      "If a brand changes its about page, our notes can lag until we refresh this URL.",
    ],
    ctaHeading: "If you wanted the neighborhood cooler",
    ctaBody:
      "Book on the alcohol delivery page. If you needed a 24/7 whisky warehouse, the sources above are the shops that say they are that.",
  },
  id: {
    kicker: "Metode yang bisa ditautkan",
    h1: "Cara kami membandingkan antar alkohol di Bali",
    lead: "Perbandingan sumber publik antara toko gaya Canggu 24/7 versus pendingin keluarga di Abianbase. Tanpa harga kompetitor rekaan. Tanpa skor palsu.",
    speakable: idSpeakable,
    methodHeading: "Metode",
    methodBody: [
      "Tanggal tinjauan: 22 September 2026. Sumber: beranda dan halaman about publik yang ditautkan di bawah.",
      "Kriteria: (1) jam yang diklaim, (2) katalog di beranda (spirit/anggur vs bir-es-mixer), (3) cara bayar, (4) area yang disebut, (5) apakah tampil sebagai toko tetangga keluarga.",
      "Kami tidak menyalin harga produk mereka ke tabel ini. Harga berubah. Jika butuh angka, buka situs mereka atau kami di hari yang sama.",
      `Area MadeBrings yang kami bersedia sebut: ${serviceAreas.join(", ")}. Setiap jalan tetap dikonfirmasi di WhatsApp.`,
    ],
    sourcesHeading: "Sumber publik yang kami baca",
    sources: sources.map((source) => ({ ...source })),
    tableHeading: "Apa yang berbeda, dalam bahasa polos",
    columns: {
      feature: "Pertanyaan",
      us: "MadeBrings",
      them: "Situs gaya Canggu 24/7 (seperti mereka menggambarkan diri)",
    },
    rows: [
      {
        criterion: "Jam yang diklaim",
        madebrings: "Jam toko keluarga — kami konfirmasi di chat, tanpa lencana 24/7",
        typicalCanggu: "Sering “24/7” atau jendela larut malam di beranda",
      },
      {
        criterion: "Katalog di beranda",
        madebrings: "Bir, Radler, Smirnoff Ice, mixer, air, es, cemilan, sewa esky",
        typicalCanggu: "Biasanya daftar spirit dan anggur penuh plus bir",
      },
      {
        criterion: "Checkout",
        madebrings: "WhatsApp. Tunai atau transfer setelah stok dikonfirmasi",
        typicalCanggu: "Keranjang situs dan/atau WhatsApp; sebagian terima kartu",
      },
      {
        criterion: "Area turis yang disebut",
        madebrings: serviceAreas.join(", "),
        typicalCanggu: "Canggu dan Seminyak dulu; Ubud sering zona tambahan",
      },
      {
        criterion: "Jenis toko",
        madebrings: "Toko keluarga di Abianbase milik Made Hendrik",
        typicalCanggu: "Merek toko botol daring / katering bar",
      },
      {
        criterion: "Klaim kecepatan",
        madebrings: "Tidak dipublikasikan — pin masuk di chat",
        typicalCanggu: "Sering klaim pemasaran 20–45 menit",
      },
    ],
    limitsHeading: "Batas aset ini",
    limits: [
      "Ini bukan tes lab dan bukan peringkat berbayar.",
      "Kami bisa melewatkan kompetitor yang muncul setelah tanggal ini.",
      "Kami tidak menempel harga hidup mereka di sini; itu akan basi dan itu bukan katalog kami.",
      "Jika merek mengubah halaman about, catatan kami bisa tertinggal sampai URL ini diperbarui.",
    ],
    ctaHeading: "Jika yang Anda mau pendingin tetangga",
    ctaBody:
      "Pesan di halaman antar alkohol. Jika Anda butuh gudang wiski 24/7, sumber di atas adalah toko yang bilang mereka itu.",
  },
};

export function getCompareCopy(locale: Locale) {
  return compareCopy[locale];
}

export const comparePageMeta = {
  en: {
    title: "Compare alcohol delivery Bali | Method",
    description:
      "How MadeBrings compares Bali alcohol delivery brands using public homepages: hours, catalog, checkout, and areas. No invented competitor prices. Book the Abianbase shop if you want a family cooler.",
  },
  id: {
    title: "Bandingkan antar alkohol Bali | Metode",
    description:
      "Cara MadeBrings membandingkan merek antar alkohol Bali dari beranda publik: jam, katalog, checkout, dan area. Tanpa harga kompetitor rekaan. Pesan toko Abianbase jika mau pendingin keluarga.",
  },
} as const;

export const compareDateModified = SEO_CONTENT_UPDATED;
export const compareBookingHref = MONEY_PATH;
