import { BlogGrid } from "@/components/blog-card";
import { LocaleLink } from "@/components/locale-link";
import { TranslatedText } from "@/components/translated";
import { getBlogPosts } from "@/lib/blog";
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

export default function BlogIndexPage() {
  const posts = getBlogPosts();

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <p className="text-xs font-medium tracking-[0.22em] text-primary/70 uppercase">
        <TranslatedText k="blogIndexKicker" />
      </p>
      <h1 className="mt-3 font-heading text-5xl tracking-wide text-primary sm:text-6xl">
        <TranslatedText k="blogIndexTitle" />
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-foreground/80">
        <TranslatedText k="blogIndexBody" />
      </p>
      <p className="mt-4">
        <LocaleLink
          href="/alcohol-delivery-service"
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          <TranslatedText k="footerDelivery" />
        </LocaleLink>
      </p>
      <div className="mt-10">
        <BlogGrid posts={posts} />
      </div>
    </div>
  );
}
