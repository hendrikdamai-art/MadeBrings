"use client";

import Image from "next/image";
import Link from "next/link";
import { WhatsAppIcon, whatsappButtonClass } from "@/components/whatsapp-icon";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/components/locale-provider";
import type { Product } from "@/lib/commerce";
import { formatIdr } from "@/lib/format";
import { orderWhatsappHref } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  const { t } = useLocale();
  const orderHref = orderWhatsappHref([{ productId: product.id, quantity: 1 }], "");

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-primary/10 bg-card shadow-[0_10px_30px_-18px_rgba(8,56,32,0.45)]">
      <Link href={`/product/${product.slug}`} className="relative block aspect-[4/3] overflow-hidden bg-[#efe0c4]">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.packNote ? (
          <span className="absolute top-3 left-3 rounded-full bg-primary px-2.5 py-1 font-heading text-xs tracking-wider text-primary-foreground">
            {product.packNote}
          </span>
        ) : null}
      </Link>
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
            <Link href={`/product/${product.slug}`} className="hover:underline">
              {product.name}
            </Link>
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{product.summary}</p>
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
