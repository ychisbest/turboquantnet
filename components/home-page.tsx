import { Background } from "@/components/background"
import { CorePrinciple } from "@/components/core-principle"
import { ExpertCommentary } from "@/components/expert-commentary"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { Future } from "@/components/future"
import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { Overview } from "@/components/overview"
import { RecentUpdates } from "@/components/recent-updates"
import { Resources } from "@/components/resources"
import { Results } from "@/components/results"
import { Usage } from "@/components/usage"
import { type Locale, getSiteContent } from "@/lib/site-content"

export function HomePage({ locale }: { locale: Locale }) {
  const content = getSiteContent(locale)

  return (
    <main className="min-h-screen bg-background">
      <Navigation locale={locale} content={content.nav} languageNames={content.languageNames} />
      <Hero content={content.hero} />
      <RecentUpdates content={content.recent} />
      <ExpertCommentary content={content.expert} />
      <Overview content={content.overview} />
      <Background content={content.background} />
      <CorePrinciple content={content.core} />
      <Results content={content.results} />
      <Usage content={content.usage} />
      <Future content={content.future} />
      <FAQ content={content.faq} />
      <Resources content={content.resources} />
      <Footer content={content.footer} />
    </main>
  )
}
