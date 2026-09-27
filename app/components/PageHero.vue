<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  lede?: string
}>()
</script>

<template>
  <VContainer class="py-10 py-md-14">
    <div class="text-center mx-auto" style="max-width: 720px">
      <VChip
        v-if="eyebrow"
        color="primary"
        variant="tonal"
        size="small"
        class="mb-4"
        label
      >
        {{ eyebrow }}
      </VChip>
      <h1 class="font-display text-h3 text-md-h1 font-weight-medium mb-4 text-wrap text-pretty">
        {{ title }}
      </h1>
      <p
        v-if="lede"
        class="text-body-1 text-medium-emphasis text-pretty mb-0"
        style="max-width: 560px; margin: 0 auto"
      >
        {{ lede }}
      </p>
    </div>
  </VContainer>
</template>