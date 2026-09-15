import { localizedPath } from "@/lib/locale-path";
import type { Locale } from "@/lib/i18n";

/** Last editorial pass across money, commercial, and GEO pages. */
export const CONTENT_DATE_MODIFIED = "2026-09-15";

export const serviceAreas = [
  "Abianbase",
  "Canggu",
  "Seminyak",
  "Kuta",
  "Ubud",
  "Tanah Lot",
] as const;

export const MONEY_PATH = "/alcohol-delivery-service";
export const COMPARE_PATH = "/compare-alcohol-delivery-bali";
export const PRESS_PATH = "/press";
export const LLMS_PATH = "/llms.txt";
export const LLMS_FULL_PATH = "/llms-full.txt";

export const commercialStaticPaths = [
  MONEY_PATH,
  COMPARE_PATH,
  PRESS_PATH,
] as const;

export const seoRevalidatePaths = [
  "/",
  "/shop",
  "/blog",
  "/about",
  "/contact",
  ...commercialStaticPaths,
  "/llms.txt",
  "/llms-full.txt",
  "/sitemap.xml",
] as const;

export function localizedCommercialPaths(locale: Locale) {
  return commercialStaticPaths.map((path) => localizedPath(locale, path));
}
