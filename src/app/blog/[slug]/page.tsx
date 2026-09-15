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
  const post = getBlogPost(slug);
  if (!post) return {};
  const locale = await getRequestLocale();
  const localized = localizeBlogPost(post, locale);
  return pageMetadata({
    title: localized.title,
    description: localized.description,
    path: `/blog/${post.slug}`,
    keywords: localized.keywords,
    type: "article",
    locale,
    dateModified: localized.dateModified,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const locale = await getRequestLocale();
  return <BlogArticle post={post} locale={locale} />;
}
