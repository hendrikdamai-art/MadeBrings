import { JsonLd, localBusinessJsonLd, webPageJsonLd } from "@/components/json-ld";
import { HomeContent } from "@/components/home-content";
import { getBlogPosts, localizePost } from "@/lib/blog";
import { getCategories, getFeaturedProducts } from "@/lib/commerce";
import { getRequestLocale } from "@/lib/request-locale";
import { seoCopy } from "@/lib/seo-copy";
import { SEO_CONTENT_UPDATED } from "@/lib/seo-paths";

export default async function HomePage() {
  const locale = await getRequestLocale();
  const featured = getFeaturedProducts();
  const categories = getCategories();
  const posts = getBlogPosts()
    .map((post) => localizePost(post, locale))
    .slice(0, 6);
  const copy = seoCopy[locale];

  return (
    <>
      <JsonLd
        data={[
          localBusinessJsonLd(locale),
          webPageJsonLd({
            name: copy.homeTitle,
            description: copy.homeDescription,
            path: "/",
            locale,
            dateModified: SEO_CONTENT_UPDATED,
          }),
        ]}
      />
      <HomeContent featured={featured} categories={categories} posts={posts} />
    </>
  );
}
