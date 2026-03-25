import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { type SiteContent } from "@/lib/site-content"

export function CorePrinciple({ content }: { content: SiteContent["core"] }) {
  return (
    <section id="core" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">{content.eyebrow}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-balance">{content.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{content.description}</p>
        </div>

        <Tabs defaultValue="polarquant" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="polarquant">{content.tabs.polar}</TabsTrigger>
            <TabsTrigger value="qjl">{content.tabs.qjl}</TabsTrigger>
            <TabsTrigger value="algorithm">{content.tabs.algorithm}</TabsTrigger>
          </TabsList>

          <TabsContent value="polarquant">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">{content.polar.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{content.polar.description}</p>

                <Card className="bg-secondary/50 border-border mb-6">
                  <CardContent className="p-6">
                    <h4 className="text-sm font-semibold text-primary mb-3">{content.polar.formulaTitle}</h4>
                    <div className="font-mono text-sm p-3 bg-background rounded-lg overflow-x-auto text-foreground">
                      <pre>{content.polar.formula}</pre>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-3 text-sm">
                  {content.polar.steps.map((step, index) => (
                    <div key={step} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-muted-foreground">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="bg-primary/5 border-primary/30">
                <CardContent className="p-8">
                  <h4 className="text-lg font-semibold text-primary mb-4">{content.polar.advantagesTitle}</h4>
                  <ul className="space-y-4">
                    {content.polar.advantages.map((item) => (
                      <li key={item.title} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                        <div>
                          <div className="font-medium text-foreground">{item.title}</div>
                          <div className="text-sm text-muted-foreground">{item.description}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="qjl">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">{content.qjl.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{content.qjl.description}</p>

                <Card className="bg-secondary/50 border-border mb-6">
                  <CardContent className="p-6">
                    <h4 className="text-sm font-semibold text-primary mb-3">{content.qjl.quantTitle}</h4>
                    <div className="font-mono text-sm p-3 bg-background rounded-lg space-y-2 text-foreground">
                      <div>{content.qjl.quantFormula}</div>
                      <div className="text-muted-foreground text-xs">{content.qjl.quantNote}</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-secondary/50 border-border">
                  <CardContent className="p-6">
                    <h4 className="text-sm font-semibold text-primary mb-3">{content.qjl.dequantTitle}</h4>
                    <div className="font-mono text-sm p-3 bg-background rounded-lg text-foreground">
                      {content.qjl.dequantFormula}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="bg-primary/5 border-primary/30">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-primary mb-4">{content.qjl.proofTitle}</h4>
                    <div className="font-mono text-sm p-3 bg-background rounded-lg mb-4 text-foreground">
                      {content.qjl.proofFormula}
                    </div>
                    <p className="text-sm text-muted-foreground">{content.qjl.proofNote}</p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-4 text-foreground">{content.qjl.reasonsTitle}</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      {content.qjl.reasons.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="text-primary">→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="algorithm">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2 text-foreground">{content.algorithm.mseTitle}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{content.algorithm.mseSubtitle}</p>
                  <div className="bg-secondary/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <pre className="text-foreground">{content.algorithm.mseCode}</pre>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2 text-foreground">{content.algorithm.prodTitle}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{content.algorithm.prodSubtitle}</p>
                  <div className="bg-secondary/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <pre className="text-foreground">{content.algorithm.prodCode}</pre>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8 bg-primary/5 border-primary/30">
              <CardContent className="p-8">
                <h4 className="text-lg font-semibold text-primary mb-6">{content.algorithm.theoremTitle}</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  {content.algorithm.theoremCards.map((item) => (
                    <div key={item.label} className="p-4 bg-background rounded-lg">
                      <div className="text-sm text-muted-foreground mb-2">{item.label}</div>
                      <div className="font-mono text-foreground">{item.value}</div>
                      <div className="text-xs text-muted-foreground mt-2">{item.note}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
