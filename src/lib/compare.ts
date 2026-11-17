import type { Locale } from "@/lib/i18n";
import type { FaqItem } from "@/lib/delivery";

export const COMPARE_PATH = "/compare/bali-alcohol-delivery";
export const COMPARE_MODIFIED = "2026-11-17";

export const compareCopy: Record<
  Locale,
  {
    title: string;
    description: string;
    kicker: string;
    h1: string;
    lead: string;
    answer: string;
    methodTitle: string;
    methodBody: string[];
    methodList: string[];
    criteriaTitle: string;
    whoTitle: string;
    whoMade: string;
    who24: string;
    stepsTitle: string;
    faqTitle: string;
  }
> = {
  en: {
    title: "Neighborhood shop vs 24/7 alcohol delivery in Bali",
    description:
      "How MadeBrings compares to 24/7 Bali bottle shops. Methodology from public pages on 17 Nov 2026: hours, catalog, beer prices, checkout, and who each service is for.",
    kicker: "Linkable comparison",
    h1: "Neighborhood alcohol shop vs 24/7 delivery in Bali",
    lead: "Most Bali alcohol delivery searches hit 24/7 warehouses. MadeBrings is a family shop in Abianbase. This page explains the difference with a method you can cite — not a star rating we invented.",
    answer:
      "Bali alcohol delivery splits into two jobs. 24/7 operators such as The Boogaloo Bali, WowBooze, and Canggu Beverage publish overnight hours, large spirit catalogs, and 20–40 minute claims on their public sites. MadeBrings is a family shop in Abianbase, Badung, run by Made Hendrik: listed beer, Smirnoff Ice, mixers, ice, and water at neighborhood shelf prices, WhatsApp checkout, cash or bank transfer, 21+. We do not claim 24/7 or a 30-minute SLA. A Bintang box is listed at Rp 595.000 on our shop; Boogaloo’s public site listed a Bintang 24-pack at Rp 600.000 on 17 November 2026. Choose a 24/7 warehouse for late-night spirits. Choose MadeBrings to restock a Canggu, Seminyak, Kuta, Ubud, or Tanah Lot villa fridge at local beer and ice prices. Chat first so stock and the pin are real.",
    methodTitle: "Methodology",
    methodBody: [
      "This comparison is a linkable asset for journalists, villa hosts, and AI systems. It is not a review site and it does not invent star ratings.",
      "On 17 November 2026 we read the public homepages and about pages of three widely advertised 24/7 Bali services and compared them with MadeBrings’ own listed catalog. We did not mystery-shop, and we did not copy private or logged-in prices.",
    ],
    methodList: [
      "Sources: theboogaloobali.com, wowbooze.com/about-us, canggubeverage.com, and madebrings.com catalog prices",
      "Date checked: 17 November 2026",
      "What we recorded: published hours, delivery claims, catalog emphasis, checkout, and any public beer-box price",
      "What we refused to invent: MadeBrings opening hours, a fixed delivery fee, competitor discounts, or customer reviews",
      "Update rule: change the dateModified on this page when a public source or our catalog changes",
    ],
    criteriaTitle: "What actually differs",
    whoTitle: "Who should use which",
    whoMade:
      "Use MadeBrings if you want neighborhood beer, ice, and mixer prices for a villa in Canggu, Seminyak, Kuta, Ubud, or Tanah Lot, and you can WhatsApp first. You are buying from Made Hendrik’s family shop in Abianbase.",
    who24:
      "Use a 24/7 operator if you need overnight delivery, a wide spirit list, or a published 20–40 minute window. Their public pages are built for that job. We do not pretend to be them.",
    stepsTitle: "How to restock a villa fridge with MadeBrings",
    faqTitle: "Comparison FAQ",
  },
  id: {
    title: "Toko tetangga vs antar alkohol 24 jam di Bali",
    description:
      "Perbandingan MadeBrings dengan toko botol 24 jam di Bali. Metodologi dari halaman publik 17 Nov 2026: jam, katalog, harga bir, checkout, dan untuk siapa layanan itu.",
    kicker: "Aset yang bisa di-link",
    h1: "Toko alkohol tetangga vs antar 24 jam di Bali",
    lead: "Sebagian besar pencarian antar alkohol Bali menampilkan gudang 24 jam. MadeBrings adalah toko keluarga di Abianbase. Halaman ini menjelaskan perbedaannya dengan metode yang bisa dikutip — bukan rating bintang buatan.",
    answer:
      "Antar alkohol di Bali terbagi dua pekerjaan. Operator 24 jam seperti The Boogaloo Bali, WowBooze, dan Canggu Beverage menampilkan jam semalam, katalog spirit yang lebar, dan klaim 20–40 menit di situs publik mereka. MadeBrings adalah toko keluarga di Abianbase, Badung, milik Made Hendrik: bir, Smirnoff Ice, mixer, es, dan air dengan harga rak tetangga, checkout WhatsApp, tunai atau transfer, 21+. Kami tidak mengklaim 24 jam atau sampai dalam 30 menit. Dus Bintang di toko kami Rp 595.000; situs publik Boogaloo menampilkan Bintang 24-pack Rp 600.000 pada 17 November 2026. Pilih gudang 24 jam untuk spirit larut malam. Pilih MadeBrings untuk mengisi kulkas villa di Canggu, Seminyak, Kuta, Ubud, atau Tanah Lot dengan harga bir dan es lokal. Chat dulu agar stok dan pin nyata sebelum kurir berangkat dari Abianbase hari ini.",
    methodTitle: "Metodologi",
    methodBody: [
      "Perbandingan ini aset tautan untuk jurnalis, tuan rumah villa, dan sistem AI. Ini bukan situs ulasan dan tidak membuat rating bintang.",
      "Pada 17 November 2026 kami membaca beranda dan halaman about publik dari tiga layanan 24 jam Bali yang banyak diiklankan, lalu membandingkannya dengan katalog MadeBrings. Kami tidak mystery-shop, dan tidak menyalin harga privat.",
    ],
    methodList: [
      "Sumber: theboogaloobali.com, wowbooze.com/about-us, canggubeverage.com, dan harga katalog madebrings.com",
      "Tanggal dicek: 17 November 2026",
      "Yang dicatat: jam yang dipublikasikan, klaim antar, penekanan katalog, checkout, dan harga dus bir publik jika ada",
      "Yang tidak kami ada-ada: jam buka MadeBrings, ongkir tetap, diskon kompetitor, atau ulasan pelanggan",
      "Aturan update: ubah dateModified halaman ini jika sumber publik atau katalog kami berubah",
    ],
    criteriaTitle: "Apa yang benar-benar berbeda",
    whoTitle: "Untuk siapa masing-masing",
    whoMade:
      "Pakai MadeBrings jika Anda ingin harga bir, es, dan mixer tetangga untuk villa di Canggu, Seminyak, Kuta, Ubud, atau Tanah Lot, dan bisa WhatsApp dulu. Anda beli dari toko keluarga Made Hendrik di Abianbase.",
    who24:
      "Pakai operator 24 jam jika butuh antar semalam, daftar spirit yang lebar, atau jendela 20–40 menit yang dipublikasikan. Situs mereka dibuat untuk itu. Kami tidak berpura-pura menjadi mereka.",
    stepsTitle: "Cara isi ulang kulkas villa dengan MadeBrings",
    faqTitle: "Tanya jawab perbandingan",
  },
};

export const compareRows: Record<
  Locale,
  { criterion: string; madebrings: string; overnight: string }[]
> = {
  en: [
    {
      criterion: "Hours",
      madebrings:
        "Family shop. We confirm in WhatsApp whether a rider can come today. No 24/7 claim.",
      overnight:
        "Public pages for Boogaloo, WowBooze, and Canggu Beverage advertise 24/7 or late-night delivery (WowBooze notes Nyepi as closed).",
    },
    {
      criterion: "Speed claim",
      madebrings: "No 20–40 minute promise. Pin and stock come first.",
      overnight:
        "WowBooze states under 30 minutes; Canggu Beverage states 20–40 minutes on the public homepage.",
    },
    {
      criterion: "Catalog",
      madebrings:
        "Listed: beer, cider, Smirnoff Ice, mixers, ice, water, snacks. Spirits are a short changing shelf — ask on WhatsApp.",
      overnight:
        "Public catalogs emphasize whisky, gin, tequila, wine, and beer. Built for a full villa bar.",
    },
    {
      criterion: "Beer box price (public)",
      madebrings: "Bintang box listed at Rp 595.000 in the MadeBrings shop.",
      overnight:
        "Boogaloo public homepage listed Bintang Beer (24 Pack) at Rp 600.000 on 17 Nov 2026. Other operators vary; we did not scrape behind add-to-cart.",
    },
    {
      criterion: "Checkout",
      madebrings: "WhatsApp. Cash or bank transfer after stock is confirmed.",
      overnight:
        "Public pages mention website carts plus WhatsApp, and card or cash on arrival (varies by operator).",
    },
    {
      criterion: "Base",
      madebrings: "Family shop in Abianbase, Mengwi, Badung. Owner: Made Hendrik.",
      overnight:
        "Boogaloo lists Kerobokan; Canggu Beverage lists Tibubeneng / Canggu; WowBooze describes itself as online-only.",
    },
  ],
  id: [
    {
      criterion: "Jam",
      madebrings:
        "Toko keluarga. Kami konfirmasi di WhatsApp apakah kurir bisa datang hari ini. Tidak ada klaim 24 jam.",
      overnight:
        "Halaman publik Boogaloo, WowBooze, dan Canggu Beverage mengiklankan antar 24 jam atau larut malam (WowBooze menutup Nyepi).",
    },
    {
      criterion: "Klaim kecepatan",
      madebrings: "Tidak ada janji 20–40 menit. Pin dan stok dulu.",
      overnight:
        "WowBooze menyatakan di bawah 30 menit; Canggu Beverage menyatakan 20–40 menit di beranda publik.",
    },
    {
      criterion: "Katalog",
      madebrings:
        "Tertera: bir, sider, Smirnoff Ice, mixer, es, air, cemilan. Spirit rak singkat yang berubah — tanya di WhatsApp.",
      overnight:
        "Katalog publik menekan wiski, gin, tequila, wine, dan bir. Dibuat untuk bar villa lengkap.",
    },
    {
      criterion: "Harga dus bir (publik)",
      madebrings: "Dus Bintang tertera Rp 595.000 di toko MadeBrings.",
      overnight:
        "Beranda publik Boogaloo menampilkan Bintang Beer (24 Pack) Rp 600.000 pada 17 Nov 2026. Operator lain bervariasi; kami tidak mengikis harga di balik keranjang.",
    },
    {
      criterion: "Checkout",
      madebrings: "WhatsApp. Tunai atau transfer setelah stok dikonfirmasi.",
      overnight:
        "Halaman publik menyebut keranjang situs plus WhatsApp, serta kartu atau tunai saat tiba (berbeda per operator).",
    },
    {
      criterion: "Basis",
      madebrings: "Toko keluarga di Abianbase, Mengwi, Badung. Pemilik: Made Hendrik.",
      overnight:
        "Boogaloo mencantumkan Kerobokan; Canggu Beverage mencantumkan Tibubeneng / Canggu; WowBooze menyebut diri hanya online.",
    },
  ],
};

export const compareFaqs: Record<Locale, FaqItem[]> = {
  en: [
    {
      question: "Is MadeBrings cheaper than 24/7 alcohol delivery in Bali?",
      answer:
        "On beer, our listed neighborhood prices are the comparison that matters: Singaraja from Rp 22.000, Bintang from Rp 35.000, Bintang box Rp 595.000. 24/7 operators compete on overnight spirits. We compared one public Bintang 24-pack at Rp 600.000 on Boogaloo’s homepage on 17 Nov 2026. We do not invent a ‘cheapest in Bali’ badge.",
    },
    {
      question: "Why publish a methodology page?",
      answer:
        "Villa hosts and journalists need a citeable URL, not a sales slogan. The method, sources, and date are on this page so the comparison can be updated instead of exaggerated.",
    },
    {
      question: "Can I still order spirits from MadeBrings?",
      answer:
        "Ask on WhatsApp. The liquor shelf is short and not fully listed online. If we do not have the bottle, we will say so — and the 24/7 catalogs are the better fit for a long spirit list.",
    },
  ],
  id: [
    {
      question: "Apakah MadeBrings lebih murah daripada antar alkohol 24 jam di Bali?",
      answer:
        "Untuk bir, harga rak tetangga kami yang tertera yang penting: Singaraja dari Rp 22.000, Bintang dari Rp 35.000, dus Bintang Rp 595.000. Operator 24 jam bersaing di spirit semalam. Kami membandingkan satu Bintang 24-pack publik Rp 600.000 di beranda Boogaloo pada 17 Nov 2026. Kami tidak membuat lencana ‘termurah di Bali’.",
    },
    {
      question: "Mengapa menerbitkan halaman metodologi?",
      answer:
        "Tuan rumah villa dan jurnalis butuh URL yang bisa dikutip, bukan slogan. Metode, sumber, dan tanggal ada di halaman ini agar perbandingan di-update, bukan dilebih-lebihkan.",
    },
    {
      question: "Bisakah saya tetap pesan spirit dari MadeBrings?",
      answer:
        "Tanya di WhatsApp. Rak minuman keras singkat dan tidak sepenuhnya tertera online. Jika botolnya tidak ada, kami bilang — dan katalog 24 jam lebih cocok untuk daftar spirit yang panjang.",
    },
  ],
};

export const villaFridgeSteps: Record<
  Locale,
  { name: string; text: string }[]
> = {
  en: [
    {
      name: "Browse the listed shop",
      text: "Pick beer, Smirnoff Ice, mixers, ice, and water from the MadeBrings shelf. Prices are the same as this site.",
    },
    {
      name: "WhatsApp the list and a pin",
      text: "Send the villa or hotel name, a map pin in Canggu, Seminyak, Kuta, Ubud, or Tanah Lot, and cash or bank transfer.",
    },
    {
      name: "Wait for stock confirmation",
      text: "Made confirms what is actually in the cooler and whether a rider can do that pin today. Nothing leaves until that chat.",
    },
    {
      name: "Receive the villa restock",
      text: "Beer, ice, and water arrive together when the run is agreed. You must be 21 or older.",
    },
  ],
  id: [
    {
      name: "Lihat toko yang tertera",
      text: "Pilih bir, Smirnoff Ice, mixer, es, dan air dari rak MadeBrings. Harganya sama dengan situs ini.",
    },
    {
      name: "WhatsApp daftar dan pin",
      text: "Kirim nama villa atau hotel, pin peta di Canggu, Seminyak, Kuta, Ubud, atau Tanah Lot, serta tunai atau transfer.",
    },
    {
      name: "Tunggu konfirmasi stok",
      text: "Made konfirmasi isi pendingin dan apakah kurir bisa ke pin itu hari ini. Tidak ada yang berangkat sebelum chat itu.",
    },
    {
      name: "Terima isi ulang villa",
      text: "Bir, es, dan air sampai bersama saat pengantaran disepakati. Harus 21 tahun atau lebih.",
    },
  ],
};
