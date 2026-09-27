<script setup lang="ts">
defineProps<{
  title: string
  body?: string
  ctaLabel?: string
  ctaTo?: string
}>()
</script>

<template>
  <VContainer class="py-10 py-md-12">
    <VCard color="primary" rounded="xl" class="pa-6 pa-md-10 text-center text-white">
      <h2 class="font-display text-h4 text-md-h3 font-weight-medium mb-3">
        {{ title }}
      </h2>
      <p v-if="body" class="text-body-1 text-white text-pretty mb-6" style="max-width: 560px; margin-inline: auto">
        {{ body }}
      </p>
      <VBtn
        v-if="ctaLabel"
        :to="ctaTo || '/start-a-project'"
        color="accent"
        size="x-large"
        class="text-white"
      >
        {{ ctaLabel }}
        <VIcon end>mdi-arrow-right</VIcon>
      </VBtn>
    </VCard>
  </VContainer>
</template>