<script setup lang="ts">
import { useRoute } from 'vue-router'

interface NavItem {
  label: string
  to?: string
  exact?: boolean
}

const props = defineProps<{
  items: NavItem[]
}>()

const route = useRoute()
const isOpen = defineModel<boolean>({ default: false })

function isActive(item: NavItem) {
  if (!item.to) return false
  return item.exact ? route.path === item.to : route.path.startsWith(item.to)
}

function close() {
  isOpen.value = false
}
</script>

<template>
  <Teleport to="body">
    <div v-if="isOpen" class="mobile-drawer-overlay" @click="close" aria-hidden="true" />
    <aside
      v-show="isOpen"
      class="mobile-drawer"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <div class="mobile-drawer__header">
        <span class="mobile-drawer__title">Menu</span>
        <button
          class="mobile-drawer__close"
          @click="close"
          aria-label="Close menu"
        >
          <span class="mdi mdi-close" aria-hidden="true"></span>
        </button>
      </div>
      <nav class="mobile-drawer__nav" aria-label="Main navigation">
        <ul class="mobile-drawer__list">
          <li v-for="item in props.items" :key="item.label">
            <NuxtLink
              v-if="item.to"
              :to="item.to"
              class="mobile-drawer__link"
              :class="{ 'mobile-drawer__link--active': isActive(item) }"
              @click="close"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/start-a-project"
              class="mobile-drawer__link mobile-drawer__link--cta"
              @click="close"
            >
              Start a project
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </aside>
  </Teleport>
</template>

<style scoped>
.mobile-drawer-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: var(--z-fixed);
  animation: fadeIn var(--transition-fast);
}

.mobile-drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 320px;
  background-color: var(--color-surface);
  border-left: 1px solid var(--color-outline);
  z-index: calc(var(--z-fixed) + 1);
  display: flex;
  flex-direction: column;
  animation: slideIn var(--transition-normal);
  box-shadow: var(--shadow-xl);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

.mobile-drawer__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4) var(--space-6);
  border-bottom: 1px solid var(--color-outline);
}

.mobile-drawer__title {
  font-family: var(--font-display);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-lg);
  color: var(--color-on-background);
}

.mobile-drawer__close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  color: var(--color-on-background);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: background-color var(--transition-fast);
}

.mobile-drawer__close:hover {
  background-color: var(--color-outline);
}

.mobile-drawer__close:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

.mobile-drawer__nav {
  flex: 1;
  padding: var(--space-6);
  overflow-y: auto;
}

.mobile-drawer__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.mobile-drawer__link {
  display: block;
  padding: var(--space-3) var(--space-4);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  color: var(--color-on-background);
  text-decoration: none;
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.mobile-drawer__link:hover {
  background-color: var(--color-outline);
  color: var(--color-primary);
}

.mobile-drawer__link--active {
  color: var(--color-primary);
  background-color: color-mix(in srgb, var(--color-primary) 10%, transparent);
}

.mobile-drawer__link--cta {
  margin-top: var(--space-4);
  text-align: center;
  background-color: var(--color-accent);
  color: var(--color-on-accent);
  font-weight: var(--font-weight-semibold);
}

.mobile-drawer__link--cta:hover {
  background-color: var(--color-accent-hover);
  color: var(--color-on-accent);
}
</style>