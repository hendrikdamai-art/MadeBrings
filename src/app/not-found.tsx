"use client";

import { buttonVariants } from "@/components/ui/button";
import { LocaleLink } from "@/components/locale-link";
import { useLocale } from "@/components/locale-provider";
import { cn } from "@/lib/utils";

export default function NotFound() {
  const { t } = useLocale();
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="text-xs font-medium tracking-[0.22em] text-primary/70 uppercase">
        {t("notFoundKicker")}
      </p>
      <h1 className="mt-3 font-heading text-5xl tracking-wide text-primary">
        {t("notFoundTitle")}
      </h1>
      <p className="mt-4 text-muted-foreground">{t("notFoundBody")}</p>
      <LocaleLink
        href="/shop"
        className={cn(
          buttonVariants({ size: "lg" }),
          "mt-8 h-11 rounded-full px-5 font-heading text-lg tracking-wide",
        )}
      >
        {t("notFoundCta")}
      </LocaleLink>
    </div>
  );
}
