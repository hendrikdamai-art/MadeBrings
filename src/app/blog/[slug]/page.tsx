import { notFound } from "next/navigation";
import { BlogArticle } from "@/components/blog-article";
import { getBlogPost, getBlogPosts, localizeBlogPost } from "@/lib/blog";
import { getRequestLocale } from "@/lib/request-locale";
import { pageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const raw = getBlogPost(slug);
  if (!raw) return {};
  const locale = await getRequestLocale();
  const post = localizeBlogPost(raw, locale);
  return pageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
    type: "article",
    locale,
    dateModified: post.dateModified,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const raw = getBlogPost(slug);
  if (!raw) notFound();
  const locale = await getRequestLocale();
  const post = localizeBlogPost(raw, locale);
  return <BlogArticle post={post} locale={locale} />;
}
