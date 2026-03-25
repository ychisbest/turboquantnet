import { Card, CardContent } from "@/components/ui/card"
import { type SiteContent } from "@/lib/site-content"

export function Background({ content }: { content: SiteContent["background"] }) {
  return (
    <section id="background" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">{content.eyebrow}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-balance">{content.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{content.description}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-foreground">
              <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">1</span>
              {content.vectorTitle}
            </h3>

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">{content.vectorDescription}</p>

              <Card className="bg-secondary/50 border-border">
                <CardContent className="p-6">
                  <h4 className="text-sm font-semibold text-primary mb-3">{content.distortionTitle}</h4>
                  <div className="space-y-3 font-mono text-sm">
                    {content.distortionItems.map((item) => (
                      <div key={item} className="p-3 bg-background rounded-lg text-foreground">
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-secondary/50 border-border">
                <CardContent className="p-6">
                  <h4 className="text-sm font-semibold text-primary mb-3">Theory</h4>
                  <div className="space-y-2 font-mono text-sm text-foreground">
                    <div>{"MSE lower bound: D_MSE ≥ 1/4^b"}</div>
                    <div>{"Inner-product lower bound: D_prod ≥ (||y||² / d) · 1/4^b"}</div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">{content.distortionFootnote}</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-foreground">
              <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">2</span>
              {content.kvTitle}
            </h3>

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">{content.kvDescription}</p>

              <Card className="bg-secondary/50 border-border">
                <CardContent className="p-6">
                  <h4 className="text-sm font-semibold text-primary mb-3">{content.memoryTitle}</h4>
                  <div className="font-mono text-sm p-3 bg-background rounded-lg text-foreground">
                    {content.memoryFormula}
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {content.memoryStats.map((item) => (
                      <div key={item.label} className="flex justify-between gap-4">
                        <span>{item.label}</span>
                        <span className="text-destructive font-semibold">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/10 border-primary/30">
                <CardContent className="p-6">
                  <h4 className="text-sm font-semibold text-primary mb-3">{content.solutionTitle}</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {content.solutionItems.map((item) => (
                      <li key={item}>✓ {item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-foreground">
            <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">3</span>
            {content.applicationTitle}
          </h3>
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <p className="text-muted-foreground mb-4">{content.applicationDescription}</p>
              <div className="grid md:grid-cols-2 gap-6">
                {content.applicationCards.map((card) => (
                  <div key={card.title} className="p-4 bg-secondary/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">{card.title}</div>
                    <div className="text-sm text-muted-foreground">{card.description}</div>
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
