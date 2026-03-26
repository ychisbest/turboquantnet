"use client"

import Image from "next/image"
import { ArrowRight, Cpu, Database, Zap } from "lucide-react"

import heroImage from "@/assets/hero.png"
import { Button } from "@/components/ui/button"
import { type SiteContent } from "@/lib/site-content"

export function Hero({ content }: { content: SiteContent["hero"] }) {
  const icons = [Database, Zap, Cpu]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[128px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 text-center">
        <div className="flex w-fit items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mx-auto mt-6 mb-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="text-sm text-muted-foreground">{content.badge}</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance">
          <span className="text-primary">{content.title}</span>
          <br />
          <span className="text-foreground">{content.highlight}</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed text-pretty">
          {content.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button size="lg" className="gap-2 px-8" asChild>
            <a href="#core">
              {content.primaryCta}
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="gap-2 px-8" asChild>
            <a href="https://arxiv.org/pdf/2504.19874" target="_blank" rel="noopener noreferrer">
              {content.secondaryCta}
            </a>
          </Button>
        </div>

        <div className="relative mx-auto mb-16 max-w-5xl overflow-hidden rounded-3xl border border-border bg-card/40 p-3 shadow-2xl shadow-primary/10 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-transparent to-background/30" />
          <Image
            src={heroImage}
            alt="TurboQuantNet hero visualization"
            priority
            className="relative z-10 h-auto w-full rounded-2xl object-cover"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.metrics.map((metric, index) => {
            const Icon = icons[index]
            return (
              <div
                key={metric.label}
                className="group p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors"
              >
                <Icon className="w-8 h-8 text-primary mb-4 mx-auto" />
                <div className="text-3xl font-bold text-foreground mb-2">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
