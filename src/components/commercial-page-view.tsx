import type { ReactNode } from "react";
import { LocaleLink } from "@/components/locale-link";
import { FaqSection } from "@/components/faq-section";
import { OrderCta } from "@/components/order-cta";
import { SpeakableBlock } from "@/components/speakable-block";
import type { CommercialCopy } from "@/lib/commercial";

export function CommercialPageView({
  copy,
  whatsappHref,
  kickerExtra,
  shopHref,
}: {
  copy: CommercialCopy | Omit<CommercialCopy, "prices" | "priceTitle" | "priceNote">;
  whatsappHref: string;
  kickerExtra?: ReactNode;
  shopHref?: string;
}) {
  const prices = "prices" in copy ? copy.prices : undefined;

  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      <p className="text-xs font-medium tracking-[0.22em] text-primary/70 uppercase">
        {copy.kicker}
      </p>
      {kickerExtra}
      <h1 className="mt-3 font-heading text-4xl tracking-wide text-primary sm:text-5xl">
        {copy.h1}
      </h1>
      <div className="mt-8 space-y-4 text-lg leading-relaxed text-foreground/85">
        {copy.intro.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-10">
        <SpeakableBlock title={copy.speakableTitle} text={copy.speakable} />
      </div>

      <section className="mt-12">
        <h2 className="font-heading text-3xl tracking-wide text-primary">
          {copy.inclusionsTitle}
        </h2>
        <ul className="mt-4 list-disc space-y-1 pl-5 text-base leading-relaxed">
          {copy.inclusions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {prices && "priceTitle" in copy ? (
        <section className="mt-12">
          <h2 className="font-heading text-3xl tracking-wide text-primary">
            {copy.priceTitle}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-foreground/80">
            {copy.priceNote}
          </p>
          <ul className="mt-5 divide-y divide-primary/10 rounded-2xl border border-primary/10 bg-card">
            {prices.map((row) => (
              <li
                key={row.href + row.item}
                className="flex items-baseline justify-between gap-4 px-4 py-3 text-sm"
              >
                <LocaleLink href={row.href} className="font-medium text-primary hover:underline">
                  {row.item}
                </LocaleLink>
                <span className="shrink-0 tabular-nums text-foreground/80">{row.price}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <div className="mt-12 space-y-10 text-lg leading-relaxed text-foreground/85">
        {copy.sections.map((section) => (
          <section key={section.heading ?? section.paragraphs[0]?.slice(0, 24)}>
            {section.heading ? (
              <h2 className="mb-3 font-heading text-3xl tracking-wide text-primary">
                {section.heading}
              </h2>
            ) : null}
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="mt-3">
                {paragraph}
              </p>
            ))}
            {section.list ? (
              <ul className="mt-4 list-disc space-y-1 pl-5 text-base">
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            {section.link ? (
              <p className="mt-4 text-base">
                {section.link.href.startsWith("http") || section.link.href.endsWith(".png") ? (
                  <a
                    href={section.link.href}
                    className="font-medium text-primary underline-offset-4 hover:underline"
                    target={section.link.href.startsWith("http") ? "_blank" : undefined}
                    rel={section.link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {section.link.label}
                  </a>
                ) : (
                  <LocaleLink
                    href={section.link.href}
                    className="font-medium text-primary underline-offset-4 hover:underline"
                  >
                    {section.link.label}
                  </LocaleLink>
                )}
              </p>
            ) : null}
          </section>
        ))}
      </div>

      <div className="mt-12">
        <FaqSection title={copy.faqsTitle} items={copy.faqs} />
      </div>

      <div className="mt-12">
        <OrderCta
          title={copy.ctaTitle}
          body={copy.ctaBody}
          whatsappHref={whatsappHref}
          bookLabel={copy.bookLabel}
          shopLabel={copy.shopLabel}
          shopHref={shopHref}
        />
      </div>
    </article>
  );
}
