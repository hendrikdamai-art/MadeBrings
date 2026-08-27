import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Outfit } from "next/font/google";
import { SiteShell } from "@/components/layout/site-shell";
import { defaultMetadata } from "@/lib/seo";
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

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${bebasNeue.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
