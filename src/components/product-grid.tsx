"use client";

import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { useLocale } from "@/components/locale-provider";
import { categories, type Product } from "@/lib/commerce";
import { categoryNameKey } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function ProductGrid({ products }: { products: Product[] }) {
  const { t } = useLocale();
  if (products.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-primary/20 bg-card px-6 py-16 text-center text-muted-foreground">
        {t("shopEmpty")}
      </p>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export function CategoryPills({ active }: { active?: string }) {
  const { t } = useLocale();
  return (
    <div className="flex flex-wrap gap-2">
      <Link
        href="/shop"
        className={cn(
          "rounded-full border px-3 py-1.5 text-sm",
          !active
            ? "border-primary bg-primary text-primary-foreground"
            : "border-primary/20 bg-card hover:border-primary/40",
        )}
      >
        {t("shopAll")}
      </Link>
      {categories.map((category) => (
        <Link
          key={category.id}
          href={category.href}
          className={cn(
            "rounded-full border px-3 py-1.5 text-sm",
            active === category.slug
              ? "border-primary bg-primary text-primary-foreground"
              : "border-primary/20 bg-card hover:border-primary/40",
          )}
        >
          {t(categoryNameKey[category.id] ?? "navShop")}
        </Link>
      ))}
    </div>
  );
}
