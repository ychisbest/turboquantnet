import type { Metadata } from "next"
import Link from "next/link"

import { FaqJsonLd } from "@/components/faq-json-ld"
import { SitePageShell } from "@/components/site-page-shell"

const canonical = "https://turboquant.net/paper"

export const metadata: Metadata = {
  title: "TurboQuant Paper Explained – KV Cache, PolarQuant, QJL (ICLR 2026)",
  description:
    "Plain-language walkthrough of the TurboQuant paper (arXiv:2504.19874): KV cache, PolarQuant, QJL, and cited benchmark figures. Unofficial.",
  alternates: { canonical },
  openGraph: {
    title: "TurboQuant Paper Explained – KV Cache, PolarQuant, QJL (ICLR 2026)",
    description:
      "Independent walkthrough of arXiv:2504.19874 and the Google Research blog figures—unofficial.",
    url: canonical,
  },
}

const faqItems = [
  {
    question: "What is the TurboQuant paper?",
    answer:
      "TurboQuant: Online Vector Quantization with Near-optimal Distortion Rate (arXiv:2504.19874), to be presented at ICLR 2026. It proposes a data-oblivious online vector quantizer aimed at KV-cache compression and vector search.",
  },
  {
    question: "What is TurboQuant KV cache compression?",
    answer:
      "It quantizes key/value embeddings in decoder transformers so long-context inference uses less memory. The Google Research blog reports at least 6× KV-memory reduction in their tests, and the paper reports quality neutrality at 3.5 bits per channel on long-context benchmarks.",
  },
  {
    question: "How do PolarQuant and QJL relate to TurboQuant?",
    answer:
      "TurboQuant is described as a two-stage design: a high-quality compression stage (PolarQuant / MSE path with random rotation + per-coordinate quantization) plus a 1-bit QJL residual correction for unbiased inner-product estimation.",
  },
  {
    question: "Where can I read the primary sources?",
    answer:
      "Paper PDF: https://arxiv.org/pdf/2504.19874 — Google Research blog: https://research.google/blog/turboquant-redefining-ai-efficiency-with-extreme-compression/ — This site is unofficial and not affiliated with Google.",
  },
]

export default function PaperPage() {
  return (
    <>
      <FaqJsonLd items={faqItems} />
      <SitePageShell
        eyebrow="Paper & method"
        title="TurboQuant paper explained"
        description="An independent, source-linked walkthrough of what the TurboQuant paper claims about KV-cache compression, PolarQuant, QJL, and the published benchmarks—not an official Google page."
      >
        <div className="space-y-8 text-base leading-8 text-muted-foreground">
          <aside className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6 text-sm leading-7 text-foreground/90">
            <strong className="text-foreground">Unofficial notice.</strong> TurboQuant.net is an
            independent publication. It is <em>not</em> affiliated with, endorsed by, or operated by
            Google or Google Research. Prefer the{" "}
            <a
              className="text-primary underline-offset-4 hover:underline"
              href="https://arxiv.org/pdf/2504.19874"
              target="_blank"
              rel="noopener noreferrer"
            >
              arXiv PDF
            </a>{" "}
            and the{" "}
            <a
              className="text-primary underline-offset-4 hover:underline"
              href="https://research.google/blog/turboquant-redefining-ai-efficiency-with-extreme-compression/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Research blog post
            </a>{" "}
            as primary sources.
          </aside>

          <div className="rounded-2xl border border-border bg-card/30 p-8">
            <h2 className="text-2xl font-semibold text-foreground">What the paper is</h2>
            <p className="mt-4">
              <strong className="text-foreground">TurboQuant</strong> is Google Research&apos;s{" "}
              <em>online</em>, <em>data-oblivious</em> vector quantization method for high-dimensional
              Euclidean vectors. The public paper is titled{" "}
              <em>TurboQuant: Online Vector Quantization with Near-optimal Distortion Rate</em> (
              <a
                className="text-primary underline-offset-4 hover:underline"
                href="https://arxiv.org/abs/2504.19874"
                target="_blank"
                rel="noopener noreferrer"
              >
                arXiv:2504.19874
              </a>
              ), listed for <strong className="text-foreground">ICLR 2026</strong>. Authors on the
              arXiv page include Amir Zandieh, Majid Daliri, Majid Hadian, and Vahab Mirrokni.
            </p>
            <p className="mt-4">
              The work targets two practical bottlenecks:{" "}
              <strong className="text-foreground">LLM KV-cache memory</strong> and{" "}
              <strong className="text-foreground">high-dimensional vector search</strong> (inner-product
              / ANN style workloads).
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card/30 p-8">
            <h2 className="text-2xl font-semibold text-foreground">How it works (plain language)</h2>
            <p className="mt-4">
              Per the Google Research blog and paper abstract, TurboQuant is usefully thought of as a{" "}
              <strong className="text-foreground">two-stage</strong> compressor:
            </p>
            <ol className="mt-4 list-decimal space-y-3 pl-5">
              <li>
                <strong className="text-foreground">Main compression (PolarQuant / MSE path).</strong>{" "}
                Randomly rotate vectors, then apply strong per-coordinate quantization. PolarQuant
                (companion work, AISTATS 2026; arXiv:2502.02617) is described as converting Cartesian
                coordinates into a polar “shorthand” so expensive per-block normalization overhead can
                be reduced.
              </li>
              <li>
                <strong className="text-foreground">Residual correction (QJL).</strong> A small residual
                budget (described as 1 bit in the blog) applies Quantized Johnson–Lindenstrauss (QJL)
                so inner-product / attention-score estimates stay unbiased.
              </li>
            </ol>
            <p className="mt-4">
              The paper argues the resulting distortion rates sit close to information-theoretic lower
              bounds (within a small constant factor, ≈2.7 in the abstract). That theory story is why
              searchers looking for <em>turboquant algorithm</em> / <em>quantization</em> often land on
              the paper itself—this page is only a map.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card/30 p-8">
            <h2 className="text-2xl font-semibold text-foreground">
              Cited results (from primary sources only)
            </h2>
            <p className="mt-4 text-sm">
              Figures below are quoted from the Google Research blog (2026-03-24) or the paper
              abstract / LongBench table. This site did not re-run the benchmarks.
            </p>
            <ul className="mt-4 space-y-3 list-disc pl-5">
              <li>
                <strong className="text-foreground">KV memory:</strong> blog — “reducing the key value
                memory size by a factor of at least <strong>6×</strong>” on needle-in-a-haystack style
                long-context tests.
              </li>
              <li>
                <strong className="text-foreground">Bit-width / quality (paper abstract):</strong>{" "}
                “absolute quality neutrality with <strong>3.5 bits per channel</strong> and marginal
                quality degradation with <strong>2.5 bits per channel</strong>” for KV-cache
                quantization.
              </li>
              <li>
                <strong className="text-foreground">Attention speed (blog):</strong> “4-bit TurboQuant
                achieves up to <strong>8×</strong> performance increase over 32-bit unquantized keys on
                H100 GPU accelerators” for computing attention logits.
              </li>
              <li>
                <strong className="text-foreground">LongBench (paper Table 1, Llama-3.1-8B-Instruct):</strong>{" "}
                Full Cache average <strong>50.06</strong>; TurboQuant at 3.5-bit average{" "}
                <strong>50.06</strong>; TurboQuant at 2.5-bit average <strong>49.44</strong>.
              </li>
              <li>
                <strong className="text-foreground">Training:</strong> blog — can quantize the KV cache
                “without requiring training or fine-tuning.”
              </li>
            </ul>
            <p className="mt-4 text-sm">
              For RAM / VRAM planning searches (<em>turboquant ram</em>, <em>turboquant llm</em>), treat
              these as paper/blog reference points—not a promise for your model, hardware, or fork.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card/30 p-8">
            <h2 className="text-2xl font-semibold text-foreground">Primary links</h2>
            <ul className="mt-4 space-y-2 list-disc pl-5">
              <li>
                Paper PDF —{" "}
                <a
                  className="text-primary underline-offset-4 hover:underline"
                  href="https://arxiv.org/pdf/2504.19874"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  arxiv.org/pdf/2504.19874
                </a>
              </li>
              <li>
                PolarQuant —{" "}
                <a
                  className="text-primary underline-offset-4 hover:underline"
                  href="https://arxiv.org/pdf/2502.02617"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  arXiv:2502.02617
                </a>
              </li>
              <li>
                Google Research blog —{" "}
                <a
                  className="text-primary underline-offset-4 hover:underline"
                  href="https://research.google/blog/turboquant-redefining-ai-efficiency-with-extreme-compression/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TurboQuant announcement
                </a>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card/30 p-8">
            <h2 className="text-2xl font-semibold text-foreground">Next: running it locally</h2>
            <p className="mt-4">
              Paper ≠ product binary. Community and engine integrations change quickly. See the{" "}
              <Link href="/guide" className="text-primary underline-offset-4 hover:underline">
                how-to / status guide
              </Link>{" "}
              for MLX, LM Studio, llama.cpp forks, vLLM, and GitHub pointers—or return to the{" "}
              <Link href="/" className="text-primary underline-offset-4 hover:underline">
                TurboQuant overview
              </Link>
              .
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card/30 p-8">
            <h2 className="text-2xl font-semibold text-foreground">FAQ</h2>
            <dl className="mt-6 space-y-6">
              {faqItems.map((item) => (
                <div key={item.question}>
                  <dt className="font-semibold text-foreground">{item.question}</dt>
                  <dd className="mt-2">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </SitePageShell>
    </>
  )
}
