import type { MetadataRoute } from "next"

import { getSiteUrl } from "@/lib/site-url"

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl()
  const lastModified = new Date()

  return [
    {
      url: siteUrl,
      lastModified,
    },
    {
      url: `${siteUrl}/about`,
      lastModified,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified,
    },
    {
      url: `${siteUrl}/links`,
      lastModified,
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified,
    },
    {
      url: `${siteUrl}/terms`,
      lastModified,
    },
  ]
}
