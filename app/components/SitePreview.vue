<script setup lang="ts">
interface Props {
  src: string
  alt: string
  url?: string | undefined
}

const props = defineProps<Props>()

const imgError = ref(false)
const rootTag = computed(() => (props.url ? 'a' : 'figure'))
</script>

<template>
  <component
    :is="rootTag"
    :href="url"
    :target="url ? '_blank' : undefined"
    :rel="url ? 'noopener noreferrer' : undefined"
    class="site-preview"
    :class="{ 'site-preview--link': url }"
  >
    <div class="site-preview__chrome" aria-hidden="true">
      <span class="site-preview__dot site-preview__dot--close" />
      <span class="site-preview__dot site-preview__dot--minimize" />
      <span class="site-preview__dot site-preview__dot--maximize" />
    </div>
    <div class="site-preview__viewport">
      <img
        v-if="!imgError"
        :src="src"
        :alt="alt"
        class="site-preview__image"
        loading="lazy"
        decoding="async"
        @error="imgError = true"
      >
      <div v-else class="site-preview__fallback">
        <span class="site-preview__fallback-text">Preview unavailable</span>
      </div>
    </div>
  </component>
</template>

<style scoped>
.site-preview {
  display: block;
  margin: 0;
  background-color: var(--color-surface);
  border: 1px solid var(--color-outline);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.site-preview--link:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.site-preview--link:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

.site-preview__chrome {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-4);
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-outline);
}

.site-preview__dot {
  width: 12px;
  height: 12px;
  border-radius: var(--radius-full);
}

.site-preview__dot--close {
  background-color: var(--color-primary);
}

.site-preview__dot--minimize {
  background-color: var(--color-secondary);
}

.site-preview__dot--maximize {
  background-color: var(--color-accent);
}

.site-preview__viewport {
  position: relative;
  aspect-ratio: 2 / 1;
  background-color: var(--color-background);
}

.site-preview__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
}

.site-preview__fallback {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-background);
  color: var(--color-on-background);
  opacity: 0.7;
}

.site-preview__fallback-text {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
}
</style>
