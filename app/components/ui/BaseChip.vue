<script setup lang="ts">
interface Props {
  active?: boolean
  variant?: 'tonal' | 'outlined' | 'filled'
  size?: 'sm' | 'md' | 'lg'
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  active: false,
  variant: 'tonal',
  size: 'md',
})

const emit = defineEmits<{ click: [event: MouseEvent] }>()

const classes = computed(() => {
  const list = [
    'base-chip',
    `base-chip--${props.variant}`,
    `base-chip--${props.size}`,
  ]
  if (props.active) list.push('base-chip--active')
  return list.join(' ')
})

const chipStyle = computed(() => {
  if (props.color) {
    return { color: props.color }
  }
  return {}
})
</script>

<template>
  <button
    :class="classes"
    :style="chipStyle"
    @click="emit('click', $event)"
    type="button"
    :aria-pressed="active !== undefined ? active : undefined"
  >
    <slot />
  </button>
</template>

<style scoped>
.base-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-body);
  font-weight: var(--font-weight-medium);
  border: none;
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all var(--transition-fast);
  white-space: nowrap;
  text-decoration: none;
}

.base-chip:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

.base-chip--sm {
  padding: var(--space-1) var(--space-3);
  font-size: var(--font-size-xs);
}

.base-chip--md {
  padding: var(--space-2) var(--space-4);
  font-size: var(--font-size-sm);
}

.base-chip--lg {
  padding: var(--space-3) var(--space-5);
  font-size: var(--font-size-base);
}

.base-chip--tonal {
  background-color: color-mix(in srgb, var(--color-primary) 10%, transparent);
  color: var(--color-primary);
}

.base-chip--tonal:hover {
  background-color: color-mix(in srgb, var(--color-primary) 20%, transparent);
}

.base-chip--tonal.base-chip--active {
  background-color: var(--color-primary);
  color: var(--color-on-primary);
}

.base-chip--outlined {
  background-color: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

.base-chip--outlined:hover {
  background-color: color-mix(in srgb, var(--color-primary) 10%, transparent);
}

.base-chip--outlined.base-chip--active {
  background-color: var(--color-primary);
  color: var(--color-on-primary);
}

.base-chip--filled {
  background-color: var(--color-primary);
  color: var(--color-on-primary);
}

.base-chip--filled:hover {
  background-color: var(--color-primary-hover);
}
</style>