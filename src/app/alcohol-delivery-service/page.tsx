import { CommercialPageView } from "@/components/commercial-page-view";
import { JsonLd, localBusinessJsonLd } from "@/components/json-ld";
import { faqJsonLd, webPageJsonLd } from "@/lib/schema";
import { CONTENT_DATE_MODIFIED, MONEY_PATH } from "@/lib/geo";
import { moneyBookingText, moneyPageCopy } from "@/lib/money-page";
import { getRequestLocale } from "@/lib/request-locale";
import { pageMetadata } from "@/lib/seo";
import { whatsappHref } from "@/lib/site";

export async function generateMetadata() {
  const locale = await getRequestLocale();
  const copy = moneyPageCopy(locale);
  return pageMetadata({
    title: copy.title,
    description: copy.description,
    path: MONEY_PATH,
    keywords: copy.keywords,
    locale,
    dateModified: CONTENT_DATE_MODIFIED,
  });
}

export default async function AlcoholDeliveryPage() {
  const locale = await getRequestLocale();
  const copy = moneyPageCopy(locale);
  return (
    <>
      <JsonLd data={localBusinessJsonLd(locale)} />
      <JsonLd
        data={webPageJsonLd({
          locale,
          path: MONEY_PATH,
          name: copy.h1,
          description: copy.description,
          datePublished: "2026-09-15",
          dateModified: CONTENT_DATE_MODIFIED,
        })}
      />
      {faqJsonLd(copy.faqs) ? <JsonLd data={faqJsonLd(copy.faqs)} /> : null}
      <CommercialPageView copy={copy} whatsappHref={whatsappHref(moneyBookingText(locale))} />
    </>
  );
}
