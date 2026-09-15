import type { CommercialCopy } from "@/lib/commercial";

export function comparePageCopy(locale: "en" | "id"): Omit<
  CommercialCopy,
  "prices" | "priceTitle" | "priceNote"
> {
  if (locale === "id") {
    return {
      kicker: "Aset yang bisa dilink",
      h1: "Cara membandingkan jasa antar alkohol di Bali",
      title: "Bandingkan antar alkohol Bali | Metode toko keluarga",
      description:
        "Metode jujur untuk membandingkan jasa antar alkohol di Bali: katalog nyata, cek usia 21+, area yang disebutkan, pembayaran, dan klaim yang bisa dibuktikan. Tanpa harga pesaing yang dikarang.",
      keywords: [
        "bandingkan antar alkohol Bali",
        "jasa antar alkohol Bali",
        "toko bir Bali vs delivery",
        "cara pesan alkohol villa Bali",
      ],
      speakableTitle: "Metode dalam satu paragraf",
      speakable:
        "Bandingkan jasa antar alkohol Bali dengan fakta yang bisa dicek, bukan timer di iklan. Tanyakan apakah harga ada di rak publik, apakah usia 21 tahun dicek, apakah area ditulis dengan jujur, dan apakah pembayaran diucapkan sebelum kurir berangkat. MadeBrings mempublikasikan katalog bir, sider, minuman siap minum, mixer, es, air, dan cemilan dari Abianbase, menerima tunai atau transfer, dan antar ke sekitar Canggu, Seminyak, Kuta, Ubud, serta Tanah Lot setelah pin dikirim. Kami tidak mengarang harga pesaing, ulasan, atau janji 24 jam. Jika toko tidak bisa menunjukkan harga, menolak menyebut basisnya, atau menjamin seluruh pulau dalam hitungan menit, perlakukan itu sebagai pemasaran, bukan metode. Simpan daftar pertanyaan itu untuk setiap chat, termasuk milik kami. Botol tanpa label dan arak tanpa pita cukai sudah merugikan orang; harga aneh bukan diskon. Kalau Anda butuh angka kami, buka halaman toko, bukan tebakan di artikel.",
      intro: [
        "Wisatawan yang mengetik alcohol delivery Bali melihat deretan klaim 24/7. Halaman ini adalah aset yang bisa dilink: cara memilih toko tanpa mengarang harga orang lain. MadeBrings memakai tes yang sama pada diri sendiri.",
        "Gunakan daftar ini saat chat toko mana pun, termasuk kami. Kalau jawaban tidak spesifik, jangan pesan dus untuk malam villa.",
      ],
      inclusionsTitle: "Yang kami nilai (dan publikasikan tentang diri sendiri)",
      inclusions: [
        "Harga katalog yang bisa dilihat sebelum WhatsApp",
        "Cek usia 21+ dinyatakan di situs",
        "Area dilayani dengan nama, bukan 'seluruh Bali' tanpa syarat",
        "Pembayaran disebut: tunai atau transfer bank",
        "Stok dikonfirmasi sebelum motor jalan",
        "Tidak ada ulasan atau rating yang dikarang",
      ],
      sections: [
        {
          heading: "Enam pertanyaan untuk setiap toko",
          paragraphs: [
            "Chat toko. Jika mereka tidak menjawab poin ini dengan jelas, Anda tidak membandingkan layanan — Anda membandingkan iklan.",
          ],
          list: [
            "Di mana basis toko yang sebenarnya, hari ini?",
            "Harga botol, pak, dan dus mana yang bisa Anda lihat sebelum membayar?",
            "Bagaimana mereka membuktikan Anda 21+?",
            "Area mana yang mereka antar, dan apa yang terjadi jika pin Anda di luar itu?",
            "Tunai, transfer, kartu — mana yang benar-benar diterima?",
            "Apakah mereka mengonfirmasi stok, atau berjanji dulu dan mengganti merek nanti?",
          ],
        },
        {
          heading: "Cara MadeBrings menjawab tes itu",
          paragraphs: [
            "Basis: Abianbase, Badung. Pemilik: Made Hendrik. Checkout: WhatsApp. Bayar: tunai atau transfer. Katalog: bir, sider, Smirnoff Ice, mixer, es, air, cemilan, dengan harga rupiah di setiap halaman produk.",
            "Area: Abianbase dan sekitar Canggu, Seminyak, Kuta, Ubud, Tanah Lot, diatur setelah Anda kirim pin. Kami tidak menjual timer 24 jam. Jika minuman keras tertentu tidak di rak, kami bilang tidak.",
          ],
          link: {
            href: "/alcohol-delivery-service",
            label: "Buka halaman pesan antar alkohol",
          },
        },
        {
          heading: "Yang sengaja tidak ada di halaman ini",
          paragraphs: [
            "Tidak ada tabel harga pesaing. Harga orang lain berubah, dan kami tidak mengaudit pendingin mereka. Tidak ada bintang ulasan. Tidak ada janji 'termurah di Bali'. Kalau Anda butuh angka kami, buka rak.",
          ],
          link: {
            href: "/shop",
            label: "Lihat harga katalog MadeBrings",
          },
        },
      ],
      faqsTitle: "FAQ metode",
      faqs: [
        {
          question: "Mengapa Anda tidak memasang harga Go Drinks atau toko Canggu?",
          answer:
            "Karena kami tidak mengoperasikan toko mereka dan tidak akan mengarang angkanya. Bandingkan harga publik mereka dengan katalog kami di /shop. Metode itu tetap valid saat promo berubah.",
        },
        {
          question: "Apakah harga lebih rendah selalu lebih aman?",
          answer:
            "Tidak. Botol tanpa label dan arak tanpa pita cukai sudah merugikan orang di Bali. Bayar rak yang menyebut produsen. Kalau harganya tidak masuk akal, jangan beli.",
        },
        {
          question: "Haruskah wisatawan memakai jasa 24 jam?",
          answer:
            "Hanya jika Anda benar-benar butuh antar malam dan toko itu bisa menjelaskan basis, harga, dan cek usia. Banyak tamu villa cukup memesan sore dari toko keluarga seperti kami.",
        },
      ],
      ctaTitle: "Pakai metode ini, lalu pesan jika cocok",
      ctaBody:
        "Kalau jawaban kami cukup jelas, chat pin villa Anda. Kalau tidak, simpan daftar pertanyaan untuk toko berikutnya.",
      shopLabel: "Buka rak",
      bookLabel: "Chat MadeBrings",
    };
  }

  return {
    kicker: "Linkable asset",
    h1: "How to compare alcohol delivery services in Bali",
    title: "Compare alcohol delivery Bali | A family-shop method",
    description:
      "A clean method for comparing Bali alcohol delivery: public catalog prices, 21+ checks, named coverage, payment, and claims you can verify. No invented competitor prices.",
    keywords: [
      "compare alcohol delivery Bali",
      "best alcohol delivery Bali",
      "Bali bottle shop vs delivery",
      "how to order villa drinks Bali",
    ],
    speakableTitle: "The method in one paragraph",
    speakable:
      "Compare Bali alcohol delivery on facts you can check, not on a timer in an ad. Ask whether prices live on a public shelf, whether age twenty-one is checked, whether the coverage area is named honestly, and whether payment is spoken before a rider leaves. MadeBrings publishes a catalog of beer, cider, ready-to-drink, mixers, ice, water, and snacks from Abianbase, takes cash or bank transfer, and delivers around Canggu, Seminyak, Kuta, Ubud, and Tanah Lot after you send a pin. We do not invent competitor prices, reviews, or a twenty-four-hour promise. If a shop cannot show a price, will not name its base, or guarantees the whole island in minutes, treat that as marketing, not a method. Keep that question list for every chat, including ours. Unlabeled bottles and untaxed arak have harmed people here; a strange price is not a bargain. If you need our numbers, open the shop pages rather than guessing from an article.",
    intro: [
      "Tourists who type alcohol delivery Bali see a wall of 24/7 claims. This page is the linkable asset: a way to pick a shop without inventing someone else's prices. MadeBrings uses the same test on itself.",
      "Use the list when you chat any shop, including us. If the answers are vague, do not order a villa box.",
    ],
    inclusionsTitle: "What we score (and publish about ourselves)",
    inclusions: [
      "Catalog prices you can see before WhatsApp",
      "A stated 21+ age check",
      "Named service areas, not 'all of Bali' with no caveats",
      "Payment said out loud: cash or bank transfer",
      "Stock confirmed before a bike leaves",
      "No invented reviews or ratings",
    ],
    sections: [
      {
        heading: "Six questions to ask every shop",
        paragraphs: [
          "Message the shop. If they cannot answer these points in plain language, you are not comparing services — you are comparing ads.",
        ],
        list: [
          "Where is the actual shop base today?",
          "Which bottle, pack, and box prices can you see before you pay?",
          "How do they confirm you are 21+?",
          "Which areas do they deliver, and what happens if your pin is outside that?",
          "Cash, transfer, or card — which ones do they actually take?",
          "Do they confirm stock, or promise first and substitute later?",
        ],
      },
      {
        heading: "How MadeBrings answers that test",
        paragraphs: [
          "Base: Abianbase, Badung. Owner: Made Hendrik. Checkout: WhatsApp. Pay: cash or bank transfer. Catalog: beer, cider, Smirnoff Ice, mixers, ice, water, snacks, with rupiah prices on each product page.",
          "Coverage: Abianbase and around Canggu, Seminyak, Kuta, Ubud, and Tanah Lot, arranged after you send a pin. We do not sell a 24/7 timer. If a spirit bottle is not on the shelf, we say so.",
        ],
        link: {
          href: "/alcohol-delivery-service",
          label: "Open the alcohol delivery booking page",
        },
      },
      {
        heading: "What this page will not do",
        paragraphs: [
          "No competitor price table. Other shops change prices, and we do not audit their coolers. No review stars. No 'cheapest in Bali' line. If you need our numbers, open the shop.",
        ],
        link: {
          href: "/shop",
          label: "See MadeBrings catalog prices",
        },
      },
    ],
    faqsTitle: "Method FAQ",
    faqs: [
      {
        question: "Why don't you list Go Drinks or Canggu shop prices?",
        answer:
          "Because we do not run those shops and will not invent their numbers. Compare their public prices with our catalog on /shop. That method still works when a promotion changes.",
      },
      {
        question: "Is a lower price always safer?",
        answer:
          "No. Unlabeled bottles and untaxed arak have harmed people in Bali. Pay for a shelf that can name the producer. If the price is absurd, walk away.",
      },
      {
        question: "Should tourists use a 24-hour service?",
        answer:
          "Only if you truly need a night drop and that shop can explain base, prices, and age checks. Many villa guests are fine ordering in the afternoon from a family shop like ours.",
      },
    ],
    ctaTitle: "Use the method, then book if we fit",
    ctaBody:
      "If our answers are specific enough, chat your villa pin. If they are not, keep the question list for the next shop.",
    shopLabel: "Open the shop",
    bookLabel: "Chat MadeBrings",
  };
}
