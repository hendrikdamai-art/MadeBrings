export function AiIndexLinks({
  label,
  llmsLabel,
  fullLabel,
}: {
  label: string;
  llmsLabel: string;
  fullLabel: string;
}) {
  return (
    <p className="text-xs text-primary-foreground/70">
      {label}{" "}
      <a href="/llms.txt" className="underline-offset-4 hover:underline">
        {llmsLabel}
      </a>
      {" · "}
      <a href="/llms-full.txt" className="underline-offset-4 hover:underline">
        {fullLabel}
      </a>
    </p>
  );
}
