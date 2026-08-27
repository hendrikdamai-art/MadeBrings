"use client";

import { AgeGate } from "@/components/age-gate";
import { CartProvider } from "@/components/cart/cart-provider";
import { OrderSheet } from "@/components/cart/order-sheet";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { WhatsappFab } from "@/components/layout/whatsapp-fab";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <AgeGate />
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <OrderSheet />
      <WhatsappFab />
    </CartProvider>
  );
}
