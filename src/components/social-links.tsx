import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type SocialKey = keyof typeof siteConfig.social;

const icons: Record<SocialKey, { label: string; svg: React.ReactNode }> = {
  whatsapp: {
    label: "WhatsApp",
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
        <path d="M20.52 3.48A11.78 11.78 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.86 11.86 0 0 0 5.75 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.44-8.44ZM12.06 21.8h-.01a9.86 9.86 0 0 1-5.02-1.37l-.36-.21-3.74.98 1-3.64-.24-.37a9.84 9.84 0 0 1-1.51-5.28c0-5.44 4.43-9.86 9.88-9.86 2.64 0 5.12 1.03 6.98 2.9a9.82 9.82 0 0 1 2.9 6.97c0 5.44-4.43 9.88-9.88 9.88Zm5.41-7.4c-.3-.15-1.76-.87-2.03-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.04-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
      </svg>
    ),
  },
  maps: {
    label: "Google Maps",
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
      </svg>
    ),
  },
  instagram: {
    label: "Instagram",
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5Zm5.25-3.75a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z" />
      </svg>
    ),
  },
  facebook: {
    label: "Facebook",
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
        <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h3l1-3h-4V10c0-.6.4-1 1-1Z" />
      </svg>
    ),
  },
  tripadvisor: {
    label: "TripAdvisor",
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
        <path d="M8.2 10.4a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4Zm7.6 0a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM12 4c-4.6 0-8.6 2.2-11.2 5.6L0 10.8l.8 1.2C3.4 15.4 7.4 17.6 12 17.6s8.6-2.2 11.2-5.6l.8-1.2-.8-1.2C20.6 6.2 16.6 4 12 4Zm-3.8 4.1a3.5 3.5 0 1 0 3.3 4.7h.9a3.5 3.5 0 1 0 3.3-4.7 8.9 8.9 0 0 0-7.5 0Z" />
      </svg>
    ),
  },
};

const order: SocialKey[] = [
  "whatsapp",
  "maps",
  "instagram",
  "facebook",
  "tripadvisor",
];

export function SocialLinks({
  className,
  iconClassName,
  invert = false,
}: {
  className?: string;
  iconClassName?: string;
  invert?: boolean;
}) {
  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {order.map((key) => {
        const item = icons[key];
        return (
          <li key={key}>
            <a
              href={siteConfig.social[key]}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              title={item.label}
              className={cn(
                "inline-flex size-9 items-center justify-center rounded-full border transition-colors",
                invert
                  ? "border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/10"
                  : "border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground",
                iconClassName,
              )}
            >
              {item.svg}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
