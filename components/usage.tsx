import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Server, Smartphone, GitBranch, AlertTriangle } from "lucide-react"

export function Usage() {
  return (
    <section id="usage" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">使用指南</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            从零到生产落地
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            如何在你的项目中集成 TurboQuant
          </p>
        </div>

        {/* Current Status */}
        <Card className="bg-primary/5 border-primary/30 mb-12">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-foreground">
              <GitBranch className="w-5 h-5 text-primary" />
              当前状态
            </h3>
            <p className="text-muted-foreground mb-4">
              论文提供理论与伪代码，无官方开源实现。但社区已启动集成工作：
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span className="text-muted-foreground"><strong className="text-foreground">llama.cpp Discussion #20969</strong>：开发者讨论集成</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span className="text-muted-foreground"><strong className="text-foreground">MLX 框架</strong>：已有人实验 5x 压缩 + 99.5% 精度</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span className="text-muted-foreground">预计 <strong className="text-foreground">2026 Q2</strong> 官方/社区代码上线</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Implementation Steps */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">伪代码实现步骤</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">1</div>
                  <h4 className="font-semibold text-foreground">预计算 Lloyd-Max 质心</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">离线一次性计算，后续复用</p>
                <div className="bg-secondary/50 rounded-lg p-3 font-mono text-xs overflow-x-auto">
                  <pre className="text-foreground">{`# Python-like pseudocode
centroids = lloyd_max_quantizer(
    distribution="beta",
    bits=b
)`}</pre>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">2</div>
                  <h4 className="font-semibold text-foreground">生成随机旋转矩阵</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">QR 分解生成正交矩阵</p>
                <div className="bg-secondary/50 rounded-lg p-3 font-mono text-xs overflow-x-auto">
                  <pre className="text-foreground">{`# 随机旋转矩阵
G = np.random.randn(d, d)
Pi, _ = np.linalg.qr(G)`}</pre>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">3</div>
                  <h4 className="font-semibold text-foreground">Quant / DeQuant 函数</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">量化与反量化核心</p>
                <div className="bg-secondary/50 rounded-lg p-3 font-mono text-xs overflow-x-auto">
                  <pre className="text-foreground">{`def quant(x, Pi, centroids):
    y = Pi @ x  # 旋转
    idx = find_nearest(y, centroids)
    return idx

def dequant(idx, Pi, centroids):
    y = centroids[idx]
    x = Pi.T @ y  # 反旋转
    return x`}</pre>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">4</div>
                  <h4 className="font-semibold text-foreground">集成到 Attention</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">替换 KV 存储格式</p>
                <div className="bg-secondary/50 rounded-lg p-3 font-mono text-xs overflow-x-auto">
                  <pre className="text-foreground">{`# Transformer Attention
k_quant = turboquant_quant(k)
v_quant = turboquant_quant(v)
# 注意力时用 QJL 估计内积`}</pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Deployment Suggestions */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">生产部署建议</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <Server className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-semibold mb-2 text-foreground">硬件选择</h4>
                <p className="text-sm text-muted-foreground">
                  H100 / A100 最优（向量指令友好），4-bit 模式可获 8x 加速
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-4">
                  <span className="font-bold text-sm">FP</span>
                </div>
                <h4 className="font-semibold mb-2 text-foreground">混合精度</h4>
                <p className="text-sm text-muted-foreground">
                  KV 用 TurboQuant，Weights 用 INT4，最大化压缩效果
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <Smartphone className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-semibold mb-2 text-foreground">边缘设备</h4>
                <p className="text-sm text-muted-foreground">
                  手机端 3-bit KV 可支持 32K+ 上下文，CPU 纯软件实现可行
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Challenges */}
        <Card className="bg-secondary/30 border-border">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-foreground">
              <AlertTriangle className="w-5 h-5 text-primary" />
              潜在挑战与解决方案
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2 text-foreground">随机旋转开销</h4>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">解决方案</strong>：预生成矩阵复用，一次生成多次使用
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-foreground">残差 norm 存储</h4>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">解决方案</strong>：1 个 FP16 标量，影响微乎其微
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Open Source Roadmap */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">开源路线推荐</p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border">
            <code className="text-sm font-mono text-primary">fork llama.cpp → 添加 turboquant_quant kernel</code>
            <a
              href="https://github.com/ggerganov/llama.cpp/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
