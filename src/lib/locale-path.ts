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
  const hashIndex = path.indexOf("#");
  const hash = hashIndex >= 0 ? path.slice(hashIndex) : "";
  const withoutHash = hashIndex >= 0 ? path.slice(0, hashIndex) : path;
  const raw = withoutHash.startsWith("/") ? withoutHash : `/${withoutHash}`;
  const stripped = stripLocalePrefix(raw) || "/";
  const localized =
    locale !== "id" ? stripped : stripped === "/" ? "/id" : `/id${stripped}`;
  return `${localized}${hash}`;
}
