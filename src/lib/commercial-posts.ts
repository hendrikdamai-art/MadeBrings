import { cdnImage } from "@/lib/commerce/images";
import type { BlogPost } from "@/lib/blog";
import { PUBLIC_BEER_CHECK_DATE, publicBintangBoxes } from "@/lib/public-beer-prices";

export const commercialPosts: BlogPost[] = [
  {
    slug: "beer-prices-bali",
    intent: "commercial",
    query: "how much is a beer in Bali",
    bookingHref: "/",
    priceProductIds: [
      "singaraja-pilsner-330",
      "bintang-330",
      "bintang-330-6pack",
      "bintang-beer-box",
      "singaraja-pilsner-box",
      "ice-bag-4kg",
    ],
    inclusions: [
      "Listed neighborhood beer prices from the Abianbase shop — not a beach-club menu",
      "Singaraja, Bintang, San Miguel, six-packs, and boxes you can add to the same WhatsApp order",
      "A dated public-price table citing GoDrinks and Boogaloo pages checked 24 November 2026",
      "Delivery to Canggu, Seminyak, Kuta, Ubud, and Tanah Lot when Made confirms the pin",
      "Cash or bank transfer; 21+",
    ],
    answer:
      "Tourists who search how much is a beer in Bali, cheap beer Bali, or alcohol prices in Bali usually see beach-club menus and 24/7 warehouses. MadeBrings is a family shop in Abianbase, Badung, owned by Made Hendrik. WhatsApp the listed neighborhood prices for delivery to Canggu, Seminyak, Kuta, Ubud, and Tanah Lot. Singaraja pilsner 330ml is Rp 22.000. Bintang 330ml is Rp 35.000, a six-pack is Rp 200.000, and a Bintang box is Rp 595.000. A 4kg ice bag is Rp 25.000. On 24 November 2026, GoDrinks Bali listed a 24-bottle Bintang pack at Rp 720.000 and The Boogaloo listed a Bintang 24-pack at Rp 600.000. We do not claim to be the cheapest shop in Bali. Stock is confirmed in chat. You must be 21 or older. Delivery cost depends on your pin.",
    faqs: [
      {
        question: "How much is a Bintang in Bali from MadeBrings?",
        answer:
          "A 330ml bottle is listed at Rp 35.000, a six-pack at Rp 200.000, and a box at Rp 595.000. Chat to confirm stock. Delivery cost is extra and depends on your villa pin.",
      },
      {
        question: "Is MadeBrings the cheapest beer delivery in Bali?",
        answer:
          "We do not claim that. On 24 November 2026 our listed Bintang box was Rp 595.000, Boogaloo’s public 24-pack was Rp 600.000, and GoDrinks Bali listed a 24-bottle Bintang pack at Rp 720.000. Mini marts and beach clubs vary. Compare the listed numbers, then WhatsApp us.",
      },
      {
        question: "How much is a cheap local beer in Bali?",
        answer:
          "Singaraja pilsner 330ml is listed at Rp 22.000, and a Singaraja box at Rp 440.000. That is the neighborhood bottle people around Abianbase actually drink.",
      },
      {
        question: "Do these beer prices include delivery?",
        answer:
          "No. Shelf prices are listed on the shop. Delivery cost is confirmed on WhatsApp for your pin. We do not publish a fake island-wide free-delivery claim.",
      },
    ],
    title: "How much is a beer in Bali? Listed villa prices from Abianbase",
    description:
      "Beer prices in Bali from MadeBrings: Singaraja Rp 22.000, Bintang Rp 35.000, six-pack Rp 200.000, box Rp 595.000. WhatsApp delivery to Canggu and nearby villas. 21+.",
    excerpt:
      "How much is a beer in Bali if you skip the beach-club list? Listed Abianbase prices, plus public Bintang box numbers from GoDrinks and Boogaloo checked 24 November 2026.",
    keywords: [
      "how much is a beer in Bali",
      "beer prices Bali",
      "cheap beer Bali",
      "cheap beer delivery Bali",
      "alcohol prices in Bali",
      "Bintang price Bali",
      "cost of beer in Bali",
      "Singaraja beer price",
      "beer delivery Bali",
    ],
    datePublished: "2026-11-24",
    dateModified: "2026-11-24",
    readingMinutes: 6,
    heroImage: cdnImage("photo-1571613316887-6f8d5cbf7ef7"),
    heroAlt: "Cold beer bottles on a table — the villa restock tourists price-check in Bali",
    sections: [
      {
        paragraphs: [
          "“How much is a beer in Bali” is a tourist query, not a nightlife query. People want a number they can trust before they WhatsApp a stranger. This page uses MadeBrings’ listed catalog and two public competitor pages checked on 24 November 2026. It does not invent a “cheapest in Bali” badge.",
          "MadeBrings is a family shop in Abianbase, Badung. The booking page is the homepage. Chat first so stock is real.",
        ],
      },
      {
        heading: "Listed MadeBrings beer prices",
        paragraphs: [
          "These are the same numbers as the shop. Stock moves. A six-pack or a box is the usual villa order; a single bottle is useful if you only need one cold drink tonight.",
        ],
        list: [
          "Singaraja Pilsner 330ml — Rp 22.000",
          "Bintang 330ml — Rp 35.000",
          "Bintang six-pack — Rp 200.000",
          "Bintang box — Rp 595.000",
          "Singaraja box — Rp 440.000",
          "4kg ice bag — Rp 25.000",
        ],
        link: {
          href: "/shop/beer-cider",
          label: "Open the beer and cider shelf",
        },
      },
      {
        heading: "Public Bintang box prices, 24 November 2026",
        paragraphs: [
          "We read public pages only. We did not mystery-shop, and we did not copy logged-in or promo prices. Update this table when those pages or our catalog change.",
        ],
        table: {
          headers: ["Shop", "Listed pack", "Public price", "Checked"],
          rows: publicBintangBoxes.map((row) => [
            row.shop,
            row.item,
            row.priceLabel,
            PUBLIC_BEER_CHECK_DATE,
          ]),
        },
        link: {
          href: "/compare/bali-alcohol-delivery",
          label: "See the neighborhood shop vs 24/7 methodology",
        },
      },
      {
        heading: "How to order beer at these prices",
        paragraphs: [
          "Browse the shop, then tap Order now. WhatsApp Made Hendrik with the villa pin, the beers, and cash or bank transfer. We confirm stock and the delivery cost. 21+ only.",
        ],
        link: {
          href: "/",
          label: "Book beer delivery on the money page",
        },
      },
    ],
  },
  {
    slug: "alcohol-near-me-bali",
    intent: "commercial",
    query: "alcohol near me Bali",
    bookingHref: "/",
    priceProductIds: [
      "singaraja-pilsner-330",
      "bintang-330-6pack",
      "smirnoff-ice-275",
      "ice-bag-4kg",
      "aqua-mineral-600-box",
    ],
    inclusions: [
      "WhatsApp alcohol delivery from a real Abianbase shop, not a 24/7 warehouse map pin",
      "Coverage for guests who typed alcohol near me in Canggu, Kerobokan, Seminyak, or Kuta",
      "Listed beer, Smirnoff Ice, mixers, ice, and water",
      "Cash or bank transfer after stock confirmation; 21+",
    ],
    answer:
      "If you searched alcohol near me in Bali and do not know Abianbase from Canggu, you are the guest this shop is built for. MadeBrings is a family alcohol delivery service in Abianbase, Mengwi, Badung, run by Made Hendrik. The shop sits inland of Kerobokan, close enough to restock villas in Canggu, Seminyak, and Kuta when WhatsApp confirms the pin. Listed starter prices include Singaraja from Rp 22.000, Bintang from Rp 35.000, a six-pack at Rp 200.000, Smirnoff Ice from Rp 35.000, and a 4kg ice bag at Rp 25.000. Send a villa name or Google pin, the drinks you want, and cash or bank transfer. This is not a 24-hour map pin that appears as an always-open warehouse. We confirm stock before a rider leaves. You must be 21 or older.",
    faqs: [
      {
        question: "I searched alcohol near me — can MadeBrings deliver?",
        answer:
          "If you are in or near Abianbase, Canggu, Kerobokan, Seminyak, Kuta, Ubud, or Tanah Lot, WhatsApp the pin. Made confirms whether that run is possible today. We are not a 24/7 Google pin.",
      },
      {
        question: "Where is the shop if I want to visit?",
        answer:
          "Abianbase, Mengwi, Badung, Bali. Open Google Maps from the contact page. Many guests still prefer delivery because they do not know the inland roads.",
      },
      {
        question: "Is this closer than a Canggu 24/7 warehouse?",
        answer:
          "For inland villas around Mengwi, Abianbase, and the quiet edge of Kerobokan, often yes. For a 2am spirit run in central Canggu, a 24/7 operator is the better tool. Use the comparison page.",
      },
      {
        question: "What should a lost tourist order first?",
        answer:
          "A Bintang or Smirnoff Ice six-pack, one ice bag, and drinking water. Add cola if you already have a bottle in the suitcase.",
      },
    ],
    title: "Alcohol near me in Bali: a family shop in Abianbase, not a 24/7 pin",
    description:
      "Searched alcohol near me in Canggu or Bali? MadeBrings is a family shop in Abianbase. WhatsApp for beer, Ice, and ice to your villa. Neighborhood prices, 21+.",
    excerpt:
      "Tourists type alcohol near me because they do not know Abianbase from Canggu. Chat the villa pin — MadeBrings delivers from a real family shop, not a 24/7 warehouse.",
    keywords: [
      "alcohol near me Bali",
      "alcohol near me Canggu",
      "liquor store near me Bali",
      "beer near me Canggu",
      "Abianbase bottle shop",
      "Kerobokan alcohol delivery",
      "Mengwi beer shop",
      "alcohol delivery near me Bali",
    ],
    datePublished: "2026-11-24",
    dateModified: "2026-11-24",
    readingMinutes: 5,
    heroImage: cdnImage("photo-1528183429752-a97d0bf99b5a"),
    heroAlt: "Bali village road inland of the beach — the Abianbase side of an alcohol near me search",
    sections: [
      {
        paragraphs: [
          "Alcohol near me is the query of someone who just landed, opened Maps, and does not know whether they are in Canggu, Kerobokan, or inland Badung. MadeBrings is the shop in Abianbase. We deliver when the pin and the cooler both work.",
          "If you wanted a 24/7 spirit catalog at 2am, use a warehouse that publishes those hours. This page is for a villa fridge tonight at neighborhood prices.",
        ],
      },
      {
        heading: "Where “near me” actually is",
        paragraphs: [
          "Abianbase sits in Mengwi, Badung — inland of Kerobokan, a short ride from Canggu, and on the way toward Ubud. Tourists rarely search the village name. They search the beach they heard of. Send the villa name anyway.",
        ],
        list: [
          "Close hops: Abianbase, Mengwi, Kerobokan, Canggu, Seminyak, Kuta",
          "Planned hops: Ubud and Tanah Lot when WhatsApp says the distance works",
        ],
        link: {
          href: "/contact",
          label: "Open the map and WhatsApp the shop",
        },
      },
      {
        heading: "How to book from a near-me search",
        paragraphs: [
          "Open the money page, tap Order now, and paste your Google pin. List beer, Ice, ice, and water. Made replies with stock, the delivery cost, and cash or transfer. 21+ only.",
        ],
        link: {
          href: "/",
          label: "Book alcohol delivery from Abianbase",
        },
      },
      {
        heading: "Price-check before you chat",
        paragraphs: [
          "If the near-me search was really a price search, use the beer prices page. It lists Singaraja, Bintang, and public competitor box numbers dated 24 November 2026.",
        ],
        link: {
          href: "/blog/beer-prices-bali",
          label: "How much is a beer in Bali?",
        },
      },
    ],
  },
  {
    slug: "ice-delivery-bali",
    intent: "commercial",
    query: "ice delivery Bali",
    bookingHref: "/",
    priceProductIds: [
      "ice-bag-4kg",
      "rent-ice-box-3-days",
      "aqua-mineral-600-box",
      "coca-cola-original-250",
      "bintang-330-6pack",
    ],
    inclusions: [
      "4kg ice bags packed last so they still exist at the villa",
      "Optional 3-day ice-box rental if the villa has no esky",
      "Mixers, water, and beer in the same WhatsApp run",
      "Drop-off in Canggu, Seminyak, Kuta, Ubud, and Tanah Lot when Made confirms the pin",
      "Cash or bank transfer; 21+ if the order includes alcohol",
    ],
    answer:
      "Villa groups in Canggu and Seminyak run out of ice faster than beer. MadeBrings delivers 4kg ice bags at Rp 25.000 and a 3-day ice-box rental at Rp 150.000 from the family shop in Abianbase, Badung, owned by Made Hendrik. Add Aqua 24x600ml at Rp 65.000, Coca-Cola from Rp 9.000, tonic, and a Bintang six-pack at Rp 200.000 in the same WhatsApp order so one rider can fill the fridge. Ice delivery Bali from a neighborhood shop means the bag is packed last and the pin is confirmed before anyone leaves. We do not publish a 30-minute SLA or free island-wide ice runs. Chat first with the villa name or a map pin. You must be 21 or older if the order includes alcohol. Pay cash or bank transfer after we confirm stock.",
    faqs: [
      {
        question: "Can I order ice delivery in Canggu without beer?",
        answer:
          "Yes. Ice bags, the 3-day ice box, Aqua, and mixers can go in a WhatsApp order on their own. If the bag is the only item, Made still confirms whether that pin is worth a dedicated run today.",
      },
      {
        question: "How much is ice delivery in Bali from MadeBrings?",
        answer:
          "A 4kg bag is listed at Rp 25.000. The 3-day ice-box rental is Rp 150.000, ice sold separately. Delivery cost is quoted in the chat for your pin.",
      },
      {
        question: "Will the ice still be ice when it arrives?",
        answer:
          "We pack ice last and we will not promise a 30-minute window we cannot keep. If the pin is far — Ubud or Tanah Lot — say so early so the bag is not a melted errand.",
      },
      {
        question: "Can I add beer and cola to the ice run?",
        answer:
          "Yes. That is the usual villa fridge order. A Bintang six-pack is listed at Rp 200.000. You must be 21 or older for alcohol.",
      },
    ],
    title: "Ice delivery in Bali: bags, esky rental, and a villa mixer run",
    description:
      "Ice delivery in Canggu and Bali from MadeBrings. 4kg bags Rp 25.000, 3-day ice box Rp 150.000, plus water, cola, and beer on the same WhatsApp order. 21+.",
    excerpt:
      "The villa fridge fails on ice first. Chat MadeBrings in Abianbase for 4kg bags, a 3-day esky, and the beer or mixers that sit next to them.",
    keywords: [
      "ice delivery Bali",
      "ice delivery Canggu",
      "buy ice Canggu",
      "esky rental Bali",
      "ice bag villa Bali",
      "mixer delivery Canggu",
      "water delivery villa Bali",
      "ice and beer delivery Bali",
    ],
    datePublished: "2026-11-24",
    dateModified: "2026-11-24",
    readingMinutes: 5,
    heroImage: cdnImage("photo-1560008511-11c007ffdd63"),
    heroAlt: "Ice and cold drinks for a Bali villa fridge restock",
    sections: [
      {
        paragraphs: [
          "Ice delivery Bali is a villa job, not a cocktail-bar job. Groups in Canggu and Seminyak finish the bag before they finish the six-pack. MadeBrings keeps 4kg bags and a 3-day ice box on the same shelf as beer and cola.",
          "We pack ice last. We still confirm the pin. Far runs only happen when the chat says they can.",
        ],
      },
      {
        heading: "What to add next to the ice",
        paragraphs: [
          "A useful first order is one or two ice bags, drinking water, and either a Bintang six-pack or cola if you already have spirits. Rent the ice box if the villa esky is missing or cracked.",
        ],
        list: [
          "4kg ice bag — Rp 25.000 listed",
          "3-day ice-box rental — Rp 150.000 listed, ice extra",
          "Aqua 24 × 600ml — Rp 65.000 listed",
          "Coca-Cola 250ml — from Rp 9.000 listed",
        ],
        link: {
          href: "/shop/ice-water",
          label: "Open the ice, water, and esky shelf",
        },
      },
      {
        heading: "How to book ice delivery",
        paragraphs: [
          "Use the money page, tap Order now, and write “ice” plus the villa name in the first message. Made replies with stock, whether the pin works today, and cash or transfer. Add beer only if everyone receiving the order is 21 or older.",
        ],
        link: {
          href: "/",
          label: "Book ice and drinks on the money page",
        },
      },
    ],
  },
  {
    slug: "alcohol-delivery-canggu",
    intent: "commercial",
    query: "alcohol delivery Canggu",
    bookingHref: "/",
    priceProductIds: [
      "singaraja-pilsner-330",
      "bintang-330",
      "bintang-330-6pack",
      "smirnoff-ice-275",
      "ice-bag-4kg",
      "rent-ice-box-3-days",
    ],
    inclusions: [
      "WhatsApp stock check before the rider leaves Abianbase",
      "Beer, cider, Smirnoff Ice, mixers, ice, water, and snacks from the listed shop",
      "Drop-off at a Canggu, Berawa, or Pererenan villa or homestay when Made confirms the run",
      "Cash or bank transfer after confirmation",
      "Ice bags and a 3-day ice-box rental you can add to the same chat",
    ],
    answer:
      "MadeBrings offers alcohol delivery in Canggu from a family shop in Abianbase, Badung, run by Made Hendrik. Tourists who type alcohol near me after a scooter ride through Berawa or Pererenan can WhatsApp a villa name or map pin, the drinks they want, and whether they will pay cash or bank transfer. The listed cooler is built for villa restocks: Singaraja pilsner from Rp 22.000, Bintang from Rp 35.000 a bottle or Rp 200.000 for a six-pack, Smirnoff Ice from Rp 35.000, mixers, a 4kg ice bag at Rp 25.000, and a 3-day ice-box rental at Rp 150.000. This is not a 24-hour Canggu warehouse and we do not publish a 30-minute promise. Stock is confirmed in the chat, then a rider comes when Made says the run is possible. You must be 21 or older. Delivery cost depends on the pin you send. Browse the shop, then order on WhatsApp.",
    faqs: [
      {
        question: "Does MadeBrings deliver alcohol to Canggu villas?",
        answer:
          "Yes. We are a family shop in Abianbase and we arrange alcohol delivery to Canggu, Berawa, and Pererenan when the order and the pin make sense. Chat first with your villa name.",
      },
      {
        question: "How much is beer delivery in Canggu from MadeBrings?",
        answer:
          "Singaraja 330ml is listed at Rp 22.000, Bintang 330ml at Rp 35.000, and a Bintang six-pack at Rp 200.000. Ice is Rp 25.000 per 4kg bag. Delivery cost is confirmed on WhatsApp.",
      },
      {
        question: "Can I get ice and mixers with the alcohol in Canggu?",
        answer:
          "Yes. Add Coca-Cola, Sprite, tonic, Red Bull, Aqua, snacks, ice bags, or the 3-day ice-box rental in the same WhatsApp order as the beer.",
      },
      {
        question: "Are you a 24/7 Canggu bottle shop?",
        answer:
          "No. MadeBrings is a neighborhood shop, not a 24-hour warehouse. We confirm whether a rider can come today in the chat. Do not assume late-night stock without asking.",
      },
    ],
    title: "Alcohol delivery in Canggu: villa prices from a family shop",
    description:
      "WhatsApp alcohol delivery in Canggu from MadeBrings in Abianbase. Beer, Ice, mixers, and ice bags to your villa. Neighborhood prices, cash or transfer, 21+.",
    excerpt:
      "Landed in Canggu and the villa fridge is empty? Chat MadeBrings in Abianbase for beer, mixers, and ice at neighborhood prices — not beach-club mark-up.",
    keywords: [
      "alcohol delivery Canggu",
      "alcohol delivery Bali",
      "beer delivery Canggu",
      "Bintang delivery Canggu",
      "villa drinks delivery Canggu",
      "alcohol near me Canggu",
      "Canggu bottle shop delivery",
      "Pererenan alcohol delivery",
      "Berawa beer delivery",
    ],
    datePublished: "2026-11-17",
    dateModified: "2026-11-17",
    readingMinutes: 6,
    heroImage: cdnImage("photo-1510414696678-2415ad8474aa"),
    heroAlt: "Tropical beach light near Canggu, the kind of stay that needs a cold villa fridge",
    sections: [
      {
        paragraphs: [
          "Most “alcohol delivery Canggu” results are 24/7 warehouses competing on speed. MadeBrings is the other option: a family shop in Abianbase, a short inland ride from Canggu, selling the beer, Ice, mixers, and ice that villa groups actually finish.",
          "If you do not know the area — first night in Berawa, Pererenan, or Echo Beach — you do not need a scavenger hunt for a bottle shop. Send a pin. Made Hendrik confirms what is cold, then we talk delivery.",
        ],
      },
      {
        heading: "Who this Canggu delivery is for",
        paragraphs: [
          "This page is for people who searched alcohol near me or alcohol delivery Canggu because the villa has glasses and no drinks. It is also for groups who want a box of Singaraja or Bintang without paying beach-club prices.",
          "It is not a bartender-for-hire page and it is not a promise that a rider is waiting at 3am. Chat first.",
        ],
        list: [
          "Villa groups in Canggu, Berawa, Pererenan, and nearby Echo Beach",
          "Tourists who landed without a local contact",
          "Neighbors in inland Badung who already buy at neighborhood rates",
        ],
      },
      {
        heading: "Starter prices for a Canggu villa fridge",
        paragraphs: [
          "Prices below are the same listed shop prices as the homepage. Stock moves. WhatsApp us before you count on a flavour or a box. For a dated Bintang-box check against public 24/7 pages, use the beer prices guide.",
        ],
        link: {
          href: "/blog/beer-prices-bali",
          label: "How much is a beer in Bali?",
        },
      },
      {
        heading: "How to book alcohol delivery in Canggu",
        paragraphs: [
          "Open the MadeBrings shop, note the bottles you want, then tap Order now. In WhatsApp, send: villa name or Google pin, the list, and cash or bank transfer. We confirm stock, the delivery cost for that pin, and a time that is actually possible today.",
          "If you also need ice, water, cola, or an ice box, add them in the same chat so one rider can carry the run.",
        ],
        link: {
          href: "/",
          label: "Open the alcohol delivery booking page",
        },
      },
      {
        heading: "Canggu, Seminyak, or Kuta?",
        paragraphs: [
          "Canggu is the usual tourist search. If you are closer to Kerobokan or the Seminyak villas, use the Seminyak beer delivery note. If you just landed near the airport, use the Kuta page.",
        ],
        link: {
          href: "/blog/beer-delivery-seminyak",
          label: "Beer delivery in Seminyak and Kerobokan",
        },
      },
    ],
  },
  {
    slug: "beer-delivery-seminyak",
    intent: "commercial",
    query: "beer delivery Seminyak",
    bookingHref: "/",
    priceProductIds: [
      "bintang-330",
      "bintang-330-6pack",
      "bintang-beer-box",
      "san-miguel-light-330-6pack",
      "coca-cola-original-250",
      "ice-bag-4kg",
    ],
    inclusions: [
      "Listed beer, cider, and ready-to-drink cans at neighborhood shelf prices",
      "Mixers, ice, and water for a Seminyak or Kerobokan villa fridge",
      "WhatsApp confirmation of stock and of the delivery cost to your pin",
      "Cash or bank transfer — no website trolley",
    ],
    answer:
      "MadeBrings does beer delivery to Seminyak and Kerobokan from a family shop in Abianbase, Badung. If you searched alcohol delivery Seminyak or beer near me after a night out, WhatsApp Made Hendrik with the villa name, a map pin, the beers you want, and cash or bank transfer. Listed prices include Bintang 330ml at Rp 35.000, a six-pack at Rp 200.000, a Bintang box at Rp 595.000, San Miguel Light six-pack at Rp 200.000, Coca-Cola 250ml from Rp 9.000, and a 4kg ice bag at Rp 25.000. Singaraja pilsner starts at Rp 22.000 if you want the local bottle neighbors actually drink. We are not a 24/7 Seminyak warehouse and we do not hide a beach-club mark-up in the price. Stock is checked in the chat. You must be 21 or older. Delivery is arranged when the pin and the cooler both work.",
    faqs: [
      {
        question: "Do you deliver beer to Seminyak and Kerobokan?",
        answer:
          "Yes. Send the villa name or a map pin on WhatsApp. MadeBrings is inland in Abianbase; we confirm whether that Seminyak or Kerobokan run is possible today before anyone leaves.",
      },
      {
        question: "How much is a Bintang delivery in Seminyak?",
        answer:
          "A single Bintang 330ml is listed at Rp 35.000, a six-pack at Rp 200.000, and a box at Rp 595.000. Ice is extra at Rp 25.000 per 4kg. Delivery cost is quoted in the chat for your pin.",
      },
      {
        question: "Can I order mixers and ice with the beer?",
        answer:
          "Yes. Cola, Sprite, tonic, Red Bull, Aqua, snacks, and ice bags sit on the same shelf. Add them so the villa fridge is not only beer.",
      },
      {
        question: "Why not just walk to a Seminyak mini mart?",
        answer:
          "You can. Mini mart mark-up is often the reason groups message us. We sell at neighborhood prices from Abianbase. Chat for stock; we will not pretend a box is cold if it is not.",
      },
    ],
    title: "Beer delivery in Seminyak: restock the villa without beach-club prices",
    description:
      "Beer delivery in Seminyak and Kerobokan from MadeBrings. Bintang, Singaraja, mixers, and ice via WhatsApp. Neighborhood prices, cash or transfer, 21+.",
    excerpt:
      "Seminyak villa empty at 6pm? Order Bintang, mixers, and ice from MadeBrings in Abianbase — a family shop, not a beach-club list.",
    keywords: [
      "beer delivery Seminyak",
      "alcohol delivery Seminyak",
      "Bintang delivery Seminyak",
      "Kerobokan alcohol delivery",
      "villa beer delivery Bali",
      "cheap beer delivery Bali",
      "Seminyak bottle shop",
      "alcohol near me Seminyak",
    ],
    datePublished: "2026-11-17",
    dateModified: "2026-11-17",
    readingMinutes: 6,
    heroImage: cdnImage("photo-1436076863939-06870fe779c2"),
    heroAlt: "Cold beer bottles on a table, the kind of villa restock Seminyak groups actually need",
    sections: [
      {
        paragraphs: [
          "Seminyak is easy to drink in and expensive to shop in. Beer delivery Seminyak searches usually hit the same 24/7 spirit catalogs. This page is for the other job: filling a villa fridge with Bintang, Singaraja, mixers, and ice at neighborhood prices.",
          "MadeBrings sits in Abianbase, inland of Kerobokan. That is close enough for a planned villa run, and far enough from beach-club shelves that the listed prices still look like a local shop.",
        ],
      },
      {
        heading: "What to put in a Seminyak villa order",
        paragraphs: [
          "A typical first-night chat is a Bintang six-pack or box, cola, ice, and water. Smirnoff Ice is on the ready-to-drink shelf if the table wants cans that do not need a mixer. Ask on WhatsApp if you need a spirit bottle — the liquor shelf is short and is not fully listed online.",
        ],
        list: [
          "Bintang or Singaraja in singles, six-packs, or a box",
          "Coca-Cola, Sprite, or tonic",
          "4kg ice, or the 3-day ice-box rental if the villa esky is missing",
          "A box of Aqua so the table is not only alcohol",
        ],
        link: {
          href: "/shop/ice-water",
          label: "Add ice, water, or an ice box",
        },
      },
      {
        heading: "How to order beer delivery in Seminyak",
        paragraphs: [
          "Browse the shop, then WhatsApp Made with the list and a pin. We confirm stock, the delivery cost to that Seminyak or Kerobokan address, and payment — cash or bank transfer. No trolley, no surprise checkout.",
        ],
        link: {
          href: "/",
          label: "Book beer delivery on the MadeBrings money page",
        },
      },
      {
        heading: "Nearby areas we also run",
        paragraphs: [
          "If you are actually in Canggu, use the Canggu alcohol delivery guide. If you just landed and are in Kuta or Legian, use the Kuta page. Ubud and Tanah Lot runs are possible when the chat says so — those pins are farther.",
        ],
        link: {
          href: "/blog/alcohol-delivery-canggu",
          label: "Alcohol delivery in Canggu",
        },
      },
    ],
  },
  {
    slug: "alcohol-delivery-kuta",
    intent: "commercial",
    query: "alcohol delivery Kuta",
    bookingHref: "/",
    priceProductIds: [
      "bintang-330-6pack",
      "smirnoff-ice-275-6pack",
      "coca-cola-original-250",
      "aqua-mineral-600-box",
      "ice-bag-4kg",
    ],
    inclusions: [
      "WhatsApp order after you land — villa or hotel name plus a pin",
      "Beer, Smirnoff Ice, mixers, water, and ice from the listed Abianbase shop",
      "Delivery to Kuta, Legian, and nearby south-Bali stays when Made confirms the run",
      "Cash or bank transfer; 21+ only",
    ],
    answer:
      "MadeBrings can arrange alcohol delivery in Kuta and Legian from the family shop in Abianbase, Badung. The useful search is not a 24/7 Kuta warehouse — it is a cold six-pack, ice, and water after a long flight when you do not know which mini mart to trust. WhatsApp Made Hendrik with the hotel or villa name, a map pin, Bintang or Smirnoff Ice, and cash or bank transfer. Listed prices include a Bintang six-pack at Rp 200.000, Smirnoff Ice six-pack at Rp 200.000, Coca-Cola 250ml from Rp 9.000, a 24-pack of Aqua 600ml at Rp 65.000, and a 4kg ice bag at Rp 25.000. We confirm stock before a rider leaves. We do not promise airport-lounge speed or overnight hours. You must be 21 or older. If you are continuing to Canggu or Seminyak the next day, order the villa restock for that pin instead.",
    faqs: [
      {
        question: "Can I get alcohol delivered in Kuta after I land?",
        answer:
          "Often yes, if Made confirms stock and the pin. Send the hotel or villa name on WhatsApp. We are based in Abianbase, not in the airport, so this is a planned drop-off, not a 20-minute guarantee.",
      },
      {
        question: "What should I order for a first night in Kuta?",
        answer:
          "A Bintang or Smirnoff Ice six-pack, a bag of ice, and drinking water covers most arrival nights. Add cola if you already have a bottle of spirits in the suitcase.",
      },
      {
        question: "Do you deliver to Legian as well as Kuta?",
        answer:
          "Yes, when the chat confirms the run. Treat Legian like Kuta: send a pin, wait for stock confirmation, then pay cash or transfer.",
      },
      {
        question: "Is MadeBrings cheaper than airport or hotel mini bars?",
        answer:
          "Our listed prices are neighborhood shop prices from Abianbase — Singaraja from Rp 22.000, Bintang from Rp 35.000. Hotel mini bars and many Kuta convenience shelves are higher. We still confirm stock; we do not invent a discount that is not on the site.",
      },
    ],
    title: "Alcohol delivery in Kuta: cold beer after you land",
    description:
      "Alcohol delivery in Kuta and Legian from MadeBrings in Abianbase. WhatsApp for Bintang, Smirnoff Ice, mixers, ice, and water. Neighborhood prices, 21+.",
    excerpt:
      "Just landed in Kuta and the mini bar looks painful? Chat MadeBrings for a six-pack, ice, and water at neighborhood prices.",
    keywords: [
      "alcohol delivery Kuta",
      "beer delivery Kuta",
      "alcohol delivery Legian",
      "Bintang delivery Kuta",
      "airport alcohol delivery Bali",
      "Kuta villa drinks",
      "alcohol near me Kuta",
      "beer delivery Bali airport",
    ],
    datePublished: "2026-11-17",
    dateModified: "2026-11-17",
    readingMinutes: 5,
    heroImage: cdnImage("photo-1507525428034-b723cf961d3e"),
    heroAlt: "Kuta shoreline light — arrival days when a villa fridge still needs a six-pack and ice",
    sections: [
      {
        paragraphs: [
          "Kuta is where many Bali trips actually start: a hotel near the airport, a first night, an empty fridge. Alcohol delivery Kuta should mean a six-pack, ice, and water — not a scavenger hunt down Jalan Legian with luggage.",
          "MadeBrings is not a Kuta storefront. We are a family shop in Abianbase. That still works for a planned drop-off if you WhatsApp the pin and wait for Made to confirm stock.",
        ],
      },
      {
        heading: "A simple Kuta arrival order",
        paragraphs: [
          "Keep the first chat short. Six beers or Ice, one ice bag, one Aqua box. Add cola only if you already have spirits. You can restock properly once you know whether tomorrow is Canggu, Seminyak, or Ubud.",
        ],
        list: [
          "Bintang six-pack (Rp 200.000 listed) or Smirnoff Ice six-pack (Rp 200.000 listed)",
          "4kg ice bag (Rp 25.000 listed)",
          "Aqua 600ml box of 24 (Rp 65.000 listed)",
        ],
        link: {
          href: "/shop",
          label: "See the full MadeBrings shop",
        },
      },
      {
        heading: "How to book from Kuta or Legian",
        paragraphs: [
          "Tap Order now on the homepage, send the hotel or villa name, and list the items. We reply with what is actually in the cooler, the delivery cost for that pin, and cash or transfer details. Must be 21 or older.",
        ],
        link: {
          href: "/",
          label: "Book alcohol delivery on the money page",
        },
      },
      {
        heading: "Flying on to Canggu or Ubud?",
        paragraphs: [
          "If the Kuta night is only a landing pad, order a small run now and a larger villa restock for the next pin. Canggu has its own delivery guide. Ubud and Tanah Lot are farther; those runs only happen when WhatsApp says they can.",
        ],
        link: {
          href: "/blog/alcohol-delivery-canggu",
          label: "Plan the Canggu villa restock",
        },
      },
    ],
  },
  {
    slug: "alcohol-delivery-ubud-tanah-lot",
    intent: "commercial",
    query: "alcohol delivery Ubud",
    bookingHref: "/",
    priceProductIds: [
      "bintang-330-6pack",
      "singaraja-pilsner-330",
      "ice-bag-4kg",
      "aqua-mineral-600-box",
      "rent-ice-box-3-days",
    ],
    inclusions: [
      "WhatsApp confirmation before anyone rides inland or west to your pin",
      "Beer, mixers, ice, and water from the listed Abianbase shop",
      "Delivery to Ubud-area and Tanah Lot-area villas when Made says the distance works today",
      "Cash or bank transfer, 21+",
    ],
    answer:
      "MadeBrings can arrange alcohol delivery to Ubud and Tanah Lot from the family shop in Abianbase, Badung. These pins are farther than Canggu or Seminyak, so the honest offer is a planned villa restock, not a 20-minute scooter. WhatsApp Made Hendrik with the villa name, a map pin, beer or Ice, ice bags, and water, plus cash or bank transfer. Listed prices still apply: Singaraja from Rp 22.000, a Bintang six-pack at Rp 200.000, a 4kg ice bag at Rp 25.000, Aqua 24×600ml at Rp 65.000, and a 3-day ice-box rental at Rp 150.000. We confirm stock and whether that inland or west-coast run is possible today. We do not claim 24/7 Ubud coverage. You must be 21 or older. If you are actually staying in Canggu or Seminyak, use those closer guides instead.",
    faqs: [
      {
        question: "Do you deliver alcohol to Ubud?",
        answer:
          "When WhatsApp confirms the pin and the stock. Ubud is farther from Abianbase than Canggu. Treat it as a planned drop-off, not an instant app.",
      },
      {
        question: "Can you deliver toward Tanah Lot?",
        answer:
          "Yes, for villas and homes around Tanah Lot when Made agrees the run. Send the pin after sunset plans are set so ice still makes sense.",
      },
      {
        question: "Why is this slower than Canggu delivery?",
        answer:
          "Distance. Abianbase sits in inland Badung. Canggu and Seminyak are the short tourist hops. Ubud and Tanah Lot need a clearer window and a confirmed fee in the chat.",
      },
      {
        question: "What should an Ubud villa order?",
        answer:
          "A six-pack or a Singaraja run, ice, and water. Add the 3-day ice box if the villa has no esky. Ask on WhatsApp if you need a licensed arak bottle — that shelf is short.",
      },
    ],
    title: "Alcohol delivery in Ubud and Tanah Lot: planned villa restocks",
    description:
      "Alcohol delivery to Ubud and Tanah Lot from MadeBrings in Abianbase. WhatsApp for beer, ice, and water. Farther pins, neighborhood prices, 21+. Not 24/7.",
    excerpt:
      "Staying in Ubud or near Tanah Lot? Chat MadeBrings for a planned beer, ice, and water drop from Abianbase — farther than Canggu, still neighborhood prices.",
    keywords: [
      "alcohol delivery Ubud",
      "alcohol delivery Tanah Lot",
      "beer delivery Ubud",
      "Tanah Lot drinks delivery",
      "Ubud villa alcohol",
      "Mengwi alcohol delivery",
      "Abianbase beer delivery",
      "jasa antar alkohol Ubud",
    ],
    datePublished: "2026-11-17",
    dateModified: "2026-11-17",
    readingMinutes: 6,
    heroImage: cdnImage("photo-1537996194471-e657df975ab4"),
    heroAlt: "Temple gates and tropical trees inland of Bali — the Ubud and Tanah Lot kind of stay",
    sections: [
      {
        paragraphs: [
          "Ubud and Tanah Lot are the searches people type when the villa is not in Canggu. Alcohol delivery Ubud is a real need; it is also a longer ride from Abianbase. This page tells the truth about that distance and still offers the same listed beer, ice, and water prices.",
          "Tanah Lot evenings empty a fridge fast. If you want ice that still exists after sunset, order earlier in the day and let Made confirm the west-coast pin.",
        ],
      },
      {
        heading: "Ubud: planned, not instant",
        paragraphs: [
          "Send the villa name in Ubud, Nyuh Kuning, or nearby Gianyar only if you can wait for a confirmed window. We will not publish a fake 30-minute Ubud SLA. If the cooler is short that day, we say so.",
        ],
        link: {
          href: "/shop/beer-cider",
          label: "See listed beer and cider prices",
        },
      },
      {
        heading: "Tanah Lot and west-coast villas",
        paragraphs: [
          "Pins toward Tanah Lot, Kediri, and that stretch of Tabanan work when the chat agrees. Combine beer with ice bags or the 3-day ice-box rental so the sunset table is not warm cans.",
        ],
        link: {
          href: "/shop/ice-water",
          label: "Add ice, water, or an ice box",
        },
      },
      {
        heading: "How to book from Ubud or Tanah Lot",
        paragraphs: [
          "Use the money page, tap Order now, and write the area in the first message. Made replies with stock, whether the distance works today, and cash or transfer. 21+ only.",
        ],
        link: {
          href: "/",
          label: "Book alcohol delivery from Abianbase",
        },
      },
      {
        heading: "Closer stays",
        paragraphs: [
          "If you are actually in Canggu, Seminyak, or Kuta, those guides are the better match. The comparison page explains when a 24/7 warehouse is the better tool than a family shop.",
        ],
        link: {
          href: "/compare/bali-alcohol-delivery",
          label: "Neighborhood shop vs 24/7 alcohol delivery",
        },
      },
    ],
  },
];

export function getCommercialPosts() {
  return commercialPosts;
}
