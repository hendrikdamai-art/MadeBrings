import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TranslatedText } from "@/components/translated";
import { JsonLd, productJsonLd } from "@/components/json-ld";
import { ProductActions } from "@/components/product-actions";
import { ProductGrid } from "@/components/product-grid";
import {
  getCategory,
  getProductBySlug,
  getProducts,
  getProductsByCategory,
} from "@/lib/commerce";
import { categoryNameKey } from "@/lib/i18n";
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
    description: `${product.summary} Order via WhatsApp from MadeBrings alcohol delivery in Abianbase, Bali.`,
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
          <TranslatedText k="navShop" />
        </Link>
        {category ? (
          <>
            {" / "}
            <Link href={category.href} className="hover:text-primary">
              <TranslatedText k={categoryNameKey[category.id] ?? "navShop"} />
            </Link>
          </>
        ) : null}
      </p>
      <div className="mt-6 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-white">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain p-4"
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
        </div>
      </div>
      {related.length > 0 ? (
        <section className="mt-16">
          <h2 className="mb-6 font-heading text-3xl tracking-wide text-primary">
            <TranslatedText k="productRelated" />
          </h2>
          <ProductGrid products={related} />
        </section>
      ) : null}
    </div>
  );
}
