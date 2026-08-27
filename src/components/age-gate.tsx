"use client";

import { useSyncExternalStore } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
  return true;
}

function confirmAge() {
  window.localStorage.setItem(STORAGE_KEY, "yes");
  listeners.forEach((listener) => listener());
}

export function AgeGate() {
  const confirmed = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  if (confirmed) return null;

  return (
    <Dialog open disablePointerDismissal>
      <DialogContent
        showCloseButton={false}
        className="border-primary/20 bg-[#f8ecd8] sm:max-w-md"
      >
        <DialogHeader className="items-center text-center">
          <Image
            src="/logo.png"
            alt="MadeBrings"
            width={96}
            height={96}
            className="size-24 rounded-full"
          />
          <DialogTitle className="font-heading text-3xl tracking-wide">
            Are you {siteConfig.ageLimit} or older?
          </DialogTitle>
          <DialogDescription className="text-base text-foreground/80">
            Indonesian law only allows alcohol sales to people {siteConfig.ageLimit}{" "}
            and over. MadeBrings is a small family shop — please be honest with us.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="border-primary/10 sm:flex-col sm:space-x-0">
          <Button
            size="lg"
            className="h-11 w-full font-heading text-lg tracking-wide"
            onClick={confirmAge}
          >
            Yes, I am {siteConfig.ageLimit}+
          </Button>
          <a
            href="https://www.google.com"
            className="text-center text-sm text-muted-foreground underline-offset-4 hover:underline"
          >
            No, take me elsewhere
          </a>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
