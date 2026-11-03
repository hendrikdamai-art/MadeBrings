import { MoneyPage } from "@/components/money-page";
import { getRequestLocale } from "@/lib/request-locale";
import { pageMetadata } from "@/lib/seo";
import { moneyCopy } from "@/lib/money-page";
import { BOOKING_PATH } from "@/lib/seo-pages";

export async function generateMetadata() {
  const locale = await getRequestLocale();
  const copy = moneyCopy[locale];
  return pageMetadata({
    title: copy.metaTitle,
    description: copy.metaDescription,
    path: BOOKING_PATH,
    keywords:
      locale === "id"
        ? [
            "jasa antar alkohol Bali",
            "antar alkohol Canggu",
            "antar bir Seminyak",
            "pesan alkohol WhatsApp",
          ]
        : [
            "alcohol delivery Bali",
            "alcohol delivery Canggu",
            "beer delivery Bali",
            "alcohol near me Bali",
          ],
    locale,
  });
}

export default async function AlcoholDeliveryBaliPage() {
  const locale = await getRequestLocale();
  return <MoneyPage locale={locale} />;
}
