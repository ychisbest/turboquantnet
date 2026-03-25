import { Atom, Database, Image, Rocket, Smartphone, Users } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { type SiteContent } from "@/lib/site-content"

function ImpactIcon({ icon }: { icon: SiteContent["future"]["impacts"][number]["icon"] }) {
  if (icon === "rocket") return <Rocket className="w-8 h-8 text-primary mb-4" />
  if (icon === "database") return <Database className="w-8 h-8 text-primary mb-4" />
  if (icon === "phone") return <Smartphone className="w-8 h-8 text-primary mb-4" />
  if (icon === "image") return <Image className="w-8 h-8 text-primary mb-4" />
  if (icon === "atom") return <Atom className="w-8 h-8 text-primary mb-4" />
  return <Users className="w-8 h-8 text-primary mb-4" />
}

export function Future({ content }: { content: SiteContent["future"] }) {
  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">{content.eyebrow}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">{content.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {content.impacts.map((item) => (
            <Card key={item.title} className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <ImpactIcon icon={item.icon} />
                <h4 className="font-semibold mb-2 text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-card border-border">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold mb-8 text-center text-foreground">{content.timelineTitle}</h3>
            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
              <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
                {content.timeline.map((item) => (
                  <div key={item.title} className="relative">
                    <div className="md:text-center">
                      <div
                        className={`inline-flex items-center justify-center w-12 h-12 rounded-full font-bold mb-4 ${
                          item.primary ? "bg-primary text-primary-foreground" : "bg-primary/20 text-primary"
                        }`}
                      >
                        {item.badge}
                      </div>
                      <h4 className="font-semibold mb-2 text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 p-4 rounded-lg bg-secondary/30 border border-border">
          <p className="text-sm text-muted-foreground text-center">{content.risk}</p>
        </div>
      </div>
    </section>
  )
}
