<script setup lang="ts">
import { useTheme } from 'vuetify'

defineProps<{
  isDark: boolean
}>()

defineEmits<{ toggle: [] }>()

const theme = useTheme()

function toggle() {
  theme.global.name.value = isDark ? 'light' : 'dark'
  emit('toggle')
}
</script>

<template>
  <VBtn
    v-if="!isDark"
    icon="mdi-white-balance-sunny"
    variant="text"
    aria-label="Switch to dark theme"
    @click="toggle"
    class="theme-toggle-btn"
  />
  <VBtn
    v-else
    icon="mdi-weather-night"
    variant="text"
    aria-label="Switch to light theme"
    @click="toggle"
    class="theme-toggle-btn"
  />
</template>