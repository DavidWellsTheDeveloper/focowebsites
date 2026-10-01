<script setup lang="ts">
interface Props {
  variant?: 'default' | 'outlined' | 'elevated' | 'flat'
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
  as?: string
  to?: string
  href?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  hover: false,
  padding: 'md',
})

const isLink = computed(() => !!props.to || !!props.href)
const Component = isLink ? (props.to ? 'NuxtLink' : 'a') : props.as || 'div'

const classes = computed(() => {
  const base = [
    'base-card',
    `base-card--${props.variant}`,
  ]
  if (props.hover && isLink.value) base.push('base-card--hover')
  if (props.padding !== 'none') base.push(`base-card--padding-${props.padding}`)
  return base.filter(Boolean).join(' ')
})
</script>

<template>
  <component
    :is="Component"
    :to="to"
    :href="href"
    :class="classes"
  >
    <slot />
  </component>
</template>

<style module>
.base-card {
  background-color: var(--color-surface);
  border-radius: var(--radius-xl);
  transition: all var(--transition-normal);
}

.base-card--default {
  border: 1px solid var(--color-outline);
  box-shadow: var(--shadow-sm);
}

.base-card--outlined {
  border: 2px solid var(--color-outline);
  box-shadow: none;
}

.base-card--elevated {
  border: none;
  box-shadow: var(--shadow-lg);
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

.base-card--padding-none {
  padding: 0;
}

.base-card--padding-sm {
  padding: var(--space-4);
}

.base-card--padding-md {
  padding: var(--space-6);
}

.base-card--padding-lg {
  padding: var(--space-8);
}
</style>