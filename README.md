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

The page uses illustrative Unsplash images and Google Fonts loaded by CSS. Replace the images with property photography for launch. To make all assets self-hosted, add image files under `public/`, update the typed data, and remove the remote image host from `next.config.ts`.
