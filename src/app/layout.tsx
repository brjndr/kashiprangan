import type { Metadata } from "next";
import "./globals.css";
import { property } from "@/data/property";

export const metadata: Metadata = {
  metadataBase: new URL(property.canonicalUrl),
  title: { default: "Kashi Prangan | A welcoming homestay in Varanasi", template: "%s | Kashi Prangan" },
  description: "Discover Kashi at your own pace. Kashi Prangan is a warm, thoughtful homestay in Varanasi, India.",
  keywords: ["Kashi Prangan", "homestay in Varanasi", "Varanasi homestay", "stay in Kashi", "Varanasi accommodation"],
  openGraph: { type: "website", locale: "en_IN", url: property.canonicalUrl, siteName: property.name, title: "Kashi Prangan | A welcoming homestay in Varanasi", description: property.description, images: [{ url: property.heroImage, width: 2200, height: 1467, alt: property.heroAlt }] },
  twitter: { card: "summary_large_image", title: "Kashi Prangan | A welcoming homestay in Varanasi", description: property.description, images: [property.heroImage] },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
