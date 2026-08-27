"use client";

import { useMemo, useState } from "react";
import { CategoryPills, ProductGrid } from "@/components/product-grid";
import { Input } from "@/components/ui/input";
import { searchProducts, type Product } from "@/lib/commerce";

export function ShopBrowser({
  products,
  activeCategory,
  heading,
  intro,
}: {
  products: Product[];
  activeCategory?: string;
  heading: string;
  intro: string;
}) {
  const [query, setQuery] = useState("");
  const visible = useMemo(() => {
    const found = searchProducts(query);
    const ids = new Set(products.map((product) => product.id));
    return found.filter((product) => ids.has(product.id));
  }, [products, query]);

  return (
    <div className="space-y-8">
      <div className="max-w-2xl space-y-3">
        <p className="text-xs font-medium tracking-[0.22em] text-primary/70 uppercase">
          Neighborhood shelf
        </p>
        <h1 className="font-heading text-5xl tracking-wide text-primary sm:text-6xl">
          {heading}
        </h1>
        <p className="text-base leading-relaxed text-foreground/80 sm:text-lg">{intro}</p>
      </div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <CategoryPills active={activeCategory} />
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search the shelf"
          className="h-10 max-w-xs bg-card"
          aria-label="Search products"
        />
      </div>
      <ProductGrid products={visible} />
    </div>
  );
}
