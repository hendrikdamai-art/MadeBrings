/** Public beer-box prices cited on the beer-prices page. Dated. No invented discounts. */
export const PUBLIC_BEER_CHECK_DATE = "24 November 2026";

export const publicBintangBoxes = [
  {
    shop: "MadeBrings listed catalog",
    item: "Bintang Beer Box",
    priceLabel: "Rp 595.000",
    href: "/product/bintang-beer-box",
    note: "Our Abianbase shelf",
  },
  {
    shop: "The Boogaloo Bali",
    item: "Bintang Beer (24 Pack)",
    priceLabel: "Rp 600.000",
    href: "https://theboogaloobali.com/products/bintang-beer-24-pack",
    note: "Public product page",
  },
  {
    shop: "GoDrinks Bali",
    item: "Bintang (small) 24 bottles",
    priceLabel: "Rp 720.000",
    href: "https://godrinksbali.com/beers/",
    note: "Public beers page",
  },
] as const;
