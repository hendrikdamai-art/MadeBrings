import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Outfit } from "next/font/google";
import { SiteShell } from "@/components/layout/site-shell";
import { defaultMetadataFor } from "@/lib/seo";
import { getRequestLocale } from "@/lib/request-locale";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#083820",
  width: "device-width",
  initialScale: 1,
};

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  return defaultMetadataFor(locale);
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getRequestLocale();
  return (
    <html
      lang={locale === "id" ? "id" : "en"}
      className={`${outfit.variable} ${bebasNeue.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <SiteShell initialLocale={locale}>{children}</SiteShell>
      </body>
    </html>
  );
}
