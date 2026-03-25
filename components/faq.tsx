"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { type SiteContent } from "@/lib/site-content"

export function FAQ({ content }: { content: SiteContent["faq"] }) {
  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">{content.eyebrow}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">{content.title}</h2>
          <p className="text-muted-foreground">{content.description}</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {content.items.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6 text-foreground">
                <span className="flex items-start gap-4">
                  <span className="text-primary font-mono text-sm mt-0.5">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{faq.question}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pl-10 text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
