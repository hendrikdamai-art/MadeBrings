"use client";

import { useLocale } from "@/components/locale-provider";
import { cn } from "@/lib/utils";

export function LanguageSwitch({ className }: { className?: string }) {
  const { locale, setLocale, t } = useLocale();

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-primary/25 bg-card/80 p-0.5 text-xs font-medium",
        className,
      )}
      role="group"
      aria-label={t("language")}
    >
      <button
        type="button"
        className={cn(
          "rounded-full px-2.5 py-1",
          locale === "en" ? "bg-primary text-primary-foreground" : "text-primary/70 hover:text-primary",
        )}
        aria-pressed={locale === "en"}
        onClick={() => setLocale("en")}
      >
        {t("langEn")}
      </button>
      <button
        type="button"
        className={cn(
          "rounded-full px-2.5 py-1",
          locale === "id" ? "bg-primary text-primary-foreground" : "text-primary/70 hover:text-primary",
        )}
        aria-pressed={locale === "id"}
        onClick={() => setLocale("id")}
      >
        {t("langId")}
      </button>
    </div>
  );
}
