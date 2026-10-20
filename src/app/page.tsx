import { JsonLd, faqJsonLd, localBusinessJsonLd, webPageJsonLd } from "@/components/json-ld";
import { HomeCommercial } from "@/components/home-commercial";
import { HomeContent } from "@/components/home-content";
import { getBlogPosts } from "@/lib/blog";
import { getCategories, getFeaturedProducts } from "@/lib/commerce";
import { getRequestLocale } from "@/lib/request-locale";
import { sharedFaqs } from "@/lib/seo-pages";
import { seoCopy } from "@/lib/seo-copy";

export default async function HomePage() {
  const locale = await getRequestLocale();
  const featured = getFeaturedProducts();
  const categories = getCategories();
  const posts = getBlogPosts(locale).slice(0, 6);

  return (
    <>
      <JsonLd data={localBusinessJsonLd(locale)} />
      <JsonLd
        data={webPageJsonLd({
          locale,
          name: seoCopy[locale].homeTitle,
          description: seoCopy[locale].homeDescription,
          path: "/",
        })}
      />
      <JsonLd data={faqJsonLd(sharedFaqs[locale])} />
      <HomeContent featured={featured} categories={categories} posts={posts} />
      <HomeCommercial locale={locale} />
    </>
  );
}
