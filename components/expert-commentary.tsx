import { Quote } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { type SiteContent } from "@/lib/site-content"

export function ExpertCommentary({ content }: { content: SiteContent["expert"] }) {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">{content.eyebrow}</span>
          <h2 className="mt-4 mb-6 text-3xl font-bold text-balance md:text-4xl">{content.title}</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-pretty">{content.description}</p>
        </div>

        <div className="space-y-8">
          {content.comments.map((comment) => (
            <Card key={`${comment.author}-${comment.summary}`} className="border-primary/30 bg-card">
              <CardContent className="p-8 md:p-10">
                <div className="mb-8 flex items-start justify-between gap-6">
                  <div>
                    <div className="text-xl font-semibold text-foreground">{comment.author}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{comment.role}</div>
                  </div>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/15">
                    <Quote className="h-6 w-6 text-primary" />
                  </div>
                </div>

                <div className="mb-8 rounded-2xl border border-primary/20 bg-primary/5 p-6">
                  <p className="text-lg leading-8 text-foreground text-pretty">{comment.summary}</p>
                </div>

                <div className="space-y-5">
                  {comment.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-8 text-muted-foreground text-pretty">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
