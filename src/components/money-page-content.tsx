import { BookingBand } from "@/components/booking-band";
import { FaqSection } from "@/components/faq-section";
import { BlogGrid } from "@/components/blog-card";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  JsonLd,
  localBusinessJsonLd,
  webPageJsonLd,
} from "@/components/json-ld";
import { LocaleLink } from "@/components/locale-link";
import { SpeakableBlock } from "@/components/speakable-block";
import { buttonVariants } from "@/components/ui/button";
import { formatIdr } from "@/lib/format";
import { getProductById } from "@/lib/commerce";
import type { Locale } from "@/lib/i18n";
import { localizePost, getCommercialPosts } from "@/lib/blog";
import {
  getMoneyCopy,
  moneyDateModified,
  moneyPageMeta,
  moneyPriceRows,
} from "@/lib/money-copy";
import { MONEY_PATH } from "@/lib/seo-paths";
import { whatsappHref } from "@/lib/site";
import { cn } from "@/lib/utils";

export function MoneyPageContent({
  locale,
  orderHref,
}: {
  locale: Locale;
  orderHref: string;
}) {
  const copy = getMoneyCopy(locale);
  const meta = moneyPageMeta[locale];
  const related = getCommercialPosts()
    .map((post) => localizePost(post, locale))
    .slice(0, 3);

  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      <JsonLd
        data={[
          localBusinessJsonLd(locale),
          webPageJsonLd({
            name: copy.h1,
            description: meta.description,
            path: MONEY_PATH,
            locale,
            dateModified: moneyDateModified,
          }),
          faqJsonLd(copy.faqs),
          breadcrumbJsonLd(
            [
              { name: "Home", path: "/" },
              { name: copy.h1, path: MONEY_PATH },
            ],
            locale,
          ),
        ]}
      />
      <p className="text-xs font-medium tracking-[0.22em] text-primary/70 uppercase">
        {copy.kicker}
      </p>
      <h1 className="mt-3 font-heading text-5xl leading-[0.95] tracking-wide text-primary sm:text-6xl">
        {copy.h1}
        <span className="mt-2 block text-4xl sm:text-5xl">{copy.h1Line2}</span>
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-foreground/80">{copy.lead}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={orderHref}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ size: "lg" }),
            "h-11 rounded-full bg-[#25d366] px-5 font-heading text-lg tracking-wide text-white hover:bg-[#1ebe5d]",
          )}
        >
          {copy.bookCta}
        </a>
        <LocaleLink
          href="/shop"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "h-11 rounded-full border-primary/30 px-5 font-heading text-lg tracking-wide",
          )}
        >
          {copy.browseShop}
        </LocaleLink>
      </div>

      <div className="mt-10">
        <SpeakableBlock>{copy.speakable}</SpeakableBlock>
      </div>

      <section className="mt-12 space-y-4">
        <h2 className="font-heading text-3xl tracking-wide text-primary">
          {copy.priceHeading}
        </h2>
        <p className="text-base leading-relaxed text-foreground/80">{copy.priceIntro}</p>
        <table className="w-full overflow-hidden rounded-2xl border border-primary/10 text-left text-sm">
          <tbody>
            {moneyPriceRows.map((row) => {
              const product = getProductById(row.id);
              return (
                <tr key={row.id} className="border-t border-primary/10 bg-card">
                  <td className="px-4 py-3">
                    {product ? (
                      <LocaleLink
                        href={`/product/${product.slug}`}
                        className="font-medium text-primary underline-offset-4 hover:underline"
                      >
                        {row.label[locale]}
                      </LocaleLink>
                    ) : (
                      row.label[locale]
                    )}
                  </td>
                  <td className="px-4 py-3 text-right font-medium">
                    {product ? formatIdr(product.priceIdr) : "—"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="font-heading text-3xl tracking-wide text-primary">
          {copy.inclusionsHeading}
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed">
          {copy.inclusions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="font-heading text-3xl tracking-wide text-primary">
          {copy.areasHeading}
        </h2>
        <p className="text-base leading-relaxed text-foreground/80">{copy.areasBody}</p>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="font-heading text-3xl tracking-wide text-primary">
          {copy.howHeading}
        </h2>
        <ol className="space-y-3 text-base leading-relaxed">
          {copy.steps.map((step, index) => (
            <li key={step}>
              <span className="font-heading text-2xl text-primary">{index + 1}.</span>{" "}
              {step}
            </li>
          ))}
        </ol>
      </section>

      <div className="mt-12">
        <FaqSection heading={copy.faqHeading} faqs={copy.faqs} />
      </div>

      <p className="mt-8 text-sm text-muted-foreground">{copy.honestNote}</p>

      <div className="mt-10">
        <BookingBand
          title={copy.bookCta}
          body={copy.lead}
          whatsappHref={whatsappHref(
            locale === "id"
              ? "Halo MadeBrings, saya ingin pesan antar alkohol dari Abianbase."
              : "Hi MadeBrings, I would like to book alcohol delivery from Abianbase.",
          )}
          whatsappLabel={copy.bookCta}
          secondaryHref="/shop"
          secondaryLabel={copy.browseShop}
        />
      </div>

      {related.length > 0 ? (
        <section className="mt-16">
          <h2 className="mb-6 font-heading text-3xl tracking-wide text-primary">
            {copy.relatedHeading}
          </h2>
          <BlogGrid posts={related} />
        </section>
      ) : null}
    </article>
  );
}
