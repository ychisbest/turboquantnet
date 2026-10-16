import { AdBanner } from "@/components/ad-banner"
import { Background } from "@/components/background"
import { CorePrinciple } from "@/components/core-principle"
import { ExpertCommentary } from "@/components/expert-commentary"
import { FAQ } from "@/components/faq"
import { FaqJsonLd } from "@/components/faq-json-ld"
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
      {locale === "en" ? <FaqJsonLd items={content.faq.items} /> : null}
      <Navigation locale={locale} content={content.nav} languageNames={content.languageNames} />
      <Hero content={content.hero} />
      <section className="px-6 pb-8">
        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
          <a
            href="/paper"
            className="rounded-xl border border-border bg-card/50 p-5 hover:border-primary/50"
          >
            <div className="font-semibold text-foreground">Paper & how it works</div>
            <p className="mt-2 text-sm text-muted-foreground">
              KV cache, PolarQuant, QJL, cited figures.
            </p>
          </a>
          <a
            href="/guide"
            className="rounded-xl border border-border bg-card/50 p-5 hover:border-primary/50"
          >
            <div className="font-semibold text-foreground">How to use TurboQuant</div>
            <p className="mt-2 text-sm text-muted-foreground">
              MLX, LM Studio, llama.cpp, vLLM status.
            </p>
          </a>
          <a
            href="/#faq"
            className="rounded-xl border border-border bg-card/50 p-5 hover:border-primary/50"
          >
            <div className="font-semibold text-foreground">FAQ</div>
            <p className="mt-2 text-sm text-muted-foreground">
              What it is, Google relation, typos, running locally.
            </p>
          </a>
        </div>
      </section>
      <RecentUpdates content={content.recent} />
      <AdBanner />
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
