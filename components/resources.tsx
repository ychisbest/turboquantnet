import { BookOpen, ExternalLink, FileText, MessageSquare } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { type SiteContent } from "@/lib/site-content"

export function Resources({ content }: { content: SiteContent["resources"] }) {
  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">{content.eyebrow}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">{content.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {content.items.map((resource) => {
            const Icon = resource.type === "blog" ? BookOpen : FileText
            return (
              <a
                key={resource.title}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="bg-card border-border h-full hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <Icon className="w-8 h-8 text-primary mb-4" />
                    <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors text-foreground">
                      {resource.title}
                      <ExternalLink className="w-4 h-4 inline ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h4>
                    <p className="text-sm text-muted-foreground">{resource.description}</p>
                  </CardContent>
                </Card>
              </a>
            )
          })}
        </div>

        <Card className="bg-card border-border">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">{content.communityTitle}</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {content.communities.map((community) => (
                <a
                  key={community.name}
                  href={community.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="p-4 bg-secondary/50 rounded-lg border border-transparent hover:border-primary/40 transition-colors h-full">
                    <h4 className="font-medium mb-1 text-foreground group-hover:text-primary transition-colors">
                      {community.name}
                      <ExternalLink className="w-4 h-4 inline ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h4>
                    <p className="text-sm text-muted-foreground">{community.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 p-4 rounded-lg bg-secondary/30 border border-border">
          <p className="text-sm text-muted-foreground text-center">{content.note}</p>
        </div>
      </div>
    </section>
  )
}
