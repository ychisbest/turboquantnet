"use client"

import { useState } from "react"

const ENDPOINT = "https://evidence-telemetry.ych8398527.workers.dev/wtp"

export function DevProbe() {
  const [choice, setChoice] = useState("Interactive KV-Cache VRAM & Cost Estimator")
  const [priceTier, setPriceTier] = useState("Free open tool (ads ok)")
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [busy, setBusy] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (busy || submitted) return
    setBusy(true)
    try {
      await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          site: "turboquant.net",
          probe_id: "ml_tool_v1",
          choice,
          price_tier: priceTier,
          email: email.trim(),
          note: typeof window !== "undefined" ? window.location.pathname : "",
        }),
      })
      setSubmitted(true)
    } catch {
      setBusy(false)
    }
  }

  return (
    <section className="px-6 py-8" data-no-smartlink>
      <div className="mx-auto max-w-5xl rounded-2xl border border-border bg-card/60 p-6">
        <h2 className="text-lg font-semibold text-foreground">
          Building with TurboQuant or KV-Cache compression? Help prioritize the next free utility
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Quick 1-click poll for ML engineers — tells us what actually saves time instead of guessing.
        </p>

        {submitted ? (
          <p className="mt-4 text-sm font-medium text-emerald-500">
            Vote recorded — thank you for helping shape what we build next.
          </p>
        ) : (
          <form onSubmit={onSubmit} className="mt-4 grid gap-3 md:grid-cols-4">
            <select
              aria-label="Most useful engineering utility"
              value={choice}
              onChange={(e) => setChoice(e.target.value)}
              className="rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground"
            >
              <option value="Interactive KV-Cache VRAM & Cost Estimator">KV-Cache VRAM &amp; Cost Estimator</option>
              <option value="vLLM / GGUF / MLX Benchmark CLI Snippets">vLLM / GGUF / MLX Benchmark Scripts</option>
              <option value="Cloud GPU $/tok Matrix (RunPod/Lambda/Modal)">Cloud GPU $/tok Matrix</option>
              <option value="Just reading the paper notes">Just reading paper notes</option>
            </select>

            <select
              aria-label="Preferred pricing model"
              value={priceTier}
              onChange={(e) => setPriceTier(e.target.value)}
              className="rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground"
            >
              <option value="Free open tool (ads ok)">Free tool</option>
              <option value="Sponsor/GPU affiliate comparisons helpful">GPU cost links helpful</option>
              <option value="Would pay $5-$15 once for CLI benchmark suite">Would pay $5-$15 for benchmark kit</option>
            </select>

            <input
              type="email"
              maxLength={120}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Optional email for launch ping"
              className="rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground"
            />

            <button
              type="submit"
              disabled={busy}
              className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 disabled:opacity-50"
            >
              {busy ? "Sending..." : "Submit Vote"}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
