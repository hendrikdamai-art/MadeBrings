import { cdnImage } from "./images";
import type { Category, CategoryId, Product } from "./types";

export const categories: Category[] = [
  {
    id: "beer-cider",
    slug: "beer-cider",
    name: "Beer & cider",
    shortName: "Beer",
    description:
      "Cold bottles and packs at neighborhood prices. Chat us before you come or order — stock moves.",
    href: "/shop/beer-cider",
  },
  {
    id: "bottled-drinks",
    slug: "bottled-drinks",
    name: "Bottled drinks",
    shortName: "Bottles",
    description:
      "A short shelf of bottles we keep for regulars. Ask Made on WhatsApp if you need something specific.",
    href: "/shop/bottled-drinks",
  },
  {
    id: "rtd",
    slug: "rtd",
    name: "Ready to drink",
    shortName: "RTD",
    description: "Cans and bottles you can open as they are. Good for villa nights without a full bar.",
    href: "/shop/rtd",
  },
  {
    id: "mixers",
    slug: "mixers",
    name: "Mixers & soft drinks",
    shortName: "Mixers",
    description: "Cola, tonic, soda, and juice to go with whatever you already have at home.",
    href: "/shop/mixers",
  },
  {
    id: "ice-water",
    slug: "ice-water",
    name: "Ice & water",
    shortName: "Ice",
    description: "Bags of ice and drinking water. Delivery is arranged on WhatsApp and is not free.",
    href: "/shop/ice-water",
  },
  {
    id: "snacks",
    slug: "snacks",
    name: "Snacks",
    shortName: "Snacks",
    description: "Crisps, nuts, and a freezer treat for when the drinks are already sorted.",
    href: "/shop/snacks",
  },
  {
    id: "everyday",
    slug: "everyday",
    name: "Everyday extras",
    shortName: "Everyday",
    description: "Small household bits people always forget until the mosquitoes come out.",
    href: "/shop/everyday",
  },
];

const products: Product[] = [
  {
    id: "bintang-330",
    slug: "bintang-330",
    name: "Bintang bottle 330ml",
    summary: "The Bali regular. Cold if we have it in the cooler.",
    description:
      "A 330ml bottle of Bintang pilsner. Price is for one bottle. Six-packs are listed separately. Message us on WhatsApp to confirm we still have cold stock before you order a run.",
    priceIdr: 14000,
    size: "330ml",
    origin: "Indonesia",
    category: "beer-cider",
    image: cdnImage("photo-1608270586620-248524c67de9"),
    imageAlt: "Green beer bottles on a table",
    featured: true,
  },
  {
    id: "bintang-crystal-330",
    slug: "bintang-crystal-330",
    name: "Bintang Crystal 330ml",
    summary: "Crisper Bintang for people who want a lighter pour.",
    description:
      "Bintang Crystal in a 330ml bottle. Chat first if you need more than a few — we keep a modest cooler, not a warehouse.",
    priceIdr: 16000,
    size: "330ml",
    origin: "Indonesia",
    category: "beer-cider",
    image: cdnImage("photo-1535958636474-b021ee887b13"),
    imageAlt: "Pilsner beer in a glass",
  },
  {
    id: "singaraja-330",
    slug: "singaraja-pilsner-330",
    name: "Singaraja pilsner 330ml",
    summary: "Local Bali beer at a local-shop price.",
    description:
      "Singaraja pilsner 330ml. A straightforward Bali beer we try to keep on the shelf because the price is honest.",
    priceIdr: 12000,
    size: "330ml",
    origin: "Bali, Indonesia",
    category: "beer-cider",
    image: cdnImage("photo-1571613316887-6f8d5cbf7ef7"),
    imageAlt: "Beer bottles in warm light",
    featured: true,
  },
  {
    id: "san-miguel-light-330",
    slug: "san-miguel-light-330",
    name: "San Miguel Light 330ml",
    summary: "Light lager, easy on a hot Abianbase afternoon.",
    description:
      "San Miguel Light 330ml bottle. Ask on WhatsApp if you want a mixed pack with Bintang or Singaraja.",
    priceIdr: 15000,
    size: "330ml",
    origin: "Philippines",
    category: "beer-cider",
    image: cdnImage("photo-1436076863939-06870fe779c2"),
    imageAlt: "Pint of lager beer",
  },
  {
    id: "sapporo-330",
    slug: "sapporo-premium-330",
    name: "Sapporo premium 330ml",
    summary: "Japanese lager when we have a case in.",
    description:
      "Sapporo Premium 330ml. This one comes and goes. Always check stock on WhatsApp before you count on it for a gathering.",
    priceIdr: 28000,
    size: "330ml",
    origin: "Japan",
    category: "beer-cider",
    image: cdnImage("photo-1535958636474-b021ee887b13"),
    imageAlt: "Beer bottles on a wooden bar",
  },
  {
    id: "bintang-6pack",
    slug: "bintang-330-six-pack",
    name: "Bintang 330ml six-pack",
    summary: "Six bottles. Better value than buying them one by one.",
    description:
      "Six 330ml Bintang bottles. Delivery is not included — we will quote a delivery cost on WhatsApp based on where you are staying.",
    priceIdr: 78000,
    size: "6 × 330ml",
    origin: "Indonesia",
    category: "beer-cider",
    image: cdnImage("photo-1608270586620-248524c67de9"),
    imageAlt: "A pack of beer bottles",
    featured: true,
    packNote: "6 bottles",
  },
  {
    id: "heineken-330",
    slug: "heineken-330",
    name: "Heineken 330ml",
    summary: "Green bottle lager when the cooler has it.",
    description:
      "Heineken 330ml. We keep a few on the shelf for visitors who ask for it. Message us to confirm before a large order.",
    priceIdr: 22000,
    size: "330ml",
    origin: "Netherlands",
    category: "beer-cider",
    image: cdnImage("photo-1571613316887-6f8d5cbf7ef7"),
    imageAlt: "Lager beer bottles",
  },
  {
    id: "somersby-330",
    slug: "somersby-apple-cider-330",
    name: "Somersby apple cider 330ml",
    summary: "Sweet apple cider for people who do not want beer.",
    description:
      "Somersby Apple Cider 330ml. Stock is smaller than beer, so please check with us on WhatsApp.",
    priceIdr: 25000,
    size: "330ml",
    category: "beer-cider",
    image: cdnImage("photo-1571613316887-6f8d5cbf7ef7"),
    imageAlt: "Cider bottles and apples",
  },
  {
    id: "smirnoff-ice-275",
    slug: "smirnoff-ice-275",
    name: "Smirnoff Ice 275ml",
    summary: "The original citrus ice. Sold by the bottle.",
    description:
      "Smirnoff Ice 275ml. If you want a six-pack, add that listing instead so we can check the crate.",
    priceIdr: 28000,
    size: "275ml",
    category: "rtd",
    image: cdnImage("photo-1551538827-9c037cb4f32a"),
    imageAlt: "Ready-to-drink bottles with citrus",
    featured: true,
  },
  {
    id: "smirnoff-ice-apple",
    slug: "smirnoff-ice-green-apple-275",
    name: "Smirnoff Ice green apple 275ml",
    summary: "Green apple flavour, same small bottle.",
    description:
      "Smirnoff Ice Green Apple 275ml. Chat us if you want a mix of original and apple in one delivery.",
    priceIdr: 28000,
    size: "275ml",
    category: "rtd",
    image: cdnImage("photo-1551538827-9c037cb4f32a"),
    imageAlt: "Green apple drink in a glass",
  },
  {
    id: "bali-gt-330",
    slug: "bali-gin-tonic-330",
    name: "Bali G&T can 330ml",
    summary: "A ready gin and tonic for villa fridges.",
    description:
      "330ml canned G&T. A simple option when you do not want to buy a full bottle and mixers. Confirm stock on WhatsApp — cans go quickly on weekends.",
    priceIdr: 35000,
    size: "330ml can",
    origin: "Bali",
    category: "rtd",
    image: cdnImage("photo-1514362545857-3bc16c4c7d1b"),
    imageAlt: "Gin and tonic with lime",
  },
  {
    id: "smirnoff-ice-6",
    slug: "smirnoff-ice-six-pack",
    name: "Smirnoff Ice 275ml six-pack",
    summary: "Six bottles. Tell us original, apple, or mixed.",
    description:
      "Six 275ml Smirnoff Ice bottles. Write your flavour mix in the WhatsApp note when you send the order list.",
    priceIdr: 155000,
    size: "6 × 275ml",
    category: "rtd",
    image: cdnImage("photo-1551538827-9c037cb4f32a"),
    imageAlt: "A group of ready-to-drink bottles",
    packNote: "6 bottles",
  },
  {
    id: "coca-cola-250",
    slug: "coca-cola-original-250",
    name: "Coca-Cola original 250ml can",
    summary: "Small can. Fine for one mixer or one thirst.",
    description:
      "250ml Coca-Cola original can. Boxes are available if we have a sealed carton — ask on WhatsApp.",
    priceIdr: 8000,
    size: "250ml",
    category: "mixers",
    image: cdnImage("photo-1629203851122-3726ecdf080e"),
    imageAlt: "Cola can on a table",
    featured: true,
  },
  {
    id: "coca-cola-zero-250",
    slug: "coca-cola-zero-250",
    name: "Coca-Cola Zero 250ml can",
    summary: "No sugar cola in a small can.",
    description:
      "250ml Coca-Cola Zero. Same neighborhood price as the original can.",
    priceIdr: 8000,
    size: "250ml",
    category: "mixers",
    image: cdnImage("photo-1554866585-cd94860890b7"),
    imageAlt: "Cola can close-up",
  },
  {
    id: "sprite-250",
    slug: "sprite-250",
    name: "Sprite 250ml can",
    summary: "Lemon-lime soda for mixing or drinking straight.",
    description:
      "250ml Sprite can. If you need a full box for a gathering, message us and we will see what is in the back.",
    priceIdr: 8000,
    size: "250ml",
    category: "mixers",
    image: cdnImage("photo-1622483767028-3f66f32aef97"),
    imageAlt: "Lemon-lime soda can",
  },
  {
    id: "schweppes-tonic-250",
    slug: "schweppes-tonic-250",
    name: "Schweppes tonic 250ml can",
    summary: "Tonic water. Say how many cans you need.",
    description:
      "Schweppes tonic water 250ml. We price these as a local shop, not a beach-club mini bar.",
    priceIdr: 9000,
    size: "250ml",
    category: "mixers",
    image: cdnImage("photo-1595981267035-7b04ca84a82d"),
    imageAlt: "Tonic water with ice and lime",
  },
  {
    id: "schweppes-ginger-250",
    slug: "schweppes-ginger-ale-250",
    name: "Schweppes ginger ale 250ml can",
    summary: "Ginger ale for mixing or an upset stomach.",
    description:
      "Schweppes ginger ale 250ml can. A small thing people always remember at the last minute — chat us and we can add it to a drinks run.",
    priceIdr: 9000,
    size: "250ml",
    category: "mixers",
    image: cdnImage("photo-1624517452488-04869289c4ca"),
    imageAlt: "Ginger ale poured over ice",
  },
  {
    id: "soda-330",
    slug: "polar-soda-water-330",
    name: "Soda water 330ml can",
    summary: "Plain soda water for highballs and lime.",
    description:
      "330ml soda water can. Tell us if you need a handful or a box so we can check the stack.",
    priceIdr: 8000,
    size: "330ml",
    category: "mixers",
    image: cdnImage("photo-1523362628745-0c100150b504"),
    imageAlt: "Clear soda water bottle",
  },
  {
    id: "orange-juice-1l",
    slug: "chilled-orange-juice-1l",
    name: "Chilled orange juice 1L",
    summary: "One litre, kept cold when the fridge has space.",
    description:
      "1 litre chilled orange juice. We do not guarantee it is ice-cold at pickup unless you ask us to set it aside.",
    priceIdr: 28000,
    size: "1L",
    category: "mixers",
    image: cdnImage("photo-1600271886742-f049cd451bba"),
    imageAlt: "Fresh orange juice in a glass",
  },
  {
    id: "mango-juice-1l",
    slug: "chilled-mango-juice-1l",
    name: "Chilled mango juice 1L",
    summary: "Sweet mango juice for breakfast or mixers.",
    description:
      "1 litre mango juice. Stock follows what the supplier dropped that week, so please confirm on WhatsApp.",
    priceIdr: 28000,
    size: "1L",
    category: "mixers",
    image: cdnImage("photo-1546173159-315724a31696"),
    imageAlt: "Mango juice in a glass",
  },
  {
    id: "aqua-1500",
    slug: "aqua-mineral-water-1500",
    name: "Aqua mineral water 1500ml",
    summary: "Big drinking water bottle for the villa table.",
    description:
      "Aqua 1500ml mineral water. Easy to add onto a drinks delivery. Delivery itself is not free — we will quote it in the chat.",
    priceIdr: 8000,
    size: "1500ml",
    origin: "Indonesia",
    category: "ice-water",
    image: cdnImage("photo-1523362628745-0c100150b504"),
    imageAlt: "Bottled mineral water",
    featured: true,
  },
  {
    id: "aqua-gallon",
    slug: "aqua-gallon-19l",
    name: "Aqua gallon 19L",
    summary: "Refill-size gallon. Ask if you need a dispenser.",
    description:
      "Aqua gallon 19L. We can bring it with a drinks order. Tell us in WhatsApp if you already have an empty to swap.",
    priceIdr: 22000,
    size: "19L",
    origin: "Indonesia",
    category: "ice-water",
    image: cdnImage("photo-1523362628745-0c100150b504"),
    imageAlt: "Large drinking water container",
  },
  {
    id: "ice-4kg",
    slug: "ice-bag-4kg",
    name: "Ice bag 4kg",
    summary: "Bagged ice. Melt time depends on the ride.",
    description:
      "A 4kg bag of ice. We do not offer free delivery, and ice should be arranged close to the time you need it. Message us with your area and when you want it.",
    priceIdr: 15000,
    size: "4kg",
    category: "ice-water",
    image: cdnImage("photo-1560008581-09826d1de69e"),
    imageAlt: "Bag of ice cubes",
    featured: true,
  },
  {
    id: "potato-crisps",
    slug: "large-potato-crisps",
    name: "Large potato crisps",
    summary: "A big bag for the table.",
    description:
      "Large potato crisps. Flavour depends on what we have that day — original or similar. Mention a preference in the chat.",
    priceIdr: 18000,
    size: "Large bag",
    category: "snacks",
    image: cdnImage("photo-1566478989037-eec170784d0b"),
    imageAlt: "Bowl of potato crisps",
  },
  {
    id: "pringles-original",
    slug: "pringles-original-110g",
    name: "Pringles original 110g",
    summary: "The tube people ask for by name.",
    description:
      "Pringles Original 110g. We keep a few tubes next to the beer because that is how the orders usually go.",
    priceIdr: 32000,
    size: "110g",
    category: "snacks",
    image: cdnImage("photo-1566478989037-eec170784d0b"),
    imageAlt: "Stack of potato chips",
  },
  {
    id: "cashews-35",
    slug: "roasted-cashews-35g",
    name: "Roasted salted cashews 35g",
    summary: "Small pack. Easy to throw in with drinks.",
    description:
      "35g roasted salted cashews. A cheap add-on so the drinks are not the only thing on the table.",
    priceIdr: 15000,
    size: "35g",
    category: "snacks",
    image: cdnImage("photo-1599599810769-bcde5a160d32"),
    imageAlt: "Roasted cashew nuts",
  },
  {
    id: "magnum-classic",
    slug: "magnum-classic",
    name: "Magnum classic",
    summary: "From the freezer. Say if you are far — it melts.",
    description:
      "Magnum Classic ice cream. Only add this to a delivery if you are close enough that it will survive the ride. We will be honest about that on WhatsApp.",
    priceIdr: 22000,
    size: "1 stick",
    category: "snacks",
    image: cdnImage("photo-1563805042-7684c019e1cb"),
    imageAlt: "Chocolate-covered ice cream",
  },
  {
    id: "baygon-coil",
    slug: "baygon-mosquito-coil",
    name: "Baygon mosquito coil",
    summary: "The coil everyone needs after dusk.",
    description:
      "Baygon mosquito coil. A small extra we keep because guests always forget it. Confirm we have a pack before you count on it.",
    priceIdr: 12000,
    size: "Pack",
    category: "everyday",
    image: cdnImage("photo-1544367567-0f2fcb009e0b"),
    imageAlt: "Tropical plants at dusk",
  },
  {
    id: "repellent-60",
    slug: "mosquito-repellent-60g",
    name: "Mosquito repellent 60g",
    summary: "Lotion or cream, depending on the supplier.",
    description:
      "60g mosquito repellent. Brand can vary with stock. If you need a specific one, ask Made on WhatsApp first.",
    priceIdr: 25000,
    size: "60g",
    category: "everyday",
    image: cdnImage("photo-1544367567-0f2fcb009e0b"),
    imageAlt: "Tropical leaves",
  },
  {
    id: "smirnoff-700",
    slug: "smirnoff-700",
    name: "Smirnoff 700ml",
    summary: "A standard 700ml bottle from the mixed shelf.",
    description:
      "Smirnoff 700ml. We keep a short bottled-drinks shelf rather than a full bar catalogue. Please message us to confirm the bottle is actually in the shop today.",
    priceIdr: 275000,
    size: "700ml",
    category: "bottled-drinks",
    image: cdnImage("photo-1514362545857-3bc16c4c7d1b"),
    imageAlt: "Clear spirit bottle with citrus",
    featured: true,
  },
  {
    id: "gordons-700",
    slug: "gordons-london-dry-700",
    name: "Gordon's London Dry 700ml",
    summary: "A 700ml bottle when the shelf has it.",
    description:
      "Gordon's London Dry 700ml. Stock is limited. Do not assume we have it — chat first, then we arrange cash or transfer and delivery.",
    priceIdr: 285000,
    size: "700ml",
    origin: "England",
    category: "bottled-drinks",
    image: cdnImage("photo-1614313511387-1436a4480ebb"),
    imageAlt: "Botanical bottled drink with herbs",
  },
  {
    id: "captain-morgan-750",
    slug: "captain-morgan-spiced-750",
    name: "Captain Morgan Spiced 750ml",
    summary: "Spiced bottle for cola and ice.",
    description:
      "Captain Morgan Spiced 750ml. Pair it with cola from the mixers shelf. We will confirm the bottle on WhatsApp before you pay.",
    priceIdr: 320000,
    size: "750ml",
    category: "bottled-drinks",
    image: cdnImage("photo-1514362545857-3bc16c4c7d1b"),
    imageAlt: "Dark bottled drink with ice",
  },
  {
    id: "cuervo-750",
    slug: "jose-cuervo-especial-750",
    name: "Jose Cuervo Especial 750ml",
    summary: "A 750ml bottle from the mixed drinks shelf.",
    description:
      "Jose Cuervo Especial 750ml. We are a small shop, so premium bottles are few. Ask before you plan a party around one bottle.",
    priceIdr: 550000,
    size: "750ml",
    origin: "Mexico",
    category: "bottled-drinks",
    image: cdnImage("photo-1527281400683-1aae777175f8"),
    imageAlt: "Amber bottled drink and lime",
  },
  {
    id: "two-islands-sb",
    slug: "two-islands-sauvignon-blanc",
    name: "Two Islands Sauvignon Blanc",
    summary: "A white bottle we keep when the supplier has it.",
    description:
      "Two Islands Sauvignon Blanc. Vintage and exact label can change. We will send a photo on WhatsApp if you want to see the bottle before paying.",
    priceIdr: 145000,
    size: "750ml",
    origin: "Australia / Bali",
    category: "bottled-drinks",
    image: cdnImage("photo-1510812431401-41d2bd2722f3"),
    imageAlt: "White wine bottle and glasses",
  },
  {
    id: "cape-discovery-brut",
    slug: "cape-discovery-brut-cuvee",
    name: "Cape Discovery Brut Cuvée",
    summary: "A sparkling bottle for small celebrations.",
    description:
      "Cape Discovery Brut Cuvée. Not a wine list — just a bottle we can often get. Confirm stock and we will arrange delivery for a fee.",
    priceIdr: 165000,
    size: "750ml",
    origin: "Margaret River / Bali",
    category: "bottled-drinks",
    image: cdnImage("photo-1470337458703-46ad1756a187"),
    imageAlt: "Sparkling wine being poured",
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
