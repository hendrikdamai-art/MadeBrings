import Image from "next/image";
import Link from "next/link";
import { BookingCta } from "@/components/booking-cta";
import {
  breadcrumbJsonLd,
  JsonLd,
  webPageJsonLd,
} from "@/components/json-ld";
import { SpeakableAnswer } from "@/components/speakable-answer";
import type { Locale } from "@/lib/i18n";
import { pressCopy } from "@/lib/press-kit";
import { BOOKING_PATH, PRESS_PATH, finishSpeakable } from "@/lib/seo-pages";
import { siteConfig } from "@/lib/site";

export function PressPage({ locale }: { locale: Locale }) {
  const copy = pressCopy[locale];

  return (
    <article>
      <JsonLd
        data={webPageJsonLd({
          locale,
          name: copy.h1,
          description: copy.metaDescription,
          path: PRESS_PATH,
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

      <header className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-xs font-medium tracking-[0.22em] text-primary/70 uppercase">
          {copy.kicker}
        </p>
        <h1 className="mt-3 max-w-4xl font-heading text-5xl tracking-wide text-primary sm:text-6xl">
          {copy.h1}
        </h1>
        <div className="mt-6">
          <SpeakableAnswer>{finishSpeakable(locale, copy.speakable)}</SpeakableAnswer>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="font-heading text-4xl tracking-wide text-primary">
          {copy.boilerplateTitle}
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-foreground/80">
          {copy.boilerplate}
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="font-heading text-4xl tracking-wide text-primary">
          {copy.factsTitle}
        </h2>
        <dl className="mt-6 divide-y divide-primary/10 rounded-2xl border border-primary/10 bg-card">
          {copy.facts.map((fact) => (
            <div
              key={fact.label}
              className="grid gap-1 px-4 py-3 sm:grid-cols-[12rem_1fr]"
            >
              <dt className="text-xs tracking-[0.16em] text-primary/70 uppercase">
                {fact.label}
              </dt>
              <dd className="text-sm text-foreground/85">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="font-heading text-4xl tracking-wide text-primary">
          {copy.assetsTitle}
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-foreground/80">
          {copy.assetsBody}
        </p>
        <Link href="/logo.png" className="mt-6 inline-block">
          <Image
            src="/logo.png"
            alt="MadeBrings emblem"
            width={160}
            height={160}
            className="rounded-full bg-[#f3e1c7]"
          />
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="font-heading text-4xl tracking-wide text-primary">
          {copy.quoteTitle}
        </h2>
        <blockquote className="mt-4 max-w-3xl text-xl leading-relaxed text-foreground/85">
          “{copy.quote}”
          <footer className="mt-2 text-sm text-muted-foreground">{copy.quoteAttr}</footer>
        </blockquote>
        <p className="mt-6 max-w-3xl text-base text-foreground/80">{copy.contactBody}</p>
        <p className="mt-3 text-sm">
          WhatsApp: +{siteConfig.whatsappNumber}
        </p>
      </section>

      <BookingCta
        locale={locale}
        title={copy.contactTitle}
        body={copy.contactBody}
        shopLabel={locale === "id" ? "Halaman pesan" : "Alcohol delivery Bali"}
        waLabel={locale === "id" ? "WhatsApp toko" : "WhatsApp the shop"}
        secondaryHref={BOOKING_PATH}
      />
    </article>
  );
}
