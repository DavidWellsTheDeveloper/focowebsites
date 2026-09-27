<script setup lang="ts">
import { vScrollReveal } from '~/composables/useScrollReveal'

useSeoMeta({
  title: 'Services',
  description:
    'Custom website design, redesigns, development support, and maintenance care plans for businesses around Northern Colorado.',
})

definePageMeta({
  breadcrumb: 'Services',
})
</script>

<template>
  <div>
    <PageHero
      eyebrow="Services"
      title="Everything a website needs, from one developer"
      lede="Whether you're starting from zero, modernizing what you have, or just need a developer in your corner, these are the ways we work together."
    />

    <VContainer class="pb-10">
      <VRow class="ga-6 reveal-stagger" v-scroll-reveal>
        <VCol cols="12" md="6">
          <NuxtLink to="/services/custom-website-design" class="text-decoration-none">
            <VCard class="h-100" hover>
              <VCardText class="pa-6">
                <VIcon color="primary" size="large" start>mdi-pencil-ruler</VIcon>
                <h2 class="font-display text-h5 font-weight-medium my-3">Custom website design</h2>
                <p class="text-body-1 text-medium-emphasis mb-4">
                  A site built from scratch around your business and its customers — not a template with your logo welded on.
                </p>
                <VBtn variant="text" color="primary" class="text-none">
                  Explore <VIcon end size="small">mdi-arrow-right</VIcon>
                </VBtn>
              </VCardText>
            </VCard>
          </NuxtLink>
        </VCol>

        <VCol cols="12" md="6">
          <NuxtLink to="/services/website-redesign" class="text-decoration-none">
            <VCard class="h-100" hover>
              <VCardText class="pa-6">
                <VIcon color="primary" size="large" start>mdi-brush-variant</VIcon>
                <h2 class="font-display text-h5 font-weight-medium my-3">Website redesign</h2>
                <p class="text-body-1 text-medium-emphasis mb-4">
                  Keep the pages that work, fix the ones that don't. A redesign that respects the brand and your budget.
                </p>
                <VBtn variant="text" color="primary" class="text-none">
                  Explore <VIcon end size="small">mdi-arrow-right</VIcon>
                </VBtn>
              </VCardText>
            </VCard>
          </NuxtLink>
        </VCol>

        <VCol cols="12" md="6">
          <NuxtLink to="/services/development-support" class="text-decoration-none">
            <VCard class="h-100" hover>
              <VCardText class="pa-6">
                <VIcon color="primary" size="large" start>mdi-lifebuoy</VIcon>
                <h2 class="font-display text-h5 font-weight-medium my-3">Development support</h2>
                <p class="text-body-1 text-medium-emphasis mb-4">
                  A working relationship, not a transaction. Extend a feature, fix a bug, or consult on a hairy problem.
                </p>
                <VBtn variant="text" color="primary" class="text-none">
                  Explore <VIcon end size="small">mdi-arrow-right</VIcon>
                </VBtn>
              </VCardText>
            </VCard>
          </NuxtLink>
        </VCol>

        <VCol cols="12" md="6">
          <NuxtLink to="/services/maintenance-care-plans" class="text-decoration-none">
            <VCard class="h-100" hover>
              <VCardText class="pa-6">
                <VIcon color="primary" size="large" start>mdi-shield-check</VIcon>
                <h2 class="font-display text-h5 font-weight-medium my-3">Maintenance & care plans</h2>
                <p class="text-body-1 text-medium-emphasis mb-4">
                  Updates, security, backups, and a human on call. Your site keeps earning while you run the business.
                </p>
                <VBtn variant="text" color="primary" class="text-none">
                  Explore <VIcon end size="small">mdi-arrow-right</VIcon>
                </VBtn>
              </VCardText>
            </VCard>
          </NuxtLink>
        </VCol>
      </VRow>
    </VContainer>

    <CtaBand
      title="Not sure which direction fits?"
      body="Send a quick note about what you're working on and I'll point you at the right one — free."
    />
  </div>
</template>