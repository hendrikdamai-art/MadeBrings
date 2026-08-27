import Link from "next/link";
import { Banknote, MessageCircle } from "lucide-react";
import { BlogGrid } from "@/components/blog-card";
import { HomeHero } from "@/components/home-hero";
import { JsonLd, localBusinessJsonLd } from "@/components/json-ld";
import { ProductGrid } from "@/components/product-grid";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { buttonVariants } from "@/components/ui/button";
import { getBlogPosts } from "@/lib/blog";
import { getCategories, getFeaturedProducts } from "@/lib/commerce";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const featured = getFeaturedProducts();
  const categories = getCategories();
  const posts = getBlogPosts();

  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      <HomeHero />

      <section className="border-y border-primary/10 bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-6 sm:grid-cols-3">
          {[
            {
              icon: Banknote,
              title: "Great local prices",
              text: "We are a small shop, not a beach-club mark-up.",
            },
            {
              icon: MessageCircle,
              title: "Chat first to confirm",
              text: "WhatsApp us before you count on an item from the shelf.",
            },
            {
              icon: WhatsAppIcon,
              title: "Cash or transfer",
              text: "Pay cash or bank transfer after we confirm your order.",
            },
          ].map((item) => (
            <div key={item.title} className="flex gap-3">
              <item.icon className="mt-0.5 size-5 shrink-0" />
              <div>
                <p className="font-heading text-xl tracking-wide">{item.title}</p>
                <p className="text-sm text-primary-foreground/80">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium tracking-[0.22em] text-primary/70 uppercase">
              What we keep
            </p>
            <h2 className="font-heading text-4xl tracking-wide text-primary">The shelves</h2>
          </div>
          <Link href="/shop" className="text-sm font-medium text-primary underline-offset-4 hover:underline">
            See everything
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="rounded-2xl border border-primary/10 bg-card p-5 transition-transform hover:-translate-y-0.5"
            >
              <p className="font-heading text-2xl tracking-wide text-primary">
                {category.name}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="mb-8">
          <p className="text-xs font-medium tracking-[0.22em] text-primary/70 uppercase">
            From the cooler
          </p>
          <h2 className="font-heading text-4xl tracking-wide text-primary">
            A few things people ask for
          </h2>
        </div>
        <ProductGrid products={featured} />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium tracking-[0.22em] text-primary/70 uppercase">
              Journal
            </p>
            <h2 className="font-heading text-4xl tracking-wide text-primary">
              Bali holiday, guides, and arak
            </h2>
          </div>
          <Link href="/blog" className="text-sm font-medium text-primary underline-offset-4 hover:underline">
            All posts
          </Link>
        </div>
        <BlogGrid posts={posts} />
      </section>

      <section className="bg-primary/95 text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-4xl tracking-wide">How to buy from us</h2>
            <ol className="mt-6 space-y-4 text-primary-foreground/90">
              <li>
                <span className="font-heading text-2xl">1.</span> Browse the shop.
              </li>
              <li>
                <span className="font-heading text-2xl">2.</span> Tap{" "}
                <strong>ORDER NOW</strong> on what you want.
              </li>
              <li>
                <span className="font-heading text-2xl">3.</span> Chat first to
                confirm your order.
              </li>
              <li>
                <span className="font-heading text-2xl">4.</span> Pay cash or bank
                transfer after we confirm.
              </li>
            </ol>
          </div>
          <div className="rounded-3xl bg-[#f8ecd8] p-6 text-primary">
            <h3 className="font-heading text-3xl tracking-wide">Find the shop</h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              We are in {siteConfig.address.display}. Come by if you are nearby, or
              pin us on Google Maps and chat first so Made knows you are coming.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={siteConfig.social.maps}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-10 rounded-full px-4 font-heading tracking-wide",
                )}
              >
                Google Maps
              </a>
              <Link
                href="/about"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-10 rounded-full border-primary/30 px-4 font-heading tracking-wide",
                )}
              >
                About the family shop
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
