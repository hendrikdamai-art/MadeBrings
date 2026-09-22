import { PressPageContent } from "@/components/press-page-content";
import { pressDateModified, pressPageMeta } from "@/lib/press-copy";
import { getRequestLocale } from "@/lib/request-locale";
import { pageMetadata } from "@/lib/seo";
import { PRESS_PATH } from "@/lib/seo-paths";

export async function generateMetadata() {
  const locale = await getRequestLocale();
  const copy = pressPageMeta[locale];
  return pageMetadata({
    title: copy.title,
    description: copy.description,
    path: PRESS_PATH,
    locale,
    dateModified: pressDateModified,
  });
}

export default async function PressPage() {
  const locale = await getRequestLocale();
  return <PressPageContent locale={locale} />;
}
