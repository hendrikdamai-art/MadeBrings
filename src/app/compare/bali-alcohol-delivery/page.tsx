import { ComparisonPage } from "@/components/comparison-page";
import { comparisonCopy } from "@/lib/comparison-page";
import { getRequestLocale } from "@/lib/request-locale";
import { pageMetadata } from "@/lib/seo";
import { COMPARE_PATH } from "@/lib/seo-pages";

export async function generateMetadata() {
  const locale = await getRequestLocale();
  const copy = comparisonCopy[locale];
  return pageMetadata({
    title: copy.metaTitle,
    description: copy.metaDescription,
    path: COMPARE_PATH,
    locale,
  });
}

export default async function BaliAlcoholDeliveryComparePage() {
  const locale = await getRequestLocale();
  return <ComparisonPage locale={locale} />;
}
