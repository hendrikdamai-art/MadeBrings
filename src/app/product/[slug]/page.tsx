import Image from "next/image";
import { notFound } from "next/navigation";
import { TranslatedText } from "@/components/translated";
import { JsonLd, productJsonLd } from "@/components/json-ld";
import { LocaleLink } from "@/components/locale-link";
import { ProductActions } from "@/components/product-actions";
import { RelatedProducts } from "@/components/related-products";
import {
  getCategory,
  getProductBySlug,
  getProducts,
  getProductsByCategory,
  productCopy,
} from "@/lib/commerce";
import { categoryNameKey } from "@/lib/i18n";
import { getRequestLocale } from "@/lib/request-locale";
import { pageMetadata } from "@/lib/seo";
import { seoCopy } from "@/lib/seo-copy";

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
  const locale = await getRequestLocale();
  const copy = productCopy(product, locale);
  const description =
    locale === "id"
      ? `${copy.summary} Pesan antar alkohol MadeBrings di Abianbase, Bali, lewat WhatsApp.`
      : `${product.summary} Order via WhatsApp from MadeBrings alcohol delivery in Abianbase, Bali.`;
  return pageMetadata({
    title: product.name,
    description,
    path: `/product/${product.slug}`,
    keywords: seoCopy[locale].keywords,
    locale,
  });
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  const locale = await getRequestLocale();
  const copy = productCopy(product, locale);
  const category = getCategory(product.category);
  const related = getProductsByCategory(product.category)
    .filter((item) => item.id !== product.id)
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <JsonLd data={productJsonLd(product, locale)} />
      <p className="text-sm text-muted-foreground">
        <LocaleLink href="/shop" className="hover:text-primary">
          <TranslatedText k="navShop" />
        </LocaleLink>
        {category ? (
          <>
            {" / "}
            <LocaleLink href={category.href} className="hover:text-primary">
              <TranslatedText k={categoryNameKey[category.id] ?? "navShop"} />
            </LocaleLink>
          </>
        ) : null}
      </p>
      <div className="mt-6 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-white">
          <Image
            src={product.image}
            alt={copy.imageAlt}
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
            {copy.description}
          </p>
          <ProductActions product={product} />
        </div>
      </div>
      <RelatedProducts products={related} />
    </div>
  );
}
