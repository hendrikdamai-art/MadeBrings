import { MoneyPageContent } from "@/components/money-page-content";
import { getRequestLocale } from "@/lib/request-locale";
import { pageMetadata } from "@/lib/seo";
import { moneyDateModified, moneyPageMeta } from "@/lib/money-copy";
import { MONEY_PATH } from "@/lib/seo-paths";
import { whatsappHref } from "@/lib/site";

export async function generateMetadata() {
  const locale = await getRequestLocale();
  const copy = moneyPageMeta[locale];
  return pageMetadata({
    title: copy.title,
    description: copy.description,
    path: MONEY_PATH,
    locale,
    dateModified: moneyDateModified,
    keywords:
      locale === "id"
        ? ["jasa antar alkohol Bali", "antar bir Canggu", "antar alkohol Ubud"]
        : [
            "alcohol delivery Bali",
            "alcohol delivery Canggu",
            "alcohol delivery Seminyak",
            "alcohol delivery Ubud",
          ],
  });
}

export default async function AlcoholDeliveryPage() {
  const locale = await getRequestLocale();
  return (
    <MoneyPageContent
      locale={locale}
      orderHref={whatsappHref(
        locale === "id"
          ? "Halo MadeBrings, saya ingin pesan antar alkohol dari Abianbase."
          : "Hi MadeBrings, I would like to book alcohol delivery from Abianbase.",
      )}
    />
  );
}
