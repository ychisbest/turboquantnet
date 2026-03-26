import { MemoryProjectionChart } from "@/components/memory-projection-chart"
import { Card, CardContent } from "@/components/ui/card"
import { type SiteContent } from "@/lib/site-content"

export function Results({ content }: { content: SiteContent["results"] }) {
  return (
    <section id="results" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">{content.eyebrow}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">{content.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{content.description}</p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">{content.kvTitle}</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {content.kvCards.map((card) => (
              <Card key={card.label} className="bg-card border-border">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{card.value}</div>
                  <div className="text-sm text-muted-foreground">{card.label}</div>
                  <div className="text-xs text-muted-foreground mt-1">{card.note}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-card border-border overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-secondary/50">
                    <tr>
                      {content.benchmarkHeaders.map((header, index) => (
                        <th
                          key={header}
                          className={`${index === 0 ? "text-left" : "text-center"} p-4 font-semibold text-foreground`}
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {content.benchmarkRows.map((row) => (
                      <tr key={row[0]}>
                        {row.map((cell, index) => (
                          <td
                            key={`${row[0]}-${index}`}
                            className={`p-4 ${index === 0 ? "text-foreground" : "text-center"} ${
                              index === 1 ? "text-primary font-semibold" : index === 3 ? "text-muted-foreground" : "text-foreground"
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">{content.vectorTitle}</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4 text-foreground">{content.recallTitle}</h4>
                <div className="space-y-4">
                  {content.recallBars.map((bar) => (
                    <div key={bar.label}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className={bar.primary ? "text-foreground" : "text-muted-foreground"}>{bar.label}</span>
                        <span className={bar.primary ? "text-primary" : "text-muted-foreground"}>{bar.value}</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${bar.primary ? "bg-primary" : "bg-muted-foreground"}`}
                          style={{ width: bar.width }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4 text-foreground">{content.indexingTitle}</h4>
                <div className="space-y-4">
                  {content.indexingBars.map((bar) => (
                    <div key={bar.label}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className={bar.primary ? "text-foreground" : "text-muted-foreground"}>{bar.label}</span>
                        <span className={bar.primary ? "text-primary" : "text-muted-foreground"}>{bar.value}</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${bar.primary ? "bg-primary" : "bg-muted-foreground"}`}
                          style={{ width: bar.width }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-8 text-foreground">{content.compareTitle}</h3>
          <Card className="bg-card border-border overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-secondary/50">
                    <tr>
                      {content.compareHeaders.map((header, index) => (
                        <th
                          key={header}
                          className={`${index === 0 ? "text-left" : "text-center"} p-4 font-semibold text-foreground`}
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {content.compareRows.map((row) => (
                      <tr key={row.cells[0]} className={row.highlight ? "bg-primary/5" : ""}>
                        {row.cells.map((cell, index) => (
                          <td
                            key={`${row.cells[0]}-${index}`}
                            className={`p-4 ${index === 0 ? "text-left" : "text-center"} ${
                              row.highlight ? "text-primary font-semibold" : "text-muted-foreground"
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16">
          <MemoryProjectionChart content={content.memoryProjection} />
        </div>
      </div>
    </section>
  )
}
