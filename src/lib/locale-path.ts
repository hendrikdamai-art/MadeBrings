import type { Locale } from "@/lib/i18n";

export const ID_PREFIX = "/id";

export function stripLocalePrefix(pathname: string): string {
  if (pathname === "/id") return "/";
  if (pathname.startsWith("/id/")) {
    const stripped = pathname.slice(3);
    return stripped.startsWith("/") ? stripped : `/${stripped}`;
  }
  return pathname || "/";
}

export function localeFromPathname(pathname: string): Locale {
  return pathname === "/id" || pathname.startsWith("/id/") ? "id" : "en";
}

export function localizedPath(locale: Locale, path: string): string {
  const raw = path.startsWith("/") ? path : `/${path}`;
  const stripped = stripLocalePrefix(raw);
  if (locale !== "id") return stripped;
  if (stripped === "/") return "/id";
  return `/id${stripped}`;
}
