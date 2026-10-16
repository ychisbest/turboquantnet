import type { Metadata } from "next"
import Link from "next/link"

import { FaqJsonLd } from "@/components/faq-json-ld"
import { SitePageShell } from "@/components/site-page-shell"

const canonical = "https://turboquant.net/guide"

export const metadata: Metadata = {
  title: "How to Use TurboQuant – MLX, LM Studio, llama.cpp, vLLM Status",
  description:
    "Practical status guide: where TurboQuant shows up in vLLM, MLX, llama.cpp forks, and LM Studio requests—plus how to verify before you install.",
  alternates: { canonical },
  openGraph: {
    title: "How to Use TurboQuant – MLX, LM Studio, llama.cpp, vLLM Status",
    description:
      "Unofficial status matrix for local TurboQuant integrations. Always re-check upstream docs.",
    url: canonical,
  },
}

const faqItems = [
  {
    question: "How do I use TurboQuant today?",
    answer:
      "There is no single official Google binary. As of mid-2026 public signals: vLLM has merged TurboQuant KV-cache support (see v0.20.0 release notes); Apple Silicon users often look at community MLX packages; llama.cpp work lives mainly in community forks; LM Studio support is still a feature request until a backend ships it.",
  },
  {
    question: "Does LM Studio support TurboQuant?",
    answer:
      "Not as a finished first-party feature at the time we last checked. Open requests exist (e.g. lmstudio-bug-tracker #1719 for TurboQuant+ / llama.cpp flags, and mlx-engine #296). LM Studio typically inherits support when llama.cpp or its MLX engine ships it—re-check those issues before assuming UI toggles exist.",
  },
  {
    question: "Is there a TurboQuant MLX package?",
    answer:
      "Yes—community repositories such as github.com/manjunathshiva/turboquant-mlx advertise an MLX implementation (PyPI name often listed as turboquant-mlx-full). Treat install/convert commands as README-owned; they change.",
  },
  {
    question: "Where is TurboQuant on GitHub?",
    answer:
      "Google Research published the paper and blog; community code appears under multiple orgs/forks (vLLM upstream, MLX packages, llama.cpp forks such as TheTom/llama-cpp-turboquant). Search GitHub for “turboquant” and verify stars/activity/README before installing. Avoid confusing unrelated “turboquant” trading repos.",
  },
]

export default function GuidePage() {
  return (
    <>
      <FaqJsonLd items={faqItems} />
      <SitePageShell
        eyebrow="Local run status"
        title="How to use TurboQuant (status guide)"
        description="A practical, unofficial map of where TurboQuant shows up for local and server inference—MLX, LM Studio, llama.cpp forks, vLLM, and GitHub—without inventing install steps."
      >
        <div className="space-y-8 text-base leading-8 text-muted-foreground">
          <aside className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6 text-sm leading-7 text-foreground/90">
            <strong className="text-foreground">Unofficial + fast-moving.</strong> TurboQuant.net is
            not affiliated with Google. Integration status below was verified against public GitHub
            release/PR pages and community repos around the pack date.{" "}
            <em>Always</em> re-read the upstream README or release notes before you install—flags and
            package names change.
          </aside>

          <div className="rounded-2xl border border-border bg-card/30 p-8">
            <h2 className="text-2xl font-semibold text-foreground">Status matrix (high level)</h2>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[32rem] text-left text-sm">
                <thead>
                  <tr className="border-b border-border text-foreground">
                    <th className="py-2 pr-4 font-semibold">Runtime</th>
                    <th className="py-2 pr-4 font-semibold">Status</th>
                    <th className="py-2 font-semibold">How to verify</th>
                  </tr>
                </thead>
                <tbody className="align-top">
                  <tr className="border-b border-border/60">
                    <td className="py-3 pr-4 text-foreground">vLLM</td>
                    <td className="py-3 pr-4">
                      Merged upstream (PR #38479, 2026-04-15); called out in the{" "}
                      <strong>v0.20.0</strong> release notes as TurboQuant KV-cache support.
                    </td>
                    <td className="py-3">
                      Check current vLLM docs /{" "}
                      <code className="text-xs">--kv-cache-dtype</code> help for TurboQuant presets
                      on your installed version.
                    </td>
                  </tr>
                  <tr className="border-b border-border/60">
                    <td className="py-3 pr-4 text-foreground">MLX (Apple Silicon)</td>
                    <td className="py-3 pr-4">
                      Community package exists (
                      <a
                        className="text-primary underline-offset-4 hover:underline"
                        href="https://github.com/manjunathshiva/turboquant-mlx"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        manjunathshiva/turboquant-mlx
                      </a>
                      ). Not “Google official.”
                    </td>
                    <td className="py-3">Follow that repo&apos;s README for install/convert/serve.</td>
                  </tr>
                  <tr className="border-b border-border/60">
                    <td className="py-3 pr-4 text-foreground">llama.cpp</td>
                    <td className="py-3 pr-4">
                      Community forks such as{" "}
                      <a
                        className="text-primary underline-offset-4 hover:underline"
                        href="https://github.com/TheTom/llama-cpp-turboquant"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        TheTom/llama-cpp-turboquant
                      </a>{" "}
                      (and related TurboQuant+ work). Mainline merge status has been contested in
                      public trackers—do not assume stock llama.cpp binaries include it.
                    </td>
                    <td className="py-3">
                      Read the fork README for build flags / cache-type options; confirm against the
                      commit you actually build.
                    </td>
                  </tr>
                  <tr className="border-b border-border/60">
                    <td className="py-3 pr-4 text-foreground">LM Studio</td>
                    <td className="py-3 pr-4">
                      Feature requests open; not a finished first-party toggle when last checked.
                    </td>
                    <td className="py-3">
                      Watch lmstudio-bug-tracker #1719 and mlx-engine #296 (or newer successors).
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-foreground">Google official code drop</td>
                    <td className="py-3 pr-4">
                      Public face remains the paper + research blog. Do not expect an “official APK”
                      or Google Play binary named TurboQuant.
                    </td>
                    <td className="py-3">
                      Use{" "}
                      <Link href="/paper" className="text-primary underline-offset-4 hover:underline">
                        /paper
                      </Link>{" "}
                      for primary citations.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card/30 p-8">
            <h2 className="text-2xl font-semibold text-foreground">vLLM (server path)</h2>
            <p className="mt-4">
              If you already run vLLM ≥ the release that includes PR #38479 / the TurboQuant notes in{" "}
              <strong className="text-foreground">v0.20.0</strong>, look for KV-cache dtype presets
              related to TurboQuant in that version&apos;s CLI/docs (preset names have evolved across
              review iterations). Example discovery pattern:
            </p>
            <pre className="mt-4 overflow-x-auto rounded-xl border border-border bg-background/80 p-4 text-xs leading-6 text-foreground">{`# On the machine where vLLM is installed — verify locally
python -m vllm.entrypoints.cli.main --help 2>/dev/null | rg -i 'kv-cache|turbo'
# or read the release notes / docs for your exact version
`}</pre>
            <p className="mt-4 text-sm">
              We deliberately do <em>not</em> hard-code a single flag string here: PR discussions show
              preset renames. Copy from the docs that match your wheel.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card/30 p-8">
            <h2 className="text-2xl font-semibold text-foreground">MLX / Apple Silicon</h2>
            <p className="mt-4">
              Search interest in <em>turboquant mlx</em> / <em>mlx turboquant</em> is high. A concrete
              community project is{" "}
              <a
                className="text-primary underline-offset-4 hover:underline"
                href="https://github.com/manjunathshiva/turboquant-mlx"
                target="_blank"
                rel="noopener noreferrer"
              >
                manjunathshiva/turboquant-mlx
              </a>
              , which describes weight + KV-cache compression for MLX and points to a PyPI
              distribution. Install and convert flows belong in that README (including any{" "}
              <code className="text-xs">python -m turboquant_mlx.convert …</code> examples they publish).
            </p>
            <p className="mt-4 text-sm">
              LM Studio&apos;s MLX engine tracker has an open TurboQuant request (#296)—shipping there
              depends on engine/backends, not on this website.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card/30 p-8">
            <h2 className="text-2xl font-semibold text-foreground">
              llama.cpp, TurboQuant+, and “llama turboquant”
            </h2>
            <p className="mt-4">
              Queries like <em>llama turboquant</em> and <em>turboquant plus</em> usually mean
              community llama.cpp work (for example forks advertising{" "}
              <code className="text-xs">turbo3</code>/<code className="text-xs">turbo4</code> KV cache
              types). Those flags are <strong className="text-foreground">fork-specific</strong> until
              (or unless) they land in the binary you actually run.
            </p>
            <p className="mt-4">
              Practical check: clone/build the fork you trust → read its README for{" "}
              <code className="text-xs">--cache-type-k</code> /{" "}
              <code className="text-xs">--cache-type-v</code> (or successor) options → confirm with{" "}
              <code className="text-xs">--help</code> on that build. Do not paste flags from screenshots
              into an unrelated stock binary.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card/30 p-8">
            <h2 className="text-2xl font-semibold text-foreground">Models &amp; GitHub hygiene</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5">
              <li>
                <strong className="text-foreground">turboquant models:</strong> TurboQuant is primarily
                a <em>KV-cache / vector</em> quantizer in the research framing—not a new foundation
                model family. “Models” usually means “which HF/GGUF/MLX checkpoints work with a given
                integration.”
              </li>
              <li>
                <strong className="text-foreground">turboquant github:</strong> start from the paper
                citation, then verify engine PRs/repos. Unrelated older projects also use the name
                “turboquant” (e.g. trading bots)—check descriptions before{" "}
                <code className="text-xs">pip install</code>.
              </li>
              <li>
                <strong className="text-foreground">how to use turboquant:</strong> (1) read{" "}
                <Link href="/paper" className="text-primary underline-offset-4 hover:underline">
                  the paper page
                </Link>
                , (2) pick a runtime from the matrix above, (3) follow that runtime&apos;s docs for your
                GPU/Apple Silicon setup.
              </li>
            </ul>
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
            <p className="mt-8 text-sm">
              Back to the{" "}
              <Link href="/" className="text-primary underline-offset-4 hover:underline">
                TurboQuant overview
              </Link>{" "}
              or the{" "}
              <Link href="/paper" className="text-primary underline-offset-4 hover:underline">
                paper explainer
              </Link>
              .
            </p>
          </div>
        </div>
      </SitePageShell>
    </>
  )
}
