import type { MetadataRoute } from "next";
import { property } from "@/data/property";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: property.canonicalUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
