# TurboQuant AdSense Approval Plan

## Goal

Make `turboquant.net` look like a complete, trustworthy, content-rich publisher site before re-submitting for AdSense review.

This plan is based on:

- Current codebase audit of this repo on 2026-03-30
- Google Publisher Policies: https://support.google.com/adsense/answer/1348688?hl=en
- Google privacy disclosure guidance: https://support.google.com/adsense/answer/140382?hl=en

## Current Risk Summary

The site is technically online, but it still looks like a single marketing/aggregation page rather than a mature publisher website. The main problems for AdSense review are:

1. `app/page.tsx` and [`components/home-page.tsx`](/home/ych/projects/workflow/turboquantnet/components/home-page.tsx) only render one long landing page.
2. There are no standalone `About`, `Contact`, `Privacy Policy`, or `Terms` pages.
3. The footer only links to an external paper, an external Google blog post, and the FAQ. It does not expose trust/legal pages.
4. Most of the site content appears to summarize public Google Research material, and the footer explicitly says content is based on public Google Research papers/posts. That creates a clear "replicated content / low added value" risk under Google Publisher Policies.
5. There is no article library, no editorial archive, no author pages, and no dated original posts that demonstrate ongoing publishing activity.
6. `app/sitemap.ts` only includes homepage locale variants. It does not reflect a real content inventory.
7. AdSense code is already loaded in [`app/layout.tsx`](/home/ych/projects/workflow/turboquantnet/app/layout.tsx), but the site foundation is not yet strong enough for review.
8. There is no visible privacy disclosure for AdSense cookies/data usage, while the site already loads Google AdSense and Microsoft Clarity.

## High-Level Recommendation

Do not treat this as an "add AdSense snippet and wait" problem.

First make the site qualify as a real publisher property:

- original content
- clear ownership
- legal/policy pages
- contactability
- crawlable structure
- enough indexable pages
- low ambiguity about source attribution and site purpose

Only after that should you re-submit.

## Execution Plan

### Phase 1: Fix the trust and policy baseline

#### Step 1. Add legal and trust pages

Create these routes:

- `app/about/page.tsx`
- `app/contact/page.tsx`
- `app/privacy/page.tsx`
- `app/terms/page.tsx`

Minimum content requirements:

- `About`: who runs the site, what TurboQuant.net publishes, editorial purpose, how content is produced
- `Contact`: real contact email, optional company/person name, response expectations
- `Privacy`: AdSense, analytics, cookies, IP/log collection, third-party services, user rights
- `Terms`: content disclaimer, acceptable use, intellectual property, external link disclaimer

Definition of done:

- All 4 pages are accessible from the header or footer
- Each page has unique title/description metadata
- English pages are complete first

#### Step 2. Update footer and navigation

Update:

- [`components/navigation.tsx`](/home/ych/projects/workflow/turboquantnet/components/navigation.tsx)
- [`components/footer.tsx`](/home/ych/projects/workflow/turboquantnet/components/footer.tsx)
- [`lib/site-content.ts`](/home/ych/projects/workflow/turboquantnet/lib/site-content.ts)

Add internal links for:

- About
- Contact
- Privacy
- Terms
- Articles or Insights

Definition of done:

- A reviewer can reach all trust/legal pages in one click
- Footer no longer looks like a thin landing-page footer

#### Step 3. Add explicit privacy disclosure for ads and analytics

Update the future privacy page to clearly disclose:

- Google AdSense is used
- Google may use cookies/web beacons/IP or identifiers for ad serving
- Microsoft Clarity is used for analytics/session behavior
- What data is collected
- How users can learn more or opt out where applicable

Also document these scripts already present in:

- [`app/layout.tsx`](/home/ych/projects/workflow/turboquantnet/app/layout.tsx)

Definition of done:

- Privacy page matches the actual scripts loaded on the site
- No hidden tracking/ads relative to the written policy

### Phase 2: Solve the biggest blocker: content quality

#### Step 4. Stop presenting the site as mostly repackaged Google material

Review and rewrite:

- homepage copy in [`lib/site-content.ts`](/home/ych/projects/workflow/turboquantnet/lib/site-content.ts)
- footer attribution in [`components/footer.tsx`](/home/ych/projects/workflow/turboquantnet/components/footer.tsx)

Actions:

- remove language that makes the site sound like a mirror or repackaging layer
- frame the site as original analysis, commentary, benchmarks, explainers, and implementation notes
- clearly cite external sources, but keep the main value in your own writing

Important:

Google Publisher Policies prohibit monetizing pages with copied or embedded content that lacks additional commentary or added value. Right now the site is too close to that line.

Definition of done:

- Homepage makes it obvious why this site adds value beyond the original paper/blog
- Footer copy no longer reads like a content disclaimer for republishing

#### Step 5. Create an actual article/content section

Add a content system, for example:

- `app/articles/page.tsx`
- `app/articles/[slug]/page.tsx`
- `content/articles/*.mdx` or a similar structure

Publish at least 8 to 15 original, indexable pages before reapplying. Suggested topics:

- TurboQuant explained in plain language
- How TurboQuant compares with QJL and PolarQuant
- Practical KV-cache memory calculators
- Benchmarks on different GPU budgets
- Deployment tradeoffs for 9B, 32B, 70B models
- Failure cases and accuracy loss scenarios
- Implementation notes from community efforts
- Long-context inference cost breakdowns

Each article should have:

- unique slug
- unique metadata
- author
- publish date
- last updated date
- original commentary
- references/citations section

Definition of done:

- The site is no longer a single-page property
- There is a visible, crawlable archive of original content

#### Step 6. Add author and editorial signals

Create either:

- `app/authors/[slug]/page.tsx`

Or a simpler author box component reused across article pages.

Minimum author fields:

- name
- short bio
- role or expertise
- links to profile/contact

Definition of done:

- Articles show a real author/editor identity
- The site has a visible editorial owner

### Phase 3: Improve crawlability and site completeness

#### Step 7. Expand sitemap and add robots metadata

Update:

- [`app/sitemap.ts`](/home/ych/projects/workflow/turboquantnet/app/sitemap.ts)

Add:

- `app/robots.ts`

Requirements:

- include all legal pages
- include article index
- include article detail pages
- avoid listing thin placeholder pages

Definition of done:

- Sitemap reflects the real information architecture
- Robots rules are explicit and production-safe

#### Step 8. Reduce review risk from thin locales

Current site ships these locales:

- `en`
- `zh`
- `ko`
- `ja`
- `fr`
- `de`
- `pt`

Problem:

If legal pages, article pages, and quality standards are not maintained for every locale, the non-English versions can weaken the review.

Recommended action:

- make English the review baseline first
- either fully localize the trust/legal/content pages, or temporarily reduce indexed locale surface until parity exists

Files involved:

- [`app/[locale]/page.tsx`](/home/ych/projects/workflow/turboquantnet/app/[locale]/page.tsx)
- [`lib/site-content.ts`](/home/ych/projects/workflow/turboquantnet/lib/site-content.ts)
- [`app/sitemap.ts`](/home/ych/projects/workflow/turboquantnet/app/sitemap.ts)

Definition of done:

- Every indexed locale has complete pages and non-thin content
- No locale looks auto-expanded just to increase page count

### Phase 4: Clean review signals around monetization

#### Step 9. Delay aggressive ad placement until after approval

Keep the account verification metadata if needed, but avoid designing pages around empty ad slots before the site has enough content.

Review:

- [`app/layout.tsx`](/home/ych/projects/workflow/turboquantnet/app/layout.tsx)

Decision:

- either keep the base AdSense loader only
- or temporarily remove it during content buildout and re-add when the site is ready

Definition of done:

- The site looks content-first, not ad-first
- There are no low-value pages carrying ads

#### Step 10. Add `ads.txt` when the domain is ready for serving

When AdSense is approved or when Google instructs you to do so, add:

- `public/ads.txt`

Use the publisher ID and standard Google seller line required by AdSense.

Definition of done:

- `https://turboquant.net/ads.txt` resolves correctly in production

### Phase 5: Final QA before re-submission

#### Step 11. Run a full manual review checklist

Before reapplying, verify:

- no broken internal links
- no empty sections
- no placeholder pages
- no "coming soon" content
- no thin article pages
- privacy page matches real tracking usage
- contact page has a real contact method
- footer includes trust/legal links
- homepage clearly explains original value
- articles are indexed in sitemap

#### Step 12. Re-submit only after the site has enough substance

Recommended readiness threshold:

- 8 to 15 strong original pages
- 4 baseline trust/legal pages
- stable navigation/footer
- complete privacy disclosure
- clear owner/contact identity
- no major thin or replicated-content risk

## Suggested Build Order In This Repo

1. Add `about/contact/privacy/terms` pages.
2. Wire those links into nav/footer and metadata.
3. Rewrite homepage/footer language to emphasize original analysis.
4. Build article index + article detail architecture.
5. Publish the first 8 original articles.
6. Add author blocks and citation sections.
7. Expand sitemap and add `robots.ts`.
8. Review locale scope and reduce thin locales if necessary.
9. Add `ads.txt` when monetization setup is actually ready.
10. Do final QA and then re-submit.

## What Is Missing Right Now

If the question is "what elements are still missing for AdSense approval", the shortest honest answer is:

- trust pages
- privacy disclosure
- contactability
- original content inventory
- editorial identity
- internal content architecture
- stronger crawl/index signals
- less replicated-source framing

Without solving those, the site is likely to be judged as low-value or not ready, even though the AdSense account code is already present.
