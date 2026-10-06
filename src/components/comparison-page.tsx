import Link from "next/link";
import { BookingCta } from "@/components/booking-cta";
import { FaqList } from "@/components/faq-list";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  JsonLd,
  webPageJsonLd,
} from "@/components/json-ld";
import { SpeakableAnswer } from "@/components/speakable-answer";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/locale-path";
import { comparisonCopy } from "@/lib/comparison-page";
import { BOOKING_PATH, COMPARE_PATH, finishSpeakable } from "@/lib/seo-pages";

export function ComparisonPage({ locale }: { locale: Locale }) {
  const copy = comparisonCopy[locale];

  return (
    <article>
      <JsonLd
        data={webPageJsonLd({
          locale,
          name: copy.h1,
          description: copy.metaDescription,
          path: COMPARE_PATH,
        })}
      />
      <JsonLd data={faqJsonLd(copy.faqs)} />
      <JsonLd
        data={breadcrumbJsonLd(
          [
            { name: "Home", path: "/" },
            { name: copy.h1, path: COMPARE_PATH },
          ],
          locale,
        )}
      />

      <header className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-xs font-medium tracking-[0.22em] text-primary/70 uppercase">
          {copy.kicker}
        </p>
        <h1 className="mt-3 max-w-4xl font-heading text-5xl tracking-wide text-primary sm:text-6xl">
          {copy.h1}
        </h1>
        <div className="mt-6">
          <SpeakableAnswer>{finishSpeakable(locale, copy.speakable)}</SpeakableAnswer>
        </div>
        {copy.intro.map((paragraph) => (
          <p
            key={paragraph.slice(0, 48)}
            className="mt-4 max-w-3xl text-lg leading-relaxed text-foreground/80"
          >
            {paragraph}
          </p>
        ))}
      </header>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="font-heading text-4xl tracking-wide text-primary">
          {copy.methodTitle}
        </h2>
        <ol className="mt-6 space-y-3 text-base text-foreground/85">
          {copy.method.map((item, index) => (
            <li key={item}>
              <span className="font-heading text-2xl text-primary">{index + 1}.</span> {item}
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="font-heading text-4xl tracking-wide text-primary">
          {copy.tableTitle}
        </h2>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-primary/10 bg-card">
          <table className="w-full min-w-[40rem] text-left text-sm">
            <thead>
              <tr className="border-b border-primary/10 text-primary">
                <th className="px-4 py-3 font-heading text-lg tracking-wide">Check</th>
                <th className="px-4 py-3 font-heading text-lg tracking-wide">MadeBrings</th>
                <th className="px-4 py-3 font-heading text-lg tracking-wide">
                  Typical 24/7 claim
                </th>
              </tr>
            </thead>
            <tbody>
              {copy.rows.map((row) => (
                <tr key={row.criterion} className="border-t border-primary/10 align-top">
                  <td className="px-4 py-3 font-medium">{row.criterion}</td>
                  <td className="px-4 py-3 text-foreground/80">{row.madebrings}</td>
                  <td className="px-4 py-3 text-foreground/80">
                    {row.typical24h}
                    <span className="mt-2 block text-xs text-muted-foreground">
                      {row.sourceNote}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-6">
        <h2 className="font-heading text-4xl tracking-wide text-primary">
          {copy.limitsTitle}
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/80">
          {copy.limits.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-6">
          <Link
            href={localizedPath(locale, BOOKING_PATH)}
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            {locale === "id" ? "Ke halaman pesan" : "Go to the booking page"}
          </Link>
        </p>
      </section>

      <FaqList
        title={locale === "id" ? "Pertanyaan" : "Questions"}
        faqs={copy.faqs}
      />
      <BookingCta
        locale={locale}
        title={copy.ctaTitle}
        body={copy.ctaBody}
        shopLabel={locale === "id" ? "Halaman pesan" : "Alcohol delivery Bali"}
        waLabel={locale === "id" ? "WhatsApp toko" : "WhatsApp the shop"}
        secondaryHref={BOOKING_PATH}
      />
    </article>
  );
}
