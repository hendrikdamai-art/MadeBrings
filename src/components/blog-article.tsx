import Image from "next/image";
import { BookingBand } from "@/components/booking-band";
import { FaqSection } from "@/components/faq-section";
import { faqJsonLd, JsonLd, webPageJsonLd } from "@/components/json-ld";
import { BlogGrid } from "@/components/blog-card";
import { LocaleLink } from "@/components/locale-link";
import { SpeakableBlock } from "@/components/speakable-block";
import {
  blogJsonLd,
  getRelatedPosts,
  type BlogPost,
} from "@/lib/blog";
import type { Locale } from "@/lib/i18n";
import { messages } from "@/lib/i18n";
import { MONEY_PATH } from "@/lib/seo-paths";
import { whatsappHref } from "@/lib/site";

export function BlogArticle({
  post,
  locale,
}: {
  post: BlogPost;
  locale: Locale;
}) {
  const related = getRelatedPosts(post.slug, locale).slice(0, 3);
  const copy = messages[locale];

  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      <JsonLd
        data={[
          blogJsonLd(post),
          webPageJsonLd({
            name: post.title,
            description: post.description,
            path: `/blog/${post.slug}`,
            locale,
            dateModified: post.dateModified,
          }),
          ...(post.faqs?.length ? [faqJsonLd(post.faqs)] : []),
        ]}
      />
      <p className="text-sm text-muted-foreground">
        <LocaleLink href="/blog" className="hover:text-primary">
          {copy.navBlog}
        </LocaleLink>
        {" / "}
        {post.datePublished}
      </p>
      <h1 className="mt-3 font-heading text-4xl tracking-wide text-primary sm:text-5xl">
        {post.title}
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-foreground/80">{post.excerpt}</p>
      <p className="mt-2 text-xs tracking-[0.18em] text-primary/70 uppercase">
        {post.readingMinutes} min · Made Hendrik, Abianbase
      </p>
      <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-3xl bg-[#efe0c4]">
        <Image
          src={post.heroImage}
          alt={post.heroAlt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover"
        />
      </div>
      {post.speakable ? (
        <div className="mt-10">
          <SpeakableBlock kicker={copy.blogSpeakableKicker}>
            {post.speakable}
          </SpeakableBlock>
        </div>
      ) : null}
      <div className="mt-10 space-y-8 text-lg leading-relaxed text-foreground/85">
        {post.sections.map((section) => (
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
      {post.inclusions?.length ? (
        <section className="mt-12">
          <h2 className="font-heading text-3xl tracking-wide text-primary">
            {copy.blogInclusions}
          </h2>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-base">
            {post.inclusions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ) : null}
      {post.faqs?.length ? (
        <div className="mt-12">
          <FaqSection heading={copy.blogFaq} faqs={post.faqs} />
        </div>
      ) : null}
      <div className="mt-12">
        <BookingBand
          title={copy.blogBook}
          body={
            locale === "id"
              ? "Toko keluarga di Abianbase. Chat stok dulu, lalu tunai atau transfer."
              : "Family shop in Abianbase. Chat stock first, then cash or transfer."
          }
          whatsappHref={whatsappHref(copy.waGreeting)}
          whatsappLabel={copy.orderNow}
          secondaryHref={post.bookingHref ?? MONEY_PATH}
          secondaryLabel={copy.blogBook}
        />
      </div>
      {related.length > 0 ? (
        <section className="mt-16">
          <h2 className="mb-6 font-heading text-3xl tracking-wide text-primary">
            {copy.journalAll}
          </h2>
          <BlogGrid posts={related} />
        </section>
      ) : null}
    </article>
  );
}
