import { ComparePageContent } from "@/components/compare-page-content";
import { compareDateModified, comparePageMeta } from "@/lib/compare-copy";
import { getRequestLocale } from "@/lib/request-locale";
import { pageMetadata } from "@/lib/seo";
import { COMPARE_PATH } from "@/lib/seo-paths";

export async function generateMetadata() {
  const locale = await getRequestLocale();
  const copy = comparePageMeta[locale];
  return pageMetadata({
    title: copy.title,
    description: copy.description,
    path: COMPARE_PATH,
    locale,
    dateModified: compareDateModified,
  });
}

export default async function ComparePage() {
  const locale = await getRequestLocale();
  return <ComparePageContent locale={locale} />;
}
