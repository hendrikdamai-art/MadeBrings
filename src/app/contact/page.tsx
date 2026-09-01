import { ContactContent } from "@/components/contact-content";
import { getRequestLocale } from "@/lib/request-locale";
import { pageMetadata } from "@/lib/seo";
import { seoCopy } from "@/lib/seo-copy";

export async function generateMetadata() {
  const locale = await getRequestLocale();
  const copy = seoCopy[locale];
  return pageMetadata({
    title: copy.contactTitle,
    description: copy.contactDescription,
    path: "/contact",
    locale,
  });
}

export default function ContactPage() {
  return <ContactContent />;
}
