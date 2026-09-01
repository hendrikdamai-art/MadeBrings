import { JsonLd, localBusinessJsonLd, webPageJsonLd } from "@/components/json-ld";
import { HomeContent } from "@/components/home-content";
import { getBlogPosts, localizeBlogPost } from "@/lib/blog";
import { getCategories, getFeaturedProducts } from "@/lib/commerce";
import { getRequestLocale } from "@/lib/request-locale";
import { CONTENT_UPDATED } from "@/lib/seo/facts";
import { seoCopy } from "@/lib/seo-copy";

export default async function HomePage() {
  const locale = await getRequestLocale();
  const featured = getFeaturedProducts();
  const categories = getCategories();
  const allPosts = getBlogPosts().map((post) => localizeBlogPost(post, locale));
  const posts = [
    ...allPosts.filter((post) => post.intent === "commercial").slice(0, 3),
    ...allPosts.filter((post) => post.intent !== "commercial").slice(0, 3),
  ];
  const copy = seoCopy[locale];

  return (
    <>
      <JsonLd data={localBusinessJsonLd(locale)} />
      <JsonLd
        data={webPageJsonLd({
          title: copy.homeTitle,
          description: copy.homeDescription,
          path: "/",
          locale,
          dateModified: CONTENT_UPDATED,
          speakable: false,
        })}
      />
      <HomeContent featured={featured} categories={categories} posts={posts} />
    </>
  );
}
