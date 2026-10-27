/**
 * Case studies shown on /work and /work/[project-name].
 *
 * Every entry is a real shipped project. `accent` is the card header bar colour —
 * stay on the site palette (teal tints, or the brand amber) so the grid reads as one set.
 */

export interface Project {
  /** URL slug, e.g. `andrews-accounting` -> `/work/andrews-accounting/` */
  slug: string
  client: string
  headline: string
  year: number
  services: string[]
  tags: string[]
  summary: string
  challenge: string
  solution: string
  results: string[]
  /** The live site this project shipped (for SEO links to that site). */
  liveUrl?: string
  /** Accent used for the card header, e.g. a Tide tint per project. */
  accent: string
}

export const projects: Project[] = [
  {
    slug: 'andrews-accounting',
    client: 'Andrews Accounting LLC',
    headline: 'A clean, trustworthy site for a growing local accounting firm',
    year: 2026,
    services: ['Custom website design', 'Website build', 'CMS setup & training'],
    tags: ['Professional services', 'Local business', 'CMS'],
    summary:
      'A simple, professional site for a solo accounting practice — easy for the owner to update herself, with near-zero ongoing costs.',
    challenge:
      'The client, a sole proprietor, had a domain but no website. They needed a simple, professional site to send prospects to, with clear service info and an easy way to get in touch. They wanted it built quickly and affordably, with very low ongoing costs, and the ability to update content themselves without calling a developer.',
    solution:
      'I built a fast, secure static site with a friendly content editor (CMS) that lets the client update pages, services, and business info themselves — no developer needed. The contact form includes spam protection and sends messages straight to their inbox. The site is hosted on low-cost static infrastructure that costs pennies per month.',
    results: [
      'Page loads in under a second on mobile',
      'Hosting costs just pennies per month',
      'The client updates content themselves via a simple browser-based editor — no developer needed',
      'Content changes are tracked and reversible',
      'Contact form with spam protection sends messages straight to their inbox',
    ],
    liveUrl: 'https://andrewsaccountingllc.com',
    accent: '#0F766E',
  },
  {
    slug: 'pantry-to-store',
    client: 'Pantry To Store',
    headline: 'An inviting e-commerce site for a specialty food retailer',
    year: 2026,
    services: ['Custom website design', 'Development support'],
    tags: ['E-commerce', 'Retail'],
    summary:
      'A performant, product-focused storefront that showcases curated pantry goods and converts browsers into buyers.',
    challenge:
      'Pantry To Store was on a restrictive platform that limited design flexibility and made product management painful. They needed a site they could own and grow with, without platform fees eating margins.',
    solution:
      'I built a custom static frontend with a headless commerce layer, giving them full control over design and product data. The site is fast, SEO-friendly, and costs a fraction of their previous platform to run.',
    results: [
      'Page load times under 1s on mobile',
      'Organic traffic up after migration',
      'Platform fees eliminated — hosting costs are negligible',
    ],
    liveUrl: 'https://pantrytostore.com',
    accent: '#14B8A6',
  },
  {
    slug: 'davidwellsthedeveloper',
    client: 'David T. Wells',
    headline: 'A digital resume that shows how I work — not just what I shipped',
    year: 2026,
    services: ['Custom website design', 'Website build', 'Development support'],
    tags: ['Portfolio', 'Web development', 'Digital resume'],
    summary:
      'My own professional portfolio: a fast, accessible, single-page digital resume — a shareable alternative to a static PDF.',
    challenge:
      'A PDF resume flattens eight years of data-platform and full-stack work into a handful of bullets, and it goes stale the moment I ship something new. It also cannot show how I actually work — the architecture, the performance discipline, or the design decisions sitting behind the numbers. I wanted a portfolio that stays current, loads instantly, and works as a single link I can send anywhere a PDF attachment would go.',
    solution:
      'I designed and built it: a prerendered single-page digital resume carrying my full work history, key achievements, skills by category, and contact details — with the PDF kept alongside for the applications that still ask for one. It is entirely static, so there is no server, no database, and no runtime to patch. Every section is deep-linkable, the markup is semantic and works with a keyboard and screen reader, and every technology on the page is one I have shipped in production.',
    results: [
      'One shareable link that works anywhere a PDF attachment would — email signature, job application, or LinkedIn',
      'Prerendered to static HTML, so there is no server or runtime to maintain, patch, or pay for',
      'A downloadable PDF kept in step with the page for applications that still require an attachment',
      'Semantic markup, ARIA landmarks, and labeled controls — fully navigable by keyboard and screen reader',
      'Deep-linkable sections, so I can point straight at the work or the skills instead of making anyone scroll',
      'Every skill listed is one I have shipped and supported in production, not something I read about once',
    ],
    liveUrl: 'https://davidwellsthedeveloper.com',
    accent: '#B45309',
  },
  {
    slug: 'sisterhood-hockey',
    client: 'Sisterhood Hockey Experience',
    headline: 'A registration and waiver platform that lets volunteers run a hockey program instead of spreadsheets',
    year: 2026,
    services: ['Custom website design', 'Website build', 'Development support'],
    tags: ['Non-profit', 'Sports', 'Compliance', 'Django'],
    summary:
      'A custom Django platform for a Northern Colorado girls and women hockey nonprofit, replacing a broken Wix site with event registration, roster management, and legally defensible waiver capture.',
    challenge:
      "S.H.E. Hockey runs free monthly skates for girls and women of all ages. Their Wix site had a broken donate link, placeholder contact info, and no real registration system. Volunteers were managing sign-ups manually, and the waiver offered weak legal protection with no timestamp, IP, or signer capacity recorded. The new platform had to handle minors and adults, guardian signatures, COPPA and Colorado Privacy Act obligations, and zero training for volunteer operators.",
    solution:
      "I built a Django application with a public landing site, account-based registration flow, versioned waiver and code-of-conduct capture, admin roster tools, and Stripe Checkout donations. The registration flow reserves spots atomically to prevent overbooking, records typed signatures with timestamp, IP, user-agent and signer-capacity metadata, and supports in-person guardian signatures for players who cannot sign online. The admin is designed for non-technical volunteers, with CSV roster export and a reconcile screen for capacity counters.",
    results: [
      'Atomic capacity enforcement prevents double-booking free events that fill in minutes',
      'Every waiver acceptance stores timestamp, IP, user agent, signer capacity, and the exact document version',
      'In-person guardian signature path handles minor participants who cannot sign online',
      'Volunteer admin requires no training beyond Django permissions',
      'Stripe Checkout integration ready for donations without PCI scope',
    ],
    liveUrl: 'https://shehockey.focowebsites.com',
    accent: '#0D9488',
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}