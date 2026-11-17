export type Locale = "en" | "id";

export const defaultLocale: Locale = "en";
export const LOCALE_STORAGE_KEY = "madebrings-locale";

const en = {
  orderNow: "ORDER NOW",
  language: "Language",
  langEn: "EN",
  langId: "ID",
  topbar: "Alcohol delivery in Canggu, Seminyak, Kuta, Ubud & Tanah Lot · WhatsApp to order",
  menuOpen: "Open menu",
  menuTitle: "MadeBrings",
  menuNote: "Chat us on WhatsApp to order and checkout. Cash or bank transfer.",
  navShop: "Shop",
  navBeer: "Beer & cider",
  navRtd: "RTD",
  navMixers: "Mixers",
  navIce: "Ice & water",
  navSnacks: "Snacks",
  navBlog: "Blog",
  navAbout: "About us",
  navContact: "Contact",
  heroKicker: "Canggu · Seminyak · Kuta · Ubud · Tanah Lot",
  heroTitle1: "Alcohol delivery",
  heroTitle2: "in Canggu & Bali.",
  heroBody:
    "Family shop in Abianbase, run by {owner}. WhatsApp for beer, mixers, ice, and water to your villa in Canggu, Seminyak, Kuta, Ubud, or Tanah Lot. Neighborhood prices. Cash or bank transfer. 21+.",
  heroBrowse: "Browse the shop",
  heroAlt:
    "MadeBrings alcohol delivery in Bali: a courier in an udeng on a scooter, holding a box with the MadeBrings emblem",
  step1Title: "Great local prices",
  step1Text: "We are a small shop, not a beach-club mark-up.",
  step2Title: "Chat us to order & checkout",
  step2Text: "WhatsApp is the till. Tell us what you want and how you will pay.",
  step3Title: "Delivery to your door",
  step3Text: "Beer, liquor, and mixers brought to your villa or home.",
  shelvesKicker: "What we keep",
  shelvesTitle: "The shelves",
  shelvesSee: "See everything",
  featuredKicker: "From the cooler",
  featuredTitle: "A few things people ask for",
  journalKicker: "Journal",
  journalTitle: "Holiday notes from Abianbase",
  journalAll: "All posts",
  guidesKicker: "Area guides",
  guidesTitle: "Order drinks where you are staying",
  guidesAll: "All delivery guides",
  moneyKicker: "Book delivery",
  moneyTitle: "Alcohol delivery from a neighborhood shop",
  moneyLead:
    "One booking page: prices, what is included, the areas we run, and WhatsApp checkout. Chat first so Made can confirm stock and the pin.",
  moneyAnswerTitle: "Direct answer",
  areasTitle: "Where we deliver",
  areasBody:
    "Abianbase is the shop. Canggu, Seminyak, Kuta, Ubud, and Tanah Lot are the tourist searches. Send a villa name or map pin — delivery cost is confirmed in the chat, not guessed on this page.",
  guideCanggu: "Canggu alcohol delivery",
  guideSeminyak: "Seminyak beer delivery",
  guideKuta: "Kuta arrival drinks",
  guideUbud: "Ubud & Tanah Lot delivery",
  footerCompare: "Shop vs 24/7",
  footerPress: "Press kit",
  howToTitle: "How to restock a villa fridge",
  howToLead:
    "Four steps from the listed beer shelf to WhatsApp confirmation. Same prices as the shop. 21+ only.",
  pricesTitle: "Starter prices from the shelf",
  pricesBody:
    "These are the listed shop prices, not a beach-club menu. Stock moves. Ice and water can go in the same WhatsApp order as the beer.",
  pricesItem: "Item",
  pricesSize: "Size",
  pricesPrice: "Price",
  includedTitle: "What is included",
  notIncludedTitle: "What we do not claim",
  faqTitle: "Alcohol delivery FAQ",
  howTitle: "How to buy from us",
  how1: "Great local prices — browse beer, liquor, and mixers at neighborhood rates.",
  how2: "Chat us to order & checkout — tap ORDER NOW and we confirm on WhatsApp.",
  how3: "Delivery to your door — our alcohol delivery service brings it to your villa or home.",
  findTitle: "Find the shop",
  findBody:
    "We are in {place}. Come by if you are nearby, or pin us on Google Maps and chat so Made knows you are coming.",
  maps: "Google Maps",
  aboutFamily: "About the family shop",
  footerVisit: "Visit & chat",
  footerWhatsapp: "WhatsApp checkout",
  footerPay: "Pay cash or bank transfer",
  footerAge: "Must be {age}+ to buy alcohol",
  footerShop: "Shop",
  footerGuides: "Order guides",
  footerBlurb:
    "A local family shop in Abianbase, Badung, Bali, run by {owner}. Alcohol delivery service for beer, liquor, mixers, ice, and everyday extras. Chat us to order.",
  footerLegal:
    "Prices are in Indonesian rupiah. MadeBrings is an alcohol delivery service in Badung, Bali. We support the responsible service of alcohol and do not sell to anyone under {age}.",
  ageTitle: "Are you {age} or older?",
  ageBody:
    "Indonesian law only allows alcohol sales to people {age} and over. MadeBrings is a small family shop — please be honest with us.",
  ageYes: "Yes, I am {age}+",
  ageNo: "No, take me elsewhere",
  shopKicker: "Neighborhood shelf",
  shopHeading: "Beer, mixers & ice for delivery",
  shopIntro:
    "Browse beer, Smirnoff Ice, mixers, ice, and snacks for alcohol delivery in Canggu, Seminyak, Kuta, Ubud, and Tanah Lot. Chat to confirm stock, then we arrange the drop-off.",
  shopSearch: "Search the shelf",
  shopAll: "All",
  shopEmpty:
    "Nothing on this shelf right now. Chat us on WhatsApp — we may still have it in the shop.",
  productConfirm:
    "Chat us to confirm this is on the shelf today. Payment is cash or bank transfer after we confirm. We can deliver to your door.",
  productRelated: "Nearby on the same shelf",
  productPriceNote:
    "Price is for {size}. Chat us to order this alcohol delivery. Payment is cash or bank transfer.",
  aboutKicker: "The family behind the emblem",
  aboutTitle: "About MadeBrings",
  aboutP1:
    "We are a local family shop, and the owner’s name is Made Hendrik. We are trying to get visibility through an online presence, and we are located in Abianbase, Badung, Bali.",
  aboutP2:
    "That is the whole story, told plainly. Neighbors already know the shop. This website is so people staying nearby — and friends sending a guest to us — can see what we keep, then talk to a real person.",
  aboutP3:
    "MadeBrings is an alcohol delivery service, not a 24-hour chain. We buy what we can sell at a fair neighborhood price: beer, liquor, bottled drinks, mixers, ice, water, and snacks. If something is missing, say so on WhatsApp.",
  aboutP4:
    "There is no trolley checkout here. Chat us to order and checkout. We check what is on the shelf, then take cash or bank transfer. Delivery to your door is arranged in the chat.",
  aboutP5:
    "If you are close to Abianbase, come by. If you need alcohol delivery in Canggu, Seminyak, Kuta, Ubud, Tanah Lot, or a nearby villa, message first. You are buying from Made Hendrik’s family shop — not from a warehouse on the other side of the island.",
  aboutMaps: "Open Google Maps",
  contactKicker: "Talk to the shop",
  contactTitle: "Contact MadeBrings",
  contactLead:
    "The fastest way to buy from our alcohol delivery service is WhatsApp. Chat us to order beer, liquor, or mixers — tell Made what you need, where you are, and whether you will pay cash or bank transfer.",
  contactWaTitle: "WhatsApp",
  contactWaBody:
    "Chat us to order and checkout. Ask if a bottle is in, arrange pickup in Abianbase, or book delivery to your door.",
  contactShop: "The shop",
  contactOwner: "Owner: {owner}",
  contactMaps: "Open in Google Maps",
  contactAlso: "Also find us on",
  notFoundKicker: "Missing from the shelf",
  notFoundTitle: "That page is not here",
  notFoundBody:
    "It may have been moved, or it was never a page in this small shop. Head back to the shelf or chat us on WhatsApp.",
  notFoundCta: "Back to the shop",
  waGreeting:
    "Hi MadeBrings, I would like to order from your alcohol delivery service in Abianbase. Please confirm stock and delivery to my villa or home.",
  blogIndexKicker: "From Abianbase",
  blogIndexTitle: "Delivery guides & notes",
  blogIndexBody:
    "Commercial pages for alcohol delivery in Canggu, beer delivery in Seminyak, and a Kuta arrival run — plus slower notes on holidays, guides, and arak. Chat first to confirm your order.",
  articleBook: "Book alcohol delivery",
  articlePrices: "Listed prices for this order",
  articleIncluded: "What this order includes",
  articleFaq: "FAQ",
  articleShop: "Open the shop",
  articleRelated: "More from MadeBrings",
  catBeer: "Beer & cider",
  catBottles: "Bottled drinks",
  catRtd: "Ready to drink",
  catMixers: "Mixer / juice",
  catIce: "Water / ice / esky",
  catSnacks: "Snacks",
  catEveryday: "Everyday extras",
  catBeerIntro:
    "Cold beer at neighborhood prices — Singaraja, Bintang, San Miguel, six-packs, and boxes. Chat us before you order; stock moves.",
  catBottlesIntro:
    "A short liquor shelf we keep for regulars. Ask Made on WhatsApp if you need a specific bottle.",
  catRtdIntro:
    "Smirnoff Ice singles, six-packs, and a full box. Open as they are — no mixer needed.",
  catMixersIntro:
    "Tonic, ginger ale, cola, Sprite, Red Bull, and limes to sit next to whatever you already have at home.",
  catIceIntro:
    "Ice bags, a 3-day esky rental, and a box of Aqua to add onto a drinks run.",
  catSnacksIntro:
    "Crisps for the table while the drinks arrive.",
  catEverydayIntro:
    "Small extras we keep beside the drinks — the kind of thing a villa run forgets.",
} as const;

const id: { [K in keyof typeof en]: string } = {
  orderNow: "PESAN SEKARANG",
  language: "Bahasa",
  langEn: "EN",
  langId: "ID",
  topbar: "Antar alkohol di Canggu, Seminyak, Kuta, Ubud, dan Tanah Lot · Chat WhatsApp",
  menuOpen: "Buka menu",
  menuTitle: "MadeBrings",
  menuNote: "Chat WhatsApp untuk pesan dan bayar. Tunai atau transfer bank.",
  navShop: "Toko",
  navBeer: "Bir & sider",
  navRtd: "Siap minum",
  navMixers: "Mixer",
  navIce: "Es & air",
  navSnacks: "Cemilan",
  navBlog: "Blog",
  navAbout: "Tentang kami",
  navContact: "Kontak",
  heroKicker: "Canggu · Seminyak · Kuta · Ubud · Tanah Lot",
  heroTitle1: "Antar alkohol",
  heroTitle2: "di Canggu & Bali.",
  heroBody:
    "Toko keluarga di Abianbase, dikelola {owner}. WhatsApp untuk bir, mixer, es, dan air ke villa di Canggu, Seminyak, Kuta, Ubud, atau Tanah Lot. Harga tetangga. Tunai atau transfer. 21+.",
  heroBrowse: "Lihat toko",
  heroAlt:
    "Layanan antar alkohol MadeBrings di Bali: kurir berudeng di skuter membawa kotak dengan emblem MadeBrings",
  step1Title: "Harga lokal yang bersahabat",
  step1Text: "Kami toko kecil, bukan harga beach club.",
  step2Title: "Chat kami untuk pesan & checkout",
  step2Text: "WhatsApp adalah kasirnya. Sebutkan yang Anda mau dan cara bayar.",
  step3Title: "Diantar ke rumah Anda",
  step3Text: "Bir, minuman keras, dan mixer diantar ke villa atau rumah.",
  shelvesKicker: "Isi rak kami",
  shelvesTitle: "Rak toko",
  shelvesSee: "Lihat semua",
  featuredKicker: "Dari pendingin",
  featuredTitle: "Yang sering ditanya",
  journalKicker: "Catatan",
  journalTitle: "Catatan liburan dari Abianbase",
  journalAll: "Semua tulisan",
  guidesKicker: "Panduan kawasan",
  guidesTitle: "Pesan minuman di tempat Anda menginap",
  guidesAll: "Semua panduan antar",
  moneyKicker: "Pesan pengantaran",
  moneyTitle: "Antar alkohol dari toko tetangga",
  moneyLead:
    "Satu halaman booking: harga, yang termasuk, kawasan yang kami jangkau, dan checkout WhatsApp. Chat dulu agar Made konfirmasi stok dan pin.",
  moneyAnswerTitle: "Jawaban langsung",
  areasTitle: "Kawasan pengantaran",
  areasBody:
    "Abianbase adalah tokonya. Canggu, Seminyak, Kuta, Ubud, dan Tanah Lot adalah pencarian wisatawan. Kirim nama villa atau pin peta — ongkir dikonfirmasi di chat, bukan ditebak di halaman ini.",
  guideCanggu: "Antar alkohol Canggu",
  guideSeminyak: "Antar bir Seminyak",
  guideKuta: "Minuman tiba di Kuta",
  guideUbud: "Antar Ubud & Tanah Lot",
  footerCompare: "Toko vs 24 jam",
  footerPress: "Kit pers",
  howToTitle: "Cara isi ulang kulkas villa",
  howToLead:
    "Empat langkah dari rak bir tertera ke konfirmasi WhatsApp. Harga sama dengan toko. 21+ saja.",
  pricesTitle: "Harga awal dari rak",
  pricesBody:
    "Ini harga toko yang tertera, bukan menu beach club. Stok bergerak. Es dan air bisa masuk chat WhatsApp yang sama dengan bir.",
  pricesItem: "Barang",
  pricesSize: "Ukuran",
  pricesPrice: "Harga",
  includedTitle: "Yang termasuk",
  notIncludedTitle: "Yang tidak kami klaim",
  faqTitle: "Tanya jawab antar alkohol",
  howTitle: "Cara beli dari kami",
  how1: "Harga lokal yang bersahabat — bir, minuman keras, dan mixer dengan tarif tetangga.",
  how2: "Chat kami untuk pesan & checkout — ketuk PESAN SEKARANG, kami konfirmasi di WhatsApp.",
  how3: "Diantar ke rumah Anda — layanan antar alkohol kami bawa ke villa atau rumah.",
  findTitle: "Temukan tokonya",
  findBody:
    "Kami di {place}. Mampir jika dekat, atau pin Google Maps dan chat agar Made tahu Anda datang.",
  maps: "Google Maps",
  aboutFamily: "Tentang toko keluarga",
  footerVisit: "Kunjungi & chat",
  footerWhatsapp: "Checkout WhatsApp",
  footerPay: "Bayar tunai atau transfer bank",
  footerAge: "Harus {age}+ untuk membeli alkohol",
  footerShop: "Toko",
  footerGuides: "Panduan pesan",
  footerBlurb:
    "Toko keluarga di Abianbase, Badung, Bali, dikelola {owner}. Layanan antar alkohol untuk bir, minuman keras, mixer, es, dan kebutuhan harian. Chat untuk pesan.",
  footerLegal:
    "Harga dalam rupiah. MadeBrings adalah layanan antar alkohol di Badung, Bali. Kami mendukung penjualan alkohol yang bertanggung jawab dan tidak menjual kepada siapa pun di bawah {age} tahun.",
  ageTitle: "Apakah Anda {age} tahun atau lebih?",
  ageBody:
    "Hukum Indonesia hanya mengizinkan penjualan alkohol kepada orang berusia {age} tahun ke atas. MadeBrings toko keluarga kecil — harap jujur.",
  ageYes: "Ya, saya {age}+",
  ageNo: "Tidak, bawa saya ke tempat lain",
  shopKicker: "Rak tetangga",
  shopHeading: "Bir, mixer, dan es untuk diantar",
  shopIntro:
    "Lihat bir, Smirnoff Ice, mixer, es, dan cemilan untuk antar alkohol di Canggu, Seminyak, Kuta, Ubud, dan Tanah Lot. Chat untuk konfirmasi stok, lalu kami atur pengantaran.",
  shopSearch: "Cari di rak",
  shopAll: "Semua",
  shopEmpty:
    "Rak ini kosong saat ini. Chat kami di WhatsApp — mungkin masih ada di toko.",
  productConfirm:
    "Chat kami untuk memastikan stok hari ini. Bayar tunai atau transfer setelah kami konfirmasi. Bisa diantar ke rumah.",
  productRelated: "Dekat di rak yang sama",
  productPriceNote:
    "Harga untuk {size}. Chat kami untuk pesan pengantaran alkohol ini. Bayar tunai atau transfer.",
  aboutKicker: "Keluarga di balik emblem",
  aboutTitle: "Tentang MadeBrings",
  aboutP1:
    "Kami toko keluarga lokal, dan nama pemiliknya Made Hendrik. Kami ingin lebih terlihat lewat kehadiran online, dan kami berada di Abianbase, Badung, Bali.",
  aboutP2:
    "Itu ceritanya, polos saja. Tetangga sudah kenal tokonya. Situs ini agar tamu di sekitar — dan teman yang mengarahkan tamu ke kami — bisa lihat stok, lalu bicara dengan orang sungguhan.",
  aboutP3:
    "MadeBrings adalah layanan antar alkohol, bukan rantai 24 jam. Kami beli yang bisa dijual dengan harga tetangga: bir, minuman keras, minuman botol, mixer, es, air, dan cemilan. Kalau kurang, bilang di WhatsApp.",
  aboutP4:
    "Tidak ada keranjang belanja di sini. Chat kami untuk pesan dan checkout. Kami cek rak, lalu terima tunai atau transfer. Pengantaran ke rumah diatur di chat.",
  aboutP5:
    "Kalau dekat Abianbase, mampir. Kalau butuh antar alkohol di Canggu, Seminyak, Kuta, Ubud, Tanah Lot, atau villa sekitar, chat dulu. Anda beli dari toko keluarga Made Hendrik — bukan gudang di seberang pulau.",
  aboutMaps: "Buka Google Maps",
  contactKicker: "Hubungi toko",
  contactTitle: "Kontak MadeBrings",
  contactLead:
    "Cara tercepat beli dari layanan antar alkohol kami adalah WhatsApp. Chat untuk pesan bir, minuman keras, atau mixer — sebutkan kebutuhan, lokasi, dan apakah bayar tunai atau transfer.",
  contactWaTitle: "WhatsApp",
  contactWaBody:
    "Chat untuk pesan dan checkout. Tanya stok botol, jemput di Abianbase, atau pesan antar ke rumah.",
  contactShop: "Tokonya",
  contactOwner: "Pemilik: {owner}",
  contactMaps: "Buka di Google Maps",
  contactAlso: "Temukan kami juga di",
  notFoundKicker: "Tidak ada di rak",
  notFoundTitle: "Halaman itu tidak ada",
  notFoundBody:
    "Mungkin dipindah, atau memang bukan halaman toko kecil ini. Kembali ke rak atau chat kami di WhatsApp.",
  notFoundCta: "Kembali ke toko",
  waGreeting:
    "Halo MadeBrings, saya ingin pesan dari layanan antar alkohol di Abianbase. Mohon konfirmasi stok dan pengantaran ke villa atau rumah saya.",
  blogIndexKicker: "Dari Abianbase",
  blogIndexTitle: "Panduan antar & catatan",
  blogIndexBody:
    "Halaman komersial untuk antar alkohol di Canggu, antar bir di Seminyak, dan pesanan tiba di Kuta — plus catatan liburan, pemandu, dan arak. Chat dulu untuk konfirmasi pesanan.",
  articleBook: "Pesan antar alkohol",
  articlePrices: "Harga tertera untuk pesanan ini",
  articleIncluded: "Yang termasuk pesanan ini",
  articleFaq: "Tanya jawab",
  articleShop: "Buka toko",
  articleRelated: "Lainnya dari MadeBrings",
  catBeer: "Bir & sider",
  catBottles: "Minuman botol",
  catRtd: "Siap minum",
  catMixers: "Mixer / jus",
  catIce: "Air / es / esky",
  catSnacks: "Cemilan",
  catEveryday: "Kebutuhan harian",
  catBeerIntro:
    "Bir dingin dengan harga tetangga — Singaraja, Bintang, San Miguel, pak isi enam, dan dus. Chat dulu; stok bergerak.",
  catBottlesIntro:
    "Rak minuman keras singkat untuk pelanggan tetap. Tanya Made di WhatsApp jika butuh botol tertentu.",
  catRtdIntro:
    "Smirnoff Ice satuan, pak isi enam, dan dus penuh. Langsung minum — tanpa mixer.",
  catMixersIntro:
    "Tonik, ginger ale, kola, Sprite, Red Bull, dan jeruk nipis untuk minuman yang sudah ada di rumah.",
  catIceIntro:
    "Es batu, sewa esky 3 hari, dan dus Aqua untuk ditambahkan pada pengantaran minuman.",
  catSnacksIntro:
    "Keripik di meja sambil minuman diantar.",
  catEverydayIntro:
    "Pelengkap kecil di samping minuman — yang sering terlupa saat belanja villa.",
};

export const messages = { en, id };

export type MessageKey = keyof typeof en;

export const categoryNameKey: Record<string, MessageKey> = {
  "beer-cider": "catBeer",
  rtd: "catRtd",
  mixers: "catMixers",
  "ice-water": "catIce",
  snacks: "catSnacks",
};

export const categoryIntroKey: Record<string, MessageKey> = {
  "beer-cider": "catBeerIntro",
  rtd: "catRtdIntro",
  mixers: "catMixersIntro",
  "ice-water": "catIceIntro",
  snacks: "catSnacksIntro",
};

export function interpolate(
  template: string,
  vars?: Record<string, string | number>,
) {
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (_, key: string) =>
    vars[key] !== undefined ? String(vars[key]) : `{${key}}`,
  );
}
