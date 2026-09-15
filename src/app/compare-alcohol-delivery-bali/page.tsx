import { CommercialPageView } from "@/components/commercial-page-view";
import { JsonLd } from "@/components/json-ld";
import { comparePageCopy } from "@/lib/compare-page";
import { COMPARE_PATH, CONTENT_DATE_MODIFIED } from "@/lib/geo";
import { moneyBookingText } from "@/lib/money-page";
import { getRequestLocale } from "@/lib/request-locale";
import { faqJsonLd, webPageJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { whatsappHref } from "@/lib/site";

export async function generateMetadata() {
  const locale = await getRequestLocale();
  const copy = comparePageCopy(locale);
  return pageMetadata({
    title: copy.title,
    description: copy.description,
    path: COMPARE_PATH,
    keywords: copy.keywords,
    locale,
    dateModified: CONTENT_DATE_MODIFIED,
  });
}

export default async function ComparePage() {
  const locale = await getRequestLocale();
  const copy = comparePageCopy(locale);
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          locale,
          path: COMPARE_PATH,
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
