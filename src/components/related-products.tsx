"use client";

import { ProductGrid } from "@/components/product-grid";
import { useLocale } from "@/components/locale-provider";
import type { Product } from "@/lib/commerce";

export function RelatedProducts({ products }: { products: Product[] }) {
  const { t } = useLocale();
  if (products.length === 0) return null;

  return (
    <section className="mt-16">
      <h2 className="mb-6 font-heading text-3xl tracking-wide text-primary">
        {t("productRelated")}
      </h2>
      <ProductGrid products={products} />
    </section>
  );
}
