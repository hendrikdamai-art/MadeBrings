import { ShopBrowser } from "@/components/shop-browser";
import { getProducts } from "@/lib/commerce";
import { getRequestLocale } from "@/lib/request-locale";
import { pageMetadata } from "@/lib/seo";
import { seoCopy } from "@/lib/seo-copy";

export async function generateMetadata() {
  const locale = await getRequestLocale();
  const copy = seoCopy[locale];
  return pageMetadata({
    title: copy.shopTitle,
    description: copy.shopDescription,
    path: "/shop",
    locale,
  });
}

export default function ShopPage() {
  const products = getProducts();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <ShopBrowser products={products} />
    </div>
  );
}
