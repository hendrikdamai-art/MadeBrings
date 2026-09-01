import { JsonLd, localBusinessJsonLd } from "@/components/json-ld";
import { HomeContent } from "@/components/home-content";
import { getBlogPosts } from "@/lib/blog";
import { getCategories, getFeaturedProducts } from "@/lib/commerce";
import { getRequestLocale } from "@/lib/request-locale";

export default async function HomePage() {
  const locale = await getRequestLocale();
  const featured = getFeaturedProducts();
  const categories = getCategories();
  const posts = getBlogPosts();

  return (
    <>
      <JsonLd data={localBusinessJsonLd(locale)} />
      <HomeContent featured={featured} categories={categories} posts={posts} />
    </>
  );
}
