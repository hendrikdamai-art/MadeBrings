import Image from "next/image";
import { BookCta } from "@/components/book-cta";
import { FaqSection } from "@/components/faq-section";
import { JsonLd, faqJsonLd, howToJsonLd, webPageJsonLd } from "@/components/json-ld";
import { BlogGrid } from "@/components/blog-card";
import { LocaleLink } from "@/components/locale-link";
import { SpeakableBlock } from "@/components/speakable-block";
import { blogJsonLd, getRelatedPosts, localizeBlogPost, type BlogPost } from "@/lib/blog";
import type { Locale } from "@/lib/i18n";
import { MONEY_PATH } from "@/lib/seo/facts";

export function BlogArticle({ post, locale = "en" }: { post: BlogPost; locale?: Locale }) {
  const related = getRelatedPosts(post.slug)
    .map((item) => localizeBlogPost(item, locale))
    .slice(0, 3);

  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      <JsonLd data={blogJsonLd(post)} />
      <JsonLd
        data={webPageJsonLd({
          title: post.title,
          description: post.description,
          path: `/blog/${post.slug}`,
          locale,
          dateModified: post.dateModified,
        })}
      />
      {post.faqs ? <JsonLd data={faqJsonLd(post.faqs)} /> : null}
      {post.slug === "villa-alcohol-delivery-whatsapp"
        ? (
          <JsonLd
            data={howToJsonLd({
              name: post.title,
              description: post.description,
              path: `/blog/${post.slug}`,
              locale,
              steps: post.sections
                .filter((section) => section.heading)
                .map((section) => ({
                  title: section.heading as string,
                  text: section.paragraphs.join(" "),
                })),
            })}
          />
        )
        : null}
      <p className="text-sm text-muted-foreground">
        <LocaleLink href="/blog" className="hover:text-primary">
          Blog
        </LocaleLink>
        {" / "}
        {post.datePublished}
      </p>
      <h1 className="mt-3 font-heading text-4xl tracking-wide text-primary sm:text-5xl">
        {post.title}
      </h1>
      {post.speakable ? (
        <SpeakableBlock className="mt-4 text-lg leading-relaxed text-foreground/80">
          {post.speakable}
        </SpeakableBlock>
      ) : (
        <p className="mt-4 text-lg leading-relaxed text-foreground/80">{post.excerpt}</p>
      )}
      <p className="mt-2 text-xs tracking-[0.18em] text-primary/70 uppercase">
        {post.readingMinutes} min read · Made Hendrik, Abianbase
        {post.intent === "commercial" ? " · Book via alcohol delivery" : ""}
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
      {post.inclusions ? (
        <section className="mt-10">
          <h2 className="font-heading text-3xl tracking-wide text-primary">
            {locale === "id" ? "Yang termasuk" : "Included in this order path"}
          </h2>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-base">
            {post.inclusions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-4">
            <LocaleLink
              href={MONEY_PATH}
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              {locale === "id"
                ? "Pesan di halaman jasa antar alkohol"
                : "Book on the alcohol delivery service page"}
            </LocaleLink>
          </p>
        </section>
      ) : null}
      {post.faqs ? (
        <FaqSection
          title={locale === "id" ? "FAQ" : "FAQs"}
          faqs={post.faqs}
        />
      ) : null}
      <BookCta
        locale={locale}
        title={
          locale === "id" ? "Chat dulu untuk konfirmasi pesanan" : "Chat first to confirm your order"
        }
        body={
          locale === "id"
            ? "MadeBrings toko keluarga di Abianbase. Kirim daftar dan pin villa di WhatsApp."
            : "MadeBrings is a family shop in Abianbase. Send your list and villa pin on WhatsApp."
        }
        shopLabel={locale === "id" ? "Lihat toko" : "Open the shop"}
        bookLabel={locale === "id" ? "PESAN SEKARANG" : "ORDER NOW"}
        showMoneyLink={post.intent === "commercial"}
      />
      {related.length > 0 ? (
        <section className="mt-16">
          <h2 className="mb-6 font-heading text-3xl tracking-wide text-primary">
            More from the journal
          </h2>
          <BlogGrid posts={related} />
        </section>
      ) : null}
    </article>
  );
}
