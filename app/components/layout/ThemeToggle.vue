<script setup lang="ts">
const { isDark, toggle } = useThemeToggle()
</script>

<template>
  <button
    class="theme-toggle"
    @click="toggle"
    :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
    :title="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
  >
    <VIcon
      v-if="!isDark"
      icon="mdi-white-balance-sunny"
      size="2rem"
    />
    <VIcon
      v-else
      icon="mdi-weather-night"
      size="2rem"
    />
  </button>
</template>

<style scoped>
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