export type CategoryId =
  | "beer-cider"
  | "bottled-drinks"
  | "rtd"
  | "mixers"
  | "ice-water"
  | "snacks"
  | "everyday";

export type Product = {
  id: string;
  slug: string;
  name: string;
  summary: string;
  description: string;
  priceIdr: number;
  size: string;
  origin?: string;
  category: CategoryId;
  /** Full CDN URL. Product photos are not stored on Vercel. */
  image: string;
  imageAlt: string;
  featured?: boolean;
  packNote?: string;
};

export type Category = {
  id: CategoryId;
  slug: CategoryId;
  name: string;
  shortName: string;
  description: string;
  href: string;
};
