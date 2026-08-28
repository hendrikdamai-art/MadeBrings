# MadeBrings

A customer-facing website for **MadeBrings**, a family liquor and beer shop in Abianbase, Badung, Bali, run by Made Hendrik.

People browse the shelf on the site, then **chat first to confirm your order** on WhatsApp. There is no trolley checkout. Payment is **cash or bank transfer**.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://127.0.0.1:43127](http://127.0.0.1:43127).

## Deploy on Vercel (Hobby / free)

This is a standard Next.js App Router project. It needs no database, no serverless GPU, and no persistent server process.

1. Push the repo to GitHub / GitLab / Bitbucket.
2. Import the project in Vercel.
3. Set the environment variables below.
4. Deploy.

Product photos live in `public/products`. Each file is the matching photo from the supplier listing, with the MadeBrings emblem in the top-right corner. Regenerating them: `python3 scripts/brand-product-images.py`.

## Environment variables

Copy `.env.example` to `.env.local`.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for sitemap, robots, and Open Graph. Use your Vercel or custom domain. |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Shop WhatsApp in international format, digits only, e.g. `62812xxxxxxx`. |
| `NEXT_PUBLIC_INSTAGRAM_URL` | Instagram profile. |
| `NEXT_PUBLIC_FACEBOOK_URL` | Facebook page. |
| `NEXT_PUBLIC_TRIPADVISOR_URL` | TripAdvisor listing. |
| `NEXT_PUBLIC_MAPS_URL` | Google Maps link to the shop. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Token from Google Search Console HTML-tag verification. |

Until those social URLs are set, the header and footer still show the five icons using placeholder links.

## Google Search Console

The site ships ready to submit:

- `https://your-domain/sitemap.xml` — pages, categories, and products
- `https://your-domain/robots.txt` — allows Googlebot and points at the sitemap
- Unique titles, descriptions, and canonical URLs on every page
- Open Graph tags and JSON-LD (`LiquorStore`, `Product`, `BlogPosting`)
- Blog posts for Bali holiday, tour-guide, and Arak Bali keywords
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` for the Search Console meta tag

After deploy: add the property in Search Console, paste the verification token into the env var, redeploy, then submit the sitemap.

## Architecture (ready to grow)

```
src/lib/commerce/     Catalog types + in-memory adapter
src/lib/whatsapp.ts   Checkout adapter (WhatsApp deep link)
public/products/      Branded product photos (MadeBrings emblem top-right)
src/app/              Storefront routes
```

Today the catalog is a typed TypeScript module so the first version stays on the Vercel free plan. Swap `src/lib/commerce/catalog.ts` later for Sanity, Shopify, Medusa, or a database API without rewriting the UI.

Checkout is already a separate adapter. Replacing WhatsApp with another payment flow later does not require a new storefront.

## Pages

- `/` Home
- `/shop` Full shelf
- `/shop/[category]` Beer & cider, RTD, mixers, ice & water, snacks
- `/product/[slug]` Product
- `/about` Family shop story
- `/contact` WhatsApp + map
- `/blog` Journal
- `/blog/bali-holiday-guide-badung`
- `/blog/bali-tour-guide-selaras` (links to [Selaras Bali Guide](https://www.selarasbaliguide.com))
- `/blog/arak-bali-traditional-drink`

Alcohol sales require confirming you are 21 or older (Indonesian law).

## Brand

Colours and type follow the MadeBrings emblem: forest green `#083820` on cream `#F3E1C7`, with **Bebas Neue** for headings (the condensed sans on the logo) and **Outfit** for body copy.
