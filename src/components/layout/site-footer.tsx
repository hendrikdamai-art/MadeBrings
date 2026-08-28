"use client";

import Image from "next/image";
import Link from "next/link";
import { LanguageSwitch } from "@/components/language-switch";
import { useLocale } from "@/components/locale-provider";
import { SocialLinks } from "@/components/social-links";
import { navLinks, siteConfig } from "@/lib/site";
import type { MessageKey } from "@/lib/i18n";

const navKeys: Record<(typeof navLinks)[number]["href"], MessageKey> = {
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
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="MadeBrings logo"
              width={72}
              height={72}
              className="size-16 rounded-full bg-[#f3e1c7]"
            />
            <span className="font-heading text-3xl tracking-[0.12em]">MADEBRINGS</span>
          </Link>
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
                <Link href={link.href} className="text-primary-foreground/80 hover:text-primary-foreground">
                  {t(navKeys[link.href])}
                </Link>
              </li>
            ))}
          </ul>
          <LanguageSwitch className="mt-4" />
        </div>
      </div>
      <div className="border-t border-primary-foreground/15 px-4 py-4 text-center text-xs leading-relaxed text-primary-foreground/70">
        {t("footerLegal", { age: siteConfig.ageLimit })}
      </div>
    </footer>
  );
}
