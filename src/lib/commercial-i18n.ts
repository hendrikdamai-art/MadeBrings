import type { BlogPost } from "@/lib/blog";

type IdCopy = Pick<
  BlogPost,
  | "title"
  | "description"
  | "excerpt"
  | "answer"
  | "inclusions"
  | "faqs"
  | "sections"
>;

export const commercialIdCopy: Record<string, IdCopy> = {
  "alcohol-delivery-canggu": {
    title: "Antar alkohol di Canggu: harga villa dari toko keluarga",
    description:
      "Antar alkohol WhatsApp di Canggu dari MadeBrings di Abianbase. Bir, Ice, mixer, dan es ke villa. Harga tetangga, tunai atau transfer, 21+.",
    excerpt:
      "Baru tiba di Canggu dan kulkas villa kosong? Chat MadeBrings di Abianbase untuk bir, mixer, dan es dengan harga tetangga — bukan harga beach club.",
    answer:
      "MadeBrings menawarkan antar alkohol di Canggu dari toko keluarga di Abianbase, Badung, milik Made Hendrik. Wisatawan yang mencari alkohol di dekat Berawa atau Pererenan bisa WhatsApp nama villa atau pin peta, minuman yang diinginkan, dan apakah bayar tunai atau transfer. Pendingin tertera untuk isi villa: Singaraja dari Rp 22.000, Bintang dari Rp 35.000 atau pak isi enam Rp 200.000, Smirnoff Ice dari Rp 35.000, mixer, es 4kg Rp 25.000, dan sewa esky 3 hari Rp 150.000. Ini bukan gudang Canggu 24 jam dan kami tidak menjanjikan 30 menit. Stok dikonfirmasi di chat, lalu kurir berangkat jika Made bilang bisa. Harus 21 tahun atau lebih. Ongkir tergantung pin yang Anda kirim. Tokonya di Abianbase, bukan di pantai, jadi harga rak tetap harga tetangga. Lihat toko, lalu pesan di WhatsApp hari ini.",
    inclusions: [
      "Cek stok WhatsApp sebelum kurir meninggalkan Abianbase",
      "Bir, sider, Smirnoff Ice, mixer, es, air, dan cemilan dari toko tertera",
      "Antar ke villa atau homestay Canggu, Berawa, atau Pererenan jika Made konfirmasi",
      "Tunai atau transfer setelah konfirmasi",
      "Es batu dan sewa esky 3 hari di chat yang sama",
    ],
    faqs: [
      {
        question: "Apakah MadeBrings antar alkohol ke villa Canggu?",
        answer:
          "Ya. Kami toko keluarga di Abianbase dan mengatur antar ke Canggu, Berawa, dan Pererenan jika pesanan dan pin masuk akal. Chat dulu dengan nama villa.",
      },
      {
        question: "Berapa harga antar bir di Canggu dari MadeBrings?",
        answer:
          "Singaraja 330ml tertera Rp 22.000, Bintang 330ml Rp 35.000, pak isi enam Bintang Rp 200.000. Es Rp 25.000 per kantong 4kg. Ongkir dikonfirmasi di WhatsApp.",
      },
      {
        question: "Bisakah es dan mixer diantar bersama alkohol di Canggu?",
        answer:
          "Ya. Tambahkan Coca-Cola, Sprite, tonik, Red Bull, Aqua, cemilan, es, atau sewa esky 3 hari di pesanan WhatsApp yang sama.",
      },
      {
        question: "Apakah Anda toko botol Canggu 24 jam?",
        answer:
          "Tidak. MadeBrings toko tetangga, bukan gudang 24 jam. Kami konfirmasi apakah kurir bisa datang hari ini di chat. Jangan anggap stok larut malam tanpa bertanya.",
      },
    ],
    sections: [
      {
        paragraphs: [
          "Sebagian besar hasil “antar alkohol Canggu” adalah gudang 24 jam yang bersaing di kecepatan. MadeBrings adalah opsi lain: toko keluarga di Abianbase, dekat Canggu, menjual bir, Ice, mixer, dan es yang benar-benar dihabiskan kelompok villa.",
          "Jika Anda belum kenal kawasan — malam pertama di Berawa, Pererenan, atau Echo Beach — kirim pin. Made Hendrik konfirmasi yang dingin, lalu kami bicara pengantaran.",
        ],
      },
      {
        heading: "Untuk siapa pengantaran Canggu ini",
        paragraphs: [
          "Halaman ini untuk orang yang mencari alkohol di dekat saya atau antar alkohol Canggu karena villa ada gelas tanpa minuman. Juga untuk kelompok yang ingin dus Singaraja atau Bintang tanpa harga beach club.",
        ],
        link: {
          href: "/shop/beer-cider",
          label: "Lihat bir dan sider di toko",
        },
      },
      {
        heading: "Cara pesan antar alkohol di Canggu",
        paragraphs: [
          "Buka toko MadeBrings, catat botol yang diinginkan, lalu ketuk Pesan sekarang. Di WhatsApp kirim nama villa atau pin, daftar, dan tunai atau transfer. Kami konfirmasi stok, ongkir untuk pin itu, dan waktu yang memang mungkin hari ini.",
        ],
        link: {
          href: "/",
          label: "Buka halaman booking antar alkohol",
        },
      },
    ],
  },
  "beer-delivery-seminyak": {
    title: "Antar bir di Seminyak: isi kulkas villa tanpa harga beach club",
    description:
      "Antar bir di Seminyak dan Kerobokan dari MadeBrings. Bintang, Singaraja, mixer, dan es lewat WhatsApp. Harga tetangga, tunai atau transfer, 21+.",
    excerpt:
      "Villa Seminyak kosong jam 6 sore? Pesan Bintang, mixer, dan es dari MadeBrings di Abianbase — toko keluarga, bukan daftar beach club.",
    answer:
      "MadeBrings mengantar bir ke Seminyak dan Kerobokan dari toko keluarga di Abianbase, Badung. Jika Anda mencari antar alkohol Seminyak atau bir di dekat saya, WhatsApp Made Hendrik dengan nama villa, pin peta, bir yang diinginkan, serta tunai atau transfer. Harga tertera: Bintang 330ml Rp 35.000, pak isi enam Rp 200.000, dus Bintang Rp 595.000, pak San Miguel Light Rp 200.000, Coca-Cola 250ml dari Rp 9.000, dan es 4kg Rp 25.000. Singaraja mulai Rp 22.000 jika ingin botol lokal. Kami bukan gudang Seminyak 24 jam dan tidak menyembunyikan mark-up beach club. Stok dicek di chat. Harus 21 tahun atau lebih. Pengantaran diatur jika pin dan pendingin keduanya memungkinkan. Tambahkan es dan air di chat yang sama agar kulkas villa Seminyak atau Kerobokan siap malam itu juga sebelum Anda keluar makan malam.",
    inclusions: [
      "Bir, sider, dan kaleng siap minum dengan harga rak tetangga",
      "Mixer, es, dan air untuk kulkas villa Seminyak atau Kerobokan",
      "Konfirmasi WhatsApp untuk stok dan ongkir ke pin Anda",
      "Tunai atau transfer — tanpa keranjang situs",
    ],
    faqs: [
      {
        question: "Apakah Anda antar bir ke Seminyak dan Kerobokan?",
        answer:
          "Ya. Kirim nama villa atau pin peta di WhatsApp. MadeBrings di Abianbase; kami konfirmasi apakah rute Seminyak atau Kerobokan itu bisa hari ini.",
      },
      {
        question: "Berapa harga antar Bintang di Seminyak?",
        answer:
          "Bintang 330ml tertera Rp 35.000, pak isi enam Rp 200.000, dus Rp 595.000. Es tambahan Rp 25.000 per 4kg. Ongkir dikutip di chat untuk pin Anda.",
      },
      {
        question: "Bisakah mixer dan es dipesan bersama bir?",
        answer:
          "Ya. Kola, Sprite, tonik, Red Bull, Aqua, cemilan, dan es ada di rak yang sama.",
      },
      {
        question: "Mengapa tidak ke mini mart Seminyak saja?",
        answer:
          "Boleh. Mark-up mini mart sering jadi alasan kelompok chat kami. Kami jual harga tetangga dari Abianbase. Chat untuk stok; kami tidak pura-pura dus dingin jika tidak.",
      },
    ],
    sections: [
      {
        paragraphs: [
          "Seminyak mudah untuk minum dan mahal untuk belanja. Pencarian antar bir Seminyak biasanya menampilkan katalog spirit 24 jam. Halaman ini untuk pekerjaan lain: mengisi kulkas villa dengan Bintang, Singaraja, mixer, dan es dengan harga tetangga.",
        ],
      },
      {
        heading: "Cara pesan antar bir di Seminyak",
        paragraphs: [
          "Lihat toko, lalu WhatsApp Made dengan daftar dan pin. Kami konfirmasi stok, ongkir ke alamat Seminyak atau Kerobokan, dan pembayaran — tunai atau transfer.",
        ],
        link: {
          href: "/",
          label: "Pesan antar bir di halaman uang MadeBrings",
        },
      },
    ],
  },
  "alcohol-delivery-kuta": {
    title: "Antar alkohol di Kuta: bir dingin setelah mendarat",
    description:
      "Antar alkohol di Kuta dan Legian dari MadeBrings di Abianbase. WhatsApp untuk Bintang, Smirnoff Ice, mixer, es, dan air. Harga tetangga, 21+.",
    excerpt:
      "Baru mendarat di Kuta dan mini bar terasa menyakitkan? Chat MadeBrings untuk pak isi enam, es, dan air dengan harga tetangga.",
    answer:
      "MadeBrings dapat mengatur antar alkohol di Kuta dan Legian dari toko keluarga di Abianbase, Badung. Pencarian yang berguna bukan gudang Kuta 24 jam — melainkan pak isi enam dingin, es, dan air setelah penerbangan panjang ketika Anda belum tahu mini mart mana yang aman. WhatsApp Made Hendrik dengan nama hotel atau villa, pin peta, Bintang atau Smirnoff Ice, serta tunai atau transfer. Harga tertera: pak Bintang Rp 200.000, pak Smirnoff Ice Rp 200.000, Coca-Cola 250ml dari Rp 9.000, dus Aqua 24×600ml Rp 65.000, dan es 4kg Rp 25.000. Kami konfirmasi stok sebelum kurir berangkat. Kami tidak menjanjikan kecepatan lounge bandara atau jam semalam. Harus 21 tahun atau lebih. Jika besok pindah ke Canggu atau Seminyak, pesan isi villa untuk pin itu. Ongkir dikonfirmasi di chat, bukan ditebak di halaman ini.",
    inclusions: [
      "Pesan WhatsApp setelah mendarat — nama villa atau hotel plus pin",
      "Bir, Smirnoff Ice, mixer, air, dan es dari toko Abianbase tertera",
      "Antar ke Kuta, Legian, dan penginapan selatan Bali jika Made konfirmasi",
      "Tunai atau transfer; 21+ saja",
    ],
    faqs: [
      {
        question: "Bisakah alkohol diantar di Kuta setelah saya mendarat?",
        answer:
          "Sering ya, jika Made konfirmasi stok dan pin. Kirim nama hotel atau villa di WhatsApp. Kami berbasis di Abianbase, bukan di bandara, jadi ini drop-off terencana, bukan jaminan 20 menit.",
      },
      {
        question: "Apa yang dipesan untuk malam pertama di Kuta?",
        answer:
          "Pak Bintang atau Smirnoff Ice, satu kantong es, dan air minum. Tambah kola jika sudah ada botol spirit di koper.",
      },
      {
        question: "Apakah Anda antar ke Legian selain Kuta?",
        answer:
          "Ya, jika chat mengonfirmasi rute. Perlakukan Legian seperti Kuta: kirim pin, tunggu stok, lalu bayar tunai atau transfer.",
      },
      {
        question: "Apakah MadeBrings lebih murah daripada mini bar hotel?",
        answer:
          "Harga tertera kami adalah harga toko tetangga dari Abianbase — Singaraja dari Rp 22.000, Bintang dari Rp 35.000. Mini bar hotel dan banyak rak Kuta lebih tinggi.",
      },
    ],
    sections: [
      {
        paragraphs: [
          "Kuta adalah tempat banyak perjalanan Bali benar-benar dimulai: hotel dekat bandara, malam pertama, kulkas kosong. Antar alkohol Kuta harus berarti pak isi enam, es, dan air — bukan berburu di Jalan Legian dengan koper.",
        ],
      },
      {
        heading: "Cara pesan dari Kuta atau Legian",
        paragraphs: [
          "Ketuk Pesan sekarang di beranda, kirim nama hotel atau villa, dan daftar item. Kami membalas dengan isi pendingin, ongkir untuk pin itu, dan tunai atau transfer. Harus 21+.",
        ],
        link: {
          href: "/",
          label: "Pesan antar alkohol di halaman uang",
        },
      },
    ],
  },
  "alcohol-delivery-ubud-tanah-lot": {
    title: "Antar alkohol di Ubud dan Tanah Lot: isi villa terencana",
    description:
      "Antar alkohol ke Ubud dan Tanah Lot dari MadeBrings di Abianbase. WhatsApp untuk bir, es, dan air. Pin lebih jauh, harga tetangga, 21+. Bukan 24 jam.",
    excerpt:
      "Menginap di Ubud atau dekat Tanah Lot? Chat MadeBrings untuk drop-off bir, es, dan air dari Abianbase — lebih jauh dari Canggu, tetap harga tetangga.",
    answer:
      "MadeBrings dapat mengatur antar alkohol ke Ubud dan Tanah Lot dari toko keluarga di Abianbase, Badung. Pin ini lebih jauh daripada Canggu atau Seminyak, jadi tawarannya jujur: isi villa terencana, bukan skuter 20 menit. WhatsApp Made Hendrik dengan nama villa, pin peta, bir atau Ice, es, dan air, plus tunai atau transfer. Harga tertera tetap berlaku: Singaraja dari Rp 22.000, pak Bintang Rp 200.000, es 4kg Rp 25.000, Aqua 24×600ml Rp 65.000, dan sewa esky 3 hari Rp 150.000. Kami konfirmasi stok dan apakah rute pedalaman atau pantai barat itu bisa hari ini. Kami tidak mengklaim cakupan Ubud 24 jam. Harus 21 tahun atau lebih. Jika Anda sebenarnya di Canggu atau Seminyak, pakai panduan yang lebih dekat. Kirim pin lebih awal jika butuh es masih utuh setelah matahari terbenam di Tanah Lot.",
    inclusions: [
      "Konfirmasi WhatsApp sebelum siapa pun ke pin pedalaman atau barat",
      "Bir, mixer, es, dan air dari toko Abianbase tertera",
      "Antar ke villa kawasan Ubud dan Tanah Lot jika Made bilang jaraknya bisa hari ini",
      "Tunai atau transfer, 21+",
    ],
    faqs: [
      {
        question: "Apakah Anda antar alkohol ke Ubud?",
        answer:
          "Jika WhatsApp mengonfirmasi pin dan stok. Ubud lebih jauh dari Abianbase daripada Canggu. Anggap sebagai drop-off terencana, bukan aplikasi instan.",
      },
      {
        question: "Bisakah antar ke arah Tanah Lot?",
        answer:
          "Ya, untuk villa dan rumah sekitar Tanah Lot jika Made setuju. Kirim pin setelah rencana matahari terbenam agar es masih masuk akal.",
      },
      {
        question: "Mengapa ini lebih lambat daripada antar Canggu?",
        answer:
          "Jarak. Abianbase di Badung pedalaman. Canggu dan Seminyak lompatan wisatawan yang pendek. Ubud dan Tanah Lot butuh jendela yang lebih jelas dan ongkir yang dikonfirmasi di chat.",
      },
      {
        question: "Apa yang dipesan villa Ubud?",
        answer:
          "Pak isi enam atau Singaraja, es, dan air. Tambah esky 3 hari jika villa tidak punya esky. Tanya WhatsApp jika butuh botol arak berizin — raknya singkat.",
      },
    ],
    sections: [
      {
        paragraphs: [
          "Ubud dan Tanah Lot adalah pencarian ketika villa tidak di Canggu. Antar alkohol Ubud kebutuhan nyata; itu juga jarak lebih jauh dari Abianbase. Halaman ini jujur soal jarak itu dan tetap menawarkan harga bir, es, dan air yang tertera.",
        ],
      },
      {
        heading: "Cara pesan dari Ubud atau Tanah Lot",
        paragraphs: [
          "Pakai halaman uang, ketuk Pesan sekarang, dan tulis kawasan di pesan pertama. Made membalas stok, apakah jaraknya bisa hari ini, dan tunai atau transfer. 21+ saja.",
        ],
        link: {
          href: "/",
          label: "Pesan antar alkohol dari Abianbase",
        },
      },
      {
        heading: "Penginapan yang lebih dekat",
        paragraphs: [
          "Jika Anda sebenarnya di Canggu, Seminyak, atau Kuta, panduan itu lebih cocok. Halaman perbandingan menjelaskan kapan gudang 24 jam lebih tepat daripada toko keluarga.",
        ],
        link: {
          href: "/compare/bali-alcohol-delivery",
          label: "Toko tetangga vs antar alkohol 24 jam",
        },
      },
    ],
  },
};
