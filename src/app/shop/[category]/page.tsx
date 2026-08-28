import { notFound } from "next/navigation";
import { ShopBrowser } from "@/components/shop-browser";
import { getCategories, getCategory, getProductsByCategory } from "@/lib/commerce";
import { pageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return getCategories().map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return pageMetadata({
    title: `${category.name} delivery in Bali`,
    description: `${category.description} Alcohol delivery service from MadeBrings in Abianbase, Badung.`,
    path: category.href,
  });
}

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const products = getProductsByCategory(category.id);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <ShopBrowser products={products} activeCategory={category.slug} />
    </div>
  );
}
