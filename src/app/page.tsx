import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Banknote, MessageCircle, Truck } from "lucide-react";
import { JsonLd, localBusinessJsonLd } from "@/components/json-ld";
import { ProductGrid } from "@/components/product-grid";
import { buttonVariants } from "@/components/ui/button";
import { getCategories, getFeaturedProducts } from "@/lib/commerce";
import { defaultWhatsappGreeting, siteConfig, whatsappHref } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const featured = getFeaturedProducts();
  const categories = getCategories();

  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(8,56,32,0.12),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(108,125,95,0.16),transparent_40%)]" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
          <div className="space-y-6">
            <p className="text-xs font-medium tracking-[0.28em] text-primary/70 uppercase">
              Abianbase · Badung · Bali
            </p>
            <h1 className="font-heading text-5xl leading-[0.95] tracking-wide text-primary sm:text-7xl">
              A family shop.
              <br />
              Neighborhood prices.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-foreground/80">
              MadeBrings is a small local shop run by {siteConfig.owner}. Browse the
              shelf, then chat us on WhatsApp to check stock and arrange delivery.
              We do not offer free delivery. Pay cash or bank transfer.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/shop"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-11 rounded-full px-5 font-heading text-lg tracking-wide",
                )}
              >
                Browse the shop
                <ArrowRight data-icon="inline-end" />
              </Link>
              <a
                href={whatsappHref(defaultWhatsappGreeting)}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-11 rounded-full border-primary/30 px-5 font-heading text-lg tracking-wide",
                )}
              >
                <MessageCircle data-icon="inline-start" />
                Chat for stock
              </a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-8 rounded-full bg-primary/10 blur-2xl" />
            <Image
              src="/logo.png"
              alt="MadeBrings emblem with Made Hendrik"
              width={520}
              height={520}
              priority
              className="relative mx-auto w-full max-w-sm"
            />
          </div>
        </div>
      </section>

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
              title: "WhatsApp first",
              text: "Chat to confirm stock before you count on an item.",
            },
            {
              icon: Truck,
              title: "Delivery is not free",
              text: "We quote a delivery cost and arrange the ride in chat.",
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

      <section className="bg-primary/95 text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-4xl tracking-wide">How to buy from us</h2>
            <ol className="mt-6 space-y-4 text-primary-foreground/90">
              <li>
                <span className="font-heading text-2xl">1.</span> Browse the shop and
                add items to your WhatsApp list.
              </li>
              <li>
                <span className="font-heading text-2xl">2.</span> Send the list. We
                confirm what is actually in stock.
              </li>
              <li>
                <span className="font-heading text-2xl">3.</span> We quote delivery to
                your area. Delivery is not free.
              </li>
              <li>
                <span className="font-heading text-2xl">4.</span> Pay cash on delivery
                or by bank transfer. Then we bring it.
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
