import { Card, CardContent } from "@/components/ui/card"
import { Rocket, Database, Smartphone, Image, Atom, Users } from "lucide-react"

export function Future() {
  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">未来展望</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            TurboQuant 将如何改变 AI 生态？
          </h2>
        </div>

        {/* Impact Areas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <Card className="bg-card border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-6">
              <Rocket className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-semibold mb-2 text-foreground">LLM 推理革命</h4>
              <p className="text-sm text-muted-foreground">
                百万 token 上下文成本降低 80%，Gemini 下一代或原生集成
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-6">
              <Database className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-semibold mb-2 text-foreground">向量数据库</h4>
              <p className="text-sm text-muted-foreground">
                实时索引 + 亚毫秒查询，RAG 系统性能飞跃
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-6">
              <Smartphone className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-semibold mb-2 text-foreground">边缘 AI</h4>
              <p className="text-sm text-muted-foreground">
                手机跑 70B 模型长上下文成为现实
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-6">
              <Image className="w-8 h-8 text-primary" />
              <h4 className="font-semibold mb-2 mt-4 text-foreground">多模态扩展</h4>
              <p className="text-sm text-muted-foreground">
                图像/视频 embedding 压缩
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-6">
              <Atom className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-semibold mb-2 text-foreground">理论延伸</h4>
              <p className="text-sm text-muted-foreground">
                结合 DuQuant 等 outlier 处理，未来 2-bit 时代
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-6">
              <Users className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-semibold mb-2 text-foreground">社区影响</h4>
              <p className="text-sm text-muted-foreground">
                ICLR/AISTATS 后，预计 50+ 论文引用，vLLM、HuggingFace 快速跟进
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <Card className="bg-card border-border">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold mb-8 text-center text-foreground">时间线预测</h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border hidden md:block"></div>
              
              <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
                {/* 2026 Q2 */}
                <div className="relative">
                  <div className="md:text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary font-bold mb-4">
                      Q2
                    </div>
                    <h4 className="font-semibold mb-2 text-foreground">2026 Q2</h4>
                    <p className="text-sm text-muted-foreground">
                      开源代码 + 框架集成
                    </p>
                  </div>
                </div>

                {/* 2026 Q4 */}
                <div className="relative">
                  <div className="md:text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary font-bold mb-4">
                      Q4
                    </div>
                    <h4 className="font-semibold mb-2 text-foreground">2026 Q4</h4>
                    <p className="text-sm text-muted-foreground">
                      商用产品 (Google Cloud Vertex AI 优先)
                    </p>
                  </div>
                </div>

                {/* 2027 */}
                <div className="relative">
                  <div className="md:text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold mb-4">
                      27
                    </div>
                    <h4 className="font-semibold mb-2 text-foreground">2027</h4>
                    <p className="text-sm text-muted-foreground">
                      成为 LLM 量化标准
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Risk Note */}
        <div className="mt-8 p-4 rounded-lg bg-secondary/30 border border-border">
          <p className="text-sm text-muted-foreground text-center">
            <strong className="text-foreground">风险提示</strong>：若随机种子固定不当，可能有极低概率偏差（论文已证明高维下忽略不计）
          </p>
        </div>
      </div>
    </section>
  )
}
