# Kashi Prangan

A responsive, SEO-friendly informational homestay website for Kashi Prangan in Varanasi, built with Next.js App Router and TypeScript.

## Getting started

Requires Node.js 20.9 or later.

```bash
npm install
npm run dev
```

Open http://localhost:3000. Use `npm run build` to create a production build, `npm start` to serve it, `npm run lint` for ESLint, and `npm run typecheck` for TypeScript.

## Property content

Edit `src/data/property.ts` to update the property name, contact details, address, room descriptions, amenities, nearby attractions and imagery. Replace all sample contact details, distances, and illustrative imagery with verified owner information before launch. The current WhatsApp number and email are placeholders.

The canonical domain is set to `https://www.kashiprangan.com` in the same data file. Change it to the confirmed live domain before launch so metadata, sitemap, robots and structured data reference the right address.

## Images and fonts

The city imagery shows Varanasi's ghats and old lanes, plus the Dhamek Stupa at Sarnath. The Sarnath image credit and license are shown beside the gallery. Room images are illustrative Unsplash photos; replace them with verified Kashi Prangan room photography before publishing. The page uses Google Fonts loaded by CSS. Remote image hosts are configured in `next.config.ts`.
