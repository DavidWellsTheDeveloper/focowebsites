# FoCo Websites

Marketing site for a freelance web developer in Northern Colorado. Static, generated with
Nuxt, deployed to AWS. See [SITE_DOCUMENTATION.md](SITE_DOCUMENTATION.md) for the full
content, feature, and route inventory — that is the source of truth for what the site is.

## Stack

| Concern | Choice |
|---------|--------|
| Framework | Nuxt 4, TypeScript, full static generation (`nuxt generate`) |
| UI | Vuetify 4 + MDI, alongside project-owned components in `app/components/ui` |
| Content | File-based — typed data files in `app/data`, no CMS |
| Fonts | Fraunces (display) + Inter (body) via Google Fonts |
| SEO | `@nuxtjs/sitemap`, per-page `useSeoMeta` |
| Hosting | S3 + CloudFront + ACM + Route 53, deployed by GitHub Actions |

## Commands

```bash
npm install
npm run dev         # dev server on :3000
npm run generate    # static build -> .output/public
npm run preview     # serve the static build locally
npm run lint
npm run typecheck
```

## Layout

```
app/
  assets/styles/    tokens.css (light/dark design tokens), globals.css
  components/
    layout/         NavBar, MobileDrawer, ThemeToggle, Footer
    ui/             project-owned primitives: Button, Card, Chip, Input
  composables/      useTheme, useInquiry, useScrollReveal, useParallax, ...
  data/             site, services, projects, parallax — typed content
  pages/            file-based routes, incl. work/[projectName].vue
```

## Conventions

- Theme is light/dark, persisted in the `foco-scheme` cookie, applied as `data-theme` on
  `<html>` and switched in `tokens.css`. Vuetify's theme instance is the state owner.
- Colors, spacing, radii, and breakpoints are CSS custom properties in `tokens.css`, not
  hardcoded values in components.
- Decorative motion lives behind flags in `app/composables/useVisualExperiments.ts`, and
  respects `prefers-reduced-motion`.
- Content changes go in `app/data/*.ts`, not inline in pages, so `/work` and the case
  studies stay in sync.

## Deployment

`.github/workflows/deploy.yml` builds, generates, syncs hashed assets to S3 as immutable,
syncs HTML/XML/JSON as no-cache, then invalidates CloudFront. Credentials come from AWS
OIDC — no stored keys.