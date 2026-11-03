import type { FaqItem } from "@/lib/seo-pages";

export function FaqList({
  title,
  faqs,
}: {
  title: string;
  faqs: FaqItem[];
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="font-heading text-4xl tracking-wide text-primary">{title}</h2>
      <div className="mt-6 space-y-4">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="rounded-2xl border border-primary/10 bg-card p-5"
          >
            <summary className="cursor-pointer font-heading text-2xl tracking-wide text-primary">
              {faq.question}
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80 sm:text-base">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
