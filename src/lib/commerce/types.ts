export type CategoryId =
  | "beer-cider"
  | "rtd"
  | "mixers"
  | "ice-water"
  | "snacks";

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
  /** Local branded photo in /public/products, MadeBrings emblem top-right. */
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
