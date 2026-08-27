"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle, Trash2 } from "lucide-react";
import { useCart } from "@/components/cart/cart-provider";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { getProductById } from "@/lib/commerce";
import { formatIdr } from "@/lib/format";
import { orderWhatsappHref } from "@/lib/whatsapp";

export function OrderSheet() {
  const { lines, setQuantity, remove, clear, subtotal, open, setOpen, itemCount } =
    useCart();
  const [note, setNote] = useState("");

  const href =
    itemCount > 0
      ? orderWhatsappHref(lines, note)
      : undefined;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="w-full bg-[#f8ecd8] sm:max-w-md">
        <SheetHeader className="border-b border-primary/10">
          <SheetTitle className="font-heading text-2xl tracking-wide">
            WhatsApp order list
          </SheetTitle>
          <SheetDescription>
            There is no trolley checkout. Send this list to Made on WhatsApp so we
            can confirm stock, quote delivery, and take cash or bank transfer.
          </SheetDescription>
        </SheetHeader>

        {itemCount === 0 ? (
          <div className="px-4 py-10 text-center text-sm text-muted-foreground">
            Your list is empty. Add a few things from the shop, then chat us.
          </div>
        ) : (
          <ScrollArea className="min-h-0 flex-1">
            <ul className="space-y-4 px-4 py-2">
              {lines.map((line) => {
                const product = getProductById(line.productId);
                if (!product) return null;
                return (
                  <li key={line.productId} className="flex gap-3">
                    <div className="relative size-16 overflow-hidden rounded-xl bg-[#efe0c4]">
                      <Image
                        src={product.image}
                        alt={product.imageAlt}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-medium">{product.name}</p>
                      <p className="text-sm text-primary">
                        {formatIdr(product.priceIdr * line.quantity)}
                      </p>
                      <div className="mt-1 flex items-center gap-2">
                        <label className="sr-only" htmlFor={`qty-${line.productId}`}>
                          Quantity for {product.name}
                        </label>
                        <input
                          id={`qty-${line.productId}`}
                          type="number"
                          min={1}
                          max={24}
                          value={line.quantity}
                          onChange={(event) =>
                            setQuantity(line.productId, Number(event.target.value))
                          }
                          className="h-8 w-16 rounded-lg border border-primary/20 bg-card px-2 text-sm"
                        />
                        <button
                          type="button"
                          className="text-muted-foreground hover:text-destructive"
                          onClick={() => remove(line.productId)}
                          aria-label={`Remove ${product.name}`}
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </ScrollArea>
        )}

        <SheetFooter className="border-t border-primary/10 bg-[#efe0c4]">
          <label className="text-sm font-medium" htmlFor="order-note">
            Area, villa, or notes
          </label>
          <Textarea
            id="order-note"
            value={note}
            onChange={(event) => setNote(event.target.value)}
            placeholder="Abianbase / Mengwi / villa name. We will confirm stock and delivery cost."
            className="min-h-20 bg-card"
          />
          <div className="flex items-center justify-between text-sm">
            <span>Subtotal</span>
            <span className="font-heading text-xl tracking-wide">
              {formatIdr(subtotal)}
            </span>
          </div>
          <p className="text-xs leading-relaxed text-muted-foreground">
            Delivery is not free. Prices are in rupiah. Payment is cash or bank
            transfer after we confirm the order.
          </p>
          {href ? (
            <Button
              nativeButton={false}
              render={
                <a href={href} target="_blank" rel="noopener noreferrer" />
              }
              size="lg"
              className="h-11 w-full rounded-full font-heading text-lg tracking-wide"
            >
              <MessageCircle data-icon="inline-start" />
              Check stock on WhatsApp
            </Button>
          ) : (
            <Button
              size="lg"
              className="h-11 w-full rounded-full font-heading text-lg tracking-wide"
              disabled
            >
              <MessageCircle data-icon="inline-start" />
              Check stock on WhatsApp
            </Button>
          )}
          {itemCount > 0 ? (
            <button
              type="button"
              className="text-xs text-muted-foreground underline-offset-4 hover:underline"
              onClick={clear}
            >
              Clear list
            </button>
          ) : null}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
