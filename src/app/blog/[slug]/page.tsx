import { notFound } from "next/navigation";
import { BlogArticle } from "@/components/blog-article";
import { getBlogPost, getBlogPosts } from "@/lib/blog";
import { getRequestLocale } from "@/lib/request-locale";
import { pageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getBlogPosts("en").map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const locale = await getRequestLocale();
  const post = getBlogPost(slug, locale);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
    type: "article",
    locale,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const locale = await getRequestLocale();
  const post = getBlogPost(slug, locale);
  if (!post) notFound();
  return <BlogArticle post={post} locale={locale} />;
}
