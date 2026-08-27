import Image from "next/image";
import { JsonLd, localBusinessJsonLd } from "@/components/json-ld";
import { WhatsAppIcon, whatsappButtonClass } from "@/components/whatsapp-icon";
import { buttonVariants } from "@/components/ui/button";
import { pageMetadata } from "@/lib/seo";
import { defaultWhatsappGreeting, siteConfig, whatsappHref } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "About us",
  description:
    "MadeBrings is a local family shop in Abianbase, Badung, Bali, owned by Made Hendrik. Neighborhood prices, WhatsApp orders, cash or bank transfer. Chat first to confirm your order.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <JsonLd data={localBusinessJsonLd()} />
      <p className="text-xs font-medium tracking-[0.22em] text-primary/70 uppercase">
        The family behind the emblem
      </p>
      <h1 className="mt-3 font-heading text-5xl tracking-wide text-primary sm:text-6xl">
        About MadeBrings
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
        <p>
          We are a local family shop, and the owner’s name is Made Hendrik. We are
          trying to get visibility through an online presence, and we are located in
          Abianbase, Badung, Bali.
        </p>
        <p>
          That is the whole story, told plainly. Neighbors already know the shop.
          This website is so people staying nearby — and friends sending a guest to
          us — can see what we keep, then talk to a real person.
        </p>
        <p>
          MadeBrings is not a 24-hour chain and we are not trying to look like one.
          We buy what we can sell at a fair neighborhood price: beer, a short bottled
          drinks shelf, mixers, ice, water, snacks, and a few everyday extras. If
          something is missing, say so on WhatsApp. If we can get it, we will tell
          you honestly.
        </p>
        <p>
          There is no trolley checkout here. Chat first to confirm your order.
          We check what is on the shelf, then take <strong>cash or bank
          transfer</strong>. The ride is arranged with you in the chat.
        </p>
        <p>
          If you are close to Abianbase, come by. If you are further into Badung,
          message first. Either way, you are buying from Made Hendrik’s family shop
          — not from a warehouse on the other side of the island.
        </p>
      </div>
      <div className="mt-10 flex flex-wrap gap-3">
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
          Order Now
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
          Open Google Maps
        </a>
      </div>
    </div>
  );
}
