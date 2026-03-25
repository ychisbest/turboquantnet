import { Card, CardContent } from "@/components/ui/card"
import { FileText, BookOpen, MessageSquare, ExternalLink } from "lucide-react"

const resources = [
  {
    title: "官方博客",
    description: "Google Research 官方发布文章",
    url: "https://research.google/blog/turboquant-redefining-ai-efficiency-with-extreme-compression/",
    icon: BookOpen,
  },
  {
    title: "TurboQuant 论文",
    description: "ICLR 2026 主论文 PDF",
    url: "https://arxiv.org/pdf/2504.19874",
    icon: FileText,
  },
  {
    title: "PolarQuant 论文",
    description: "AISTATS 2026 极坐标变换",
    url: "https://arxiv.org/pdf/2502.02617",
    icon: FileText,
  },
  {
    title: "QJL 论文",
    description: "AAAI 2025 量化 JL 变换",
    url: "https://dl.acm.org/doi/10.1609/aaai.v39i24.34773",
    icon: FileText,
  },
]

const communities = [
  {
    name: "Reddit r/LocalLLaMA",
    description: "本地 LLM 社区讨论",
  },
  {
    name: "X (Twitter) #TurboQuant",
    description: "最新动态和讨论",
  },
  {
    name: "llama.cpp #20969",
    description: "集成讨论帖",
  },
]

export function Resources() {
  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">资源</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            相关资源与引用
          </h2>
        </div>

        {/* Papers & Docs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="bg-card border-border h-full hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <resource.icon className="w-8 h-8 text-primary mb-4" />
                  <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors text-foreground">
                    {resource.title}
                    <ExternalLink className="w-4 h-4 inline ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h4>
                  <p className="text-sm text-muted-foreground">{resource.description}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        {/* Communities */}
        <Card className="bg-card border-border">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">社区讨论</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {communities.map((community, index) => (
                <div key={index} className="p-4 bg-secondary/50 rounded-lg">
                  <h4 className="font-medium mb-1 text-foreground">{community.name}</h4>
                  <p className="text-sm text-muted-foreground">{community.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Warning Note */}
        <div className="mt-8 p-4 rounded-lg bg-secondary/30 border border-border">
          <p className="text-sm text-muted-foreground text-center">
            <strong className="text-foreground">注意</strong>：GitHub 上存在同名项目 cg94301/turboquant，但那是交易策略项目，与本算法无关
          </p>
        </div>
      </div>
    </section>
  )
}
