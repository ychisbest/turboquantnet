"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Database, Cpu } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[128px]" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-sm text-muted-foreground">Google Research · 2026 年 3 月发布</span>
        </div>
        
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance">
          <span className="text-primary">TurboQuant</span>
          <br />
          <span className="text-foreground">重新定义 AI 效率</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed text-pretty">
          新型在线向量量化算法，实现<span className="text-primary font-semibold">零精度损失</span>的 3-bit KV Cache 压缩，
          内存减少 <span className="text-primary font-semibold">6 倍</span>，速度提升 <span className="text-primary font-semibold">8 倍</span>
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button size="lg" className="gap-2 px-8" asChild>
            <a href="#core">
              了解核心原理
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="gap-2 px-8" asChild>
            <a href="https://arxiv.org/pdf/2504.19874" target="_blank" rel="noopener noreferrer">
              阅读论文
            </a>
          </Button>
        </div>
        
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
            <Database className="w-8 h-8 text-primary mb-4 mx-auto" />
            <div className="text-3xl font-bold text-foreground mb-2">6x+</div>
            <div className="text-sm text-muted-foreground">内存压缩比</div>
          </div>
          <div className="group p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
            <Zap className="w-8 h-8 text-primary mb-4 mx-auto" />
            <div className="text-3xl font-bold text-foreground mb-2">8x</div>
            <div className="text-sm text-muted-foreground">注意力计算加速 (H100)</div>
          </div>
          <div className="group p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
            <Cpu className="w-8 h-8 text-primary mb-4 mx-auto" />
            <div className="text-3xl font-bold text-foreground mb-2">3-bit</div>
            <div className="text-sm text-muted-foreground">零精度损失压缩</div>
          </div>
        </div>
      </div>
    </section>
  )
}
