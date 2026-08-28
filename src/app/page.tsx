import { JsonLd, localBusinessJsonLd } from "@/components/json-ld";
import { HomeContent } from "@/components/home-content";
import { getBlogPosts } from "@/lib/blog";
import { getCategories, getFeaturedProducts } from "@/lib/commerce";

export default function HomePage() {
  const featured = getFeaturedProducts();
  const categories = getCategories();
  const posts = getBlogPosts();

  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      <HomeContent featured={featured} categories={categories} posts={posts} />
    </>
  );
}
