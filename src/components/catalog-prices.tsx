import { LocaleLink } from "@/components/locale-link";
import { shelfPriceRows } from "@/lib/seo/facts";

export function CatalogPrices({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  const rows = shelfPriceRows();
  return (
    <section className="mt-12">
      <h2 className="font-heading text-3xl tracking-wide text-primary">{title}</h2>
      <p className="mt-3 text-base leading-relaxed text-foreground/80">{body}</p>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-primary/10 bg-card">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-primary/10 text-xs tracking-[0.14em] text-primary/70 uppercase">
            <tr>
              <th className="px-4 py-3 font-medium">Item</th>
              <th className="px-4 py-3 font-medium">Size</th>
              <th className="px-4 py-3 font-medium">Price</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-b border-primary/5 last:border-0">
                <td className="px-4 py-3">
                  <LocaleLink href={row.href} className="font-medium text-primary underline-offset-4 hover:underline">
                    {row.name}
                  </LocaleLink>
                </td>
                <td className="px-4 py-3 text-muted-foreground">{row.size}</td>
                <td className="px-4 py-3 font-medium">{row.priceLabel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
