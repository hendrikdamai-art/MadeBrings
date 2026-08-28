import type { Category, CategoryId, Product } from "./types";

const photo = (slug: string) => `/products/${slug}.jpg`;

export const categories: Category[] = [
  {
    id: "beer-cider",
    slug: "beer-cider",
    name: "Beer & cider",
    shortName: "Beer",
    description:
      "Cold bottles, six-packs, and boxes at neighborhood prices. Chat us before you order — stock moves.",
    href: "/shop/beer-cider",
  },
  {
    id: "rtd",
    slug: "rtd",
    name: "Ready to drink",
    shortName: "RTD",
    description:
      "Smirnoff Ice singles, six-packs, and a full box. Open as they are — no mixer needed.",
    href: "/shop/rtd",
  },
  {
    id: "mixers",
    slug: "mixers",
    name: "Mixer / juice",
    shortName: "Mixers",
    description:
      "Tonic, ginger ale, cola, Sprite, Red Bull, and limes to sit next to whatever you already have at home.",
    href: "/shop/mixers",
  },
  {
    id: "ice-water",
    slug: "ice-water",
    name: "Water / ice / esky",
    shortName: "Ice",
    description:
      "Ice bags, a 3-day esky rental, and a box of Aqua. Add them onto a drinks run.",
    href: "/shop/ice-water",
  },
  {
    id: "snacks",
    slug: "snacks",
    name: "Snacks",
    shortName: "Snacks",
    description: "Crisps for the table while the drinks arrive.",
    href: "/shop/snacks",
  },
];

const products: Product[] = [
  {
    id: "singaraja-pilsner-330",
    slug: "singaraja-pilsner-330",
    name: "Singaraja Pilsner Bottle 330ml",
    summary: "Bali’s everyday pilsner. The one neighbors actually drink.",
    description:
      "A 330ml bottle of Singaraja pilsner. Light, cold, and priced like a local shop — not a beach-club list. Chat us on WhatsApp to confirm it is in the cooler before you order a run.",
    priceIdr: 22000,
    size: "330ml",
    origin: "Bali",
    category: "beer-cider",
    image: photo("singaraja-pilsner-330"),
    imageAlt: "Singaraja Pilsner 330ml bottle with the MadeBrings emblem",
    featured: true,
  },
  {
    id: "bintang-330",
    slug: "bintang-330",
    name: "Bintang Bottle 330ml",
    summary: "The Bali regular. One cold bottle.",
    description:
      "A 330ml bottle of Bintang. Price is for a single bottle. Six-packs and boxes are listed separately if you are stocking a villa. Message us to confirm cold stock.",
    priceIdr: 35000,
    size: "330ml",
    origin: "Indonesia",
    category: "beer-cider",
    image: photo("bintang-330"),
    imageAlt: "Bintang 330ml bottle with the MadeBrings emblem",
    featured: true,
  },
  {
    id: "bintang-radler-lemon-330",
    slug: "bintang-radler-lemon-330",
    name: "Bintang Radler Lemon Bottle 330ml",
    summary: "Bintang with lemon. Lighter than a straight pilsner.",
    description:
      "A 330ml bottle of Bintang Radler Lemon. Beer mixed with lemon — easy on a hot afternoon. Chat us to confirm we still have it cold.",
    priceIdr: 35000,
    size: "330ml",
    origin: "Indonesia",
    category: "beer-cider",
    image: photo("bintang-radler-lemon-330"),
    imageAlt: "Bintang Radler Lemon 330ml bottle with the MadeBrings emblem",
    featured: true,
  },
  {
    id: "san-miguel-light-330",
    slug: "san-miguel-light-330",
    name: "San Miguel Light Bottle 330ml",
    summary: "A lighter lager in a 330ml bottle.",
    description:
      "One 330ml bottle of San Miguel Light. If you want a six-pack or a box, those are listed below. WhatsApp us before you count on a large order.",
    priceIdr: 35000,
    size: "330ml",
    origin: "Philippines / Indonesia",
    category: "beer-cider",
    image: photo("san-miguel-light-330"),
    imageAlt: "San Miguel Light 330ml bottle with the MadeBrings emblem",
  },
  {
    id: "bintang-crystal-330",
    slug: "bintang-crystal-330",
    name: "Bintang Crystal Bottle 330ml",
    summary: "Bintang’s extra-cold crystal bottle.",
    description:
      "A 330ml bottle of Bintang Crystal. Same family as regular Bintang, served from our cooler when we have it. Chat to confirm.",
    priceIdr: 35000,
    size: "330ml",
    origin: "Indonesia",
    category: "beer-cider",
    image: photo("bintang-crystal-330"),
    imageAlt: "Bintang Crystal 330ml bottle with the MadeBrings emblem",
  },
  {
    id: "san-miguel-light-330-6pack",
    slug: "san-miguel-light-330-6pack",
    name: "San Miguel Light Bottle 330ml – 6 Pack",
    summary: "Six bottles. Enough for a small table.",
    description:
      "Six 330ml bottles of San Miguel Light. Chat us on WhatsApp to confirm the pack is on the shelf, then we arrange delivery.",
    priceIdr: 200000,
    size: "6 × 330ml",
    origin: "Philippines / Indonesia",
    category: "beer-cider",
    image: photo("san-miguel-light-330-6pack"),
    imageAlt: "San Miguel Light 330ml six-pack with the MadeBrings emblem",
    packNote: "6 pack",
  },
  {
    id: "bintang-330-6pack",
    slug: "bintang-330-6pack",
    name: "Bintang Bottle 330ml – 6 Pack",
    summary: "Six Bintang bottles for the villa fridge.",
    description:
      "Six 330ml bottles of Bintang. A full box is listed separately if you need more. Message us to confirm stock.",
    priceIdr: 200000,
    size: "6 × 330ml",
    origin: "Indonesia",
    category: "beer-cider",
    image: photo("bintang-330-6pack"),
    imageAlt: "Bintang 330ml six-pack with the MadeBrings emblem",
    packNote: "6 pack",
  },
  {
    id: "bintang-crystal-330-6pack",
    slug: "bintang-crystal-330-6pack",
    name: "Bintang Crystal Bottles 330ml – 6 Pack",
    summary: "Six Crystal bottles, ready to chill.",
    description:
      "Six 330ml bottles of Bintang Crystal. Chat us to confirm we have the pack today.",
    priceIdr: 200000,
    size: "6 × 330ml",
    origin: "Indonesia",
    category: "beer-cider",
    image: photo("bintang-crystal-330-6pack"),
    imageAlt: "Bintang Crystal 330ml six-pack with the MadeBrings emblem",
    packNote: "6 pack",
  },
  {
    id: "bintang-radler-lemon-330-6pack",
    slug: "bintang-radler-lemon-330-6pack",
    name: "Bintang Radler Lemon Bottles 330ml – 6 Pack",
    summary: "Six lemon Radlers for a hot afternoon.",
    description:
      "Six 330ml bottles of Bintang Radler Lemon. WhatsApp us to confirm the pack is in, then we can deliver.",
    priceIdr: 200000,
    size: "6 × 330ml",
    origin: "Indonesia",
    category: "beer-cider",
    image: photo("bintang-radler-lemon-330-6pack"),
    imageAlt: "Bintang Radler Lemon 330ml six-pack with the MadeBrings emblem",
    packNote: "6 pack",
  },
  {
    id: "singaraja-pilsner-box",
    slug: "singaraja-pilsner-box",
    name: "Singaraja Pilsner Box",
    summary: "A full box of Singaraja at the local rate.",
    description:
      "A box of Singaraja Pilsner 330ml bottles. This is the volume price neighbors use for a gathering. Chat us to confirm we can move a box today.",
    priceIdr: 440000,
    size: "Box",
    origin: "Bali",
    category: "beer-cider",
    image: photo("singaraja-pilsner-box"),
    imageAlt: "Box of Singaraja Pilsner with the MadeBrings emblem",
    packNote: "Box",
  },
  {
    id: "bintang-beer-box",
    slug: "bintang-beer-box",
    name: "Bintang Beer Box",
    summary: "A full box of Bintang 330ml bottles.",
    description:
      "A box of Bintang 330ml bottles. Tell us on WhatsApp how many boxes you need and where to bring them.",
    priceIdr: 595000,
    size: "Box",
    origin: "Indonesia",
    category: "beer-cider",
    image: photo("bintang-beer-box"),
    imageAlt: "Box of Bintang 330ml bottles with the MadeBrings emblem",
    packNote: "Box",
  },
  {
    id: "bintang-radler-lemon-box",
    slug: "bintang-radler-lemon-box",
    name: "Bintang Radler Lemon Bottle Box",
    summary: "A full box of lemon Radler bottles.",
    description:
      "A box of Bintang Radler Lemon 330ml bottles. Chat us to confirm the box is in the shop before you plan around it.",
    priceIdr: 595000,
    size: "Box",
    origin: "Indonesia",
    category: "beer-cider",
    image: photo("bintang-radler-lemon-box"),
    imageAlt: "Box of Bintang Radler Lemon bottles with the MadeBrings emblem",
    packNote: "Box",
  },
  {
    id: "san-miguel-light-box",
    slug: "san-miguel-light-box",
    name: "San Miguel Light Box",
    summary: "24 × 330ml bottles of San Miguel Light.",
    description:
      "A box of San Miguel Light, 24 × 330ml. Message Made on WhatsApp to lock in the box and the drop-off.",
    priceIdr: 695000,
    size: "24 × 330ml",
    origin: "Philippines / Indonesia",
    category: "beer-cider",
    image: photo("san-miguel-light-box"),
    imageAlt: "Box of San Miguel Light 330ml bottles with the MadeBrings emblem",
    packNote: "Box",
  },
  {
    id: "smirnoff-ice-275",
    slug: "smirnoff-ice-275",
    name: "Smirnoff Ice 275ml",
    summary: "The original Ice. One 275ml bottle.",
    description:
      "A 275ml bottle of Smirnoff Ice. Ready to drink, no mixer. Six-packs and a box are listed if you need more than one.",
    priceIdr: 35000,
    size: "275ml",
    origin: "Indonesia",
    category: "rtd",
    image: photo("smirnoff-ice-275"),
    imageAlt: "Smirnoff Ice 275ml bottle with the MadeBrings emblem",
    featured: true,
  },
  {
    id: "smirnoff-ice-green-apple-275",
    slug: "smirnoff-ice-green-apple-275",
    name: "Smirnoff Ice Green Apple 275ml",
    summary: "Green apple Ice in a 275ml bottle.",
    description:
      "A 275ml bottle of Smirnoff Ice Green Apple. Chat us to confirm flavour stock — the apple runs out faster than the original.",
    priceIdr: 35000,
    size: "275ml",
    origin: "Indonesia",
    category: "rtd",
    image: photo("smirnoff-ice-green-apple-275"),
    imageAlt: "Smirnoff Ice Green Apple 275ml bottle with the MadeBrings emblem",
  },
  {
    id: "smirnoff-ice-pink-lemonade-275",
    slug: "smirnoff-ice-pink-lemonade-275",
    name: "Smirnoff Ice Pink Lemonade 275ml",
    summary: "Pink lemonade Ice. One bottle.",
    description:
      "A 275ml bottle of Smirnoff Ice Pink Lemonade. WhatsApp us if you want a six-pack of this flavour instead.",
    priceIdr: 35000,
    size: "275ml",
    origin: "Indonesia",
    category: "rtd",
    image: photo("smirnoff-ice-pink-lemonade-275"),
    imageAlt: "Smirnoff Ice Pink Lemonade 275ml bottle with the MadeBrings emblem",
  },
  {
    id: "smirnoff-ice-275-6pack",
    slug: "smirnoff-ice-275-6pack",
    name: "Smirnoff Ice 275ml – 6 Pack",
    summary: "Six original Ice bottles.",
    description:
      "Six 275ml bottles of Smirnoff Ice. Chat us to confirm the pack, then we arrange delivery to your door.",
    priceIdr: 200000,
    size: "6 × 275ml",
    origin: "Indonesia",
    category: "rtd",
    image: photo("smirnoff-ice-275-6pack"),
    imageAlt: "Smirnoff Ice 275ml six-pack with the MadeBrings emblem",
    packNote: "6 pack",
  },
  {
    id: "smirnoff-ice-green-apple-275-6pack",
    slug: "smirnoff-ice-green-apple-275-6pack",
    name: "Smirnoff Ice Green Apple 275ml – 6 Pack",
    summary: "Six green apple Ice bottles.",
    description:
      "Six 275ml bottles of Smirnoff Ice Green Apple. Message us to make sure this flavour is on the shelf today.",
    priceIdr: 200000,
    size: "6 × 275ml",
    origin: "Indonesia",
    category: "rtd",
    image: photo("smirnoff-ice-green-apple-275-6pack"),
    imageAlt: "Smirnoff Ice Green Apple 275ml six-pack with the MadeBrings emblem",
    packNote: "6 pack",
  },
  {
    id: "smirnoff-ice-pink-lemonade-275-6pack",
    slug: "smirnoff-ice-pink-lemonade-275-6pack",
    name: "Smirnoff Ice Pink Lemonade 275ml – 6 Pack",
    summary: "Six pink lemonade Ice bottles.",
    description:
      "Six 275ml bottles of Smirnoff Ice Pink Lemonade. Chat us to confirm, then we can deliver with the rest of your order.",
    priceIdr: 200000,
    size: "6 × 275ml",
    origin: "Indonesia",
    category: "rtd",
    image: photo("smirnoff-ice-pink-lemonade-275-6pack"),
    imageAlt: "Smirnoff Ice Pink Lemonade 275ml six-pack with the MadeBrings emblem",
    packNote: "6 pack",
  },
  {
    id: "smirnoff-ice-box",
    slug: "smirnoff-ice-box",
    name: "Smirnoff Ice Box",
    summary: "A full box of Smirnoff Ice.",
    description:
      "A box of Smirnoff Ice. Tell us on WhatsApp which flavour you want in the box if you are mixing original, apple, and pink.",
    priceIdr: 675000,
    size: "Box",
    origin: "Indonesia",
    category: "rtd",
    image: photo("smirnoff-ice-box"),
    imageAlt: "Box of Smirnoff Ice with the MadeBrings emblem",
    packNote: "Box",
  },
  {
    id: "schweppes-tonic-250",
    slug: "schweppes-tonic-250",
    name: "Schweppes Tonic Water 250ml Can",
    summary: "One tonic can for G&T or a vodka mix.",
    description:
      "A 250ml can of Schweppes Tonic Water. A full can box is listed if you are mixing for a crowd. Chat us to add it to a drinks run.",
    priceIdr: 12000,
    size: "250ml",
    origin: "Indonesia",
    category: "mixers",
    image: photo("schweppes-tonic-250"),
    imageAlt: "Schweppes Tonic Water 250ml can with the MadeBrings emblem",
  },
  {
    id: "schweppes-ginger-ale-250",
    slug: "schweppes-ginger-ale-250",
    name: "Schweppes Ginger Ale 250ml Can",
    summary: "Ginger ale in a 250ml can.",
    description:
      "A 250ml can of Schweppes Ginger Ale. Good next to dark spirits or on its own. WhatsApp us if you want the box instead.",
    priceIdr: 12000,
    size: "250ml",
    origin: "Indonesia",
    category: "mixers",
    image: photo("schweppes-ginger-ale-250"),
    imageAlt: "Schweppes Ginger Ale 250ml can with the MadeBrings emblem",
  },
  {
    id: "coca-cola-original-250",
    slug: "coca-cola-original-250",
    name: "Coca-Cola Original 250ml Can",
    summary: "A small original Coke can.",
    description:
      "A 250ml can of Coca-Cola Original. Add a box if you are filling a villa fridge. Chat us to confirm.",
    priceIdr: 9000,
    size: "250ml",
    origin: "Indonesia",
    category: "mixers",
    image: photo("coca-cola-original-250"),
    imageAlt: "Coca-Cola Original 250ml can with the MadeBrings emblem",
    featured: true,
  },
  {
    id: "coca-cola-zero-250",
    slug: "coca-cola-zero-250",
    name: "Coca-Cola Zero 250ml Can",
    summary: "Coke Zero in a 250ml can.",
    description:
      "A 250ml can of Coca-Cola Zero. The box is listed separately. Message us to add it to your order.",
    priceIdr: 10000,
    size: "250ml",
    origin: "Indonesia",
    category: "mixers",
    image: photo("coca-cola-zero-250"),
    imageAlt: "Coca-Cola Zero 250ml can with the MadeBrings emblem",
  },
  {
    id: "sprite-250",
    slug: "sprite-250",
    name: "Sprite Can 250ml",
    summary: "A 250ml Sprite can.",
    description:
      "A 250ml can of Sprite. Chat us if you want a mixed mixer run with cola and tonic.",
    priceIdr: 9000,
    size: "250ml",
    origin: "Indonesia",
    category: "mixers",
    image: photo("sprite-250"),
    imageAlt: "Sprite 250ml can with the MadeBrings emblem",
  },
  {
    id: "limes-x3",
    slug: "limes-x3",
    name: "Limes x 3",
    summary: "Three limes. Enough for a round of drinks.",
    description:
      "Three fresh limes. Add them next to beer, gin, or a vodka mixer. WhatsApp us so we pick firm fruit the same day.",
    priceIdr: 12000,
    size: "3 pieces",
    origin: "Bali",
    category: "mixers",
    image: photo("limes-x3"),
    imageAlt: "Three limes with the MadeBrings emblem",
  },
  {
    id: "red-bull-can",
    slug: "red-bull-can",
    name: "Red Bull Can",
    summary: "One Red Bull can.",
    description:
      "A can of Red Bull. Chat us to add it to a night order with beer or Ice.",
    priceIdr: 25000,
    size: "Can",
    origin: "Indonesia",
    category: "mixers",
    image: photo("red-bull-can"),
    imageAlt: "Red Bull can with the MadeBrings emblem",
  },
  {
    id: "schweppes-tonic-box",
    slug: "schweppes-tonic-box",
    name: "Schweppes Tonic Water Can Box",
    summary: "A box of tonic cans.",
    description:
      "A box of Schweppes Tonic Water cans. Tell us on WhatsApp if you are mixing a villa bar so we can add limes and ice.",
    priceIdr: 200000,
    size: "Box",
    origin: "Indonesia",
    category: "mixers",
    image: photo("schweppes-tonic-box"),
    imageAlt: "Box of Schweppes Tonic Water cans with the MadeBrings emblem",
    packNote: "Box",
  },
  {
    id: "schweppes-ginger-ale-box",
    slug: "schweppes-ginger-ale-box",
    name: "Schweppes Ginger Ale Can Box",
    summary: "A box of ginger ale cans.",
    description:
      "A box of Schweppes Ginger Ale cans. Chat us to confirm the box and delivery.",
    priceIdr: 200000,
    size: "Box",
    origin: "Indonesia",
    category: "mixers",
    image: photo("schweppes-ginger-ale-box"),
    imageAlt: "Box of Schweppes Ginger Ale cans with the MadeBrings emblem",
    packNote: "Box",
  },
  {
    id: "coca-cola-zero-box",
    slug: "coca-cola-zero-box",
    name: "Coca-Cola Zero Can Box",
    summary: "A box of Coke Zero cans.",
    description:
      "A box of Coca-Cola Zero cans. Message us to add original Coke or Sprite in the same drop.",
    priceIdr: 200000,
    size: "Box",
    origin: "Indonesia",
    category: "mixers",
    image: photo("coca-cola-zero-box"),
    imageAlt: "Box of Coca-Cola Zero cans with the MadeBrings emblem",
    packNote: "Box",
  },
  {
    id: "sprite-box",
    slug: "sprite-box",
    name: "Sprite Can Box",
    summary: "A box of Sprite cans.",
    description:
      "A box of Sprite cans. Chat us to confirm and we will bring it with the rest of the order.",
    priceIdr: 200000,
    size: "Box",
    origin: "Indonesia",
    category: "mixers",
    image: photo("sprite-box"),
    imageAlt: "Box of Sprite cans with the MadeBrings emblem",
    packNote: "Box",
  },
  {
    id: "coca-cola-original-box",
    slug: "coca-cola-original-box",
    name: "Coca-Cola Original Can Box",
    summary: "A box of original Coke cans.",
    description:
      "A box of Coca-Cola Original cans. WhatsApp us for a mixed mixer box if you want Zero and Sprite as well.",
    priceIdr: 200000,
    size: "Box",
    origin: "Indonesia",
    category: "mixers",
    image: photo("coca-cola-original-box"),
    imageAlt: "Box of Coca-Cola Original cans with the MadeBrings emblem",
    packNote: "Box",
  },
  {
    id: "rent-ice-box-3-days",
    slug: "rent-ice-box-3-days",
    name: "Rent Ice Box – 3 Days",
    summary: "An esky for three days. Ice sold separately.",
    description:
      "Rent a hard ice box for three days. Add 4kg ice bags from the same shelf. Chat us with your villa address and when you need it dropped and collected.",
    priceIdr: 150000,
    size: "3 days",
    origin: "Bali",
    category: "ice-water",
    image: photo("rent-ice-box-3-days"),
    imageAlt: "Rental ice box with the MadeBrings emblem",
    featured: true,
  },
  {
    id: "ice-bag-4kg",
    slug: "ice-bag-4kg",
    name: "4kg Ice Bag",
    summary: "A 4kg bag of ice. Add more if the esky is large.",
    description:
      "One 4kg bag of ice. Order extra bags if you are filling a rented ice box or a villa fridge. Message us so we pack it last.",
    priceIdr: 25000,
    size: "4kg",
    origin: "Bali",
    category: "ice-water",
    image: photo("ice-bag-4kg"),
    imageAlt: "4kg bag of ice with the MadeBrings emblem",
  },
  {
    id: "aqua-mineral-600-box",
    slug: "aqua-mineral-600-box",
    name: "Aqua Mineral Water 600ml – Box (24 pcs)",
    summary: "A box of 24 × 600ml Aqua bottles.",
    description:
      "A box of Aqua mineral water, 24 bottles of 600ml. Useful next to beer so the table is not only alcohol. Chat us to add it to the delivery.",
    priceIdr: 65000,
    size: "24 × 600ml",
    origin: "Indonesia",
    category: "ice-water",
    image: photo("aqua-mineral-600-box"),
    imageAlt: "Box of Aqua 600ml bottles with the MadeBrings emblem",
    packNote: "Box",
  },
  {
    id: "large-potato-crisps",
    slug: "large-potato-crisps",
    name: "Large Potato Crisps",
    summary: "A large bag of potato crisps for the table.",
    description:
      "A large bag of potato crisps. Chat us to throw it in with the drinks so the table is ready when the bottles arrive.",
    priceIdr: 22000,
    size: "Large bag",
    origin: "Indonesia",
    category: "snacks",
    image: photo("large-potato-crisps"),
    imageAlt: "Large bag of potato crisps with the MadeBrings emblem",
  },
  {
    id: "pringles-original-110g",
    slug: "pringles-original-110g",
    name: "Pringles 110g – Original",
    summary: "Original Pringles, 110g tube.",
    description:
      "A 110g tube of Original Pringles. WhatsApp us if you want more than one flavour — we will tell you what is on the shelf.",
    priceIdr: 38000,
    size: "110g",
    origin: "Indonesia",
    category: "snacks",
    image: photo("pringles-original-110g"),
    imageAlt: "Pringles Original 110g with the MadeBrings emblem",
  },
];

export function getCategories() {
  return categories;
}

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getProducts() {
  return products;
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}

export function getProductsByCategory(category: CategoryId) {
  return products.filter((product) => product.category === category);
}

export function getFeaturedProducts() {
  return products.filter((product) => product.featured);
}

export function searchProducts(query: string) {
  const needle = query.trim().toLowerCase();
  if (!needle) return products;
  return products.filter((product) =>
    [product.name, product.summary, product.origin, product.size]
      .filter(Boolean)
      .join(" ")
      .toLowerCase()
      .includes(needle),
  );
}

export type { Category, CategoryId, Product };
