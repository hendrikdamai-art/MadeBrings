export function SpeakableBlock({
  kicker,
  children,
}: {
  kicker?: string;
  children: string;
}) {
  return (
    <div
      data-speakable="true"
      className="rounded-3xl border border-primary/15 bg-card p-6"
    >
      {kicker ? (
        <p className="text-xs font-medium tracking-[0.22em] text-primary/70 uppercase">
          {kicker}
        </p>
      ) : null}
      <p className="mt-2 text-base leading-relaxed text-foreground/85">{children}</p>
    </div>
  );
}
