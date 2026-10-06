import Link from "next/link";
import { BookingCta } from "@/components/booking-cta";
import { FaqList } from "@/components/faq-list";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  JsonLd,
  localBusinessJsonLd,
  webPageJsonLd,
} from "@/components/json-ld";
import { SpeakableAnswer } from "@/components/speakable-answer";
import { formatIdr } from "@/lib/format";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/locale-path";
import { moneyCopy, moneyFaqs } from "@/lib/money-page";
import { getCommercialBlogPosts } from "@/lib/commercial-articles";
import {
  BOOKING_PATH,
  COMPARE_PATH,
  SERVICE_AREAS,
  areaArticleHrefs,
  shelfPriceRows,
  type ServiceArea,
} from "@/lib/seo-pages";

function areaHref(area: ServiceArea) {
  if (area === "Abianbase") return BOOKING_PATH;
  return areaArticleHrefs[area];
}

export function MoneyPage({ locale }: { locale: Locale }) {
  const copy = moneyCopy[locale];
  const faqs = moneyFaqs(locale);
  const prices = shelfPriceRows();
  const related = getCommercialBlogPosts(locale);

  return (
    <article>
      <JsonLd data={localBusinessJsonLd(locale)} />
      <JsonLd
        data={webPageJsonLd({
          locale,
          name: copy.h1,
          description: copy.metaDescription,
          path: BOOKING_PATH,
        })}
      />
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd
        data={breadcrumbJsonLd(
          [
            { name: "Home", path: "/" },
            { name: copy.h1, path: BOOKING_PATH },
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
          <SpeakableAnswer>{copy.speakable}</SpeakableAnswer>
        </div>
        {copy.intro.map((paragraph) => (
          <p key={paragraph.slice(0, 40)} className="mt-4 max-w-3xl text-lg leading-relaxed text-foreground/80">
            {paragraph}
          </p>
        ))}
      </header>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 pb-12 lg:grid-cols-2">
        <div className="rounded-3xl border border-primary/10 bg-card p-6">
          <h2 className="font-heading text-3xl tracking-wide text-primary">
            {copy.inclusionsTitle}
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/80">
            {copy.inclusions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-primary/10 bg-card p-6">
          <h2 className="font-heading text-3xl tracking-wide text-primary">
            {copy.notIncludedTitle}
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/80">
            {copy.notIncluded.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="font-heading text-4xl tracking-wide text-primary">
          {copy.pricesTitle}
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          {copy.pricesNote}
        </p>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-primary/10 bg-card">
          <table className="w-full text-left text-sm">
            <tbody>
              {prices.map((row) => (
                <tr key={row.id} className="border-t border-primary/10 first:border-t-0">
                  <td className="px-4 py-3">
                    <Link
                      href={localizedPath(locale, `/product/${row.id.replace(/_/g, "-")}`)}
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      {row.name}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{row.size}</td>
                  <td className="px-4 py-3 text-right font-medium">{formatIdr(row.priceIdr)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="font-heading text-4xl tracking-wide text-primary">{copy.areasTitle}</h2>
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

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="font-heading text-4xl tracking-wide text-primary">{copy.howTitle}</h2>
        <ol className="mt-6 space-y-3 text-base text-foreground/85">
          {copy.howSteps.map((step, index) => (
            <li key={step}>
              <span className="font-heading text-2xl text-primary">{index + 1}.</span> {step}
            </li>
          ))}
        </ol>
        <p className="mt-6">
          <Link
            href={localizedPath(locale, COMPARE_PATH)}
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            {copy.compareCta}
          </Link>
        </p>
      </section>

      <FaqList title={copy.faqTitle} faqs={faqs} />

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="font-heading text-4xl tracking-wide text-primary">
          {copy.relatedTitle}
        </h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {related.map((post) => (
            <li key={post.slug}>
              <Link
                href={localizedPath(locale, `/blog/${post.slug}`)}
                className="block rounded-2xl border border-primary/10 bg-card p-5 hover:border-primary/30"
              >
                <p className="font-heading text-2xl tracking-wide text-primary">{post.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <BookingCta
        locale={locale}
        title={copy.ctaTitle}
        body={copy.ctaBody}
        shopLabel={copy.shopCta}
        waLabel={copy.waCta}
        secondaryHref="/shop"
      />
    </article>
  );
}
