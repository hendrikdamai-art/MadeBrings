import Image from "next/image";
import { BookingCta } from "@/components/booking-cta";
import { FaqList } from "@/components/faq-list";
import { JsonLd, breadcrumbJsonLd, faqJsonLd, webPageJsonLd } from "@/components/json-ld";
import { BlogGrid } from "@/components/blog-card";
import { LocaleLink } from "@/components/locale-link";
import { SpeakableAnswer } from "@/components/speakable-answer";
import { blogJsonLd, getRelatedPosts, type BlogPost } from "@/lib/blog";
import type { Locale } from "@/lib/i18n";
import { BOOKING_PATH } from "@/lib/seo-pages";

export function BlogArticle({
  post,
  locale = "en",
}: {
  post: BlogPost;
  locale?: Locale;
}) {
  const related = getRelatedPosts(post.slug, locale);
  const bookingPath = post.bookingPath ?? BOOKING_PATH;

  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      <JsonLd data={blogJsonLd(post)} />
      <JsonLd
        data={webPageJsonLd({
          locale,
          name: post.title,
          description: post.description,
          path: `/blog/${post.slug}`,
          dateModified: post.dateModified,
        })}
      />
      {post.faqs?.length ? <JsonLd data={faqJsonLd(post.faqs)} /> : null}
      <JsonLd
        data={breadcrumbJsonLd(
          [
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ],
          locale,
        )}
      />
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
      <p className="mt-4 text-lg leading-relaxed text-foreground/80">{post.excerpt}</p>
      <p className="mt-2 text-xs tracking-[0.18em] text-primary/70 uppercase">
        {post.readingMinutes} min read · Made Hendrik, Abianbase
        {post.query ? ` · ${post.query}` : ""}
      </p>
      {post.speakable ? (
        <div className="mt-6">
          <SpeakableAnswer>{post.speakable}</SpeakableAnswer>
        </div>
      ) : null}
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
      {post.inclusions?.length ? (
        <section className="mt-10 rounded-3xl border border-primary/10 bg-card p-6">
          <h2 className="font-heading text-3xl tracking-wide text-primary">
            {locale === "id" ? "Yang termasuk" : "What this order can include"}
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-base text-foreground/80">
            {post.inclusions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
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
      {post.faqs?.length ? (
        <div className="-mx-4">
          <FaqList
            title={locale === "id" ? "Pertanyaan" : "Questions before you book"}
            faqs={post.faqs}
          />
        </div>
      ) : null}
      <div className="-mx-4 mt-8">
        <BookingCta
          locale={locale}
          title={
            locale === "id"
              ? "Chat dulu untuk konfirmasi pesanan"
              : "Chat first to confirm your order"
          }
          body={
            locale === "id"
              ? "Toko keluarga di Abianbase. Kirim pin villa, lalu kami konfirmasi stok dan ongkir."
              : "Family shop in Abianbase. Send the villa pin, then we confirm stock and delivery cost."
          }
          shopLabel={
            locale === "id" ? "Halaman pesan" : "Alcohol delivery Bali"
          }
          waLabel={locale === "id" ? "WhatsApp toko" : "WhatsApp the shop"}
          secondaryHref={bookingPath}
        />
      </div>
      {related.length > 0 ? (
        <section className="mt-16">
          <h2 className="mb-6 font-heading text-3xl tracking-wide text-primary">
            {post.intent === "commercial"
              ? locale === "id"
                ? "Panduan antar lain"
                : "More delivery guides"
              : locale === "id"
                ? "Dari jurnal"
                : "More from the journal"}
          </h2>
          <BlogGrid posts={related} />
        </section>
      ) : null}
    </article>
  );
}
