import { ContactContent } from "@/components/contact-content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact MadeBrings alcohol delivery in Abianbase, Badung, Bali. Chat on WhatsApp to order beer, liquor, or mixers and arrange delivery to your door.",
  path: "/contact",
  keywords: [
    "WhatsApp alcohol delivery Bali",
    "liquor delivery Abianbase",
    "beer delivery Badung",
  ],
});

export default function ContactPage() {
  return <ContactContent />;
}
