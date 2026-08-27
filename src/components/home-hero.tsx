import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Star } from "lucide-react";
import { WhatsAppIcon, whatsappButtonClass, ORDER_NOW_LABEL } from "@/components/whatsapp-icon";
import { buttonVariants } from "@/components/ui/button";
import { defaultWhatsappGreeting, siteConfig, whatsappHref } from "@/lib/site";
import { cn } from "@/lib/utils";

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero-scooter.jpg"
          alt="MadeBrings courier in an udeng on a scooter, holding a box with the MadeBrings emblem"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[18%_center] sm:object-left"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background sm:via-transparent sm:to-background/80 lg:bg-gradient-to-r lg:from-transparent lg:via-background/15 lg:to-background" />
      </div>

      <div className="relative mx-auto grid min-h-[34rem] max-w-6xl items-end px-4 pb-10 pt-44 sm:min-h-[38rem] sm:items-center sm:py-16 lg:min-h-[42rem] lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div className="relative hidden h-full min-h-[22rem] lg:block">
          <article className="absolute top-6 left-0 w-[15.5rem] rounded-2xl border border-primary/10 bg-[#f8ecd8]/95 p-3 shadow-[0_18px_40px_-24px_rgba(8,56,32,0.55)] backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-sm tracking-wide text-primary-foreground">
                VG
              </span>
              <div className="min-w-0">
                <p className="text-sm font-medium text-primary">Villa guest, Canggu</p>
                <div className="mt-0.5 flex gap-0.5 text-[#c4a15a]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-current" />
                  ))}
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-foreground/75">
                  Cold drinks at the villa, neighborhood prices.
                </p>
              </div>
            </div>
          </article>

          <article className="absolute right-2 bottom-10 w-[13.5rem] rounded-2xl border border-primary/10 bg-[#f8ecd8]/95 p-4 shadow-[0_18px_40px_-24px_rgba(8,56,32,0.55)] backdrop-blur-sm">
            <div className="flex gap-3">
              <div className="flex flex-col items-center pt-1">
                <MapPin className="size-4 text-primary" />
                <span className="my-1 w-px flex-1 border-l border-dashed border-primary/35" />
                <MapPin className="size-4 text-[#25D366]" />
              </div>
              <div className="min-w-0 space-y-3 text-xs">
                <div>
                  <p className="font-heading text-sm tracking-wide text-primary">Origin</p>
                  <p className="text-foreground/70">Abianbase shop</p>
                </div>
                <div>
                  <p className="font-heading text-sm tracking-wide text-primary">Destination</p>
                  <p className="text-foreground/70">Your villa</p>
                </div>
              </div>
            </div>
            <a
              href={whatsappHref(defaultWhatsappGreeting)}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "sm" }),
                whatsappButtonClass,
                "mt-3 h-8 w-full rounded-full font-heading tracking-wide",
              )}
            >
              {ORDER_NOW_LABEL}
            </a>
          </article>
        </div>

        <div className="space-y-6 rounded-3xl bg-background/85 p-5 backdrop-blur-[2px] sm:bg-background/70 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
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
      </div>
    </section>
  );
}
