"use client";

import Image from "next/image";
import { JsonLd, localBusinessJsonLd } from "@/components/json-ld";
import { LocaleLink } from "@/components/locale-link";
import { WhatsAppIcon, whatsappButtonClass } from "@/components/whatsapp-icon";
import { buttonVariants } from "@/components/ui/button";
import { useLocale } from "@/components/locale-provider";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function AboutContent() {
  const { t, orderHref, locale } = useLocale();

  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <JsonLd data={localBusinessJsonLd(locale)} />
      <p className="text-xs font-medium tracking-[0.22em] text-primary/70 uppercase">
        {t("aboutKicker")}
      </p>
      <h1 className="mt-3 font-heading text-5xl tracking-wide text-primary sm:text-6xl">
        {t("aboutTitle")}
      </h1>
      <div className="mt-8 overflow-hidden rounded-3xl bg-[#efe0c4]">
        <Image
          src="/logo.png"
          alt="MadeBrings emblem, with owner Made Hendrik"
          width={720}
          height={720}
          className="mx-auto max-w-xs"
        />
      </div>
      <div className="prose-muted mt-10 space-y-5 text-lg leading-relaxed text-foreground/85">
        <p>{t("aboutP1")}</p>
        <p>{t("aboutP2")}</p>
        <p>{t("aboutP3")}</p>
        <p>{t("aboutP4")}</p>
        <p>{t("aboutP5")}</p>
        <p>
          <LocaleLink
            href="/alcohol-delivery-service"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            {t("footerDelivery")}
          </LocaleLink>
        </p>
      </div>
      <div className="mt-10 flex flex-wrap gap-3">
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
        <a
          href={siteConfig.social.maps}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "h-11 rounded-full border-primary/30 px-5 font-heading text-lg tracking-wide",
          )}
        >
          {t("aboutMaps")}
        </a>
      </div>
    </div>
  );
}
