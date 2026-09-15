import type { Locale } from "@/lib/i18n";

export type FaqItem = {
  question: string;
  answer: string;
};

export type PriceRow = {
  item: string;
  price: string;
  href: string;
};

export type ContentSection = {
  heading?: string;
  paragraphs: string[];
  list?: string[];
  link?: { href: string; label: string };
};

export type CommercialCopy = {
  kicker: string;
  h1: string;
  title: string;
  description: string;
  keywords: string[];
  speakableTitle: string;
  speakable: string;
  intro: string[];
  inclusionsTitle: string;
  inclusions: string[];
  priceTitle: string;
  priceNote: string;
  prices: PriceRow[];
  sections: ContentSection[];
  faqsTitle: string;
  faqs: FaqItem[];
  ctaTitle: string;
  ctaBody: string;
  shopLabel: string;
  bookLabel: string;
};

export function pickCopy<T>(locale: Locale, en: T, id: T): T {
  return locale === "id" ? id : en;
}
