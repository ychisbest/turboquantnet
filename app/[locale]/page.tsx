import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { HomePage } from "@/components/home-page"
import { SUPPORTED_LOCALES, type Locale, getSiteContent, isSupportedLocale } from "@/lib/site-content"

export function generateStaticParams() {
  return SUPPORTED_LOCALES.filter((locale) => locale !== "en").map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  if (!isSupportedLocale(locale) || locale === "en") {
    return getSiteContent("en").meta
  }

  return {
    ...getSiteContent(locale).meta,
    robots: {
      index: false,
      follow: true,
    },
  }
}

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!isSupportedLocale(locale) || locale === "en") {
    notFound()
  }

  return <HomePage locale={locale as Locale} />
}
