import type { Metadata } from "next"

import { HomePage } from "@/components/home-page"
import { DEFAULT_LOCALE, getSiteContent } from "@/lib/site-content"

const contentMeta = getSiteContent(DEFAULT_LOCALE).meta

export const metadata: Metadata = {
  ...contentMeta,
  alternates: { canonical: "https://turboquant.net/" },
  openGraph: {
    title: contentMeta.title,
    description: contentMeta.description,
    url: "https://turboquant.net/",
  },
}

export default function Page() {
  return <HomePage locale={DEFAULT_LOCALE} />
}
