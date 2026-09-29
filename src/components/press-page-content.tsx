import { BookingBand } from "@/components/booking-band";
import {
  breadcrumbJsonLd,
  JsonLd,
  localBusinessJsonLd,
  webPageJsonLd,
} from "@/components/json-ld";
import { SpeakableBlock } from "@/components/speakable-block";
import { LocaleLink } from "@/components/locale-link";
import type { Locale } from "@/lib/i18n";
import { getPressCopy, pressDateModified, pressPageMeta } from "@/lib/press-copy";
import { MONEY_PATH, PRESS_PATH } from "@/lib/seo-paths";
import { siteConfig, whatsappHref } from "@/lib/site";
import Image from "next/image";

export function PressPageContent({ locale }: { locale: Locale }) {
  const copy = getPressCopy(locale);
  const meta = pressPageMeta[locale];

  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      <JsonLd
        data={[
          localBusinessJsonLd(locale),
          webPageJsonLd({
            name: copy.h1,
            description: meta.description,
            path: PRESS_PATH,
            locale,
            dateModified: pressDateModified,
          }),
          breadcrumbJsonLd(
            [
              { name: "Home", path: "/" },
              { name: copy.h1, path: PRESS_PATH },
            ],
            locale,
          ),
        ]}
      />
      <p className="text-xs font-medium tracking-[0.22em] text-primary/70 uppercase">
        {copy.kicker}
      </p>
      <h1 className="mt-3 font-heading text-5xl tracking-wide text-primary sm:text-6xl">
        {copy.h1}
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-foreground/80">{copy.lead}</p>
      <div className="mt-8 overflow-hidden rounded-3xl bg-[#efe0c4] p-8">
        <Image
          src="/logo.png"
          alt="MadeBrings emblem"
          width={280}
          height={280}
          className="mx-auto"
        />
      </div>
      <div className="mt-10">
        <SpeakableBlock>{copy.speakable}</SpeakableBlock>
      </div>
      <section className="mt-12">
        <h2 className="font-heading text-3xl tracking-wide text-primary">
          {copy.factsHeading}
        </h2>
        <dl className="mt-4 divide-y divide-primary/10 overflow-hidden rounded-2xl border border-primary/10 bg-card">
          {copy.facts.map((fact) => (
            <div key={fact.label} className="grid gap-1 px-4 py-3 sm:grid-cols-[10rem_1fr]">
              <dt className="text-xs font-medium tracking-[0.18em] text-primary/70 uppercase">
                {fact.label}
              </dt>
              <dd className="text-sm leading-relaxed">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="mt-12 space-y-3">
        <h2 className="font-heading text-3xl tracking-wide text-primary">
          {copy.boilerplateHeading}
        </h2>
        <p className="text-base leading-relaxed text-foreground/80">{copy.boilerplate}</p>
      </section>
      <section className="mt-12 space-y-3">
        <h2 className="font-heading text-3xl tracking-wide text-primary">
          {copy.assetsHeading}
        </h2>
        <p className="text-base leading-relaxed text-foreground/80">{copy.assetsBody}</p>
      </section>
      <section className="mt-12 space-y-3">
        <h2 className="font-heading text-3xl tracking-wide text-primary">
          {copy.contactHeading}
        </h2>
        <p className="text-base leading-relaxed text-foreground/80">{copy.contactBody}</p>
      </section>
      <section className="mt-12 space-y-3">
        <h2 className="font-heading text-3xl tracking-wide text-primary">
          {copy.usageHeading}
        </h2>
        <ul className="list-disc space-y-1 pl-5 text-base">
          {copy.usage.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          <LocaleLink
            href={MONEY_PATH}
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            {MONEY_PATH}
          </LocaleLink>
        </p>
      </section>
      <div className="mt-12">
        <BookingBand
          title={siteConfig.name}
          body={copy.boilerplate}
          whatsappHref={whatsappHref(
            locale === "id"
              ? "Halo MadeBrings, saya menghubungi dari kit pers."
              : "Hi MadeBrings, I am contacting you from the press kit.",
          )}
          whatsappLabel={locale === "id" ? "WhatsApp toko" : "WhatsApp the shop"}
          secondaryLabel={locale === "id" ? "Halaman antar alkohol" : "Alcohol delivery page"}
        />
      </div>
    </article>
  );
}
