import { Card, CardContent } from "@/components/ui/card"

export function Results() {
  return (
    <section id="results" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">实验结果</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            数据说话
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            在 Gemma / Mistral / Llama-3.1-8B 等模型上的全面基准测试
          </p>
        </div>

        {/* KV Cache Benchmarks */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">KV Cache 压缩基准</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">50.06</div>
                <div className="text-sm text-muted-foreground">LongBench 分数</div>
                <div className="text-xs text-muted-foreground mt-1">3.5-bit = Full Cache</div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">100</div>
                <div className="text-sm text-muted-foreground">Needle In A Haystack</div>
                <div className="text-xs text-muted-foreground mt-1">4K-104K 完美</div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">6x+</div>
                <div className="text-sm text-muted-foreground">内存压缩</div>
                <div className="text-xs text-muted-foreground mt-1">显著降低成本</div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">8x</div>
                <div className="text-sm text-muted-foreground">注意力速度</div>
                <div className="text-xs text-muted-foreground mt-1">H100 4-bit 模式</div>
              </CardContent>
            </Card>
          </div>

          {/* Benchmark Table */}
          <Card className="bg-card border-border overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-secondary/50">
                    <tr>
                      <th className="text-left p-4 font-semibold text-foreground">基准测试</th>
                      <th className="text-center p-4 font-semibold text-foreground">TurboQuant 3.5-bit</th>
                      <th className="text-center p-4 font-semibold text-foreground">TurboQuant 2.5-bit</th>
                      <th className="text-center p-4 font-semibold text-muted-foreground">Full Cache</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="p-4 text-foreground">LongBench</td>
                      <td className="p-4 text-center text-primary font-semibold">50.06</td>
                      <td className="p-4 text-center text-foreground">49.44</td>
                      <td className="p-4 text-center text-muted-foreground">50.06</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-foreground">Needle In A Haystack</td>
                      <td className="p-4 text-center text-primary font-semibold">100</td>
                      <td className="p-4 text-center text-foreground">99.8</td>
                      <td className="p-4 text-center text-muted-foreground">100</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-foreground">ZeroSCROLLS</td>
                      <td className="p-4 text-center text-primary font-semibold">最优</td>
                      <td className="p-4 text-center text-foreground">接近最优</td>
                      <td className="p-4 text-center text-muted-foreground">基线</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-foreground">RULER</td>
                      <td className="p-4 text-center text-primary font-semibold">最优</td>
                      <td className="p-4 text-center text-foreground">接近最优</td>
                      <td className="p-4 text-center text-muted-foreground">基线</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-foreground">L-Eval</td>
                      <td className="p-4 text-center text-primary font-semibold">最优</td>
                      <td className="p-4 text-center text-foreground">接近最优</td>
                      <td className="p-4 text-center text-muted-foreground">基线</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Vector Search */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">向量搜索基准 (GloVe d=200)</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4 text-foreground">1@k Recall 对比</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-foreground">TurboQuant</span>
                      <span className="text-primary">最优</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: "95%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">PQ</span>
                      <span className="text-muted-foreground">较低</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-muted-foreground rounded-full" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">RabbiQ</span>
                      <span className="text-muted-foreground">中等</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-muted-foreground rounded-full" style={{ width: "82%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4 text-foreground">索引时间对比</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-foreground">TurboQuant</span>
                      <span className="text-primary">≈ 0</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: "2%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">PQ (需 codebook 训练)</span>
                      <span className="text-muted-foreground">长</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-muted-foreground rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">RabbiQ</span>
                      <span className="text-muted-foreground">中等</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-muted-foreground rounded-full" style={{ width: "60%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Comparison with Others */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-foreground">与竞品对比</h3>
          <Card className="bg-card border-border overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-secondary/50">
                    <tr>
                      <th className="text-left p-4 font-semibold text-foreground">方法</th>
                      <th className="text-center p-4 font-semibold text-foreground">需要训练</th>
                      <th className="text-center p-4 font-semibold text-foreground">无偏差</th>
                      <th className="text-center p-4 font-semibold text-foreground">压缩比</th>
                      <th className="text-center p-4 font-semibold text-foreground">速度提升</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr className="bg-primary/5">
                      <td className="p-4 font-semibold text-primary">TurboQuant</td>
                      <td className="p-4 text-center text-primary">✗</td>
                      <td className="p-4 text-center text-primary">✓</td>
                      <td className="p-4 text-center text-primary font-semibold">6x+</td>
                      <td className="p-4 text-center text-primary font-semibold">8x</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-foreground">KIVI</td>
                      <td className="p-4 text-center text-muted-foreground">需校准</td>
                      <td className="p-4 text-center text-destructive">✗</td>
                      <td className="p-4 text-center text-muted-foreground">4x</td>
                      <td className="p-4 text-center text-muted-foreground">4x</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-foreground">SnapKV</td>
                      <td className="p-4 text-center text-muted-foreground">需微调</td>
                      <td className="p-4 text-center text-destructive">✗</td>
                      <td className="p-4 text-center text-muted-foreground">2-4x</td>
                      <td className="p-4 text-center text-muted-foreground">2-4x</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-foreground">DuQuant</td>
                      <td className="p-4 text-center text-muted-foreground">需校准</td>
                      <td className="p-4 text-center text-muted-foreground">部分</td>
                      <td className="p-4 text-center text-muted-foreground">4x</td>
                      <td className="p-4 text-center text-muted-foreground">4x</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
