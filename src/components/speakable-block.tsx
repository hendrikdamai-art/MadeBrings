export function SpeakableBlock({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <section className="rounded-3xl border border-primary/15 bg-card p-6">
      <h2 className="font-heading text-3xl tracking-wide text-primary">{title}</h2>
      <p
        data-speakable="true"
        className="mt-3 text-base leading-relaxed text-foreground/85"
      >
        {text}
      </p>
    </section>
  );
}
