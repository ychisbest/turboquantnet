import type { Metadata } from "next"

import { HomePage } from "@/components/home-page"
import { DEFAULT_LOCALE, getSiteContent } from "@/lib/site-content"

export const metadata: Metadata = getSiteContent(DEFAULT_LOCALE).meta

export default function Page() {
  return <HomePage locale={DEFAULT_LOCALE} />
}
