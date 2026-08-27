"use client";

import { useState } from "react";
import { useCart } from "@/components/cart/cart-provider";
import { QuantityStepper } from "@/components/quantity-stepper";
import { Button } from "@/components/ui/button";
import { whatsappHref } from "@/lib/site";
import { formatIdr } from "@/lib/format";
import type { Product } from "@/lib/commerce";

export function ProductActions({ product }: { product: Product }) {
  const { add } = useCart();
  const [quantity, setQuantity] = useState(1);
  const askHref = whatsappHref(
    `Hi MadeBrings, is ${product.name} in stock today? I am in / around Abianbase and would like to arrange delivery. I know delivery is not free.`,
  );

  return (
    <div className="space-y-4">
      <p className="font-heading text-4xl tracking-wide text-primary">
        {formatIdr(product.priceIdr)}
      </p>
      <p className="text-sm text-muted-foreground">
        Price is for {product.size}. Stock is confirmed on WhatsApp. Payment is cash
        or bank transfer.
      </p>
      <div className="flex flex-wrap items-center gap-3">
        <QuantityStepper value={quantity} onChange={setQuantity} />
        <Button
          size="lg"
          className="h-11 rounded-full px-5 font-heading text-lg tracking-wide"
          onClick={() => add(product.id, quantity)}
        >
          Add to WhatsApp list
        </Button>
      </div>
      <a
        href={askHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-sm font-medium text-primary underline-offset-4 hover:underline"
      >
        Ask Made if this is available
      </a>
    </div>
  );
}
