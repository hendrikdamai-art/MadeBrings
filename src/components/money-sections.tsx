"use client";

import { LocaleLink } from "@/components/locale-link";
import { SpeakableAnswer } from "@/components/speakable-answer";
import { WhatsAppIcon, whatsappButtonClass } from "@/components/whatsapp-icon";
import { buttonVariants } from "@/components/ui/button";
import { useLocale } from "@/components/locale-provider";
import {
  inclusions,
  moneyFaqs,
  moneySpeakable,
  notIncluded,
  serviceAreas,
  starterPrices,
} from "@/lib/delivery";
import { cn } from "@/lib/utils";

export function MoneySections() {
  const { locale, t, orderHref } = useLocale();
  const prices = starterPrices();
  const faqs = moneyFaqs[locale];
  const included = inclusions[locale];
  const excluded = notIncluded[locale];
  const areas = serviceAreas.filter((area) => area !== "Bali" && area !== "Badung");

  return (
    <>
      <section id="delivery" className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-xs font-medium tracking-[0.22em] text-primary/70 uppercase">
          {t("moneyKicker")}
        </p>
        <h2 className="mt-2 font-heading text-4xl tracking-wide text-primary sm:text-5xl">
          {t("moneyTitle")}
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-foreground/80">
          {t("moneyLead")}
        </p>
        <SpeakableAnswer className="mt-8" heading={t("moneyAnswerTitle")}>
          {moneySpeakable[locale]}
        </SpeakableAnswer>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <h2 className="font-heading text-4xl tracking-wide text-primary">
          {t("areasTitle")}
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-foreground/80">
          {t("areasBody")}
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {areas.map((area) => (
            <li
              key={area}
              className="rounded-full border border-primary/15 bg-card px-4 py-2 text-sm font-medium text-primary"
            >
              {area}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium">
          <LocaleLink
            href="/blog/alcohol-delivery-canggu"
            className="text-primary underline-offset-4 hover:underline"
          >
            {t("guideCanggu")}
          </LocaleLink>
          <LocaleLink
            href="/blog/beer-delivery-seminyak"
            className="text-primary underline-offset-4 hover:underline"
          >
            {t("guideSeminyak")}
          </LocaleLink>
          <LocaleLink
            href="/blog/alcohol-delivery-kuta"
            className="text-primary underline-offset-4 hover:underline"
          >
            {t("guideKuta")}
          </LocaleLink>
        </div>
      </section>

      <section className="bg-primary/5">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-heading text-4xl tracking-wide text-primary">
            {t("pricesTitle")}
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-foreground/80">
            {t("pricesBody")}
          </p>
          <div className="mt-8 overflow-hidden rounded-3xl border border-primary/10 bg-card">
            <table className="w-full text-left text-sm">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-4 py-3 font-heading text-lg tracking-wide">
                    {t("pricesItem")}
                  </th>
                  <th className="px-4 py-3 font-heading text-lg tracking-wide">
                    {t("pricesSize")}
                  </th>
                  <th className="px-4 py-3 font-heading text-lg tracking-wide">
                    {t("pricesPrice")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {prices.map((row) => (
                  <tr key={row.id} className="border-t border-primary/10">
                    <td className="px-4 py-3">
                      <LocaleLink
                        href={row.href}
                        className="font-medium text-primary underline-offset-4 hover:underline"
                      >
                        {row.name}
                      </LocaleLink>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{row.size}</td>
                    <td className="px-4 py-3 font-medium">{row.priceLabel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-14 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-4xl tracking-wide text-primary">
            {t("includedTitle")}
          </h2>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-base leading-relaxed text-foreground/80">
            {included.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-heading text-4xl tracking-wide text-primary">
            {t("notIncludedTitle")}
          </h2>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-base leading-relaxed text-foreground/80">
            {excluded.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-4 pb-14">
        <h2 className="font-heading text-4xl tracking-wide text-primary">
          {t("faqTitle")}
        </h2>
        <dl className="mt-8 space-y-5">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-primary/10 bg-card p-5"
            >
              <dt className="font-heading text-2xl tracking-wide text-primary">
                {faq.question}
              </dt>
              <dd className="mt-2 text-base leading-relaxed text-foreground/80">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
        <a
          href={orderHref}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ size: "lg" }),
            whatsappButtonClass,
            "mt-8 h-11 rounded-full px-5 font-heading text-lg tracking-wide",
          )}
        >
          <WhatsAppIcon className="size-4" />
          {t("orderNow")}
        </a>
      </section>
    </>
  );
}
