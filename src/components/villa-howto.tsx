import { LocaleLink } from "@/components/locale-link";
import { JsonLd, howToJsonLd } from "@/components/json-ld";
import { villaFridgeSteps } from "@/lib/compare";
import type { Locale } from "@/lib/i18n";
import { messages } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/seo";
import { localizedPath } from "@/lib/locale-path";

export function VillaHowTo({ locale }: { locale: Locale }) {
  const t = messages[locale];
  const steps = villaFridgeSteps[locale];
  return (
    <section className="mt-14 rounded-3xl border border-primary/10 bg-card p-6 sm:p-8">
      <JsonLd
        data={howToJsonLd({
          name: t.howToTitle,
          description: t.howToLead,
          steps,
          url: absoluteUrl(localizedPath(locale, "/shop/beer-cider")),
        })}
      />
      <h2 className="font-heading text-3xl tracking-wide text-primary">{t.howToTitle}</h2>
      <p className="mt-2 max-w-2xl text-base leading-relaxed text-foreground/80">
        {t.howToLead}
      </p>
      <ol className="mt-6 grid gap-4 sm:grid-cols-2">
        {steps.map((step, index) => (
          <li key={step.name} className="rounded-2xl bg-background/70 p-4">
            <p className="font-heading text-2xl tracking-wide text-primary">
              {index + 1}. {step.name}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80">{step.text}</p>
          </li>
        ))}
      </ol>
      <p className="mt-5 text-sm">
        <LocaleLink href="/" className="font-medium text-primary underline-offset-4 hover:underline">
          {t.articleBook}
        </LocaleLink>
        {" · "}
        <LocaleLink
          href="/compare/bali-alcohol-delivery"
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          {t.footerCompare}
        </LocaleLink>
      </p>
    </section>
  );
}
