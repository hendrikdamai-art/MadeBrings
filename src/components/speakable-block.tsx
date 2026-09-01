export function SpeakableBlock({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <p data-speakable="true" className={className}>
      {children}
    </p>
  );
}
