"use client";

import Image from "next/image";
import { Menu } from "lucide-react";
import { useState } from "react";
import { LanguageSwitch } from "@/components/language-switch";
import { LocaleLink } from "@/components/locale-link";
import { useLocale } from "@/components/locale-provider";
import { SocialLinks } from "@/components/social-links";
import { WhatsAppIcon, whatsappButtonClass } from "@/components/whatsapp-icon";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { navLinks } from "@/lib/site";
import { cn } from "@/lib/utils";
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

export function SiteHeader() {
  const { t, orderHref } = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40">
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2 text-xs sm:text-sm">
          <p className="min-w-0 truncate">{t("topbar")}</p>
          <SocialLinks invert className="hidden sm:flex" iconClassName="size-8" />
        </div>
      </div>
      <div className="border-b border-primary/15 bg-[#f3e1c7]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={t("menuOpen")}
            onClick={() => setMenuOpen(true)}
          >
            <Menu />
          </Button>

          <LocaleLink href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="MadeBrings logo"
              width={56}
              height={56}
              className="size-12 rounded-full sm:size-14"
              priority
            />
            <span className="font-heading text-3xl tracking-[0.12em] text-primary sm:text-4xl">
              MADEBRINGS
            </span>
          </LocaleLink>

          <nav className="ml-6 hidden items-center gap-5 lg:flex">
            {navLinks.map((link) => (
              <LocaleLink
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-primary/80 transition-colors hover:text-primary"
              >
                {t(navKeys[link.href])}
              </LocaleLink>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <LanguageSwitch />
            <Button
              nativeButton={false}
              render={<a href={orderHref} target="_blank" rel="noopener noreferrer" />}
              className={cn("h-9 rounded-full", whatsappButtonClass)}
            >
              <WhatsAppIcon data-icon="inline-start" className="size-4" />
              {t("orderNow")}
            </Button>
          </div>
        </div>
      </div>

      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetContent side="left" className="bg-[#f8ecd8]">
          <SheetHeader>
            <SheetTitle className="font-heading text-2xl tracking-wide">
              {t("menuTitle")}
            </SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-1 px-4">
            {navLinks.map((link) => (
              <LocaleLink
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-2 text-base font-medium hover:bg-primary/10"
                onClick={() => setMenuOpen(false)}
              >
                {t(navKeys[link.href])}
              </LocaleLink>
            ))}
          </nav>
          <div className="mt-auto space-y-3 p-4">
            <LanguageSwitch />
            <p className="text-sm text-muted-foreground">{t("menuNote")}</p>
            <SocialLinks />
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
