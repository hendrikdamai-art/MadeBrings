import { notFound } from "next/navigation";
import { ShopBrowser } from "@/components/shop-browser";
import { getCategories, getCategory, getProductsByCategory } from "@/lib/commerce";
import { categoryIntroKey, categoryNameKey, messages } from "@/lib/i18n";
import { getRequestLocale } from "@/lib/request-locale";
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
  const locale = await getRequestLocale();
  const name = messages[locale][categoryNameKey[category.id] ?? "navShop"];
  const intro = messages[locale][categoryIntroKey[category.id] ?? "shopIntro"];
  return pageMetadata({
    title:
      locale === "id" ? `${name} — antar di Bali` : `${category.name} delivery in Bali`,
    description:
      locale === "id"
        ? `${intro} Jasa antar alkohol MadeBrings di Abianbase, Badung.`
        : `${category.description} Alcohol delivery service from MadeBrings in Abianbase, Badung.`,
    path: category.href,
    locale,
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
