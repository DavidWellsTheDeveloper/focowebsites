<script setup lang="ts">
import { useTheme } from 'vuetify'
import BaseIcon from '~/components/ui/BaseIcon.vue'

const props = defineProps<{
  isDark: boolean
}>()

const emit = defineEmits<{ toggle: [] }>()

const theme = useTheme()

function toggle() {
  theme.global.name.value = props.isDark ? 'light' : 'dark'
  emit('toggle')
}
</script>

<template>
  <button
    class="theme-toggle"
    @click="toggle"
    :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
    :title="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
  >
    <BaseIcon
      v-if="!isDark"
      name="mdi-white-balance-sunny"
      size="lg"
      aria-hidden="true"
    />
    <BaseIcon
      v-else
      name="mdi-weather-night"
      size="lg"
      aria-hidden="true"
    />
  </button>
</template>

<style module>
.theme-toggle {
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

.theme-toggle:hover {
  background-color: var(--color-outline);
  color: var(--color-primary);
}

.theme-toggle:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
</style>