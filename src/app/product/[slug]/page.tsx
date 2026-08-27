import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd, productJsonLd } from "@/components/json-ld";
import { ProductActions } from "@/components/product-actions";
import { ProductGrid } from "@/components/product-grid";
import {
  getCategory,
  getProductBySlug,
  getProducts,
  getProductsByCategory,
} from "@/lib/commerce";
import { pageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getProducts().map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return pageMetadata({
    title: product.name,
    description: product.summary,
    path: `/product/${product.slug}`,
  });
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  const category = getCategory(product.category);
  const related = getProductsByCategory(product.category)
    .filter((item) => item.id !== product.id)
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <JsonLd data={productJsonLd(product)} />
      <p className="text-sm text-muted-foreground">
        <Link href="/shop" className="hover:text-primary">
          Shop
        </Link>
        {category ? (
          <>
            {" / "}
            <Link href={category.href} className="hover:text-primary">
              {category.name}
            </Link>
          </>
        ) : null}
      </p>
      <div className="mt-6 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative aspect-square overflow-hidden rounded-3xl bg-[#efe0c4]">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="space-y-5">
          {product.origin ? (
            <p className="text-xs font-medium tracking-[0.22em] text-primary/70 uppercase">
              {product.origin}
            </p>
          ) : null}
          <h1 className="font-heading text-5xl tracking-wide text-primary">
            {product.name}
          </h1>
          <p className="text-lg leading-relaxed text-foreground/80">
            {product.description}
          </p>
          <ProductActions product={product} />
          <div className="rounded-2xl border border-primary/15 bg-card p-4 text-sm leading-relaxed text-muted-foreground">
            Chat WhatsApp to confirm this is on the shelf today, then we will quote
            delivery to your area. MadeBrings does not offer free delivery.
          </div>
        </div>
      </div>
      {related.length > 0 ? (
        <section className="mt-16">
          <h2 className="mb-6 font-heading text-3xl tracking-wide text-primary">
            Nearby on the same shelf
          </h2>
          <ProductGrid products={related} />
        </section>
      ) : null}
    </div>
  );
}
