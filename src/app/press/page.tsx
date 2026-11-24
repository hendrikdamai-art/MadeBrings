import Image from "next/image";
import { LocaleLink } from "@/components/locale-link";
import { JsonLd, breadcrumbJsonLd, webPageJsonLd } from "@/components/json-ld";
import { WhatsAppIcon, whatsappButtonClass } from "@/components/whatsapp-icon";
import { buttonVariants } from "@/components/ui/button";
import { PRESS_MODIFIED, PRESS_PATH, pressCopy, pressFacts } from "@/lib/press";
import { getRequestLocale } from "@/lib/request-locale";
import { pageMetadata } from "@/lib/seo";
import { siteConfig, whatsappHref } from "@/lib/site";
import { messages } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export async function generateMetadata() {
  const locale = await getRequestLocale();
  const copy = pressCopy[locale];
  return pageMetadata({
    title: copy.title,
    description: copy.description,
    path: PRESS_PATH,
    locale,
    dateModified: PRESS_MODIFIED,
  });
}

export default async function PressPage() {
  const locale = await getRequestLocale();
  const copy = pressCopy[locale];
  const facts = pressFacts[locale];
  const t = messages[locale];
  const orderHref = whatsappHref(t.waGreeting);

  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      <JsonLd
        data={webPageJsonLd({
          locale,
          path: PRESS_PATH,
          name: copy.title,
          description: copy.description,
          dateModified: PRESS_MODIFIED,
          speakable: false,
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
      <p className="mt-4 text-lg leading-relaxed text-foreground/80">{copy.lead}</p>

      <div className="mt-8 overflow-hidden rounded-3xl bg-[#efe0c4] p-8">
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
        <p className="mt-3 text-base leading-relaxed text-foreground/80">
          {copy.boilerplate}
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-3xl tracking-wide text-primary">
          {copy.factsTitle}
        </h2>
        <dl className="mt-4 divide-y divide-primary/10 rounded-3xl border border-primary/10 bg-card">
          {facts.map((fact) => (
            <div key={fact.label} className="grid gap-1 px-5 py-4 sm:grid-cols-[12rem_1fr]">
              <dt className="text-sm font-medium text-primary">{fact.label}</dt>
              <dd className="text-sm leading-relaxed text-foreground/80">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-3xl tracking-wide text-primary">
          {copy.assetsTitle}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-foreground/80">{copy.assetsBody}</p>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-3xl tracking-wide text-primary">
          {copy.mentionTitle}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-foreground/80">{copy.mentionBody}</p>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-3xl tracking-wide text-primary">
          {copy.contactTitle}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-foreground/80">
          {siteConfig.owner} · {siteConfig.address.display}
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={orderHref}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              whatsappButtonClass,
              "h-11 rounded-full px-5 font-heading text-lg tracking-wide",
            )}
          >
            <WhatsAppIcon className="size-4" />
            {t.orderNow}
          </a>
          <LocaleLink
            href="/"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-11 rounded-full border-primary/30 px-5 font-heading text-lg tracking-wide",
            )}
          >
            {t.articleBook}
          </LocaleLink>
        </div>
      </section>
    </article>
  );
}
