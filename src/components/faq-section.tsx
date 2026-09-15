import type { FaqItem } from "@/lib/commercial";

export function FaqSection({
  title,
  items,
}: {
  title: string;
  items: FaqItem[];
}) {
  if (items.length === 0) return null;
  return (
    <section>
      <h2 className="font-heading text-3xl tracking-wide text-primary">{title}</h2>
      <dl className="mt-6 space-y-5">
        {items.map((item) => (
          <div key={item.question}>
            <dt className="font-medium text-primary">{item.question}</dt>
            <dd className="mt-1 text-base leading-relaxed text-foreground/80">
              {item.answer}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
