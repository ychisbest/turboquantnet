import Link from "next/link"

import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { DEFAULT_LOCALE, getSiteContent } from "@/lib/site-content"

type SitePageShellProps = {
  eyebrow: string
  title: string
  description: string
  children: React.ReactNode
}

export function SitePageShell({ eyebrow, title, description, children }: SitePageShellProps) {
  const content = getSiteContent(DEFAULT_LOCALE)

  return (
    <main className="min-h-screen bg-background">
      <Navigation
        locale={DEFAULT_LOCALE}
        content={content.nav}
        languageNames={content.languageNames}
      />
      <section className="px-6 pt-36 pb-16">
        <div className="mx-auto max-w-4xl">
          <Link href="/" className="text-sm text-primary hover:text-foreground transition-colors">
            Back to home
          </Link>
          <div className="mt-8 rounded-3xl border border-border bg-card/40 p-8 md:p-12">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              {eyebrow}
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">{title}</h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">{description}</p>
          </div>
        </div>
      </section>
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-4xl">{children}</div>
      </section>
      <Footer content={content.footer} />
    </main>
  )
}

