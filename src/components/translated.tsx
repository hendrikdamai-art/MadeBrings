"use client";

import { useLocale } from "@/components/locale-provider";
import type { MessageKey } from "@/lib/i18n";

export function TranslatedText({
  k,
  vars,
  className,
}: {
  k: MessageKey;
  vars?: Record<string, string | number>;
  className?: string;
}) {
  const { t } = useLocale();
  return <span className={className}>{t(k, vars)}</span>;
}
