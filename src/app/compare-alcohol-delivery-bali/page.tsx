import { BookCta } from "@/components/book-cta";
import { FaqSection } from "@/components/faq-section";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  JsonLd,
  webPageJsonLd,
} from "@/components/json-ld";
import { LocaleLink } from "@/components/locale-link";
import { SpeakableBlock } from "@/components/speakable-block";
import { comparisonCopy } from "@/lib/seo/comparison";
import { COMPARISON_PATH, CONTENT_UPDATED, MONEY_PATH } from "@/lib/seo/facts";
import { getRequestLocale } from "@/lib/request-locale";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const locale = await getRequestLocale();
  const copy = comparisonCopy[locale];
  return pageMetadata({
    title: copy.title,
    description: copy.description,
    path: COMPARISON_PATH,
    locale,
    dateModified: CONTENT_UPDATED,
  });
}

export default async function ComparisonPage() {
  const locale = await getRequestLocale();
  const copy = comparisonCopy[locale];

  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      <JsonLd
        data={webPageJsonLd({
          title: copy.title,
          description: copy.description,
          path: COMPARISON_PATH,
          locale,
        })}
      />
      <JsonLd data={faqJsonLd(copy.faqs)} />
      <JsonLd
        data={breadcrumbJsonLd(
          [
            { name: "Home", path: "/" },
            { name: copy.h1, path: COMPARISON_PATH },
          ],
          locale,
        )}
      />
      <p className="text-xs font-medium tracking-[0.22em] text-primary/70 uppercase">
        {copy.kicker}
      </p>
      <h1 className="mt-3 font-heading text-5xl tracking-wide text-primary sm:text-6xl">
        {copy.h1}
      </h1>
      <SpeakableBlock className="mt-6 text-lg leading-relaxed text-foreground/85">
        {copy.speakable}
      </SpeakableBlock>
      <p className="mt-4 text-base leading-relaxed text-foreground/80">{copy.lead}</p>

      <section className="mt-12">
        <h2 className="font-heading text-3xl tracking-wide text-primary">{copy.methodTitle}</h2>
        <p className="mt-3 text-base leading-relaxed text-foreground/80">{copy.methodBody}</p>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-3xl tracking-wide text-primary">
          {copy.dimensionsTitle}
        </h2>
        <div className="mt-6 space-y-4">
          {copy.dimensions.map((item) => (
            <div key={item.title} className="rounded-2xl border border-primary/10 bg-card p-5">
              <h3 className="font-heading text-2xl tracking-wide text-primary">{item.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-foreground/80">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-3xl tracking-wide text-primary">{copy.tableTitle}</h2>
        <p className="mt-3 text-sm text-muted-foreground">{copy.tableCaption}</p>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-primary/10 bg-card">
          <table className="w-full min-w-[40rem] text-left text-sm">
            <thead className="border-b border-primary/10 text-xs tracking-[0.12em] text-primary/70 uppercase">
              <tr>
                <th className="px-3 py-3 font-medium"> </th>
                <th className="px-3 py-3 font-medium">MadeBrings</th>
                <th className="px-3 py-3 font-medium">Minimarket</th>
                <th className="px-3 py-3 font-medium">Beach club</th>
              </tr>
            </thead>
            <tbody>
              {copy.rows.map((row) => (
                <tr key={row.factor} className="border-b border-primary/5 last:border-0 align-top">
                  <th className="px-3 py-3 font-medium text-primary">{row.factor}</th>
                  <td className="px-3 py-3">{row.madebrings}</td>
                  <td className="px-3 py-3 text-muted-foreground">{row.minimarket}</td>
                  <td className="px-3 py-3 text-muted-foreground">{row.beachClub}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-3xl tracking-wide text-primary">{copy.honestTitle}</h2>
        <p className="mt-3 text-base leading-relaxed text-foreground/80">{copy.honestBody}</p>
        <p className="mt-4">
          <LocaleLink
            href="/blog/beer-run-vs-minimarket-bali"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            {locale === "id"
              ? "Artikel komersial: kapan WhatsApp toko, kapan minimarket"
              : "Commercial article: when to WhatsApp a shop vs walk to a minimarket"}
          </LocaleLink>
        </p>
      </section>

      <FaqSection title={copy.faqTitle} faqs={copy.faqs} />
      <BookCta
        locale={locale}
        title={copy.ctaTitle}
        body={copy.ctaBody}
        shopLabel={locale === "id" ? "Lihat toko" : "Browse the shop"}
        bookLabel={locale === "id" ? "PESAN SEKARANG" : "ORDER NOW"}
        showMoneyLink
      />
      <p className="mt-6 text-sm">
        <LocaleLink href={MONEY_PATH} className="text-primary underline-offset-4 hover:underline">
          {locale === "id" ? "Kembali ke jasa antar alkohol" : "Back to the alcohol delivery service page"}
        </LocaleLink>
      </p>
    </article>
  );
}
