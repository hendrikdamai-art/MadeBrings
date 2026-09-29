"use client";

import Image from "next/image";
import { LanguageSwitch } from "@/components/language-switch";
import { LocaleLink } from "@/components/locale-link";
import { useLocale } from "@/components/locale-provider";
import { SocialLinks } from "@/components/social-links";
import { navLinks, siteConfig } from "@/lib/site";
import {
  COMPARE_PATH,
  LLMS_FULL_PATH,
  LLMS_PATH,
  MONEY_PATH,
  PRESS_PATH,
} from "@/lib/seo-paths";
import type { MessageKey } from "@/lib/i18n";

const navKeys: Record<(typeof navLinks)[number]["href"], MessageKey> = {
  [MONEY_PATH]: "navDelivery",
  "/shop": "navShop",
  "/shop/beer-cider": "navBeer",
  "/shop/rtd": "navRtd",
  "/shop/mixers": "navMixers",
  "/shop/ice-water": "navIce",
  "/shop/snacks": "navSnacks",
  "/blog": "navBlog",
  "/about": "navAbout",
  "/contact": "navContact",
};

export function SiteFooter() {
  const { t, orderHref } = useLocale();

  return (
    <footer className="mt-auto bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div className="space-y-4">
          <LocaleLink href="/" className="inline-flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="MadeBrings logo"
              width={72}
              height={72}
              className="size-16 rounded-full bg-[#f3e1c7]"
            />
            <span className="font-heading text-3xl tracking-[0.12em]">MADEBRINGS</span>
          </LocaleLink>
          <p className="max-w-sm text-sm leading-relaxed text-primary-foreground/80">
            {t("footerBlurb", { owner: siteConfig.owner })}
          </p>
          <SocialLinks invert />
        </div>

        <div>
          <h2 className="font-heading text-xl tracking-wide">{t("footerVisit")}</h2>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/80">
            <li>{siteConfig.address.display}</li>
            <li>
              <a
                className="underline-offset-4 hover:underline"
                href={orderHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("footerWhatsapp")}
              </a>
            </li>
            <li>{t("footerPay")}</li>
            <li>{t("footerAge", { age: siteConfig.ageLimit })}</li>
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-xl tracking-wide">{t("footerShop")}</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <LocaleLink href={link.href} className="text-primary-foreground/80 hover:text-primary-foreground">
                  {t(navKeys[link.href])}
                </LocaleLink>
              </li>
            ))}
          </ul>
          <LanguageSwitch className="mt-4" />
          <div className="mt-6 space-y-2 text-sm">
            <p className="font-heading text-xl tracking-wide">{t("footerAi")}</p>
            <p>
              <a
                href={LLMS_PATH}
                className="text-primary-foreground/80 underline-offset-4 hover:underline"
              >
                {t("footerLlms")}
              </a>
              {" · "}
              <a
                href={LLMS_FULL_PATH}
                className="text-primary-foreground/80 underline-offset-4 hover:underline"
              >
                {t("footerLlmsFull")}
              </a>
            </p>
            <p>
              <LocaleLink
                href={COMPARE_PATH}
                className="text-primary-foreground/80 hover:text-primary-foreground"
              >
                {t("footerCompare")}
              </LocaleLink>
            </p>
            <p>
              <LocaleLink
                href={PRESS_PATH}
                className="text-primary-foreground/80 hover:text-primary-foreground"
              >
                {t("footerPress")}
              </LocaleLink>
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15 px-4 py-4 text-center text-xs leading-relaxed text-primary-foreground/70">
        {t("footerLegal", { age: siteConfig.ageLimit })}
      </div>
    </footer>
  );
}
