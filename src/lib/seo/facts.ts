import { getProductById } from "@/lib/commerce";
import { formatIdr } from "@/lib/format";
import type { Locale } from "@/lib/i18n";

/** Last editorial refresh for WebPage dateModified and GEO files. */
export const CONTENT_UPDATED = "2026-09-01";

export const MONEY_PATH = "/alcohol-delivery-service";
export const COMPARISON_PATH = "/compare-alcohol-delivery-bali";
export const PRESS_PATH = "/press";
export const LLMS_PATH = "/llms.txt";
export const LLMS_FULL_PATH = "/llms-full.txt";

export const serviceAreas = [
  "Abianbase",
  "Canggu",
  "Seminyak",
  "Kuta",
  "Ubud",
  "Tanah Lot",
  "Mengwi",
  "Badung",
] as const;

export const touristAreas = [
  "Abianbase",
  "Canggu",
  "Seminyak",
  "Kuta",
  "Ubud",
  "Tanah Lot",
] as const;

/** Catalog SKUs shown on commercial pages — prices always come from the shop module. */
export const MONEY_PRICE_IDS = [
  "singaraja-pilsner-330",
  "bintang-330",
  "bintang-330-6pack",
  "coca-cola-original-250",
  "ice-bag-4kg",
  "aqua-mineral-600-box",
  "rent-ice-box-3-days",
] as const;

export function shelfPriceRows() {
  return MONEY_PRICE_IDS.map((id) => {
    const product = getProductById(id);
    if (!product) {
      throw new Error(`Missing catalog product for money-page SKU: ${id}`);
    }
    return {
      id: product.id,
      name: product.name,
      size: product.size,
      priceIdr: product.priceIdr,
      priceLabel: formatIdr(product.priceIdr),
      href: `/product/${product.slug}`,
    };
  });
}

export function areaList(locale: Locale = "en") {
  const areas = touristAreas.join(", ").replace(/, ([^,]*)$/, ", and $1");
  if (locale === "id") {
    return touristAreas.join(", ").replace(/, ([^,]*)$/, ", dan $1");
  }
  return areas;
}

export const inclusions = {
  en: [
    "Beer, cider, and ready-to-drink cans from the Abianbase cooler",
    "Mixers such as Coca-Cola, Sprite, tonic, and ginger ale",
    "Drinking water, 4kg ice bags, and a 3-day ice-box rental",
    "Snacks for the villa table",
    "WhatsApp confirmation of what is actually in stock today",
    "Delivery to your villa or home after we agree the pin or address",
    "Cash or bank transfer — no trolley checkout",
  ],
  id: [
    "Bir, sider, dan kaleng siap minum dari pendingin Abianbase",
    "Mixer seperti Coca-Cola, Sprite, tonik, dan ginger ale",
    "Air minum, es 4kg, dan sewa kotak es 3 hari",
    "Cemilan untuk meja villa",
    "Konfirmasi WhatsApp untuk stok yang benar-benar ada hari ini",
    "Pengantaran ke villa atau rumah setelah pin atau alamat disepakati",
    "Tunai atau transfer bank — tanpa keranjang belanja",
  ],
} as const;

export const notIncluded = {
  en: [
    "Card checkout on this website",
    "A published flat delivery fee — the rider cost is confirmed in chat from your pin",
    "A 15-minute app timer; we are a family shop, not a 24-hour chain",
    "Sales to anyone under 21",
    "Unlabeled or unlicensed homemade spirit",
  ],
  id: [
    "Checkout kartu di situs ini",
    "Ongkir datar yang dipasang di web — biaya rider dikonfirmasi di chat dari pin Anda",
    "Janji timer 15 menit seperti aplikasi; kami toko keluarga, bukan rantai 24 jam",
    "Penjualan kepada siapa pun di bawah 21 tahun",
    "Arak tanpa label atau minuman destilasi tanpa izin",
  ],
} as const;
