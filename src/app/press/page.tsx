import { PressPage } from "@/components/press-page";
import { pressCopy } from "@/lib/press-kit";
import { getRequestLocale } from "@/lib/request-locale";
import { pageMetadata } from "@/lib/seo";
import { PRESS_PATH } from "@/lib/seo-pages";

export async function generateMetadata() {
  const locale = await getRequestLocale();
  const copy = pressCopy[locale];
  return pageMetadata({
    title: copy.metaTitle,
    description: copy.metaDescription,
    path: PRESS_PATH,
    locale,
  });
}

export default async function PressKitPage() {
  const locale = await getRequestLocale();
  return <PressPage locale={locale} />;
}
