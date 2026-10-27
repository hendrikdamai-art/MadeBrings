import type { FaqItem } from "@/lib/seo-pages";

export type BlogSection = {
  heading?: string;
  paragraphs: string[];
  list?: string[];
  link?: { href: string; label: string };
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
  bookingPath?: string;
  howTo?: {
    name: string;
    steps: { name: string; text: string }[];
  };
};
