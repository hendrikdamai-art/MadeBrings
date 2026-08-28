import { AboutContent } from "@/components/about-content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About our alcohol delivery service",
  description:
    "MadeBrings is a family alcohol delivery service in Abianbase, Badung, Bali, owned by Made Hendrik. Beer, liquor, and mixers to your door. WhatsApp checkout, cash or bank transfer.",
  path: "/about",
  keywords: [
    "alcohol delivery service Bali",
    "family liquor shop Abianbase",
    "Made Hendrik MadeBrings",
  ],
});

export default function AboutPage() {
  return <AboutContent />;
}
