<script setup lang="ts">
interface Props {
  name: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  color?: string
  ariaLabel?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
})

const sizeMap = {
  xs: '0.75rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '3rem',
}

const style = computed(() => ({
  fontSize: sizeMap[props.size],
  color: props.color || 'currentColor',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
}))
</script>

<template>
  <span
    :class="['mdi', name]"
    :style="style"
    :aria-label="ariaLabel"
    :aria-hidden="!ariaLabel"
  />
</template>