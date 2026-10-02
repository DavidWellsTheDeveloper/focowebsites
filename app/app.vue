<script setup lang="ts">
const { isDark } = useThemeToggle()

/* The theme has to be on <html> before first paint, or a dark-default site flashes
   light while the bundle loads, so this has to be rendered into the prerendered
   markup as well as patched at runtime. It is bound to the current theme rather
   than written as a static value because a static head entry is re-applied on every
   head patch, which silently undoes a toggle a few milliseconds after it happens. */
useHead({
  htmlAttrs: {
    'data-theme': () => (isDark.value ? 'dark' : 'light'),
  },
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
