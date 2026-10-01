<script setup lang="ts">
import BaseButton from '~/components/ui/BaseButton.vue'

interface NuxtError {
  statusCode: number
  statusMessage?: string
  message?: string
  data?: unknown
  cause?: Error
}

const props = defineProps<{ error: NuxtError }>()

useSeoMeta({
  title: () => (props.error.statusCode === 404 ? 'Page not found' : 'Something went wrong'),
})

const is404 = computed(() => props.error?.statusCode === 404)
</script>

<template>
  <div class="error-page">
    <div class="container">
      <div class="error-page__inner">
        <span class="error-page__icon" aria-hidden="true">
          <VIcon icon="mdi-waves" size="1em" />
        </span>
        <p class="error-page__code">{{ is404 ? '404' : 'Error' }}</p>
        <h1 class="error-page__title">
          {{ is404 ? 'This page drifted out to sea.' : 'Something went wrong.' }}
        </h1>
        <p class="error-page__message">
          {{ is404
            ? "The page you're looking for doesn't exist or was moved. Try the home page or check out the work."
            : `An unexpected error came up (${props.error.statusCode}). Let's get you back on track.` }}
        </p>
        <div class="error-page__actions">
          <BaseButton variant="accent" size="xl" to="/" icon="mdi-home" iconPosition="end">
            Back home
          </BaseButton>
          <BaseButton variant="outline" size="xl" to="/work" icon="mdi-briefcase-outline" iconPosition="end">
            See the work
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.error-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: var(--space-16) 0;
}

.error-page__inner {
  text-align: center;
  max-width: 560px;
}

.error-page__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background-color: color-mix(in srgb, var(--color-primary) 10%, transparent);
  color: var(--color-primary);
  border-radius: var(--radius-full);
  font-size: 2.5rem;
  margin-bottom: var(--space-4);
}

.error-page__code {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin: 0 0 var(--space-1);
}

@media (min-width: 768px) {
  .error-page__code {
    font-size: var(--font-size-5xl);
  }
}

.error-page__title {
  font-family: var(--font-display);
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-medium);
  margin: 0 0 var(--space-3);
}

@media (min-width: 768px) {
  .error-page__title {
    font-size: var(--font-size-3xl);
  }
}

.error-page__message {
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
  color: var(--color-on-background);
  opacity: 0.8;
  margin: 0 0 var(--space-8);
}

.error-page__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-4);
}
</style>