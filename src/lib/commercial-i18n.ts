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
  "beer-prices-bali": {
    title: "Berapa harga bir di Bali? Harga villa tertera dari Abianbase",
    description:
      "Harga bir Bali dari MadeBrings: Singaraja Rp 22.000, Bintang Rp 35.000, pak isi enam Rp 200.000, dus Rp 595.000. Antar WhatsApp ke Canggu dan villa sekitar. 21+.",
    excerpt:
      "Berapa harga bir di Bali jika bukan menu beach club? Harga Abianbase tertera, plus angka dus Bintang publik dari GoDrinks dan Boogaloo pada 24 November 2026.",
    answer:
      "Wisatawan yang mencari berapa harga bir di Bali, bir murah Bali, atau harga alkohol Bali biasanya melihat menu beach club dan gudang 24 jam. MadeBrings adalah toko keluarga di Abianbase, Badung, milik Made Hendrik. Chat WhatsApp untuk harga rak tetangga dan pengantaran ke Canggu, Seminyak, Kuta, Ubud, dan Tanah Lot. Singaraja pilsner 330ml tertera Rp 22.000. Bintang 330ml Rp 35.000, pak isi enam Rp 200.000, dan dus Bintang Rp 595.000. Es batu 4kg Rp 25.000. Pada 24 November 2026, situs publik GoDrinks Bali menampilkan pak 24 botol Bintang seharga Rp 720.000 dan The Boogaloo menampilkan Bintang 24-pack Rp 600.000. Kami tidak mengklaim sebagai toko termurah di seluruh Bali. Stok dikonfirmasi di chat sebelum kurir berangkat. Anda harus berusia 21 tahun atau lebih. Ongkir tergantung pin villa yang Anda kirim hari ini.",
    inclusions: [
      "Harga bir rak tetangga dari toko Abianbase — bukan menu beach club",
      "Singaraja, Bintang, San Miguel, pak isi enam, dan dus di pesanan WhatsApp yang sama",
      "Tabel harga publik bertanggal yang mengutip halaman GoDrinks dan Boogaloo 24 November 2026",
      "Antar ke Canggu, Seminyak, Kuta, Ubud, dan Tanah Lot jika Made konfirmasi pin",
      "Tunai atau transfer; 21+",
    ],
    faqs: [
      {
        question: "Berapa harga Bintang di Bali dari MadeBrings?",
        answer:
          "Botol 330ml tertera Rp 35.000, pak isi enam Rp 200.000, dus Rp 595.000. Chat untuk stok. Ongkir tambahan tergantung pin villa.",
      },
      {
        question: "Apakah MadeBrings antar bir termurah di Bali?",
        answer:
          "Kami tidak mengklaim itu. Pada 24 November 2026 dus Bintang kami Rp 595.000, 24-pack publik Boogaloo Rp 600.000, dan GoDrinks Bali menampilkan pak 24 botol Bintang Rp 720.000. Mini mart dan beach club berbeda-beda. Bandingkan angka tertera, lalu WhatsApp kami.",
      },
      {
        question: "Berapa harga bir lokal yang lebih murah di Bali?",
        answer:
          "Singaraja pilsner 330ml tertera Rp 22.000, dus Singaraja Rp 440.000. Itu botol tetangga yang benar-benar diminum di sekitar Abianbase.",
      },
      {
        question: "Apakah harga bir ini termasuk ongkir?",
        answer:
          "Tidak. Harga rak tertera di toko. Ongkir dikonfirmasi di WhatsApp untuk pin Anda. Kami tidak memasang klaim antar gratis sepulau.",
      },
    ],
    sections: [
      {
        paragraphs: [
          "“Berapa harga bir di Bali” adalah pencarian wisatawan, bukan pencarian nightlife. Orang ingin angka yang bisa dipercaya sebelum chat orang asing. Halaman ini memakai katalog MadeBrings dan dua halaman kompetitor publik yang dicek 24 November 2026. Tidak ada lencana “termurah di Bali”.",
        ],
      },
      {
        heading: "Harga bir MadeBrings yang tertera",
        paragraphs: [
          "Angka ini sama dengan toko. Stok bergerak. Pak isi enam atau dus pesanan villa yang biasa; botol satuan berguna jika hanya butuh satu minuman dingin malam ini.",
        ],
        link: {
          href: "/shop/beer-cider",
          label: "Buka rak bir dan sider",
        },
      },
      {
        heading: "Cara pesan bir dengan harga ini",
        paragraphs: [
          "Lihat toko, lalu ketuk Pesan sekarang. WhatsApp Made Hendrik dengan pin villa, bir, dan tunai atau transfer. Kami konfirmasi stok dan ongkir. 21+ saja.",
        ],
        link: {
          href: "/",
          label: "Pesan antar bir di halaman booking",
        },
      },
    ],
  },
  "alcohol-near-me-bali": {
    title: "Alkohol di dekat saya di Bali: toko keluarga di Abianbase, bukan pin 24 jam",
    description:
      "Cari alkohol di dekat saya di Canggu atau Bali? MadeBrings toko keluarga di Abianbase. WhatsApp untuk bir, Ice, dan es ke villa. Harga tetangga, 21+.",
    excerpt:
      "Wisatawan mengetik alkohol di dekat saya karena belum membedakan Abianbase dari Canggu. Chat pin villa — MadeBrings antar dari toko keluarga sungguhan, bukan gudang 24 jam.",
    answer:
      "Jika Anda mencari alkohol di dekat saya di Bali dan belum membedakan Abianbase dari Canggu, Anda tamu yang toko ini layani. MadeBrings adalah layanan antar alkohol keluarga di Abianbase, Mengwi, Badung, dikelola Made Hendrik. Toko berada di pedalaman Kerobokan, cukup dekat untuk mengisi villa di Canggu, Seminyak, dan Kuta jika WhatsApp mengonfirmasi pin peta. Harga awal tertera: Singaraja dari Rp 22.000, Bintang dari Rp 35.000, pak isi enam Rp 200.000, Smirnoff Ice dari Rp 35.000, dan kantong es 4kg Rp 25.000. Kirim nama villa atau pin Google, minuman yang diinginkan, serta tunai atau transfer bank. Ini bukan pin peta 24 jam yang tampil sebagai gudang selalu buka. Stok dikonfirmasi sebelum kurir meninggalkan Abianbase hari ini. Anda harus berusia 21 tahun atau lebih. Buka halaman booking sekarang, lalu chat untuk konfirmasi.",
    inclusions: [
      "Antar alkohol WhatsApp dari toko Abianbase sungguhan, bukan pin peta gudang 24 jam",
      "Untuk tamu yang mengetik alkohol di dekat saya di Canggu, Kerobokan, Seminyak, atau Kuta",
      "Bir, Smirnoff Ice, mixer, es, dan air yang tertera",
      "Tunai atau transfer setelah stok dikonfirmasi; 21+",
    ],
    faqs: [
      {
        question: "Saya mencari alkohol di dekat saya — bisakah MadeBrings antar?",
        answer:
          "Jika Anda di atau dekat Abianbase, Canggu, Kerobokan, Seminyak, Kuta, Ubud, atau Tanah Lot, WhatsApp pin-nya. Made konfirmasi apakah rute itu bisa hari ini. Kami bukan pin Google 24 jam.",
      },
      {
        question: "Di mana tokonya jika ingin mampir?",
        answer:
          "Abianbase, Mengwi, Badung, Bali. Buka Google Maps dari halaman kontak. Banyak tamu tetap pilih antar karena belum kenal jalan pedalaman.",
      },
      {
        question: "Apakah ini lebih dekat daripada gudang 24 jam Canggu?",
        answer:
          "Untuk villa pedalaman sekitar Mengwi, Abianbase, dan tepi tenang Kerobokan, sering ya. Untuk spirit jam 2 pagi di Canggu tengah, operator 24 jam lebih tepat. Pakai halaman perbandingan.",
      },
      {
        question: "Apa yang dipesan wisatawan yang baru mendarat?",
        answer:
          "Pak isi enam Bintang atau Smirnoff Ice, satu kantong es, dan air minum. Tambah kola jika sudah ada botol di koper.",
      },
    ],
    sections: [
      {
        paragraphs: [
          "Alkohol di dekat saya adalah pencarian orang yang baru mendarat, membuka Maps, dan belum tahu apakah mereka di Canggu, Kerobokan, atau Badung pedalaman. MadeBrings tokonya di Abianbase. Kami antar jika pin dan pendingin keduanya memungkinkan.",
        ],
      },
      {
        heading: "Cara pesan dari pencarian di dekat saya",
        paragraphs: [
          "Buka halaman booking, ketuk Pesan sekarang, dan tempel pin Google. Sebutkan bir, Ice, es, dan air. Made membalas stok, ongkir, dan tunai atau transfer. 21+ saja.",
        ],
        link: {
          href: "/",
          label: "Pesan antar alkohol dari Abianbase",
        },
      },
      {
        heading: "Cek harga sebelum chat",
        paragraphs: [
          "Jika pencarian di dekat saya sebenarnya pencarian harga, buka halaman harga bir. Ada Singaraja, Bintang, dan angka dus kompetitor publik bertanggal 24 November 2026.",
        ],
        link: {
          href: "/blog/beer-prices-bali",
          label: "Berapa harga bir di Bali?",
        },
      },
    ],
  },
  "ice-delivery-bali": {
    title: "Antar es di Bali: kantong, sewa esky, dan mixer villa",
    description:
      "Antar es di Canggu dan Bali dari MadeBrings. Kantong 4kg Rp 25.000, esky 3 hari Rp 150.000, plus air, kola, dan bir di pesanan WhatsApp yang sama. 21+.",
    excerpt:
      "Kulkas villa gagal di es lebih dulu. Chat MadeBrings di Abianbase untuk kantong 4kg, esky 3 hari, dan bir atau mixer di sampingnya.",
    answer:
      "Kelompok villa di Canggu dan Seminyak kehabisan es batu lebih cepat daripada bir dingin. MadeBrings mengantar kantong es 4kg seharga Rp 25.000 dan sewa kotak es tiga hari seharga Rp 150.000 dari toko keluarga di Abianbase, Badung, milik Made Hendrik. Tambahkan dus Aqua 24 botol 600ml Rp 65.000, Coca-Cola dari Rp 9.000, air tonik, dan pak isi enam Bintang Rp 200.000 di pesanan WhatsApp yang sama agar satu kurir mengisi kulkas. Antar es Bali dari toko tetangga berarti kantong dikemas terakhir dan pin dikonfirmasi sebelum siapa pun berangkat. Kami tidak memasang janji 30 menit atau antar es gratis sepulau. Chat dulu dengan nama villa atau pin peta. Anda harus berusia 21 tahun atau lebih jika pesanan berisi alkohol. Bayar tunai atau transfer bank setelah stok dikonfirmasi pada hari ini juga.",
    inclusions: [
      "Kantong es 4kg dikemas terakhir agar masih es saat sampai villa",
      "Sewa esky 3 hari jika villa tidak punya esky",
      "Mixer, air, dan bir di rute WhatsApp yang sama",
      "Antar di Canggu, Seminyak, Kuta, Ubud, dan Tanah Lot jika Made konfirmasi pin",
      "Tunai atau transfer; 21+ jika pesanan berisi alkohol",
    ],
    faqs: [
      {
        question: "Bisakah pesan antar es di Canggu tanpa bir?",
        answer:
          "Ya. Kantong es, esky 3 hari, Aqua, dan mixer bisa masuk pesanan WhatsApp sendiri. Jika kantong satu-satunya item, Made tetap konfirmasi apakah pin itu layak rute khusus hari ini.",
      },
      {
        question: "Berapa harga antar es di Bali dari MadeBrings?",
        answer:
          "Kantong 4kg tertera Rp 25.000. Sewa esky 3 hari Rp 150.000, es dijual terpisah. Ongkir dikutip di chat untuk pin Anda.",
      },
      {
        question: "Apakah es masih es saat sampai?",
        answer:
          "Kami kemas es terakhir dan tidak menjanjikan jendela 30 menit yang tidak bisa dipegang. Jika pin jauh — Ubud atau Tanah Lot — bilang lebih awal agar kantong bukan tugas yang meleleh.",
      },
      {
        question: "Bisakah bir dan kola ditambah ke pengantaran es?",
        answer:
          "Ya. Itu pesanan kulkas villa yang biasa. Pak isi enam Bintang tertera Rp 200.000. Harus 21 tahun atau lebih untuk alkohol.",
      },
    ],
    sections: [
      {
        paragraphs: [
          "Antar es Bali adalah pekerjaan villa, bukan pekerjaan bar koktail. Kelompok di Canggu dan Seminyak menghabiskan kantong sebelum pak isi enam. MadeBrings menyimpan kantong 4kg dan esky 3 hari di rak yang sama dengan bir dan kola.",
        ],
      },
      {
        heading: "Cara pesan antar es",
        paragraphs: [
          "Pakai halaman booking, ketuk Pesan sekarang, dan tulis “es” plus nama villa di pesan pertama. Made membalas stok, apakah pin bisa hari ini, dan tunai atau transfer. Tambah bir hanya jika semua yang menerima pesanan berusia 21 tahun atau lebih.",
        ],
        link: {
          href: "/",
          label: "Pesan es dan minuman di halaman booking",
        },
      },
    ],
  },
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
