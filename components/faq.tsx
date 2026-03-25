"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "TurboQuant 需要训练模型吗？",
    answer: "完全不需要。TurboQuant 是数据无关、在线运行的算法，部署即用，无需任何微调或校准步骤。"
  },
  {
    question: "与 KIVI / 4-bit 量化比如何？",
    answer: "KIVI 需要 per-channel 校准，而 TurboQuant 3.5-bit 精度更高、速度更快。在 LongBench 等基准上，TurboQuant 实现了与 Full Cache 完全一致的分数。"
  },
  {
    question: "支持哪些模型？",
    answer: "理论上任意 Transformer 架构都支持。目前已在 Gemma、Mistral、Llama-3.1-8B 等模型上验证。"
  },
  {
    question: "代码在哪里？",
    answer: "目前只有论文伪代码，社区正在讨论集成（llama.cpp #20969）。官方预计很快开源，建议关注 GitHub 搜索 \"turboquant kv cache\"。"
  },
  {
    question: "对向量搜索有何帮助？",
    answer: "TurboQuant 在向量数据库场景下召回率更高、索引零开销，适用于亿级向量库，可显著提升 RAG 系统性能。"
  },
  {
    question: "精度真的零损失？",
    answer: "在长上下文基准（LongBench、Needle In A Haystack）上，3.5-bit 模式实现绝对质量中性。2.5-bit 在边缘任务上有轻微下降。"
  },
  {
    question: "硬件要求是什么？",
    answer: "GPU 友好（H100 可获 8x 加速），但 CPU 和手机也可运行（纯软件实现）。3-bit KV Cache 可让手机支持 32K+ 上下文。"
  },
  {
    question: "与 PolarQuant 是什么关系？",
    answer: "TurboQuant 直接使用 PolarQuant 作为第一阶段（主压缩），然后用 QJL 作为第二阶段（残差校正），两者结合实现近最优失真率。"
  },
  {
    question: "未来会开源吗？",
    answer: "根据 Google Research 历史惯例和社区高涨呼声，预计会开源。时间线预测为 2026 Q2 前后。"
  },
  {
    question: "如何贡献或集成到我的项目？",
    answer: "参考论文伪代码 + llama.cpp discussion #20969。推荐路线：fork llama.cpp，添加 turboquant_quant kernel。"
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            常见问题
          </h2>
          <p className="text-muted-foreground">
            开发者和用户最关心的问题解答
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6 text-foreground">
                <span className="flex items-start gap-4">
                  <span className="text-primary font-mono text-sm mt-0.5">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{faq.question}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pl-10 text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
