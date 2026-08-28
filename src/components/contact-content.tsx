"use client";

import { SocialLinks } from "@/components/social-links";
import { WhatsAppIcon, whatsappButtonClass } from "@/components/whatsapp-icon";
import { buttonVariants } from "@/components/ui/button";
import { useLocale } from "@/components/locale-provider";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ContactContent() {
  const { t, orderHref } = useLocale();

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="max-w-2xl">
        <p className="text-xs font-medium tracking-[0.22em] text-primary/70 uppercase">
          {t("contactKicker")}
        </p>
        <h1 className="mt-3 font-heading text-5xl tracking-wide text-primary sm:text-6xl">
          {t("contactTitle")}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-foreground/80">
          {t("contactLead")}
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="space-y-5 rounded-3xl border border-primary/10 bg-card p-6">
          <h2 className="font-heading text-3xl tracking-wide text-primary">
            {t("contactWaTitle")}
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {t("contactWaBody")}
          </p>
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
            <WhatsAppIcon className="size-4" />
            {t("orderNow")}
          </a>
          <div>
            <h3 className="font-heading text-xl tracking-wide">{t("contactShop")}</h3>
            <p className="mt-2 text-sm leading-relaxed">
              {siteConfig.address.display}
              <br />
              {t("contactOwner", { owner: siteConfig.owner })}
            </p>
            <a
              href={siteConfig.social.maps}
              className="mt-2 inline-block text-sm font-medium text-primary underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("contactMaps")}
            </a>
          </div>
          <div>
            <h3 className="font-heading text-xl tracking-wide">{t("contactAlso")}</h3>
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
