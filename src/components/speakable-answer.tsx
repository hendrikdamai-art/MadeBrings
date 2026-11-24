import { cn } from "@/lib/utils";

export function SpeakableAnswer({
  children,
  className,
  heading,
}: {
  children: string;
  className?: string;
  heading?: string;
}) {
  return (
    <section
      className={cn(
        "rounded-3xl border border-primary/15 bg-card px-5 py-6 sm:px-8 sm:py-8",
        className,
      )}
    >
      {heading ? (
        <h2 className="font-heading text-3xl tracking-wide text-primary">{heading}</h2>
      ) : null}
      <p
        data-speakable="true"
        className={cn(
          "max-w-3xl text-base leading-relaxed text-foreground/85 sm:text-lg",
          heading && "mt-4",
        )}
      >
        {children}
      </p>
    </section>
  );
}
