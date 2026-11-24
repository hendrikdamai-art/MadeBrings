import { notFound } from "next/navigation";
import { ShopBrowser } from "@/components/shop-browser";
import { VillaHowTo } from "@/components/villa-howto";
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
      locale === "id"
        ? `${name} — antar ke Canggu & Bali`
        : `${category.name} delivery in Canggu & Bali`,
    description:
      locale === "id"
        ? `${intro} Jasa antar alkohol MadeBrings ke Canggu, Seminyak, Kuta, Ubud, dan Tanah Lot.`
        : `${category.description} Alcohol delivery from MadeBrings to Canggu, Seminyak, Kuta, Ubud, and Tanah Lot.`,
    path: category.href,
    locale,
  });
}

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const products = getProductsByCategory(category.id);
  const locale = await getRequestLocale();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <ShopBrowser products={products} activeCategory={category.slug} />
      {category.id === "beer-cider" ? <VillaHowTo locale={locale} /> : null}
    </div>
  );
}
