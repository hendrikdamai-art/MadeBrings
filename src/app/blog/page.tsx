import { BlogGrid } from "@/components/blog-card";
import { JsonLd, webPageJsonLd } from "@/components/json-ld";
import { TranslatedText } from "@/components/translated";
import { getBlogPosts, localizePost } from "@/lib/blog";
import { getRequestLocale } from "@/lib/request-locale";
import { pageMetadata } from "@/lib/seo";
import { seoCopy } from "@/lib/seo-copy";

export async function generateMetadata() {
  const locale = await getRequestLocale();
  const copy = seoCopy[locale];
  return pageMetadata({
    title: copy.blogTitle,
    description: copy.blogDescription,
    path: "/blog",
    locale,
  });
}

export default async function BlogIndexPage() {
  const locale = await getRequestLocale();
  const posts = getBlogPosts().map((post) => localizePost(post, locale));
  const copy = seoCopy[locale];

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <JsonLd
        data={webPageJsonLd({
          name: copy.blogTitle,
          description: copy.blogDescription,
          path: "/blog",
          locale,
          dateModified: posts[0]?.dateModified ?? "2026-09-22",
        })}
      />
      <p className="text-xs font-medium tracking-[0.22em] text-primary/70 uppercase">
        <TranslatedText k="blogIndexKicker" />
      </p>
      <h1 className="mt-3 font-heading text-5xl tracking-wide text-primary sm:text-6xl">
        <TranslatedText k="blogIndexTitle" />
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-foreground/80">
        <TranslatedText k="blogIndexBody" />
      </p>
      <div className="mt-10">
        <BlogGrid posts={posts} />
      </div>
    </div>
  );
}
