"use client";

import { MessageCircle } from "lucide-react";
import { defaultWhatsappGreeting, whatsappHref } from "@/lib/site";

export function WhatsappFab() {
  return (
    <a
      href={whatsappHref(defaultWhatsappGreeting)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-4 z-40 inline-flex items-center gap-2 rounded-full bg-[#128C7E] px-4 py-3 font-heading text-lg tracking-wide text-white shadow-lg shadow-primary/20 sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="size-5" />
      WhatsApp
    </a>
  );
}
