import Image from "next/image";
import { JsonLd } from "@/components/json-ld";
import { BlogGrid } from "@/components/blog-card";
import { FaqSection } from "@/components/faq-section";
import { LocaleLink } from "@/components/locale-link";
import { OrderCta } from "@/components/order-cta";
import { SpeakableBlock } from "@/components/speakable-block";
import { buttonVariants } from "@/components/ui/button";
import {
  blogJsonLd,
  getRelatedPosts,
  localizeBlogPost,
  type BlogPost,
} from "@/lib/blog";
import { faqJsonLd, webPageJsonLd } from "@/lib/schema";
import { CONTENT_DATE_MODIFIED, MONEY_PATH } from "@/lib/geo";
import type { Locale } from "@/lib/i18n";
import { moneyBookingText } from "@/lib/money-page";
import { whatsappHref } from "@/lib/site";
import { cn } from "@/lib/utils";

export function BlogArticle({
  post,
  locale,
}: {
  post: BlogPost;
  locale: Locale;
}) {
  const localized = localizeBlogPost(post, locale);
  const related = getRelatedPosts(post.slug).map((item) => localizeBlogPost(item, locale));
  const bookingPath = localized.bookingPath ?? MONEY_PATH;
  const speakableTitle = locale === "id" ? "Jawaban langsung" : "Direct answer";
  const inclusionsTitle = locale === "id" ? "Yang termasuk" : "What this order includes";
  const ctaTitle =
    locale === "id" ? "Chat untuk konfirmasi pesanan" : "Chat first to confirm your order";
  const ctaBody =
    locale === "id"
      ? "MadeBrings toko keluarga di Abianbase. Tulis pin villa di WhatsApp sebelum mengandalkan rak."
      : "MadeBrings is a family shop in Abianbase. Tell us the villa pin on WhatsApp before you count on the shelf.";
  const bookLabel = locale === "id" ? "Pesan di WhatsApp" : "Order on WhatsApp";
  const shopLabel = locale === "id" ? "Buka halaman antar" : "Open the delivery page";

  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      <JsonLd data={blogJsonLd(post, locale)} />
      <JsonLd
        data={webPageJsonLd({
          locale,
          path: `/blog/${post.slug}`,
          name: localized.title,
          description: localized.description,
          datePublished: localized.datePublished,
          dateModified: localized.dateModified || CONTENT_DATE_MODIFIED,
        })}
      />
      {localized.faqs ? <JsonLd data={faqJsonLd(localized.faqs)} /> : null}
      <p className="text-sm text-muted-foreground">
        <LocaleLink href="/blog" className="hover:text-primary">
          Blog
        </LocaleLink>
        {" / "}
        {post.datePublished}
      </p>
      <h1 className="mt-3 font-heading text-4xl tracking-wide text-primary sm:text-5xl">
        {localized.title}
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-foreground/80">{localized.excerpt}</p>
      <p className="mt-2 text-xs tracking-[0.18em] text-primary/70 uppercase">
        {localized.readingMinutes} min read · Made Hendrik, Abianbase
      </p>
      <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-3xl bg-[#efe0c4]">
        <Image
          src={localized.heroImage}
          alt={localized.heroAlt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover"
        />
      </div>

      {localized.speakable ? (
        <div className="mt-10">
          <SpeakableBlock title={speakableTitle} text={localized.speakable} />
        </div>
      ) : null}

      {localized.inclusions ? (
        <section className="mt-10">
          <h2 className="font-heading text-3xl tracking-wide text-primary">{inclusionsTitle}</h2>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-base">
            {localized.inclusions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ) : null}

      <div className="mt-10 space-y-8 text-lg leading-relaxed text-foreground/85">
        {localized.sections.map((section) => (
          <section key={section.heading ?? section.paragraphs[0]?.slice(0, 24)}>
            {section.heading ? (
              <h2 className="mb-3 font-heading text-3xl tracking-wide text-primary">
                {section.heading}
              </h2>
            ) : null}
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="mt-3">
                {paragraph}
              </p>
            ))}
            {section.list ? (
              <ul className="mt-4 list-disc space-y-1 pl-5 text-base">
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            {section.link ? (
              <p className="mt-4">
                {section.link.href.startsWith("http") ? (
                  <a
                    href={section.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary underline-offset-4 hover:underline"
                  >
                    {section.link.label}
                  </a>
                ) : (
                  <LocaleLink
                    href={section.link.href}
                    className="font-medium text-primary underline-offset-4 hover:underline"
                  >
                    {section.link.label}
                  </LocaleLink>
                )}
              </p>
            ) : null}
          </section>
        ))}
      </div>

      {localized.faqs ? (
        <div className="mt-12">
          <FaqSection
            title={locale === "id" ? "Pertanyaan" : "Questions"}
            items={localized.faqs}
          />
        </div>
      ) : null}

      <div className="mt-12">
        {localized.intent === "commercial" ? (
          <OrderCta
            title={ctaTitle}
            body={ctaBody}
            whatsappHref={whatsappHref(moneyBookingText(locale))}
            bookLabel={bookLabel}
            shopLabel={shopLabel}
            shopHref={bookingPath}
          />
        ) : (
          <div className="rounded-3xl bg-primary p-6 text-primary-foreground">
            <h2 className="font-heading text-3xl tracking-wide">{ctaTitle}</h2>
            <p className="mt-2 text-sm text-primary-foreground/80">{ctaBody}</p>
            <LocaleLink
              href={MONEY_PATH}
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-4 h-11 rounded-full px-5 font-heading text-lg tracking-wide",
              )}
            >
              {shopLabel}
            </LocaleLink>
          </div>
        )}
      </div>
      {related.length > 0 ? (
        <section className="mt-16">
          <h2 className="mb-6 font-heading text-3xl tracking-wide text-primary">
            {locale === "id" ? "Tulisan lain" : "More from the journal"}
          </h2>
          <BlogGrid posts={related.slice(0, 3)} />
        </section>
      ) : null}
    </article>
  );
}
