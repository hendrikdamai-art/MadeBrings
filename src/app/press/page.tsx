import Image from "next/image";
import { BookCta } from "@/components/book-cta";
import {
  breadcrumbJsonLd,
  JsonLd,
  webPageJsonLd,
} from "@/components/json-ld";
import { SpeakableBlock } from "@/components/speakable-block";
import { CONTENT_UPDATED, PRESS_PATH } from "@/lib/seo/facts";
import { pressCopy } from "@/lib/seo/press";
import { getRequestLocale } from "@/lib/request-locale";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const locale = await getRequestLocale();
  const copy = pressCopy[locale];
  return pageMetadata({
    title: copy.title,
    description: copy.description,
    path: PRESS_PATH,
    locale,
    dateModified: CONTENT_UPDATED,
  });
}

export default async function PressPage() {
  const locale = await getRequestLocale();
  const copy = pressCopy[locale];

  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      <JsonLd
        data={webPageJsonLd({
          title: copy.title,
          description: copy.description,
          path: PRESS_PATH,
          locale,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd(
          [
            { name: "Home", path: "/" },
            { name: copy.h1, path: PRESS_PATH },
          ],
          locale,
        )}
      />
      <p className="text-xs font-medium tracking-[0.22em] text-primary/70 uppercase">
        {copy.kicker}
      </p>
      <h1 className="mt-3 font-heading text-5xl tracking-wide text-primary sm:text-6xl">
        {copy.h1}
      </h1>
      <SpeakableBlock className="mt-6 text-lg leading-relaxed text-foreground/85">
        {copy.speakable}
      </SpeakableBlock>

      <div className="mt-8 overflow-hidden rounded-3xl bg-[#efe0c4] p-6">
        <Image
          src="/logo.png"
          alt="MadeBrings emblem"
          width={240}
          height={240}
          className="mx-auto"
        />
      </div>

      <section className="mt-12">
        <h2 className="font-heading text-3xl tracking-wide text-primary">
          {copy.boilerplateTitle}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-foreground/80">{copy.boilerplate}</p>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-3xl tracking-wide text-primary">{copy.factsTitle}</h2>
        <dl className="mt-4 divide-y divide-primary/10 rounded-2xl border border-primary/10 bg-card">
          {copy.facts.map((fact) => (
            <div key={fact.label} className="grid gap-1 px-4 py-3 sm:grid-cols-[10rem_1fr]">
              <dt className="text-xs font-medium tracking-[0.14em] text-primary/70 uppercase">
                {fact.label}
              </dt>
              <dd className="text-sm text-foreground/85">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-3xl tracking-wide text-primary">{copy.quoteTitle}</h2>
        <blockquote className="mt-4 border-l-4 border-primary pl-4 text-lg leading-relaxed text-foreground/85">
          {copy.quote}
        </blockquote>
        <p className="mt-2 text-sm text-muted-foreground">{copy.quoteAttr}</p>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-3xl tracking-wide text-primary">{copy.assetsTitle}</h2>
        <p className="mt-3 text-base leading-relaxed text-foreground/80">{copy.assetsBody}</p>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-3xl tracking-wide text-primary">{copy.citeTitle}</h2>
        <p className="mt-3 text-base leading-relaxed text-foreground/80">{copy.citeBody}</p>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-3xl tracking-wide text-primary">{copy.contactTitle}</h2>
        <p className="mt-3 text-base leading-relaxed text-foreground/80">{copy.contactBody}</p>
      </section>

      <BookCta
        locale={locale}
        title={locale === "id" ? "Chat toko" : "Chat the shop"}
        body={copy.contactBody}
        shopLabel={locale === "id" ? "Lihat toko" : "Browse the shop"}
        bookLabel={locale === "id" ? "PESAN SEKARANG" : "ORDER NOW"}
        showMoneyLink
      />
    </article>
  );
}
