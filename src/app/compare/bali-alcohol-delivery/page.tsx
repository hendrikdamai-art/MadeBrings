import { LocaleLink } from "@/components/locale-link";
import {
  JsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
  howToJsonLd,
  webPageJsonLd,
} from "@/components/json-ld";
import { SpeakableAnswer } from "@/components/speakable-answer";
import { WhatsAppIcon, whatsappButtonClass } from "@/components/whatsapp-icon";
import { buttonVariants } from "@/components/ui/button";
import {
  COMPARE_MODIFIED,
  COMPARE_PATH,
  compareCopy,
  compareFaqs,
  compareRows,
  villaFridgeSteps,
} from "@/lib/compare";
import { getRequestLocale } from "@/lib/request-locale";
import { pageMetadata } from "@/lib/seo";
import { whatsappHref } from "@/lib/site";
import { cn } from "@/lib/utils";
import { messages } from "@/lib/i18n";

export async function generateMetadata() {
  const locale = await getRequestLocale();
  const copy = compareCopy[locale];
  return pageMetadata({
    title: copy.title,
    description: copy.description,
    path: COMPARE_PATH,
    locale,
    dateModified: COMPARE_MODIFIED,
  });
}

export default async function ComparePage() {
  const locale = await getRequestLocale();
  const copy = compareCopy[locale];
  const rows = compareRows[locale];
  const faqs = compareFaqs[locale];
  const steps = villaFridgeSteps[locale];
  const t = messages[locale];
  const orderHref = whatsappHref(t.waGreeting);

  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      <JsonLd
        data={webPageJsonLd({
          locale,
          path: COMPARE_PATH,
          name: copy.title,
          description: copy.description,
          dateModified: COMPARE_MODIFIED,
        })}
      />
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd
        data={howToJsonLd({
          name: copy.stepsTitle,
          description: copy.whoMade,
          steps,
          url: COMPARE_PATH,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd(
          [
            { name: "Home", path: "/" },
            { name: copy.h1, path: COMPARE_PATH },
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
      <SpeakableAnswer className="mt-8" heading={t.moneyAnswerTitle}>
        {copy.answer}
      </SpeakableAnswer>

      <section className="mt-12">
        <h2 className="font-heading text-3xl tracking-wide text-primary">
          {copy.methodTitle}
        </h2>
        {copy.methodBody.map((paragraph) => (
          <p key={paragraph.slice(0, 40)} className="mt-3 text-base leading-relaxed text-foreground/80">
            {paragraph}
          </p>
        ))}
        <ul className="mt-4 list-disc space-y-1 pl-5 text-base">
          {copy.methodList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-3xl tracking-wide text-primary">
          {copy.criteriaTitle}
        </h2>
        <div className="mt-6 overflow-hidden rounded-3xl border border-primary/10 bg-card">
          <table className="w-full text-left text-sm">
            <thead className="bg-primary text-primary-foreground">
              <tr>
                <th className="px-4 py-3 font-heading text-lg tracking-wide"> </th>
                <th className="px-4 py-3 font-heading text-lg tracking-wide">MadeBrings</th>
                <th className="px-4 py-3 font-heading text-lg tracking-wide">24/7 operators</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.criterion} className="border-t border-primary/10 align-top">
                  <th className="px-4 py-3 font-medium text-primary">{row.criterion}</th>
                  <td className="px-4 py-3 text-foreground/80">{row.madebrings}</td>
                  <td className="px-4 py-3 text-foreground/80">{row.overnight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-3xl tracking-wide text-primary">
          {copy.whoTitle}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-foreground/80">{copy.whoMade}</p>
        <p className="mt-3 text-base leading-relaxed text-foreground/80">{copy.who24}</p>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-3xl tracking-wide text-primary">
          {copy.stepsTitle}
        </h2>
        <ol className="mt-5 space-y-4">
          {steps.map((step, index) => (
            <li key={step.name} className="rounded-2xl border border-primary/10 bg-card p-5">
              <p className="font-heading text-2xl tracking-wide text-primary">
                {index + 1}. {step.name}
              </p>
              <p className="mt-2 text-base leading-relaxed text-foreground/80">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-3xl tracking-wide text-primary">{copy.faqTitle}</h2>
        <dl className="mt-4 space-y-4">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <dt className="font-heading text-2xl tracking-wide text-primary">
                {faq.question}
              </dt>
              <dd className="mt-1 text-base leading-relaxed text-foreground/80">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="mt-12 flex flex-wrap gap-3">
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
            buttonVariants({ size: "lg" }),
            "h-11 rounded-full px-5 font-heading text-lg tracking-wide",
          )}
        >
          {t.articleBook}
        </LocaleLink>
        <LocaleLink
          href="/blog/alcohol-delivery-ubud-tanah-lot"
          className="self-center text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          {t.guideUbud}
        </LocaleLink>
      </div>
    </article>
  );
}
