import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { categories, type Product } from "@/lib/commerce";
import { cn } from "@/lib/utils";

export function ProductGrid({
  products,
  emptyText = "Nothing on this shelf right now. Chat us on WhatsApp — we may still have it in the shop.",
}: {
  products: Product[];
  emptyText?: string;
}) {
  if (products.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-primary/20 bg-card px-6 py-16 text-center text-muted-foreground">
        {emptyText}
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
        All
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
          {category.name}
        </Link>
      ))}
    </div>
  );
}
