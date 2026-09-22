import { LocaleLink } from "@/components/locale-link";
import { WhatsAppIcon, whatsappButtonClass } from "@/components/whatsapp-icon";
import { buttonVariants } from "@/components/ui/button";
import { MONEY_PATH } from "@/lib/seo-paths";
import { cn } from "@/lib/utils";

export function BookingBand({
  title,
  body,
  whatsappHref,
  whatsappLabel,
  secondaryHref = MONEY_PATH,
  secondaryLabel,
}: {
  title: string;
  body: string;
  whatsappHref: string;
  whatsappLabel: string;
  secondaryHref?: string;
  secondaryLabel: string;
}) {
  return (
    <div className="rounded-3xl bg-primary p-6 text-primary-foreground sm:p-8">
      <h2 className="font-heading text-3xl tracking-wide">{title}</h2>
      <p className="mt-2 max-w-2xl text-sm text-primary-foreground/80">{body}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ size: "lg" }),
            whatsappButtonClass,
            "h-11 rounded-full px-5 font-heading text-lg tracking-wide",
          )}
        >
          <WhatsAppIcon className="size-4" />
          {whatsappLabel}
        </a>
        <LocaleLink
          href={secondaryHref}
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "h-11 rounded-full border-primary-foreground/40 bg-transparent px-5 font-heading text-lg tracking-wide text-primary-foreground hover:bg-primary-foreground/10",
          )}
        >
          {secondaryLabel}
        </LocaleLink>
      </div>
    </div>
  );
}
