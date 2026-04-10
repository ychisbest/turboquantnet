import type { Metadata } from "next"

import { SitePageShell } from "@/components/site-page-shell"
import partnerLinks from "@/links.json"

type PartnerLink = {
  html: string
}

const links = partnerLinks as PartnerLink[]

export const metadata: Metadata = {
  title: "Partner Links",
  description: "Collection of partner links published on TurboQuant.net.",
}

export default function LinksPage() {
  return (
    <SitePageShell
      eyebrow="Links"
      title="Partner Links"
      description="This page lists the partner links assigned specifically to TurboQuant.net."
    >
      <div className="space-y-6 text-base leading-8 text-muted-foreground">
        <div className="rounded-2xl border border-border bg-card/30 p-8">
          <p>
            Only the links reserved for this project are shown here. The original HTML snippets are
            preserved so the link wording stays consistent with the source file.
          </p>
        </div>

        {links.map((link, index) => (
          <article key={index} className="rounded-2xl border border-border bg-card/30 p-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Link {index + 1}
            </p>
            <div
              className="[&_a]:font-semibold [&_a]:text-primary [&_a]:underline-offset-4 [&_a]:hover:underline"
              dangerouslySetInnerHTML={{ __html: link.html }}
            />
          </article>
        ))}
      </div>
    </SitePageShell>
  )
}
