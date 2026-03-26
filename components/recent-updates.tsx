import { Activity, ArrowUpRight, Clock3 } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { type SiteContent } from "@/lib/site-content"

export function RecentUpdates({ content }: { content: SiteContent["recent"] }) {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">{content.eyebrow}</span>
          <h2 className="mt-4 mb-6 text-3xl font-bold text-balance md:text-4xl">{content.title}</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-pretty">{content.description}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
          <Card className="border-primary/30 bg-card">
            <CardContent className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15">
                  <Clock3 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{content.latestTitle}</h3>
              </div>

              <div className="space-y-5">
                {content.latest.map((item) => (
                  <div key={`${item.date}-${item.title}`} className="rounded-2xl border border-border bg-background/60 p-5">
                    <div className="mb-2 text-sm font-mono text-primary">{item.date}</div>
                    <div className="mb-2 text-lg font-semibold text-foreground">{item.title}</div>
                    <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                      >
                        {item.linkLabel ?? "Open link"}
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    ) : null}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardContent className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15">
                  <Activity className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{content.impactTitle}</h3>
              </div>

              <div className="space-y-4">
                {content.impacts.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-border p-5 transition-colors hover:border-primary/40">
                    <div className="mb-2 flex items-start justify-between gap-4">
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-primary" />
                    </div>
                    <div className="mb-2 text-lg font-semibold text-foreground">{item.value}</div>
                    <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
