import type { Metadata } from "next"

import { SitePageShell } from "@/components/site-page-shell"
import { siteProfile } from "@/lib/site-profile"

export const metadata: Metadata = {
  title: "About TurboQuant.net",
  description:
    "Learn who runs TurboQuant.net, what the site publishes, and how its editorial analysis is produced.",
}

export default function AboutPage() {
  return (
    <SitePageShell
      eyebrow="About"
      title="Who runs TurboQuant.net"
      description="TurboQuant.net is an independent publication focused on TurboQuant, KV-cache compression, vector quantization, and the deployment economics of long-context AI systems."
    >
      <div className="space-y-8 text-base leading-8 text-muted-foreground">
        <div className="rounded-2xl border border-border bg-card/30 p-8">
          <h2 className="text-2xl font-semibold text-foreground">Editorial mission</h2>
          <p className="mt-4">{siteProfile.mission}</p>
        </div>

        <div className="rounded-2xl border border-border bg-card/30 p-8">
          <h2 className="text-2xl font-semibold text-foreground">How content is produced</h2>
          <p className="mt-4">{siteProfile.editorialProcess}</p>
          <p className="mt-4">
            The site is designed to help engineers and decision-makers understand not just the
            paper claims, but the implementation tradeoffs, workload sensitivity, and likely
            deployment impact of TurboQuant-style methods.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card/30 p-8">
          <h2 className="text-2xl font-semibold text-foreground">What the site publishes</h2>
          <ul className="mt-4 space-y-3 list-disc pl-5">
            <li>Original explainers derived from the public research context</li>
            <li>Independent benchmark interpretation and systems analysis</li>
            <li>Implementation notes for practitioners evaluating real integrations</li>
            <li>Source-linked article pages with explicit references</li>
          </ul>
        </div>
      </div>
    </SitePageShell>
  )
}

