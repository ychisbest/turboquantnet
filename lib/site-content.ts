export const SUPPORTED_LOCALES = ["en", "zh", "ko", "ja", "fr", "de", "pt"] as const

export type Locale = (typeof SUPPORTED_LOCALES)[number]

export const DEFAULT_LOCALE: Locale = "en"

export type SiteContent = {
  meta: {
    title: string
    description: string
  }
  languageNames: Record<Locale, string>
  nav: {
    items: Array<{ label: string; href: string }>
    paperLabel: string
    languageLabel: string
  }
  hero: {
    badge: string
    title: string
    highlight: string
    subtitle: string
    primaryCta: string
    secondaryCta: string
    metrics: Array<{ value: string; label: string }>
  }
  overview: {
    eyebrow: string
    title: string
    description: string
    traditionalTitle: string
    turboTitle: string
    traditionalItems: string[]
    turboItems: string[]
    papers: Array<{ venue: string; title: string; description: string; url: string; linkLabel: string }>
  }
  recent: {
    eyebrow: string
    title: string
    description: string
    latestTitle: string
    latest: Array<{ date: string; title: string; description: string; url?: string; linkLabel?: string }>
    impactTitle: string
    impacts: Array<{ label: string; value: string; description: string }>
  }
  expert: {
    eyebrow: string
    title: string
    description: string
    comments: Array<{
      author: string
      role: string
      summary: string
      paragraphs: string[]
    }>
  }
  background: {
    eyebrow: string
    title: string
    description: string
    vectorTitle: string
    vectorDescription: string
    distortionTitle: string
    distortionItems: string[]
    distortionFootnote: string
    kvTitle: string
    kvDescription: string
    memoryTitle: string
    memoryFormula: string
    memoryStats: Array<{ label: string; value: string }>
    solutionTitle: string
    solutionItems: string[]
    applicationTitle: string
    applicationDescription: string
    applicationCards: Array<{ title: string; description: string }>
  }
  core: {
    eyebrow: string
    title: string
    description: string
    tabs: {
      polar: string
      qjl: string
      algorithm: string
    }
    polar: {
      title: string
      description: string
      formulaTitle: string
      formula: string
      steps: string[]
      advantagesTitle: string
      advantages: Array<{ title: string; description: string }>
    }
    qjl: {
      title: string
      description: string
      quantTitle: string
      quantFormula: string
      quantNote: string
      dequantTitle: string
      dequantFormula: string
      proofTitle: string
      proofFormula: string
      proofNote: string
      reasonsTitle: string
      reasons: string[]
    }
    algorithm: {
      mseTitle: string
      mseSubtitle: string
      mseCode: string
      prodTitle: string
      prodSubtitle: string
      prodCode: string
      theoremTitle: string
      theoremCards: Array<{ label: string; value: string; note: string }>
    }
  }
  results: {
    eyebrow: string
    title: string
    description: string
    kvTitle: string
    kvCards: Array<{ value: string; label: string; note: string }>
    benchmarkHeaders: string[]
    benchmarkRows: string[][]
    vectorTitle: string
    recallTitle: string
    recallBars: Array<{ label: string; value: string; width: string; primary?: boolean }>
    indexingTitle: string
    indexingBars: Array<{ label: string; value: string; width: string; primary?: boolean }>
    compareTitle: string
    compareHeaders: string[]
    compareRows: Array<{ highlight?: boolean; cells: string[] }>
    memoryProjection: {
      title: string
      description: string
      note: string
      labels: {
        beforeMemory: string
        afterMemory: string
        beforeCards: string
        afterCards: string
      }
      headers: string[]
      rows: Array<{
        model: string
        weight: string
        pureModel: number
        totalBefore: number
        totalAfter: number
        cardsBefore: number
        cardsAfter: number
        change: string
      }>
    }
  }
  usage: {
    eyebrow: string
    title: string
    description: string
    statusTitle: string
    statusDescription: string
    statusItems: string[]
    stepsTitle: string
    steps: Array<{ title: string; description: string; code: string }>
    deploymentTitle: string
    deploymentCards: Array<{ title: string; description: string; icon: "server" | "fp" | "phone" }>
    challengesTitle: string
    challenges: Array<{ title: string; description: string }>
    roadmapLabel: string
    roadmapCode: string
    roadmapUrl: string
  }
  future: {
    eyebrow: string
    title: string
    impacts: Array<{ title: string; description: string; icon: "rocket" | "database" | "phone" | "image" | "atom" | "users" }>
    timelineTitle: string
    timeline: Array<{ badge: string; title: string; description: string; primary?: boolean }>
    risk: string
  }
  faq: {
    eyebrow: string
    title: string
    description: string
    items: Array<{ question: string; answer: string }>
  }
  resources: {
    eyebrow: string
    title: string
    items: Array<{ title: string; description: string; url: string; type: "blog" | "paper" }>
    communityTitle: string
    communities: Array<{ name: string; description: string; url: string }>
  }
  footer: {
    paper: string
    blog: string
    faq: string
    copyright: string
  }
}

const languageNames: Record<Locale, string> = {
  en: "English",
  zh: "中文",
  ko: "한국어",
  ja: "日本語",
  fr: "Français",
  de: "Deutsch",
  pt: "Português",
}

const sharedResources = [
  {
    title: "Official Blog",
    description: "Google Research announcement",
    url: "https://research.google/blog/turboquant-redefining-ai-efficiency-with-extreme-compression/",
    type: "blog" as const,
  },
  {
    title: "TurboQuant Paper",
    description: "ICLR 2026 main paper PDF",
    url: "https://arxiv.org/pdf/2504.19874",
    type: "paper" as const,
  },
  {
    title: "PolarQuant Paper",
    description: "AISTATS 2026 polar transform paper",
    url: "https://arxiv.org/pdf/2502.02617",
    type: "paper" as const,
  },
  {
    title: "QJL Paper",
    description: "AAAI 2025 quantized JL transform",
    url: "https://dl.acm.org/doi/10.1609/aaai.v39i24.34773",
    type: "paper" as const,
  },
]

const sharedMemoryProjectionRowsEn = [
  { model: "ChatGLM-4 (9B)", weight: "BF16", pureModel: 18, totalBefore: 19.8, totalAfter: 18.3, cardsBefore: 1, cardsAfter: 1, change: "Extra headroom on a single 4090." },
  { model: "ChatGLM-4 (9B)", weight: "INT8", pureModel: 9, totalBefore: 10.8, totalAfter: 9.3, cardsBefore: 1, cardsAfter: 1, change: "Still single-card, with more buffer." },
  { model: "ChatGLM-4 (9B)", weight: "INT4", pureModel: 5, totalBefore: 6.8, totalAfter: 5.3, cardsBefore: 1, cardsAfter: 1, change: "Very comfortable single-card fit." },
  { model: "Qwen-2.5 (32B)", weight: "BF16", pureModel: 64, totalBefore: 69.0, totalAfter: 64.8, cardsBefore: 3, cardsAfter: 3, change: "Savings help, but not enough to drop a GPU." },
  { model: "Qwen-2.5 (32B)", weight: "INT8", pureModel: 32, totalBefore: 37.0, totalAfter: 32.8, cardsBefore: 2, cardsAfter: 2, change: "More margin on a 2x4090 node." },
  { model: "Qwen-2.5 (32B)", weight: "INT4", pureModel: 18, totalBefore: 23.0, totalAfter: 18.8, cardsBefore: 2, cardsAfter: 1, change: "Pulled back under the single-4090 limit." },
  { model: "Llama-3.1 (70B)", weight: "BF16", pureModel: 140, totalBefore: 150.0, totalAfter: 141.7, cardsBefore: 7, cardsAfter: 6, change: "Drops one RTX 4090 at 100K context." },
  { model: "Llama-3.1 (70B)", weight: "INT8", pureModel: 70, totalBefore: 80.0, totalAfter: 71.7, cardsBefore: 4, cardsAfter: 3, change: "Material hardware cost reduction." },
  { model: "Llama-3.1 (70B)", weight: "INT4", pureModel: 38, totalBefore: 48.0, totalAfter: 39.7, cardsBefore: 3, cardsAfter: 2, change: "Brings 70B into a practical dual-4090 envelope." },
  { model: "Mixtral 8x22B (141B MoE)", weight: "BF16", pureModel: 282, totalBefore: 288.0, totalAfter: 283.0, cardsBefore: 13, cardsAfter: 13, change: "MoE keeps KV share relatively small." },
  { model: "Mixtral 8x22B (141B MoE)", weight: "INT8", pureModel: 141, totalBefore: 147.0, totalAfter: 142.0, cardsBefore: 7, cardsAfter: 7, change: "Lower pressure, but same card class." },
  { model: "Mixtral 8x22B (141B MoE)", weight: "INT4", pureModel: 75, totalBefore: 81.0, totalAfter: 76.0, cardsBefore: 4, cardsAfter: 4, change: "Useful slack without a node count change." },
  { model: "DeepSeek-R1 (671B MoE)", weight: "FP8", pureModel: 700, totalBefore: 712.0, totalAfter: 702.0, cardsBefore: 31, cardsAfter: 30, change: "Saves one 4090 even at hyperscale." },
  { model: "DeepSeek-R1 (671B MoE)", weight: "INT4", pureModel: 350, totalBefore: 362.0, totalAfter: 352.0, cardsBefore: 16, cardsAfter: 15, change: "Still too large for small nodes, but one card disappears." },
]

const sharedMemoryProjectionRowsZh = [
  { model: "ChatGLM-4 (9B)", weight: "原版 (BF16)", pureModel: 18, totalBefore: 19.8, totalAfter: 18.3, cardsBefore: 1, cardsAfter: 1, change: "留出更多单卡余量。" },
  { model: "ChatGLM-4 (9B)", weight: "INT8", pureModel: 9, totalBefore: 10.8, totalAfter: 9.3, cardsBefore: 1, cardsAfter: 1, change: "仍是单卡，但缓冲更大。" },
  { model: "ChatGLM-4 (9B)", weight: "INT4", pureModel: 5, totalBefore: 6.8, totalAfter: 5.3, cardsBefore: 1, cardsAfter: 1, change: "单卡运行非常宽松。" },
  { model: "Qwen-2.5 (32B)", weight: "原版 (BF16)", pureModel: 64, totalBefore: 69.0, totalAfter: 64.8, cardsBefore: 3, cardsAfter: 3, change: "有节省，但不足以下降一张卡。" },
  { model: "Qwen-2.5 (32B)", weight: "INT8", pureModel: 32, totalBefore: 37.0, totalAfter: 32.8, cardsBefore: 2, cardsAfter: 2, change: "双卡 4090 余量更充足。" },
  { model: "Qwen-2.5 (32B)", weight: "INT4", pureModel: 18, totalBefore: 23.0, totalAfter: 18.8, cardsBefore: 2, cardsAfter: 1, change: "从双卡边缘拉回单卡安全线。" },
  { model: "Llama-3.1 (70B)", weight: "原版 (BF16)", pureModel: 140, totalBefore: 150.0, totalAfter: 141.7, cardsBefore: 7, cardsAfter: 6, change: "100K 上下文下直接省出 1 张 4090。" },
  { model: "Llama-3.1 (70B)", weight: "INT8", pureModel: 70, totalBefore: 80.0, totalAfter: 71.7, cardsBefore: 4, cardsAfter: 3, change: "硬件成本出现实质下降。" },
  { model: "Llama-3.1 (70B)", weight: "INT4", pureModel: 38, totalBefore: 48.0, totalAfter: 39.7, cardsBefore: 3, cardsAfter: 2, change: "把 70B 拉回双卡 4090 可运行区间。" },
  { model: "Mixtral 8x22B (141B MoE)", weight: "原版 (BF16)", pureModel: 282, totalBefore: 288.0, totalAfter: 283.0, cardsBefore: 13, cardsAfter: 13, change: "MoE 架构下 KV 占比相对较小。" },
  { model: "Mixtral 8x22B (141B MoE)", weight: "INT8", pureModel: 141, totalBefore: 147.0, totalAfter: 142.0, cardsBefore: 7, cardsAfter: 7, change: "显存压力下降，但卡数不变。" },
  { model: "Mixtral 8x22B (141B MoE)", weight: "INT4", pureModel: 75, totalBefore: 81.0, totalAfter: 76.0, cardsBefore: 4, cardsAfter: 4, change: "能缓解压力，但仍在同一卡数组。" },
  { model: "DeepSeek-R1 (671B MoE)", weight: "原版 (FP8)", pureModel: 700, totalBefore: 712.0, totalAfter: 702.0, cardsBefore: 31, cardsAfter: 30, change: "超大集群里也能省出 1 张 4090。" },
  { model: "DeepSeek-R1 (671B MoE)", weight: "INT4", pureModel: 350, totalBefore: 362.0, totalAfter: 352.0, cardsBefore: 16, cardsAfter: 15, change: "仍属大集群场景，但少一张卡。" },
]

const sharedMemoryProjectionEn = {
  memoryProjection: {
    title: "100K context memory projections",
    description: "Predicted total VRAM before and after TurboQuant, plus the RTX 4090 count needed to hold each setup.",
    note: "Assumes RTX 4090 nominal VRAM of 24GB, with practical allocation rounded up after framework overhead.",
    labels: {
      beforeMemory: "Before TurboQuant",
      afterMemory: "After TurboQuant",
      beforeCards: "4090s before",
      afterCards: "4090s after",
    },
    headers: ["Model", "Weights", "Pure model VRAM", "Total VRAM before", "Total VRAM after", "4090s before", "4090s after", "Change"],
    rows: sharedMemoryProjectionRowsEn,
  },
}

const sharedMemoryProjectionZh = {
  memoryProjection: {
    title: "100K 上下文显存预测",
    description: "把 TurboQuant 启用前后的总显存，以及对应需要的 RTX 4090 张数，放到同一视图里对比。",
    note: "按 RTX 4090 标称 24GB 显存估算，并预留基础框架开销后向上取整。",
    labels: {
      beforeMemory: "优化前总显存",
      afterMemory: "优化后总显存",
      beforeCards: "优化前 4090 张数",
      afterCards: "优化后 4090 张数",
    },
    headers: ["模型系列", "权重版本", "纯模型显存", "优化前总显存", "优化后总显存", "优化前 4090 需求", "优化后 4090 需求", "核心变化说明"],
    rows: sharedMemoryProjectionRowsZh,
  },
}

export const siteContent: Record<Locale, SiteContent> = {
  en: {
    meta: {
      title: "TurboQuant - Extreme Compression for AI Efficiency",
      description:
        "TurboQuant is a new online vector quantization algorithm that compresses KV cache to 3 bits with zero accuracy loss, cutting memory by 6x and speeding attention up by 8x.",
    },
    languageNames,
    nav: {
      items: [
        { label: "Overview", href: "#overview" },
        { label: "Background", href: "#background" },
        { label: "Core", href: "#core" },
        { label: "Results", href: "#results" },
        { label: "Usage", href: "#usage" },
        { label: "FAQ", href: "#faq" },
      ],
      paperLabel: "Paper PDF",
      languageLabel: "Language",
    },
    hero: {
      badge: "Google Research · Released March 2026",
      title: "TurboQuant",
      highlight: "Redefining AI Efficiency",
      subtitle:
        "A new online vector quantization algorithm that delivers zero-accuracy-loss 3-bit KV cache compression, 6x lower memory use, and up to 8x faster attention.",
      primaryCta: "Explore the Core Idea",
      secondaryCta: "Read the Paper",
      metrics: [
        { value: "6x+", label: "memory compression" },
        { value: "8x", label: "attention speedup (H100)" },
        { value: "3-bit", label: "zero-loss compression" },
      ],
    },
    overview: {
      eyebrow: "Core Innovation",
      title: "Why TurboQuant feels like a category-changing result",
      description:
        "TurboQuant is not just another compression trick. It is an online quantization framework that gets close to the information-theoretic limit while staying data-oblivious and accelerator-friendly.",
      traditionalTitle: "Traditional Methods (for example PQ)",
      turboTitle: "TurboQuant",
      traditionalItems: [
        "Require dataset-specific training",
        "Store many full-precision normalization constants",
        "Long indexing time",
        "Visible accuracy loss",
      ],
      turboItems: [
        "Random rotation plus polar transform (PolarQuant)",
        "1-bit residual correction (QJL) removes normalization overhead",
        "Near-zero indexing time",
        "Matches the 32-bit baseline on reported benchmarks",
      ],
      papers: [
        {
          venue: "AISTATS 2026",
          title: "PolarQuant",
          description: "Polar-transform core that eliminates normalization overhead",
          url: "https://arxiv.org/pdf/2502.02617",
          linkLabel: "arXiv: 2502.02617",
        },
        {
          venue: "AAAI 2025",
          title: "QJL",
          description: "1-bit unbiased inner-product estimator",
          url: "https://dl.acm.org/doi/10.1609/aaai.v39i24.34773",
          linkLabel: "ACM DL",
        },
        {
          venue: "ICLR 2026",
          title: "TurboQuant",
          description: "Two-stage design with near-optimal distortion",
          url: "https://arxiv.org/pdf/2504.19874",
          linkLabel: "arXiv: 2504.19874",
        },
      ],
    },
    recent: {
      eyebrow: "Recent Updates",
      title: "Latest momentum around TurboQuant",
      description:
        "The paper release quickly turned into implementation work, deployment discussion, and practical evaluation around long-context inference.",
      latestTitle: "Latest updates",
      latest: [
        {
          date: "March 2026",
          title: "TurboQuant landed in MLX in 25 minutes with GPT-5.4",
          description: "A builder reported using GPT-5.4 to complete an MLX implementation of TurboQuant in 25 minutes.",
          url: "https://x.com/mweinbach/status/2036786698315546728",
          linkLabel: "View post",
        },
        {
          date: "March 2026",
          title: "Google Research formally introduced TurboQuant",
          description: "The release framed TurboQuant as a near-optimal online quantization method for both KV cache compression and vector search.",
        }
      ],
      impactTitle: "Why it matters",
      impacts: [
        {
          label: "Market impact",
          value: "$MU and $SNDK sold off at the open",
          description: "After $GOOGL released TurboQuant, both $MU and $SNDK were hit sharply at market open.",
        },
      ],
    },
    expert: {
      eyebrow: "Expert Commentary",
      title: "A practical read on what TurboQuant changes",
      description: "One expert view on what is likely already deployed, what still remains hard, and why the paper matters even if most easy gains are gone.",
      comments: [
        {
          author: "Independent Industry Expert",
          role: "LLM systems and inference engineering",
          summary: "TurboQuant matters less because it saves a bit more memory, and more because it marks where KV-cache compression starts to hit a real boundary.",
          paragraphs: [
            "KV cache has long been the largest source of memory consumption in large-model inference. What this paper does, in essence, is compress that data in a way that approaches the information-theoretic optimum. It is not just lowering precision. It is reallocating information density: ordinary regions are represented with extremely low bits, while outliers retain higher precision. At the same time, the method stops treating values independently and instead encodes them at the vector level, which fits the inner-product structure of attention itself.",
            "The critical point is that its error is already close to the information-theoretic lower bound, the Shannon limit. That means compression efficiency is already near the theoretical ceiling. The paper reports roughly 4x to 4.5x compression with little visible performance loss. The result is strong, but it also suggests there is not much room left for further compression without harming model quality.",
            "Given how large-tech internal R&D usually works, the optimization effects implied by the paper were likely absorbed in stages before publication. Low-bit quantization has already been widely deployed, from int8 to int4 and beyond, across mainstream inference stacks. Separate handling for outliers is also not new: methods such as SmoothQuant and AWQ are already doing closely related things. KV-cache compression itself, sliding windows, and hierarchical cache designs are already standard practice in large-model systems.",
            "What likely has not fully landed yet is the most extreme part of the paper: vector quantization and coding schemes that move closer to the information-theoretic limit. The barrier is not theory, but implementation. These methods are less GPU-friendly, harder to keep low-latency, and more difficult to stabilize and generalize in production, so they may take much longer to ship.",
            "If I had to estimate roughly how much of the paper's benefit is already reflected in deployed systems, it would look something like this: the earliest KV cache starts at 1x cost; basic quantization gets to around 2x to 3x compression; adding outlier-aware handling can reach about 3x to 4x; the paper pushes that further to around 4x to 4.5x. In other words, most of the easy gains have already been captured. What remains is smaller in upside and increasingly expensive to realize.",
            "The reason is straightforward. Early compression removes redundancy. Later compression starts to hit effective information, so every additional step has a much higher chance of hurting model capability. Error no longer degrades smoothly; beyond a certain point, it can worsen quickly. Engineering difficulty also does not grow linearly. It rises sharply.",
            "You can infer from current model behavior that mainstream systems are already using many of these ideas. Better long-context behavior, lower inference cost, and stable performance all suggest that KV-cache efficiency has already been significantly improved. A team at Google's level has very likely already deployed low-bit quantization, outlier handling, and at least part of KV-cache compression.",
            "That means if this Google paper has an impact on storage, much of that impact has probably already shown up. The parts that have not shown up yet will likely be harder to implement than the gains that came before.",
            "More importantly, the significance of the paper is not just how much more memory it saves. It gives us a boundary. KV-cache compression is approaching its limit, and the remaining room is narrow. The next major change is unlikely to come from compression alone. It will require finding a different path.",
          ],
        },
      ],
    },
    background: {
      eyebrow: "Background",
      title: "Why TurboQuant matters",
      description: "A quick look at vector quantization limits and KV cache pressure",
      vectorTitle: "The classical vector-quantization problem",
      vectorDescription:
        "Vector quantization maps high-dimensional vectors into compact codes while minimizing distortion. The theory gives clear lower bounds, but conventional methods stay far from them in practice.",
      distortionTitle: "Distortion formulas",
      distortionItems: ["MSE: D_MSE = E[||x - x̂||²]", "Inner product: D_prod = E[|⟨y,x⟩ - ⟨y,x̂⟩|²]"],
      distortionFootnote: "Classical approaches such as PQ remain noticeably above these bounds.",
      kvTitle: "The KV cache bottleneck in LLMs",
      kvDescription:
        "In decoder-only transformers, KV cache stores one key/value pair per token. With long context windows, that memory cost quickly dominates the system budget.",
      memoryTitle: "Memory estimate",
      memoryFormula: "memory ≈ 2 × L × d × 2 bytes (FP16)",
      memoryStats: [
        { label: "128K context + 7B model", value: "tens of GB" },
        { label: "KV cache share of total memory", value: "80%+" },
      ],
      solutionTitle: "What TurboQuant changes",
      solutionItems: [
        "No training and no finetuning",
        "3.5 bits per channel reaches quality neutrality",
        "LongBench matches FP32",
        "Makes long-context inference viable on edge devices",
      ],
      applicationTitle: "Vector search applications",
      applicationDescription:
        "For ANN systems such as FAISS, TurboQuant improves recall while keeping indexing overhead close to zero.",
      applicationCards: [
        { title: "Higher recall", description: "Outperforms PQ and RabbiQ on GloVe" },
        { title: "Indexing time ≈ 0", description: "Practical for billion-scale vector stores" },
      ],
    },
    core: {
      eyebrow: "Core Principle",
      title: "TurboQuant as a two-stage algorithm",
      description: "TurboQuant = PolarQuant for main compression + QJL for residual correction",
      tabs: {
        polar: "PolarQuant",
        qjl: "QJL",
        algorithm: "Full Algorithm",
      },
      polar: {
        title: "PolarQuant: polar-coordinate transform",
        description:
          "The key idea is to remove per-block normalization overhead. PolarQuant rotates the vector randomly so coordinates follow a concentrated distribution that is easy to quantize.",
        formulaTitle: "Coordinate distribution",
        formula: `f_X(x) = Γ(d/2) / (√π · Γ((d-1)/2))
× (1 - x²)^((d-3)/2)

where x ∈ [-1, 1]`,
        steps: [
          "Group the d-dimensional vector into pairs to obtain radii and angles",
          "Apply recursive polar transforms on the radii",
          "Quantize only the angles, whose distribution is highly concentrated",
        ],
        advantagesTitle: "Why it works",
        advantages: [
          { title: "No per-block full-precision constants", description: "Overhead drops to zero." },
          { title: "Near-lossless beyond 4.2x compression", description: "Stronger than conventional baselines." },
          { title: "Gaussian-like coordinates in high dimension", description: "Supports optimal scalar quantizers such as Lloyd-Max." },
        ],
      },
      qjl: {
        title: "QJL: a 1-bit unbiased inner-product estimator",
        description:
          "Johnson-Lindenstrauss projection reduces dimensionality, and QJL stores only the sign of each projected component.",
        quantTitle: "Quantization formula",
        quantFormula: "Q_qjl(r) = sign(S · r)",
        quantNote: "where S_ij ~ N(0,1)",
        dequantTitle: "Dequantization formula",
        dequantFormula: "r̂ = √(π/2d) · S^T · Q_qjl(r)",
        proofTitle: "Unbiasedness guarantee",
        proofFormula: "E[⟨y, r̂⟩] = ⟨y, r⟩",
        proofNote: "Variance bound: Var ≤ (π/2d) · ||y||² · ||r||²",
        reasonsTitle: "Why it matters",
        reasons: [
          "Stores residual information with only 1 bit",
          "Keeps inner-product estimation unbiased",
          "Complements PolarQuant cleanly in the second stage",
        ],
      },
      algorithm: {
        mseTitle: "TurboQuant_mse",
        mseSubtitle: "MSE-optimized, b bits",
        mseCode: `Algorithm: TurboQuant_mse
Input: dimension d, bit width b

1. Precompute centroids c_k (Lloyd-Max)
2. For each vector x:
   2.1 y ← Π · x
   2.2 For j = 1 to d:
       idx_j ← argmin_k |y_j - c_k|
   2.3 Output idx`,
        prodTitle: "TurboQuant_prod",
        prodSubtitle: "Inner-product optimized, b bits",
        prodCode: `Algorithm: TurboQuant_prod
Input: dimension d, bit width b

1. Instantiate TurboQuant_mse with (b - 1) bits
2. Generate random projection matrix S
3. For each vector x:
   3.1 x̃_mse ← Q_mse(x)
   3.2 r ← x - x̃_mse
   3.3 qjl ← sign(S · r)
   3.4 Output (idx, qjl, ||r||₂)`,
        theoremTitle: "Theoretical guarantees",
        theoremCards: [
          { label: "MSE upper bound", value: "D_MSE ≤ (√3 · π/2) · 1/4^b", note: "Within a small constant factor of the lower bound." },
          { label: "Inner-product upper bound", value: "D_prod ≤ (π²√3 · ||y||²/d) · 1/4^b", note: "Close to the information-theoretic limit." },
        ],
      },
    },
    results: {
      eyebrow: "Results",
      title: "The numbers are the argument",
      description: "Benchmarks across Gemma, Mistral, and Llama-3.1-8B",
      kvTitle: "KV cache compression benchmarks",
      kvCards: [
        { value: "50.06", label: "LongBench score", note: "3.5-bit = full cache" },
        { value: "100", label: "Needle In A Haystack", note: "perfect from 4K to 104K" },
        { value: "6x+", label: "memory reduction", note: "large cost savings" },
        { value: "8x", label: "attention speed", note: "H100 at 4-bit" },
      ],
      benchmarkHeaders: ["Benchmark", "TurboQuant 3.5-bit", "TurboQuant 2.5-bit", "Full Cache"],
      benchmarkRows: [
        ["LongBench", "50.06", "49.44", "50.06"],
        ["Needle In A Haystack", "100", "99.8", "100"],
        ["ZeroSCROLLS", "best", "near-best", "baseline"],
        ["RULER", "best", "near-best", "baseline"],
        ["L-Eval", "best", "near-best", "baseline"],
      ],
      vectorTitle: "Vector search benchmark (GloVe d=200)",
      recallTitle: "1@k recall",
      recallBars: [
        { label: "TurboQuant", value: "best", width: "95%", primary: true },
        { label: "PQ", value: "lower", width: "75%" },
        { label: "RabbiQ", value: "middle", width: "82%" },
      ],
      indexingTitle: "Indexing time",
      indexingBars: [
        { label: "TurboQuant", value: "≈ 0", width: "2%", primary: true },
        { label: "PQ (codebook training)", value: "long", width: "85%" },
        { label: "RabbiQ", value: "middle", width: "60%" },
      ],
      compareTitle: "Comparison against alternatives",
      compareHeaders: ["Method", "Needs training", "Unbiased", "Compression", "Speedup"],
      compareRows: [
        { highlight: true, cells: ["TurboQuant", "No", "Yes", "6x+", "8x"] },
        { cells: ["KIVI", "Calibration", "No", "4x", "4x"] },
        { cells: ["SnapKV", "Finetuning", "No", "2-4x", "2-4x"] },
        { cells: ["DuQuant", "Calibration", "Partial", "4x", "4x"] },
      ],
      ...sharedMemoryProjectionEn,
    },
    usage: {
      eyebrow: "Usage",
      title: "From paper to production",
      description: "How to think about integrating TurboQuant into a real stack",
      statusTitle: "Current status",
      statusDescription: "The paper provides theory and pseudocode, but there is no official open-source implementation yet. Community integration work has started.",
      statusItems: [
        "llama.cpp Discussion #20969 is tracking integration ideas",
        "Experiments in MLX report around 5x compression with 99.5% quality retention",
        "Open-source code is widely expected around Q2 2026",
      ],
      stepsTitle: "Implementation sketch",
      steps: [
        {
          title: "Precompute Lloyd-Max centroids",
          description: "Do it once offline and reuse them.",
          code: `# Python-like pseudocode
centroids = lloyd_max_quantizer(
    distribution="beta",
    bits=b
)`,
        },
        {
          title: "Generate a random rotation matrix",
          description: "Use QR decomposition to build an orthogonal matrix.",
          code: `# random rotation
G = np.random.randn(d, d)
Pi, _ = np.linalg.qr(G)`,
        },
        {
          title: "Build quant / dequant primitives",
          description: "This is the core path for storage and recovery.",
          code: `def quant(x, Pi, centroids):
    y = Pi @ x
    idx = find_nearest(y, centroids)
    return idx

def dequant(idx, Pi, centroids):
    y = centroids[idx]
    x = Pi.T @ y
    return x`,
        },
        {
          title: "Integrate inside attention",
          description: "Store K/V in TurboQuant form and estimate inner products with QJL.",
          code: `# Transformer attention
k_quant = turboquant_quant(k)
v_quant = turboquant_quant(v)
# use QJL during attention`,
        },
      ],
      deploymentTitle: "Deployment notes",
      deploymentCards: [
        { title: "Hardware", description: "H100 and A100 are ideal. 4-bit mode is where the paper reports 8x speedups.", icon: "server" },
        { title: "Mixed precision", description: "Use TurboQuant for KV cache and INT4 for weights to maximize total compression.", icon: "fp" },
        { title: "Edge devices", description: "3-bit KV cache can make 32K+ context feasible on phones with software-only implementations.", icon: "phone" },
      ],
      challengesTitle: "Practical risks and mitigations",
      challenges: [
        { title: "Random rotation overhead", description: "Pre-generate and reuse the matrices instead of rebuilding them online." },
        { title: "Residual norm storage", description: "One FP16 scalar is small enough to keep the overhead negligible." },
      ],
      roadmapLabel: "Suggested open-source path",
      roadmapCode: "fork llama.cpp → add a turboquant_quant kernel",
      roadmapUrl: "https://github.com/ggerganov/llama.cpp/discussions",
    },
    future: {
      eyebrow: "Outlook",
      title: "How TurboQuant could shift the AI stack",
      impacts: [
        { title: "LLM inference", description: "Million-token contexts become materially cheaper, with a path to native support in future model stacks.", icon: "rocket" },
        { title: "Vector databases", description: "Real-time indexing and sub-millisecond search become easier to deliver.", icon: "database" },
        { title: "Edge AI", description: "Long-context inference on mobile and embedded devices becomes more realistic.", icon: "phone" },
        { title: "Multimodal embeddings", description: "The same ideas can extend to image and video embedding compression.", icon: "image" },
        { title: "Theory extensions", description: "Combining with outlier-handling methods could push the field toward practical 2-bit systems.", icon: "atom" },
        { title: "Community impact", description: "Expect rapid follow-through from ecosystems such as vLLM and Hugging Face.", icon: "users" },
      ],
      timelineTitle: "Expected timeline",
      timeline: [
        { badge: "Q2", title: "2026 Q2", description: "Open-source code and framework integrations", primary: false },
        { badge: "Q4", title: "2026 Q4", description: "Commercial products, likely cloud-first", primary: false },
        { badge: "27", title: "2027", description: "Potential normalization as an LLM quantization standard", primary: true },
      ],
      risk: "Risk note: poor random-seed handling could introduce small bias, though the paper argues the effect is negligible in high dimension.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Common questions",
      description: "The main questions engineers and readers ask first",
      items: [
        { question: "Does TurboQuant require training?", answer: "No. It is data-oblivious and online, so it does not need finetuning or calibration." },
        { question: "How does it compare with KIVI or standard 4-bit quantization?", answer: "KIVI relies on per-channel calibration, while TurboQuant reports better quality at 3.5 bits and faster attention in the published benchmarks." },
        { question: "Which models does it support?", answer: "In principle any transformer architecture. Reported evaluations include Gemma, Mistral, and Llama-3.1-8B." },
        { question: "Where is the code?", answer: "There is no official release yet. For now the main references are the paper and community discussions such as llama.cpp #20969." },
        { question: "Why does it matter for vector search?", answer: "It improves recall while keeping indexing overhead near zero, which is attractive for large-scale ANN and RAG systems." },
        { question: "Is the zero-loss claim real?", answer: "At 3.5 bits, the paper reports quality neutrality on long-context benchmarks. At 2.5 bits there is a small drop on harder edge cases." },
        { question: "What hardware is required?", answer: "It is GPU-friendly and especially strong on H100, but software-only CPU and mobile implementations are also plausible." },
        { question: "What is the relation to PolarQuant?", answer: "PolarQuant is the first-stage compressor, and QJL is the second-stage residual correction layer." },
      ],
    },
    resources: {
      eyebrow: "Resources",
      title: "References and links",
      items: sharedResources,
      communityTitle: "Community discussion",
      communities: [
        {
          name: "Reddit r/LocalLLaMA",
          description: "Community discussion around local LLM deployment",
          url: "https://www.reddit.com/r/LocalLLaMA/comments/1s2su28/google_research_turboquant_redefining_ai/",
        },
        {
          name: "X (Twitter) discussion",
          description: "Ongoing reactions and commentary",
          url: "https://x.com/Prince_Canuma/status/2036611007523512397",
        },
        {
          name: "llama.cpp #20969",
          description: "Main integration discussion thread",
          url: "https://github.com/ggml-org/llama.cpp/discussions/20969",
        },
      ],
    },
    footer: {
      paper: "Paper",
      blog: "Blog",
      faq: "FAQ",
      copyright: "Content based on public Google Research papers and posts",
    },
  },
  zh: {
    meta: {
      title: "TurboQuant - 重新定义 AI 效率的极致压缩",
      description: "TurboQuant 是新型在线向量量化算法，实现零精度损失的 3-bit KV Cache 压缩，内存减少 6 倍，速度提升 8 倍。",
    },
    languageNames,
    nav: {
      items: [
        { label: "概述", href: "#overview" },
        { label: "技术背景", href: "#background" },
        { label: "核心原理", href: "#core" },
        { label: "实验结果", href: "#results" },
        { label: "使用指南", href: "#usage" },
        { label: "FAQ", href: "#faq" },
      ],
      paperLabel: "论文 PDF",
      languageLabel: "语言",
    },
    hero: {
      badge: "Google Research · 2026 年 3 月发布",
      title: "TurboQuant",
      highlight: "重新定义 AI 效率",
      subtitle: "新型在线向量量化算法，实现零精度损失的 3-bit KV Cache 压缩，内存减少 6 倍，速度提升 8 倍。",
      primaryCta: "了解核心原理",
      secondaryCta: "阅读论文",
      metrics: [
        { value: "6x+", label: "内存压缩比" },
        { value: "8x", label: "注意力计算加速 (H100)" },
        { value: "3-bit", label: "零精度损失压缩" },
      ],
    },
    overview: {
      eyebrow: "核心创新",
      title: "为什么 TurboQuant 是改变赛道的结果",
      description: "TurboQuant 不是简单的压缩工具，而是接近信息论最优界、同时保持数据无关和加速器友好的在线量化框架。",
      traditionalTitle: "传统方法 (如 PQ)",
      turboTitle: "TurboQuant",
      traditionalItems: ["需要数据集特定训练", "存储大量全精度归一化常数", "索引时间长", "精度损失明显"],
      turboItems: ["随机旋转 + 极坐标变换 (PolarQuant)", "1-bit 残差校正 (QJL) 消除归一化开销", "索引时间接近零", "在论文基准中与 32-bit 基线一致"],
      papers: [
        { venue: "AISTATS 2026", title: "PolarQuant", description: "极坐标变换核心，消除归一化开销", url: "https://arxiv.org/pdf/2502.02617", linkLabel: "arXiv: 2502.02617" },
        { venue: "AAAI 2025", title: "QJL", description: "1-bit 无偏内积估计器", url: "https://dl.acm.org/doi/10.1609/aaai.v39i24.34773", linkLabel: "ACM DL" },
        { venue: "ICLR 2026", title: "TurboQuant", description: "两阶段整合，实现近最优失真率", url: "https://arxiv.org/pdf/2504.19874", linkLabel: "arXiv: 2504.19874" },
      ],
    },
    recent: {
      eyebrow: "最近动态",
      title: "TurboQuant 最近的进展和外溢影响",
      description: "论文发布后，讨论很快从理论创新转向工程接入、推理部署和长上下文成本模型。",
      latestTitle: "最新动态",
      latest: [
        {
          date: "2026 年 3 月",
          title: "有人用 GPT-5.4 在 25 分钟内完成了 TurboQuant 的 MLX 实现",
          description: "有开发者表示，自己使用 GPT-5.4 在 25 分钟内完成了 TurboQuant 在 MLX 上的实现。",
          url: "https://x.com/mweinbach/status/2036786698315546728",
          linkLabel: "查看原帖",
        },
        {
          date: "2026 年 3 月",
          title: "Google Research 正式发布 TurboQuant",
          description: "官方把它定义为接近信息论最优的在线量化方法，同时覆盖 KV Cache 压缩和向量检索场景。",
        },
        {
          date: "2026 年 3 月",
          title: "社区很快进入集成讨论阶段",
          description: "开源社区开始讨论 TurboQuant 如何落到 llama.cpp 等推理栈和相关运行时中。",
        },
        {
          date: "2026 年 3 月",
          title: "关注点转向部署收益",
          description: "讨论重点逐渐变成 3-bit 零损 KV 压缩是否会重写长上下文服务的内存与时延预算。",
        },
      ],
      impactTitle: "带来的影响",
      impacts: [
        {
          label: "市场影响",
          value: "$MU 和 $SNDK 开盘承压",
          description: "由于 $GOOGL 发布 TurboQuant，$MU 和 $SNDK 在开盘时受到了严重冲击。",
        },
      ],
    },
    expert: {
      eyebrow: "专家评论",
      title: "从工程视角看 TurboQuant 到底改变了什么",
      description: "重点解释哪些红利可能已经被工程吃掉，哪些部分仍然难以真正落地，以及这篇论文真正划出的边界。",
      comments: [
        {
          author: "独立行业专家",
          role: "大模型系统与推理工程",
          summary: "TurboQuant 的意义，不只是再多省一点内存，而是告诉我们 KV cache 压缩这条路已经接近一条清晰边界。",
          paragraphs: [
            "KV cache 一直是大模型推理里的最大内存消耗来源。论文的做法，本质是用信息论最优的方式去压缩这些数据。不是简单地降低精度，而是重新分配信息密度。普通部分用极低比特表示，异常值单独保留更高精度。同时不再逐元素处理，而是以向量为单位编码，因为 attention 本身就是内积结构。",
            "关键的是，它的误差已经贴近信息论下界，也就是香农极限。这意味着它的压缩效率已经非常接近理论极限。论文里给出的结果，大致是 4 到 4.5 倍的压缩，性能几乎没有明显损失。效果很明显，但后续再压缩而不损伤性能的可能性已经很小。",
            "基于大科技公司的内部研发流程，论文的方法以及可能带来的优化效果，很可能已经被工程上分阶段吃掉了。比如低比特量化早就被广泛使用，从 int8 到 int4，再到更低精度，主流模型在推理侧基本都已经在用。异常值单独处理这件事也不是新东西，SmoothQuant、AWQ 这些方法本质上都在做类似的事情。KV cache 本身的压缩、滑窗、分层缓存，在大模型里也已经是常规配置。",
            "真正还没完全落地的，是论文里更极致的那一部分，比如向量量化，以及更接近信息论极限的编码方式。这些方法的问题不是原理，而是工程实现。它们对 GPU 不够友好，延迟控制更难，稳定性和泛化也更复杂，所以往往需要更长时间才能真正上线。",
            "如果一定要粗略估计论文里已经落地和还没落地的部分占比，可以大致这么看：最早的 KV cache 是 1 倍成本，简单量化之后能做到 2 到 3 倍压缩，加上异常值处理可以到 3 到 4 倍，论文再往前推一点，大约到 4 到 4.5 倍。也就是说，大部分红利已经被拿走了，剩下的提升空间不大，而且代价越来越高。",
            "这背后的原因也很清楚。前期压缩主要是在去掉冗余信息，后面面对的则是有效信息，再压就会直接影响模型能力。误差不再是平滑变化，而是到某个点之后快速恶化。实现难度也不是线性增长，而是明显抬升。",
            "从模型表现其实可以反推，现在的主流模型已经在使用这些技术。长上下文能力增强、推理成本下降、性能依然稳定，这些现象本身就说明 KV cache 的效率已经被大幅优化。像 Google 这种级别的团队，大概率已经实现了低比特量化、异常值处理和一部分 KV cache 压缩。",
            "也就是说，如果说 Google 这篇论文会对存储产生影响，那么其中大部分影响很可能已经体现出来了。还没有体现出来的那一部分，其实施难度也会比此前更高。",
            "更重要的是，这篇论文的意义不在于多省了多少内存，而在于给出了一个边界。KV cache 压缩这条路已经接近极限，剩下的提升空间很有限。接下来真正能带来变化的，未必还会来自压缩本身，而是需要找到其他路径。",
          ],
        },
      ],
    },
    background: {
      eyebrow: "技术背景",
      title: "为什么需要 TurboQuant",
      description: "向量量化极限与 KV Cache 压力的快速梳理",
      vectorTitle: "向量量化的经典问题",
      vectorDescription: "向量量化要把高维向量映射到紧凑编码，同时最小化失真。理论下界很明确，但传统方法离这个界仍然较远。",
      distortionTitle: "失真度量公式",
      distortionItems: ["MSE: D_MSE = E[||x - x̂||²]", "内积: D_prod = E[|⟨y,x⟩ - ⟨y,x̂⟩|²]"],
      distortionFootnote: "PQ 等传统方法通常离这些下界还有明显距离。",
      kvTitle: "LLM 中的 KV Cache 瓶颈",
      kvDescription: "在 Decoder-only Transformer 里，每个 token 都要存一份 Key/Value。上下文变长后，KV Cache 很快变成主要内存负担。",
      memoryTitle: "内存估算",
      memoryFormula: "内存 ≈ 2 × L × d × 2 bytes (FP16)",
      memoryStats: [
        { label: "128K 上下文 + 7B 模型", value: "数十 GB" },
        { label: "KV Cache 占总内存", value: "80%+" },
      ],
      solutionTitle: "TurboQuant 带来的变化",
      solutionItems: ["无需训练、无需微调", "3.5 bit/通道可实现质量中性", "LongBench 与 FP32 一致", "让边缘设备长上下文推理更可行"],
      applicationTitle: "向量搜索应用",
      applicationDescription: "在 FAISS 这类 ANN 系统中，TurboQuant 兼顾更高召回率和接近零的索引开销。",
      applicationCards: [
        { title: "更高召回率", description: "在 GloVe 上优于 PQ 和 RabbiQ" },
        { title: "索引时间 ≈ 0", description: "适合十亿级向量库" },
      ],
    },
    core: {
      eyebrow: "核心原理",
      title: "TurboQuant 两阶段算法",
      description: "TurboQuant = PolarQuant 主压缩 + QJL 残差校正",
      tabs: { polar: "PolarQuant", qjl: "QJL", algorithm: "完整算法" },
      polar: {
        title: "PolarQuant：极坐标变换",
        description: "关键点在于去掉 per-block 归一化开销。PolarQuant 先做随机旋转，让坐标服从更易量化的集中分布。",
        formulaTitle: "坐标分布公式",
        formula: `f_X(x) = Γ(d/2) / (√π · Γ((d-1)/2))
× (1 - x²)^((d-3)/2)

其中 x ∈ [-1, 1]`,
        steps: ["将 d 维向量两两分组，得到半径与角度", "对半径递归执行极坐标变换", "只量化角度，避免归一化开销"],
        advantagesTitle: "核心优势",
        advantages: [
          { title: "取消所有 per-block 全精度常数", description: "额外开销为 0。" },
          { title: "超过 4.2x 压缩时仍近无损", description: "显著优于传统方案。" },
          { title: "高维下坐标近似高斯", description: "可直接套用 Lloyd-Max 等最优标量量化器。" },
        ],
      },
      qjl: {
        title: "QJL：1-bit 无偏内积估计器",
        description: "Johnson-Lindenstrauss 投影先降维，QJL 进一步只保留投影结果的符号位。",
        quantTitle: "量化公式",
        quantFormula: "Q_qjl(r) = sign(S · r)",
        quantNote: "其中 S_ij ~ N(0,1)",
        dequantTitle: "反量化公式",
        dequantFormula: "r̂ = √(π/2d) · S^T · Q_qjl(r)",
        proofTitle: "无偏性保证",
        proofFormula: "E[⟨y, r̂⟩] = ⟨y, r⟩",
        proofNote: "方差界：Var ≤ (π/2d) · ||y||² · ||r||²",
        reasonsTitle: "为什么重要",
        reasons: ["仅用 1 bit 存储残差信息", "保持内积估计无偏", "与 PolarQuant 的第一阶段自然互补"],
      },
      algorithm: {
        mseTitle: "TurboQuant_mse",
        mseSubtitle: "MSE 优化，b bits",
        mseCode: `Algorithm: TurboQuant_mse
Input: 维度 d, 比特宽度 b

1. 预计算质心 c_k (Lloyd-Max)
2. 对每个向量 x:
   2.1 y ← Π · x
   2.2 对 j = 1 到 d:
       idx_j ← argmin_k |y_j - c_k|
   2.3 输出 idx`,
        prodTitle: "TurboQuant_prod",
        prodSubtitle: "内积优化，b bits",
        prodCode: `Algorithm: TurboQuant_prod
Input: 维度 d, 比特宽度 b

1. 实例化 (b - 1) bits 的 TurboQuant_mse
2. 生成随机投影矩阵 S
3. 对每个向量 x:
   3.1 x̃_mse ← Q_mse(x)
   3.2 r ← x - x̃_mse
   3.3 qjl ← sign(S · r)
   3.4 输出 (idx, qjl, ||r||₂)`,
        theoremTitle: "理论保证",
        theoremCards: [
          { label: "MSE 上界", value: "D_MSE ≤ (√3 · π/2) · 1/4^b", note: "仅比理论下界差一个小常数因子。" },
          { label: "内积失真上界", value: "D_prod ≤ (π²√3 · ||y||²/d) · 1/4^b", note: "接近信息论极限。" },
        ],
      },
    },
    results: {
      eyebrow: "实验结果",
      title: "数据就是论据",
      description: "覆盖 Gemma、Mistral、Llama-3.1-8B 的基准测试",
      kvTitle: "KV Cache 压缩基准",
      kvCards: [
        { value: "50.06", label: "LongBench 分数", note: "3.5-bit = Full Cache" },
        { value: "100", label: "Needle In A Haystack", note: "4K 到 104K 全满分" },
        { value: "6x+", label: "内存压缩", note: "显著降低成本" },
        { value: "8x", label: "注意力速度", note: "H100 4-bit 模式" },
      ],
      benchmarkHeaders: ["基准测试", "TurboQuant 3.5-bit", "TurboQuant 2.5-bit", "Full Cache"],
      benchmarkRows: [
        ["LongBench", "50.06", "49.44", "50.06"],
        ["Needle In A Haystack", "100", "99.8", "100"],
        ["ZeroSCROLLS", "最优", "接近最优", "基线"],
        ["RULER", "最优", "接近最优", "基线"],
        ["L-Eval", "最优", "接近最优", "基线"],
      ],
      vectorTitle: "向量搜索基准 (GloVe d=200)",
      recallTitle: "1@k Recall",
      recallBars: [
        { label: "TurboQuant", value: "最优", width: "95%", primary: true },
        { label: "PQ", value: "较低", width: "75%" },
        { label: "RabbiQ", value: "中等", width: "82%" },
      ],
      indexingTitle: "索引时间",
      indexingBars: [
        { label: "TurboQuant", value: "≈ 0", width: "2%", primary: true },
        { label: "PQ (需 codebook 训练)", value: "长", width: "85%" },
        { label: "RabbiQ", value: "中等", width: "60%" },
      ],
      compareTitle: "与替代方案对比",
      compareHeaders: ["方法", "需要训练", "无偏", "压缩比", "速度提升"],
      compareRows: [
        { highlight: true, cells: ["TurboQuant", "否", "是", "6x+", "8x"] },
        { cells: ["KIVI", "需校准", "否", "4x", "4x"] },
        { cells: ["SnapKV", "需微调", "否", "2-4x", "2-4x"] },
        { cells: ["DuQuant", "需校准", "部分", "4x", "4x"] },
      ],
      ...sharedMemoryProjectionZh,
    },
    usage: {
      eyebrow: "使用指南",
      title: "从论文到生产",
      description: "如何把 TurboQuant 放进真实系统",
      statusTitle: "当前状态",
      statusDescription: "论文已经给出理论与伪代码，但官方实现尚未开源。社区集成工作已经启动。",
      statusItems: ["llama.cpp Discussion #20969 正在讨论集成方案", "MLX 实验报告约 5x 压缩和 99.5% 质量保留", "社区普遍预期 2026 Q2 左右会出现开源实现"],
      stepsTitle: "实现步骤草图",
      steps: [
        {
          title: "预计算 Lloyd-Max 质心",
          description: "离线算一次，后续复用。",
          code: `# Python-like pseudocode
centroids = lloyd_max_quantizer(
    distribution="beta",
    bits=b
)`,
        },
        {
          title: "生成随机旋转矩阵",
          description: "通过 QR 分解得到正交矩阵。",
          code: `# 随机旋转
G = np.random.randn(d, d)
Pi, _ = np.linalg.qr(G)`,
        },
        {
          title: "实现 quant / dequant 原语",
          description: "这里是数据存储与恢复的核心路径。",
          code: `def quant(x, Pi, centroids):
    y = Pi @ x
    idx = find_nearest(y, centroids)
    return idx

def dequant(idx, Pi, centroids):
    y = centroids[idx]
    x = Pi.T @ y
    return x`,
        },
        {
          title: "集成到 attention",
          description: "把 K/V 存成 TurboQuant 格式，并在注意力里结合 QJL。",
          code: `# Transformer attention
k_quant = turboquant_quant(k)
v_quant = turboquant_quant(v)
# 在注意力阶段使用 QJL`,
        },
      ],
      deploymentTitle: "部署建议",
      deploymentCards: [
        { title: "硬件", description: "H100 / A100 最理想，论文中的 8x 提速来自 4-bit 模式。", icon: "server" },
        { title: "混合精度", description: "KV Cache 用 TurboQuant，权重用 INT4，整体压缩效果更强。", icon: "fp" },
        { title: "边缘设备", description: "3-bit KV Cache 有机会让手机端也支持 32K+ 上下文。", icon: "phone" },
      ],
      challengesTitle: "工程风险与应对",
      challenges: [
        { title: "随机旋转开销", description: "预生成并复用矩阵，避免在线反复构建。" },
        { title: "残差范数存储", description: "只额外存 1 个 FP16 标量，开销很小。" },
      ],
      roadmapLabel: "推荐开源路线",
      roadmapCode: "fork llama.cpp → 添加 turboquant_quant kernel",
      roadmapUrl: "https://github.com/ggerganov/llama.cpp/discussions",
    },
    future: {
      eyebrow: "未来展望",
      title: "TurboQuant 可能怎样改变 AI 栈",
      impacts: [
        { title: "LLM 推理", description: "百万 token 上下文成本会明显下降，并可能进入未来模型栈的原生能力。", icon: "rocket" },
        { title: "向量数据库", description: "更容易做到实时索引和亚毫秒查询。", icon: "database" },
        { title: "边缘 AI", description: "手机和嵌入式设备上的长上下文推理更现实。", icon: "phone" },
        { title: "多模态嵌入", description: "相同思路可扩展到图像和视频 embedding 压缩。", icon: "image" },
        { title: "理论延伸", description: "结合 outlier 处理后，实用 2-bit 系统的可能性更高。", icon: "atom" },
        { title: "社区影响", description: "vLLM、Hugging Face 等生态很可能快速跟进。", icon: "users" },
      ],
      timelineTitle: "时间线预测",
      timeline: [
        { badge: "Q2", title: "2026 Q2", description: "开源代码与框架集成", primary: false },
        { badge: "Q4", title: "2026 Q4", description: "商用产品，可能先落在云端", primary: false },
        { badge: "27", title: "2027", description: "有机会成为 LLM 量化标准配置", primary: true },
      ],
      risk: "风险提示：如果随机种子处理不当，可能引入极小偏差，但论文认为在高维下可以忽略。",
    },
    faq: {
      eyebrow: "FAQ",
      title: "常见问题",
      description: "工程师和读者最先会问的问题",
      items: [
        { question: "TurboQuant 需要训练吗？", answer: "不需要。它是数据无关、在线运行的方法，不需要微调或校准。" },
        { question: "和 KIVI 或常规 4-bit 量化相比如何？", answer: "KIVI 依赖 per-channel 校准，而 TurboQuant 在论文中以 3.5 bit 报告了更好的质量和更快的注意力速度。" },
        { question: "支持哪些模型？", answer: "理论上支持任意 Transformer。论文展示了 Gemma、Mistral、Llama-3.1-8B 的结果。" },
        { question: "代码在哪里？", answer: "官方实现尚未发布，目前主要参考论文和 llama.cpp #20969 等社区讨论。" },
        { question: "为什么对向量搜索重要？", answer: "它在保持接近零索引开销的同时提升召回率，适合大规模 ANN 和 RAG 系统。" },
        { question: "零损失是真的吗？", answer: "论文在 3.5 bit 下报告了长上下文基准的质量中性，2.5 bit 会在更难样例上略有下降。" },
        { question: "对硬件有什么要求？", answer: "它对 GPU 很友好，在 H100 上表现尤其强，但 CPU 和手机软件实现也有可行性。" },
        { question: "和 PolarQuant 的关系是什么？", answer: "PolarQuant 是第一阶段主压缩，QJL 是第二阶段残差校正。" },
      ],
    },
    resources: {
      eyebrow: "资源",
      title: "相关引用与链接",
      items: [
        { title: "官方博客", description: "Google Research 官方发布文章", url: "https://research.google/blog/turboquant-redefining-ai-efficiency-with-extreme-compression/", type: "blog" },
        { title: "TurboQuant 论文", description: "ICLR 2026 主论文 PDF", url: "https://arxiv.org/pdf/2504.19874", type: "paper" },
        { title: "PolarQuant 论文", description: "AISTATS 2026 极坐标变换论文", url: "https://arxiv.org/pdf/2502.02617", type: "paper" },
        { title: "QJL 论文", description: "AAAI 2025 量化 JL 变换", url: "https://dl.acm.org/doi/10.1609/aaai.v39i24.34773", type: "paper" },
      ],
      communityTitle: "社区讨论",
      communities: [
        {
          name: "Reddit r/LocalLLaMA",
          description: "本地 LLM 部署相关讨论",
          url: "https://www.reddit.com/r/LocalLLaMA/comments/1s2su28/google_research_turboquant_redefining_ai/",
        },
        {
          name: "X (Twitter) discussion",
          description: "最新动态和讨论",
          url: "https://x.com/Prince_Canuma/status/2036611007523512397",
        },
        {
          name: "llama.cpp #20969",
          description: "主要集成讨论帖",
          url: "https://github.com/ggml-org/llama.cpp/discussions/20969",
        },
      ],
    },
    footer: {
      paper: "论文",
      blog: "博客",
      faq: "FAQ",
      copyright: "内容基于 Google Research 公开论文与博客",
    },
  },
  ko: {
    ...{} as SiteContent,
  },
  ja: {
    ...{} as SiteContent,
  },
  fr: {
    ...{} as SiteContent,
  },
  de: {
    ...{} as SiteContent,
  },
  pt: {
    ...{} as SiteContent,
  },
}

siteContent.ko = {
  ...siteContent.en,
  meta: {
    title: "TurboQuant - AI 효율을 위한 초고압축",
    description:
      "TurboQuant는 정확도 손실 없이 KV 캐시를 3비트로 압축하고, 메모리를 6배 줄이며, 어텐션을 최대 8배 가속하는 온라인 벡터 양자화 알고리즘입니다.",
  },
  nav: {
    ...siteContent.en.nav,
    items: [
      { label: "개요", href: "#overview" },
      { label: "배경", href: "#background" },
      { label: "원리", href: "#core" },
      { label: "결과", href: "#results" },
      { label: "활용", href: "#usage" },
      { label: "FAQ", href: "#faq" },
    ],
    paperLabel: "논문 PDF",
    languageLabel: "언어",
  },
  hero: {
    badge: "Google Research · 2026년 3월 공개",
    title: "TurboQuant",
    highlight: "AI 효율의 기준을 다시 쓰다",
    subtitle:
      "정확도 손실 없는 3비트 KV 캐시 압축을 구현해 메모리를 6배 줄이고, 어텐션 속도를 최대 8배 높이는 새로운 온라인 벡터 양자화 알고리즘입니다.",
    primaryCta: "핵심 원리 보기",
    secondaryCta: "논문 읽기",
    metrics: [
      { value: "6x+", label: "메모리 압축" },
      { value: "8x", label: "어텐션 가속 (H100)" },
      { value: "3-bit", label: "무손실 압축" },
    ],
  },
  overview: {
    ...siteContent.en.overview,
    eyebrow: "핵심 혁신",
    title: "TurboQuant가 판을 바꾸는 결과로 보이는 이유",
    description:
      "TurboQuant는 단순한 압축 기법이 아니라, 정보이론적 한계에 가까우면서도 데이터 비의존적이고 가속기 친화적인 온라인 양자화 프레임워크입니다.",
    traditionalTitle: "기존 방법 (예: PQ)",
    traditionalItems: ["데이터셋별 학습 필요", "정규화 상수를 많이 저장해야 함", "인덱싱 시간이 길다", "정확도 손실이 눈에 띈다"],
    turboItems: ["무작위 회전 + 극좌표 변환 (PolarQuant)", "1비트 잔차 보정 (QJL)으로 정규화 오버헤드 제거", "거의 0에 가까운 인덱싱 시간", "보고된 벤치마크에서 32비트 기준선과 동일"],
    papers: [
      { venue: "AISTATS 2026", title: "PolarQuant", description: "정규화 오버헤드를 없애는 극좌표 변환 핵심", url: "https://arxiv.org/pdf/2502.02617", linkLabel: "arXiv: 2502.02617" },
      { venue: "AAAI 2025", title: "QJL", description: "1비트 비편향 내적 추정기", url: "https://dl.acm.org/doi/10.1609/aaai.v39i24.34773", linkLabel: "ACM DL" },
      { venue: "ICLR 2026", title: "TurboQuant", description: "거의 최적 왜곡을 달성하는 2단계 설계", url: "https://arxiv.org/pdf/2504.19874", linkLabel: "arXiv: 2504.19874" },
    ],
  },
  recent: {
    ...siteContent.en.recent,
    eyebrow: "최근 동향",
    title: "TurboQuant를 둘러싼 최신 흐름",
    description: "논문 공개 직후 논의는 빠르게 구현, 배포, 장문맥 추론 비용 구조로 확장됐습니다.",
    latestTitle: "최신 업데이트",
    latest: [
      {
        date: "2026년 3월",
        title: "누군가 GPT-5.4로 25분 만에 TurboQuant의 MLX 구현을 완료했다",
        description: "한 개발자가 GPT-5.4를 사용해 25분 만에 TurboQuant의 MLX 구현을 끝냈다고 공유했습니다.",
        url: "https://x.com/mweinbach/status/2036786698315546728",
        linkLabel: "원문 보기",
      },
      {
        date: "2026년 3월",
        title: "Google Research가 TurboQuant를 공식 발표했다",
        description: "공개 발표에서는 TurboQuant를 KV 캐시 압축과 벡터 검색을 모두 포괄하는 정보이론 근접형 온라인 양자화 기법으로 제시했습니다.",
      },
      {
        date: "2026년 3월",
        title: "커뮤니티가 곧바로 통합 논의에 들어갔다",
        description: "오픈소스 논의는 곧바로 llama.cpp 같은 추론 스택과 관련 런타임에 TurboQuant를 어떻게 넣을지로 이어졌습니다.",
      },
      {
        date: "2026년 3월",
        title: "관심이 이론에서 배포 경제성으로 이동했다",
        description: "논의의 핵심은 3비트 무손실 KV 압축이 장문맥 서빙의 메모리와 지연 시간 예산을 바꿀 수 있는지로 옮겨갔습니다.",
      },
    ],
    impactTitle: "영향",
    impacts: [
      {
        label: "시장 영향",
        value: "$MU와 $SNDK가 장 시작 직후 하락 압력을 받았다",
        description: "$GOOGL의 TurboQuant 발표 이후 $MU와 $SNDK는 개장 시점에 크게 흔들렸습니다.",
      },
    ],
  },
  background: {
    ...siteContent.en.background,
    eyebrow: "기술 배경",
    title: "왜 TurboQuant가 필요한가",
    description: "벡터 양자화 한계와 KV 캐시 병목을 빠르게 정리합니다.",
    vectorTitle: "벡터 양자화의 고전적 문제",
    vectorDescription: "벡터 양자화는 고차원 벡터를 작은 코드로 바꾸면서 왜곡을 최소화하는 문제입니다. 이론적 하한은 분명하지만, 기존 방식은 실제로 거기까지 가지 못합니다.",
    distortionTitle: "왜곡 공식",
    distortionFootnote: "PQ 같은 전통적 방법은 이 하한보다 여전히 상당히 높습니다.",
    kvTitle: "LLM의 KV 캐시 병목",
    kvDescription: "디코더 기반 트랜스포머에서는 토큰마다 Key/Value를 저장해야 하므로, 컨텍스트가 길어질수록 메모리 비용이 빠르게 지배적이 됩니다.",
    memoryTitle: "메모리 추정",
    memoryFormula: "memory ≈ 2 × L × d × 2 bytes (FP16)",
    memoryStats: [
      { label: "128K 컨텍스트 + 7B 모델", value: "수십 GB" },
      { label: "전체 메모리 중 KV 캐시 비중", value: "80%+" },
    ],
    solutionTitle: "TurboQuant가 바꾸는 점",
    solutionItems: ["학습과 미세조정이 필요 없음", "채널당 3.5비트로 품질 중립성 달성", "LongBench가 FP32와 동일", "엣지 기기에서도 장문맥 추론 가능성 확대"],
    applicationTitle: "벡터 검색 적용",
    applicationDescription: "FAISS 같은 ANN 시스템에서 TurboQuant는 인덱싱 오버헤드를 거의 0으로 유지하면서 더 높은 리콜을 제공합니다.",
    applicationCards: [
      { title: "더 높은 리콜", description: "GloVe에서 PQ와 RabbiQ보다 우수" },
      { title: "인덱싱 시간 ≈ 0", description: "대규모 벡터 저장소에 적합" },
    ],
  },
  core: {
    ...siteContent.en.core,
    eyebrow: "핵심 원리",
    title: "TurboQuant의 2단계 알고리즘",
    description: "TurboQuant = 주 압축을 담당하는 PolarQuant + 잔차 보정을 담당하는 QJL",
    tabs: { polar: "PolarQuant", qjl: "QJL", algorithm: "전체 알고리즘" },
    polar: {
      ...siteContent.en.core.polar,
      title: "PolarQuant: 극좌표 변환",
      description: "핵심은 블록별 정규화 오버헤드를 제거하는 것입니다. PolarQuant는 무작위 회전으로 좌표를 더 양자화하기 쉬운 집중 분포로 바꿉니다.",
      formulaTitle: "좌표 분포",
      steps: ["d차원 벡터를 쌍으로 묶어 반지름과 각도를 얻는다", "반지름에 재귀적 극좌표 변환을 적용한다", "분포가 집중된 각도만 양자화한다"],
      advantagesTitle: "핵심 장점",
      advantages: [
        { title: "블록별 전정밀 상수 제거", description: "오버헤드가 0이 됩니다." },
        { title: "4.2배 이상 압축에서도 거의 무손실", description: "기존 기준선보다 강합니다." },
        { title: "고차원에서 가우시안 유사 좌표", description: "Lloyd-Max 같은 최적 스칼라 양자화기를 바로 적용할 수 있습니다." },
      ],
    },
    qjl: {
      ...siteContent.en.core.qjl,
      title: "QJL: 1비트 비편향 내적 추정기",
      description: "Johnson-Lindenstrauss 투영으로 차원을 줄인 뒤, QJL은 각 투영 성분의 부호만 저장합니다.",
      quantTitle: "양자화 공식",
      quantNote: "여기서 S_ij ~ N(0,1)",
      dequantTitle: "복원 공식",
      proofTitle: "비편향 보장",
      proofNote: "분산 상한: Var ≤ (π/2d) · ||y||² · ||r||²",
      reasonsTitle: "왜 중요한가",
      reasons: ["잔차 정보를 1비트로 저장", "내적 추정을 비편향으로 유지", "PolarQuant와 자연스럽게 결합"],
    },
    algorithm: {
      ...siteContent.en.core.algorithm,
      mseSubtitle: "MSE 최적화, b비트",
      prodSubtitle: "내적 최적화, b비트",
      theoremTitle: "이론적 보장",
      theoremCards: [
        { label: "MSE 상한", value: "D_MSE ≤ (√3 · π/2) · 1/4^b", note: "하한과의 상수 차이가 작습니다." },
        { label: "내적 왜곡 상한", value: "D_prod ≤ (π²√3 · ||y||²/d) · 1/4^b", note: "정보이론적 한계에 가깝습니다." },
      ],
    },
  },
  results: {
    ...siteContent.en.results,
    eyebrow: "실험 결과",
    title: "숫자가 주장이다",
    description: "Gemma, Mistral, Llama-3.1-8B 전반의 벤치마크",
    kvTitle: "KV 캐시 압축 벤치마크",
    kvCards: [
      { value: "50.06", label: "LongBench 점수", note: "3.5비트 = 전체 캐시" },
      { value: "100", label: "Needle In A Haystack", note: "4K~104K 구간 완벽" },
      { value: "6x+", label: "메모리 절감", note: "비용 크게 감소" },
      { value: "8x", label: "어텐션 속도", note: "H100 4비트 모드" },
    ],
    benchmarkHeaders: ["벤치마크", "TurboQuant 3.5비트", "TurboQuant 2.5비트", "전체 캐시"],
    benchmarkRows: [
      ["LongBench", "50.06", "49.44", "50.06"],
      ["Needle In A Haystack", "100", "99.8", "100"],
      ["ZeroSCROLLS", "최상", "거의 최상", "기준선"],
      ["RULER", "최상", "거의 최상", "기준선"],
      ["L-Eval", "최상", "거의 최상", "기준선"],
    ],
    vectorTitle: "벡터 검색 벤치마크 (GloVe d=200)",
    recallTitle: "1@k 리콜",
    recallBars: [
      { label: "TurboQuant", value: "최상", width: "95%", primary: true },
      { label: "PQ", value: "낮음", width: "75%" },
      { label: "RabbiQ", value: "중간", width: "82%" },
    ],
    indexingTitle: "인덱싱 시간",
    indexingBars: [
      { label: "TurboQuant", value: "≈ 0", width: "2%", primary: true },
      { label: "PQ (코드북 학습)", value: "김", width: "85%" },
      { label: "RabbiQ", value: "중간", width: "60%" },
    ],
    compareTitle: "대안 대비 비교",
    compareHeaders: ["방법", "학습 필요", "비편향", "압축률", "속도 향상"],
    compareRows: [
      { highlight: true, cells: ["TurboQuant", "아니오", "예", "6x+", "8x"] },
      { cells: ["KIVI", "보정", "아니오", "4x", "4x"] },
      { cells: ["SnapKV", "미세조정", "아니오", "2-4x", "2-4x"] },
      { cells: ["DuQuant", "보정", "부분적", "4x", "4x"] },
    ],
  },
  usage: {
    ...siteContent.en.usage,
    eyebrow: "활용 가이드",
    title: "논문에서 제품까지",
    description: "실제 스택에 TurboQuant를 넣는 방법",
    statusTitle: "현재 상태",
    statusDescription: "논문은 이론과 의사코드를 제공하지만 공식 오픈소스 구현은 아직 없습니다. 다만 커뮤니티 통합 작업은 이미 시작됐습니다.",
    statusItems: ["llama.cpp Discussion #20969에서 통합 아이디어를 추적 중", "MLX 실험은 약 5배 압축과 99.5% 품질 보존을 보고", "2026년 2분기 전후로 오픈소스 공개가 널리 예상됨"],
    stepsTitle: "구현 스케치",
    deploymentTitle: "배포 메모",
    deploymentCards: [
      { title: "하드웨어", description: "H100과 A100이 이상적입니다. 논문의 8배 가속은 4비트 모드 기준입니다.", icon: "server" },
      { title: "혼합 정밀도", description: "KV 캐시는 TurboQuant, 가중치는 INT4를 사용해 전체 압축을 극대화합니다.", icon: "fp" },
      { title: "엣지 기기", description: "3비트 KV 캐시는 휴대폰에서도 32K+ 문맥을 현실화할 수 있습니다.", icon: "phone" },
    ],
    challengesTitle: "실무 리스크와 완화책",
    challenges: [
      { title: "무작위 회전 오버헤드", description: "행렬을 미리 생성해 재사용하면 온라인 비용을 줄일 수 있습니다." },
      { title: "잔차 norm 저장", description: "FP16 스칼라 하나면 충분해서 오버헤드는 매우 작습니다." },
    ],
    roadmapLabel: "권장 오픈소스 경로",
    roadmapCode: "fork llama.cpp → turboquant_quant 커널 추가",
  },
  future: {
    ...siteContent.en.future,
    eyebrow: "전망",
    title: "TurboQuant가 AI 스택을 바꿀 수 있는 방식",
    impacts: [
      { title: "LLM 추론", description: "백만 토큰 문맥 비용이 크게 낮아지고, 차세대 모델 스택의 기본 기능이 될 수 있습니다.", icon: "rocket" },
      { title: "벡터 데이터베이스", description: "실시간 인덱싱과 서브밀리초 검색이 더 쉬워집니다.", icon: "database" },
      { title: "엣지 AI", description: "모바일과 임베디드 환경의 장문맥 추론이 현실에 가까워집니다.", icon: "phone" },
      { title: "멀티모달 임베딩", description: "같은 아이디어를 이미지와 비디오 임베딩 압축으로 확장할 수 있습니다.", icon: "image" },
      { title: "이론 확장", description: "아웃라이어 처리와 결합하면 실용적 2비트 시스템으로 더 다가갈 수 있습니다.", icon: "atom" },
      { title: "커뮤니티 영향", description: "vLLM과 Hugging Face 같은 생태계가 빠르게 따라올 가능성이 높습니다.", icon: "users" },
    ],
    timelineTitle: "예상 일정",
    timeline: [
      { badge: "Q2", title: "2026 Q2", description: "오픈소스 코드와 프레임워크 통합", primary: false },
      { badge: "Q4", title: "2026 Q4", description: "상용 제품, 아마도 클라우드 우선", primary: false },
      { badge: "27", title: "2027", description: "LLM 양자화 표준으로 자리잡을 가능성", primary: true },
    ],
    risk: "리스크 노트: 랜덤 시드를 잘못 다루면 작은 편향이 생길 수 있지만, 논문은 고차원에서 영향이 미미하다고 봅니다.",
  },
  faq: {
    ...siteContent.en.faq,
    title: "자주 묻는 질문",
    description: "엔지니어가 먼저 묻는 핵심 질문",
    items: [
      { question: "TurboQuant는 학습이 필요한가?", answer: "아니오. 데이터 비의존적이고 온라인 방식이라 미세조정이나 보정이 필요 없습니다." },
      { question: "KIVI나 일반 4비트 양자화와 비교하면?", answer: "KIVI는 채널별 보정이 필요하지만, TurboQuant는 3.5비트에서 더 나은 품질과 더 빠른 어텐션을 보고합니다." },
      { question: "어떤 모델을 지원하나?", answer: "원칙적으로 모든 트랜스포머 구조를 지원합니다. Gemma, Mistral, Llama-3.1-8B 결과가 공개됐습니다." },
      { question: "코드는 어디 있나?", answer: "아직 공식 공개는 없습니다. 현재는 논문과 llama.cpp #20969 같은 커뮤니티 토론이 핵심 참고자료입니다." },
      { question: "벡터 검색에서 왜 중요한가?", answer: "인덱싱 오버헤드를 거의 0으로 유지하면서 리콜을 높여 대규모 ANN과 RAG에 적합합니다." },
      { question: "정말 무손실인가?", answer: "3.5비트에서는 장문맥 벤치마크에서 품질 중립성을 보고했고, 2.5비트는 어려운 경우에 약간 떨어집니다." },
      { question: "어떤 하드웨어가 필요한가?", answer: "GPU 친화적이며 H100에서 특히 강하지만, CPU와 모바일 소프트웨어 구현도 가능합니다." },
      { question: "PolarQuant와의 관계는?", answer: "PolarQuant가 1단계 주 압축이고, QJL이 2단계 잔차 보정입니다." },
    ],
  },
  resources: {
    ...siteContent.en.resources,
    eyebrow: "리소스",
    title: "참고 링크와 자료",
    items: [
      { title: "공식 블로그", description: "Google Research 발표 글", url: "https://research.google/blog/turboquant-redefining-ai-efficiency-with-extreme-compression/", type: "blog" },
      { title: "TurboQuant 논문", description: "ICLR 2026 메인 논문 PDF", url: "https://arxiv.org/pdf/2504.19874", type: "paper" },
      { title: "PolarQuant 논문", description: "AISTATS 2026 극좌표 변환 논문", url: "https://arxiv.org/pdf/2502.02617", type: "paper" },
      { title: "QJL 논문", description: "AAAI 2025 양자화 JL 변환", url: "https://dl.acm.org/doi/10.1609/aaai.v39i24.34773", type: "paper" },
    ],
    communityTitle: "커뮤니티 논의",
    communities: [
      { name: "Reddit r/LocalLLaMA", description: "로컬 LLM 배포 관련 커뮤니티", url: "https://www.reddit.com/r/LocalLLaMA/comments/1s2su28/google_research_turboquant_redefining_ai/" },
      { name: "X (Twitter) #TurboQuant", description: "실시간 반응과 논의", url: "https://x.com/Prince_Canuma/status/2036611007523512397" },
      { name: "llama.cpp #20969", description: "주요 통합 토론 스레드", url: "https://github.com/ggml-org/llama.cpp/discussions/20969" },
    ],
  },
  footer: {
    paper: "논문",
    blog: "블로그",
    faq: "FAQ",
    copyright: "콘텐츠는 Google Research 공개 논문과 글을 바탕으로 구성되었습니다.",
  },
}

siteContent.ja = {
  ...siteContent.en,
  meta: {
    title: "TurboQuant - AI効率のための超高圧縮",
    description:
      "TurboQuant は、精度劣化なしで KV キャッシュを 3 ビットに圧縮し、メモリを 6 倍削減、アテンションを最大 8 倍高速化するオンラインベクトル量子化アルゴリズムです。",
  },
  nav: {
    ...siteContent.en.nav,
    items: [
      { label: "概要", href: "#overview" },
      { label: "背景", href: "#background" },
      { label: "原理", href: "#core" },
      { label: "結果", href: "#results" },
      { label: "導入", href: "#usage" },
      { label: "FAQ", href: "#faq" },
    ],
    paperLabel: "論文 PDF",
    languageLabel: "言語",
  },
  hero: {
    badge: "Google Research · 2026年3月公開",
    title: "TurboQuant",
    highlight: "AI 効率を再定義する",
    subtitle:
      "精度劣化なしの 3 ビット KV キャッシュ圧縮を実現し、メモリ使用量を 6 分の 1 に、アテンション速度を最大 8 倍にする新しいオンラインベクトル量子化アルゴリズムです。",
    primaryCta: "コア原理を見る",
    secondaryCta: "論文を読む",
    metrics: [
      { value: "6x+", label: "メモリ圧縮" },
      { value: "8x", label: "アテンション高速化 (H100)" },
      { value: "3-bit", label: "無損失圧縮" },
    ],
  },
  overview: {
    ...siteContent.en.overview,
    eyebrow: "コアイノベーション",
    title: "TurboQuant がゲームチェンジャーに見える理由",
    description:
      "TurboQuant は単なる圧縮テクニックではありません。情報理論的限界に近づきながら、データ非依存かつアクセラレータ向けに設計されたオンライン量子化フレームワークです。",
    traditionalTitle: "従来手法 (例: PQ)",
    traditionalItems: ["データセットごとの学習が必要", "正規化定数を多く保存する必要がある", "インデックス作成が遅い", "精度低下が目立つ"],
    turboItems: ["ランダム回転 + 極座標変換 (PolarQuant)", "1 ビット残差補正 (QJL) で正規化オーバーヘッドを除去", "インデックス時間はほぼ 0", "報告ベンチマークで 32 ビット基準と一致"],
    papers: [
      { venue: "AISTATS 2026", title: "PolarQuant", description: "正規化オーバーヘッドを消す極座標変換の中核", url: "https://arxiv.org/pdf/2502.02617", linkLabel: "arXiv: 2502.02617" },
      { venue: "AAAI 2025", title: "QJL", description: "1 ビットの不偏内積推定器", url: "https://dl.acm.org/doi/10.1609/aaai.v39i24.34773", linkLabel: "ACM DL" },
      { venue: "ICLR 2026", title: "TurboQuant", description: "ほぼ最適な歪みを実現する 2 段構成", url: "https://arxiv.org/pdf/2504.19874", linkLabel: "arXiv: 2504.19874" },
    ],
  },
  recent: {
    ...siteContent.en.recent,
    eyebrow: "最新動向",
    title: "TurboQuantを巡る最新の動き",
    description: "論文公開後、議論はすぐに実装、導入、長文脈推論のコスト構造へ広がりました。",
    latestTitle: "最新アップデート",
    latest: [
      {
        date: "2026年3月",
        title: "GPT-5.4で25分以内にTurboQuantのMLX実装が行われた",
        description: "ある開発者が、GPT-5.4を使って25分でTurboQuantのMLX実装を完了したと報告しました。",
        url: "https://x.com/mweinbach/status/2036786698315546728",
        linkLabel: "投稿を見る",
      },
      {
        date: "2026年3月",
        title: "Google ResearchがTurboQuantを正式に発表した",
        description: "公開内容では、TurboQuantをKVキャッシュ圧縮とベクトル検索の両方に使える、情報理論限界に近いオンライン量子化手法として位置づけました。",
      },
      {
        date: "2026年3月",
        title: "コミュニティはすぐに統合議論へ移った",
        description: "オープンソース側の議論は、llama.cppなどの推論スタックや関連ランタイムにTurboQuantをどう組み込むかへすぐ進みました。",
      },
      {
        date: "2026年3月",
        title: "関心は理論から導入経済性へ移った",
        description: "議論の中心は、3ビットの無損失KV圧縮が長文脈サービングのメモリ予算とレイテンシ予算を書き換えるかどうかになりました。",
      },
    ],
    impactTitle: "影響",
    impacts: [
      {
        label: "市場への影響",
        value: "$MUと$SNDKが寄り付きで大きく売られた",
        description: "$GOOGLによるTurboQuant公開を受けて、$MUと$SNDKは寄り付きで大きな圧力を受けました。",
      },
    ],
  },
  background: {
    ...siteContent.en.background,
    eyebrow: "技術背景",
    title: "なぜ TurboQuant が必要なのか",
    description: "ベクトル量子化の限界と KV キャッシュ圧力を短く整理します",
    vectorTitle: "ベクトル量子化の古典的な問題",
    vectorDescription: "ベクトル量子化は高次元ベクトルを小さなコードへ写像しつつ歪みを最小化します。理論下限は明確ですが、従来法はそこからまだ遠いままです。",
    distortionTitle: "歪みの式",
    distortionFootnote: "PQ のような従来法は、これらの下限よりまだかなり上にあります。",
    kvTitle: "LLM における KV キャッシュのボトルネック",
    kvDescription: "デコーダ型 Transformer では、各トークンについて Key/Value を保存します。コンテキストが長くなるほど、このコストがシステム全体を支配します。",
    memoryTitle: "メモリ見積もり",
    memoryStats: [
      { label: "128K コンテキスト + 7B モデル", value: "数十 GB" },
      { label: "総メモリに占める KV キャッシュ", value: "80%+" },
    ],
    solutionTitle: "TurboQuant が変える点",
    solutionItems: ["学習もファインチューニングも不要", "チャネルあたり 3.5 ビットで品質中立性", "LongBench が FP32 と一致", "エッジ機器での長文脈推論を現実的にする"],
    applicationTitle: "ベクトル検索への応用",
    applicationDescription: "FAISS のような ANN システムで、TurboQuant はインデックス作成コストをほぼゼロのままリコールを改善します。",
    applicationCards: [
      { title: "高いリコール", description: "GloVe で PQ と RabbiQ を上回る" },
      { title: "インデックス時間 ≈ 0", description: "大規模ベクトルストアに向く" },
    ],
  },
  core: {
    ...siteContent.en.core,
    eyebrow: "コア原理",
    title: "TurboQuant の 2 段アルゴリズム",
    description: "TurboQuant = 主圧縮の PolarQuant + 残差補正の QJL",
    tabs: { polar: "PolarQuant", qjl: "QJL", algorithm: "完全なアルゴリズム" },
    polar: {
      ...siteContent.en.core.polar,
      title: "PolarQuant: 極座標変換",
      description: "重要なのはブロックごとの正規化オーバーヘッドを消すことです。PolarQuant はランダム回転により、量子化しやすい集中分布へ座標を写します。",
      formulaTitle: "座標分布",
      steps: ["d 次元ベクトルをペアにして半径と角度へ分解する", "半径に対して再帰的に極座標変換を適用する", "集中した角度成分だけを量子化する"],
      advantagesTitle: "主要な利点",
      advantages: [
        { title: "ブロックごとの全精度定数が不要", description: "オーバーヘッドは 0 になります。" },
        { title: "4.2x を超えてもほぼ無損失", description: "従来ベースラインより強い挙動です。" },
        { title: "高次元でガウス的な座標分布", description: "Lloyd-Max のような最適スカラ量子化器をそのまま使えます。" },
      ],
    },
    qjl: {
      ...siteContent.en.core.qjl,
      title: "QJL: 1 ビットの不偏内積推定器",
      description: "Johnson-Lindenstrauss 射影で次元を下げ、その後 QJL は各射影成分の符号だけを保存します。",
      quantTitle: "量子化式",
      quantNote: "ここで S_ij ~ N(0,1)",
      dequantTitle: "復元式",
      proofTitle: "不偏性保証",
      proofNote: "分散上限: Var ≤ (π/2d) · ||y||² · ||r||²",
      reasonsTitle: "重要な理由",
      reasons: ["残差情報を 1 ビットで保存できる", "内積推定を不偏のまま保てる", "PolarQuant の第 1 段と自然に補完し合う"],
    },
    algorithm: {
      ...siteContent.en.core.algorithm,
      mseSubtitle: "MSE 最適化, b ビット",
      prodSubtitle: "内積最適化, b ビット",
      theoremTitle: "理論保証",
      theoremCards: [
        { label: "MSE 上限", value: "D_MSE ≤ (√3 · π/2) · 1/4^b", note: "下限との差は小さな定数因子です。" },
        { label: "内積歪み上限", value: "D_prod ≤ (π²√3 · ||y||²/d) · 1/4^b", note: "情報理論的限界に近いです。" },
      ],
    },
  },
  results: {
    ...siteContent.en.results,
    eyebrow: "実験結果",
    title: "数字がそのまま主張になる",
    description: "Gemma、Mistral、Llama-3.1-8B にまたがるベンチマーク",
    kvTitle: "KV キャッシュ圧縮ベンチマーク",
    kvCards: [
      { value: "50.06", label: "LongBench スコア", note: "3.5 ビット = フルキャッシュ" },
      { value: "100", label: "Needle In A Haystack", note: "4K から 104K まで完全" },
      { value: "6x+", label: "メモリ削減", note: "コストを大幅に低減" },
      { value: "8x", label: "アテンション速度", note: "H100 の 4 ビットモード" },
    ],
    benchmarkHeaders: ["ベンチマーク", "TurboQuant 3.5 ビット", "TurboQuant 2.5 ビット", "フルキャッシュ"],
    benchmarkRows: [
      ["LongBench", "50.06", "49.44", "50.06"],
      ["Needle In A Haystack", "100", "99.8", "100"],
      ["ZeroSCROLLS", "最高", "ほぼ最高", "ベースライン"],
      ["RULER", "最高", "ほぼ最高", "ベースライン"],
      ["L-Eval", "最高", "ほぼ最高", "ベースライン"],
    ],
    vectorTitle: "ベクトル検索ベンチマーク (GloVe d=200)",
    recallTitle: "1@k リコール",
    recallBars: [
      { label: "TurboQuant", value: "最高", width: "95%", primary: true },
      { label: "PQ", value: "低い", width: "75%" },
      { label: "RabbiQ", value: "中程度", width: "82%" },
    ],
    indexingTitle: "インデックス時間",
    indexingBars: [
      { label: "TurboQuant", value: "≈ 0", width: "2%", primary: true },
      { label: "PQ (コードブック学習)", value: "長い", width: "85%" },
      { label: "RabbiQ", value: "中程度", width: "60%" },
    ],
    compareTitle: "代替手法との比較",
    compareHeaders: ["手法", "学習必要", "不偏", "圧縮率", "高速化"],
    compareRows: [
      { highlight: true, cells: ["TurboQuant", "不要", "はい", "6x+", "8x"] },
      { cells: ["KIVI", "キャリブレーション", "いいえ", "4x", "4x"] },
      { cells: ["SnapKV", "ファインチューニング", "いいえ", "2-4x", "2-4x"] },
      { cells: ["DuQuant", "キャリブレーション", "部分的", "4x", "4x"] },
    ],
  },
  usage: {
    ...siteContent.en.usage,
    eyebrow: "導入ガイド",
    title: "論文から本番へ",
    description: "TurboQuant を実システムへ組み込む考え方",
    statusTitle: "現在の状況",
    statusDescription: "論文には理論と擬似コードがありますが、公式実装はまだ公開されていません。コミュニティでの統合作業はすでに始まっています。",
    statusItems: ["llama.cpp Discussion #20969 で統合案が追跡されている", "MLX では約 5x 圧縮と 99.5% の品質維持が報告されている", "2026 年 Q2 前後のオープンソース公開が広く期待されている"],
    stepsTitle: "実装スケッチ",
    deploymentTitle: "デプロイの要点",
    deploymentCards: [
      { title: "ハードウェア", description: "H100 と A100 が理想的です。論文の 8x 高速化は 4 ビットモードで報告されています。", icon: "server" },
      { title: "混合精度", description: "KV キャッシュに TurboQuant、重みに INT4 を使うと全体圧縮を最大化できます。", icon: "fp" },
      { title: "エッジ機器", description: "3 ビット KV キャッシュにより、モバイルで 32K+ コンテキストが現実味を帯びます。", icon: "phone" },
    ],
    challengesTitle: "実務上のリスクと対策",
    challenges: [
      { title: "ランダム回転のオーバーヘッド", description: "行列を事前生成して再利用すれば、オンライン負荷を抑えられます。" },
      { title: "残差ノルムの保存", description: "FP16 スカラー 1 つで足りるため、追加コストは小さいです。" },
    ],
    roadmapLabel: "推奨オープンソース経路",
    roadmapCode: "llama.cpp を fork → turboquant_quant カーネルを追加",
  },
  future: {
    ...siteContent.en.future,
    eyebrow: "展望",
    title: "TurboQuant が AI スタックをどう変えるか",
    impacts: [
      { title: "LLM 推論", description: "百万トークン級コンテキストのコストが大きく下がり、次世代スタックの標準機能になり得ます。", icon: "rocket" },
      { title: "ベクトルデータベース", description: "リアルタイム索引とサブミリ秒検索がより実現しやすくなります。", icon: "database" },
      { title: "エッジ AI", description: "モバイルや組み込み環境での長文脈推論が現実に近づきます。", icon: "phone" },
      { title: "マルチモーダル埋め込み", description: "同じ発想を画像や動画の埋め込み圧縮にも拡張できます。", icon: "image" },
      { title: "理論拡張", description: "外れ値処理と組み合わせれば、実用的な 2 ビット系にさらに近づけます。", icon: "atom" },
      { title: "コミュニティへの影響", description: "vLLM や Hugging Face などのエコシステムが素早く追随する可能性があります。", icon: "users" },
    ],
    timelineTitle: "想定タイムライン",
    timeline: [
      { badge: "Q2", title: "2026 Q2", description: "オープンソース実装とフレームワーク統合", primary: false },
      { badge: "Q4", title: "2026 Q4", description: "商用製品、まずはクラウド中心の可能性", primary: false },
      { badge: "27", title: "2027", description: "LLM 量子化標準として定着する可能性", primary: true },
    ],
    risk: "注意: ランダムシード処理が悪いとわずかなバイアスが生じる可能性がありますが、論文では高次元では無視できるとされています。",
  },
  faq: {
    ...siteContent.en.faq,
    title: "よくある質問",
    description: "最初に確認されることの多い質問",
    items: [
      { question: "TurboQuant に学習は必要ですか？", answer: "不要です。データ非依存でオンラインに動作するため、微調整やキャリブレーションは不要です。" },
      { question: "KIVI や通常の 4 ビット量子化と比べてどうですか？", answer: "KIVI はチャネル単位のキャリブレーションが必要ですが、TurboQuant は 3.5 ビットでより高い品質と高速なアテンションを報告しています。" },
      { question: "どのモデルをサポートしますか？", answer: "原理的には任意の Transformer です。Gemma、Mistral、Llama-3.1-8B での結果が示されています。" },
      { question: "コードはどこですか？", answer: "まだ公式公開はありません。現時点では論文と llama.cpp #20969 などのコミュニティ議論が主な参照先です。" },
      { question: "ベクトル検索でなぜ重要ですか？", answer: "インデックス負荷をほぼゼロに保ちながらリコールを改善できるため、大規模 ANN や RAG に向いています。" },
      { question: "本当に無損失ですか？", answer: "3.5 ビットでは長文脈ベンチマークで品質中立が報告され、2.5 ビットでは難しいケースでわずかな低下があります。" },
      { question: "必要なハードウェアは？", answer: "GPU に向いており、特に H100 で強いですが、CPU やモバイルでのソフトウェア実装も可能です。" },
      { question: "PolarQuant との関係は？", answer: "PolarQuant が第 1 段の主圧縮で、QJL が第 2 段の残差補正です。" },
    ],
  },
  resources: {
    ...siteContent.en.resources,
    eyebrow: "リソース",
    title: "参考リンクと資料",
    items: [
      { title: "公式ブログ", description: "Google Research の発表記事", url: "https://research.google/blog/turboquant-redefining-ai-efficiency-with-extreme-compression/", type: "blog" },
      { title: "TurboQuant 論文", description: "ICLR 2026 メイン論文 PDF", url: "https://arxiv.org/pdf/2504.19874", type: "paper" },
      { title: "PolarQuant 論文", description: "AISTATS 2026 極座標変換論文", url: "https://arxiv.org/pdf/2502.02617", type: "paper" },
      { title: "QJL 論文", description: "AAAI 2025 量子化 JL 変換", url: "https://dl.acm.org/doi/10.1609/aaai.v39i24.34773", type: "paper" },
    ],
    communityTitle: "コミュニティ議論",
    communities: [
      { name: "Reddit r/LocalLLaMA", description: "ローカル LLM 配備に関するコミュニティ", url: "https://www.reddit.com/r/LocalLLaMA/comments/1s2su28/google_research_turboquant_redefining_ai/" },
      { name: "X (Twitter) #TurboQuant", description: "継続中の反応と議論", url: "https://x.com/Prince_Canuma/status/2036611007523512397" },
      { name: "llama.cpp #20969", description: "主要な統合ディスカッション", url: "https://github.com/ggml-org/llama.cpp/discussions/20969" },
    ],
  },
  footer: {
    paper: "論文",
    blog: "ブログ",
    faq: "FAQ",
    copyright: "内容は Google Research の公開論文とブログに基づいています",
  },
}

siteContent.fr = {
  ...siteContent.en,
  meta: {
    title: "TurboQuant - Compression extrême pour l'efficacité IA",
    description:
      "TurboQuant est un algorithme de quantification vectorielle en ligne qui compresse le cache KV à 3 bits sans perte de précision, réduit la mémoire par 6 et accélère l'attention jusqu'à 8x.",
  },
  nav: {
    ...siteContent.en.nav,
    items: [
      { label: "Vue d'ensemble", href: "#overview" },
      { label: "Contexte", href: "#background" },
      { label: "Principe", href: "#core" },
      { label: "Résultats", href: "#results" },
      { label: "Usage", href: "#usage" },
      { label: "FAQ", href: "#faq" },
    ],
    paperLabel: "PDF de l'article",
    languageLabel: "Langue",
  },
  hero: {
    badge: "Google Research · publié en mars 2026",
    title: "TurboQuant",
    highlight: "Redéfinir l'efficacité de l'IA",
    subtitle:
      "Un nouvel algorithme de quantification vectorielle en ligne qui compresse le cache KV à 3 bits sans perte de qualité, réduit la mémoire par 6 et accélère l'attention jusqu'à 8x.",
    primaryCta: "Voir le principe",
    secondaryCta: "Lire l'article",
    metrics: [
      { value: "6x+", label: "compression mémoire" },
      { value: "8x", label: "accélération de l'attention (H100)" },
      { value: "3-bit", label: "compression sans perte" },
    ],
  },
  overview: {
    ...siteContent.en.overview,
    eyebrow: "Innovation centrale",
    title: "Pourquoi TurboQuant ressemble à un résultat de rupture",
    description:
      "TurboQuant n'est pas un simple outil de compression. C'est un cadre de quantification en ligne proche de la limite informationnelle, tout en restant data-oblivious et adapté aux accélérateurs.",
    traditionalTitle: "Méthodes classiques (par ex. PQ)",
  },
  recent: {
    ...siteContent.en.recent,
    eyebrow: "Dernières actualités",
    title: "Derniers développements autour de TurboQuant",
    description: "Après la publication de l'article, la discussion a vite basculé vers l'implémentation, le déploiement et l'économie de l'inférence long contexte.",
    latestTitle: "Dernières mises à jour",
    latest: [
      {
        date: "mars 2026",
        title: "Quelqu'un a réalisé une implémentation MLX de TurboQuant en 25 minutes avec GPT-5.4",
        description: "Un développeur a indiqué avoir finalisé une implémentation MLX de TurboQuant en 25 minutes avec GPT-5.4.",
        url: "https://x.com/mweinbach/status/2036786698315546728",
        linkLabel: "Voir la publication",
      },
      {
        date: "mars 2026",
        title: "Google Research a officiellement présenté TurboQuant",
        description: "La publication a présenté TurboQuant comme une méthode de quantification en ligne proche de l'optimum théorique pour la compression du cache KV et la recherche vectorielle.",
      },
      {
        date: "mars 2026",
        title: "Les discussions d'intégration communautaire ont démarré immédiatement",
        description: "Les échanges open source se sont rapidement concentrés sur la façon d'intégrer TurboQuant dans des piles d'inférence comme llama.cpp et des runtimes associés.",
      },
      {
        date: "mars 2026",
        title: "L'attention s'est déplacée de la théorie vers l'économie du déploiement",
        description: "Le point central est devenu la question de savoir si une compression KV 3 bits sans perte pouvait changer le budget mémoire et latence des services long contexte.",
      },
    ],
    impactTitle: "Impact",
    impacts: [
      {
        label: "Impact marché",
        value: "$MU et $SNDK ont été fortement touchés à l'ouverture",
        description: "Après la publication de TurboQuant par $GOOGL, $MU et $SNDK ont subi une forte pression dès l'ouverture.",
      },
    ],
  },
  background: {
    ...siteContent.en.background,
    eyebrow: "Contexte technique",
    title: "Pourquoi TurboQuant compte",
    description: "Un rappel rapide des limites de la quantification vectorielle et de la pression du cache KV",
    vectorTitle: "Le problème classique de la quantification vectorielle",
    vectorDescription: "La quantification vectorielle compresse des vecteurs de grande dimension tout en minimisant la distorsion. Les bornes théoriques sont claires, mais les méthodes classiques restent loin de ces limites.",
    distortionTitle: "Formules de distorsion",
    distortionFootnote: "Les approches classiques comme PQ restent sensiblement au-dessus de ces bornes.",
    kvTitle: "Le goulot d'étranglement du cache KV dans les LLM",
    kvDescription: "Dans les transformers décodeurs, chaque token ajoute une paire clé/valeur. Avec de longues fenêtres de contexte, ce coût mémoire devient dominant.",
    memoryTitle: "Estimation mémoire",
    memoryStats: [
      { label: "Contexte 128K + modèle 7B", value: "des dizaines de Go" },
      { label: "Part du cache KV dans la mémoire totale", value: "80%+" },
    ],
    solutionTitle: "Ce que TurboQuant change",
    solutionItems: ["Pas d'entraînement ni de finetuning", "3,5 bits par canal pour une qualité neutre", "LongBench au niveau de FP32", "Rend l'inférence long contexte plus réaliste en périphérie"],
    applicationTitle: "Applications en recherche vectorielle",
    applicationDescription: "Dans des systèmes ANN comme FAISS, TurboQuant améliore le rappel tout en gardant un coût d'indexation proche de zéro.",
    applicationCards: [
      { title: "Meilleur rappel", description: "Dépasse PQ et RabbiQ sur GloVe" },
      { title: "Temps d'indexation ≈ 0", description: "Adapté aux grands magasins de vecteurs" },
    ],
  },
  results: {
    ...siteContent.en.results,
    eyebrow: "Résultats",
    title: "Les chiffres portent l'argument",
    description: "Benchmarks sur Gemma, Mistral et Llama-3.1-8B",
    kvTitle: "Benchmarks de compression du cache KV",
    kvCards: [
      { value: "50.06", label: "Score LongBench", note: "3,5 bits = cache complet" },
      { value: "100", label: "Needle In A Haystack", note: "parfait de 4K à 104K" },
      { value: "6x+", label: "réduction mémoire", note: "forte baisse des coûts" },
      { value: "8x", label: "vitesse d'attention", note: "H100 en mode 4 bits" },
    ],
    benchmarkHeaders: ["Benchmark", "TurboQuant 3,5 bits", "TurboQuant 2,5 bits", "Cache complet"],
    benchmarkRows: [
      ["LongBench", "50.06", "49.44", "50.06"],
      ["Needle In A Haystack", "100", "99.8", "100"],
      ["ZeroSCROLLS", "meilleur", "presque meilleur", "baseline"],
      ["RULER", "meilleur", "presque meilleur", "baseline"],
      ["L-Eval", "meilleur", "presque meilleur", "baseline"],
    ],
    vectorTitle: "Benchmark de recherche vectorielle (GloVe d=200)",
    recallTitle: "Rappel 1@k",
    indexingTitle: "Temps d'indexation",
    compareTitle: "Comparaison avec les alternatives",
    compareHeaders: ["Méthode", "Entraînement", "Sans biais", "Compression", "Accélération"],
    compareRows: [
      { highlight: true, cells: ["TurboQuant", "Non", "Oui", "6x+", "8x"] },
      { cells: ["KIVI", "Calibration", "Non", "4x", "4x"] },
      { cells: ["SnapKV", "Finetuning", "Non", "2-4x", "2-4x"] },
      { cells: ["DuQuant", "Calibration", "Partiel", "4x", "4x"] },
    ],
  },
  usage: {
    ...siteContent.en.usage,
    eyebrow: "Usage",
    title: "Du papier à la production",
    description: "Comment intégrer TurboQuant dans une vraie stack",
    statusTitle: "État actuel",
    statusDescription: "L'article fournit la théorie et le pseudocode, mais il n'existe pas encore d'implémentation open source officielle. Le travail d'intégration communautaire a déjà commencé.",
    statusItems: ["llama.cpp Discussion #20969 suit les pistes d'intégration", "Des expériences MLX rapportent environ 5x de compression avec 99,5% de qualité conservée", "Une publication open source est largement attendue autour de T2 2026"],
    stepsTitle: "Esquisse d'implémentation",
    deploymentTitle: "Notes de déploiement",
    challengesTitle: "Risques pratiques et réponses",
    roadmapLabel: "Chemin open source recommandé",
    roadmapCode: "fork de llama.cpp → ajout d'un kernel turboquant_quant",
  },
  future: {
    ...siteContent.en.future,
    eyebrow: "Perspective",
    title: "Comment TurboQuant peut déplacer la pile IA",
    timelineTitle: "Calendrier attendu",
    risk: "Note de risque : une mauvaise gestion du seed aléatoire peut introduire un léger biais, mais l'article considère l'effet négligeable en grande dimension.",
  },
  faq: {
    ...siteContent.en.faq,
    title: "Questions fréquentes",
    description: "Les premières questions que posent ingénieurs et lecteurs",
  },
  resources: {
    ...siteContent.en.resources,
    eyebrow: "Ressources",
    title: "Références et liens",
    items: [
      { title: "Blog officiel", description: "Annonce Google Research", url: "https://research.google/blog/turboquant-redefining-ai-efficiency-with-extreme-compression/", type: "blog" },
      { title: "Article TurboQuant", description: "PDF principal ICLR 2026", url: "https://arxiv.org/pdf/2504.19874", type: "paper" },
      { title: "Article PolarQuant", description: "Article AISTATS 2026 sur la transformée polaire", url: "https://arxiv.org/pdf/2502.02617", type: "paper" },
      { title: "Article QJL", description: "Transformation JL quantifiée, AAAI 2025", url: "https://dl.acm.org/doi/10.1609/aaai.v39i24.34773", type: "paper" },
    ],
    communityTitle: "Discussion communautaire",
  },
  footer: {
    paper: "Article",
    blog: "Blog",
    faq: "FAQ",
    copyright: "Contenu basé sur les publications publiques de Google Research",
  },
}

siteContent.de = {
  ...siteContent.en,
  meta: {
    title: "TurboQuant - Extreme Kompression für AI-Effizienz",
    description:
      "TurboQuant ist ein Online-Verfahren zur Vektorquantisierung, das den KV-Cache ohne Genauigkeitsverlust auf 3 Bit komprimiert, den Speicherbedarf um 6x senkt und Attention um bis zu 8x beschleunigt.",
  },
  nav: {
    ...siteContent.en.nav,
    items: [
      { label: "Überblick", href: "#overview" },
      { label: "Hintergrund", href: "#background" },
      { label: "Prinzip", href: "#core" },
      { label: "Ergebnisse", href: "#results" },
      { label: "Einsatz", href: "#usage" },
      { label: "FAQ", href: "#faq" },
    ],
    paperLabel: "Paper PDF",
    languageLabel: "Sprache",
  },
  hero: {
    badge: "Google Research · veröffentlicht im März 2026",
    title: "TurboQuant",
    highlight: "AI-Effizienz neu definieren",
    subtitle:
      "Ein neues Online-Verfahren zur Vektorquantisierung, das 3-Bit-KV-Cache-Kompression ohne Genauigkeitsverlust liefert, den Speicherbedarf um 6x senkt und Attention um bis zu 8x beschleunigt.",
    primaryCta: "Kernidee ansehen",
    secondaryCta: "Paper lesen",
    metrics: [
      { value: "6x+", label: "Speicherkompression" },
      { value: "8x", label: "Attention-Beschleunigung (H100)" },
      { value: "3-bit", label: "verlustfreie Kompression" },
    ],
  },
  overview: {
    ...siteContent.en.overview,
    eyebrow: "Kerninnovation",
    title: "Warum TurboQuant wie ein Kategorienwechsel wirkt",
    description:
      "TurboQuant ist nicht nur ein weiterer Kompressionstrick. Es ist ein Online-Quantisierungsframework nahe an der informationstheoretischen Grenze und gleichzeitig datenunabhängig und accelerator-freundlich.",
    traditionalTitle: "Klassische Methoden (z. B. PQ)",
  },
  recent: {
    ...siteContent.en.recent,
    eyebrow: "Neueste Entwicklungen",
    title: "Aktuelle Dynamik rund um TurboQuant",
    description: "Nach der Veröffentlichung verlagerte sich die Diskussion schnell auf Implementierung, Deployment und die Kostenstruktur von Long-Context-Inferenz.",
    latestTitle: "Neueste Updates",
    latest: [
      {
        date: "März 2026",
        title: "Jemand setzte TurboQuant in 25 Minuten mit GPT-5.4 in MLX um",
        description: "Ein Entwickler berichtete, mit GPT-5.4 in 25 Minuten eine MLX-Implementierung von TurboQuant fertiggestellt zu haben.",
        url: "https://x.com/mweinbach/status/2036786698315546728",
        linkLabel: "Beitrag ansehen",
      },
      {
        date: "März 2026",
        title: "Google Research stellte TurboQuant offiziell vor",
        description: "Die Veröffentlichung positionierte TurboQuant als online arbeitendes Quantisierungsverfahren nahe am informationstheoretischen Limit für KV-Cache-Kompression und Vektorsuche.",
      },
      {
        date: "März 2026",
        title: "Community-Threads zur Integration starteten sofort",
        description: "Die Open-Source-Diskussion drehte sich schnell darum, wie TurboQuant in Inferenz-Stacks wie llama.cpp und verwandte Runtimes gelangen kann.",
      },
      {
        date: "März 2026",
        title: "Der Fokus verlagerte sich von Theorie auf Deployment-Ökonomie",
        description: "Im Zentrum stand nun die Frage, ob 3-Bit-KV-Kompression ohne Qualitätsverlust das Speicher- und Latenzbudget für lange Kontexte verändert.",
      },
    ],
    impactTitle: "Auswirkung",
    impacts: [
      {
        label: "Marktreaktion",
        value: "$MU und $SNDK gerieten zur Eröffnung stark unter Druck",
        description: "Nach der Veröffentlichung von TurboQuant durch $GOOGL wurden $MU und $SNDK zum Handelsstart deutlich getroffen.",
      },
    ],
  },
  background: {
    ...siteContent.en.background,
    eyebrow: "Technischer Hintergrund",
    title: "Warum TurboQuant relevant ist",
    description: "Ein kurzer Blick auf Grenzen der Vektorquantisierung und den Druck durch KV-Cache",
    vectorTitle: "Das klassische Problem der Vektorquantisierung",
    vectorDescription: "Vektorquantisierung komprimiert hochdimensionale Vektoren bei minimaler Verzerrung. Die theoretischen Untergrenzen sind klar, klassische Verfahren bleiben in der Praxis aber deutlich darüber.",
    distortionTitle: "Verzerrungsformeln",
    distortionFootnote: "Klassische Ansätze wie PQ liegen noch spürbar über diesen Grenzen.",
    kvTitle: "Der KV-Cache-Flaschenhals in LLMs",
    kvDescription: "In Decoder-Transformern entsteht pro Token ein Key/Value-Paar. Mit langen Kontextfenstern wird dieser Speicherbedarf schnell dominant.",
    memoryTitle: "Speicherschätzung",
    memoryStats: [
      { label: "128K Kontext + 7B Modell", value: "zig GB" },
      { label: "Anteil des KV-Caches am Gesamtspeicher", value: "80%+" },
    ],
    solutionTitle: "Was TurboQuant verändert",
    solutionItems: ["Kein Training und kein Finetuning", "3,5 Bit pro Kanal für Qualitätsneutralität", "LongBench auf FP32-Niveau", "Macht Long-Context-Inferenz auf Edge-Geräten realistischer"],
    applicationTitle: "Anwendungen in der Vektorsuche",
    applicationDescription: "In ANN-Systemen wie FAISS verbessert TurboQuant den Recall bei nahezu null Indexierungsaufwand.",
    applicationCards: [
      { title: "Höherer Recall", description: "Besser als PQ und RabbiQ auf GloVe" },
      { title: "Indexierungszeit ≈ 0", description: "Geeignet für große Vektorspeicher" },
    ],
  },
  results: {
    ...siteContent.en.results,
    eyebrow: "Ergebnisse",
    title: "Die Zahlen sind das Argument",
    description: "Benchmarks auf Gemma, Mistral und Llama-3.1-8B",
    kvTitle: "KV-Cache-Kompressionsbenchmarks",
    kvCards: [
      { value: "50.06", label: "LongBench-Score", note: "3,5 Bit = Full Cache" },
      { value: "100", label: "Needle In A Haystack", note: "perfekt von 4K bis 104K" },
      { value: "6x+", label: "Speicherreduktion", note: "starke Kostensenkung" },
      { value: "8x", label: "Attention-Geschwindigkeit", note: "H100 im 4-Bit-Modus" },
    ],
    benchmarkHeaders: ["Benchmark", "TurboQuant 3,5 Bit", "TurboQuant 2,5 Bit", "Full Cache"],
    benchmarkRows: [
      ["LongBench", "50.06", "49.44", "50.06"],
      ["Needle In A Haystack", "100", "99.8", "100"],
      ["ZeroSCROLLS", "best", "nahe best", "Baseline"],
      ["RULER", "best", "nahe best", "Baseline"],
      ["L-Eval", "best", "nahe best", "Baseline"],
    ],
    vectorTitle: "Vektorsuch-Benchmark (GloVe d=200)",
    compareTitle: "Vergleich mit Alternativen",
    compareHeaders: ["Methode", "Training nötig", "Unverzerrt", "Kompression", "Speedup"],
    compareRows: [
      { highlight: true, cells: ["TurboQuant", "Nein", "Ja", "6x+", "8x"] },
      { cells: ["KIVI", "Kalibrierung", "Nein", "4x", "4x"] },
      { cells: ["SnapKV", "Finetuning", "Nein", "2-4x", "2-4x"] },
      { cells: ["DuQuant", "Kalibrierung", "Teilweise", "4x", "4x"] },
    ],
  },
  usage: {
    ...siteContent.en.usage,
    eyebrow: "Einsatz",
    title: "Vom Paper in die Produktion",
    description: "Wie man TurboQuant in einen realen Stack integriert",
    statusTitle: "Aktueller Stand",
    statusDescription: "Das Paper liefert Theorie und Pseudocode, aber noch keine offizielle Open-Source-Implementierung. Die Community arbeitet bereits an Integrationen.",
    stepsTitle: "Implementierungsskizze",
    deploymentTitle: "Deployment-Hinweise",
    challengesTitle: "Praktische Risiken und Gegenmaßnahmen",
    roadmapLabel: "Empfohlener Open-Source-Pfad",
    roadmapCode: "llama.cpp forken → turboquant_quant-Kernel ergänzen",
  },
  future: {
    ...siteContent.en.future,
    eyebrow: "Ausblick",
    title: "Wie TurboQuant den AI-Stack verschieben könnte",
    timelineTitle: "Erwartete Timeline",
    risk: "Risikohinweis: Schlechte Handhabung des Zufalls-Seeds kann kleine Bias-Effekte erzeugen, die laut Paper in hoher Dimension aber vernachlässigbar sind.",
  },
  faq: {
    ...siteContent.en.faq,
    title: "Häufige Fragen",
    description: "Die wichtigsten Einstiegsfragen für Leser und Engineers",
  },
  resources: {
    ...siteContent.en.resources,
    eyebrow: "Ressourcen",
    title: "Referenzen und Links",
    items: [
      { title: "Offizieller Blog", description: "Ankündigung von Google Research", url: "https://research.google/blog/turboquant-redefining-ai-efficiency-with-extreme-compression/", type: "blog" },
      { title: "TurboQuant Paper", description: "ICLR-2026-Hauptpaper als PDF", url: "https://arxiv.org/pdf/2504.19874", type: "paper" },
      { title: "PolarQuant Paper", description: "AISTATS-2026-Paper zur Polartransformation", url: "https://arxiv.org/pdf/2502.02617", type: "paper" },
      { title: "QJL Paper", description: "Quantisierte JL-Transformation, AAAI 2025", url: "https://dl.acm.org/doi/10.1609/aaai.v39i24.34773", type: "paper" },
    ],
    communityTitle: "Community-Diskussion",
  },
  footer: {
    paper: "Paper",
    blog: "Blog",
    faq: "FAQ",
    copyright: "Inhalte basieren auf öffentlichen Papers und Blogposts von Google Research",
  },
}

siteContent.pt = {
  ...siteContent.en,
  meta: {
    title: "TurboQuant - Compressão extrema para eficiência em IA",
    description:
      "TurboQuant é um algoritmo de quantização vetorial online que comprime o cache KV para 3 bits sem perda de precisão, reduz a memória em 6x e acelera a atenção em até 8x.",
  },
  nav: {
    ...siteContent.en.nav,
    items: [
      { label: "Visão geral", href: "#overview" },
      { label: "Contexto", href: "#background" },
      { label: "Princípio", href: "#core" },
      { label: "Resultados", href: "#results" },
      { label: "Uso", href: "#usage" },
      { label: "FAQ", href: "#faq" },
    ],
    paperLabel: "PDF do artigo",
    languageLabel: "Idioma",
  },
  hero: {
    badge: "Google Research · lançado em março de 2026",
    title: "TurboQuant",
    highlight: "Redefinindo a eficiência em IA",
    subtitle:
      "Um novo algoritmo online de quantização vetorial que entrega compressão de cache KV em 3 bits sem perda de precisão, reduz a memória em 6x e acelera a atenção em até 8x.",
    primaryCta: "Ver o princípio central",
    secondaryCta: "Ler o artigo",
    metrics: [
      { value: "6x+", label: "compressão de memória" },
      { value: "8x", label: "aceleração da atenção (H100)" },
      { value: "3-bit", label: "compressão sem perda" },
    ],
  },
  overview: {
    ...siteContent.en.overview,
    eyebrow: "Inovação central",
    title: "Por que o TurboQuant parece mudar a categoria",
    description:
      "TurboQuant não é apenas mais um truque de compressão. É um framework de quantização online próximo do limite teórico, ao mesmo tempo data-oblivious e amigável para aceleradores.",
    traditionalTitle: "Métodos tradicionais (por exemplo, PQ)",
  },
  recent: {
    ...siteContent.en.recent,
    eyebrow: "Atualizações recentes",
    title: "Últimos movimentos em torno do TurboQuant",
    description: "Depois da publicação do artigo, a conversa rapidamente migrou para implementação, implantação e economia da inferência com contexto longo.",
    latestTitle: "Últimas atualizações",
    latest: [
      {
        date: "março de 2026",
        title: "Alguém concluiu uma implementação de TurboQuant em MLX em 25 minutos com GPT-5.4",
        description: "Um desenvolvedor relatou ter concluído uma implementação de TurboQuant em MLX em 25 minutos usando GPT-5.4.",
        url: "https://x.com/mweinbach/status/2036786698315546728",
        linkLabel: "Ver postagem",
      },
      {
        date: "março de 2026",
        title: "Google Research apresentou oficialmente o TurboQuant",
        description: "O lançamento enquadrou o TurboQuant como um método de quantização online próximo do ótimo teórico tanto para compressão de cache KV quanto para busca vetorial.",
      },
      {
        date: "março de 2026",
        title: "As discussões de integração na comunidade começaram imediatamente",
        description: "A conversa em código aberto avançou rápido para como levar o TurboQuant a stacks de inferência como llama.cpp e runtimes relacionados.",
      },
      {
        date: "março de 2026",
        title: "O foco mudou da teoria para a economia de implantação",
        description: "A questão central passou a ser se a compressão KV de 3 bits sem perda pode mudar o orçamento de memória e latência para serving com contexto longo.",
      },
    ],
    impactTitle: "Impacto",
    impacts: [
      {
        label: "Impacto de mercado",
        value: "$MU e $SNDK sofreram forte pressão na abertura",
        description: "Após o lançamento do TurboQuant pela $GOOGL, $MU e $SNDK foram atingidas de forma acentuada na abertura do mercado.",
      },
    ],
  },
  background: {
    ...siteContent.en.background,
    eyebrow: "Contexto técnico",
    title: "Por que o TurboQuant importa",
    description: "Um resumo rápido dos limites da quantização vetorial e da pressão do cache KV",
    vectorTitle: "O problema clássico da quantização vetorial",
    vectorDescription: "Quantização vetorial comprime vetores de alta dimensão minimizando a distorção. Os limites teóricos são claros, mas os métodos tradicionais ainda ficam longe deles.",
    distortionTitle: "Fórmulas de distorção",
    distortionFootnote: "Abordagens clássicas como PQ ainda ficam visivelmente acima desses limites.",
    kvTitle: "O gargalo do cache KV em LLMs",
    kvDescription: "Em transformers decodificadores, cada token adiciona um par key/value. Com contextos longos, esse custo de memória passa a dominar o sistema.",
    memoryTitle: "Estimativa de memória",
    memoryStats: [
      { label: "Contexto 128K + modelo 7B", value: "dezenas de GB" },
      { label: "Participação do cache KV na memória total", value: "80%+" },
    ],
    solutionTitle: "O que o TurboQuant muda",
    solutionItems: ["Sem treinamento e sem finetuning", "3,5 bits por canal para neutralidade de qualidade", "LongBench no nível do FP32", "Torna inferência de longo contexto mais viável em edge devices"],
    applicationTitle: "Aplicações em busca vetorial",
    applicationDescription: "Em sistemas ANN como FAISS, o TurboQuant melhora o recall mantendo o custo de indexação próximo de zero.",
    applicationCards: [
      { title: "Recall maior", description: "Supera PQ e RabbiQ em GloVe" },
      { title: "Tempo de indexação ≈ 0", description: "Adequado para grandes bases vetoriais" },
    ],
  },
  results: {
    ...siteContent.en.results,
    eyebrow: "Resultados",
    title: "Os números sustentam o argumento",
    description: "Benchmarks em Gemma, Mistral e Llama-3.1-8B",
    kvTitle: "Benchmarks de compressão do cache KV",
    kvCards: [
      { value: "50.06", label: "Pontuação LongBench", note: "3,5 bits = cache completo" },
      { value: "100", label: "Needle In A Haystack", note: "perfeito de 4K a 104K" },
      { value: "6x+", label: "redução de memória", note: "forte corte de custo" },
      { value: "8x", label: "velocidade de atenção", note: "H100 em 4 bits" },
    ],
    benchmarkHeaders: ["Benchmark", "TurboQuant 3,5 bits", "TurboQuant 2,5 bits", "Cache completo"],
    benchmarkRows: [
      ["LongBench", "50.06", "49.44", "50.06"],
      ["Needle In A Haystack", "100", "99.8", "100"],
      ["ZeroSCROLLS", "melhor", "quase melhor", "baseline"],
      ["RULER", "melhor", "quase melhor", "baseline"],
      ["L-Eval", "melhor", "quase melhor", "baseline"],
    ],
    vectorTitle: "Benchmark de busca vetorial (GloVe d=200)",
    compareTitle: "Comparação com alternativas",
    compareHeaders: ["Método", "Precisa de treino", "Sem viés", "Compressão", "Aceleração"],
    compareRows: [
      { highlight: true, cells: ["TurboQuant", "Não", "Sim", "6x+", "8x"] },
      { cells: ["KIVI", "Calibração", "Não", "4x", "4x"] },
      { cells: ["SnapKV", "Finetuning", "Não", "2-4x", "2-4x"] },
      { cells: ["DuQuant", "Calibração", "Parcial", "4x", "4x"] },
    ],
  },
  usage: {
    ...siteContent.en.usage,
    eyebrow: "Uso",
    title: "Do paper à produção",
    description: "Como integrar TurboQuant em uma stack real",
    statusTitle: "Estado atual",
    statusDescription: "O artigo traz a teoria e o pseudocódigo, mas ainda não há implementação open source oficial. O trabalho de integração na comunidade já começou.",
    stepsTitle: "Esboço de implementação",
    deploymentTitle: "Notas de implantação",
    challengesTitle: "Riscos práticos e mitigação",
    roadmapLabel: "Caminho open source sugerido",
    roadmapCode: "fazer fork do llama.cpp → adicionar um kernel turboquant_quant",
  },
  future: {
    ...siteContent.en.future,
    eyebrow: "Perspectiva",
    title: "Como o TurboQuant pode deslocar a stack de IA",
    timelineTitle: "Linha do tempo esperada",
    risk: "Nota de risco: tratamento ruim da semente aleatória pode introduzir pequeno viés, mas o artigo argumenta que o efeito é desprezível em alta dimensão.",
  },
  faq: {
    ...siteContent.en.faq,
    title: "Perguntas frequentes",
    description: "As primeiras perguntas que engenheiros e leitores costumam fazer",
  },
  resources: {
    ...siteContent.en.resources,
    eyebrow: "Recursos",
    title: "Referências e links",
    items: [
      { title: "Blog oficial", description: "Anúncio do Google Research", url: "https://research.google/blog/turboquant-redefining-ai-efficiency-with-extreme-compression/", type: "blog" },
      { title: "Artigo TurboQuant", description: "PDF principal do ICLR 2026", url: "https://arxiv.org/pdf/2504.19874", type: "paper" },
      { title: "Artigo PolarQuant", description: "Artigo AISTATS 2026 sobre transformação polar", url: "https://arxiv.org/pdf/2502.02617", type: "paper" },
      { title: "Artigo QJL", description: "Transformação JL quantizada, AAAI 2025", url: "https://dl.acm.org/doi/10.1609/aaai.v39i24.34773", type: "paper" },
    ],
    communityTitle: "Discussão da comunidade",
  },
  footer: {
    paper: "Artigo",
    blog: "Blog",
    faq: "FAQ",
    copyright: "Conteúdo baseado em artigos e posts públicos do Google Research",
  },
}

export function isSupportedLocale(locale: string): locale is Locale {
  return SUPPORTED_LOCALES.includes(locale as Locale)
}

export function getSiteContent(locale: Locale): SiteContent {
  return siteContent[locale]
}

export function getLocalePath(locale: Locale) {
  return locale === DEFAULT_LOCALE ? "/" : `/${locale}`
}
