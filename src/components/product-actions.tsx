"use client";

import { Button } from "@/components/ui/button";
import { WhatsAppIcon, whatsappButtonClass } from "@/components/whatsapp-icon";
import { useLocale } from "@/components/locale-provider";
import { orderWhatsappHref } from "@/lib/whatsapp";
import { formatIdr } from "@/lib/format";
import type { Product } from "@/lib/commerce";
import { cn } from "@/lib/utils";

export function ProductActions({ product }: { product: Product }) {
  const { t } = useLocale();
  const orderHref = orderWhatsappHref([{ productId: product.id, quantity: 1 }], "");

  return (
    <div className="space-y-4">
      <p className="font-heading text-4xl tracking-wide text-primary">
        {formatIdr(product.priceIdr)}
      </p>
      <p className="text-sm text-muted-foreground">
        {t("productPriceNote", { size: product.size })}
      </p>
      <Button
        nativeButton={false}
        render={
          <a href={orderHref} target="_blank" rel="noopener noreferrer" />
        }
        size="lg"
        className={cn("h-11 rounded-full px-5 text-lg", whatsappButtonClass)}
      >
        <WhatsAppIcon data-icon="inline-start" className="size-4" />
        {t("orderNow")}
      </Button>
      <div className="rounded-2xl border border-primary/15 bg-card p-4 text-sm leading-relaxed text-muted-foreground">
        {t("productConfirm")}
      </div>
    </div>
  );
}
