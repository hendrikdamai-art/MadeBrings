export function SpeakableAnswer({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <p
      data-speakable="true"
      className={
        className ??
        "max-w-3xl text-base leading-relaxed text-foreground/85 sm:text-lg"
      }
    >
      {children}
    </p>
  );
}
