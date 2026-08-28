"use client";

import Link from "next/link";
import { Banknote, MessageCircle, Truck } from "lucide-react";
import { BlogGrid } from "@/components/blog-card";
import { HomeHero } from "@/components/home-hero";
import { useLocale } from "@/components/locale-provider";
import { ProductGrid } from "@/components/product-grid";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { categoryIntroKey, categoryNameKey } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { Category, Product } from "@/lib/commerce";
import type { BlogPost } from "@/lib/blog";

export function HomeContent({
  featured,
  categories,
  posts,
}: {
  featured: Product[];
  categories: Category[];
  posts: BlogPost[];
}) {
  const { t } = useLocale();
  const steps = [
    { icon: Banknote, title: t("step1Title"), text: t("step1Text") },
    { icon: MessageCircle, title: t("step2Title"), text: t("step2Text") },
    { icon: Truck, title: t("step3Title"), text: t("step3Text") },
  ];

  return (
    <>
      <HomeHero />

      <section className="border-y border-primary/10 bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-6 sm:grid-cols-3">
          {steps.map((item) => (
            <div key={item.title} className="flex gap-3">
              <item.icon className="mt-0.5 size-5 shrink-0" />
              <div>
                <p className="font-heading text-xl tracking-wide">{item.title}</p>
                <p className="text-sm text-primary-foreground/80">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium tracking-[0.22em] text-primary/70 uppercase">
              {t("shelvesKicker")}
            </p>
            <h2 className="font-heading text-4xl tracking-wide text-primary">
              {t("shelvesTitle")}
            </h2>
          </div>
          <Link href="/shop" className="text-sm font-medium text-primary underline-offset-4 hover:underline">
            {t("shelvesSee")}
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="rounded-2xl border border-primary/10 bg-card p-5 transition-transform hover:-translate-y-0.5"
            >
              <p className="font-heading text-2xl tracking-wide text-primary">
                {t(categoryNameKey[category.id] ?? "navShop")}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t(categoryIntroKey[category.id] ?? "shopIntro")}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="mb-8">
          <p className="text-xs font-medium tracking-[0.22em] text-primary/70 uppercase">
            {t("featuredKicker")}
          </p>
          <h2 className="font-heading text-4xl tracking-wide text-primary">
            {t("featuredTitle")}
          </h2>
        </div>
        <ProductGrid products={featured} />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium tracking-[0.22em] text-primary/70 uppercase">
              {t("journalKicker")}
            </p>
            <h2 className="font-heading text-4xl tracking-wide text-primary">
              {t("journalTitle")}
            </h2>
          </div>
          <Link href="/blog" className="text-sm font-medium text-primary underline-offset-4 hover:underline">
            {t("journalAll")}
          </Link>
        </div>
        <BlogGrid posts={posts} />
      </section>

      <section className="bg-primary/95 text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-4xl tracking-wide">{t("howTitle")}</h2>
            <ol className="mt-6 space-y-4 text-primary-foreground/90">
              <li>
                <span className="font-heading text-2xl">1.</span> {t("how1")}
              </li>
              <li>
                <span className="font-heading text-2xl">2.</span> {t("how2")}
              </li>
              <li>
                <span className="font-heading text-2xl">3.</span> {t("how3")}
              </li>
            </ol>
          </div>
          <div className="rounded-3xl bg-[#f8ecd8] p-6 text-primary">
            <h3 className="font-heading text-3xl tracking-wide">{t("findTitle")}</h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              {t("findBody", { place: siteConfig.address.display })}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={siteConfig.social.maps}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-10 rounded-full px-4 font-heading tracking-wide",
                )}
              >
                {t("maps")}
              </a>
              <Link
                href="/about"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-10 rounded-full border-primary/30 px-4 font-heading tracking-wide",
                )}
              >
                {t("aboutFamily")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
