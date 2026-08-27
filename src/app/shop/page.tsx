import { ShopBrowser } from "@/components/shop-browser";
import { getProducts } from "@/lib/commerce";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Shop",
  description:
    "Browse beer, bottled drinks, mixers, ice, and snacks from MadeBrings, a family shop in Abianbase, Badung, Bali. Chat first to confirm your order.",
  path: "/shop",
});

export default function ShopPage() {
  const products = getProducts();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <ShopBrowser
        heading="The shop"
        intro="This is what we usually keep. It is a small shelf, not a warehouse. Chat first to confirm your order — we will tell you what is actually here today."
        products={products}
      />
    </div>
  );
}
