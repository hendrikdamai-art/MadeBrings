"use client";

import { useState } from "react";
import { QuantityStepper } from "@/components/quantity-stepper";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon, whatsappButtonClass, ORDER_NOW_LABEL } from "@/components/whatsapp-icon";
import { orderWhatsappHref } from "@/lib/whatsapp";
import { formatIdr } from "@/lib/format";
import type { Product } from "@/lib/commerce";
import { cn } from "@/lib/utils";

export function ProductActions({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const orderHref = orderWhatsappHref(
    [{ productId: product.id, quantity }],
    "",
  );

  return (
    <div className="space-y-4">
      <p className="font-heading text-4xl tracking-wide text-primary">
        {formatIdr(product.priceIdr)}
      </p>
      <p className="text-sm text-muted-foreground">
        Price is for {product.size}. Chat first to confirm your order. Payment is cash
        or bank transfer.
      </p>
      <div className="flex flex-wrap items-center gap-3">
        <QuantityStepper value={quantity} onChange={setQuantity} />
        <Button
          nativeButton={false}
          render={
            <a href={orderHref} target="_blank" rel="noopener noreferrer" />
          }
          size="lg"
          className={cn(
            "h-11 rounded-full px-5 text-lg",
            whatsappButtonClass,
          )}
        >
          <WhatsAppIcon data-icon="inline-start" className="size-4" />
          {ORDER_NOW_LABEL}
        </Button>
      </div>
    </div>
  );
}
