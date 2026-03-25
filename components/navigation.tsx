"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { type Locale, type SiteContent, getLocalePath } from "@/lib/site-content"

type NavigationProps = {
  locale: Locale
  content: SiteContent["nav"]
  languageNames: SiteContent["languageNames"]
}

const languageOrder: Locale[] = ["en", "zh", "ko", "ja", "fr", "de", "pt"]

export function Navigation({ locale, content, languageNames }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">TQ</span>
            </div>
            <span className="font-bold text-lg text-foreground">TurboQuant</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {content.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <Button variant="outline" size="sm" asChild>
              <a href="https://arxiv.org/pdf/2504.19874" target="_blank" rel="noopener noreferrer">
                {content.paperLabel}
              </a>
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen((value) => !value)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div className="hidden md:flex justify-center mt-4">
          <div className="flex flex-wrap items-center justify-center gap-2 rounded-lg border border-border bg-card/60 px-4 py-2">
            <span className="text-xs uppercase tracking-wide text-muted-foreground">
              {content.languageLabel}
            </span>
            <div className="flex flex-wrap items-center justify-center gap-1">
              {languageOrder.map((item) => (
                <Link
                  key={item}
                  href={getLocalePath(item)}
                  className={`rounded px-2 py-1 text-xs transition-colors ${
                    item === locale
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {languageNames[item]}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 space-y-4">
            <div className="flex flex-col gap-4">
              {content.items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="space-y-2">
              <div className="text-xs uppercase tracking-wide text-muted-foreground">
                {content.languageLabel}
              </div>
              <div className="flex flex-wrap gap-2">
                {languageOrder.map((item) => (
                  <Link
                    key={item}
                    href={getLocalePath(item)}
                    className={`rounded border px-3 py-1.5 text-xs transition-colors ${
                      item === locale
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border text-muted-foreground"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {languageNames[item]}
                  </Link>
                ))}
              </div>
            </div>

            <Button variant="outline" size="sm" asChild>
              <a href="https://arxiv.org/pdf/2504.19874" target="_blank" rel="noopener noreferrer">
                {content.paperLabel}
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
