import { MoneyPageContent } from "@/components/money-page-content";
import { getRequestLocale } from "@/lib/request-locale";
import { pageMetadata } from "@/lib/seo";
import { CONTENT_UPDATED, MONEY_PATH } from "@/lib/seo/facts";
import { moneyCopy } from "@/lib/seo/money";

export async function generateMetadata() {
  const locale = await getRequestLocale();
  const copy = moneyCopy[locale];
  return pageMetadata({
    title: copy.title,
    description: copy.description,
    path: MONEY_PATH,
    keywords:
      locale === "id"
        ? ["jasa antar alkohol", "antar bir Bali", "delivery alkohol Canggu"]
        : [
            "alcohol delivery service",
            "alcohol near me",
            "alcohol delivery Bali",
            "alcohol delivery Canggu",
          ],
    locale,
    dateModified: CONTENT_UPDATED,
  });
}

export default async function AlcoholDeliveryServicePage() {
  const locale = await getRequestLocale();
  return <MoneyPageContent locale={locale} />;
}
