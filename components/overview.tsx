import { Card, CardContent } from "@/components/ui/card"
import { Check, X } from "lucide-react"

export function Overview() {
  return (
    <section id="overview" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">核心创新</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-balance">
            为什么 TurboQuant 是 AI 领域的"核弹级"突破？
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            TurboQuant 不是简单的"压缩工具"，而是<strong className="text-foreground">理论上接近信息论最优界</strong>的在线量化框架。
            首次实现数据无关、实时适用、加速器友好的向量量化。
          </p>
        </div>

        {/* Comparison Table */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Traditional Methods */}
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                  <X className="w-5 h-5 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">传统方法 (如 PQ)</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">需要数据集特定训练</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">存储大量全精度归一化常数 (overhead 1-2 bit/坐标)</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">索引时间长</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">精度损失明显</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* TurboQuant */}
          <Card className="bg-card border-primary/50">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">TurboQuant</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">随机旋转 + 极坐标变换 (PolarQuant)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">1-bit 残差校正 (QJL) 彻底消除归一化开销</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">索引时间接近零</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">精度与 32-bit 基线完全一致</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Tech Stack */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-card border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-6">
              <div className="text-primary text-sm font-mono mb-2">AISTATS 2026</div>
              <h4 className="text-lg font-semibold mb-2 text-foreground">PolarQuant</h4>
              <p className="text-sm text-muted-foreground">
                极坐标变换核心，消除归一化开销
              </p>
              <a
                href="https://arxiv.org/pdf/2502.02617"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-sm mt-3 inline-block hover:underline"
              >
                arXiv: 2502.02617 →
              </a>
            </CardContent>
          </Card>
          <Card className="bg-card border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-6">
              <div className="text-primary text-sm font-mono mb-2">AAAI 2025</div>
              <h4 className="text-lg font-semibold mb-2 text-foreground">QJL</h4>
              <p className="text-sm text-muted-foreground">
                1-bit 无偏内积估计器 (Quantized Johnson-Lindenstrauss)
              </p>
              <a
                href="https://dl.acm.org/doi/10.1609/aaai.v39i24.34773"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-sm mt-3 inline-block hover:underline"
              >
                ACM DL →
              </a>
            </CardContent>
          </Card>
          <Card className="bg-card border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-6">
              <div className="text-primary text-sm font-mono mb-2">ICLR 2026</div>
              <h4 className="text-lg font-semibold mb-2 text-foreground">TurboQuant</h4>
              <p className="text-sm text-muted-foreground">
                两阶段整合，实现近最优失真率
              </p>
              <a
                href="https://arxiv.org/pdf/2504.19874"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-sm mt-3 inline-block hover:underline"
              >
                arXiv: 2504.19874 →
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
