"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, MessageCircle } from "lucide-react";
import { SocialLinks } from "@/components/social-links";
import { useCart } from "@/components/cart/cart-provider";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { navLinks, siteConfig, whatsappHref, defaultWhatsappGreeting } from "@/lib/site";

export function SiteHeader() {
  const { itemCount, setOpen } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40">
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2 text-xs sm:text-sm">
          <p className="min-w-0 truncate">
            Family shop in {siteConfig.address.display} · Cash or bank transfer
          </p>
          <SocialLinks invert className="hidden sm:flex" iconClassName="size-8" />
        </div>
      </div>
      <div className="border-b border-primary/15 bg-[#f3e1c7]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu />
          </Button>

          <Link href="/" className="flex items-center gap-3">
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
          </Link>

          <nav className="ml-6 hidden items-center gap-5 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-primary/80 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <Button
              nativeButton={false}
              render={<a href={whatsappHref(defaultWhatsappGreeting)} target="_blank" rel="noopener noreferrer" />}
              variant="outline"
              className="hidden h-9 rounded-full border-primary/30 sm:inline-flex"
            >
              <MessageCircle data-icon="inline-start" />
              Chat Made
            </Button>
            <Button
              className="h-9 rounded-full font-heading tracking-wide"
              onClick={() => setOpen(true)}
            >
              <MessageCircle data-icon="inline-start" />
              Order list
              {itemCount > 0 ? (
                <span className="ml-1 inline-flex size-5 items-center justify-center rounded-full bg-primary-foreground text-xs text-primary">
                  {itemCount}
                </span>
              ) : null}
            </Button>
          </div>
        </div>
      </div>

      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetContent side="left" className="bg-[#f8ecd8]">
          <SheetHeader>
            <SheetTitle className="font-heading text-2xl tracking-wide">
              MadeBrings
            </SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-1 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-2 text-base font-medium hover:bg-primary/10"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto space-y-3 p-4">
            <p className="text-sm text-muted-foreground">
              Chat WhatsApp for stock and to arrange delivery. We do not offer free
              delivery.
            </p>
            <SocialLinks />
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
