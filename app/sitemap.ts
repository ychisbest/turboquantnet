import type { MetadataRoute } from "next"

export const dynamic = "force-static"

import { getSiteUrl } from "@/lib/site-url"

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl()
  const lastModified = new Date()

  return [
    { url: `${siteUrl}/`, lastModified },
    { url: `${siteUrl}/paper/`, lastModified },
    { url: `${siteUrl}/guide/`, lastModified },
    { url: `${siteUrl}/about/`, lastModified },
    { url: `${siteUrl}/contact/`, lastModified },
    { url: `${siteUrl}/links/`, lastModified },
    { url: `${siteUrl}/privacy/`, lastModified },
    { url: `${siteUrl}/terms/`, lastModified },
  ]
}
