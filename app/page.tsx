import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Overview } from "@/components/overview"
import { Background } from "@/components/background"
import { CorePrinciple } from "@/components/core-principle"
import { Results } from "@/components/results"
import { Usage } from "@/components/usage"
import { Future } from "@/components/future"
import { FAQ } from "@/components/faq"
import { Resources } from "@/components/resources"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Overview />
      <Background />
      <CorePrinciple />
      <Results />
      <Usage />
      <Future />
      <FAQ />
      <Resources />
      <Footer />
    </main>
  )
}
