import { getCommercialPosts } from "@/lib/blog-commercial";
import { cdnImage } from "@/lib/commerce/images";
import type { Locale } from "@/lib/i18n";
import { MONEY_PATH } from "@/lib/seo/facts";
import { siteConfig } from "@/lib/site";

export const SELARAS_GUIDE_URL = "https://www.selarasbaliguide.com";

export type BlogSection = {
  heading?: string;
  paragraphs: string[];
  list?: string[];
  link?: { href: string; label: string };
};

export type BlogFaq = {
  question: string;
  answer: string;
};

export type LocalizedBlogCopy = {
  title: string;
  description: string;
  excerpt: string;
  speakable?: string;
  sections: BlogSection[];
  faqs?: BlogFaq[];
  inclusions?: string[];
  heroAlt?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  keywords: string[];
  datePublished: string;
  dateModified: string;
  readingMinutes: number;
  heroImage: string;
  heroAlt: string;
  sections: BlogSection[];
  intent?: "commercial" | "editorial";
  speakable?: string;
  faqs?: BlogFaq[];
  inclusions?: string[];
  idCopy?: LocalizedBlogCopy;
};

export const editorialPosts: BlogPost[] = [
  {
    slug: "bali-holiday-guide-badung",
    title: "Bali holiday guide 2026: a slower stay in Badung, beyond the beach clubs",
    description:
      "Plan a Bali holiday from Badung and Mengwi: when to visit, how to get around, villa fridge basics, and why chatting a local shop first makes villa life easier.",
    excerpt:
      "Most Bali holiday guides start in Canggu. This one starts where many villas actually are — inland Badung — with practical notes from a family shop in Abianbase.",
    keywords: [
      "Bali holiday",
      "Bali holiday 2026",
      "Bali vacation",
      "things to do in Bali",
      "Bali villa stay",
      "Badung Bali",
      "Mengwi",
      "Abianbase",
      "Bali packing list",
      "Bali family holiday",
    ],
    datePublished: "2026-08-27",
    dateModified: "2026-08-27",
    readingMinutes: 8,
    heroImage: cdnImage("photo-1537996194471-e657df975ab4"),
    heroAlt: "Temple gates and tropical trees on a Bali holiday",
    sections: [
      {
        paragraphs: [
          "A Bali holiday still means rice terraces, warm evenings, and a villa fridge that empties faster than you expect. What has changed is where people actually sleep. Many groups now book houses in Badung — Mengwi, Abianbase, Kerobokan’s quieter edges — because the nights are calmer and the prices are neighborhood prices, not beach-club prices.",
          "This guide is written from that inland side of the island. MadeBrings is a small family shop in Abianbase. We see the same questions every week: when to come, how to move around, what to keep cold, and who to call for a real day out.",
        ],
      },
      {
        heading: "When to take a Bali holiday",
        paragraphs: [
          "Bali is warm all year. The dry season, roughly April to October, is the easiest window for a first visit: clearer roads up to Kintamani, fewer afternoon storms, and more reliable dirt-bike or temple days. The wet season, November to March, is greener and quieter. Mornings are often still beautiful; plan indoor lunches and villa time after 3pm.",
          "Nyepi, Bali’s Day of Silence, shuts the island for a full day each year. Flights, shops, and road traffic pause. If your Bali vacation overlaps Nyepi, settle in the night before and treat it as part of the holiday, not a disruption.",
        ],
      },
      {
        heading: "Where to base yourself in Badung",
        paragraphs: [
          "Canggu and Seminyak are lively. They are also crowded. A villa in Mengwi or Abianbase puts you between the airport, Ubud, and the west-coast beaches without living inside the traffic. You will still reach Echo Beach or Pererenan for a sunset; you just will not pay Seminyak rent to sleep.",
          "If you are traveling with children, inland Badung is kinder: quieter nights, easier parking, and warungs that still cook for neighbors, not only for visitors.",
        ],
      },
      {
        heading: "Getting around without wasting half the day",
        paragraphs: [
          "Grab and Gojek cover most of southern Bali. For a temple morning, a rice-terrace walk, or a Kintamani ride, a driver or a licensed local guide is calmer than piecing it together on the phone while you are already hot.",
          "For adventure days — volcanic trails, village cycling, a cooking class — we send guests to people we trust. Start with Selaras Bali Guide for dirt-bike and village itineraries, then come back to the villa and restock the fridge.",
        ],
        link: {
          href: "/blog/bali-tour-guide-selaras",
          label: "Read our Bali tour guide notes and contact Selaras",
        },
      },
      {
        heading: "What to put in a Bali villa fridge",
        paragraphs: [
          "You do not need to land with a suitcase of snacks. You do need drinking water, ice, and something cold for the first evening. Bintang, mixers, and a bag of ice are the three things villa groups run out of first. Mosquito coils are a close fourth.",
          "Chat first to confirm your order. Tell us the villa name or a pin, what you want on the shelf, and whether you will pay cash or bank transfer. We are a small shop, so we confirm what is actually here today before anyone gets on a bike.",
        ],
        list: [
          "Drinking water (1.5L bottles or a gallon if the villa has a dispenser)",
          "Ice, ordered close to the time you need it",
          "Beer or ready-to-drink cans for the first night",
          "Cola, tonic, or soda if you already have a bottle in the cupboard",
          "Mosquito coils or repellent for after dusk",
        ],
        link: {
          href: MONEY_PATH,
          label: "Book alcohol delivery from Abianbase",
        },
      },
      {
        heading: "A simple 7-day Bali holiday rhythm",
        paragraphs: [
          "Day 1: land, swim, stock the fridge, early night. Day 2: beach or Canggu lunch, back before traffic. Day 3: Ubud temples and rice fields, or a village cycle. Day 4: rest and a villa cook-up. Day 5: Kintamani dirt bike or Mount Batur views. Day 6: south coast or a slow warung crawl. Day 7: pack, return bottles, and leave time for the airport road.",
          "That is not a checklist to finish. It is a pace that still feels like a holiday. If you want the cultural drink of the island — arak used in ceremony, not only in cocktails — read the arak note next, and only buy licensed bottles.",
        ],
        link: {
          href: "/blog/arak-bali-traditional-drink",
          label: "What arak is, how Balinese families use it, and how to drink it safely",
        },
      },
    ],
  },
  {
    slug: "bali-tour-guide-selaras",
    title: "Bali tour guide: dirt bike trails, village days, and how to contact Selaras",
    description:
      "Looking for a Bali tour guide for dirt bike rides in Kintamani or a quieter village day? Contact Selaras Bali Guide for hotel pickup, gear, and small groups.",
    excerpt:
      "A good Bali tour guide does not sell a checklist. Selaras runs dirt-bike days in Kintamani and slower village experiences — book them direct, then chat us if you need the villa fridge filled.",
    keywords: [
      "Bali tour guide",
      "Bali dirt bike tour",
      "Kintamani dirt bike",
      "private Bali guide",
      "Bali adventure tour",
      "Selaras Bali Guide",
      "Bali village tour",
      "Mount Batur tour",
      "hotel pickup Bali tour",
    ],
    datePublished: "2026-08-27",
    dateModified: "2026-08-27",
    readingMinutes: 7,
    heroImage: cdnImage("photo-1558981806-ec527fa84c39"),
    heroAlt: "Motorcycle on an open road, the kind of ride a Bali dirt bike tour chases",
    sections: [
      {
        paragraphs: [
          "The search “Bali tour guide” usually returns the same temple loop. That is fine for a first morning. If you want volcanic sand, pine forest, and a guide who actually rides, look at people who live on those roads.",
          "We are a shop in Abianbase, not a tour desk. When guests ask who to call for a real day out, we point them to Selaras Bali Guide — dirt-bike adventures based around Kintamani, plus smaller village-led days when you want something slower.",
        ],
        link: {
          href: SELARAS_GUIDE_URL,
          label: "Contact Selaras Bali Guide at selarasbaliguide.com",
        },
      },
      {
        heading: "Bali dirt bike tours in Kintamani",
        paragraphs: [
          "Selaras’s flagship day is a premium dirt-bike experience: volcanic trails, forest, and black-sand stretches, matched to your skill. Beginners are welcome. So are people who already ride. Gear and boots are included. Hotel pickup is part of the plan, which matters if you are staying in Badung or the west coast and do not want to find Kintamani on a scooter with no spare chain.",
          "Half-day rides run about three to four hours. Full days stretch toward six to eight, with lunch in the hills. Starting prices are listed on their site in rupiah and depend on the bike and the track. Chat them first with your date, group size, and whether anyone in the group is new to dirt bikes.",
        ],
        list: [
          "Base around Kintamani / Mount Batur",
          "Minimum two riders on many itineraries",
          "Full riding gear provided",
          "Hotel pickup and drop-off arranged",
          "Trails chosen for the people actually on the bikes, not a fixed Instagram route",
        ],
      },
      {
        heading: "Slower village days, if you do not want a full-throttle ride",
        paragraphs: [
          "Not every holiday needs a clutch. Selaras also talks about smaller, village-led experiences — cycling through terraces, a coffee stop, a cooking class — kept in small groups so you can actually speak to the host. Those days suit families, mixed-ability groups, and anyone who has already done the Tanah Lot sunset photo.",
          "Ask them what is running on your dates. Availability changes with ceremony days and weather, which is another reason to chat first rather than paying a big platform and hoping.",
        ],
      },
      {
        heading: "How to book a Bali tour guide with Selaras",
        paragraphs: [
          "Open selarasbaliguide.com and use their WhatsApp. Tell them where you are staying (Abianbase, Canggu, Ubud, or elsewhere), how many people, riding experience, and the day you want. No need to treat an enquiry as a payment. Confirm the pickup time, what is included, and what you should wear.",
          "After the ride, you will want water, ice, and something cold. That is our part. Chat MadeBrings first to confirm your order so the villa is ready when you get back dusty and hungry.",
        ],
        link: {
          href: MONEY_PATH,
          label: "Book alcohol delivery for the villa fridge",
        },
      },
      {
        heading: "Pair a trail day with a quiet night in Abianbase",
        paragraphs: [
          "A Kintamani day starts early. Eat a proper breakfast, wear long sleeves for the cool highland morning, and do not plan a second big activity. Come back to Badung, shower, and keep the evening simple: warung food or a villa cook-up, licensed drinks only, and an early sleep.",
          "If you want a cultural nightcap, read our note on arak — the traditional Balinese spirit — and never buy an unlabeled bottle from the side of the road.",
        ],
        link: {
          href: "/blog/arak-bali-traditional-drink",
          label: "Arak Bali: traditional use, licensed bottles, and safety",
        },
      },
    ],
  },
  {
    slug: "arak-bali-traditional-drink",
    title: "Arak Bali: the traditional spirit, ceremonial use, and how to drink it safely",
    description:
      "Arak Bali is a traditional Balinese spirit distilled from palm sap, used in ceremony and now sold in licensed bottles. Learn the culture, Hari Arak Bali, and why unmarked arak is not worth the risk.",
    excerpt:
      "Arak is not a beach-club gimmick. It is a Balinese spirit with a place in offering and in the glass — when it comes from a licensed bottle.",
    keywords: [
      "Arak Bali",
      "traditional Balinese drink",
      "Hari Arak Bali",
      "licensed arak Bali",
      "Balinese ceremony",
      "coconut palm sap spirit",
      "what is arak",
      "safe arak Bali",
      "Balinese distilled spirit",
    ],
    datePublished: "2026-08-27",
    dateModified: "2026-08-27",
    readingMinutes: 8,
    heroImage: cdnImage("photo-1514362545857-3bc16c4c7d1b"),
    heroAlt: "A clear spirit served with citrus, the way visitors often meet arak in Bali",
    sections: [
      {
        paragraphs: [
          "Ask a Balinese family about arak and you will not get a cocktail recipe first. You will hear about offerings, village distillation, and a drink that was here long before villa menus spelled it with a capital A.",
          "Arak Bali is a clear distilled spirit, usually made from fermented coconut-flower sap or sugar-palm sap, sometimes rice. It is not the anise-scented arak of the eastern Mediterranean. On this island it is a local product with a ceremonial job and, since 2020, a legal path to sit on a proper shelf.",
        ],
      },
      {
        heading: "Traditional use: offering, gathering, and respect",
        paragraphs: [
          "In many households a little arak is poured as part of banten — the offerings that mark the day, the temple, or a family ceremony. It is one of the tastes given back to the unseen world, alongside rice, flowers, and incense. That is the context visitors miss when they only meet arak as a shot on Legian.",
          "Socially, arak belongs to gatherings: after work, after a ceremony, when neighbors sit. It is strong. It is meant to be shared slowly, not stacked. If you are invited to taste in a family setting, follow the host. A sip can be enough. You do not have to finish what is poured.",
        ],
      },
      {
        heading: "Hari Arak Bali and why licensed bottles matter",
        paragraphs: [
          "Bali now marks Hari Arak Bali (Arak Bali Day) around late January, a public reminder that this is a heritage product, not a loophole. Regulation after 2020 was a response to real harm: unmarked, home-distilled spirit has been linked to methanol poisoning. That is not folklore. People have died.",
          "Drink only arak from licensed producers, in sealed bottles, bought from a shop that can tell you the name on the label. Brands you will hear locally include names such as Dewi Sri, Karusotju, Selaka Ning, and IWAK. If a bottle has no label, no tax tape, and a suspiciously low price, leave it.",
        ],
        list: [
          "Look for a producer name and a sealed cap",
          "Buy from a shop, not a nameless plastic bottle on a roadside stall",
          "You must be 21 or older under Indonesian law",
          "If the pour burns in a chemical way, or the host cannot say who made it, stop",
        ],
      },
      {
        heading: "How visitors usually drink arak",
        paragraphs: [
          "In a warung, arak often meets lime, honey, or ginger — arak es, arak madu. In bars it is mixed like a rum or a cane spirit, with mango, lemongrass, or tonic. Distillery visits exist in the highlands (Tabanan / Batukaru) and in the east; they are worth a planned trip, not a detour on a tired afternoon.",
          "MadeBrings is a small shop. We do not pretend to hold a full arak cellar. If you want a licensed local bottle with your beer and ice, chat first to confirm your order. We will tell you honestly what is on the shelf that day.",
        ],
        link: {
          href: MONEY_PATH,
          label: "Book a licensed bottle with beer and ice from Abianbase",
        },
      },
      {
        heading: "Pair culture with a guide, not a guess",
        paragraphs: [
          "If you want to see how village life actually runs — including the offerings that sit beside a glass of arak — go with someone from the island. For trail days and booked experiences we recommend Selaras Bali Guide. For the fridge at the villa, message us on WhatsApp before you count on any bottle.",
        ],
        link: {
          href: "/blog/bali-tour-guide-selaras",
          label: "Find a Bali tour guide through Selaras",
        },
      },
    ],
  },
];

export function localizeBlogPost(post: BlogPost, locale: Locale): BlogPost {
  if (locale !== "id" || !post.idCopy) return post;
  return {
    ...post,
    title: post.idCopy.title,
    description: post.idCopy.description,
    excerpt: post.idCopy.excerpt,
    speakable: post.idCopy.speakable ?? post.speakable,
    sections: post.idCopy.sections,
    faqs: post.idCopy.faqs ?? post.faqs,
    inclusions: post.idCopy.inclusions ?? post.inclusions,
    heroAlt: post.idCopy.heroAlt ?? post.heroAlt,
  };
}

export function getBlogPosts() {
  return [...getCommercialPosts(), ...editorialPosts];
}

export function getBlogPost(slug: string) {
  return getBlogPosts().find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string) {
  const all = getBlogPosts();
  const current = all.find((post) => post.slug === slug);
  const rest = all.filter((post) => post.slug !== slug);
  if (!current) return rest;
  const intent = current.intent ?? "editorial";
  const same = rest.filter((post) => (post.intent ?? "editorial") === intent);
  const other = rest.filter((post) => (post.intent ?? "editorial") !== intent);
  return [...same, ...other];
}

export function blogJsonLd(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.heroImage,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: {
      "@type": "Person",
      name: siteConfig.owner,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
    keywords: post.keywords.join(", "),
    speakable: post.speakable
      ? {
          "@type": "SpeakableSpecification",
          cssSelector: ["[data-speakable]"],
        }
      : undefined,
  };
}
