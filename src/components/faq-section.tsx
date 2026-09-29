import type { FaqItem } from "@/lib/money-copy";

export function FaqSection({
  heading,
  faqs,
}: {
  heading: string;
  faqs: FaqItem[];
}) {
  if (!faqs.length) return null;
  return (
    <section className="space-y-5">
      <h2 className="font-heading text-3xl tracking-wide text-primary">{heading}</h2>
      <dl className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.question} className="rounded-2xl border border-primary/10 bg-card p-5">
            <dt className="font-heading text-2xl tracking-wide text-primary">
              {faq.question}
            </dt>
            <dd className="mt-2 text-sm leading-relaxed text-foreground/80">{faq.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
