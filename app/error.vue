<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

useSeoMeta({
  title: () => (props.error.statusCode === 404 ? 'Page not found' : 'Something went wrong'),
})

const is404 = computed(() => props.error?.statusCode === 404)
</script>

<template>
  <VContainer class="py-16">
    <div class="text-center mx-auto" style="max-width: 560px">
      <VIcon color="primary" size="56" class="mb-4">
        mdi-waves
      </VIcon>
      <p class="text-h4 font-weight-bold text-primary mb-1">
        {{ is404 ? "404" : "Error" }}
      </p>
      <h1 class="font-display text-h3 font-weight-medium mb-3">
        {{ is404 ? "This page drifted out to sea." : "Something went wrong." }}
      </h1>
      <p class="text-body-1 text-medium-emphasis text-pretty mb-8">
        {{ is404
          ? "The page you're looking for doesn't exist or was moved. Try the home page or check out the work."
          : `An unexpected error came up (${props.error.statusCode}). Let's get you back on track.` }}
      </p>
      <div class="d-flex flex-wrap justify-center ga-3">
        <VBtn color="accent" size="x-large" to="/" class="text-white">
          Back home
        </VBtn>
        <VBtn color="primary" variant="tonal" size="x-large" to="/work">
          See the work
        </VBtn>
      </div>
    </div>
  </VContainer>
</template>