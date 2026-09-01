import { AboutContent } from "@/components/about-content";
import { getRequestLocale } from "@/lib/request-locale";
import { pageMetadata } from "@/lib/seo";
import { seoCopy } from "@/lib/seo-copy";

export async function generateMetadata() {
  const locale = await getRequestLocale();
  const copy = seoCopy[locale];
  return pageMetadata({
    title: copy.aboutTitle,
    description: copy.aboutDescription,
    path: "/about",
    locale,
  });
}

export default function AboutPage() {
  return <AboutContent />;
}
