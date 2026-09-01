"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  interpolate,
  LOCALE_STORAGE_KEY,
  messages,
  type Locale,
  type MessageKey,
} from "@/lib/i18n";
import {
  localeFromPathname,
  localizedPath,
  stripLocalePrefix,
} from "@/lib/locale-path";
import { whatsappHref } from "@/lib/site";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: MessageKey, vars?: Record<string, string | number>) => string;
  orderHref: string;
  h: (path: string) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function browserPathname(fallback: string) {
  if (typeof window === "undefined") return fallback;
  return window.location.pathname;
}

export function LocaleProvider({
  children,
  initialLocale = "en",
}: {
  children: ReactNode;
  initialLocale?: Locale;
}) {
  const router = useRouter();
  const nextPathname = usePathname() || "/";
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  useEffect(() => {
    const path = browserPathname(nextPathname);
    const fromPath = localeFromPathname(path);
    if (fromPath === "id") {
      setLocaleState("id");
      window.localStorage.setItem(LOCALE_STORAGE_KEY, "id");
      return;
    }
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    if (stored === "en" || stored === "id") setLocaleState(stored);
  }, [nextPathname]);

  useEffect(() => {
    document.documentElement.lang = locale === "id" ? "id" : "en";
  }, [locale]);

  const setLocale = useCallback(
    (next: Locale) => {
      setLocaleState(next);
      window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
      const current = stripLocalePrefix(browserPathname(nextPathname));
      const target = localizedPath(next, current);
      if (target !== browserPathname(nextPathname)) router.push(target);
    },
    [nextPathname, router],
  );

  const t = useCallback(
    (key: MessageKey, vars?: Record<string, string | number>) =>
      interpolate(messages[locale][key], vars),
    [locale],
  );

  const h = useCallback(
    (path: string) => localizedPath(locale, path),
    [locale],
  );

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale,
      t,
      orderHref: whatsappHref(t("waGreeting")),
      h,
    }),
    [locale, setLocale, t, h],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be used within LocaleProvider");
  return context;
}
