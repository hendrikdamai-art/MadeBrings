import { NextResponse } from "next/server";
import { getSeoInventory } from "@/lib/seo-inventory";

export async function GET() {
  const inventory = getSeoInventory();
  return NextResponse.json({
    ok: true,
    moneyPage: "/",
    ...inventory,
  });
}
