import { Check, X } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { type SiteContent } from "@/lib/site-content"

export function Overview({ content }: { content: SiteContent["overview"] }) {
  return (
    <section id="overview" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">{content.eyebrow}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-balance">{content.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">{content.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                  <X className="w-5 h-5 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{content.traditionalTitle}</h3>
              </div>
              <ul className="space-y-4">
                {content.traditionalItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-primary/50">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{content.turboTitle}</h3>
              </div>
              <ul className="space-y-4">
                {content.turboItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {content.papers.map((paper) => (
            <Card key={paper.title} className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="text-primary text-sm font-mono mb-2">{paper.venue}</div>
                <h4 className="text-lg font-semibold mb-2 text-foreground">{paper.title}</h4>
                <p className="text-sm text-muted-foreground">{paper.description}</p>
                <a
                  href={paper.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-sm mt-3 inline-block hover:underline"
                >
                  {paper.linkLabel} →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
