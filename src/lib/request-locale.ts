import { headers } from "next/headers";
import type { Locale } from "@/lib/i18n";

export async function getRequestLocale(): Promise<Locale> {
  const header = (await headers()).get("x-locale");
  return header === "id" ? "id" : "en";
}
