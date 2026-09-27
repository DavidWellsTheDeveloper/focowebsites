# Project Requirements

> Working document — continue to add to this as decisions are made. Sections marked **[OPEN]** need decisions before implementation.

---

## 1. Project Overview

- **Working title:** FoCo Websites
- **One-line description:** Marketing site for a freelance web developer, built to convert already-interested visitors into paying clients for custom website projects.
- **Status:** Draft / Defining
- **Last updated:** 2026-09-21

---

## 2. Business Requirements

### 2.1 Goals & Purpose
- **Primary goal:** Land paying clients for custom website projects.
- Visitors are already somewhat interested (warm traffic), so the site's job is to convert interest into inquiries/contacts rather than top-of-funnel awareness.

### 2.2 Target Audience
- Prospective clients actively considering hiring a developer for a custom website.
- Likely local (Fort Collins area — "FoCo") and/or small-to-medium businesses.

### 2.3 Core Functionality
- Site map / pages per earlier planning (see §4 — list to be confirmed by owner).
- Fun and elegant visual styling.
- Engaging, persuasive copy throughout.
- Strong SEO, including links to (and from) other websites the developer has worked on.
- Portfolio of past work.
- Should-have features (nice to have, phased).

### 2.4 Non-Functional Business Needs
- Uptime expectations, performance goals, SEO requirements, accessibility target.
- Budget constraints, timeline.

### 2.5 Content
- Fully **static** content, generated at build time with Nuxt's latest LTS release.
- Owner is the developer themselves — likely the sole content maintainer.
- No CMS planned for now.

### 2.6 Success Metrics
- **[DEFERRED]** Skipped for now — to be revisited post-launch.

---

## 3. Technical Requirements

### 3.1 Framework & Stack **[RESOLVED 2026-09-21]**
- **Framework:** Nuxt 4 (latest stable, `nuxt@^4.5`), fully static generation (`nuxi generate`).
- Rendering mode: static pre-render with SSR for SEO; output goes to `.output/public`.
- Language: TypeScript.
- UI: **Vuetify 4** via `vuetify-nuxt-module` (theming, components, dark mode out of the box). Icons: `@mdi/font` (MDI).
- State management: none needed — props + local component state.
- Content: hardcoded in page components; single typed data file (`app/data/projects.ts`) only for case-study routes (`/work/[project-name]`).
- SEO: `@nuxtjs/sitemap` (build-time `sitemap.xml`), `robots.txt` referencing it, per-page `useSeoMeta`.
- Fonts: CDN-hosted Google Fonts — **Fraunces** (display serif) + **Inter** (body) — decided 2026-09-21.

### 3.2 Deployment & Hosting (AWS)

#### Architecture Target
- S3 bucket for static assets (private; public access only via CloudFront Origin Access Control).
- CloudFront CDN for edge delivery, HTTPS, caching, and error/404 handling.
- ACM certificate for TLS (free).
- Route 53 for DNS — custom domain: **focowebsites.com**.
- Region: **[OPEN] — use the same region already used elsewhere in the AWS account.**

#### WAF — Decision: NOT INCLUDED
- **Cost:** nowhere near free — ~$5/mo per Web ACL + ~$1/mo per rule + ~$0.60 per 1M requests inspected. A minimal useful setup lands around **$8–13/mo**. Fails the budget constraint.
- **Value:** managed rule groups (OWASP Core Rule Set), rate limiting, bot control, IP/geo blocking. For a fully static marketing site with no dynamic endpoints or logins, the attack surface is minimal — no SQLi/XSS/app-layer targets exist, and CloudFront + free AWS Shield Standard already absorb basic DDoS. The one genuinely useful WAF control (throttling the /start-a-project form) is better handled by a spam-protected form service.
- **Rec:** skip WAF for launch. Revisit only if traffic or abuse pressure materially changes.

#### Caching Strategy (Recommendation)
- **Hashed build assets** (`/_nuxt/*.…[content-hash]…`) → `Cache-Control: public, max-age=31536000, immutable`. Content-addressed filenames change on every build, so caching forever is safe.
- **HTML pages** (`/`, `/index.html`, generated routes) → short TTL (`max-age=60`), so deploys propagate fast; enforce correctness with a `/*` CloudFront invalidation after each deploy.
- **Non-hashed images/static files** → `max-age=86400` (1 day).
- CloudFront: default caching behavior, compression enabled (gzip/Brotli) — free.
- 404 handling: CloudFront custom error response mapping `404 → /404.html` with a 404 status, so S3 can stay private.

#### Cost Guidance
- **Hard constraint:** total AWS cost, excluding the Route 53 hosted zone ($0.50/mo), must stay **well under $1.00/mo**.
- Achieved by fully static deploys: S3 storage + CloudFront egress for a low-traffic site cost pennies; ACM certs are free; WAF and other metered services are excluded.
- Any feature with an expected cost above that band **must be checked with the owner first**.

#### Deployment Automation **[OPEN]**
- Expected shape: `nuxi generate` → `aws s3 sync` (with per-prefix cache-control headers) → CloudFront cache invalidation.
- CI host/trigger to be decided (e.g., GitHub Actions, free tier).

### 3.3 Environment & Configuration
- Node.js 26.x, npm 11.x (package manager: npm). Confirmed on dev machine.
- Theme (light/dark) restored via SSR client hints (`prefers-color-scheme` + `foco-scheme` cookie) — no flash of wrong theme.
- Form delivery: `runtimeConfig.public.inquiryEndpoint`. When empty, `/start-a-project` falls back to a pre-filled `mailto:`. **[OPEN]** Decide the actual endpoint (e.g., Formspree free tier).

### 3.4 SEO & Performance
- Metadata per page via `useSeoMeta`; dynamic titles via template.
- `@nuxtjs/sitemap` → `sitemap.xml`; `robots.txt` references it.
- Core Web Vitals targets: TBD after Lighthouse pass.
- Analytics: **none for now** (decision 2026-09-21).

### 3.5 Monitoring & Observability
- Uptime checks, error tracking (Sentry?), logging.

---

## 4. Site Structure / Page Inventory

> Routes use Nuxt dynamic segment notation (e.g. `/work/[project-name]`).

- `/` — Home: pitch + proof + CTA
- `/services/` — services overview + links to sub-services
  - `/services/custom-website-design/`
  - `/services/website-redesign/`
  - `/services/development-support/`
  - `/services/maintenance-care-plans/`
- `/work/` — Selected Work index
  - `/work/[project-name]/` — case study template (dynamic)
- `/process/` — Discovery > Proposal > Design > Build > Launch > Support
- `/pricing/` — no hard numbers; engagement models + cost factors
- `/about/` — story, who you are, why contract, testimonials
- `/faq/` — timeline, cost, tech, ownership, SEO, support
- `/start-a-project/` — conversion form (budget range, timeline, goals)
- `/404` — custom 404 page (styled to match site, with wayfinding to valid pages)

### Navigation
- Primary nav **[RESOLVED]**: Work · Services · Process · Pricing · About · FAQ, plus an accent CTA button "Start a project". Mobile drawer includes the same.
- Footer: brand blurb, Start a project link, `hello@focowebsites.com`, copyright.

---

## 5. Design & Branding

- Tone: **fun and elegant** (per business requirements).
- Palette **[RESOLVED 2026-09-21]**: **Option A — "Tide"** (teal/aqua analogous + orange accent): deep `#0F766E` · mid `#14B8A6` · light aqua `#99F6E4` · accent `#F97316` · paper `#FAFAF9` · ink `#1C1917`. Dark theme: lighter teals (`#2DD4BF`/`#5EEAD4`), orange `#FB923C`, deep teal-black surfaces (`#0B3B35`/`#051F1C`). See `palette.html` artifact.
- Typography **[RESOLVED]**: Fraunces (display serif) + Inter (body), CDN-hosted Google Fonts.
- Dark mode **[RESOLVED]**: both light + dark with system-preference restore.
- **[OPEN]** Logo / brand assets, reference sites / inspiration, responsive breakpoint targets. See §9.

---

## 6. Data & Content Sources **[PARTIAL — mostly resolved]**

- Content lives **directly in page components** (owner's choice, confirmed 2026-09-21).
- Sole exception: `/work/[project-name]/` case studies use a typed data file (`app/data/projects.ts`) since they power a dynamic route + the /work index; entries are currently **sample data** and must be replaced with real projects.
- Forms: `/start-a-project` uses a `useInquiry` composable posting to `runtimeConfig.public.inquiryEndpoint` (e.g., Formspree), falling back to `mailto:`. Endpoint provider/account **still open** (§9).

---

## 7. Edge Cases & Other Concerns
- Multi-language: no (single-language site).
- Dark mode / theme variant: **both, system-preference aware** (resolved).
- Custom 404 page built (`app/error.vue` → prerendered `404.html`, wired to CloudFront error handling).
- Accessibility: WCAG AA assumed as target — **[OPEN]** confirm.
- Legal compliance: privacy policy / terms of service **not yet created** — likely needed once the form collects data. **[OPEN]**. Google Fonts are CDN-hosted (IP-leak consideration noted; low-traffic site).

---

## 8. Milestones & Timeline **[OPEN]**
- Phase 1: [e.g., scaffold, design, build] — dates
- Phase 2: [content]
- Phase 3: [launch, DNS cutover, analytics verified]

---

## 9. Open Questions / Action Items

Answered so far (2026-09-21): title · page inventory · Nuxt 4 + static + TS · **Vuetify 4 + MDI + sitemap module** · content in components (typed file only for case studies) · dark mode both · **Tide palette + Fraunces/Inter fonts** · AWS topology (no WAF) · domain focowebsites.com · region to match existing account · caching strategy · <$1/mo cost band · no analytics · custom 404 built.

Still open:

- [ ] **Region:** which region does the owner already use elsewhere in their AWS account?
- [ ] **Form delivery:** which actual endpoint serves `/start-a-project` (Formspree free tier recommended)? Also spam protection set-up.
- [ ] **Case-study content:** replace the 3 sample projects in `app/data/projects.ts` with real projects (this also provides the "links to other sites" SEO requirement).
- [ ] **Legal pages:** privacy policy / terms before collecting form submissions?
- [ ] **Logo / brand assets:** existing, or ephemeral "Fo" monogram until later?
- [ ] **Reference sites / inspiration:** for tuning tone ("fun and elegant")?
- [ ] **Contact channel:** beyond the form — add visible email/phone?
- [ ] **Accessibility:** confirm WCAG AA as target; run a Lighthouse/a11y pass.
- [ ] **CI/CD host:** repo + pipeline location (GitHub + GitHub Actions?).
- [ ] **AWS infrastructure-as-code:** Terraform/CloudFormation/CDK vs console, and deploy script for `s3 sync` + invalidation.
- [ ] **Milestones:** target date for launch (drives phasing in §8)?

---

## 10. Change Log
- 2026-09-21 — Initial draft created; Nuxt + static-on-AWS direction established.
- 2026-09-21 — Business requirements defined (client acquisition for freelance work); working title set to FoCo Websites; static Nuxt LTS + TS-preferred confirmed; AWS cost guidance added (free/near-free, escalate otherwise); success metrics deferred.
- 2026-09-21 — Site map / page inventory captured (§4): home, services (title + 4 sub-services), work + case-study template, process, pricing, about, faq, start-a-project.
- 2026-09-21 — Architecture decisions: domain focowebsites.com; region to match existing account; WAF excluded (cost/value analysis added); caching strategy defined; <$1/mo total cost constraint (excl. $0.50 hosted zone); analytics deferred/skipped; custom 404 added; color palette options A–D added (§5).
- 2026-09-21 — **Project scaffolded.** Nuxt 4.5 (Vite/Rolldown, TS), Vuetify 4 + vuetify-nuxt-module + @mdi/font, @nuxtjs/sitemap. Tide palette (light + dark themes, SSR client-hint restore), Fraunces + Inter (CDN). All sitemap pages built with placeholder copy; custom 404; case-study dynamic route via `app/data/projects.ts` (sample data). Static build passes (`nuxi generate` → 34 routes + `sitemap.xml`). Content approach: components + typed data file. Form wired to configurable endpoint w/ mailto fallback.