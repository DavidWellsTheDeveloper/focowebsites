<script setup lang="ts">
const props = defineProps<{
  currentYear?: number
}>()

const year = props.currentYear ?? new Date().getFullYear()
</script>

<template>
  <VFooter class="border-t" color="background">
    <VContainer class="py-8">
      <VRow justify="space-between" align="center" class="ga-4 ga-md-0">
        <VCol cols="12" md="auto" class="text-center text-md-left">
          <span class="font-display font-weight-semibold text-h6">
            FoCo Websites
          </span>
          <p class="text-body-2 text-medium-emphasis mt-1 mb-0">
            Custom websites for businesses around Northern Colorado;
          </p>
        </VCol>
        <VCol cols="12" md="auto" class="text-center text-md-right">
          <div class="d-flex flex-wrap justify-center justify-md-end ga-2">
            <VBtn variant="text" size="small" :to="{ path: '/start-a-project' }">
              Start a project
            </VBtn>
            <VBtn variant="text" size="small" href="mailto:hello@focowebsites.com">
              hello@focowebsites.com
            </VBtn>
          </div>
          <p class="text-caption text-medium-emphasis mt-2 mb-0">
            © {{ year }} FoCo Websites
          </p>
        </VCol>
      </VRow>
    </VContainer>
  </VFooter>
</template>