<script setup lang="ts">
import { useRoute } from 'vue-router'

interface NavItem {
  label: string
  to?: string
  exact?: boolean
}

interface Props {
  items: NavItem[]
}

defineProps<Props>()

const route = useRoute()

function isActive(item: NavItem) {
  return item.exact ? route.path === item.to : route.path.startsWith(item.to ?? '')
}

function activeClasses(item: NavItem) {
  const active = isActive(item)
  return [
    'font-weight-medium',
    active ? 'text-primary' : 'text-body',
    active ? 'bg-primary-lighten-5' : '',
  ].filter(Boolean).join(' ')
}
</script>

<template>
  <div class="d-none d-md-flex align-center ga-1 mr-2">
    <VBtn
      v-for="item in items"
      :key="item.label"
      :to="item.to"
      variant="text"
      :class="activeClasses(item)"
      aria-current="page"
    >
      {{ item.label }}
    </VBtn>
  </div>
</template>