import type { Metadata } from "next"

import { SitePageShell } from "@/components/site-page-shell"
import { siteProfile } from "@/lib/site-profile"

export const metadata: Metadata = {
  title: "Contact TurboQuant.net",
  description:
    "Contact the TurboQuant.net editorial team for corrections, feedback, or partnership inquiries.",
}

export default function ContactPage() {
  return (
    <SitePageShell
      eyebrow="Contact"
      title="Contact the editorial team"
      description="Use this page for article feedback, factual corrections, source clarifications, and partnership or citation requests."
    >
      <div className="space-y-8 text-base leading-8 text-muted-foreground">
        <div className="rounded-2xl border border-border bg-card/30 p-8">
          <h2 className="text-2xl font-semibold text-foreground">Primary contact</h2>
          <p className="mt-4">
            Email:{" "}
            <a className="text-primary hover:text-foreground transition-colors" href={`mailto:${siteProfile.email}`}>
              {siteProfile.email}
            </a>
          </p>
          <p className="mt-4">Owner: {siteProfile.legalName}</p>
          <p className="mt-4">Scope: editorial feedback, corrections, partnerships, and citations</p>
        </div>
      </div>
    </SitePageShell>
  )
}

