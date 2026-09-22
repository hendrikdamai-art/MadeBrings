import { cdnImage } from "@/lib/commerce/images";
import type { BlogPost } from "@/lib/blog-types";
import { listedPrices } from "@/lib/money-copy";
import { COMPARE_PATH, MONEY_PATH, PRESS_PATH } from "@/lib/seo-paths";

export const commercialArticles: BlogPost[] = [
  {
    slug: "alcohol-delivery-canggu",
    intent: "commercial",
    query: "alcohol delivery Canggu",
    bookingHref: MONEY_PATH,
    title: "Alcohol delivery Canggu: WhatsApp a family shop in Abianbase",
    description:
      "Need alcohol delivery in Canggu? MadeBrings is a family shop in Abianbase. WhatsApp for beer, Smirnoff Ice, Coke, water, and ice to villas around Canggu. Cash or transfer. 21+.",
    excerpt:
      "Canggu tourists who search alcohol delivery do not need a 24-hour spirits warehouse. Chat MadeBrings in Abianbase, confirm the cooler, and we arrange the villa drop.",
    keywords: [
      "alcohol delivery Canggu",
      "beer delivery Canggu",
      "Canggu villa drinks",
      "alcohol delivery Bali",
      "WhatsApp alcohol Canggu",
      "Berawa beer delivery",
      "Pererenan alcohol delivery",
    ],
    datePublished: "2026-09-22",
    dateModified: "2026-09-22",
    readingMinutes: 6,
    heroImage: cdnImage("photo-1535958636474-b021ee887b13"),
    heroAlt: "Cold beer bottles, the kind Canggu villa groups order for the first night",
    speakable: `Alcohol delivery in Canggu from MadeBrings means WhatsApping a family shop in Abianbase, not downloading a 24-hour app. We keep Singaraja, Bintang, lemon Radler, San Miguel Light, Smirnoff Ice, Coca-Cola, Sprite, tonic, Aqua, and 4kg ice bags. A Coke can is ${listedPrices.coke}. Singaraja 330ml is ${listedPrices.singaraja}. Bintang 330ml is ${listedPrices.bintang}. A Bintang six-pack is ${listedPrices.bintangSix}. Send the villa name in Canggu, Berawa, or Pererenan, your drinks list, and whether you pay cash or bank transfer. We confirm what is actually cold today, then arrange the run. We are not a beach-club bottle shop and we do not promise a 30-minute scooter. You must be 21 or older. If the cooler is empty of a flavour, we say so before anyone leaves Abianbase. Open the alcohol delivery page to book, or browse the shop first and paste the names into WhatsApp.`,
    inclusions: [
      "Beer and Smirnoff Ice from the Abianbase cooler",
      "Coke, Sprite, tonic, water, and ice bags for the villa fridge",
      "WhatsApp stock check before the scooter leaves",
      "Drop arranged for stays around Canggu when we can take the run",
    ],
    faqs: [
      {
        question: "Can MadeBrings deliver alcohol to a Canggu villa?",
        answer:
          "Yes, Canggu is one of the areas we serve from Abianbase. Send a pin on WhatsApp. We confirm the run for that day rather than advertising a fixed timer.",
      },
      {
        question: "What should I order for the first Canggu night?",
        answer: `A Bintang or Singaraja six-pack, a 4kg ice bag (${listedPrices.ice}), and water. Add Smirnoff Ice or Coke if the group wants mixers. Chat so we confirm the cooler.`,
      },
      {
        question: "Do you deliver 24/7 in Canggu?",
        answer:
          "No. We are a family shop. Other Bali services market 24/7; we tell you if we can come today.",
      },
    ],
    sections: [
      {
        paragraphs: [
          "Most “alcohol delivery Canggu” pages sell a 24-hour warehouse. MadeBrings is the other option: a family cooler in Abianbase, neighborhood prices, and a WhatsApp thread with a person named Made Hendrik.",
          "If you are in a villa around Canggu, Berawa, or Pererenan and you do not want to hunt a marked-up minimart after dark, send the list. We confirm stock, then we talk about the drop.",
        ],
        link: { href: MONEY_PATH, label: "Open the alcohol delivery booking page" },
      },
      {
        heading: "What we actually bring to Canggu",
        paragraphs: [
          "The menu is the shop: beer, cider-style Radler, Smirnoff Ice, mixers, ice, water, snacks. We do not pretend to hold every imported whisky on the 24/7 sites. If you need a specific spirit, ask — we will say yes or no.",
        ],
        list: [
          `Singaraja 330ml — ${listedPrices.singaraja}`,
          `Bintang 330ml — ${listedPrices.bintang}`,
          `Bintang six-pack — ${listedPrices.bintangSix}`,
          `Smirnoff Ice 275ml — ${listedPrices.smirnoff}`,
          `4kg ice bag — ${listedPrices.ice}`,
        ],
        link: { href: "/shop/beer-cider", label: "Shop beer and cider" },
      },
      {
        heading: "How the Canggu drop works",
        paragraphs: [
          "WhatsApp the villa name or a Google pin, the drinks, and cash or transfer. Wait for confirmation. That reply is the booking. We will not invent a traffic-proof ETA in this article.",
        ],
        link: { href: "/shop", label: "Copy names from the shop, then chat" },
      },
    ],
    idCopy: {
      title: "Antar alkohol Canggu: WhatsApp toko keluarga di Abianbase",
      description:
        "Butuh antar alkohol di Canggu? MadeBrings toko keluarga di Abianbase. WhatsApp untuk bir, Smirnoff Ice, Coke, air, dan es ke villa sekitar Canggu. Tunai atau transfer. 21+.",
      excerpt:
        "Turis Canggu yang mencari antar alkohol tidak wajib gudang minuman 24 jam. Chat MadeBrings di Abianbase, konfirmasi pendingin, lalu kami atur pengantaran villa.",
      speakable: `Antar alkohol di Canggu dari MadeBrings artinya WhatsApp ke toko keluarga di Abianbase, bukan unduh aplikasi 24 jam. Kami sedia Singaraja, Bintang, Radler lemon, San Miguel Light, Smirnoff Ice, Coca-Cola, Sprite, tonik, Aqua, dan es batu 4kg. Kaleng Coke ${listedPrices.coke}. Singaraja 330ml ${listedPrices.singaraja}. Bintang 330ml ${listedPrices.bintang}. Pak Bintang isi enam ${listedPrices.bintangSix}. Kirim nama villa di Canggu, Berawa, atau Pererenan, daftar minuman, dan apakah bayar tunai atau transfer. Kami konfirmasi yang benar-benar dingin hari ini, lalu atur jalan. Kami bukan toko beach club dan tidak janji skuter 30 menit. Anda harus 21 tahun ke atas. Kalau rasa tertentu habis, kami bilang sebelum ada yang berangkat dari Abianbase. Buka halaman antar alkohol untuk pesan, atau lihat toko dulu lalu tempel namanya di WhatsApp. Ice dan air bisa ikut di jalan yang sama jika kulkas villa kosong.`,
      inclusions: [
        "Bir dan Smirnoff Ice dari pendingin Abianbase",
        "Coke, Sprite, tonik, air, dan es untuk kulkas villa",
        "Cek stok WhatsApp sebelum motor berangkat",
        "Pengantaran untuk menginap di sekitar Canggu jika kami bisa mengambil jalan",
      ],
      faqs: [
        {
          question: "Bisakah MadeBrings antar alkohol ke villa Canggu?",
          answer:
            "Ya, Canggu salah satu area dari toko Abianbase. Kirim pin di WhatsApp. Kami konfirmasi jalan hari itu, bukan memasang timer tetap.",
        },
        {
          question: "Apa yang dipesan untuk malam pertama di Canggu?",
          answer: `Pak Bintang atau Singaraja, es batu 4kg (${listedPrices.ice}), dan air. Tambah Smirnoff Ice atau Coke jika grup mau mixer. Chat agar pendingin dikonfirmasi.`,
        },
        {
          question: "Apakah antar 24 jam di Canggu?",
          answer:
            "Tidak. Kami toko keluarga. Layanan Bali lain memasang 24/7; kami bilang apakah bisa datang hari ini.",
        },
      ],
      sections: [
        {
          paragraphs: [
            "Sebagian besar halaman “antar alkohol Canggu” menjual gudang 24 jam. MadeBrings pilihan lain: pendingin keluarga di Abianbase, harga tetangga, dan thread WhatsApp dengan orang bernama Made Hendrik.",
            "Kalau Anda di villa sekitar Canggu, Berawa, atau Pererenan dan tidak mau minimarket bermargin tinggi malam-malam, kirim daftar. Kami konfirmasi stok, lalu bicara pengantaran.",
          ],
          link: { href: MONEY_PATH, label: "Buka halaman pesan antar alkohol" },
        },
        {
          heading: "Apa yang benar-benar kami bawa ke Canggu",
          paragraphs: [
            "Menunya adalah toko: bir, Radler, Smirnoff Ice, mixer, es, air, cemilan. Kami tidak berpura-pura punya setiap wiski impor di situs 24/7. Kalau butuh botol tertentu, tanya — kami bilang ya atau tidak.",
          ],
          list: [
            `Singaraja 330ml — ${listedPrices.singaraja}`,
            `Bintang 330ml — ${listedPrices.bintang}`,
            `Bintang isi enam — ${listedPrices.bintangSix}`,
            `Smirnoff Ice 275ml — ${listedPrices.smirnoff}`,
            `Es batu 4kg — ${listedPrices.ice}`,
          ],
          link: { href: "/shop/beer-cider", label: "Belanja bir dan sider" },
        },
        {
          heading: "Cara pengantaran Canggu",
          paragraphs: [
            "WhatsApp nama villa atau pin Google, minuman, dan tunai atau transfer. Tunggu konfirmasi. Balasan itu pesanannya. Kami tidak mengarang ETA anti-macet di artikel ini.",
          ],
          link: { href: "/shop", label: "Salin nama dari toko, lalu chat" },
        },
      ],
    },
  },
  {
    slug: "alcohol-near-me-bali",
    intent: "commercial",
    query: "alcohol near me Bali",
    bookingHref: MONEY_PATH,
    title: "Alcohol near me in Bali: skip the guesswork after you land",
    description:
      "Searched alcohol near me in Bali? MadeBrings is a family shop in Abianbase. WhatsApp for beer, Ice, Coke, water, and ice around Canggu, Seminyak, Kuta, Ubud, and Tanah Lot.",
    excerpt:
      "“Alcohol near me” in Bali often means a tourist-priced minimart. A WhatsApp to Abianbase is how villa guests restock without walking the main road at night.",
    keywords: [
      "alcohol near me Bali",
      "alcohol near me Canggu",
      "liquor store near me Bali",
      "beer near me Seminyak",
      "alcohol delivery near me",
      "bottle shop near me Kuta",
    ],
    datePublished: "2026-09-22",
    dateModified: "2026-09-22",
    readingMinutes: 6,
    heroImage: cdnImage("photo-1504674900247-0877df9cc836"),
    heroAlt: "Drinks on a table, the first restock after landing in Bali",
    speakable: `If you typed alcohol near me after landing in Bali, you do not need a random minimart map pin. MadeBrings is a family alcohol shop in Abianbase, Badung, owned by Made Hendrik. WhatsApp the villa or hotel pin around Canggu, Seminyak, Kuta, Ubud, Tanah Lot, or Abianbase. We sell beer, Smirnoff Ice, Coca-Cola, water, ice, and snacks at listed neighborhood prices: Coke from ${listedPrices.coke}, Singaraja from ${listedPrices.singaraja}, Bintang 330ml at ${listedPrices.bintang}. Pay cash or bank transfer after we confirm the cooler. You must be 21 or older. Maps will also show 24-hour Canggu delivery brands; we are the smaller shop that answers as a person. We do not publish fake distance badges. If we can take the run, we say so in the chat. Use the alcohol delivery page to start, then keep the thread for stock questions.`,
    inclusions: [
      "A WhatsApp reply from the Abianbase shop, not a chatbot warehouse",
      "Listed beer, Ice, mixer, water, and ice prices",
      "Delivery talk for Canggu, Seminyak, Kuta, Ubud, Tanah Lot, and Abianbase",
      "21+ check — Indonesian law",
    ],
    faqs: [
      {
        question: "What comes up when tourists search alcohol near me in Bali?",
        answer:
          "Maps shows minimarts and 24/7 delivery brands. MadeBrings is the family shop in Abianbase you can WhatsApp for beer, Ice, mixers, water, and ice to the villa.",
      },
      {
        question: "Can I walk in?",
        answer:
          "Yes if you are near Abianbase. Pin us on Google Maps and chat so Made knows you are coming. Many guests still prefer delivery after a long flight.",
      },
      {
        question: "How fast is “near me”?",
        answer:
          "We will not invent minutes. Distance from Abianbase and traffic decide it. Ask in WhatsApp with your pin.",
      },
    ],
    sections: [
      {
        paragraphs: [
          "The query is literal: you just landed, the villa fridge is empty, and Google says alcohol near me. Beach-road minimarts will sell you something. They will also sell you the location, not the neighborhood price.",
          "MadeBrings is in Abianbase. That is inland Badung — useful if you are split between Canggu nights and Ubud or Tanah Lot days. Chat first. Tell us the pin.",
        ],
        link: { href: MONEY_PATH, label: "Book alcohol delivery from Abianbase" },
      },
      {
        heading: "What to ask for in the first WhatsApp",
        paragraphs: [
          "Villa or hotel name, area, drinks, ice, water, and cash or transfer. If you only need beer and ice, say that. If you want Coke and Smirnoff Ice too, list them.",
        ],
        list: [
          "Area + pin",
          "Beer or Ice names from the shop",
          "Ice bags and Aqua if the fridge is empty",
          "Payment: cash or bank transfer",
        ],
        link: { href: "/contact", label: "Contact and map for the shop" },
      },
      {
        heading: "Nearby is not the same as licensed",
        paragraphs: [
          "Buy sealed, labeled drinks from a shop that will talk to you. Unmarked roadside spirits are not a bargain. Our cooler is beer, Ice, mixers, water, and ice — we will not upsell a mystery bottle.",
        ],
        link: { href: "/blog/arak-bali-traditional-drink", label: "Read how we talk about arak and licensed bottles" },
      },
    ],
    idCopy: {
      title: "Alkohol terdekat di Bali: jangan tebak-tebakan setelah mendarat",
      description:
        "Cari alkohol terdekat di Bali? MadeBrings toko keluarga di Abianbase. WhatsApp untuk bir, Ice, Coke, air, dan es di sekitar Canggu, Seminyak, Kuta, Ubud, dan Tanah Lot.",
      excerpt:
        "“Alkohol terdekat” di Bali sering berarti minimarket harga turis. WhatsApp ke Abianbase cara tamu villa restok tanpa jalan raya malam-malam.",
      speakable: `Kalau Anda mengetik alkohol terdekat setelah mendarat di Bali, Anda tidak wajib pin minimarket acak. MadeBrings adalah toko alkohol keluarga di Abianbase, Badung, milik Made Hendrik. WhatsApp pin villa atau hotel di sekitar Canggu, Seminyak, Kuta, Ubud, Tanah Lot, atau Abianbase. Kami jual bir, Smirnoff Ice, Coca-Cola, air, es, dan cemilan dengan harga tetangga tertera: Coke dari ${listedPrices.coke}, Singaraja dari ${listedPrices.singaraja}, Bintang 330ml ${listedPrices.bintang}. Bayar tunai atau transfer setelah kami konfirmasi pendingin. Anda harus 21 tahun ke atas. Peta juga menampilkan merek antar Canggu 24 jam; kami toko lebih kecil yang menjawab sebagai orang. Kami tidak memasang lencana jarak palsu. Kalau jalan bisa diambil, kami bilang di chat. Mulai dari halaman antar alkohol, lalu lanjutkan thread untuk tanya stok. Tulis nama villa dan daftar minuman di pesan pertama agar tidak bolak-balik.`,
      inclusions: [
        "Balasan WhatsApp dari toko Abianbase, bukan gudang chatbot",
        "Harga tertera bir, Ice, mixer, air, dan es",
        "Pembicaraan antar untuk Canggu, Seminyak, Kuta, Ubud, Tanah Lot, dan Abianbase",
        "Cek 21+ — hukum Indonesia",
      ],
      faqs: [
        {
          question: "Apa yang muncul saat turis mencari alkohol terdekat di Bali?",
          answer:
            "Peta menampilkan minimarket dan merek antar 24/7. MadeBrings adalah toko keluarga di Abianbase yang bisa di-WhatsApp untuk bir, Ice, mixer, air, dan es ke villa.",
        },
        {
          question: "Bisa datang langsung?",
          answer:
            "Ya jika dekat Abianbase. Pin Google Maps dan chat agar Made tahu Anda datang. Banyak tamu tetap pilih diantar setelah penerbangan panjang.",
        },
        {
          question: "Seberapa cepat “dekat saya”?",
          answer:
            "Kami tidak mengarang menit. Jarak dari Abianbase dan macet yang menentukan. Tanyakan di WhatsApp dengan pin Anda.",
        },
      ],
      sections: [
        {
          paragraphs: [
            "Query-nya literal: baru mendarat, kulkas villa kosong, Google bilang alkohol terdekat. Minimarket pinggir pantai akan menjual sesuatu. Mereka juga menjual lokasi, bukan harga tetangga.",
            "MadeBrings di Abianbase. Itu pedalaman Badung — berguna jika Anda bagi malam Canggu dan hari Ubud atau Tanah Lot. Chat dulu. Kirim pin.",
          ],
          link: { href: MONEY_PATH, label: "Pesan antar alkohol dari Abianbase" },
        },
        {
          heading: "Apa yang ditulis di WhatsApp pertama",
          paragraphs: [
            "Nama villa atau hotel, area, minuman, es, air, dan tunai atau transfer. Kalau hanya butuh bir dan es, bilang itu. Kalau mau Coke dan Smirnoff Ice juga, daftarkan.",
          ],
          list: [
            "Area + pin",
            "Nama bir atau Ice dari toko",
            "Es batu dan Aqua jika kulkas kosong",
            "Bayar: tunai atau transfer bank",
          ],
          link: { href: "/contact", label: "Kontak dan peta toko" },
        },
        {
          heading: "Dekat tidak sama dengan berizin",
          paragraphs: [
            "Beli minuman tersegel berlabel dari toko yang mau bicara. Spirit pinggir jalan tanpa merek bukan hemat. Pendingin kami bir, Ice, mixer, air, dan es — kami tidak memaksa botol misterius.",
          ],
          link: {
            href: "/blog/arak-bali-traditional-drink",
            label: "Baca catatan kami soal arak dan botol berizin",
          },
        },
      ],
    },
  },
  {
    slug: "beer-delivery-bali",
    intent: "commercial",
    query: "beer delivery Bali",
    bookingHref: MONEY_PATH,
    title: "Beer delivery in Bali: Singaraja, Bintang, and ice from Abianbase",
    description:
      "Beer delivery in Bali from MadeBrings in Abianbase. Singaraja, Bintang, Radler, and San Miguel with ice and water to Canggu, Seminyak, Kuta, Ubud, and Tanah Lot. WhatsApp to confirm.",
    excerpt:
      "If the villa only needs beer and ice, skip the spirits catalog. MadeBrings lists Singaraja, Bintang, six-packs, boxes, and 4kg ice bags — then you chat to book.",
    keywords: [
      "beer delivery Bali",
      "Bintang delivery Bali",
      "Singaraja delivery",
      "beer delivery Canggu",
      "buy beer Bali villa",
      "Bintang six pack Bali",
    ],
    datePublished: "2026-09-22",
    dateModified: "2026-09-22",
    readingMinutes: 6,
    heroImage: cdnImage("photo-1436076863939-06870fe779c2"),
    heroAlt: "Beer bottles in a cooler, ready for a Bali villa table",
    speakable: `Beer delivery in Bali from MadeBrings is a WhatsApp order to a family shop in Abianbase. The cooler holds Singaraja Pilsner, Bintang, Bintang Crystal, Bintang Radler Lemon, and San Miguel Light in singles, six-packs, and boxes. Listed prices: Singaraja 330ml ${listedPrices.singaraja}, Bintang 330ml ${listedPrices.bintang}, Bintang six-pack ${listedPrices.bintangSix}, Bintang box ${listedPrices.bintangBox}. Add a 4kg ice bag at ${listedPrices.ice} and an Aqua box at ${listedPrices.aqua} if the fridge is empty. We deliver around Abianbase, Canggu, Seminyak, Kuta, Ubud, and Tanah Lot when we can take the run. Chat first, pay cash or bank transfer after confirmation, 21 or older. We do not run a hidden beer tariff; the shop pages are the menu. If a six-pack is gone, we tell you before the bike leaves. Book on the alcohol delivery page or paste product names from the beer shelf into WhatsApp.`,
    inclusions: [
      "Singaraja, Bintang, Radler, and San Miguel as listed in the shop",
      "Six-packs and boxes when those SKUs are in stock",
      "Ice bags and water on the same run",
      "WhatsApp confirmation — no surprise trolley",
    ],
    faqs: [
      {
        question: "How much is Bintang delivery in Bali from MadeBrings?",
        answer: `The bottle is ${listedPrices.bintang} for 330ml, ${listedPrices.bintangSix} for a six-pack, ${listedPrices.bintangBox} for a box. Delivery itself is confirmed in WhatsApp for your pin — we do not publish a fake fee table.`,
      },
      {
        question: "Singaraja or Bintang?",
        answer: `Singaraja is the local everyday pilsner at ${listedPrices.singaraja}. Bintang is the island regular at ${listedPrices.bintang}. Groups often mix a box of one and a six-pack of the other. Chat stock.`,
      },
      {
        question: "Can I add ice on a beer run?",
        answer: `Yes. A 4kg ice bag is ${listedPrices.ice}. A three-day ice-box rental is ${listedPrices.esky}; ice is sold separately.`,
      },
    ],
    sections: [
      {
        paragraphs: [
          "Canggu delivery brands lead with whisky. Most villa first-nights still start with beer. That is the query we answer here: beer delivery in Bali, with ice, from a shop that lists the bottles.",
        ],
        link: { href: MONEY_PATH, label: "Book beer delivery on the money page" },
      },
      {
        heading: "The beer shelf, in prices you can check",
        paragraphs: [
          "Open beer and cider for the live list. The numbers below match the catalog on this site today.",
        ],
        list: [
          `Singaraja Pilsner 330ml — ${listedPrices.singaraja}`,
          `Bintang 330ml — ${listedPrices.bintang}`,
          `Bintang six-pack — ${listedPrices.bintangSix}`,
          `Bintang box — ${listedPrices.bintangBox}`,
          `San Miguel Light box — see the shop page`,
        ],
        link: { href: "/shop/beer-cider", label: "Full beer and cider shelf" },
      },
      {
        heading: "Boxes for a villa, six-packs for a quiet night",
        paragraphs: [
          "A couple usually wants a six-pack plus ice and water. A full villa weekend wants a box. Tell us the headcount. We will not force a box if a six-pack is enough.",
        ],
        link: { href: "/shop/ice-water", label: "Add ice and Aqua on the same order" },
      },
    ],
    idCopy: {
      title: "Antar bir di Bali: Singaraja, Bintang, dan es dari Abianbase",
      description:
        "Antar bir di Bali dari MadeBrings di Abianbase. Singaraja, Bintang, Radler, dan San Miguel plus es dan air ke Canggu, Seminyak, Kuta, Ubud, dan Tanah Lot. WhatsApp untuk konfirmasi.",
      excerpt:
        "Kalau villa hanya butuh bir dan es, lewati katalog spirit. MadeBrings menampilkan Singaraja, Bintang, pak isi enam, dus, dan es 4kg — lalu chat untuk pesan.",
      speakable: `Antar bir di Bali dari MadeBrings adalah pesanan WhatsApp ke toko keluarga di Abianbase. Pendingin berisi Singaraja Pilsner, Bintang, Bintang Crystal, Bintang Radler Lemon, dan San Miguel Light dalam satuan, isi enam, dan dus. Harga tertera: Singaraja 330ml ${listedPrices.singaraja}, Bintang 330ml ${listedPrices.bintang}, pak Bintang ${listedPrices.bintangSix}, dus Bintang ${listedPrices.bintangBox}. Tambah es batu 4kg ${listedPrices.ice} dan dus Aqua ${listedPrices.aqua} jika kulkas kosong. Kami antar sekitar Abianbase, Canggu, Seminyak, Kuta, Ubud, dan Tanah Lot jika bisa mengambil jalan. Chat dulu, bayar tunai atau transfer setelah konfirmasi, 21 tahun ke atas. Kami tidak punya tarif bir tersembunyi; halaman toko adalah menunya. Kalau isi enam habis, kami bilang sebelum motor pergi. Pesan di halaman antar alkohol atau tempel nama produk dari rak bir ke WhatsApp. Villa ramai biasanya butuh dus, bukan hanya satu botol.`,
      inclusions: [
        "Singaraja, Bintang, Radler, dan San Miguel sesuai toko",
        "Isi enam dan dus jika SKU itu ada",
        "Es batu dan air dalam jalan yang sama",
        "Konfirmasi WhatsApp — tanpa keranjang kejutan",
      ],
      faqs: [
        {
          question: "Berapa antar Bintang di Bali dari MadeBrings?",
          answer: `Botol 330ml ${listedPrices.bintang}, isi enam ${listedPrices.bintangSix}, dus ${listedPrices.bintangBox}. Pengantarannya dikonfirmasi di WhatsApp untuk pin Anda — kami tidak memasang tabel ongkir palsu.`,
        },
        {
          question: "Singaraja atau Bintang?",
          answer: `Singaraja pilsner harian lokal ${listedPrices.singaraja}. Bintang regular pulau ${listedPrices.bintang}. Grup sering campur satu dus dan satu pak. Chat stok.`,
        },
        {
          question: "Bisa tambah es saat antar bir?",
          answer: `Ya. Es batu 4kg ${listedPrices.ice}. Sewa kotak es tiga hari ${listedPrices.esky}; es dijual terpisah.`,
        },
      ],
      sections: [
        {
          paragraphs: [
            "Merek antar Canggu memimpin dengan wiski. Malam pertama villa masih dimulai dengan bir. Itu query yang kami jawab: antar bir di Bali, dengan es, dari toko yang menuliskan botolnya.",
          ],
          link: { href: MONEY_PATH, label: "Pesan antar bir di halaman utama" },
        },
        {
          heading: "Rak bir, dengan harga yang bisa dicek",
          paragraphs: [
            "Buka bir dan sider untuk daftar hidup. Angka di bawah sesuai katalog di situs ini hari ini.",
          ],
          list: [
            `Singaraja Pilsner 330ml — ${listedPrices.singaraja}`,
            `Bintang 330ml — ${listedPrices.bintang}`,
            `Bintang isi enam — ${listedPrices.bintangSix}`,
            `Dus Bintang — ${listedPrices.bintangBox}`,
            `Dus San Miguel Light — lihat halaman toko`,
          ],
          link: { href: "/shop/beer-cider", label: "Rak bir dan sider lengkap" },
        },
        {
          heading: "Dus untuk villa, isi enam untuk malam tenang",
          paragraphs: [
            "Pasangan biasanya butuh isi enam plus es dan air. Akhir pekan villa penuh butuh dus. Sebut jumlah orang. Kami tidak memaksa dus jika isi enam cukup.",
          ],
          link: { href: "/shop/ice-water", label: "Tambah es dan Aqua di pesanan yang sama" },
        },
      ],
    },
  },
  {
    slug: "alcohol-delivery-ubud-tanah-lot",
    intent: "commercial",
    query: "alcohol delivery Ubud Tanah Lot",
    bookingHref: MONEY_PATH,
    title: "Alcohol delivery for Ubud and Tanah Lot stays",
    description:
      "Alcohol delivery toward Ubud and Tanah Lot from MadeBrings in Abianbase — inland Badung, not a Canggu-only warehouse. Beer, Ice, mixers, water, and ice. WhatsApp to confirm the run.",
    excerpt:
      "24/7 Canggu shops treat Ubud and Tanah Lot as extra-zone afterthoughts. Abianbase sits inland Badung, which is why we write this page for those stays.",
    keywords: [
      "alcohol delivery Ubud",
      "alcohol delivery Tanah Lot",
      "beer delivery Ubud",
      "Mengwi alcohol delivery",
      "Abianbase liquor delivery",
      "villa drinks Tanah Lot",
    ],
    datePublished: "2026-09-22",
    dateModified: "2026-09-22",
    readingMinutes: 6,
    heroImage: cdnImage("photo-1537996194471-e657df975ab4"),
    heroAlt: "Temple gates in Bali, near the inland stays we deliver toward",
    speakable: `Alcohol delivery for Ubud and Tanah Lot from MadeBrings starts in Abianbase, inland Badung, not on a Canggu beach road. If your villa is toward Ubud, Mengwi, or Tanah Lot, a neighborhood shop on that side of the island is the practical WhatsApp. We bring beer, Smirnoff Ice, Coca-Cola, water, and ice at listed prices: Singaraja ${listedPrices.singaraja}, Bintang 330ml ${listedPrices.bintang}, Coke ${listedPrices.coke}, 4kg ice ${listedPrices.ice}. Chat the pin first. We confirm whether that run works today. We do not advertise 24/7 coverage of every rice-field address. You must be 21 or older and pay cash or bank transfer after stock is confirmed. Canggu and Seminyak guests can still order; this page exists because Ubud and Tanah Lot searches are usually ignored. Book on the alcohol delivery page, then keep the villa name in the thread so Made is not guessing the driveway.`,
    inclusions: [
      "WhatsApp confirmation for inland Badung, Ubud-side, and Tanah Lot-side pins",
      "Beer, Ice, mixers, water, ice from the Abianbase shelf",
      "Honest no if the run is not possible that day",
      "Cash or transfer after the cooler is checked",
    ],
    faqs: [
      {
        question: "Do you deliver alcohol to Ubud?",
        answer:
          "Ubud is in our service list. Send the villa pin. Inland Abianbase is closer than a Canggu-only warehouse for many Mengwi–Ubud stays, but we still confirm each run.",
      },
      {
        question: "Tanah Lot villas?",
        answer:
          "Yes, Tanah Lot is listed with Abianbase, Canggu, Seminyak, Kuta, and Ubud. Chat the pin. Sunset traffic is real; we will not invent a timer around it.",
      },
      {
        question: "Is Abianbase convenient if I am only in central Ubud?",
        answer:
          "Sometimes yes, sometimes the run is long. We would rather decline than promise. That is the point of chatting first.",
      },
    ],
    sections: [
      {
        paragraphs: [
          "Public competitor pages lean on Canggu, Seminyak, and “30 minutes”. Ubud and Tanah Lot appear as extended zones. MadeBrings is in Abianbase, Mengwi — between the west-coast villas and those inland or Tanah Lot stays.",
          "If that is your map, WhatsApp the pin before you assume a scooter from Canggu is the only option.",
        ],
        link: { href: MONEY_PATH, label: "Alcohol delivery from Abianbase" },
      },
      {
        heading: "What inland villas usually order",
        paragraphs: [
          "Beer, water, ice, and a mixer. Temple-day groups often want less alcohol and more Aqua. We will pack that mix without forcing a spirits upsell we do not stock.",
        ],
        list: [
          `Bintang or Singaraja six-pack`,
          `Aqua 600ml box — ${listedPrices.aqua}`,
          `4kg ice — ${listedPrices.ice}`,
          `Coke or Sprite cans if you already have a bottle in the cupboard`,
        ],
        link: { href: "/shop/ice-water", label: "Ice, water, and esky rental" },
      },
      {
        heading: "Compare how shops talk about coverage",
        paragraphs: [
          "If you are weighing a 24/7 Canggu brand against a family shop, read the methodology page. It explains the questions we used — hours claimed, catalog, checkout — without inventing their prices.",
        ],
        link: { href: COMPARE_PATH, label: "How we compare Bali alcohol delivery" },
      },
    ],
    idCopy: {
      title: "Antar alkohol untuk menginap di Ubud dan Tanah Lot",
      description:
        "Antar alkohol ke arah Ubud dan Tanah Lot dari MadeBrings di Abianbase — pedalaman Badung, bukan gudang khusus Canggu. Bir, Ice, mixer, air, dan es. WhatsApp untuk konfirmasi jalan.",
      excerpt:
        "Toko 24/7 Canggu sering menaruh Ubud dan Tanah Lot sebagai zona tambahan. Abianbase di pedalaman Badung, itu sebabnya halaman ini untuk menginap di sana.",
      speakable: `Antar alkohol untuk Ubud dan Tanah Lot dari MadeBrings dimulai di Abianbase, pedalaman Badung, bukan di jalan pantai Canggu. Jika villa Anda ke arah Ubud, Mengwi, atau Tanah Lot, toko tetangga di sisi pulau itu adalah WhatsApp yang praktis. Kami bawa bir, Smirnoff Ice, Coca-Cola, air, dan es dengan harga tertera: Singaraja ${listedPrices.singaraja}, Bintang 330ml ${listedPrices.bintang}, Coke ${listedPrices.coke}, es 4kg ${listedPrices.ice}. Chat pin dulu. Kami konfirmasi apakah jalan itu bisa hari ini. Kami tidak mengiklankan liputan 24/7 setiap alamat sawah. Anda harus 21 tahun ke atas dan bayar tunai atau transfer setelah stok dikonfirmasi. Tamu Canggu dan Seminyak tetap bisa pesan; halaman ini ada karena pencarian Ubud dan Tanah Lot biasanya diabaikan. Pesan di halaman antar alkohol, lalu tulis nama villa di thread agar Made tidak menebak jalan masuk.`,
      inclusions: [
        "Konfirmasi WhatsApp untuk pin pedalaman Badung, sisi Ubud, dan sisi Tanah Lot",
        "Bir, Ice, mixer, air, es dari rak Abianbase",
        "Tidak jujur jika jalan tidak mungkin hari itu",
        "Tunai atau transfer setelah pendingin dicek",
      ],
      faqs: [
        {
          question: "Apakah antar alkohol ke Ubud?",
          answer:
            "Ubud ada di daftar area. Kirim pin villa. Abianbase di pedalaman sering lebih masuk akal daripada gudang khusus Canggu untuk banyak menginap Mengwi–Ubud, tapi setiap jalan tetap dikonfirmasi.",
        },
        {
          question: "Villa Tanah Lot?",
          answer:
            "Ya, Tanah Lot tercantum bersama Abianbase, Canggu, Seminyak, Kuta, dan Ubud. Chat pin. Macet matahari terbenam nyata; kami tidak mengarang timer di sekitarnya.",
        },
        {
          question: "Abianbase nyaman jika saya hanya di Ubud pusat?",
          answer:
            "Kadang ya, kadang jalannya jauh. Kami lebih baik menolak daripada berjanji. Itu alasan chat dulu.",
        },
      ],
      sections: [
        {
          paragraphs: [
            "Halaman kompetitor publik condong ke Canggu, Seminyak, dan “30 menit”. Ubud dan Tanah Lot muncul sebagai zona tambahan. MadeBrings di Abianbase, Mengwi — di antara villa pantai barat dan menginap pedalaman atau Tanah Lot.",
            "Kalau peta Anda seperti itu, WhatsApp pin sebelum menganggap skuter dari Canggu satu-satunya opsi.",
          ],
          link: { href: MONEY_PATH, label: "Antar alkohol dari Abianbase" },
        },
        {
          heading: "Yang biasa dipesan villa pedalaman",
          paragraphs: [
            "Bir, air, es, dan mixer. Grup hari pura sering mau lebih sedikit alkohol dan lebih banyak Aqua. Kami meracik itu tanpa memaksa spirit yang tidak kami stok.",
          ],
          list: [
            `Pak Bintang atau Singaraja`,
            `Dus Aqua 600ml — ${listedPrices.aqua}`,
            `Es 4kg — ${listedPrices.ice}`,
            `Kaleng Coke atau Sprite jika sudah ada botol di lemari`,
          ],
          link: { href: "/shop/ice-water", label: "Es, air, dan sewa esky" },
        },
        {
          heading: "Bandingkan cara toko bicara soal jangkauan",
          paragraphs: [
            "Kalau Anda menimbang merek Canggu 24/7 versus toko keluarga, baca halaman metodologi. Itu menjelaskan pertanyaan yang kami pakai — jam yang diklaim, katalog, checkout — tanpa mengarang harga mereka.",
          ],
          link: { href: COMPARE_PATH, label: "Cara kami membandingkan antar alkohol Bali" },
        },
      ],
    },
  },
  {
    slug: "villa-fridge-restock-bali",
    intent: "commercial",
    query: "villa fridge restock Bali",
    bookingHref: MONEY_PATH,
    title: "Villa fridge restock in Bali: beer, water, ice, mixers",
    description:
      "Restock a Bali villa fridge from MadeBrings in Abianbase: beer, Smirnoff Ice, Coke, Aqua, 4kg ice, and a 3-day ice-box rental. WhatsApp for Canggu, Seminyak, Kuta, Ubud, Tanah Lot.",
    excerpt:
      "The second-day villa problem is not whisky. It is meltwater, empty Aqua, and no mixers. This is the restock list from a family shop that actually sells ice bags.",
    keywords: [
      "villa fridge restock Bali",
      "ice delivery Bali villa",
      "esky rental Bali",
      "water delivery villa Bali",
      "villa drinks Canggu",
      "ice bag delivery Bali",
    ],
    datePublished: "2026-09-22",
    dateModified: "2026-09-22",
    readingMinutes: 7,
    heroImage: cdnImage("photo-1514361892635-6b07e31e75f9"),
    heroAlt: "Ice and cold drinks, the restock a Bali villa fridge actually needs",
    speakable: `A Bali villa fridge restock from MadeBrings is beer, water, ice, and mixers — not a spirits tasting menu. From the Abianbase shop we list a 4kg ice bag at ${listedPrices.ice}, a three-day ice-box rental at ${listedPrices.esky} with ice sold separately, an Aqua 600ml box at ${listedPrices.aqua}, Coca-Cola from ${listedPrices.coke}, Smirnoff Ice at ${listedPrices.smirnoff}, and Bintang 330ml at ${listedPrices.bintang}. WhatsApp the villa pin around Canggu, Seminyak, Kuta, Ubud, Tanah Lot, or Abianbase. We confirm the cooler, then cash or bank transfer. You must be 21 or older for alcohol; water and ice can sit on the same run. We will not invent a melt-proof delivery window. Order ice last in the chat so it is packed last. Start on the alcohol delivery page, add ice-water SKUs from the shop, and keep one thread for the whole fridge.`,
    inclusions: [
      "4kg ice bags packed last when possible",
      "Optional 3-day ice-box rental (ice extra)",
      "Aqua 600ml box, Coke, Sprite, tonic",
      "Beer or Smirnoff Ice if the group is 21+",
      "One WhatsApp thread for the whole restock",
    ],
    faqs: [
      {
        question: "Can I rent an ice box in Bali from MadeBrings?",
        answer: `Yes. The 3-day rental is ${listedPrices.esky}. Ice bags are extra at ${listedPrices.ice} each. Chat drop-off and collection with the villa address.`,
      },
      {
        question: "What is the minimum restock?",
        answer:
          "There is no trolley minimum on the site. Tell us what the fridge is missing. Very small runs still need a WhatsApp yes, because someone has to ride.",
      },
      {
        question: "Do you only restock alcohol?",
        answer:
          "No. Water, ice, Coke, and snacks are on the same shelf. Alcohol still requires 21+.",
      },
    ],
    sections: [
      {
        paragraphs: [
          "Step one: open the fridge and list holes — water, ice, beer, mixers. Step two: match those names on the MadeBrings shop. Step three: WhatsApp the list plus the villa pin. That is the restock. No app, no trolley.",
        ],
        link: { href: MONEY_PATH, label: "Send the restock as an alcohol delivery" },
      },
      {
        heading: "Step-by-step villa fridge",
        paragraphs: [
          "Keep ice as its own line so we pack it last. If you need the hard ice box, say the three-day rental in the same message as the bag count.",
        ],
        list: [
          "Water: Aqua 600ml box",
          "Cold: 4kg ice bags, optional 3-day ice box",
          "Beer or Smirnoff Ice for 21+ guests",
          "Coke, Sprite, tonic, limes if spirits are already in the cupboard",
          "Crisps if the table is empty",
        ],
        link: { href: "/shop/ice-water", label: "Ice, water, and esky SKUs" },
      },
      {
        heading: "After the restock",
        paragraphs: [
          "If you want a dirt-bike or village day while the fridge sits full, we still point guests to Selaras. For journalists or hosts who need a fact sheet, use the press kit.",
        ],
        link: { href: PRESS_PATH, label: "MadeBrings press and media kit" },
      },
    ],
    idCopy: {
      title: "Restok kulkas villa di Bali: bir, air, es, mixer",
      description:
        "Restok kulkas villa Bali dari MadeBrings di Abianbase: bir, Smirnoff Ice, Coke, Aqua, es 4kg, dan sewa kotak es 3 hari. WhatsApp untuk Canggu, Seminyak, Kuta, Ubud, Tanah Lot.",
      excerpt:
        "Masalah villa hari kedua bukan wiski. Itu air es mencair, Aqua habis, dan mixer kosong. Ini daftar restok dari toko keluarga yang memang menjual es batu.",
      speakable: `Restok kulkas villa Bali dari MadeBrings adalah bir, air, es, dan mixer — bukan menu tasting spirit. Dari toko Abianbase kami menampilkan es batu 4kg ${listedPrices.ice}, sewa kotak es tiga hari ${listedPrices.esky} dengan es dijual terpisah, dus Aqua 600ml ${listedPrices.aqua}, Coca-Cola dari ${listedPrices.coke}, Smirnoff Ice ${listedPrices.smirnoff}, dan Bintang 330ml ${listedPrices.bintang}. WhatsApp pin villa di sekitar Canggu, Seminyak, Kuta, Ubud, Tanah Lot, atau Abianbase. Kami konfirmasi pendingin, lalu tunai atau transfer. Anda harus 21 tahun ke atas untuk alkohol; air dan es bisa dalam jalan yang sama. Kami tidak mengarang jendela antar anti-leleh. Pesan es di baris terakhir chat agar dikemas terakhir. Mulai di halaman antar alkohol, tambah SKU es-air dari toko, dan satu thread untuk seluruh kulkas. Tulis jumlah kantong es agar pendingin villa tidak kosong sebelum malam.`,
      inclusions: [
        "Es batu 4kg dikemas terakhir jika memungkinkan",
        "Opsional sewa kotak es 3 hari (es extra)",
        "Dus Aqua 600ml, Coke, Sprite, tonik",
        "Bir atau Smirnoff Ice jika tamu 21+",
        "Satu thread WhatsApp untuk seluruh restok",
      ],
      faqs: [
        {
          question: "Bisa sewa kotak es di Bali dari MadeBrings?",
          answer: `Ya. Sewa 3 hari ${listedPrices.esky}. Es batu extra ${listedPrices.ice} per kantong. Chat antar dan jemput dengan alamat villa.`,
        },
        {
          question: "Apa restok minimum?",
          answer:
            "Tidak ada minimum keranjang di situs. Sebut yang kosong di kulkas. Jalan sangat kecil tetap perlu ya di WhatsApp, karena seseorang harus naik motor.",
        },
        {
          question: "Hanya restok alkohol?",
          answer:
            "Tidak. Air, es, Coke, dan cemilan ada di rak yang sama. Alkohol tetap wajib 21+.",
        },
      ],
      sections: [
        {
          paragraphs: [
            "Langkah satu: buka kulkas dan daftar yang bolong — air, es, bir, mixer. Langkah dua: cocokkan nama itu di toko MadeBrings. Langkah tiga: WhatsApp daftar plus pin villa. Itu restoknya. Tanpa aplikasi, tanpa keranjang.",
          ],
          link: { href: MONEY_PATH, label: "Kirim restok sebagai antar alkohol" },
        },
        {
          heading: "Kulkas villa langkah demi langkah",
          paragraphs: [
            "Tulis es sebagai baris sendiri agar kami kemas terakhir. Kalau butuh kotak es keras, sebut sewa tiga hari di pesan yang sama dengan jumlah kantong.",
          ],
          list: [
            "Air: dus Aqua 600ml",
            "Dingin: es batu 4kg, opsional kotak es 3 hari",
            "Bir atau Smirnoff Ice untuk tamu 21+",
            "Coke, Sprite, tonik, jeruk nipis jika spirit sudah di lemari",
            "Keripik jika meja kosong",
          ],
          link: { href: "/shop/ice-water", label: "SKU es, air, dan esky" },
        },
        {
          heading: "Setelah restok",
          paragraphs: [
            "Kalau Anda mau hari trail atau desa sementara kulkas penuh, kami tetap mengarahkan tamu ke Selaras. Untuk jurnalis atau host yang butuh lembar fakta, pakai kit pers.",
          ],
          link: { href: PRESS_PATH, label: "Kit pers dan media MadeBrings" },
        },
      ],
    },
  },
];
