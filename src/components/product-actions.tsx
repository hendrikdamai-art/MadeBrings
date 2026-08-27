"use client";

import { useState } from "react";
import { useCart } from "@/components/cart/cart-provider";
import { QuantityStepper } from "@/components/quantity-stepper";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon, whatsappButtonClass } from "@/components/whatsapp-icon";
import { whatsappHref } from "@/lib/site";
import { formatIdr } from "@/lib/format";
import type { Product } from "@/lib/commerce";
import { cn } from "@/lib/utils";

export function ProductActions({ product }: { product: Product }) {
  const { add } = useCart();
  const [quantity, setQuantity] = useState(1);
  const askHref = whatsappHref(
    `Hi MadeBrings, I would like to chat first to confirm my order for ${product.name}. I am in / around Abianbase.`,
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
          type="button"
          size="lg"
          className={cn(
            "h-11 rounded-full px-5 font-heading text-lg tracking-wide",
            whatsappButtonClass,
          )}
          onClick={() => add(product.id, quantity)}
        >
          <WhatsAppIcon data-icon="inline-start" className="size-4" />
          Order Now
        </Button>
      </div>
      <a
        href={askHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline"
      >
        <WhatsAppIcon className="size-3.5" />
        Message Made about this bottle
      </a>
    </div>
  );
}
