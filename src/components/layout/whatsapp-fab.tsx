"use client";

import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { defaultWhatsappGreeting, whatsappHref } from "@/lib/site";

export function WhatsappFab() {
  return (
    <a
      href={whatsappHref(defaultWhatsappGreeting)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-4 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-heading text-lg tracking-wide text-white shadow-lg shadow-primary/20 sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon className="size-5" />
      WhatsApp
    </a>
  );
}
