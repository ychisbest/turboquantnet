import type { MetadataRoute } from "next"

import { SUPPORTED_LOCALES } from "@/lib/site-content"
import { getSiteUrl } from "@/lib/site-url"

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl()
  const lastModified = new Date()
  const languages = Object.fromEntries(
    SUPPORTED_LOCALES.map((locale) => [
      locale,
      locale === "en" ? `${siteUrl}/` : `${siteUrl}/${locale}`,
    ])
  )

  return SUPPORTED_LOCALES.map((locale) => ({
    url: locale === "en" ? siteUrl : `${siteUrl}/${locale}`,
    lastModified,
    alternates: {
      languages,
    },
  }))
}
