import { LocaleLink } from "@/components/locale-link";
import { WhatsAppIcon, whatsappButtonClass } from "@/components/whatsapp-icon";
import { buttonVariants } from "@/components/ui/button";
import type { Locale } from "@/lib/i18n";
import { messages } from "@/lib/i18n";
import { MONEY_PATH } from "@/lib/seo/facts";
import { whatsappHref } from "@/lib/site";
import { cn } from "@/lib/utils";

export function BookCta({
  locale,
  title,
  body,
  shopLabel,
  bookLabel,
  showMoneyLink = false,
}: {
  locale: Locale;
  title: string;
  body: string;
  shopLabel: string;
  bookLabel: string;
  showMoneyLink?: boolean;
}) {
  const orderHref = whatsappHref(messages[locale].waGreeting);
  return (
    <div className="mt-12 rounded-3xl bg-primary p-6 text-primary-foreground">
      <h2 className="font-heading text-3xl tracking-wide">{title}</h2>
      <p className="mt-2 text-sm text-primary-foreground/80">{body}</p>
      <div className="mt-4 flex flex-wrap gap-3">
        <a
          href={orderHref}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ size: "lg" }),
            whatsappButtonClass,
            "h-11 rounded-full px-5 font-heading text-lg tracking-wide",
          )}
        >
          <WhatsAppIcon data-icon="inline-start" className="size-4" />
          {bookLabel}
        </a>
        {showMoneyLink ? (
          <LocaleLink
            href={MONEY_PATH}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-11 rounded-full border-primary-foreground/30 bg-transparent px-5 font-heading text-lg tracking-wide text-primary-foreground hover:bg-primary-foreground/10",
            )}
          >
            {locale === "id" ? "Jasa antar alkohol" : "Alcohol delivery service"}
          </LocaleLink>
        ) : (
          <LocaleLink
            href="/shop"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-11 rounded-full border-primary-foreground/30 bg-transparent px-5 font-heading text-lg tracking-wide text-primary-foreground hover:bg-primary-foreground/10",
            )}
          >
            {shopLabel}
          </LocaleLink>
        )}
      </div>
    </div>
  );
}
