import { AlertTriangle, ExternalLink, GitBranch, Server, Smartphone } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { type SiteContent } from "@/lib/site-content"

function DeploymentIcon({ icon }: { icon: SiteContent["usage"]["deploymentCards"][number]["icon"] }) {
  if (icon === "server") {
    return <Server className="w-8 h-8 text-primary mb-4" />
  }

  if (icon === "phone") {
    return <Smartphone className="w-8 h-8 text-primary mb-4" />
  }

  return (
    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-4">
      <span className="font-bold text-sm">FP</span>
    </div>
  )
}

export function Usage({ content }: { content: SiteContent["usage"] }) {
  return (
    <section id="usage" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">{content.eyebrow}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">{content.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{content.description}</p>
        </div>

        <Card className="bg-primary/5 border-primary/30 mb-12">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-foreground">
              <GitBranch className="w-5 h-5 text-primary" />
              {content.statusTitle}
            </h3>
            <p className="text-muted-foreground mb-4">{content.statusDescription}</p>
            <ul className="space-y-2 text-sm">
              {content.statusItems.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">{content.stepsTitle}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {content.steps.map((step, index) => (
              <Card key={step.title} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                      {index + 1}
                    </div>
                    <h4 className="font-semibold text-foreground">{step.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                  <div className="bg-secondary/50 rounded-lg p-3 font-mono text-xs overflow-x-auto">
                    <pre className="text-foreground">{step.code}</pre>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">{content.deploymentTitle}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {content.deploymentCards.map((card) => (
              <Card key={card.title} className="bg-card border-border">
                <CardContent className="p-6">
                  <DeploymentIcon icon={card.icon} />
                  <h4 className="font-semibold mb-2 text-foreground">{card.title}</h4>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-secondary/30 border-border">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-foreground">
              <AlertTriangle className="w-5 h-5 text-primary" />
              {content.challengesTitle}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {content.challenges.map((item) => (
                <div key={item.title}>
                  <h4 className="font-medium mb-2 text-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">{content.roadmapLabel}</p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border">
            <code className="text-sm font-mono text-primary">{content.roadmapCode}</code>
            <a
              href={content.roadmapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
