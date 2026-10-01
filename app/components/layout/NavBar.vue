<script setup lang="ts">
import { useRoute } from 'vue-router'

interface NavItem {
  label: string
  to?: string
  exact?: boolean
}

defineProps<{
  items: NavItem[]
}>()

const route = useRoute()

function isActive(item: NavItem) {
  if (!item.to) return false
  return item.exact ? route.path === item.to : route.path.startsWith(item.to)
}

function activeClasses(item: NavItem) {
  const active = isActive(item)
  return [
    'nav-bar__item',
    active ? 'nav-bar__item--active' : '',
  ].filter(Boolean).join(' ')
}
</script>

<template>
  <nav class="nav-bar" aria-label="Main navigation">
    <ul class="nav-bar__list" role="menubar">
      <li v-for="item in items" :key="item.label" role="none">
        <NuxtLink
          v-if="item.to"
          :to="item.to"
          :class="activeClasses(item)"
          role="menuitem"
          :aria-current="isActive(item) ? 'page' : undefined"
        >
          {{ item.label }}
        </NuxtLink>
        <span v-else :class="activeClasses(item)" role="menuitem">
          {{ item.label }}
        </span>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);
  padding: var(--space-4) 0;
}

.nav-bar__list {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-bar__item {
  display: inline-flex;
  align-items: center;
  padding: var(--space-2) var(--space-4);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-on-background);
  text-decoration: none;
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
  white-space: nowrap;
}

.nav-bar__item:hover {
  color: var(--color-primary);
  background-color: color-mix(in srgb, var(--color-primary) 10%, transparent);
}

.nav-bar__item--active {
  color: var(--color-primary);
  background-color: color-mix(in srgb, var(--color-primary) 10%, transparent);
}

.nav-bar__actions {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

.nav-bar__cta {
  white-space: nowrap;
}

@media (max-width: 767px) {
  .nav-bar {
    display: none;
  }
}
</style>