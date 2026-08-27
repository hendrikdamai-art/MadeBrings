"use client";

import { useSyncExternalStore } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

const STORAGE_KEY = "madebrings-age-ok";
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return window.localStorage.getItem(STORAGE_KEY) === "yes";
}

function getServerSnapshot() {
  return false;
}

function confirmAge() {
  window.localStorage.setItem(STORAGE_KEY, "yes");
  listeners.forEach((listener) => listener());
}

export function AgeGate() {
  const confirmed = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  if (confirmed) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#083820]/80 p-4"
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="age-gate-title"
      aria-describedby="age-gate-copy"
    >
      <div className="w-full max-w-md rounded-3xl border border-primary/20 bg-[#f8ecd8] p-6 text-center shadow-2xl">
        <Image
          src="/logo.png"
          alt="MadeBrings"
          width={96}
          height={96}
          className="mx-auto size-24 rounded-full"
        />
        <h2 id="age-gate-title" className="mt-4 font-heading text-3xl tracking-wide text-primary">
          Are you {siteConfig.ageLimit} or older?
        </h2>
        <p id="age-gate-copy" className="mt-3 text-base text-foreground/80">
          Indonesian law only allows alcohol sales to people {siteConfig.ageLimit} and
          over. MadeBrings is a small family shop — please be honest with us.
        </p>
        <Button
          type="button"
          size="lg"
          className="mt-6 h-11 w-full font-heading text-lg tracking-wide"
          onClick={confirmAge}
        >
          Yes, I am {siteConfig.ageLimit}+
        </Button>
        <a
          href="https://www.google.com"
          className="mt-3 inline-block text-sm text-muted-foreground underline-offset-4 hover:underline"
        >
          No, take me elsewhere
        </a>
      </div>
    </div>
  );
}
