import { getProductById } from "@/lib/commerce";
import { formatIdr } from "@/lib/format";
import { whatsappHref } from "@/lib/site";

export type OrderLine = {
  productId: string;
  quantity: number;
};

export function buildOrderMessage(lines: OrderLine[], note: string) {
  const items = lines
    .map((line) => {
      const product = getProductById(line.productId);
      if (!product) return null;
      const lineTotal = product.priceIdr * line.quantity;
      return `• ${line.quantity}× ${product.name} (${formatIdr(lineTotal)})`;
    })
    .filter(Boolean);

  const subtotal = lines.reduce((sum, line) => {
    const product = getProductById(line.productId);
    return sum + (product ? product.priceIdr * line.quantity : 0);
  }, 0);

  const noteBlock = note.trim()
    ? `\nArea / notes:\n${note.trim()}\n`
    : `\nArea / notes: (I will share my location)\n`;

  return [
    "Hi MadeBrings, I would like to order from the shop in Abianbase.",
    "",
    "Order list:",
    ...items,
    "",
    `Subtotal: ${formatIdr(subtotal)}`,
    noteBlock,
    "Please confirm:",
    "1. Whether these items are in stock",
    "2. Delivery cost to my area (I know delivery is not free)",
    "3. Payment by cash or bank transfer",
  ].join("\n");
}

export function orderWhatsappHref(lines: OrderLine[], note: string) {
  return whatsappHref(buildOrderMessage(lines, note));
}
