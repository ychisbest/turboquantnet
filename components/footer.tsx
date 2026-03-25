import { type SiteContent } from "@/lib/site-content"

export function Footer({ content }: { content: SiteContent["footer"] }) {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">TQ</span>
            </div>
            <span className="font-bold text-lg text-foreground">TurboQuant</span>
          </div>

          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a
              href="https://arxiv.org/pdf/2504.19874"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              {content.paper}
            </a>
            <a
              href="https://research.google/blog/turboquant-redefining-ai-efficiency-with-extreme-compression/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              {content.blog}
            </a>
            <a href="#faq" className="hover:text-foreground transition-colors">
              {content.faq}
            </a>
          </div>

          <div className="text-sm text-muted-foreground">{content.copyright}</div>
        </div>
      </div>
    </footer>
  )
}
