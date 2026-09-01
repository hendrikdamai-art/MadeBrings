"use client";

import Image from "next/image";
import { WhatsAppIcon, whatsappButtonClass } from "@/components/whatsapp-icon";
import { Button } from "@/components/ui/button";
import { LocaleLink } from "@/components/locale-link";
import { useLocale } from "@/components/locale-provider";
import { productCopy, type Product } from "@/lib/commerce";
import { formatIdr } from "@/lib/format";
import { orderWhatsappHref } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  const { t, locale } = useLocale();
  const copy = productCopy(product, locale);
  const orderHref = orderWhatsappHref([{ productId: product.id, quantity: 1 }], "");

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-primary/10 bg-card shadow-[0_10px_30px_-18px_rgba(8,56,32,0.45)]">
      <LocaleLink href={`/product/${product.slug}`} className="relative block aspect-[4/5] overflow-hidden bg-white">
        <Image
          src={product.image}
          alt={copy.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {product.packNote ? (
          <span className="absolute top-3 left-3 rounded-full bg-primary px-2.5 py-1 font-heading text-xs tracking-wider text-primary-foreground">
            {product.packNote}
          </span>
        ) : null}
      </LocaleLink>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="space-y-1">
          {product.origin ? (
            <p className="text-[11px] font-medium tracking-[0.18em] text-primary/70 uppercase">
              {product.origin}
            </p>
          ) : (
            <p className="text-[11px] font-medium tracking-[0.18em] text-primary/70 uppercase">
              {product.size}
            </p>
          )}
          <h3 className="font-heading text-xl leading-tight tracking-wide">
            <LocaleLink href={`/product/${product.slug}`} className="hover:underline">
              {product.name}
            </LocaleLink>
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{copy.summary}</p>
        </div>
        <p className="mt-auto font-heading text-2xl tracking-wide text-primary">
          {formatIdr(product.priceIdr)}
        </p>
        <Button
          nativeButton={false}
          render={
            <a href={orderHref} target="_blank" rel="noopener noreferrer" />
          }
          className={cn("h-9 w-full rounded-full text-base", whatsappButtonClass)}
        >
          <WhatsAppIcon data-icon="inline-start" className="size-4" />
          {t("orderNow")}
        </Button>
      </div>
    </article>
  );
}
