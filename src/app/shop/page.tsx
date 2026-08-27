import { ShopBrowser } from "@/components/shop-browser";
import { getProducts } from "@/lib/commerce";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Shop",
  description:
    "Browse beer, bottled drinks, mixers, ice, and snacks from MadeBrings, a family shop in Abianbase, Badung, Bali. Chat WhatsApp to confirm stock and arrange delivery.",
  path: "/shop",
});

export default function ShopPage() {
  const products = getProducts();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <ShopBrowser
        heading="The shop"
        intro="This is what we usually keep. It is a small shelf, not a warehouse. Add what you want to your list, then send it on WhatsApp so we can check stock and quote delivery. Delivery is not free."
        products={products}
      />
    </div>
  );
}
