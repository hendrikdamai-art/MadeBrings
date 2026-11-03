import Link from "next/link";
import { FaqList } from "@/components/faq-list";
import { SpeakableAnswer } from "@/components/speakable-answer";
import { formatIdr } from "@/lib/format";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/locale-path";
import { homeSeoCopy } from "@/lib/money-page";
import {
  BOOKING_PATH,
  SERVICE_AREAS,
  areaArticleHrefs,
  sharedFaqs,
  shelfPriceRows,
  type ServiceArea,
} from "@/lib/seo-pages";

function areaHref(area: ServiceArea) {
  if (area === "Abianbase") return BOOKING_PATH;
  return areaArticleHrefs[area];
}

export function HomeCommercial({ locale }: { locale: Locale }) {
  const copy = homeSeoCopy[locale];
  const prices = shelfPriceRows().slice(0, 6);
  const faqs = sharedFaqs[locale].slice(0, 5);

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SpeakableAnswer>{copy.speakable}</SpeakableAnswer>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <p className="text-xs font-medium tracking-[0.22em] text-primary/70 uppercase">
          {copy.areasKicker}
        </p>
        <h2 className="mt-2 font-heading text-4xl tracking-wide text-primary">
          {copy.areasTitle}
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-foreground/80">
          {copy.areasBody}
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_AREAS.map((area) => (
            <Link
              key={area}
              href={localizedPath(locale, areaHref(area))}
              className="rounded-2xl border border-primary/10 bg-card p-5 font-heading text-2xl tracking-wide text-primary transition-transform hover:-translate-y-0.5"
            >
              {area}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-6">
        <p className="text-xs font-medium tracking-[0.22em] text-primary/70 uppercase">
          {copy.pricesKicker}
        </p>
        <h2 className="mt-2 font-heading text-4xl tracking-wide text-primary">
          {copy.pricesTitle}
        </h2>
        <p className="mt-3 max-w-3xl text-sm text-muted-foreground">{copy.pricesNote}</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {prices.map((row) => (
            <li
              key={row.id}
              className="flex items-center justify-between rounded-2xl border border-primary/10 bg-card px-4 py-3 text-sm"
            >
              <span>
                {row.name}
                <span className="block text-xs text-muted-foreground">{row.size}</span>
              </span>
              <span className="font-medium">{formatIdr(row.priceIdr)}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6">
          <Link
            href={localizedPath(locale, BOOKING_PATH)}
            className="font-heading text-xl tracking-wide text-primary underline-offset-4 hover:underline"
          >
            {copy.moneyCta}
          </Link>
          <span className="mt-1 block text-sm text-muted-foreground">
            {copy.moneyCtaBody}
          </span>
        </p>
      </section>

      <FaqList title={copy.faqTitle} faqs={faqs} />
    </>
  );
}
