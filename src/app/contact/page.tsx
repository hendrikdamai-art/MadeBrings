import { SocialLinks } from "@/components/social-links";
import { WhatsAppIcon, whatsappButtonClass, ORDER_NOW_LABEL } from "@/components/whatsapp-icon";
import { buttonVariants } from "@/components/ui/button";
import { pageMetadata } from "@/lib/seo";
import { defaultWhatsappGreeting, siteConfig, whatsappHref } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact MadeBrings in Abianbase, Badung, Bali. Chat first on WhatsApp to confirm your order. Google Maps, Instagram, Facebook, and TripAdvisor are in the header and footer.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="max-w-2xl">
        <p className="text-xs font-medium tracking-[0.22em] text-primary/70 uppercase">
          Talk to the shop
        </p>
        <h1 className="mt-3 font-heading text-5xl tracking-wide text-primary sm:text-6xl">
          Contact MadeBrings
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-foreground/80">
          The fastest way to buy from us is WhatsApp. Chat first to confirm your
          order — tell Made what you need, where you are, and whether you will pay
          cash or bank transfer.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="space-y-5 rounded-3xl border border-primary/10 bg-card p-6">
          <h2 className="font-heading text-3xl tracking-wide text-primary">WhatsApp</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Chat first to confirm your order. Ask if a bottle is in, or arrange a
            pickup in Abianbase.
          </p>
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
            <WhatsAppIcon className="size-4" />
            {ORDER_NOW_LABEL}
          </a>
          <div>
            <h3 className="font-heading text-xl tracking-wide">The shop</h3>
            <p className="mt-2 text-sm leading-relaxed">
              {siteConfig.address.display}
              <br />
              Owner: {siteConfig.owner}
            </p>
            <a
              href={siteConfig.social.maps}
              className="mt-2 inline-block text-sm font-medium text-primary underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Google Maps
            </a>
          </div>
          <div>
            <h3 className="font-heading text-xl tracking-wide">Also find us on</h3>
            <SocialLinks className="mt-3" />
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl border border-primary/10 bg-[#efe0c4]">
          <iframe
            title="MadeBrings on Google Maps, Abianbase Badung Bali"
            src="https://maps.google.com/maps?q=Abianbase,+Badung,+Bali&z=14&output=embed"
            className="h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
