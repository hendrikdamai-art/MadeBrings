import { getCommercialPosts } from "@/lib/blog-commercial";
import { BookCta } from "@/components/book-cta";
import { CatalogPrices } from "@/components/catalog-prices";
import { FaqSection } from "@/components/faq-section";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  JsonLd,
  localBusinessJsonLd,
  webPageJsonLd,
} from "@/components/json-ld";
import { LocaleLink } from "@/components/locale-link";
import { SpeakableBlock } from "@/components/speakable-block";
import type { Locale } from "@/lib/i18n";
import { inclusions, MONEY_PATH, notIncluded } from "@/lib/seo/facts";
import { moneyCopy, moneyDateModified } from "@/lib/seo/money";

export function MoneyPageContent({ locale }: { locale: Locale }) {
  const copy = moneyCopy[locale];
  const related = getCommercialPosts();

  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      <JsonLd data={localBusinessJsonLd(locale)} />
      <JsonLd
        data={webPageJsonLd({
          title: copy.title,
          description: copy.description,
          path: MONEY_PATH,
          locale,
          dateModified: moneyDateModified,
        })}
      />
      <JsonLd data={faqJsonLd(copy.faqs)} />
      <JsonLd
        data={breadcrumbJsonLd(
          [
            { name: "Home", path: "/" },
            { name: copy.h1, path: MONEY_PATH },
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
        <h2 className="font-heading text-3xl tracking-wide text-primary">{copy.areasTitle}</h2>
        <p className="mt-3 text-base leading-relaxed text-foreground/80">{copy.areasBody}</p>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-3xl tracking-wide text-primary">{copy.howTitle}</h2>
        <ol className="mt-6 space-y-5">
          {copy.steps.map((step) => (
            <li key={step.title} className="rounded-2xl border border-primary/10 bg-card p-5">
              <p className="font-heading text-2xl tracking-wide text-primary">{step.title}</p>
              <p className="mt-2 text-base leading-relaxed text-foreground/80">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <CatalogPrices title={copy.pricesTitle} body={copy.pricesBody} />

      <section className="mt-12 grid gap-6 sm:grid-cols-2">
        <div>
          <h2 className="font-heading text-3xl tracking-wide text-primary">
            {copy.inclusionsTitle}
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-base text-foreground/80">
            {inclusions[locale].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-heading text-3xl tracking-wide text-primary">
            {copy.notIncludedTitle}
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-base text-foreground/80">
            {notIncluded[locale].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <FaqSection title={copy.faqTitle} faqs={copy.faqs} />

      <section className="mt-12">
        <h2 className="font-heading text-3xl tracking-wide text-primary">{copy.relatedTitle}</h2>
        <ul className="mt-4 space-y-3">
          {related.map((post) => (
            <li key={post.slug}>
              <LocaleLink
                href={`/blog/${post.slug}`}
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                {post.title}
              </LocaleLink>
              <p className="text-sm text-muted-foreground">{post.excerpt}</p>
            </li>
          ))}
        </ul>
      </section>

      <BookCta
        locale={locale}
        title={copy.ctaTitle}
        body={copy.ctaBody}
        shopLabel={copy.shopCta}
        bookLabel={copy.bookCta}
      />
    </article>
  );
}
