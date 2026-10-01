# FoCo Websites — Site Documentation

> **Purpose**: Document all content, features, sitemap, and slug pages for a fresh infrastructure rebuild.
> **Scope**: Big-picture features and content only — no implementation details.

---

## Site Identity

| Property | Value |
|----------|-------|
| **Name** | FoCo Websites |
| **Tagline** | Custom websites for businesses that value design, performance, and a developer who actually answers the phone. |
| **Domain** | focowebsites.com |
| **Location** | Northern Colorado (Fort Collins area) |
| **Business Model** | Solo freelance web developer — design, build, launch, and ongoing care |

---

## Sitemap (All Routes)

### Primary Navigation (7 pages)
```
/                           → Home
/work                       → Selected Work (portfolio index)
/work/[project-name]        → Project Case Studies (dynamic)
/services                   → Services Overview
/services/custom-website-design
/services/website-redesign
/services/development-support
/services/maintenance-care-plans
/process                    → Process (6-step timeline)
/pricing                    → Pricing Models & Factors
/about                      → About / Freelancer Story
/faq                        → Frequently Asked Questions
/start-a-project            → Contact / Project Inquiry Form
```

### Sitemap.xml (17 static routes + dynamic work)
| Route | Priority / Notes |
|-------|------------------|
| `/` | Home — hero, featured work, services, process teaser, CTA |
| `/about` | Story, values, why freelancer, testimonials (placeholder) |
| `/faq` | 6 expansion-panel FAQs + link to inquiry |
| `/pricing` | 4 engagement models + 5 cost factors + CTA |
| `/process` | 6-step vertical timeline + CTA |
| `/services` | Grid of 4 service cards → detail pages |
| `/services/custom-website-design` | 4 feature cards + process teaser CTA |
| `/services/website-redesign` | 4 signal checkmarks + approach + CTA |
| `/services/development-support` | 4 capability cards + how support works + CTA |
| `/services/maintenance-care-plans` | 6 included items + philosophy + CTA |
| `/start-a-project` | 5-field inquiry form (name, email, budget, timeline, goals) |
| `/work` | Filterable portfolio grid (by tag) + CTA |
| `/work/andrews-accounting` | Case study: challenge/solution/results + related work |
| `/work/pantry-to-store` | Case study: challenge/solution/results + related work |
| `/work/project-three` | Case study: challenge/solution/results + related work |
| `/404` | Custom error page (wave icon, friendly copy, home/work links) |
| `/200` | SPA fallback |

---

## Page-by-Page Content Inventory

### `/` — Home
- **Hero**: Eyebrow "Northern Colorado web development", H1 "Let's build a website that *actually earns* its keep", subcopy, dual CTAs (Start a project / See my work)
- **Selected Work**: 3 featured projects (cards with accent bar, year, service, client, summary, link)
- **Services Overview**: "One developer, the whole job" — 4 service cards (icon, title, blurb, link)
- **Process Teaser**: Card with timeline (Discovery → Proposal → Design → Build → Launch → Support) + "See the full process" CTA
- **CTA Band**: "Have a project in mind?" → Start a project

### `/about` — About
- **Hero**: Eyebrow "About", H1 "A freelance web developer who treats your project like it's the only one", lede
- **Two-column**: Left = narrative (3 paragraphs), Right = "Why work with a freelancer" card (4 checkmark reasons)
- **Values Grid**: 4 cards (Websites must work / Plain talk / This is a practice / Built to last)
- **Testimonials**: Placeholder card with 2 example quotes (marked as placeholder)
- **CTA Band**: "Want to talk to the person who'd actually build it?"

### `/services` — Services Overview
- **PageHero**: Eyebrow "Services", title, lede
- **Grid**: 4 service cards (Custom website design / Website redesign / Development support / Maintenance & care plans) — each links to detail page
- **CTA Band**: "Not sure which direction fits?" → Start a project

### `/services/custom-website-design`
- **PageHero**: Eyebrow "Service · Custom website design", title, lede
- **What You Get**: 4 feature cards (Built around your goals / Fast on every screen / SEO from day one / Designed for growth)
- **Day-to-Day Card**: Process description + "See the process" CTA
- **CTA Band**: "Ready to start something new?"

### `/services/website-redesign`
- **PageHero**: Eyebrow "Service · Website redesign", title, lede
- **Signals List**: 4 checkmark items (looks dated / slow on phones / doesn't rank / hard to change)
- **Approach Card**: Audit → keep what works → modernize → "Get a redesign quote" CTA
- **CTA Band**: "Your current site is a lead, not a liability."

### `/services/development-support`
- **PageHero**: Eyebrow "Service · Development support", title, lede
- **Capabilities Grid**: 4 cards (Features & integrations / Fixes, fast / Second opinions / Done right)
- **How Support Works Card**: Block hours or retainer + "Ask about availability" CTA
- **CTA Band**: "Stuck on something right now?"

### `/services/maintenance-care-plans`
- **PageHero**: Eyebrow "Service · Maintenance & care plans", title, lede
- **Included Grid** (6 cards): Updates & refreshes / Security & backups / A human to call / Quiet improvements / Predictable spend / Long-term partner
- **Philosophy Card**: "A site is a machine — they need oil changes" + "Ask about care plans" CTA
- **CTA Band**: "Already have a site I didn't build?"

### `/work` — Portfolio Index
- **PageHero**: Eyebrow "Selected work", title, lede
- **Tag Filter**: Horizontal chips (All + unique tags from projects)
- **Project Grid**: All projects as cards (accent bar with year + services, client, summary, tags, "Read the case study" link)
- **Empty State**: "No projects match that tag yet."
- **CTA Band**: "Want results like these for your business?"

### `/work/[project-name]` — Case Study (Dynamic)
- **Back Link**: "← All work"
- **Header**: Year + services, Client name (H1), Headline (H6), Tags (chips), "Visit the site" button (if liveUrl)
- **Challenge / Solution**: Side-by-side cards (Challenge / Solution)
- **Results Card**: Primary background, accent checkmarks, list of results
- **More Work**: 3 related project cards
- **CTA Band**: "A project like this could be yours" → Start a project

### `/process` — Process
- **PageHero**: Eyebrow "The process", title, lede
- **Vertical Timeline**: 6 steps (Discovery, Proposal, Design, Build, Launch, Support) — each in a background card with numbered dot
- **CTA Band**: "The next step is a conversation"

### `/pricing` — Pricing
- **PageHero**: Eyebrow "Pricing", title, lede
- **Engagement Models** (4 cards): New build / Redesign / Care plan / Dev support — each links to relevant service page
- **What Moves the Number**: 5 factor rows (Scope, Content, Integrations, Timeline, Support after launch)
- **Final CTA**: "Get a straight answer" → Start a project

### `/faq` — FAQ
- **PageHero**: Eyebrow "FAQ", title, lede
- **Accordion Panels** (6):
  1. How long does a project take?
  2. What does a project cost?
  3. What technology do you build with?
  4. Who owns the site?
  5. Is it search-engine friendly?
  6. What happens after launch?
- **Footer Link**: "Something else on your mind? Ask it here." → Start a project

### `/start-a-project` — Inquiry Form
- **PageHero**: Eyebrow "Start a project", title, lede
- **Form Card** (max-width 640px):
  - Name (required)
  - Email (required, validated)
  - Budget (select: Under $2k / $2k–5k / $5k–10k / $10k+ / Not sure)
  - Timeline (select: ASAP / 1–2 months / 3+ months / Just exploring)
  - Goals (textarea, required, auto-grow, counter)
  - Submit button (accent, loading state)
- **Success State**: Green alert "Thanks — message sent. I'll reply within a day or two."
- **Error State**: Red alert with error message
- **Fallback**: mailto:hello@focowebsites.com if no endpoint configured

---

## Data Structures

### Project (Case Study)
```typescript
interface Project {
  slug: string              // URL slug: "andrews-accounting"
  client: string            // "Andrews Accounting LLC"
  headline: string          // One-line summary for cards
  year: number              // 2025
  services: string[]        // ["Custom website design", "Website build", "CMS setup & training"]
  tags: string[]            // ["Professional services", "Local business", "CMS"]
  summary: string           // Short blurb for cards
  challenge: string         // Full challenge description
  solution: string          // Full solution description
  results: string[]         // Bullet-point results
  liveUrl?: string          // Optional live site link
  accent: string            // Hex color for card header bar
}
```

**Current Projects (3)**:
1. `andrews-accounting` — Andrews Accounting LLC (2026) — primary: #0F766E
2. `pantry-to-store` — Pantry To Store (2026) — secondary: #14B8A6
3. `project-three` — Client Three (2025) — aqua: #99F6E4 (placeholder)

### Service
```typescript
interface Service {
  title: string
  blurb: string
  to: string              // Route path
  icon: string            // MDI icon name
}
```

**Services (4)**:
1. Custom website design → `/services/custom-website-design` — mdi-pencil-ruler
2. Website redesign → `/services/website-redesign` — mdi-brush-variant
3. Development support → `/services/development-support` — mdi-lifebuoy
4. Maintenance & care plans → `/services/maintenance-care-plans` — mdi-shield-check

### Inquiry Payload
```typescript
interface InquiryPayload {
  name: string
  email: string
  budget: string          // One of budgetOptions values
  timeline: string        // One of timelineOptions values
  goals: string
}
```

---

## Key Features & Functionality

### Visual / UX
- **Dark/Light Theme Toggle** — persisted via cookie (`foco-scheme`)
- **Scroll Reveal Animations** — IntersectionObserver-based, respects `prefers-reduced-motion`
- **Responsive Breakpoints** — Vuetify grid (xs/sm/md/lg/xl)
- **Typography** — Fraunces (display/headings) + Inter (body) via Google Fonts
- **Color System** — Primary teal (#0F766E), Secondary teal (#14B8A6), Accent golden amber (#B45309, hover #92400E), Aqua (#99F6E4)

### Design Tokens (from `nuxt.config.ts`)

**Light Theme**:
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | `#0F766E` | Primary actions, links, focus rings |
| `--color-secondary` | `#14B8A6` | Secondary actions, hover states |
| `--color-accent` | `#B45309` | CTAs, highlights, accent borders |
| `--color-accent-hover` | `#92400E` | CTA hover states |
| `--color-aqua` | `#99F6E4` | Subtle backgrounds, project card accents |
| `--color-surface` | `#FFFFFF` | Card backgrounds, elevated surfaces |
| `--color-background` | `#FAFAF9` | Page background |
| `--color-on-primary` | `#FFFFFF` | Text on primary |
| `--color-on-surface` | `#1C1917` | Body text (ink) |
| `--color-on-background` | `#1C1917` | Body text on background |
| `--color-outline` | `#E7E5E4` | Borders, dividers |

**Dark Theme**:
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | `#2DD4BF` | Primary actions, links, focus rings |
| `--color-secondary` | `#14B8A6` | Secondary actions, hover states |
| `--color-accent` | `#FB923C` | CTAs, highlights, accent borders |
| `--color-aqua` | `#5EEAD4` | Subtle backgrounds, project card accents |
| `--color-surface` | `#0B3B35` | Card backgrounds, elevated surfaces |
| `--color-background` | `#051F1C` | Page background |
| `--color-on-primary` | `#051F1C` | Text on primary |
| `--color-on-surface` | `#FAFAF9` | Body text |
| `--color-on-background` | `#FAFAF9` | Body text on background |
| `--color-outline` | `#1C1917` | Borders, dividers |

**Typography**:
| Token | Value |
|-------|-------|
| `--font-display` | `'Fraunces', serif` (headings, display) |
| `--font-body` | `'Inter', sans-serif` (body, UI) |
| `--font-weight-regular` | `400` |
| `--font-weight-medium` | `500` |
| `--font-weight-semibold` | `600` |
| `--font-weight-bold` | `700` |

**Spacing Scale** (Vuetify default, 8px base):
| Token | Value |
|-------|-------|
| `--space-1` | `4px` |
| `--space-2` | `8px` |
| `--space-3` | `12px` |
| `--space-4` | `16px` |
| `--space-5` | `20px` |
| `--space-6` | `24px` |
| `--space-8` | `32px` |
| `--space-10` | `40px` |
| `--space-12` | `48px` |
| `--space-16` | `64px` |

**Border Radius**:
| Token | Value |
|-------|-------|
| `--radius-sm` | `4px` |
| `--radius-md` | `8px` |
| `--radius-lg` | `12px` |
| `--radius-xl` | `16px` |
| `--radius-full` | `9999px` |

**Breakpoints** (Vuetify defaults):
| Token | Value |
|-------|-------|
| `--bp-xs` | `0` |
| `--bp-sm` | `600px` |
| `--bp-md` | `960px` |
| `--bp-lg` | `1280px` |
| `--bp-xl` | `1920px` |

These tokens should be defined in `assets/styles/tokens.css` as CSS custom properties, with light/dark variants switched via `[data-theme="dark"]` or `.theme-dark` on `<html>`.

### Navigation
- **Desktop NavBar**: 7 items (Work, Services, Process, Pricing, About, FAQ) + ThemeToggle + "Start a project" CTA button — **custom implementation needed** (previous Vuetify dropdown/nested structure issues)
- **Mobile Drawer**: Same 7 items + "Start a project" at bottom
- **Active State**: Highlights current section (exact or prefix match)
- **Footer**: Brand + tagline, "Start a project" + email link, copyright year

### Content Features
- **Project Filtering** — Tag-based filter chips on `/work` (client-side)
- **Breadcrumbs** — Via `definePageMeta({ breadcrumb })` on each page
- **SEO Meta** — Per-page `useSeoMeta()` with title, description, OG tags
- **Sitemap** — Auto-generated via `@nuxtjs/sitemap` with explicit routes list

### Forms / Interaction
- **Inquiry Form** — 5 fields (name, email, budget, timeline, goals), client-side validation, **web3forms + reCAPTCHA** submission
- **No CMS** — All content in TypeScript data files (`app/data/*.ts`)

### Performance / Technical
- **Static Generation** — `nuxt generate` with explicit prerender routes
- **Static Hosting Ready** — Outputs to `.output/public/`
- **No Client Hydration for Forms** — Form submission handled via composables
- **Vuetify 4** — Material Design 3 component library
- **Nuxt 4** — File-based routing, auto-imports, composables

---

## Content Gaps / Placeholders (To Address in Rebuild)

| Area | Status | Notes |
|------|--------|-------|
| Testimonials | Placeholder | 2 example quotes marked "[Placeholder — replace with real testimonials]" |
| Project 3 | Placeholder | Lorem ipsum content, example.com URL |
| About Page Personal Touch | Placeholder | "[placeholder: out on the trails / propping up the counter at a local coffee shop]" |
| Inquiry Endpoint | **web3forms + reCAPTCHA** | Configure in production |
| Analytics | None | Not needed for now |
| Legal Pages | Missing | No Privacy Policy, Terms of Service, Cookie Policy |
| Blog/Insights | Missing | No content marketing section |

---

## Rebuild Considerations

### Must-Preserve
- All 17 static routes + dynamic `/work/[slug]` — **verify Nuxt 4 dynamic route syntax in docs**
- Project data structure (slug-based, supports future additions)
- Service data structure (icon + route + blurb)
- Inquiry form fields (name, email, budget, timeline, goals) and **web3forms + reCAPTCHA** submission
- SEO meta per page
- Theme toggle with cookie persistence
- Scroll reveal (accessibility-compliant)

### Could Improve
- **Content Management** — **Not using a CMS**; keep file-based content (TS/MD) for simplicity and version control
- **Image Strategy** — **Placeholder images only initially** (free stock photos via Unsplash/Pexels); optimize later if needed
- **Analytics** — **Not needed for now**
- **Legal Pages** — Add Privacy Policy, Terms of Service, Cookie Policy
- **Blog/Insights** — Add `/insights` or `/blog` for SEO/content marketing
- **Contact Form Backend** — **web3forms with reCAPTCHA** (replaces mailto fallback)
- **Error Monitoring** — Not needed
- **Performance Budget** — Define and enforce

### Architecture Decisions to Make
1. **Framework**: **Nuxt 4** (stay) — familiar, provides global layout, file-based routing, static generation
2. **Styling**: **CSS Modules / Scoped Vue Styles** + global style tokens; **Vuetify included but selective** — only where it fits (forms, complex components like data tables, dialogs); no Tailwind (repetition concern)
3. **Content**: File-based (TS data files + Markdown for future blog) — no CMS
4. **Hosting**: **AWS S3 bucket + CloudFront + ACM certificates + Route 53** (matches your other sites)
5. **Forms**: **web3forms + reCAPTCHA** — serverless, no backend needed
6. **Analytics**: **None for now**
7. **Testing**: **Skip for now**
8. **Type Safety**: TypeScript strict mode — no runtime schema validation (Zod/Valibot) unless needed later
9. **Component Library**: Build minimal internal components (Button, Card, Input, PageHero, CtaBand) on top of CSS Modules; use Vuetify only for complex primitives
10. **CI/CD**: **GitHub Actions** → build → deploy to S3/CloudFront
11. **Monitoring**: Not needed
12. **Site Search**: Not needed
13. **Internationalization**: Not needed
14. **Cookies**: Only `foco-scheme` for theme; no consent banner needed

---

## Navigation Map (User Flows)

```
HOME
├── CTA → START A PROJECT
├── SEE MY WORK → WORK
│   ├── FILTER BY TAG
│   └── CLICK PROJECT → CASE STUDY
│       ├── VISIT LIVE SITE (external)
│       ├── MORE WORK → OTHER CASE STUDIES
│       └── CTA → START A PROJECT
├── SERVICES (cards) → SERVICE DETAIL PAGES (4)
│   └── EACH HAS CTA → START A PROJECT or PROCESS
├── PROCESS TEASER → PROCESS
│   └── CTA → START A PROJECT
├── ABOUT
│   └── CTA → START A PROJECT
├── PRICING
│   ├── MODEL CARDS → RELEVANT SERVICE PAGES
│   └── CTA → START A PROJECT
├── FAQ
│   └── LINK → START A PROJECT
└── FOOTER (all pages)
    ├── START A PROJECT
    └── EMAIL LINK
```

---

## SEO & Metadata Strategy

| Page | Title Template | Key Focus |
|------|----------------|-----------|
| Home | "Custom Websites & Web Development in Northern Colorado" | Brand + location + value prop |
| Work | "Selected Work" | Portfolio, case studies |
| Work/[slug] | "{Client} — Case Study" | Project-specific |
| Services | "Services" | Service overview |
| Service Detail | "{Service Name}" | Service-specific keywords |
| Process | "Process" | "How it works" intent |
| Pricing | "Pricing" | Cost transparency |
| About | "About" | Personal brand, trust |
| FAQ | "FAQ" | Long-tail questions |
| Start a Project | "Start a Project" | Conversion |

**Global**:
- `og:site_name`: "FoCo Websites"
- `og:locale`: "en_US"
- `twitter:card`: "summary"
- `theme-color`: #0F766E
- Canonical URLs via sitemap + Nuxt SEO

---

## Accessibility Notes

- Semantic HTML (h1-h3 hierarchy, landmarks)
- Focus-visible styles via Vuetify
- `prefers-reduced-motion` respected in scroll reveal
- ARIA labels on icon-only buttons (theme toggle, mobile menu)
- Form labels + validation messages
- Alt text on images (parallax, project cards)
- Color contrast: Primary teal on white and golden amber (`#B45309`) with white text both meet WCAG AA
- Skip links: Not currently implemented — consider adding

---

## Future Enhancements (Post-Scaffold Experiments)

These are visual/interaction experiments to prototype **after** initial scaffold + content are live. Each should be built as a removable feature flag.

| Idea | Description | Effort | Priority |
|------|-------------|--------|----------|
| **Layered Parallax Depth** | 3–4 semi-transparent layers (gradients, noise, shapes) moving at different scroll speeds via CSS custom properties. "Rockies layers" metaphor. | Low (~80 LOC) | High |
| **Scroll-Progress Line** | Fixed top accent line (`#B45309`) drawing horizontally as scroll progresses. Site-wide in layout. | Very Low (~30 LOC) | High |
| **Staggered Directional Entrance** | Cards enter from left (odd) / right (even) with rotation+scale, staggered 80ms. Extends `vScrollReveal`. | Low (~60 LOC) | Medium |
| **Ambient Canvas Background** | Low-opacity particles or gradient blobs in `<canvas>` behind hero; reacts to mouse drift + scroll speed. `ClientOnly`, respects reduced motion. | Medium (~150 LOC) | Low |

**Excluded**: Magnetic CTA button (cursor attraction on "Start a project" button).

**Implementation Notes**:
- All behind a `useVisualExperiments()` composable with feature flags
- `prefers-reduced-motion` = instant/none for all
- `ClientOnly` for canvas; SSR-safe
- Test on mobile performance before shipping

---

## Open Questions for Rebuild

1. **Image Pipeline**: Local optimized images vs. CDN? WebP/AVIF? Responsive sizes? (Start with placeholders, decide later)
2. **Performance Targets**: Lighthouse scores? Core Web Vitals thresholds?
3. **Deployment**: GitHub Actions confirmed; preview deployments? Branch protection?
4. **Security Headers**: CSP, HSTS, Referrer-Policy, etc.?
5. **Cookie Consent**: Needed? (Only `foco-scheme` cookie for theme — likely exempt)
6. **Content Authoring**: Developer-only for now (TS files); client CMS can be added later if needed
7. **Search**: Site search needed? (Algolia, Pagefind, or none)
8. **Legal Compliance**: GDPR/CCPA considerations for forms/analytics?

---

*Document generated from codebase audit — 2026-09-30*