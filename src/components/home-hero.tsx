import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WhatsAppIcon, whatsappButtonClass, ORDER_NOW_LABEL } from "@/components/whatsapp-icon";
import { buttonVariants } from "@/components/ui/button";
import { defaultWhatsappGreeting, siteConfig, whatsappHref } from "@/lib/site";
import { cn } from "@/lib/utils";

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero-courier.jpg"
          alt="MadeBrings courier in an udeng on a scooter, holding a box with the MadeBrings emblem"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[92%_center] lg:object-[100%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/75 to-transparent lg:bg-gradient-to-r lg:from-background lg:from-0% lg:via-background/85 lg:via-[38%] lg:to-transparent lg:to-[62%]" />
      </div>

      <div className="relative mx-auto grid min-h-[32rem] max-w-6xl items-center gap-8 px-4 py-12 sm:min-h-[36rem] lg:min-h-[42rem] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:py-20">
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
            shelf, then chat first to confirm your order. Pay cash or bank transfer.
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
                buttonVariants({ size: "lg" }),
                whatsappButtonClass,
                "h-11 rounded-full px-5 font-heading text-lg tracking-wide",
              )}
            >
              <WhatsAppIcon data-icon="inline-start" className="size-4" />
              {ORDER_NOW_LABEL}
            </a>
          </div>
        </div>
        <div className="hidden min-h-[18rem] lg:block" aria-hidden="true" />
      </div>
    </section>
  );
}
