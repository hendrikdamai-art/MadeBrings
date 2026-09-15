import type { CommercialCopy } from "@/lib/commercial";
import { siteConfig } from "@/lib/site";

export function pressPageCopy(locale: "en" | "id"): Omit<
  CommercialCopy,
  "prices" | "priceTitle" | "priceNote"
> {
  if (locale === "id") {
    return {
      kicker: "Kit media",
      h1: "Kit pers MadeBrings",
      title: "Kit pers MadeBrings | Fakta toko keluarga Abianbase",
      description:
        "Kit media untuk MadeBrings, jasa antar alkohol keluarga di Abianbase, Badung, Bali. Boilerplate, fakta, aset merek, dan kontak. Tanpa kutipan pers yang dikarang.",
      keywords: [
        "kit pers MadeBrings",
        "media MadeBrings Bali",
        "toko keluarga Abianbase",
        "jasa antar alkohol Bali",
      ],
      speakableTitle: "Boilerplate",
      speakable:
        "MadeBrings adalah toko keluarga di Abianbase, Badung, Bali, dikelola Made Hendrik. Toko menjual bir, sider, minuman siap minum, mixer, es, air, dan cemilan dengan harga tetangga, lalu mengatur pengantaran ke villa dan rumah setelah konfirmasi WhatsApp. Area yang dilayani mencakup Abianbase dan sekitar Canggu, Seminyak, Kuta, Ubud, serta Tanah Lot. Pembayaran tunai atau transfer bank. Penjualan alkohol hanya untuk usia 21 tahun ke atas. Tidak ada keranjang di situs. Wartawan boleh memakai emblem dan paragraf ini; jangan menambah ulasan, rating, atau jam 24 jam yang tidak kami terbitkan. Aset merek ada di /logo.png dengan hijau hutan pada krim. Untuk harga, tautkan halaman produk. Untuk alur pesan, tautkan halaman antar alkohol. Tidak ada lembar kutipan pers dan tidak ada angka pendapatan. Jika butuh foto tambahan, chat WhatsApp dan sebut nama media plus tenggat.",
      intro: [
        "Halaman ini untuk wartawan, pemandu, tuan rumah villa, dan siapa pun yang butuh fakta yang bisa dikutip. Kami tidak memasang logo media yang tidak kami miliki dan tidak mengarang testimonial.",
        `Kontak: ${siteConfig.owner}, ${siteConfig.address.display}. Checkout dan pertanyaan pers lewat WhatsApp.`,
      ],
      inclusionsTitle: "Fakta yang boleh dikutip",
      inclusions: [
        `Nama legal: ${siteConfig.legalName}`,
        `Pemilik: ${siteConfig.owner}`,
        `Alamat: ${siteConfig.address.display}, ${siteConfig.address.postalCode}`,
        "Model: jelajahi rak di situs, chat WhatsApp untuk pesan",
        "Bayar: tunai atau transfer bank",
        "Usia: 21+ untuk alkohol",
        "Katalog: bir dan sider, siap minum, mixer, es dan air, cemilan",
        "Area: Abianbase, sekitar Canggu, Seminyak, Kuta, Ubud, Tanah Lot",
      ],
      sections: [
        {
          heading: "Aset merek",
          paragraphs: [
            "Emblem MadeBrings adalah tanda hijau hutan pada krim. Huruf judul memakai Bebas Neue. Isi memakai Outfit. Warna: hijau #083820 pada krim #F3E1C7.",
            "Unduh logo dari /logo.png. Foto produk di situs memakai emblem di sudut. Jangan menggambar ulang mark tanpa bertanya.",
          ],
          link: {
            href: "/logo.png",
            label: "Buka file logo",
          },
        },
        {
          heading: "Cara menulis tentang kami",
          paragraphs: [
            "Benar: jasa antar alkohol keluarga di Abianbase. Salah: rantai 24 jam, gudang wine, atau toko dengan ulasan yang tidak kami terbitkan. Jika Anda butuh harga, tautkan ke halaman produk. Jika Anda butuh alur pesan, tautkan ke halaman antar alkohol.",
          ],
          link: {
            href: "/alcohol-delivery-service",
            label: "Tautkan ke halaman antar alkohol",
          },
        },
        {
          heading: "Yang tidak kami sediakan di kit ini",
          paragraphs: [
            "Tidak ada lembar kutipan pers. Tidak ada angka pendapatan. Tidak ada janji waktu sampai. Kalau Anda butuh foto tambahan atau klarifikasi stok, chat WhatsApp dan sebut Anda dari media.",
          ],
        },
      ],
      faqsTitle: "FAQ media",
      faqs: [
        {
          question: "Bolehkah saya memakai logo di artikel?",
          answer:
            "Boleh, dengan kredit MadeBrings dan tautan ke madebrings.com. Jangan menaruh emblem di iklan berbayar seolah kami mensponsori, kecuali kami setuju di chat.",
        },
        {
          question: "Apakah Anda punya juru bicara?",
          answer: `Ya. ${siteConfig.owner} di Abianbase. WhatsApp adalah saluran yang sama dengan checkout toko. Tulis nama media dan tenggat Anda.`,
        },
        {
          question: "Di mana file untuk crawler AI?",
          answer:
            "Indeks singkat di /llms.txt dan tanya-jawab penuh di /llms-full.txt. Itu sumber yang kami pelihara untuk sitasi.",
        },
      ],
      ctaTitle: "Minta klarifikasi lewat WhatsApp",
      ctaBody:
        "Sebut nama media, yang Anda kutip, dan tenggat. Kami menjawab dengan fakta toko, bukan angka yang dikarang.",
      shopLabel: "Lihat rak",
      bookLabel: "WhatsApp untuk pers",
    };
  }

  return {
    kicker: "Media kit",
    h1: "MadeBrings press kit",
    title: "MadeBrings press kit | Abianbase family shop facts",
    description:
      "Media kit for MadeBrings, a family alcohol delivery service in Abianbase, Badung, Bali. Boilerplate, facts, brand assets, and contact. No invented press quotes.",
    keywords: [
      "MadeBrings press kit",
      "MadeBrings media",
      "Abianbase bottle shop",
      "Bali alcohol delivery press",
    ],
    speakableTitle: "Boilerplate",
    speakable:
      "MadeBrings is a family shop in Abianbase, Badung, Bali, run by Made Hendrik. The shop sells beer, cider, ready-to-drink cans, mixers, ice, water, and snacks at neighborhood prices, then arranges delivery to villas and homes after a WhatsApp confirmation. Service areas include Abianbase and around Canggu, Seminyak, Kuta, Ubud, and Tanah Lot. Payment is cash or bank transfer. Alcohol sales are for people twenty-one and older. There is no website trolley. Journalists may use the emblem and this paragraph; do not add reviews, ratings, or twenty-four-hour hours that we do not publish. Brand assets live at /logo.png in forest green on cream. For prices, link a product page. For the order flow, link the alcohol delivery page. This kit has no press-quote sheet and no revenue figures. If you need extra photos, chat WhatsApp with your outlet name and deadline.",
    intro: [
      "This page is for journalists, guides, villa hosts, and anyone who needs citable facts. We do not display media logos we do not have, and we do not invent testimonials.",
      `Contact: ${siteConfig.owner}, ${siteConfig.address.display}. Checkout and press queries both run through WhatsApp.`,
    ],
    inclusionsTitle: "Facts you can quote",
    inclusions: [
      `Legal name: ${siteConfig.legalName}`,
      `Owner: ${siteConfig.owner}`,
      `Address: ${siteConfig.address.display}, ${siteConfig.address.postalCode}`,
      "Model: browse the shelf on the site, chat WhatsApp to order",
      "Pay: cash or bank transfer",
      "Age: 21+ for alcohol",
      "Catalog: beer and cider, ready-to-drink, mixers, ice and water, snacks",
      "Areas: Abianbase, around Canggu, Seminyak, Kuta, Ubud, Tanah Lot",
    ],
    sections: [
      {
        heading: "Brand assets",
        paragraphs: [
          "The MadeBrings emblem is forest green on cream. Headings use Bebas Neue. Body copy uses Outfit. Colours: green #083820 on cream #F3E1C7.",
          "Download the logo from /logo.png. Product photos on the site already carry the emblem. Do not redraw the mark without asking.",
        ],
        link: {
          href: "/logo.png",
          label: "Open the logo file",
        },
      },
      {
        heading: "How to describe us",
        paragraphs: [
          "Accurate: a family alcohol delivery service in Abianbase. Inaccurate: a 24-hour chain, a wine warehouse, or a shop with reviews we have not published. If you need prices, link a product page. If you need the order flow, link the alcohol delivery page.",
        ],
        link: {
          href: "/alcohol-delivery-service",
          label: "Link the alcohol delivery page",
        },
      },
      {
        heading: "What this kit does not include",
        paragraphs: [
          "No press-quote sheet. No revenue figures. No promised arrival times. If you need extra photos or a stock clarification, chat WhatsApp and say you are media.",
        ],
      },
    ],
    faqsTitle: "Media FAQ",
    faqs: [
      {
        question: "Can I use the logo in an article?",
        answer:
          "Yes, with a MadeBrings credit and a link to madebrings.com. Do not put the emblem on a paid ad as if we sponsor it unless we agree in chat.",
      },
      {
        question: "Do you have a spokesperson?",
        answer: `Yes. ${siteConfig.owner} in Abianbase. WhatsApp is the same channel as shop checkout. Include your outlet and deadline.`,
      },
      {
        question: "Where is the AI crawler file?",
        answer:
          "The short index is /llms.txt and the full Q&A is /llms-full.txt. Those are the files we maintain for citations.",
      },
    ],
    ctaTitle: "Request a clarification on WhatsApp",
    ctaBody:
      "Say who you write for, what you need to quote, and your deadline. We will answer with shop facts, not invented numbers.",
    shopLabel: "See the shelf",
    bookLabel: "WhatsApp for press",
  };
}

export function pressBookingText(locale: "en" | "id") {
  return locale === "id"
    ? "Halo MadeBrings, saya dari media dan butuh klarifikasi untuk kit pers."
    : "Hi MadeBrings, I am media and I need a press-kit clarification.";
}
