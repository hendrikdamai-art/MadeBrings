import { WhatsAppIcon, whatsappButtonClass } from "@/components/whatsapp-icon";
import { LocaleLink } from "@/components/locale-link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function OrderCta({
  title,
  body,
  whatsappHref,
  bookLabel,
  shopLabel,
  shopHref = "/shop",
}: {
  title: string;
  body: string;
  whatsappHref: string;
  bookLabel: string;
  shopLabel: string;
  shopHref?: string;
}) {
  return (
    <div className="rounded-3xl bg-primary p-6 text-primary-foreground">
      <h2 className="font-heading text-3xl tracking-wide">{title}</h2>
      <p className="mt-2 text-sm text-primary-foreground/80">{body}</p>
      <div className="mt-4 flex flex-wrap gap-3">
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
          {bookLabel}
        </a>
        <LocaleLink
          href={shopHref}
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "h-11 rounded-full border-primary-foreground/30 bg-transparent px-5 font-heading text-lg tracking-wide text-primary-foreground hover:bg-primary-foreground/10",
          )}
        >
          {shopLabel}
        </LocaleLink>
      </div>
    </div>
  );
}
