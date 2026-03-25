import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function CorePrinciple() {
  return (
    <section id="core" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">核心原理</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-balance">
            TurboQuant 两阶段算法详解
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            TurboQuant = <span className="text-primary font-semibold">PolarQuant（主压缩）</span> + <span className="text-primary font-semibold">QJL（残差校正）</span>
          </p>
        </div>

        <Tabs defaultValue="polarquant" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="polarquant">PolarQuant</TabsTrigger>
            <TabsTrigger value="qjl">QJL</TabsTrigger>
            <TabsTrigger value="algorithm">完整算法</TabsTrigger>
          </TabsList>

          {/* PolarQuant Tab */}
          <TabsContent value="polarquant">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">PolarQuant：极坐标变换</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  <strong className="text-foreground">关键洞见</strong>：传统标量量化需对每块数据计算归一化常数（内存 overhead）。
                  PolarQuant 先<span className="text-primary">随机旋转</span>向量，使坐标服从集中 Beta 分布。
                </p>
                
                <Card className="bg-secondary/50 border-border mb-6">
                  <CardContent className="p-6">
                    <h4 className="text-sm font-semibold text-primary mb-3">坐标分布公式</h4>
                    <div className="font-mono text-sm p-3 bg-background rounded-lg overflow-x-auto text-foreground">
                      <pre>{`f_X(x) = Γ(d/2) / (√π · Γ((d-1)/2)) 
         × (1 - x²)^((d-3)/2)
         
其中 x ∈ [-1, 1]`}</pre>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold shrink-0">1</div>
                    <span className="text-muted-foreground">将 d 维向量两两分组 → 半径 + 角度</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold shrink-0">2</div>
                    <span className="text-muted-foreground">对半径递归极坐标，直到剩 1 个最终半径 + 多角度</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold shrink-0">3</div>
                    <span className="text-muted-foreground">只量化角度（分布高度集中，无需归一化）</span>
                  </div>
                </div>
              </div>

              <Card className="bg-primary/5 border-primary/30">
                <CardContent className="p-8">
                  <h4 className="text-lg font-semibold text-primary mb-4">核心优势</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                      <div>
                        <div className="font-medium text-foreground">消除所有 per-block 全精度常数</div>
                        <div className="text-sm text-muted-foreground">开销为 0</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                      <div>
                        <div className="font-medium text-foreground">压缩比 {">"}4.2x 时仍近无损</div>
                        <div className="text-sm text-muted-foreground">远超传统方法</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                      <div>
                        <div className="font-medium text-foreground">高维下坐标近似独立高斯</div>
                        <div className="text-sm text-muted-foreground">可直接应用最优标量量化器 (Lloyd-Max)</div>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* QJL Tab */}
          <TabsContent value="qjl">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">QJL：1-bit 无偏内积估计器</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  <strong className="text-foreground">Johnson-Lindenstrauss 变换</strong>随机投影降维，
                  QJL 量化投影为<span className="text-primary">符号位</span>（+1/-1）。
                </p>
                
                <Card className="bg-secondary/50 border-border mb-6">
                  <CardContent className="p-6">
                    <h4 className="text-sm font-semibold text-primary mb-3">量化公式</h4>
                    <div className="font-mono text-sm p-3 bg-background rounded-lg space-y-2 text-foreground">
                      <div>{"Q_qjl(r) = sign(S · r)"}</div>
                      <div className="text-muted-foreground text-xs">其中 S_ij ~ N(0,1)</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-secondary/50 border-border">
                  <CardContent className="p-6">
                    <h4 className="text-sm font-semibold text-primary mb-3">反量化公式</h4>
                    <div className="font-mono text-sm p-3 bg-background rounded-lg text-foreground">
                      {"r̂ = √(π/2d) · S^T · Q_qjl(r)"}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="bg-primary/5 border-primary/30">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-primary mb-4">无偏性证明</h4>
                    <div className="font-mono text-sm p-3 bg-background rounded-lg mb-4 text-foreground">
                      {"E[⟨y, r̂⟩] = ⟨y, r⟩"}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      方差界: {"Var ≤ (π/2d) · ||y||² · ||r||²"}
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-4 text-foreground">为什么重要？</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">→</span>
                        仅需 1-bit 存储残差信息
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">→</span>
                        内积估计无偏，保证精度
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">→</span>
                        与 PolarQuant 完美互补
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Algorithm Tab */}
          <TabsContent value="algorithm">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* MSE Algorithm */}
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2 text-foreground">TurboQuant_mse</h4>
                  <p className="text-sm text-muted-foreground mb-4">MSE 优化，b bits</p>
                  <div className="bg-secondary/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <pre className="text-foreground">{`Algorithm: TurboQuant_mse
Input: 维度 d, 比特宽度 b

1. 预计算质心 c_k (Lloyd-Max)
2. for 每个向量 x:
   2.1 y ← Π · x  // 随机旋转
   2.2 for j = 1 to d:
       idx_j ← argmin_k |y_j - c_k|
   2.3 输出索引 idx`}</pre>
                  </div>
                </CardContent>
              </Card>

              {/* Prod Algorithm */}
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2 text-foreground">TurboQuant_prod</h4>
                  <p className="text-sm text-muted-foreground mb-4">内积优化，b bits</p>
                  <div className="bg-secondary/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <pre className="text-foreground">{`Algorithm: TurboQuant_prod
Input: 维度 d, 比特宽度 b

1. 实例化 TurboQuant_mse (b-1 bits)
2. 生成随机投影矩阵 S
3. for 每个向量 x:
   3.1 x̃_mse ← Q_mse(x)
   3.2 r ← x - x̃_mse  // 残差
   3.3 qjl ← sign(S · r)
   3.4 输出 (idx, qjl, ||r||₂)`}</pre>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Theoretical Guarantees */}
            <Card className="mt-8 bg-primary/5 border-primary/30">
              <CardContent className="p-8">
                <h4 className="text-lg font-semibold text-primary mb-6">理论保证 (Theorem)</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-background rounded-lg">
                    <div className="text-sm text-muted-foreground mb-2">MSE 失真上界</div>
                    <div className="font-mono text-foreground">{"D_MSE ≤ (√3 · π/2) · 1/4^b"}</div>
                    <div className="text-xs text-muted-foreground mt-2">仅差常数 2.7 倍最优下界</div>
                  </div>
                  <div className="p-4 bg-background rounded-lg">
                    <div className="text-sm text-muted-foreground mb-2">内积失真上界</div>
                    <div className="font-mono text-foreground">{"D_prod ≤ (π²√3 · ||y||²/d) · 1/4^b"}</div>
                    <div className="text-xs text-muted-foreground mt-2">接近信息论极限</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
