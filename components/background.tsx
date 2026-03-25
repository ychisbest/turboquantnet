import { Card, CardContent } from "@/components/ui/card"

export function Background() {
  return (
    <section id="background" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">技术背景</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-balance">
            为什么需要 TurboQuant？
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            向量量化与 KV Cache 痛点解析
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Vector Quantization */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-foreground">
              <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">1</span>
              向量量化的经典问题
            </h3>
            
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                向量量化 (Vector Quantization, VQ) 源于 Shannon 源编码理论，目标是将高维欧几里得向量映射到低比特码本，同时最小化失真。
              </p>
              
              <Card className="bg-secondary/50 border-border">
                <CardContent className="p-6">
                  <h4 className="text-sm font-semibold text-primary mb-3">失真度量公式</h4>
                  <div className="space-y-3 font-mono text-sm">
                    <div className="p-3 bg-background rounded-lg text-foreground">
                      <span className="text-muted-foreground">MSE 失真:</span>
                      <div className="mt-1">{"D_MSE = E[||x - x̂||²]"}</div>
                    </div>
                    <div className="p-3 bg-background rounded-lg text-foreground">
                      <span className="text-muted-foreground">内积失真:</span>
                      <div className="mt-1">{"D_prod = E[|⟨y,x⟩ - ⟨y,x̂⟩|²]"}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-secondary/50 border-border">
                <CardContent className="p-6">
                  <h4 className="text-sm font-semibold text-primary mb-3">信息论下界</h4>
                  <div className="space-y-2 font-mono text-sm text-foreground">
                    <div>{"MSE 下界: D_MSE ≥ 1/4^b"}</div>
                    <div>{"内积下界: D_prod ≥ (||y||² / d) · 1/4^b"}</div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    传统方法（如 PQ）远未达到此界
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* KV Cache Problem */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-foreground">
              <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">2</span>
              LLM 中的 KV Cache 瓶颈
            </h3>
            
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Transformer Decoder 中，KV Cache 存储每个 token 的 Key/Value 向量（维度 d ≈ 4096-8192）。长上下文时代下，内存爆炸已成为行业痛点。
              </p>
              
              <Card className="bg-secondary/50 border-border">
                <CardContent className="p-6">
                  <h4 className="text-sm font-semibold text-primary mb-3">内存开销计算</h4>
                  <div className="font-mono text-sm p-3 bg-background rounded-lg text-foreground">
                    {"内存 ≈ 2 × L × d × 2 bytes (FP16)"}
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>128K 上下文 + 7B 模型</span>
                      <span className="text-destructive font-semibold">数十 GB</span>
                    </div>
                    <div className="flex justify-between">
                      <span>KV Cache 占总内存</span>
                      <span className="text-destructive font-semibold">80%+</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/10 border-primary/30">
                <CardContent className="p-6">
                  <h4 className="text-sm font-semibold text-primary mb-3">TurboQuant 解决方案</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ 无需训练、无需微调</li>
                    <li>✓ 3.5 bit/通道实现绝对质量中性</li>
                    <li>✓ LongBench 分数与 FP32 完全一致</li>
                    <li>✓ 边缘设备、手机、IoT 也能跑长上下文 AI</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Application */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-foreground">
            <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">3</span>
            向量搜索中的应用
          </h3>
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <p className="text-muted-foreground mb-4">
                向量数据库（如 FAISS）依赖近邻搜索（ANN）。TurboQuant 在 GloVe (d=200) 上表现：
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">召回率更高</div>
                  <div className="text-sm text-muted-foreground">优于 PQ / RabbiQ</div>
                </div>
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">索引时间 ≈ 0</div>
                  <div className="text-sm text-muted-foreground">适用于亿级向量库</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
