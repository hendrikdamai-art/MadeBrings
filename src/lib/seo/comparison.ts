import type { Locale } from "@/lib/i18n";
import { COMPARISON_PATH, CONTENT_UPDATED } from "@/lib/seo/facts";
import type { FaqItem } from "@/lib/seo/money";

export type ComparisonCopy = {
  kicker: string;
  h1: string;
  title: string;
  description: string;
  speakable: string;
  lead: string;
  methodTitle: string;
  methodBody: string;
  dimensionsTitle: string;
  dimensions: { title: string; text: string }[];
  tableTitle: string;
  tableCaption: string;
  rows: { factor: string; madebrings: string; minimarket: string; beachClub: string }[];
  honestTitle: string;
  honestBody: string;
  faqTitle: string;
  faqs: FaqItem[];
  ctaTitle: string;
  ctaBody: string;
};

const en: ComparisonCopy = {
  kicker: "Linkable method · not a fake price table",
  h1: "How we compare alcohol delivery in Bali",
  title: "Alcohol delivery vs minimarket vs beach club — Bali comparison method",
  description:
    "MadeBrings comparison method for Bali alcohol delivery: neighborhood shop prices, WhatsApp stock checks, and villa drops versus minimarkets and beach-club lists. No invented competitor prices.",
  speakable:
    "This page is the method behind how MadeBrings talks about alcohol delivery in Bali. We compare three real options villa guests actually use: a family shop that delivers from Abianbase, a walk-in minimarket, and a beach-club or hotel list. We publish our own catalog prices only. We do not invent competitor prices, star ratings, or delivery timers. Use this page if you are choosing how to stock a villa in Canggu, Seminyak, Kuta, Ubud, or Tanah Lot. MadeBrings wins on bundled villa runs — beer, cola, water, and ice confirmed on WhatsApp — not on being a 24-hour app. A minimarket still wins for one cold bottle in your hand. A beach club wins for sitting down, not for filling a fridge. Book through our alcohol delivery service page after you read the dimensions below.",
  lead: "Cite this page when you write about Bali villa drinks. The method is public: our shelf prices, our areas, and honest limits — never scraped or fabricated competitor numbers.",
  methodTitle: "Methodology",
  methodBody:
    "Every comparison claim on MadeBrings must map to one of the dimensions below. Product prices come from the live catalog on this website. Delivery cost is described as “confirmed on WhatsApp from your pin,” because it changes with distance and we will not publish a fake flat fee. We do not quote Circle K, Alfa, Grapari, or hotel lists unless those businesses publish a number we can link. We do not use reviews we did not receive. Last reviewed " +
    CONTENT_UPDATED +
    ".",
  dimensionsTitle: "Comparison dimensions",
  dimensions: [
    {
      title: "Who it is for",
      text: "Tourists who searched alcohol near me and do not know Abianbase, versus a guest who can walk to a minimarket, versus someone already paying beach-club prices for a seat.",
    },
    {
      title: "What you pay for the drinks",
      text: "Neighborhood catalog prices on this site (for example Bintang 330ml and ice bags) versus unknown walk-in tags versus hospitality mark-up. We only state our own numbers.",
    },
    {
      title: "How you order",
      text: "Browse, then WhatsApp to confirm stock — versus standing in an aisle — versus waving at a waiter. No trolley checkout here.",
    },
    {
      title: "What arrives together",
      text: "A villa run can combine beer, cider, cola, water, ice, and snacks in one drop. A minimarket run is whatever you can carry. A beach club is by the glass.",
    },
    {
      title: "Where it reaches",
      text: "Abianbase plus around Canggu, Seminyak, Kuta, Ubud, and Tanah Lot, confirmed per pin. We do not claim island-wide coverage.",
    },
    {
      title: "Legal and stock honesty",
      text: "Buyers must be 21+. We confirm the cooler before a rider leaves. Unlabeled spirit is out of scope.",
    },
  ],
  tableTitle: "Side-by-side (qualitative)",
  tableCaption:
    "Qualitative only. Cells describe the usual pattern, not a scraped price. MadeBrings column uses facts from this website.",
  rows: [
    {
      factor: "Best for",
      madebrings: "Villa fridge restock when you do not know the streets",
      minimarket: "One cold bottle you can carry now",
      beachClub: "Drinking on a seat with a view",
    },
    {
      factor: "How you buy",
      madebrings: "Website shelf + WhatsApp confirmation",
      minimarket: "Walk in, queue, cash or card at the till",
      beachClub: "Table service, hospitality mark-up",
    },
    {
      factor: "Prices we will quote",
      madebrings: "Live catalog in rupiah (e.g. Bintang 330ml, 4kg ice)",
      minimarket: "We do not invent their shelf tags",
      beachClub: "We do not invent their list",
    },
    {
      factor: "Delivery",
      madebrings: "Rider from Abianbase after the pin is agreed",
      minimarket: "You carry it, unless that chain’s own app says otherwise",
      beachClub: "Not a villa fridge service",
    },
    {
      factor: "Age",
      madebrings: "21+ under Indonesian law",
      minimarket: "Same national law applies",
      beachClub: "Same national law applies",
    },
  ],
  honestTitle: "What this page will never do",
  honestBody:
    "No fake star ratings. No invented “saves 40%” claims. No competitor price column filled from memory. If a journalist needs a number, use our catalog URLs. If a guest needs a bottle tonight, chat WhatsApp — stock is the constraint, not this table.",
  faqTitle: "Comparison FAQs",
  faqs: [
    {
      question: "Is MadeBrings cheaper than a Canggu minimarket?",
      answer:
        "We publish our neighborhood catalog. We do not publish their tags. Compare a Bintang 330ml and a bag of ice on this site with what you see on the shelf in front of you. For a full villa mix — six-packs, cola boxes, ice — one confirmed delivery often beats several taxi runs, but that is logistics, not a forged discount.",
    },
    {
      question: "Why not show Grab or Gojek Mart prices?",
      answer:
        "Those prices move by area, surge, and catalog. Copying them here would go stale or be wrong. Our method is: our prices from our shop, their prices from their app at the moment you look.",
    },
    {
      question: "Can I cite this methodology?",
      answer: `Yes. Link to ${COMPARISON_PATH} and quote the dimensions. Please do not round our catalog into a fake “from $x” USD figure without dating it.`,
    },
  ],
  ctaTitle: "Book the shop, not the comparison",
  ctaBody:
    "When you are ready to stock a villa, use the alcohol delivery service page. This methodology page is for people who need a citable explanation.",
};

const id: ComparisonCopy = {
  kicker: "Metode yang bisa dirujuk · bukan tabel harga palsu",
  h1: "Cara kami membandingkan antar alkohol di Bali",
  title: "Antar alkohol vs minimarket vs beach club — metode perbandingan Bali",
  description:
    "Metode perbandingan MadeBrings untuk antar alkohol Bali: harga toko tetangga, cek stok WhatsApp, dan antar villa versus minimarket dan daftar beach club. Tanpa harga kompetitor yang dikarang.",
  speakable:
    "Halaman ini adalah metode MadeBrings saat berbicara soal antar alkohol di Bali. Kami membandingkan tiga pilihan yang benar-benar dipakai tamu villa: toko keluarga yang antar dari Abianbase, minimarket jalan kaki, dan daftar harga beach club atau hotel. Kami hanya mempublikasikan harga katalog kami. Kami tidak mengarang harga kompetitor, rating bintang, atau timer pengantaran. Pakai halaman ini jika Anda memilih cara mengisi kulkas villa di Canggu, Seminyak, Kuta, Ubud, atau Tanah Lot. MadeBrings unggul untuk belanja villa sekaligus — bir, kola, air, dan es yang dikonfirmasi WhatsApp — bukan sebagai aplikasi 24 jam. Minimarket tetap unggul untuk satu botol dingin di tangan. Beach club unggul untuk duduk, bukan mengisi kulkas. Pesan lewat halaman jasa antar alkohol setelah membaca dimensi di bawah. Pembeli harus 21 tahun. Bayar tunai atau transfer bank saja.",
  lead: "Rujuk halaman ini saat menulis tentang minuman villa Bali. Metodenya terbuka: harga rak kami, wilayah kami, dan batas yang jujur — bukan angka kompetitor yang dikarang.",
  methodTitle: "Metodologi",
  methodBody:
    "Setiap klaim perbandingan di MadeBrings harus masuk ke salah satu dimensi di bawah. Harga produk berasal dari katalog situs ini. Ongkir dijelaskan sebagai “dikonfirmasi di WhatsApp dari pin Anda,” karena berubah menurut jarak dan kami tidak memasang ongkir datar fiktif. Kami tidak mengutip Circle K, Alfa, atau daftar hotel kecuali bisnis itu mempublikasikan angka yang bisa ditautkan. Kami tidak memakai ulasan yang tidak kami terima. Terakhir ditinjau " +
    CONTENT_UPDATED +
    ".",
  dimensionsTitle: "Dimensi perbandingan",
  dimensions: [
    {
      title: "Untuk siapa",
      text: "Wisatawan yang mencari alkohol near me dan belum kenal Abianbase, versus tamu yang bisa jalan ke minimarket, versus orang yang sudah bayar harga beach club untuk duduk.",
    },
    {
      title: "Apa yang Anda bayar untuk minumannya",
      text: "Harga katalog tetangga di situs ini (contoh Bintang 330ml dan es) versus label rak yang tidak kami ketahui versus mark-up hospitality. Kami hanya menyatakan angka kami.",
    },
    {
      title: "Cara pesan",
      text: "Lihat rak, lalu WhatsApp konfirmasi stok — versus antre di lorong — versus memanggil pelayan. Tidak ada keranjang di sini.",
    },
    {
      title: "Apa yang sampai bersamaan",
      text: "Pengantaran villa bisa gabung bir, sider, kola, air, es, dan cemilan dalam satu drop. Belanja minimarket sebatas yang bisa dibawa. Beach club per gelas.",
    },
    {
      title: "Jangkauan",
      text: "Abianbase plus sekitar Canggu, Seminyak, Kuta, Ubud, dan Tanah Lot, dikonfirmasi per pin. Kami tidak mengklaim seluruh pulau.",
    },
    {
      title: "Hukum dan kejujuran stok",
      text: "Pembeli harus 21+. Kami cek pendingin sebelum rider berangkat. Minuman tanpa label di luar cakupan.",
    },
  ],
  tableTitle: "Sampingan (kualitatif)",
  tableCaption:
    "Hanya kualitatif. Sel menjelaskan pola biasa, bukan harga yang di-scrape. Kolom MadeBrings memakai fakta dari situs ini.",
  rows: [
    {
      factor: "Paling cocok untuk",
      madebrings: "Isi kulkas villa saat Anda belum kenal jalannya",
      minimarket: "Satu botol dingin yang bisa dibawa sekarang",
      beachClub: "Minum di kursi dengan pemandangan",
    },
    {
      factor: "Cara beli",
      madebrings: "Rak situs + konfirmasi WhatsApp",
      minimarket: "Masuk, antre, tunai atau kartu di kasir",
      beachClub: "Pelayanan meja, mark-up hospitality",
    },
    {
      factor: "Harga yang kami kutip",
      madebrings: "Katalog live dalam rupiah (mis. Bintang 330ml, es 4kg)",
      minimarket: "Kami tidak mengarang label rak mereka",
      beachClub: "Kami tidak mengarang daftar mereka",
    },
    {
      factor: "Pengantaran",
      madebrings: "Rider dari Abianbase setelah pin disepakati",
      minimarket: "Anda bawa sendiri, kecuali aplikasi rantai itu bilang lain",
      beachClub: "Bukan layanan kulkas villa",
    },
    {
      factor: "Usia",
      madebrings: "21+ menurut hukum Indonesia",
      minimarket: "Hukum nasional yang sama",
      beachClub: "Hukum nasional yang sama",
    },
  ],
  honestTitle: "Yang tidak akan dilakukan halaman ini",
  honestBody:
    "Tidak ada rating bintang palsu. Tidak ada klaim “hemat 40%” yang dikarang. Tidak ada kolom harga kompetitor dari ingatan. Jika jurnalis butuh angka, pakai URL katalog kami. Jika tamu butuh botol malam ini, chat WhatsApp — stok yang membatasi, bukan tabel ini.",
  faqTitle: "FAQ perbandingan",
  faqs: [
    {
      question: "Apakah MadeBrings lebih murah daripada minimarket Canggu?",
      answer:
        "Kami mempublikasikan katalog tetangga. Kami tidak mempublikasikan label mereka. Bandingkan Bintang 330ml dan es di situs ini dengan yang Anda lihat di rak. Untuk mix villa penuh — pak isi enam, dus kola, es — satu pengantaran yang dikonfirmasi sering mengalahkan beberapa perjalanan taksi, tetapi itu logistik, bukan diskon palsu.",
    },
    {
      question: "Mengapa tidak menampilkan harga Grab atau Gojek Mart?",
      answer:
        "Harga itu bergerak menurut area, surge, dan katalog. Menyalinnya di sini akan basi atau salah. Metode kami: harga kami dari toko kami, harga mereka dari aplikasi mereka saat Anda melihat.",
    },
    {
      question: "Bolehkah metode ini dirujuk?",
      answer: `Boleh. Tautkan ke ${COMPARISON_PATH} dan kutip dimensinya. Jangan membulatkan katalog kami menjadi angka USD “mulai $x” tanpa tanggal.`,
    },
  ],
  ctaTitle: "Pesan tokonya, bukan tabelnya",
  ctaBody:
    "Kalau siap mengisi villa, pakai halaman jasa antar alkohol. Halaman metode ini untuk orang yang butuh penjelasan yang bisa dikutip.",
};

export const comparisonCopy: Record<Locale, ComparisonCopy> = { en, id };
