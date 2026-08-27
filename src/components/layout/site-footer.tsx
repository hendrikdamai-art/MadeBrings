import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "@/components/social-links";
import { navLinks, siteConfig, whatsappHref, defaultWhatsappGreeting } from "@/lib/site";

export function SiteFooter() {
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
            A local family shop in Abianbase, Badung, Bali, run by {siteConfig.owner}.
            Neighborhood prices on beer, mixers, ice, and everyday extras. Chat first
            to confirm your order.
          </p>
          <SocialLinks invert />
        </div>

        <div>
          <h2 className="font-heading text-xl tracking-wide">Visit & chat</h2>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/80">
            <li>{siteConfig.address.display}</li>
            <li>
              <a
                className="underline-offset-4 hover:underline"
                href={whatsappHref(defaultWhatsappGreeting)}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp checkout
              </a>
            </li>
            <li>Pay cash or bank transfer</li>
            <li>Must be {siteConfig.ageLimit}+ to buy alcohol</li>
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-xl tracking-wide">Shop</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-primary-foreground/80 hover:text-primary-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15 px-4 py-4 text-center text-xs leading-relaxed text-primary-foreground/70">
        Prices are in Indonesian rupiah. Chat first to confirm your order.
        MadeBrings supports the
        responsible service of alcohol and does not sell to anyone under {siteConfig.ageLimit}.
      </div>
    </footer>
  );
}
