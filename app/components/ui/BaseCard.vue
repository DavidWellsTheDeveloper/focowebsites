<script setup lang="ts">
interface Props {
  variant?: 'default' | 'flat'
  hover?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  hover: false,
})
</script>

<template>
  <div
    class="base-card"
    :class="[`base-card--${props.variant}`, { 'base-card--hover': props.hover }]"
  >
    <slot />
  </div>
</template>

<style scoped>
.base-card {
  background-color: var(--color-surface);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  transition: all var(--transition-normal);
}

.base-card--default {
  border: 1px solid var(--color-outline);
  box-shadow: var(--shadow-sm);
}

.base-card--flat {
  border: none;
  box-shadow: none;
  background-color: var(--color-background);
}

.base-card--hover:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}
</style>
