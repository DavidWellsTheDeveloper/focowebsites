/**
 * Case studies shown on /work and /work/[project-name].
 *
 * Real projects first; any remaining placeholder entries are marked.
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
    year: 2025,
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
    year: 2024,
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
    slug: 'project-three',
    client: 'Client Three',
    headline: 'At vero eos et accusamus et iusto odio dignissimos ducimus',
    year: 2025,
    services: ['Custom website design', 'Development support'],
    tags: ['Creative', 'Portfolio'],
    summary:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.',
    challenge:
      'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.',
    solution:
      'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.',
    results: [
      'At vero eos et accusamus et iusto odio dignissimos ducimus',
      'Quis autem vel eum iure reprehenderit qui in ea voluptate',
      'Temporibus autem quibusdam et aut officiis debitis',
    ],
    liveUrl: 'https://example.com/project-three',
    accent: '#99F6E4',
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}