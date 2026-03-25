export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">TQ</span>
            </div>
            <span className="font-bold text-lg text-foreground">TurboQuant</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a
              href="https://arxiv.org/pdf/2504.19874"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              论文
            </a>
            <a
              href="https://research.google/blog/turboquant-redefining-ai-efficiency-with-extreme-compression/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              博客
            </a>
            <a
              href="#faq"
              className="hover:text-foreground transition-colors"
            >
              FAQ
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            内容基于 Google Research 公开论文
          </div>
        </div>
      </div>
    </footer>
  )
}
