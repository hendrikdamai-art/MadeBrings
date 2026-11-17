import Image from "next/image";
import { JsonLd, breadcrumbJsonLd, faqJsonLd } from "@/components/json-ld";
import { BlogGrid } from "@/components/blog-card";
import { LocaleLink } from "@/components/locale-link";
import { SpeakableAnswer } from "@/components/speakable-answer";
import { WhatsAppIcon, whatsappButtonClass } from "@/components/whatsapp-icon";
import { buttonVariants } from "@/components/ui/button";
import { blogJsonLd, getRelatedPosts, type BlogPost } from "@/lib/blog";
import { getProductById } from "@/lib/commerce";
import { formatIdr } from "@/lib/format";
import type { Locale } from "@/lib/i18n";
import { messages } from "@/lib/i18n";
import { whatsappHref } from "@/lib/site";
import { cn } from "@/lib/utils";

export function BlogArticle({
  post,
  locale = "en",
}: {
  post: BlogPost;
  locale?: Locale;
}) {
  const related = getRelatedPosts(post.slug);
  const t = messages[locale];
  const prices = (post.priceProductIds ?? [])
    .map((id) => getProductById(id))
    .filter((product): product is NonNullable<typeof product> => Boolean(product));
  const isCommercial = post.intent === "commercial";
  const orderHref = whatsappHref(t.waGreeting);

  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      <JsonLd data={blogJsonLd(post)} />
      <JsonLd
        data={breadcrumbJsonLd(
          [
            { name: "Home", path: "/" },
            { name: t.navBlog, path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ],
          locale,
        )}
      />
      {post.faqs?.length ? <JsonLd data={faqJsonLd(post.faqs)} /> : null}
      <p className="text-sm text-muted-foreground">
        <LocaleLink href="/blog" className="hover:text-primary">
          {t.navBlog}
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
      </p>
      {post.answer ? (
        <SpeakableAnswer className="mt-8" heading={t.moneyAnswerTitle}>
          {post.answer}
        </SpeakableAnswer>
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

      {prices.length > 0 ? (
        <section className="mt-12">
          <h2 className="font-heading text-3xl tracking-wide text-primary">
            {t.articlePrices}
          </h2>
          <ul className="mt-4 space-y-2 text-base">
            {prices.map((product) => (
              <li key={product.id} className="flex justify-between gap-4 border-b border-primary/10 py-2">
                <LocaleLink
                  href={`/product/${product.slug}`}
                  className="text-primary underline-offset-4 hover:underline"
                >
                  {product.name}
                </LocaleLink>
                <span className="shrink-0 font-medium">
                  {formatIdr(product.priceIdr)}
                </span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {post.inclusions?.length ? (
        <section className="mt-12">
          <h2 className="font-heading text-3xl tracking-wide text-primary">
            {t.articleIncluded}
          </h2>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-base">
            {post.inclusions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {post.faqs?.length ? (
        <section className="mt-12">
          <h2 className="font-heading text-3xl tracking-wide text-primary">
            {t.articleFaq}
          </h2>
          <dl className="mt-4 space-y-4">
            {post.faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="font-heading text-2xl tracking-wide text-primary">
                  {faq.question}
                </dt>
                <dd className="mt-1 text-base leading-relaxed text-foreground/80">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}

      <div className="mt-12 rounded-3xl bg-primary p-6 text-primary-foreground">
        <h2 className="font-heading text-3xl tracking-wide">
          {isCommercial ? t.articleBook : t.moneyTitle}
        </h2>
        <p className="mt-2 text-sm text-primary-foreground/80">
          {t.moneyLead}
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={orderHref}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              whatsappButtonClass,
              "h-11 rounded-full px-5 font-heading text-lg tracking-wide",
            )}
          >
            <WhatsAppIcon className="size-4" />
            {t.orderNow}
          </a>
          <LocaleLink
            href={post.bookingHref ?? "/shop"}
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-11 rounded-full bg-[#f8ecd8] px-5 font-heading text-lg tracking-wide text-primary hover:bg-white",
            )}
          >
            {post.bookingHref ? t.articleBook : t.articleShop}
          </LocaleLink>
        </div>
      </div>
      {related.length > 0 ? (
        <section className="mt-16">
          <h2 className="mb-6 font-heading text-3xl tracking-wide text-primary">
            {t.articleRelated}
          </h2>
          <BlogGrid posts={related.slice(0, 3)} />
        </section>
      ) : null}
    </article>
  );
}
