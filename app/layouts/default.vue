<script setup lang="ts">
import NavBar from '~/components/layout/NavBar.vue'
import Footer from '~/components/layout/Footer.vue'
import ThemeToggle from '~/components/layout/ThemeToggle.vue'
import MobileDrawer from '~/components/layout/MobileDrawer.vue'

const drawer = ref(false)

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
            <span class="mdi mdi-menu" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </header>

    <MobileDrawer :items="navItems" v-model="drawer" />

    <main class="layout__main" id="main-content">
      <slot />
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