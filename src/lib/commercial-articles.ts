import { cdnImage } from "@/lib/commerce/images";
import type { Locale } from "@/lib/i18n";
import type { BlogPost, BlogSection } from "@/lib/blog-types";
import {
  BOOKING_PATH,
  finishSpeakable,
  sharedFaqs,
  type FaqItem,
} from "@/lib/seo-pages";

export type CommercialCopy = {
  title: string;
  description: string;
  excerpt: string;
  speakable: string;
  inclusions: string[];
  faqs: FaqItem[];
  sections: BlogSection[];
};

export type CommercialArticle = {
  slug: string;
  query: string;
  keywords: string[];
  datePublished: string;
  dateModified: string;
  readingMinutes: number;
  heroImage: string;
  heroAlt: string;
  copy: Record<Locale, CommercialCopy>;
};

const DATE = "2026-10-13";

function extraFaqs(locale: Locale, items: FaqItem[]): FaqItem[] {
  const shared = sharedFaqs[locale].filter(
    (faq) =>
      !items.some(
        (item) => item.question.toLowerCase() === faq.question.toLowerCase(),
      ),
  );
  return [...items, ...shared.slice(0, 4)];
}

export const commercialArticles: CommercialArticle[] = [
  {
    slug: "alcohol-near-me-bali",
    query: "alcohol near me Bali",
    keywords: [
      "alcohol near me Bali",
      "alcohol near me Canggu",
      "liquor store near me Bali",
      "buy beer near me Canggu",
      "toko alkohol terdekat Bali",
      "alcohol shop Abianbase",
      "beer shop near me Seminyak",
    ],
    datePublished: DATE,
    dateModified: DATE,
    readingMinutes: 6,
    heroImage: cdnImage("photo-1544145945-f90425316c8c"),
    heroAlt: "Cold bottles on a shop shelf, the kind of cooler a near-me search is looking for",
    copy: {
      en: {
        title: "Alcohol near me in Bali: Abianbase shop, delivery if you are in a villa",
        description:
          "Typed alcohol near me in Canggu, Seminyak, Kuta, Ubud, or Tanah Lot? MadeBrings is a family shop in Abianbase. WhatsApp the pin for beer, Ice, Coke, and ice. 21+.",
        excerpt:
          "A near-me search in Bali rarely means a corner off-licence. This page maps the Abianbase shop and the WhatsApp delivery run to tourist villas.",
        speakable:
          "Alcohol near me in Bali usually means a villa guest who does not know Abianbase from Batu Bolong. MadeBrings is a family shop in Abianbase, Mengwi, Badung, owned by Made Hendrik. We are not a Canggu storefront. WhatsApp your pin for Canggu, Seminyak, Kuta, Ubud, or Tanah Lot and we confirm beer, Smirnoff Ice, Coca-Cola, water, and ice from the public shelf. Catalog examples: Bintang 330ml Rp35,000, a six-pack Rp200,000, Coca-Cola 250ml Rp9,000, 4kg ice Rp25,000. Pay cash or bank transfer. You must be 21. Walk in if you are already in Abianbase; otherwise book from the alcohol delivery Bali page.",
        inclusions: [
          "Walk-in at the Abianbase shop when you are already nearby",
          "WhatsApp delivery of beer, Ice, mixers, ice, and water to tourist villas",
          "Public catalog prices before you chat",
          "Cash or transfer after we confirm stock",
        ],
        faqs: extraFaqs("en", [
          {
            question: "Where is the nearest MadeBrings shop if I search alcohol near me?",
            answer:
              "The shop is in Abianbase, Mengwi, Badung. Open the Google Maps link on the contact page. If you are in Canggu, Seminyak, Kuta, Ubud, or Tanah Lot, delivery is usually faster than hunting a minimarket that may not sell beer.",
          },
          {
            question: "Can I pick up instead of delivery?",
            answer:
              "Yes, if you can reach Abianbase. Chat first so we confirm the cooler still has what you want. Delivery is for villa pins we can actually ride.",
          },
        ]),
        sections: [
          {
            paragraphs: [
              "Google “alcohol near me” in Canggu or Seminyak and you will see 24-hour delivery brands first. That is expected. This page is for the other intent: a tourist who wants a real shop, a price they can screenshot, and a person on WhatsApp.",
              "MadeBrings sits inland in Abianbase. If you are already on that side of Badung, come by. If you are in a villa and do not know the roads, send the pin instead of riding a scooter with a crate.",
            ],
            link: {
              href: BOOKING_PATH,
              label: "Book alcohol delivery in Bali",
            },
          },
          {
            heading: "What “near me” actually includes",
            paragraphs: [
              "Near the shop: Abianbase and Mengwi. Near a typical holiday pin: Canggu, Seminyak, Kuta, Ubud, Tanah Lot when the run works that day. We quote the delivery cost in chat. We do not invent a 20-minute island-wide ETA.",
            ],
            list: [
              "Beer and cider at neighborhood catalog prices",
              "Smirnoff Ice if you do not want to mix",
              "Coke, Sprite, tonic, ice, Aqua",
              "21+ under Indonesian law",
            ],
            link: {
              href: "/contact",
              label: "Map the Abianbase shop",
            },
          },
          {
            heading: "If the villa is in Canggu or further inland",
            paragraphs: [
              "Use the Canggu, Seminyak/Kuta, or Ubud/Tanah Lot notes for the street names, then come back to the booking page so the WhatsApp message and the shelf stay in one place.",
            ],
            link: {
              href: "/blog/alcohol-delivery-canggu",
              label: "Alcohol delivery Canggu",
            },
          },
        ],
      },
      id: {
        title: "Alkohol terdekat di Bali: toko Abianbase, antar jika Anda di villa",
        description:
          "Ketik alkohol terdekat di Canggu, Seminyak, Kuta, Ubud, atau Tanah Lot? MadeBrings toko keluarga di Abianbase. WhatsApp pin untuk bir, Ice, kola, dan es. 21+.",
        excerpt:
          "Pencarian “terdekat” di Bali jarang berarti toko di ujung jalan. Halaman ini memetakan toko Abianbase dan rute antar WhatsApp ke villa wisatawan.",
        speakable:
          "Alkohol terdekat di Bali biasanya berarti tamu villa yang belum bedakan Abianbase dan Batu Bolong. MadeBrings toko keluarga di Abianbase, Mengwi, Badung, milik Made Hendrik. Kami bukan etalase Canggu. WhatsApp pin untuk Canggu, Seminyak, Kuta, Ubud, atau Tanah Lot, lalu kami konfirmasi bir, Smirnoff Ice, Coca-Cola, air, dan es dari rak publik. Contoh katalog: Bintang 330ml Rp35.000, pak isi enam Rp200.000, Coca-Cola 250ml Rp9.000, es 4kg Rp25.000. Bayar tunai atau transfer. Harus 21 tahun. Mampir jika sudah di Abianbase; jika tidak, pesan lewat halaman jasa antar alkohol Bali.",
        inclusions: [
          "Datang langsung ke toko Abianbase jika Anda sudah dekat",
          "Antar WhatsApp bir, Ice, mixer, es, dan air ke villa wisatawan",
          "Harga katalog publik sebelum chat",
          "Tunai atau transfer setelah stok dikonfirmasi",
        ],
        faqs: extraFaqs("id", [
          {
            question: "Di mana toko MadeBrings jika saya cari alkohol terdekat?",
            answer:
              "Toko di Abianbase, Mengwi, Badung. Buka tautan Google Maps di halaman kontak. Jika Anda di Canggu, Seminyak, Kuta, Ubud, atau Tanah Lot, antar biasanya lebih cepat daripada mencari minimarket yang mungkin tidak jual bir.",
          },
          {
            question: "Bisa ambil sendiri, bukan diantar?",
            answer:
              "Bisa, jika Anda sampai Abianbase. Chat dulu agar pendingin masih ada stok. Antar untuk pin villa yang benar-benar bisa kami kendarai.",
          },
        ]),
        sections: [
          {
            paragraphs: [
              "Google “alkohol terdekat” di Canggu atau Seminyak biasanya menampilkan merek antar 24 jam dulu. Itu wajar. Halaman ini untuk niat lain: wisatawan yang mau toko sungguhan, harga yang bisa di-screenshot, dan orang di WhatsApp.",
              "MadeBrings di Abianbase darat. Kalau sudah di sisi Badung itu, mampir. Kalau di villa dan belum hafal jalan, kirim pin — jangan bawa skuter dengan peti.",
            ],
            link: {
              href: BOOKING_PATH,
              label: "Pesan antar alkohol di Bali",
            },
          },
          {
            heading: "Apa arti “terdekat” di sini",
            paragraphs: [
              "Dekat toko: Abianbase dan Mengwi. Dekat pin liburan tipikal: Canggu, Seminyak, Kuta, Ubud, Tanah Lot jika rutenya masuk hari itu. Ongkir dikutip di chat. Kami tidak mengada-ada ETA 20 menit se-pulau.",
            ],
            list: [
              "Bir dan sider dengan harga katalog tetangga",
              "Smirnoff Ice jika tidak mau meracik",
              "Kola, Sprite, tonik, es, Aqua",
              "21+ menurut hukum Indonesia",
            ],
            link: {
              href: "/contact",
              label: "Peta toko Abianbase",
            },
          },
          {
            heading: "Jika villa di Canggu atau lebih ke darat",
            paragraphs: [
              "Pakai catatan Canggu, Seminyak/Kuta, atau Ubud/Tanah Lot untuk nama jalan, lalu kembali ke halaman pesan agar chat WhatsApp dan rak ada di satu tempat.",
            ],
            link: {
              href: "/blog/alcohol-delivery-canggu",
              label: "Antar alkohol Canggu",
            },
          },
        ],
      },
    },
  },
  {
    slug: "alcohol-delivery-canggu",
    query: "alcohol delivery Canggu",
    keywords: [
      "alcohol delivery Canggu",
      "beer delivery Canggu",
      "Canggu liquor delivery",
      "villa drinks Canggu",
      "alcohol near me Canggu",
      "Batu Bolong beer delivery",
      "Pererenan alcohol delivery",
    ],
    datePublished: DATE,
    dateModified: DATE,
    readingMinutes: 7,
    heroImage: cdnImage("photo-1507525428034-b723cf961d3e"),
    heroAlt: "Canggu coast, the kind of villa stay that needs a drinks run",
    copy: {
      en: {
        title: "Alcohol delivery Canggu: villa beer, ice, and mixers from Abianbase",
        description:
          "Need alcohol delivery in Canggu and do not know the streets? WhatsApp MadeBrings in Abianbase for beer, Ice, Coke, and ice bags. Confirm stock, then we arrange the pin.",
        excerpt:
          "Canggu searches for alcohol near me usually hit 24-hour apps. This page is the family-shop version: neighborhood prices, WhatsApp confirmation, delivery when the pin works.",
        speakable:
          "Alcohol delivery in Canggu from MadeBrings starts with a WhatsApp to a family shop in Abianbase, not a 24-hour cart. Tell us your villa in Batu Bolong, Berawa, Pererenan, or nearby, and the beer, Smirnoff Ice, Coca-Cola, water, or ice you want. We confirm what is in the cooler today, then quote delivery for that pin. Catalog prices include Bintang 330ml at Rp35,000, a six-pack at Rp200,000, a Bintang box at Rp595,000, Coca-Cola 250ml at Rp9,000, and 4kg ice at Rp25,000. Payment is cash or bank transfer. You must be 21. We do not promise a 20-minute night run; if we cannot do the hour or the distance, we say so. Book from the alcohol delivery Bali page so the chat and the shelf stay in one place.",
        inclusions: [
          "Beer, cider, Smirnoff Ice, mixers, ice, Aqua, snacks from the public shelf",
          "WhatsApp pin check for Canggu, Berawa, Batu Bolong, Pererenan, and nearby villas",
          "Stock confirmed before anyone rides",
          "Cash or transfer after confirmation",
        ],
        faqs: extraFaqs("en", [
          {
            question: "Do you deliver alcohol to Canggu villas?",
            answer:
              "Yes, when the pin and the hour work. Abianbase is inland Badung, so Canggu is a normal run for us. Send the villa name or Google pin on WhatsApp and we will confirm.",
          },
          {
            question: "Is Canggu delivery free?",
            answer:
              "We do not advertise free delivery. Ask for the cost for your pin before you pay. Neighborhood product prices are on the shop.",
          },
        ]),
        sections: [
          {
            paragraphs: [
              "Most “alcohol delivery Canggu” pages sell speed. MadeBrings sells a cooler you can actually check. The shop is in Abianbase. Canggu is next door on a map and a real ride in traffic. Chat first.",
              "If you are a tourist who does not know Echo Beach from Abianbase, you do not need a second minimarket loop. Open the shelf, list six Bintangs and an ice bag, and send the villa pin.",
            ],
            link: {
              href: BOOKING_PATH,
              label: "Book on the alcohol delivery Bali page",
            },
          },
          {
            heading: "What Canggu groups actually run out of",
            paragraphs: [
              "The first night is beer, ice, and water. The second night is mixers. We price Bintang 330ml at Rp35,000, a six-pack at Rp200,000, 4kg ice at Rp25,000, and an Aqua 600ml box at Rp65,000. Those are catalog numbers, not a Canggu beach-club list.",
            ],
            list: [
              "Bintang, Singaraja, San Miguel, Radler",
              "Smirnoff Ice if you do not want to mix",
              "Coke, Sprite, tonic, limes",
              "Ice bags and the 3-day ice-box rental if the villa fridge is small",
            ],
            link: {
              href: "/shop/beer-cider",
              label: "See beer and cider prices",
            },
          },
          {
            heading: "How to order alcohol delivery in Canggu",
            paragraphs: [
              "1. Browse the shop. 2. WhatsApp with the pin. 3. We confirm stock and the delivery cost. 4. Pay cash or transfer. 5. We bring it if we said yes.",
              "That is slower than a 24/7 banner and more honest. If you need Seminyak or Kuta instead, use those notes, then come back here only if the villa is actually in Canggu.",
            ],
            link: {
              href: "/blog/alcohol-delivery-seminyak-kuta",
              label: "Seminyak and Kuta delivery notes",
            },
          },
        ],
      },
      id: {
        title: "Antar alkohol Canggu: bir villa, es, dan mixer dari Abianbase",
        description:
          "Butuh antar alkohol di Canggu dan belum hafal jalannya? WhatsApp MadeBrings di Abianbase untuk bir, Ice, kola, dan es. Konfirmasi stok, lalu kami atur pin.",
        excerpt:
          "Pencarian alkohol di Canggu biasanya kena aplikasi 24 jam. Halaman ini versi toko keluarga: harga tetangga, konfirmasi WhatsApp, antar jika pinnya masuk.",
        speakable:
          "Antar alkohol di Canggu dari MadeBrings dimulai dengan WhatsApp ke toko keluarga di Abianbase, bukan keranjang 24 jam. Sebutkan villa di Batu Bolong, Berawa, Pererenan, atau sekitarnya, plus bir, Smirnoff Ice, Coca-Cola, air, atau es yang Anda mau. Kami konfirmasi isi pendingin hari ini, lalu sebut ongkir untuk pin itu. Harga katalog: Bintang 330ml Rp35.000, pak isi enam Rp200.000, dus Bintang Rp595.000, Coca-Cola 250ml Rp9.000, es 4kg Rp25.000. Bayar tunai atau transfer. Harus 21 tahun. Kami tidak menjanjikan antar malam 20 menit; jika jam atau jarak tidak bisa, kami bilang. Pesan lewat halaman jasa antar alkohol Bali agar chat dan rak ada di satu tempat.",
        inclusions: [
          "Bir, sider, Smirnoff Ice, mixer, es, Aqua, cemilan dari rak publik",
          "Cek pin WhatsApp untuk Canggu, Berawa, Batu Bolong, Pererenan, dan villa sekitar",
          "Stok dikonfirmasi sebelum berangkat",
          "Tunai atau transfer setelah konfirmasi",
        ],
        faqs: extraFaqs("id", [
          {
            question: "Apakah antar alkohol ke villa Canggu?",
            answer:
              "Ya, jika pin dan jamnya masuk. Abianbase di Badung darat, jadi Canggu rute biasa. Kirim nama villa atau pin Google di WhatsApp, kami konfirmasi.",
          },
          {
            question: "Apakah antar Canggu gratis?",
            answer:
              "Kami tidak mengiklankan antar gratis. Tanya ongkir untuk pin Anda sebelum bayar. Harga produk tetangga ada di toko.",
          },
        ]),
        sections: [
          {
            paragraphs: [
              "Kebanyakan halaman “antar alkohol Canggu” menjual kecepatan. MadeBrings menjual pendingin yang bisa dicek. Toko di Abianbase. Canggu dekat di peta dan perjalanan nyata di macet. Chat dulu.",
              "Kalau wisatawan belum bedakan Echo Beach dan Abianbase, tidak perlu keliling minimarket. Buka rak, catat enam Bintang dan es, kirim pin villa.",
            ],
            link: {
              href: BOOKING_PATH,
              label: "Pesan di halaman jasa antar alkohol Bali",
            },
          },
          {
            heading: "Yang habis duluan di villa Canggu",
            paragraphs: [
              "Malam pertama: bir, es, air. Malam kedua: mixer. Bintang 330ml Rp35.000, pak isi enam Rp200.000, es 4kg Rp25.000, dus Aqua 600ml Rp65.000. Itu angka katalog, bukan daftar beach club Canggu.",
            ],
            list: [
              "Bintang, Singaraja, San Miguel, Radler",
              "Smirnoff Ice jika tidak mau meracik",
              "Kola, Sprite, tonik, jeruk nipis",
              "Es dan sewa esky 3 hari jika kulkas villa kecil",
            ],
            link: {
              href: "/shop/beer-cider",
              label: "Lihat harga bir dan sider",
            },
          },
          {
            heading: "Cara pesan antar alkohol di Canggu",
            paragraphs: [
              "1. Lihat toko. 2. WhatsApp dengan pin. 3. Kami konfirmasi stok dan ongkir. 4. Bayar tunai atau transfer. 5. Kami antar jika sudah bilang ya.",
              "Itu lebih lambat dari spanduk 24/7 dan lebih jujur. Jika villa di Seminyak atau Kuta, baca catatan itu, lalu kembali ke sini hanya jika villa benar di Canggu.",
            ],
            link: {
              href: "/blog/alcohol-delivery-seminyak-kuta",
              label: "Catatan antar Seminyak dan Kuta",
            },
          },
        ],
      },
    },
  },
  {
    slug: "alcohol-delivery-seminyak-kuta",
    query: "alcohol delivery Seminyak / Kuta",
    keywords: [
      "alcohol delivery Seminyak",
      "alcohol delivery Kuta",
      "beer delivery Seminyak",
      "Kuta liquor delivery",
      "Legian alcohol delivery",
      "airport villa drinks Bali",
    ],
    datePublished: DATE,
    dateModified: DATE,
    readingMinutes: 7,
    heroImage: cdnImage("photo-1559628233-100c798642d4"),
    heroAlt: "Sunset street in south Bali, typical of Seminyak and Kuta villa stays",
    copy: {
      en: {
        title: "Alcohol delivery Seminyak and Kuta for tourists who do not know the area",
        description:
          "Landed near Kuta or staying in Seminyak? WhatsApp MadeBrings in Abianbase to confirm beer, mixers, ice, and water, then arrange delivery to your pin. 21+.",
        excerpt:
          "Seminyak and Kuta are easy to fly into and hard to shop if you do not know which Circle K still has cold six-packs. Chat the Abianbase shop first.",
        speakable:
          "Alcohol delivery to Seminyak or Kuta from MadeBrings is a WhatsApp order to a family shop in Abianbase. Share your hotel or villa pin — Petitenget, Legian, or a Kuta side street — plus the beers, Coca-Cola, ice, and water you need. We confirm stock, then the delivery cost for that south-Bali pin. Example prices: Singaraja 330ml Rp22,000, Bintang 330ml Rp35,000, Smirnoff Ice 275ml Rp35,000, Sprite 250ml Rp9,000, 4kg ice Rp25,000. Pay cash or bank transfer after we confirm. You must be 21. We are not a 24-hour Kuta bottle shop; if the hour or the traffic does not work, we tell you. Start on the alcohol delivery Bali booking page so Canggu, Seminyak, and Kuta queries all point at one till.",
        inclusions: [
          "Public-shelf beer, RTD, mixers, ice, water, snacks",
          "Pin check for Seminyak, Petitenget, Legian, Kuta, and nearby stays",
          "Honest no if we cannot make the run",
          "Cash or transfer",
        ],
        faqs: extraFaqs("en", [
          {
            question: "Can you deliver to a Kuta hotel after I land?",
            answer:
              "Chat with the flight time and the hotel name. If we can do the pin that day, we confirm stock and cost. We do not guarantee airport-hour drops.",
          },
          {
            question: "Do you cover Seminyak and Legian?",
            answer:
              "Yes as a normal Badung run when the pin works. Message the shop from the alcohol delivery Bali page.",
          },
        ]),
        sections: [
          {
            paragraphs: [
              "Kuta is where many first nights in Bali happen. Seminyak is where the villa fridge looks empty at 5pm. Both searches — alcohol delivery Seminyak, alcohol delivery Kuta — should land on a page that says how to pay and what a Bintang costs.",
              "MadeBrings is not on Jalan Legian. We are in Abianbase. That is still one WhatsApp if the pin is in south Badung.",
            ],
            link: {
              href: BOOKING_PATH,
              label: "Go to the booking page",
            },
          },
          {
            heading: "Prices you can screenshot",
            paragraphs: [
              "Singaraja 330ml Rp22,000, Bintang 330ml Rp35,000, Smirnoff Ice 275ml Rp35,000, Coca-Cola 250ml Rp9,000, ice 4kg Rp25,000, Aqua box Rp65,000. Delivery is extra and quoted for your pin — not hidden in a “free over Rp200k” banner we cannot honor.",
            ],
            link: {
              href: "/shop",
              label: "Open the full shop",
            },
          },
          {
            heading: "If you are actually in Canggu or Ubud",
            paragraphs: [
              "Use the Canggu guide or the Ubud and Tanah Lot guide so the internal links stay honest. One money page still books all of them.",
            ],
            link: {
              href: "/blog/alcohol-delivery-canggu",
              label: "Canggu alcohol delivery",
            },
          },
        ],
      },
      id: {
        title: "Antar alkohol Seminyak dan Kuta untuk wisatawan yang belum kenal area",
        description:
          "Baru mendarat dekat Kuta atau menginap di Seminyak? WhatsApp MadeBrings di Abianbase untuk konfirmasi bir, mixer, es, dan air, lalu atur antar ke pin Anda. 21+.",
        excerpt:
          "Seminyak dan Kuta mudah untuk mendarat dan sulit untuk belanja jika Anda tidak tahu Circle K mana yang masih punya pak dingin. Chat toko Abianbase dulu.",
        speakable:
          "Antar alkohol ke Seminyak atau Kuta dari MadeBrings adalah pesanan WhatsApp ke toko keluarga di Abianbase. Kirim pin hotel atau villa — Petitenget, Legian, atau gang Kuta — plus bir, Coca-Cola, es, dan air yang dibutuhkan. Kami konfirmasi stok, lalu ongkir untuk pin Bali selatan itu. Contoh harga: Singaraja 330ml Rp22.000, Bintang 330ml Rp35.000, Smirnoff Ice 275ml Rp35.000, Sprite 250ml Rp9.000, es 4kg Rp25.000. Bayar tunai atau transfer setelah konfirmasi. Harus 21 tahun. Kami bukan toko botol Kuta 24 jam; jika jam atau macet tidak memungkinkan, kami bilang. Mulai di halaman pesan jasa antar alkohol Bali agar Canggu, Seminyak, dan Kuta mengarah ke satu kasir.",
        inclusions: [
          "Bir, RTD, mixer, es, air, cemilan rak publik",
          "Cek pin untuk Seminyak, Petitenget, Legian, Kuta, dan penginapan sekitar",
          "Kami bilang tidak jika rute tidak bisa",
          "Tunai atau transfer",
        ],
        faqs: extraFaqs("id", [
          {
            question: "Bisa antar ke hotel Kuta setelah mendarat?",
            answer:
              "Chat dengan jam pesawat dan nama hotel. Jika pin hari itu bisa, kami konfirmasi stok dan ongkir. Kami tidak menjamin drop jam bandara.",
          },
          {
            question: "Melayani Seminyak dan Legian?",
            answer:
              "Ya sebagai rute Badung biasa jika pinnya masuk. Hubungi toko dari halaman jasa antar alkohol Bali.",
          },
        ]),
        sections: [
          {
            paragraphs: [
              "Kuta sering jadi malam pertama di Bali. Seminyak sering jadi kulkas villa yang kosong jam lima sore. Kedua pencarian itu harus mendarat di halaman yang menyebut cara bayar dan harga Bintang.",
              "MadeBrings tidak di Jalan Legian. Kami di Abianbase. Tetap satu WhatsApp jika pin di Badung selatan.",
            ],
            link: {
              href: BOOKING_PATH,
              label: "Ke halaman pesan",
            },
          },
          {
            heading: "Harga yang bisa di-screenshot",
            paragraphs: [
              "Singaraja 330ml Rp22.000, Bintang 330ml Rp35.000, Smirnoff Ice 275ml Rp35.000, Coca-Cola 250ml Rp9.000, es 4kg Rp25.000, dus Aqua Rp65.000. Ongkir tambahan, dikutip untuk pin Anda — bukan disembunyikan di spanduk “gratis di atas Rp200rb” yang tidak bisa kami penuhi.",
            ],
            link: {
              href: "/shop",
              label: "Buka toko lengkap",
            },
          },
          {
            heading: "Jika Anda sebenarnya di Canggu atau Ubud",
            paragraphs: [
              "Pakai panduan Canggu atau panduan Ubud dan Tanah Lot agar tautan internal jujur. Satu halaman uang tetap untuk memesan semuanya.",
            ],
            link: {
              href: "/blog/alcohol-delivery-canggu",
              label: "Antar alkohol Canggu",
            },
          },
        ],
      },
    },
  },
  {
    slug: "beer-delivery-bali",
    query: "beer delivery Bali",
    keywords: [
      "beer delivery Bali",
      "Bintang delivery Bali",
      "Singaraja beer delivery",
      "beer six pack Bali",
      "cheap beer delivery Bali",
      "antar bir Bali",
    ],
    datePublished: DATE,
    dateModified: DATE,
    readingMinutes: 6,
    heroImage: cdnImage("photo-1436076863939-06870fe779c2"),
    heroAlt: "Cold beer bottles, the core of a Bali villa drinks run",
    copy: {
      en: {
        title: "Beer delivery Bali: Bintang, Singaraja, and six-packs on WhatsApp",
        description:
          "Order beer delivery in Bali from MadeBrings in Abianbase. Bintang 330ml Rp35,000, six-pack Rp200,000, Singaraja Rp22,000. Chat to confirm cold stock and your pin.",
        excerpt:
          "If the query is beer delivery Bali, not a full bar, this is the page: real catalog prices, ice on the side, WhatsApp till.",
        speakable:
          "Beer delivery in Bali from MadeBrings means WhatsApping a family shop in Abianbase for Singaraja, Bintang, Bintang Crystal, Bintang Radler, and San Miguel Light. Public catalog prices are Singaraja 330ml Rp22,000, Bintang 330ml Rp35,000, a six-pack Rp200,000, a Bintang box Rp595,000, a San Miguel box Rp695,000, and a Singaraja box Rp440,000. Add 4kg ice at Rp25,000 if the villa fridge is warm. We deliver around Canggu, Seminyak, Kuta, Ubud, and Tanah Lot when the pin works. Pay cash or bank transfer after we confirm. You must be 21. We do not run a 24-hour beer app; we confirm the cooler first. Use the alcohol delivery Bali page to send the order.",
        inclusions: [
          "Listed beer and cider bottles, six-packs, and boxes",
          "Optional ice, water, mixers, snacks in the same chat",
          "Stock check before delivery",
          "Cash or transfer",
        ],
        faqs: extraFaqs("en", [
          {
            question: "How much is a Bintang delivered in Bali?",
            answer:
              "The bottle is Rp35,000 on our catalog. A six-pack is Rp200,000. A box is Rp595,000. Delivery is quoted on WhatsApp for your pin and is not included in those shelf prices.",
          },
          {
            question: "Do you deliver Singaraja, the local Bali pilsner?",
            answer:
              "Yes when it is in the cooler. Singaraja 330ml is Rp22,000. A box is Rp440,000. Chat first.",
          },
        ]),
        sections: [
          {
            paragraphs: [
              "Beer is what this shop actually moves. Liquor exists if we have a bottle that day; the website shelf is beer, cider, Ice, mixers, ice, water, and snacks. If you typed beer delivery Bali, start here, then book on the money page.",
            ],
            link: {
              href: BOOKING_PATH,
              label: "Book beer delivery on the money page",
            },
          },
          {
            heading: "The cooler, with prices",
            paragraphs: [
              "Singaraja is the neighborhood pour. Bintang is the tourist pour. Radler and Crystal sit next to them. San Miguel Light is the lighter six-pack people ask for after a hot rice-field day.",
            ],
            list: [
              "Singaraja 330ml — Rp22,000",
              "Bintang / Crystal / Radler 330ml — Rp35,000",
              "Any listed 330ml six-pack — Rp200,000",
              "Bintang or Radler box — Rp595,000",
              "San Miguel Light box 24×330ml — Rp695,000",
            ],
            link: {
              href: "/shop/beer-cider",
              label: "Beer and cider shelf",
            },
          },
          {
            heading: "Add ice or it arrives warm",
            paragraphs: [
              "A 4kg ice bag is Rp25,000. The 3-day ice-box rental is Rp150,000, ice sold separately. If you are stocking a villa, read the fridge steps next.",
            ],
            link: {
              href: "/blog/villa-fridge-drinks-bali",
              label: "How to stock a Bali villa fridge",
            },
          },
        ],
      },
      id: {
        title: "Antar bir Bali: Bintang, Singaraja, dan pak isi enam lewat WhatsApp",
        description:
          "Pesan antar bir di Bali dari MadeBrings di Abianbase. Bintang 330ml Rp35.000, pak isi enam Rp200.000, Singaraja Rp22.000. Chat untuk konfirmasi stok dingin dan pin Anda.",
        excerpt:
          "Jika kuerinya antar bir Bali, bukan bar lengkap, ini halamannya: harga katalog nyata, es di samping, kasir WhatsApp.",
        speakable:
          "Antar bir di Bali dari MadeBrings berarti WhatsApp ke toko keluarga di Abianbase untuk Singaraja, Bintang, Bintang Crystal, Bintang Radler, dan San Miguel Light. Harga katalog publik: Singaraja 330ml Rp22.000, Bintang 330ml Rp35.000, pak isi enam Rp200.000, dus Bintang Rp595.000, dus San Miguel Rp695.000, dus Singaraja Rp440.000. Tambah es 4kg Rp25.000 jika kulkas villa hangat. Kami antar sekitar Canggu, Seminyak, Kuta, Ubud, dan Tanah Lot jika pinnya masuk. Bayar tunai atau transfer setelah konfirmasi. Harus 21 tahun. Kami bukan aplikasi bir 24 jam; kami cek pendingin dulu. Pakai halaman jasa antar alkohol Bali untuk mengirim pesanan.",
        inclusions: [
          "Botol bir dan sider, pak isi enam, dan dus yang terdaftar",
          "Es, air, mixer, cemilan opsional di chat yang sama",
          "Cek stok sebelum antar",
          "Tunai atau transfer",
        ],
        faqs: extraFaqs("id", [
          {
            question: "Berapa harga Bintang diantar di Bali?",
            answer:
              "Botol Rp35.000 di katalog. Pak isi enam Rp200.000. Dus Rp595.000. Ongkir dikutip di WhatsApp untuk pin Anda dan tidak termasuk harga rak itu.",
          },
          {
            question: "Antar Singaraja, pilsner lokal Bali?",
            answer:
              "Ya jika ada di pendingin. Singaraja 330ml Rp22.000. Dus Rp440.000. Chat dulu.",
          },
        ]),
        sections: [
          {
            paragraphs: [
              "Bir yang benar-benar bergerak di toko ini. Minuman keras ada jika botolnya ada hari itu; rak situs adalah bir, sider, Ice, mixer, es, air, dan cemilan. Jika Anda mengetik antar bir Bali, mulai di sini, lalu pesan di halaman utama.",
            ],
            link: {
              href: BOOKING_PATH,
              label: "Pesan antar bir di halaman utama",
            },
          },
          {
            heading: "Pendingin, dengan harga",
            paragraphs: [
              "Singaraja minuman tetangga. Bintang minuman wisatawan. Radler dan Crystal di sampingnya. San Miguel Light pak yang sering diminta setelah hari panas di sawah.",
            ],
            list: [
              "Singaraja 330ml — Rp22.000",
              "Bintang / Crystal / Radler 330ml — Rp35.000",
              "Pak isi enam 330ml yang terdaftar — Rp200.000",
              "Dus Bintang atau Radler — Rp595.000",
              "Dus San Miguel Light 24×330ml — Rp695.000",
            ],
            link: {
              href: "/shop/beer-cider",
              label: "Rak bir dan sider",
            },
          },
          {
            heading: "Tambah es atau sampai dalam keadaan hangat",
            paragraphs: [
              "Es 4kg Rp25.000. Sewa esky 3 hari Rp150.000, es dijual terpisah. Jika mengisi villa, baca langkah kulkas berikutnya.",
            ],
            link: {
              href: "/blog/villa-fridge-drinks-bali",
              label: "Cara isi kulkas villa Bali",
            },
          },
        ],
      },
    },
  },
  {
    slug: "alcohol-delivery-ubud-tanah-lot",
    query: "alcohol delivery Ubud / Tanah Lot",
    keywords: [
      "alcohol delivery Ubud",
      "alcohol delivery Tanah Lot",
      "beer delivery Ubud",
      "Mengwi alcohol delivery",
      "Tanah Lot villa drinks",
      "Abianbase liquor delivery",
    ],
    datePublished: DATE,
    dateModified: DATE,
    readingMinutes: 6,
    heroImage: cdnImage("photo-1537996194471-e657df975ab4"),
    heroAlt: "Temple and palms inland from the south Bali beach strip",
    copy: {
      en: {
        title: "Alcohol delivery Ubud and Tanah Lot from Abianbase",
        description:
          "Inland stays in Ubud, Mengwi, and Tanah Lot are closer to our Abianbase shop than to Canggu 24/7 apps. WhatsApp for beer, ice, and water. Confirm the pin first.",
        excerpt:
          "24-hour Canggu shops underserve inland pins. This page is for Ubud, Tanah Lot, and Abianbase neighbors who still want a cold six-pack.",
        speakable:
          "Alcohol delivery to Ubud or Tanah Lot from MadeBrings is a chat to Abianbase, Mengwi, Badung. Inland pins are often an easier ride for this family shop than for a Canggu warehouse. Send the villa or guesthouse pin, then the beer, ice, Coca-Cola, and Aqua you want. Catalog prices include Bintang 330ml Rp35,000, six-packs Rp200,000, 4kg ice Rp25,000, Aqua 24×600ml Rp65,000. We confirm stock and the delivery cost. Cash or bank transfer. Age 21 and over. We do not claim a 30-minute Ubud SLA; rice-field roads and ceremony days are real. Book on the alcohol delivery Bali page so the Ubud query still reaches the same WhatsApp till as Canggu.",
        inclusions: [
          "Shelf beer, RTD, mixers, ice, water, snacks",
          "Pin check for Ubud, Gianyar-edge stays, Tanah Lot / Beraban, Mengwi, Abianbase",
          "Honest timing — no fake 30-minute badge",
          "Cash or transfer",
        ],
        faqs: extraFaqs("en", [
          {
            question: "Do 24/7 Canggu services skip Ubud?",
            answer:
              "Some advertise island-wide and still price Ubud as a surcharge. We are already inland. Chat the pin; we will say if the run works.",
          },
          {
            question: "Can neighbors in Abianbase just collect?",
            answer:
              "Yes. If you are close, come by after you chat so Made knows you are coming. Delivery is for people who do not know the shop door.",
          },
        ]),
        sections: [
          {
            paragraphs: [
              "Ubud searches still look like “alcohol near me” on a phone that has never opened Google Maps for Mengwi. Tanah Lot villas have the same problem after sunset: the temple car park is not a bottle shop.",
              "Our advantage is geography, not a night fleet. Abianbase sits between those pins and the coast.",
            ],
            link: {
              href: BOOKING_PATH,
              label: "Book inland delivery",
            },
          },
          {
            heading: "What to order for a quieter villa",
            paragraphs: [
              "A Singaraja or Bintang six-pack, two ice bags, an Aqua box, and crisps covers the first night without turning the rice field into a club. Prices are on the beer and ice shelves.",
            ],
            link: {
              href: "/shop/ice-water",
              label: "Ice and water shelf",
            },
          },
          {
            heading: "Compare the model, not the slogan",
            paragraphs: [
              "If you are weighing a 24/7 Canggu app against a family shop, read the comparison methodology. It cites public competitor pages and only uses MadeBrings facts we can stand behind.",
            ],
            link: {
              href: "/compare/bali-alcohol-delivery",
              label: "Bali alcohol delivery comparison",
            },
          },
        ],
      },
      id: {
        title: "Antar alkohol Ubud dan Tanah Lot dari Abianbase",
        description:
          "Menginap di Ubud, Mengwi, atau Tanah Lot lebih dekat ke toko Abianbase kami daripada ke aplikasi 24/7 Canggu. WhatsApp untuk bir, es, dan air. Konfirmasi pin dulu.",
        excerpt:
          "Toko 24 jam Canggu kurang menjangkau pin darat. Halaman ini untuk Ubud, Tanah Lot, dan tetangga Abianbase yang tetap mau pak dingin.",
        speakable:
          "Antar alkohol ke Ubud atau Tanah Lot dari MadeBrings adalah chat ke Abianbase, Mengwi, Badung. Pin darat sering lebih gampang untuk toko keluarga ini daripada gudang Canggu. Kirim pin villa atau losmen, lalu bir, es, Coca-Cola, dan Aqua yang diinginkan. Harga katalog: Bintang 330ml Rp35.000, pak isi enam Rp200.000, es 4kg Rp25.000, Aqua 24×600ml Rp65.000. Kami konfirmasi stok dan ongkir. Tunai atau transfer. Usia 21 tahun ke atas. Kami tidak mengklaim SLA Ubud 30 menit; jalan sawah dan hari upacara itu nyata. Pesan di halaman jasa antar alkohol Bali agar kueri Ubud tetap sampai ke kasir WhatsApp yang sama dengan Canggu.",
        inclusions: [
          "Bir, RTD, mixer, es, air, cemilan rak",
          "Cek pin untuk Ubud, tepi Gianyar, Tanah Lot / Beraban, Mengwi, Abianbase",
          "Waktu jujur — tanpa lencana 30 menit palsu",
          "Tunai atau transfer",
        ],
        faqs: extraFaqs("id", [
          {
            question: "Apakah jasa 24/7 Canggu melewatkan Ubud?",
            answer:
              "Sebagian mengiklankan se-pulau lalu memasang Ubud sebagai biaya tambahan. Kami sudah di darat. Chat pinnya; kami bilang jika rute masuk.",
          },
          {
            question: "Tetangga Abianbase bisa ambil sendiri?",
            answer:
              "Ya. Jika dekat, mampir setelah chat agar Made tahu Anda datang. Antar untuk orang yang tidak tahu pintu tokonya.",
          },
        ]),
        sections: [
          {
            paragraphs: [
              "Pencarian Ubud masih seperti “alkohol terdekat” di ponsel yang belum pernah buka peta Mengwi. Villa Tanah Lot punya masalah sama setelah matahari terbenam: parkir pura bukan toko botol.",
              "Keunggulan kami geografi, bukan armada malam. Abianbase di antara pin itu dan pantai.",
            ],
            link: {
              href: BOOKING_PATH,
              label: "Pesan antar darat",
            },
          },
          {
            heading: "Yang dipesan untuk villa yang lebih tenang",
            paragraphs: [
              "Pak Singaraja atau Bintang, dua es, dus Aqua, dan keripik cukup untuk malam pertama tanpa mengubah sawah jadi klub. Harga ada di rak bir dan es.",
            ],
            link: {
              href: "/shop/ice-water",
              label: "Rak es dan air",
            },
          },
          {
            heading: "Bandingkan modelnya, bukan slogannya",
            paragraphs: [
              "Jika menimbang aplikasi 24/7 Canggu versus toko keluarga, baca metodologi perbandingan. Itu mengutip halaman publik kompetitor dan hanya memakai fakta MadeBrings yang bisa kami tanggung.",
            ],
            link: {
              href: "/compare/bali-alcohol-delivery",
              label: "Perbandingan jasa antar alkohol Bali",
            },
          },
        ],
      },
    },
  },
  {
    slug: "villa-fridge-drinks-bali",
    query: "villa drinks / ice delivery Bali",
    keywords: [
      "villa drinks delivery Bali",
      "ice delivery villa Bali",
      "stock villa fridge Bali",
      "Aqua delivery Bali",
      "esky rental Bali",
      "mixer delivery Canggu",
    ],
    datePublished: DATE,
    dateModified: DATE,
    readingMinutes: 8,
    heroImage: cdnImage("photo-1504674900247-0877df9cc836"),
    heroAlt: "A villa table that still needs ice, water, and something cold",
    copy: {
      en: {
        title: "How to stock a Bali villa fridge: beer, ice, water, mixers",
        description:
          "Step-by-step villa restock from MadeBrings: ice bags, Aqua box, Bintang or Singaraja, Coke, and a 3-day esky. WhatsApp the Abianbase shop with your pin.",
        excerpt:
          "A villa fridge fails in a fixed order: water, ice, beer, mixers. This is the product sequence, with catalog prices, then the booking chat.",
        speakable:
          "To stock a Bali villa fridge with MadeBrings, order in this order: drinking water, ice, beer or Smirnoff Ice, then mixers and snacks. From the Abianbase catalog that means an Aqua 600ml box at Rp65,000, 4kg ice bags at Rp25,000 each, optional 3-day ice-box rental at Rp150,000, Bintang 330ml at Rp35,000 or a six-pack at Rp200,000, Coca-Cola 250ml at Rp9,000, and crisps at Rp22,000. WhatsApp the pin for Canggu, Seminyak, Kuta, Ubud, or Tanah Lot. We confirm stock and delivery cost. Cash or transfer. Age 21 for alcohol. We do not leave orders on doorsteps without a confirmed adult. Follow the alcohol delivery Bali page so the fridge list and the till stay together.",
        inclusions: [
          "Step order: water → ice → beer/RTD → mixers → snacks",
          "Catalog prices for each step",
          "Ice-box rental option (ice sold separately)",
          "WhatsApp pin + 21+ check",
        ],
        faqs: extraFaqs("en", [
          {
            question: "How much ice does a villa weekend need?",
            answer:
              "Plan at least one 4kg bag (Rp25,000) per evening if you are filling a sink or a small esky. Rent the ice box for Rp150,000 for three days if the fridge is weak. Ice is packed last.",
          },
          {
            question: "Can I order only water and ice, no alcohol?",
            answer:
              "Yes. Aqua boxes and ice bags are on the public shelf. Age 21 applies when the order includes alcohol.",
          },
        ]),
        sections: [
          {
            paragraphs: [
              "This is a product sequence, not a travel essay. Follow the steps, screenshot the prices, then book.",
            ],
            link: {
              href: BOOKING_PATH,
              label: "Send the villa list on the booking page",
            },
          },
          {
            heading: "Step 1 — Water",
            paragraphs: [
              "Aqua mineral water 600ml, box of 24, Rp65,000. Put it in the chat before beer so the table is not only alcohol.",
            ],
            link: {
              href: "/shop/ice-water",
              label: "Ice and water",
            },
          },
          {
            heading: "Step 2 — Ice, and the esky if the fridge is weak",
            paragraphs: [
              "4kg ice bag Rp25,000. Rent ice box 3 days Rp150,000, ice sold separately. Tell us drop-off and collection when you rent.",
            ],
          },
          {
            heading: "Step 3 — Beer or ready-to-drink",
            paragraphs: [
              "Six-pack Rp200,000 covers a small table. A Bintang box Rp595,000 covers a weekend. Smirnoff Ice 275ml is Rp35,000 if nobody wants to mix.",
            ],
            link: {
              href: "/blog/beer-delivery-bali",
              label: "Beer delivery prices",
            },
          },
          {
            heading: "Step 4 — Mixers and limes",
            paragraphs: [
              "Coca-Cola or Sprite 250ml Rp9,000, tonic or ginger ale Rp12,000, Red Bull Rp25,000, three limes Rp12,000. Mixer boxes are Rp200,000 if you are hosting.",
            ],
            link: {
              href: "/shop/mixers",
              label: "Mixer shelf",
            },
          },
          {
            heading: "Step 5 — Snacks, then WhatsApp the pin",
            paragraphs: [
              "Large crisps Rp22,000, Pringles 110g Rp38,000. Then send the villa name. Payment cash or transfer after we confirm. 21+ if alcohol is in the bag.",
            ],
            link: {
              href: BOOKING_PATH,
              label: "WhatsApp the completed list",
            },
          },
        ],
      },
      id: {
        title: "Cara isi kulkas villa Bali: bir, es, air, mixer",
        description:
          "Restok villa langkah demi langkah dari MadeBrings: es, dus Aqua, Bintang atau Singaraja, kola, dan esky 3 hari. WhatsApp toko Abianbase dengan pin Anda.",
        excerpt:
          "Kulkas villa gagal dalam urutan tetap: air, es, bir, mixer. Ini urutan produk, dengan harga katalog, lalu chat pemesanan.",
        speakable:
          "Untuk mengisi kulkas villa Bali dengan MadeBrings, pesan dalam urutan ini: air minum, es, bir atau Smirnoff Ice, lalu mixer dan cemilan. Dari katalog Abianbase itu berarti dus Aqua 600ml Rp65.000, es 4kg Rp25.000 per kantong, sewa esky 3 hari opsional Rp150.000, Bintang 330ml Rp35.000 atau pak isi enam Rp200.000, Coca-Cola 250ml Rp9.000, dan keripik Rp22.000. WhatsApp pin untuk Canggu, Seminyak, Kuta, Ubud, atau Tanah Lot. Kami konfirmasi stok dan ongkir. Tunai atau transfer. Usia 21 untuk alkohol. Kami tidak meninggalkan pesanan di depan pintu tanpa orang dewasa terkonfirmasi. Ikuti halaman jasa antar alkohol Bali agar daftar kulkas dan kasir tetap bersama.",
        inclusions: [
          "Urutan: air → es → bir/RTD → mixer → cemilan",
          "Harga katalog tiap langkah",
          "Opsi sewa esky (es dijual terpisah)",
          "Pin WhatsApp + cek 21+",
        ],
        faqs: extraFaqs("id", [
          {
            question: "Berapa es untuk akhir pekan villa?",
            answer:
              "Rencanakan minimal satu kantong 4kg (Rp25.000) per malam jika mengisi wastafel atau esky kecil. Sewa esky Rp150.000 untuk tiga hari jika kulkas lemah. Es dikemas terakhir.",
          },
          {
            question: "Bisa pesan air dan es saja, tanpa alkohol?",
            answer:
              "Ya. Dus Aqua dan es ada di rak publik. Batas 21 tahun berlaku jika pesanan mengandung alkohol.",
          },
        ]),
        sections: [
          {
            paragraphs: [
              "Ini urutan produk, bukan esai wisata. Ikuti langkah, screenshot harga, lalu pesan.",
            ],
            link: {
              href: BOOKING_PATH,
              label: "Kirim daftar villa di halaman pesan",
            },
          },
          {
            heading: "Langkah 1 — Air",
            paragraphs: [
              "Aqua 600ml, dus 24, Rp65.000. Masukkan di chat sebelum bir agar meja tidak hanya alkohol.",
            ],
            link: {
              href: "/shop/ice-water",
              label: "Es dan air",
            },
          },
          {
            heading: "Langkah 2 — Es, dan esky jika kulkas lemah",
            paragraphs: [
              "Es 4kg Rp25.000. Sewa esky 3 hari Rp150.000, es dijual terpisah. Sebutkan drop-off dan penjemputan saat sewa.",
            ],
          },
          {
            heading: "Langkah 3 — Bir atau siap minum",
            paragraphs: [
              "Pak isi enam Rp200.000 untuk meja kecil. Dus Bintang Rp595.000 untuk akhir pekan. Smirnoff Ice 275ml Rp35.000 jika tidak ada yang mau meracik.",
            ],
            link: {
              href: "/blog/beer-delivery-bali",
              label: "Harga antar bir",
            },
          },
          {
            heading: "Langkah 4 — Mixer dan jeruk nipis",
            paragraphs: [
              "Coca-Cola atau Sprite 250ml Rp9.000, tonik atau ginger ale Rp12.000, Red Bull Rp25.000, tiga jeruk nipis Rp12.000. Dus mixer Rp200.000 jika Anda menjamu tamu.",
            ],
            link: {
              href: "/shop/mixers",
              label: "Rak mixer",
            },
          },
          {
            heading: "Langkah 5 — Cemilan, lalu WhatsApp pin",
            paragraphs: [
              "Keripik besar Rp22.000, Pringles 110g Rp38.000. Lalu kirim nama villa. Bayar tunai atau transfer setelah konfirmasi. 21+ jika ada alkohol.",
            ],
            link: {
              href: BOOKING_PATH,
              label: "WhatsApp daftar lengkap",
            },
          },
        ],
      },
    },
  },
];

export function getCommercialArticle(slug: string) {
  return commercialArticles.find((article) => article.slug === slug);
}

export function commercialToBlogPost(
  article: CommercialArticle,
  locale: Locale = "en",
): BlogPost {
  const copy = article.copy[locale];
  return {
    slug: article.slug,
    title: copy.title,
    description: copy.description,
    excerpt: copy.excerpt,
    keywords: article.keywords,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    readingMinutes: article.readingMinutes,
    heroImage: article.heroImage,
    heroAlt: article.heroAlt,
    sections: copy.sections,
    intent: "commercial",
    query: article.query,
    speakable: finishSpeakable(locale, copy.speakable),
    inclusions: copy.inclusions,
    faqs: copy.faqs,
    bookingPath: BOOKING_PATH,
  };
}

export function getCommercialBlogPosts(locale: Locale = "en"): BlogPost[] {
  return commercialArticles.map((article) =>
    commercialToBlogPost(article, locale),
  );
}
