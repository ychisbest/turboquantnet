import type { Metadata } from "next"

import { SitePageShell } from "@/components/site-page-shell"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read how TurboQuant.net uses analytics, advertising technologies, cookies, and third-party services.",
}

export default function PrivacyPage() {
  return (
    <SitePageShell
      eyebrow="Privacy"
      title="Privacy Policy"
      description="This page explains what data TurboQuant.net may collect, which third-party services are loaded, and how those services may use cookies or related technologies."
    >
      <div className="space-y-8 text-base leading-8 text-muted-foreground">
        <div className="rounded-2xl border border-border bg-card/30 p-8">
          <h2 className="text-2xl font-semibold text-foreground">Services used on this site</h2>
          <ul className="mt-4 space-y-3 list-disc pl-5">
            <li>Google AdSense for advertising and publisher account verification</li>
            <li>Microsoft Clarity for analytics and session behavior insight</li>
            <li>Vercel Analytics for aggregate site analytics</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-card/30 p-8">
          <h2 className="text-2xl font-semibold text-foreground">Advertising and cookies</h2>
          <p className="mt-4">
            Google may use cookies, device identifiers, IP address data, or similar technologies to
            serve ads, measure ad performance, and personalize advertising where permitted.
            Information collected through personalized advertising is handled according to Google’s
            privacy policies and user controls.
          </p>
          <p className="mt-4">
            Users can learn more about how Google uses information from sites or apps and can review
            ad personalization controls through Google account ad settings and related privacy
            documentation.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card/30 p-8">
          <h2 className="text-2xl font-semibold text-foreground">Analytics and log information</h2>
          <p className="mt-4">
            Analytics tools used on this site may collect technical information such as browser
            type, pages viewed, approximate location, referring URL, time on page, device type, and
            interaction events. This information is used to understand site usage and improve the
            editorial product.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card/30 p-8">
          <h2 className="text-2xl font-semibold text-foreground">Your choices</h2>
          <p className="mt-4">
            You may control cookies through browser settings and use Google’s ad settings to manage
            ad personalization preferences. Blocking some cookies may affect how the site or ads are
            delivered.
          </p>
        </div>
      </div>
    </SitePageShell>
  )
}

