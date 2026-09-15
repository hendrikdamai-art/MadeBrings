import type { CommercialCopy } from "@/lib/commercial";
import { getProductBySlug } from "@/lib/commerce";
import { formatIdr } from "@/lib/format";
import { MONEY_PATH } from "@/lib/geo";

function catalogLine(slug: string, fallbackLabel: string) {
  const product = getProductBySlug(slug);
  return {
    item: product?.name ?? fallbackLabel,
    price: product ? formatIdr(product.priceIdr) : "Chat to confirm",
    href: product ? `/product/${product.slug}` : "/shop",
  };
}

function moneyPrices(): CommercialCopy["prices"] {
  return [
    catalogLine("bintang-330", "Bintang Bottle 330ml"),
    catalogLine("bintang-330-6pack", "Bintang 330ml 6 pack"),
    catalogLine("bintang-beer-box", "Bintang Beer Box"),
    catalogLine("singaraja-pilsner-330", "Singaraja Pilsner 330ml"),
    catalogLine("singaraja-pilsner-box", "Singaraja Pilsner Box"),
    catalogLine("smirnoff-ice-275", "Smirnoff Ice 275ml"),
    catalogLine("coca-cola-original-250", "Coca-Cola Original 250ml"),
    catalogLine("ice-bag-4kg", "4kg Ice Bag"),
    catalogLine("aqua-mineral-600-box", "Aqua 600ml box"),
    catalogLine("rent-ice-box-3-days", "Ice box rental, 3 days"),
  ];
}

export function moneyPageCopy(locale: "en" | "id"): CommercialCopy {
  const prices = moneyPrices();
  if (locale === "id") {
    return {
      kicker: "Abianbase · Badung · Bali",
      h1: "Jasa antar alkohol Bali dari toko keluarga di Abianbase",
      title: "Jasa antar alkohol Bali | Harga tetangga, chat WhatsApp",
      description:
        "MadeBrings antar bir, sider, minuman siap minum, mixer, es, air, dan cemilan dari Abianbase ke villa di sekitar Canggu, Seminyak, Kuta, Ubud, dan Tanah Lot. Chat WhatsApp dulu. Tunai atau transfer. 21+.",
      keywords: [
        "jasa antar alkohol Bali",
        "antar bir Bali",
        "delivery alkohol Canggu",
        "pesan bir WhatsApp",
        "toko bir Abianbase",
        "antar minuman villa Bali",
        "antar bir Seminyak",
        "alkohol dekat saya Bali",
      ],
      speakableTitle: "Jawaban langsung",
      speakable:
        "MadeBrings adalah jasa antar alkohol keluarga di Abianbase, Badung, Bali, milik Made Hendrik. Orang yang mencari alkohol dekat saya atau antar minuman ke villa memesan bir, sider, kaleng siap minum, mixer, es, air, dan cemilan lewat WhatsApp, lalu kami antar ke rumah. Kami melayani Abianbase dan sekitar Canggu, Seminyak, Kuta, Ubud, serta Tanah Lot. Tidak ada keranjang di situs. Chat dulu agar kami konfirmasi stok di rak hari ini, cara bayar tunai atau transfer, dan pin atau nama villa. Harga katalog mencakup Bintang 330ml, pak isi enam, dus Bintang, Singaraja, Smirnoff Ice, Coca-Cola, dan es batu 4kg. Usia minimum 21 tahun. Kami toko tetangga, bukan gudang beach club 24 jam, jadi jendela antar diatur di chat setelah stok dipastikan. Kirim nama tamu untuk satpam jika villa punya gerbang. Jangan beli botol tanpa label di pinggir jalan. Kalau spirit tertentu tidak di rak, kami bilang tidak daripada mengganti merek diam-diam.",
      intro: [
        "Kalau Anda wisatawan yang baru mendarat dan mengetik alkohol dekat saya, atau kelompok villa yang tidak mau membayar harga beach club, ini halamannya. MadeBrings adalah toko keluarga di Abianbase. Kami bukan meja malam 24 jam. Kami rak yang bisa di-chat, dengan harga yang tetangga sudah bayar.",
        "Checkout hanya WhatsApp. Kami cek pendingin, konfirmasi yang masih ada, lalu atur pengantaran ke pintu. Bayar tunai atau transfer bank. Alkohol hanya untuk usia 21 tahun ke atas.",
      ],
      inclusionsTitle: "Yang termasuk saat Anda chat untuk antar",
      inclusions: [
        "Konfirmasi stok sebelum kami berangkat",
        "Bir, sider, Smirnoff Ice, mixer, es, air, dan cemilan dari katalog",
        "Pengantaran ke villa atau rumah setelah Anda kirim pin atau nama properti",
        "Harga rak dalam rupiah — bukan daftar bar",
        "Bayar tunai atau transfer bank setelah pesanan dikunci",
        "Cek usia 21+ sesuai hukum Indonesia",
      ],
      priceTitle: "Harga rak yang sering ditanya",
      priceNote:
        "Angka ini mengikuti katalog di situs. Stok bergerak. Chat dulu sebelum merencanakan pesta di sekitar harga di bawah.",
      prices,
      sections: [
        {
          heading: "Area yang kami antar",
          paragraphs: [
            "Toko ada di Abianbase, Mengwi, Badung. Dari sini kami mengatur antar ke villa dan rumah di sekitar Canggu, Seminyak, Kuta, Ubud, dan Tanah Lot. Kirim pin. Jalan Bali berubah lebih cepat daripada peta hotel.",
            "Kalau Anda di luar jalur itu, tetap chat. Kami jujur jika jarak hari itu tidak masuk akal. Kami tidak berjanji seluruh pulau dalam 30 menit.",
          ],
          link: {
            href: "/blog/alcohol-delivery-canggu",
            label: "Baca cara kerja antar alkohol di Canggu",
          },
        },
        {
          heading: "Cara pesan di WhatsApp",
          paragraphs: [
            "Buka rak, catat yang Anda mau, lalu ketuk Pesan Sekarang. Tulis usia 21+, lokasi, dan apakah bayar tunai atau transfer. Kami balas dengan yang benar-benar ada di pendingin.",
          ],
          list: [
            "Nama villa atau pin Google Maps",
            "Daftar botol, pak, dus, es, dan mixer",
            "Cara bayar: tunai atau transfer bank",
            "Waktu Anda benar-benar berada di properti",
          ],
          link: {
            href: "/shop",
            label: "Lihat rak MadeBrings",
          },
        },
        {
          heading: "Yang tidak kami klaim",
          paragraphs: [
            "Kami tidak memasang timer 24/7, tidak menulis ulasan palsu, dan tidak menampilkan harga pesaing. Tim 24 jam di Canggu punya model bisnis berbeda. Kami toko keluarga dengan harga tetangga dan chat yang jujur soal stok.",
            "Minuman keras di luar bir, sider, dan siap minum kadang ada untuk pelanggan tetap. Jangan anggap botol itu ada di rak sampai Made mengonfirmasi.",
          ],
          link: {
            href: "/compare-alcohol-delivery-bali",
            label: "Lihat cara kami membandingkan jasa antar alkohol di Bali",
          },
        },
      ],
      faqsTitle: "Pertanyaan yang dikirim wisatawan sebelum memesan",
      faqs: [
        {
          question: "Apakah MadeBrings antar alkohol di Canggu, Seminyak, Kuta, Ubud, dan Tanah Lot?",
          answer:
            "Ya. Basis kami Abianbase. Kami mengatur antar ke villa dan rumah di sekitar Canggu, Seminyak, Kuta, Ubud, dan Tanah Lot setelah Anda kirim pin. Chat dulu agar kami konfirmasi stok dan apakah jarak itu masuk untuk hari itu.",
        },
        {
          question: "Bagaimana cara pesan antar alkohol Bali?",
          answer:
            "Tidak ada keranjang. Chat WhatsApp, sebutkan Anda 21+, kirim pin atau nama villa, dan daftar bir, Ice, mixer, atau es. Kami konfirmasi rak, lalu Anda bayar tunai atau transfer sebelum atau saat barang tiba.",
        },
        {
          question: "Berapa harga bir yang diantar?",
          answer:
            "Harga mengikuti katalog: Bintang 330ml, pak isi enam, dus, plus Singaraja di tarif lokal. Angka persis ada di halaman produk dan bisa berubah saat stok berganti. Chat untuk mengunci harga hari ini.",
        },
        {
          question: "Apakah bisa antar es, kola, dan air bersama bir?",
          answer:
            "Bisa. Es batu 4kg, sewa esky 3 hari, dus Aqua, Coca-Cola, Sprite, tonik, dan cemilan ada di rak yang sama. Tambahkan di chat agar sekali jalan.",
        },
        {
          question: "Apakah ini layanan 24 jam?",
          answer:
            "Tidak. Kami toko keluarga, bukan meja malam. Chat saat Anda butuh; kami balas saat toko buka dan stok bisa dicek. Jika Anda butuh pengantaran tengah malam setiap hari, itu jasa lain.",
        },
        {
          question: "Apa saja metode pembayaran?",
          answer:
            "Tunai rupiah atau transfer bank. Kami tidak memasang kartu di situs. Siapkan pembayaran setelah stok dikunci di WhatsApp.",
        },
      ],
      ctaTitle: "Chat untuk mengunci antar alkohol",
      ctaBody:
        "Tulis pin villa, yang Anda mau dari rak, dan tunai atau transfer. Made Hendrik membalas dari Abianbase.",
      shopLabel: "Buka rak",
      bookLabel: "Pesan di WhatsApp",
    };
  }

  return {
    kicker: "Abianbase · Badung · Bali",
    h1: "Alcohol delivery Bali from a family shop in Abianbase",
    title: "Alcohol delivery Bali | Neighborhood beer prices, WhatsApp",
    description:
      "MadeBrings delivers beer, cider, ready-to-drink, mixers, ice, water, and snacks from Abianbase to villas around Canggu, Seminyak, Kuta, Ubud, and Tanah Lot. Chat on WhatsApp first. Cash or bank transfer. 21+.",
    keywords: [
      "alcohol delivery Bali",
      "alcohol delivery service",
      "beer delivery Bali",
      "Canggu alcohol delivery",
      "alcohol near me Bali",
      "villa drinks delivery Bali",
      "Seminyak liquor delivery",
      "WhatsApp alcohol order Bali",
    ],
    speakableTitle: "Direct answer",
    speakable:
      "MadeBrings is a family alcohol delivery service in Abianbase, Badung, Bali, owned by Made Hendrik. People searching alcohol delivery Bali or alcohol near me order beer, cider, ready-to-drink cans, mixers, ice, water, and snacks on WhatsApp, then we bring the order to a villa or home. We cover Abianbase and the areas around Canggu, Seminyak, Kuta, Ubud, and Tanah Lot. There is no website trolley. Chat first so we confirm what is on the shelf today, cash or bank transfer, and a pin or villa name. Catalog prices include Bintang 330ml, six-packs, Bintang boxes, Singaraja, Smirnoff Ice, Coca-Cola, and 4kg ice bags. You must be twenty-one or older. We are a neighborhood shop, not a twenty-four-hour beach-club warehouse, so the delivery window is agreed in chat after stock is checked. Include the guest name if a guard sits on the gate. Do not buy unlabeled bottles from the roadside. If a spirit is not on the shelf, we say no rather than silently swapping the brand.",
    intro: [
      "If you just landed and typed alcohol near me, or you are stocking a villa and do not want beach-club mark-ups, this is the booking page. MadeBrings is a family shop in Abianbase. We are not a 24-hour night desk. We are a shelf you can message, at the prices neighbors already pay.",
      "Checkout is WhatsApp only. We check the cooler, confirm what is actually here, then arrange delivery to your door. Pay cash or bank transfer. Alcohol is 21 and over.",
    ],
    inclusionsTitle: "What is included when you chat to book delivery",
    inclusions: [
      "Stock confirmation before anyone leaves the shop",
      "Beer, cider, Smirnoff Ice, mixers, ice, water, and snacks from the live catalog",
      "Delivery to a villa or home after you send a pin or property name",
      "Shelf prices in rupiah — not a bar list",
      "Cash or bank transfer once the order is locked",
      "Age check: 21+ under Indonesian law",
    ],
    priceTitle: "Shelf prices people ask for first",
    priceNote:
      "These numbers follow the catalog on this site. Stock moves. Chat before you plan a villa night around a price below.",
    prices,
    sections: [
      {
        heading: "Where we deliver",
        paragraphs: [
          "The shop sits in Abianbase, Mengwi, Badung. From here we arrange drops to villas and homes around Canggu, Seminyak, Kuta, Ubud, and Tanah Lot. Send a pin. Bali roads change faster than hotel maps.",
          "If you are outside that belt, still chat. We will say honestly if the distance is not sensible that day. We do not promise the whole island in 30 minutes.",
        ],
        link: {
          href: "/blog/alcohol-delivery-canggu",
          label: "Read how Canggu alcohol delivery works with us",
        },
      },
      {
        heading: "How to order on WhatsApp",
        paragraphs: [
          "Open the shop, note what you want, then tap Order Now. Tell us you are 21+, where you are, and whether you will pay cash or transfer. We reply with what is actually in the cooler.",
        ],
        list: [
          "Villa name or a Google Maps pin",
          "The bottles, packs, boxes, ice, and mixers you want",
          "Cash or bank transfer",
          "When you will actually be at the property",
        ],
        link: {
          href: "/shop",
          label: "Browse the MadeBrings shelf",
        },
      },
      {
        heading: "What we will not claim",
        paragraphs: [
          "We do not publish a 24/7 timer, fake reviews, or competitor prices. Canggu night desks run a different business. We run a family shop with neighborhood prices and an honest chat about stock.",
          "Liquor beyond beer, cider, and ready-to-drink is sometimes here for regulars. Do not count on a specific spirit bottle until Made confirms it.",
        ],
        link: {
          href: "/compare-alcohol-delivery-bali",
          label: "See how we compare Bali alcohol delivery services",
        },
      },
    ],
    faqsTitle: "Questions tourists send before they order",
    faqs: [
      {
        question: "Do you deliver alcohol in Canggu, Seminyak, Kuta, Ubud, and Tanah Lot?",
        answer:
          "Yes. We are based in Abianbase and arrange delivery to villas and homes around Canggu, Seminyak, Kuta, Ubud, and Tanah Lot after you send a pin. Chat first so we can confirm stock and whether that distance works today.",
      },
      {
        question: "How do I order alcohol delivery in Bali?",
        answer:
          "There is no trolley. Chat on WhatsApp, say you are 21+, send a pin or villa name, and list the beer, Ice, mixers, or ice you want. We confirm the shelf, then you pay cash or bank transfer before or on arrival.",
      },
      {
        question: "What does beer delivery cost?",
        answer:
          "Prices follow the catalog: Bintang 330ml, six-packs, and boxes, plus Singaraja at the local rate. Exact figures are on each product page and can change when stock changes. Chat to lock today's price.",
      },
      {
        question: "Can you bring ice, cola, and water with the beer?",
        answer:
          "Yes. 4kg ice bags, a 3-day ice-box rental, Aqua boxes, Coca-Cola, Sprite, tonic, and snacks sit on the same shelf. Add them in the same WhatsApp thread so we make one run.",
      },
      {
        question: "Are you a 24-hour alcohol delivery service?",
        answer:
          "No. We are a family shop, not a night desk. Chat when you need us; we reply when the shop can check stock. If you need a guaranteed midnight drop every night, that is a different kind of service.",
      },
      {
        question: "What payment methods do you take?",
        answer:
          "Cash in rupiah or bank transfer. We do not put card checkout on the website. Have payment ready after stock is confirmed on WhatsApp.",
      },
    ],
    ctaTitle: "Chat to lock in alcohol delivery",
    ctaBody:
      "Send your villa pin, what you want from the shelf, and cash or transfer. Made Hendrik replies from Abianbase.",
    shopLabel: "Open the shop",
    bookLabel: "Order on WhatsApp",
  };
}

export function moneyBookingText(locale: "en" | "id") {
  return locale === "id"
    ? "Halo MadeBrings, saya 21+. Saya ingin jasa antar alkohol dari Abianbase. Saya akan kirim pin villa dan daftar pesanan."
    : "Hi MadeBrings, I am 21+. I want alcohol delivery from Abianbase. I will send a villa pin and my order list.";
}

export { MONEY_PATH };
