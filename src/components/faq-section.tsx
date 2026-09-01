import type { FaqItem } from "@/lib/seo/money";

export function FaqSection({
  title,
  faqs,
}: {
  title: string;
  faqs: FaqItem[];
}) {
  return (
    <section className="mt-12">
      <h2 className="font-heading text-3xl tracking-wide text-primary">{title}</h2>
      <dl className="mt-6 space-y-5">
        {faqs.map((faq) => (
          <div key={faq.question} className="rounded-2xl border border-primary/10 bg-card p-5">
            <dt className="font-heading text-xl tracking-wide text-primary">{faq.question}</dt>
            <dd className="mt-2 text-base leading-relaxed text-foreground/80">{faq.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
