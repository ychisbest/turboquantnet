import type { Metadata } from "next"

import { SitePageShell } from "@/components/site-page-shell"

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Review the terms of use, content disclaimer, and intellectual property position for TurboQuant.net.",
}

export default function TermsPage() {
  return (
    <SitePageShell
      eyebrow="Terms"
      title="Terms of Use"
      description="These terms govern your use of TurboQuant.net and clarify how the site's editorial content, references, and external links should be understood."
    >
      <div className="space-y-8 text-base leading-8 text-muted-foreground">
        <div className="rounded-2xl border border-border bg-card/30 p-8">
          <h2 className="text-2xl font-semibold text-foreground">Editorial content</h2>
          <p className="mt-4">
            TurboQuant.net publishes informational and analytical content. Articles reflect
            editorial interpretation of public source material and are not official statements from
            Google, any model provider, or any cited framework project.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card/30 p-8">
          <h2 className="text-2xl font-semibold text-foreground">No warranty</h2>
          <p className="mt-4">
            Content is provided on an as-is basis without warranty of completeness, suitability, or
            fitness for a particular engineering, legal, or commercial purpose. Readers should
            validate benchmark claims and implementation details independently.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card/30 p-8">
          <h2 className="text-2xl font-semibold text-foreground">External links and citations</h2>
          <p className="mt-4">
            The site links to external papers, blogs, and discussion threads for reference. Those
            resources are governed by their own terms and privacy policies. Cited trademarks and
            project names remain the property of their respective owners.
          </p>
        </div>
      </div>
    </SitePageShell>
  )
}

