import { CommercialPageView } from "@/components/commercial-page-view";
import { JsonLd } from "@/components/json-ld";
import { CONTENT_DATE_MODIFIED, PRESS_PATH } from "@/lib/geo";
import { pressBookingText, pressPageCopy } from "@/lib/press-page";
import { getRequestLocale } from "@/lib/request-locale";
import { faqJsonLd, webPageJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { whatsappHref } from "@/lib/site";

export async function generateMetadata() {
  const locale = await getRequestLocale();
  const copy = pressPageCopy(locale);
  return pageMetadata({
    title: copy.title,
    description: copy.description,
    path: PRESS_PATH,
    keywords: copy.keywords,
    locale,
    dateModified: CONTENT_DATE_MODIFIED,
  });
}

export default async function PressPage() {
  const locale = await getRequestLocale();
  const copy = pressPageCopy(locale);
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          locale,
          path: PRESS_PATH,
          name: copy.h1,
          description: copy.description,
          datePublished: "2026-09-15",
          dateModified: CONTENT_DATE_MODIFIED,
          type: "AboutPage",
        })}
      />
      {faqJsonLd(copy.faqs) ? <JsonLd data={faqJsonLd(copy.faqs)} /> : null}
      <CommercialPageView copy={copy} whatsappHref={whatsappHref(pressBookingText(locale))} />
    </>
  );
}
