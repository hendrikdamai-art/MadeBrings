import { BookingBand } from "@/components/booking-band";
import { FaqSection } from "@/components/faq-section";
import {
  breadcrumbJsonLd,
  JsonLd,
  localBusinessJsonLd,
  webPageJsonLd,
} from "@/components/json-ld";
import { SpeakableBlock } from "@/components/speakable-block";
import type { Locale } from "@/lib/i18n";
import {
  compareBookingHref,
  compareDateModified,
  comparePageMeta,
  getCompareCopy,
} from "@/lib/compare-copy";
import { COMPARE_PATH } from "@/lib/seo-paths";
import { whatsappHref } from "@/lib/site";

export function ComparePageContent({ locale }: { locale: Locale }) {
  const copy = getCompareCopy(locale);
  const meta = comparePageMeta[locale];
  const limitFaqs = copy.limits.map((limit, index) => ({
    question:
      locale === "id" ? `Batas ${index + 1}` : `Limit ${index + 1}`,
    answer: limit,
  }));

  return (
    <article className="mx-auto max-w-4xl px-4 py-14">
      <JsonLd
        data={[
          localBusinessJsonLd(locale),
          webPageJsonLd({
            name: copy.h1,
            description: meta.description,
            path: COMPARE_PATH,
            locale,
            dateModified: compareDateModified,
          }),
          breadcrumbJsonLd(
            [
              { name: "Home", path: "/" },
              { name: copy.h1, path: COMPARE_PATH },
            ],
            locale,
          ),
        ]}
      />
      <p className="text-xs font-medium tracking-[0.22em] text-primary/70 uppercase">
        {copy.kicker}
      </p>
      <h1 className="mt-3 font-heading text-5xl tracking-wide text-primary sm:text-6xl">
        {copy.h1}
      </h1>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-foreground/80">
        {copy.lead}
      </p>
      <div className="mt-10">
        <SpeakableBlock>{copy.speakable}</SpeakableBlock>
      </div>
      <section className="mt-12 space-y-3">
        <h2 className="font-heading text-3xl tracking-wide text-primary">
          {copy.methodHeading}
        </h2>
        {copy.methodBody.map((paragraph) => (
          <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed text-foreground/80">
            {paragraph}
          </p>
        ))}
      </section>
      <section className="mt-12">
        <h2 className="font-heading text-3xl tracking-wide text-primary">
          {copy.sourcesHeading}
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-base">
          {copy.sources.map((source) => (
            <li key={source.href}>
              <a
                href={source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                {source.name}
              </a>
              {" — "}
              {source.note}
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-12">
        <h2 className="font-heading text-3xl tracking-wide text-primary">
          {copy.tableHeading}
        </h2>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-primary/10">
          <table className="w-full min-w-[40rem] text-left text-sm">
            <thead className="bg-primary text-primary-foreground">
              <tr>
                <th className="px-4 py-3 font-heading text-lg tracking-wide">
                  {copy.columns.feature}
                </th>
                <th className="px-4 py-3 font-heading text-lg tracking-wide">
                  {copy.columns.us}
                </th>
                <th className="px-4 py-3 font-heading text-lg tracking-wide">
                  {copy.columns.them}
                </th>
              </tr>
            </thead>
            <tbody>
              {copy.rows.map((row) => (
                <tr key={row.criterion} className="border-t border-primary/10 bg-card">
                  <td className="px-4 py-3 font-medium">{row.criterion}</td>
                  <td className="px-4 py-3">{row.madebrings}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.typicalCanggu}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <div className="mt-12">
        <FaqSection heading={copy.limitsHeading} faqs={limitFaqs} />
      </div>
      <div className="mt-12">
        <BookingBand
          title={copy.ctaHeading}
          body={copy.ctaBody}
          whatsappHref={whatsappHref()}
          whatsappLabel={locale === "id" ? "WhatsApp MadeBrings" : "WhatsApp MadeBrings"}
          secondaryHref={compareBookingHref}
          secondaryLabel={locale === "id" ? "Pesan antar alkohol" : "Book alcohol delivery"}
        />
      </div>
    </article>
  );
}
