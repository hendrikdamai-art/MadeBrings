import Link from "next/link";
import { WhatsAppIcon, whatsappButtonClass } from "@/components/whatsapp-icon";
import { buttonVariants } from "@/components/ui/button";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/locale-path";
import { bookingWhatsappMessage } from "@/lib/seo-pages";
import { whatsappHref } from "@/lib/site";
import { cn } from "@/lib/utils";

export function BookingCta({
  locale,
  title,
  body,
  shopLabel,
  waLabel,
  area,
  secondaryHref = "/shop",
}: {
  locale: Locale;
  title: string;
  body: string;
  shopLabel: string;
  waLabel: string;
  area?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="font-heading text-4xl tracking-wide">{title}</h2>
        <p className="mt-3 max-w-2xl text-sm text-primary-foreground/80 sm:text-base">
          {body}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={whatsappHref(bookingWhatsappMessage(locale, area))}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              whatsappButtonClass,
              "h-11 rounded-full px-5 font-heading text-lg tracking-wide",
            )}
          >
            <WhatsAppIcon data-icon="inline-start" className="size-4" />
            {waLabel}
          </a>
          <Link
            href={localizedPath(locale, secondaryHref)}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-11 rounded-full border-primary-foreground/40 bg-transparent px-5 font-heading text-lg tracking-wide text-primary-foreground hover:bg-primary-foreground/10",
            )}
          >
            {shopLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
