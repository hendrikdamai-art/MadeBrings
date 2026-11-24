import {
  JsonLd,
  faqJsonLd,
  localBusinessJsonLd,
  webPageJsonLd,
} from "@/components/json-ld";
import { HomeContent } from "@/components/home-content";
import { getBlogPosts, getCommercialBlogPosts } from "@/lib/blog";
import { getCategories, getFeaturedProducts } from "@/lib/commerce";
import { MONEY_PAGE_MODIFIED, moneyFaqs } from "@/lib/delivery";
import { getRequestLocale } from "@/lib/request-locale";
import { seoCopy } from "@/lib/seo-copy";

export default async function HomePage() {
  const locale = await getRequestLocale();
  const featured = getFeaturedProducts();
  const categories = getCategories();
  const posts = getBlogPosts();
  const commercialPosts = getCommercialBlogPosts();
  const copy = seoCopy[locale];

  return (
    <>
      <JsonLd data={localBusinessJsonLd(locale)} />
      <JsonLd data={faqJsonLd(moneyFaqs[locale])} />
      <JsonLd
        data={webPageJsonLd({
          locale,
          path: "/",
          name: copy.homeTitle,
          description: copy.homeDescription,
          dateModified: MONEY_PAGE_MODIFIED,
        })}
      />
      <HomeContent
        featured={featured}
        categories={categories}
        posts={posts}
        commercialPosts={commercialPosts}
      />
    </>
  );
}
