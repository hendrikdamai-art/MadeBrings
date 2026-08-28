import { ShopBrowser } from "@/components/shop-browser";
import { getProducts } from "@/lib/commerce";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Shop beer, liquor & mixers",
  description:
    "Browse beer, liquor, mixers, ice, and snacks from MadeBrings, an alcohol delivery service in Abianbase, Badung, Bali. WhatsApp checkout and delivery to your door.",
  path: "/shop",
  keywords: [
    "alcohol delivery Bali",
    "beer delivery Bali",
    "liquor delivery Bali",
    "buy beer Abianbase",
  ],
});

export default function ShopPage() {
  const products = getProducts();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <ShopBrowser products={products} />
    </div>
  );
}
