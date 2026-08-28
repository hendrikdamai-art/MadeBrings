"use client";

import { AgeGate } from "@/components/age-gate";
import { LocaleProvider } from "@/components/locale-provider";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { WhatsappFab } from "@/components/layout/whatsapp-fab";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider>
      <AgeGate />
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <WhatsappFab />
    </LocaleProvider>
  );
}
