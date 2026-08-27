import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="text-xs font-medium tracking-[0.22em] text-primary/70 uppercase">
        Missing from the shelf
      </p>
      <h1 className="mt-3 font-heading text-5xl tracking-wide text-primary">
        That page is not here
      </h1>
      <p className="mt-4 text-muted-foreground">
        It may have been moved, or it was never a page in this small shop. Head back
        to the shelf or chat us on WhatsApp.
      </p>
      <Link
        href="/shop"
        className={cn(
          buttonVariants({ size: "lg" }),
          "mt-8 h-11 rounded-full px-5 font-heading text-lg tracking-wide",
        )}
      >
        Back to the shop
      </Link>
    </div>
  );
}
