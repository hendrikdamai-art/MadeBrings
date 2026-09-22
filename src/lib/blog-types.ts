import type { FaqItem } from "@/lib/money-copy";

export type BlogSection = {
  heading?: string;
  paragraphs: string[];
  list?: string[];
  link?: { href: string; label: string };
};

export type BlogLocaleCopy = {
  title: string;
  description: string;
  excerpt: string;
  speakable?: string;
  inclusions?: string[];
  faqs?: FaqItem[];
  sections: BlogSection[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  keywords: string[];
  datePublished: string;
  dateModified: string;
  readingMinutes: number;
  heroImage: string;
  heroAlt: string;
  sections: BlogSection[];
  intent?: "editorial" | "commercial";
  query?: string;
  speakable?: string;
  inclusions?: string[];
  faqs?: FaqItem[];
  bookingHref?: string;
  idCopy?: BlogLocaleCopy;
};

export type { FaqItem };
