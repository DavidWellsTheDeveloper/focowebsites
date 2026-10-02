<script setup lang="ts">
import NavBar from '~/components/layout/NavBar.vue'
import Footer from '~/components/layout/Footer.vue'
import ThemeToggle from '~/components/layout/ThemeToggle.vue'
import MobileDrawer from '~/components/layout/MobileDrawer.vue'
import { pageParallaxLayers } from '~/data/parallax'
import { useParallax } from '~/composables/useParallax'
import { useVisualExperiments } from '~/composables/useVisualExperiments'

const drawer = ref(false)

const { isEnabled } = useVisualExperiments()
const parallaxEnabled = isEnabled('pageParallax')

// The scene is the whole content area rather than any one section, so a single scroll
// position drives every layer from the top of the document to the footer.
const pageEl = ref<HTMLElement | null>(null)

if (parallaxEnabled) {
  useParallax(
    pageEl,
    pageParallaxLayers.map((layer, index) => ({ index, depth: layer.depth })),
  )
}

interface NavItem {
  label: string
  to?: string
  exact?: boolean
}

const navItems: NavItem[] = [
  { label: 'Work', to: '/work' },
  { label: 'Services', to: '/services' },
  { label: 'Process', to: '/process' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About', to: '/about' },
  { label: 'FAQ', to: '/faq' },
]

const currentYear = new Date().getFullYear()
</script>

<template>
  <div class="layout">
    <header class="layout__header">
      <div class="container layout__header-inner">
        <NuxtLink to="/" class="layout__logo" aria-label="FoCo Websites - Home">
          <span class="layout__logo-mark" aria-hidden="true">
            <span class="layout__logo-mark-text">Fo</span>
          </span>
          <span class="layout__logo-text">FoCo Websites</span>
        </NuxtLink>

        <nav class="layout__nav" aria-label="Main navigation">
          <NavBar :items="navItems" />
        </nav>

        <div class="layout__actions">
          <ThemeToggle />
          <BaseButton
            variant="accent"
            size="lg"
            to="/start-a-project"
            class="layout__cta"
          >
            Start a project
          </BaseButton>

          <button
            class="layout__menu-btn"
            @click="drawer = true"
            aria-label="Open menu"
            :aria-expanded="drawer"
          >
            <VIcon icon="mdi-menu" size="1em" />
          </button>
        </div>
      </div>
    </header>

    <MobileDrawer :items="navItems" v-model="drawer" />

    <main class="layout__main" id="main-content">
      <div ref="pageEl" class="page">
        <!-- Pinned wash. Decorative, hence aria-hidden, and clipped to the viewport so
             the layers can travel without exposing an edge. See app/data/parallax.ts. -->
        <div v-if="parallaxEnabled" class="page__wash" aria-hidden="true">
          <div
            v-for="(layer, index) in pageParallaxLayers"
            :key="layer.id"
            class="page__layer"
            :class="`page__layer--${layer.id}`"
            :style="{
              '--layer-src': `url(${layer.src})`,
              '--layer-src-mobile': `url(${layer.mobileSrc})`,
              '--layer-oversize': `${layer.oversize}%`,
              '--layer-tone': layer.tone,
              '--parallax-y': `var(--parallax-y-${index}, 0px)`,
            }"
          />
        </div>

        <slot />
      </div>
    </main>

    <Footer :currentYear="currentYear" />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.layout__header {
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
  background-color: var(--color-background);
  border-bottom: 1px solid var(--color-outline);
}

.layout__header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);
  padding: var(--space-4) 0;
}

.layout__logo {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  text-decoration: none;
  color: var(--color-on-background);
  flex-shrink: 0;
}

.layout__logo-mark {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--color-primary);
  color: var(--color-on-primary);
  border-radius: var(--radius-lg);
  font-family: var(--font-display);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-lg);
}

.layout__logo-text {
  font-family: var(--font-display);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-xl);
  color: var(--color-on-background);
  display: none;
}

.layout__nav {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.layout__actions {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex-shrink: 0;
}

.layout__cta {
  display: none;
}

.layout__menu-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: none;
  background: transparent;
  color: var(--color-on-background);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.layout__menu-btn:hover {
  background-color: var(--color-outline);
}

.layout__menu-btn:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

.layout__main {
  flex: 1;
}

/* The wash is pinned rather than fixed: sticky keeps it under the viewport for the
   length of the document without a fixed-position element's mobile keyboard and
   scrollbar jank, and without being broken by an ancestor that happens to establish a
   containing block. The negative bottom margin cancels the height it takes up in flow,
   so the sections that follow start exactly where they would have anyway.

   Two things would silently break this if added to any ancestor of .page: an `overflow`
   other than visible (the browser would stick it to that box instead of the viewport, and
   that box does not scroll), and a `transform` / `filter` / `perspective` /
   `backdrop-filter` / `contain: paint` (these redefine where position is measured from).
   `isolation: isolate` is none of those — it only creates the stacking context that lets
   the wash sit at z-index: -1 behind the copy instead of escaping to the root. */
.page {
  position: relative;
  isolation: isolate;
}

.page__wash {
  position: sticky;
  top: 0;
  z-index: -1;
  height: 100vh;
  margin-bottom: -100vh;
  overflow: hidden;
  pointer-events: none;
  background-color: var(--color-background);
}

/* The layers are deliberately oversized on their top and bottom edges so they can travel
   without exposing a gap. See app/data/parallax.ts for the stack. */
.page__layer {
  position: absolute;
  left: 0;
  right: 0;
  top: calc(var(--layer-oversize) * -1);
  height: calc(100% + var(--layer-oversize) * 2);
  background-color: var(--layer-tone);
  background-image: var(--layer-src);
  background-size: cover;
  background-position: center;
  transform: translate3d(0, var(--parallax-y), 0);
  will-change: transform;
}

.page__layer--far {
  opacity: var(--wash-opacity-far);
}

.page__layer--deep {
  opacity: var(--wash-opacity-deep);
}

.page__layer--near {
  opacity: var(--wash-opacity-near);
}

/* Below 768px the viewport is much taller than it is wide, so a landscape scaled to
   cover would crop away most of its width. The portrait crops keep the composition
   intact. */
@media (max-width: 767px) {
  .page__layer {
    background-image: var(--layer-src-mobile);
    will-change: auto;
  }
}

/* Distance softens. The back layers are blurred rather than merely stacked so the wash
   reads as depth instead of as three pictures laid on top of each other. */
.page__layer--far {
  filter: blur(2px);
}

.page__layer--deep {
  filter: blur(1px);
}

/* Scrim. The wash runs behind every section on the site, so it is a flat veil rather
   than a radial one: a radial pinned to the viewport would leave the top and bottom of
   each screen scrimmed only lightly, and text sits at both. */
.page__wash::after {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--page-scrim);
}

@media (min-width: 768px) {
  .layout__logo-text {
    display: inline;
  }

  .layout__cta {
    display: inline-flex;
  }

  .layout__menu-btn {
    display: none;
  }
}

@media (min-width: 1024px) {
  .layout__header-inner {
    padding: var(--space-5) 0;
  }
}
</style>