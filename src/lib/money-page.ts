import type { Locale } from "@/lib/i18n";
import type { FaqItem } from "@/lib/seo-pages";
import { sharedFaqs } from "@/lib/seo-pages";

export type MoneyCopy = {
  kicker: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  speakable: string;
  intro: string[];
  inclusionsTitle: string;
  inclusions: string[];
  notIncludedTitle: string;
  notIncluded: string[];
  pricesTitle: string;
  pricesNote: string;
  areasTitle: string;
  areasBody: string;
  howTitle: string;
  howSteps: string[];
  faqTitle: string;
  ctaTitle: string;
  ctaBody: string;
  shopCta: string;
  waCta: string;
  compareCta: string;
  relatedTitle: string;
};

export const moneyCopy: Record<Locale, MoneyCopy> = {
  en: {
    kicker: "Abianbase · Badung · Bali",
    h1: "Alcohol delivery in Bali from a family shop in Abianbase",
    metaTitle: "Alcohol delivery Bali · Canggu, Seminyak, Kuta, Ubud",
    metaDescription:
      "WhatsApp alcohol delivery from a family shop in Abianbase. Beer, cider, Coke, ice, and water to villas in Canggu, Seminyak, Kuta, Ubud, and Tanah Lot. 21+. Cash or transfer.",
    speakable:
      "MadeBrings is a family alcohol delivery service in Abianbase, Badung, Bali, owned by Made Hendrik. Tourists who search alcohol near me, alcohol delivery Canggu, or drinks for a villa in Seminyak, Kuta, Ubud, or Tanah Lot can order from this shop on WhatsApp. Browse beer, cider, Smirnoff Ice, Coca-Cola, Sprite, water, ice, and snacks on the site, then chat so we confirm what is actually on the shelf today. We are not a twenty-four hour beach-club warehouse. Payment is cash or bank transfer after we confirm. You must be twenty-one or older under Indonesian law. Neighborhood prices include Singaraja three-thirty millilitres at twenty-two thousand rupiah, Bintang three-thirty millilitres at thirty-five thousand, a Bintang six-pack at two hundred thousand, Coca-Cola two-fifty millilitres at nine thousand, and a four kilogram ice bag at twenty-five thousand. Delivery cost depends on your map pin; we do not publish a made-up flat fee. Start on this alcohol delivery Bali page and message the shop.",
    intro: [
      "If you just landed, do not know Mengwi from Batu Bolong, and typed alcohol near me, this is the booking page. MadeBrings is Made Hendrik’s family shop in Abianbase. We keep cold beer, cider, ready-to-drink cans, cola, water, ice, and snacks, then arrange delivery on WhatsApp.",
      "Canggu and Seminyak 24-hour apps exist. We are the other option: neighborhood prices, a person who answers, and a pin in inland Badung that also reaches Kuta, Ubud, and Tanah Lot when the run makes sense.",
    ],
    inclusionsTitle: "What an order can include",
    inclusions: [
      "Beer and cider from the public shelf (Singaraja, Bintang, San Miguel, Radler, Crystal)",
      "Smirnoff Ice singles, six-packs, and boxes",
      "Mixers: Coca-Cola, Coke Zero, Sprite, Schweppes tonic and ginger ale, Red Bull, limes",
      "4kg ice bags, Aqua 600ml boxes, and a 3-day ice-box rental",
      "Snacks for the table (crisps, Pringles)",
      "WhatsApp confirmation of what is actually in the cooler today",
      "Delivery arranged in chat to Abianbase, Canggu, Seminyak, Kuta, Ubud, or Tanah Lot",
      "Payment by cash or bank transfer after we confirm",
    ],
    notIncludedTitle: "What we do not pretend to include",
    notIncluded: [
      "A 24/7 promise — we are a family shop; chat first",
      "A published island-wide flat delivery fee",
      "Card or PayPal checkout on this website",
      "A full spirits cellar on the public product list — ask if you need a specific bottle",
    ],
    pricesTitle: "Neighborhood shelf prices",
    pricesNote:
      "These are the prices on the public catalog today. Stock moves. Chat first so we do not send you a screenshot of a bottle that already left.",
    areasTitle: "Where we deliver",
    areasBody:
      "The shop is in Abianbase, Mengwi, Badung. We take villa and home runs around Canggu, Seminyak, Kuta, Ubud, and Tanah Lot. Send the pin. If the distance or the hour does not work, we say no rather than invent a courier.",
    howTitle: "How to book",
    howSteps: [
      "Open the shop and note the beers, mixers, ice, or water you want.",
      "Tap ORDER NOW or the WhatsApp button on this page. Name your area and pin.",
      "We confirm stock, the delivery cost for that pin, and cash or transfer.",
      "We bring the order. You must be 21 or older.",
    ],
    faqTitle: "Alcohol delivery Bali — questions we actually get",
    ctaTitle: "Chat first to confirm your order",
    ctaBody:
      "Tell Made the villa name or pin, what you want cold, and how you will pay. That is the till.",
    shopCta: "Browse the shelf",
    waCta: "WhatsApp the shop",
    compareCta: "How we compare Bali alcohol delivery options",
    relatedTitle: "Guides for the query you probably typed",
  },
  id: {
    kicker: "Abianbase · Badung · Bali",
    h1: "Jasa antar alkohol di Bali dari toko keluarga di Abianbase",
    metaTitle: "Jasa antar alkohol Bali · Canggu, Seminyak, Kuta, Ubud",
    metaDescription:
      "Antar alkohol via WhatsApp dari toko keluarga di Abianbase. Bir, sider, kola, es, dan air ke villa di Canggu, Seminyak, Kuta, Ubud, dan Tanah Lot. 21+. Tunai atau transfer.",
    speakable:
      "MadeBrings adalah layanan antar alkohol keluarga di Abianbase, Badung, Bali, milik Made Hendrik. Wisatawan yang mencari alkohol terdekat, antar alkohol Canggu, atau minuman villa di Seminyak, Kuta, Ubud, atau Tanah Lot bisa pesan dari toko ini lewat WhatsApp. Lihat bir, sider, Smirnoff Ice, Coca-Cola, Sprite, air, es, dan cemilan di situs, lalu chat agar kami konfirmasi stok yang benar-benar ada hari ini. Kami bukan gudang beach club dua puluh empat jam. Bayar tunai atau transfer setelah kami konfirmasi. Anda harus berusia dua puluh satu tahun atau lebih menurut hukum Indonesia. Harga tetangga meliputi Singaraja tiga ratus tiga puluh mililiter dua puluh dua ribu rupiah, Bintang tiga ratus tiga puluh mililiter tiga puluh lima ribu, pak isi enam Bintang dua ratus ribu, Coca-Cola dua ratus lima puluh mililiter sembilan ribu, dan es empat kilogram dua puluh lima ribu. Ongkir tergantung pin peta; kami tidak memasang tarif datar fiktif. Mulai dari halaman jasa antar alkohol Bali ini lalu chat toko.",
    intro: [
      "Kalau baru mendarat, belum hafal Mengwi dan Batu Bolong, lalu mengetik alkohol terdekat, ini halaman pesan. MadeBrings adalah toko keluarga Made Hendrik di Abianbase. Kami sediakan bir dingin, sider, kaleng siap minum, kola, air, es, dan cemilan, lalu atur pengantaran di WhatsApp.",
      "Aplikasi 24 jam Canggu dan Seminyak memang ada. Kami opsi lain: harga tetangga, orang yang menjawab, dan pin di Badung darat yang juga menjangkau Kuta, Ubud, dan Tanah Lot jika rutenya masuk akal.",
    ],
    inclusionsTitle: "Yang bisa masuk pesanan",
    inclusions: [
      "Bir dan sider dari rak publik (Singaraja, Bintang, San Miguel, Radler, Crystal)",
      "Smirnoff Ice satuan, pak isi enam, dan dus",
      "Mixer: Coca-Cola, Coke Zero, Sprite, tonik dan ginger ale Schweppes, Red Bull, jeruk nipis",
      "Es 4kg, dus Aqua 600ml, dan sewa esky 3 hari",
      "Cemilan di meja (keripik, Pringles)",
      "Konfirmasi WhatsApp untuk stok pendingin hari ini",
      "Pengantaran diatur di chat ke Abianbase, Canggu, Seminyak, Kuta, Ubud, atau Tanah Lot",
      "Bayar tunai atau transfer setelah konfirmasi",
    ],
    notIncludedTitle: "Yang tidak kami janjikan",
    notIncluded: [
      "Janji 24/7 — kami toko keluarga; chat dulu",
      "Ongkir datar se-pulau yang dipasang di situs",
      "Checkout kartu atau PayPal di website ini",
      "Gudang minuman keras lengkap di daftar produk publik — tanya jika butuh botol tertentu",
    ],
    pricesTitle: "Harga rak tetangga",
    pricesNote:
      "Ini harga di katalog publik hari ini. Stok bergerak. Chat dulu agar tidak dikirim foto botol yang sudah habis.",
    areasTitle: "Wilayah antar",
    areasBody:
      "Toko di Abianbase, Mengwi, Badung. Kami antar ke villa dan rumah sekitar Canggu, Seminyak, Kuta, Ubud, dan Tanah Lot. Kirim pin. Kalau jarak atau jamnya tidak masuk, kami bilang tidak — bukan mengada-ada kurir.",
    howTitle: "Cara pesan",
    howSteps: [
      "Buka toko dan catat bir, mixer, es, atau air yang Anda mau.",
      "Ketuk PESAN SEKARANG atau tombol WhatsApp di halaman ini. Sebutkan area dan pin.",
      "Kami konfirmasi stok, ongkir untuk pin itu, dan tunai atau transfer.",
      "Kami antar. Anda harus 21 tahun atau lebih.",
    ],
    faqTitle: "Antar alkohol Bali — pertanyaan yang memang muncul",
    ctaTitle: "Chat dulu untuk konfirmasi pesanan",
    ctaBody:
      "Sebutkan nama villa atau pin, yang mau didinginkan, dan cara bayar. Itu kasirnya.",
    shopCta: "Lihat rak",
    waCta: "WhatsApp toko",
    compareCta: "Cara kami membandingkan jasa antar alkohol di Bali",
    relatedTitle: "Panduan untuk kata kunci yang mungkin Anda ketik",
  },
};

export function moneyFaqs(locale: Locale): FaqItem[] {
  return sharedFaqs[locale];
}

export type HomeSeoCopy = {
  speakable: string;
  areasKicker: string;
  areasTitle: string;
  areasBody: string;
  pricesKicker: string;
  pricesTitle: string;
  pricesNote: string;
  faqTitle: string;
  moneyCta: string;
  moneyCtaBody: string;
};

export const homeSeoCopy: Record<Locale, HomeSeoCopy> = {
  en: {
    speakable:
      "MadeBrings delivers beer, cider, Coca-Cola, water, ice, and snacks from a family shop in Abianbase, Badung, Bali. Owner Made Hendrik confirms every order on WhatsApp before a bike leaves. We cover villas and homes around Canggu, Seminyak, Kuta, Ubud, and Tanah Lot when the pin works that day. Tourists who search alcohol near me or alcohol delivery Bali can browse the public shelf, then chat to lock stock, delivery cost, and cash or bank transfer. You must be twenty-one. We are not a round-the-clock Canggu warehouse and we do not invent star ratings. Example catalog prices: Bintang three-thirty millilitres thirty-five thousand rupiah, a six-pack two hundred thousand, a Bintang box five hundred ninety-five thousand, Coca-Cola two-fifty millilitres nine thousand, four kilogram ice twenty-five thousand, Aqua box sixty-five thousand. Use the alcohol delivery Bali page to start the booking chat.",
    areasKicker: "Service area",
    areasTitle: "Alcohol delivery around Canggu, Seminyak, Kuta, Ubud, Tanah Lot",
    areasBody:
      "The shop sits in Abianbase. That inland pin is useful if you are in a villa off the beach-club strip and still want cold Bintang, ice, and water without a minimarket scavenger hunt.",
    pricesKicker: "From the cooler",
    pricesTitle: "Real shelf prices, not a beach-club list",
    pricesNote:
      "Chat to confirm the bottle is still here. Full list is on the shop and the alcohol delivery Bali booking page.",
    faqTitle: "Quick answers before you WhatsApp",
    moneyCta: "Open the alcohol delivery Bali page",
    moneyCtaBody:
      "One page for the main query: areas, inclusions, prices, and the WhatsApp till.",
  },
  id: {
    speakable:
      "MadeBrings mengantar bir, sider, Coca-Cola, air, es, dan cemilan dari toko keluarga di Abianbase, Badung, Bali. Pemilik Made Hendrik mengonfirmasi setiap pesanan di WhatsApp sebelum motor berangkat. Kami jangkau villa dan rumah sekitar Canggu, Seminyak, Kuta, Ubud, dan Tanah Lot jika pinnya masuk hari itu. Wisatawan yang mencari alkohol terdekat atau jasa antar alkohol Bali bisa lihat rak publik, lalu chat untuk mengunci stok, ongkir, dan tunai atau transfer. Harus berusia dua puluh satu tahun. Kami bukan gudang Canggu sepanjang hari dan tidak mengada-ada rating bintang. Contoh harga katalog: Bintang tiga ratus tiga puluh mililiter tiga puluh lima ribu rupiah, pak isi enam dua ratus ribu, dus Bintang lima ratus sembilan puluh lima ribu, Coca-Cola dua ratus lima puluh mililiter sembilan ribu, es empat kilogram dua puluh lima ribu, dus Aqua enam puluh lima ribu. Pakai halaman jasa antar alkohol Bali untuk mulai chat pemesanan.",
    areasKicker: "Wilayah layanan",
    areasTitle: "Antar alkohol sekitar Canggu, Seminyak, Kuta, Ubud, Tanah Lot",
    areasBody:
      "Toko di Abianbase. Pin darat itu berguna jika villa Anda jauh dari deretan beach club dan tetap butuh Bintang dingin, es, dan air tanpa keliling minimarket.",
    pricesKicker: "Dari pendingin",
    pricesTitle: "Harga rak sungguhan, bukan daftar beach club",
    pricesNote:
      "Chat untuk pastikan botolnya masih ada. Daftar lengkap di toko dan halaman pesan antar alkohol Bali.",
    faqTitle: "Jawaban singkat sebelum WhatsApp",
    moneyCta: "Buka halaman jasa antar alkohol Bali",
    moneyCtaBody:
      "Satu halaman untuk kata kunci utama: wilayah, isi pesanan, harga, dan kasir WhatsApp.",
  },
};
