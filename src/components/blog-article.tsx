import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { BlogGrid } from "@/components/blog-card";
import { buttonVariants } from "@/components/ui/button";
import { blogJsonLd, getRelatedPosts, type BlogPost } from "@/lib/blog";
import { cn } from "@/lib/utils";

export function BlogArticle({ post }: { post: BlogPost }) {
  const related = getRelatedPosts(post.slug);

  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      <JsonLd data={blogJsonLd(post)} />
      <p className="text-sm text-muted-foreground">
        <Link href="/blog" className="hover:text-primary">
          Blog
        </Link>
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
                  <Link
                    href={section.link.href}
                    className="font-medium text-primary underline-offset-4 hover:underline"
                  >
                    {section.link.label}
                  </Link>
                )}
              </p>
            ) : null}
          </section>
        ))}
      </div>
      <div className="mt-12 rounded-3xl bg-primary p-6 text-primary-foreground">
        <h2 className="font-heading text-3xl tracking-wide">Chat first to confirm your order</h2>
        <p className="mt-2 text-sm text-primary-foreground/80">
          MadeBrings is a family shop in Abianbase. Tell us what you need on WhatsApp
          before you count on the shelf.
        </p>
        <Link
          href="/shop"
          className={cn(
            buttonVariants({ size: "lg" }),
            "mt-4 h-11 rounded-full px-5 font-heading text-lg tracking-wide",
          )}
        >
          Open the shop
        </Link>
      </div>
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
