<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  disabled?: boolean
  loading?: boolean
  type?: 'button' | 'submit' | 'reset'
  href?: string
  to?: string
  icon?: string
  iconPosition?: 'start' | 'end'
  fullWidth?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  type: 'button',
  iconPosition: 'end',
  fullWidth: false,
})

const emit = defineEmits<{ click: [event: MouseEvent] }>()

const isLink = computed(() => !!props.href || !!props.to)
const Component = isLink ? (props.to ? 'NuxtLink' : 'a') : 'button'

const classes = computed(() => [
  'base-button',
  `base-button--${props.variant}`,
  `base-button--${props.size}`,
  { 'base-button--disabled': props.disabled || props.loading },
  { 'base-button--full-width': props.fullWidth },
  { 'base-button--with-icon': props.icon },
].filter(Boolean).join(' '))

function handleClick(event: MouseEvent) {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>

<template>
  <component
    :is="Component"
    :href="href"
    :to="to"
    :type="isLink ? undefined : type"
    :disabled="disabled || loading"
    :aria-busy="loading"
    :class="classes"
    @click="handleClick"
  >
    <span v-if="loading" class="base-button__spinner" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-dasharray="31.4 31.4">
          <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"/>
        </circle>
      </svg>
    </span>
    <span v-else-if="icon && iconPosition === 'start'" class="base-button__icon" aria-hidden="true">
      <span class="mdi" :class="icon"></span>
    </span>
    <span class="base-button__text"><slot /></span>
    <span v-if="icon && iconPosition === 'end'" class="base-button__icon" aria-hidden="true">
      <span class="mdi" :class="icon"></span>
    </span>
  </component>
</template>

<style module>
.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  font-family: var(--font-body);
  font-weight: var(--font-weight-semibold);
  border: 2px solid transparent;
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: all var(--transition-fast);
  text-decoration: none;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
}

.base-button:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

.base-button--disabled,
.base-button--loading {
  opacity: 0.6;
  cursor: not-allowed;
  pointer-events: none;
}

.base-button--full-width {
  width: 100%;
}

.base-button__spinner {
  width: 1em;
  height: 1em;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.base-button__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.125em;
}

.base-button--sm {
  padding: var(--space-2) var(--space-4);
  font-size: var(--font-size-sm);
}

.base-button--md {
  padding: var(--space-3) var(--space-6);
  font-size: var(--font-size-base);
}

.base-button--lg {
  padding: var(--space-4) var(--space-8);
  font-size: var(--font-size-lg);
}

.base-button--xl {
  padding: var(--space-5) var(--space-10);
  font-size: var(--font-size-xl);
}

.base-button--primary {
  background-color: var(--color-primary);
  color: var(--color-on-primary);
  border-color: var(--color-primary);
}

.base-button--primary:hover:not(.base-button--disabled) {
  background-color: var(--color-primary-hover);
  border-color: var(--color-primary-hover);
}

.base-button--secondary {
  background-color: var(--color-secondary);
  color: var(--color-on-secondary);
  border-color: var(--color-secondary);
}

.base-button--secondary:hover:not(.base-button--disabled) {
  background-color: var(--color-secondary-hover);
  border-color: var(--color-secondary-hover);
}

.base-button--accent {
  background-color: var(--color-accent);
  color: var(--color-on-accent);
  border-color: var(--color-accent);
}

.base-button--accent:hover:not(.base-button--disabled) {
  background-color: var(--color-accent-hover);
  border-color: var(--color-accent-hover);
}

.base-button--outline {
  background-color: transparent;
  color: var(--color-primary);
  border-color: var(--color-primary);
}

.base-button--outline:hover:not(.base-button--disabled) {
  background-color: var(--color-primary);
  color: var(--color-on-primary);
}

.base-button--ghost {
  background-color: transparent;
  color: var(--color-on-background);
  border-color: transparent;
}

.base-button--ghost:hover:not(.base-button--disabled) {
  background-color: var(--color-outline);
}
</style>