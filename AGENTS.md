# AGENTS.md

Instructions for AI coding agents working on this repository. Humans: see
[README.md](README.md) for the stack overview and [SITE_DOCUMENTATION.md](SITE_DOCUMENTATION.md)
for the full content, feature, and route inventory — that file is the source of
truth for what the site is.

## Commands

```bash
npm ci                 # install (Node from .nvmrc, currently 24)
npm run dev            # dev server on :3000
npm run generate       # static build -> .output/public (also symlinked as dist/)
npm run preview        # serve the static build locally
npm run lint           # eslint .
npm run typecheck      # nuxt typecheck (vue-tsc)
```

There is no test suite. Verification is `lint` + `typecheck` + `generate`, plus
measurement or screenshots when the change is visual.

- `lint` must exit with 0 **errors**. ~139 pre-existing warnings (attribute
  order, hyphenation) are tolerated; do not try to fix them in an unrelated change.
- `typecheck` exits 0 but prints a known warning: duplicated `useLayout`
  import (`vuetify` wins over `#app`). That is expected, not a failure.
- Prerendered output can be inspected under `.output/public/` without deploying.

## Conventions

- **Stay in scope.** Do exactly what was asked. Do not bundle drive-by fixes,
  refactors, or reformatting into a change; the user has explicitly asked for
  this before.
- **Theme**: light/dark, persisted in the `foco-scheme` cookie, applied as
  `data-theme` on `<html>`. Vuetify's theme instance is the state owner; the
  site defaults to dark (`defaultTheme` in `nuxt.config.ts`).
- **Colors, spacing, radii, breakpoints** are CSS custom properties in
  `app/assets/styles/tokens.css` (per-theme), never hardcoded in components.
- **Content** lives in `app/data/*.ts`, never inline in pages, so `/work` and
  the case studies stay in sync.
- **Decorative motion** is behind flags in `app/composables/useVisualExperiments.ts`
  and must respect `prefers-reduced-motion`.
- **Source of truth**: `SITE_DOCUMENTATION.md` for content/routes/features;
  update it in the same change when routes, content, or features shift.

## Commits

Conventional commits (`feat:`/`fix:`/`ci:`/`docs:`/`refactor:`/`chore:`) with a
subject line and a detailed body that explains *why*, what was measured, and any
trap discovered along the way. Match the style of the existing history. Only
commit when explicitly asked.

## Deployment

`.github/workflows/deploy.yml` runs on every push to `master` and on PRs:

1. **Build**: `npm ci` → typecheck → lint → generate → upload `.output/public/`.
2. **Deploy** (pushes to `master` only; PRs are build-gated but never deploy):
   AWS OIDC role (no stored keys) → three `s3 sync` passes → CloudFront
   invalidation of `/*`.

Push to `master` deploys. Verify with:

```bash
gh run watch <id> --exit-status   # after push
# then curl the changed route(s) on https://focowebsites.com and confirm markers
```

AWS cost ceiling: total spend (excluding the $0.50/mo Route 53 zone) must stay
well under $1.00/mo — check with the owner before adding anything that could
exceed it.

## Deploy workflow traps

- **S3 filter order is load-bearing**: `aws s3 sync` filters are evaluated in
  command-line order and the last match wins. The trailing
  `--exclude "_nuxt/*"` must stay **after** all `--include` flags, or the
  no-cache pass re-claims `_nuxt` JSON files the immutable pass already owns.
  The comment in `deploy.yml` documents this — keep it.
- `hCaptcha`'s `data-theme="light"` on `/start-a-project/` is the widget's own
  attribute, not `<html>` — never "fix" it.

## Theme / head traps

- **Never set `data-theme` as a static `useHead.htmlAttrs` value.** Static head
  entries are re-applied on every subsequent head patch and silently revert a
  toggle. Bind it reactively: `'data-theme': () => (isDark.value ? 'dark' : 'light')`
  in `app/app.vue`. This caused a shipped bug once; do not regress it.
- The attribute must be in the prerendered markup too, so a no-JS first paint
  shows the right theme with no flash.

## Visual / CSS traps

- **`text-shadow` inherits.** A halo rule that excludes `.base-card` still
  reaches card titles through a transparent wrapper (`a.work-card`,
  `a.service-card`) matching as a plain `<a>`. Opaque surfaces clear it with
  `html .page .base-card { text-shadow: none; }`.
- **The ambient wash is `position: sticky` and fragile.** Any ancestor of
  `.page` with `overflow != visible`, or with `transform`/`filter`/`perspective`/
  `backdrop-filter`/`will-change: transform`/`contain: paint`, silently kills or
  misplaces it — no error is thrown. `isolation: isolate` is safe. Do not wrap
  `<slot />` in a transformed or clipped container.
- **Parallax is re-measured by a `ResizeObserver`** because client-side
  navigation changes `.page`'s height without a window resize; a mount-only
  measurement goes stale. Travel uses a fixed `REFERENCE_VIEWPORTS = 3` so one
  depth table behaves identically on every page; pages taller than ~3 viewports
  exhaust travel and hold still (documented tradeoff).
- **`oversize` must exceed travel**: raising a layer's `depth` means raising
  `oversize` with it, or the layer runs out of image mid-scroll.
- Primary/accent text on the wash uses `--color-primary-wash` (darker teal);
  it is swapped in by redefining `--color-primary` on `html .page` and restored
  inside `.base-card`/`.base-button` (opaque). Keep contrast when editing.

## Measuring contrast (before claiming a color passes AA)

- Worst case = 10th/90th percentile of pixels 3–8px around each glyph, halo
  included, sampled on real renders in both themes — not a single computed
  value, and not an eyeball.
- Existing harness lives in `/tmp/opencode/` (`measure2.mjs`, `analyze.py`);
  it drives headless Chrome over CDP. Note: `WebSocket.send()` resolves to
  `m.result` directly; force a fresh compositor frame and tolerate trailing-slash
  routes (`/faq/`).
- Baseline numbers are recorded in `SITE_DOCUMENTATION.md` (worst ≥ 4.5:1 light
  and dark after the wash shipped). Re-measure after any color change.

## Tool gotchas

- The file-read tool mis-decodes `.webp`. Verify images by converting to PNG
  first (PIL) or reading dimensions programmatically; never trust a decoded
  WebP preview.
- No numpy in this environment; Pillow (with WebP) is available.
- `google-chrome` is installed for headless/CDP work; Node ≥ 22 has a global
  `WebSocket` for driving it.
