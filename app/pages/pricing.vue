<script setup lang="ts">
import { vScrollReveal } from '~/composables/useScrollReveal'

useSeoMeta({
  title: 'Pricing',
  description:
    'How FoCo Websites pricing works: engagement models and the cost factors behind a project — no surprise invoices.',
})

definePageMeta({
  breadcrumb: 'Pricing',
})

const models = [
  {
    title: 'New build',
    body: 'Design and development of a brand-new site, scoped and priced as a fixed project. You know the total before work starts.',
    to: '/services/custom-website-design',
  },
  {
    title: 'Redesign',
    body: 'Modernizing an existing site. Scope varies, so the quote is honest: what we keep, what we rebuild, and what it lands at.',
    to: '/services/website-redesign',
  },
  {
    title: 'Care plan',
    body: 'A flat monthly rate for updates, security, backups, and support. Predictable spend, no surprise invoices.',
    to: '/services/maintenance-care-plans',
  },
  {
    title: 'Dev support',
    body: 'Booked hours or a light retainer for feature work, fixes, and help when your site needs more than maintenance.',
    to: '/services/development-support',
  },
]

const factorRows = [
  { factor: 'Scope', detail: 'How many pages, what features, and how much custom design.' },
  { factor: 'Content', detail: 'Having copy, photos, and a logo ready saves real time — I can help source or produce it too.' },
  { factor: 'Integrations', detail: 'Forms, booking, payments, and third-party systems add tasteful complexity.' },
  { factor: 'Timeline', detail: 'Flexible timelines cost less; tight ones cost more. The plan is built around your dates.' },
  { factor: 'Support after launch', detail: 'Most clients pick a care plan for the first year — it changes the numbers, not the quality.' },
]
</script>

<template>
  <div>
    <PageHero
      eyebrow="Pricing"
      title="No prices on the wall, no surprises on the invoice"
      lede="Every project is different, so I won't fake a rate card. Here's how pricing actually works — the models, the factors, and what moves the number."
    />

    <VContainer class="pb-10">
      <div class="text-center mx-auto mb-8" style="max-width: 640px" v-scroll-reveal>
        <h2 class="font-display text-h4 font-weight-medium mb-2">Ways we engage</h2>
        <p class="text-body-1 text-medium-emphasis mb-0">Pick a lane or mix and match.</p>
      </div>
      <VRow class="reveal-stagger" v-scroll-reveal>
        <VCol v-for="m in models" :key="m.title" cols="12" sm="6" class="d-flex">
          <NuxtLink :to="m.to" class="text-decoration-none w-100">
            <VCard class="h-100" hover>
              <VCardText class="pa-6">
                <h3 class="font-display text-h6 font-weight-medium mb-2">{{ m.title }}</h3>
                <p class="text-body-2 text-medium-emphasis mb-0">{{ m.body }}</p>
              </VCardText>
              <VCardActions>
                <VBtn variant="text" color="primary" size="small" class="text-none">
                  See details <VIcon end size="small">mdi-arrow-right</VIcon>
                </VBtn>
              </VCardActions>
            </VCard>
          </NuxtLink>
        </VCol>
      </VRow>
    </VContainer>

    <VContainer class="pb-4">
      <div class="text-center mx-auto mb-8" style="max-width: 640px" v-scroll-reveal>
        <h2 class="font-display text-h4 font-weight-medium mb-2">What moves the number</h2>
        <p class="text-body-1 text-medium-emphasis mb-0">These factors do more to set the price than anything else.</p>
      </div>
      <VCard color="background" variant="flat" rounded="xl" v-scroll-reveal>
        <div class="space-y-3">
          <div v-for="f in factorRows" :key="f.factor" class="d-flex ga-3 align-start">
            <VAvatar color="primary" rounded="lg" class="text-white shrink-0" size="36">
              <VIcon size="small">mdi-cog-outline</VIcon>
            </VAvatar>
            <div>
              <div class="font-weight-medium text-body-1">{{ f.factor }}</div>
              <div class="text-body-2 text-medium-emphasis">{{ f.detail }}</div>
            </div>
          </div>
        </div>
      </VCard>
      <div class="text-center mt-6" v-scroll-reveal>
        <p class="text-body-2 text-medium-emphasis mb-2">
          Better than a rate card: tell me what you're building and I'll quote the real thing.
        </p>
        <VBtn color="accent" size="x-large" to="/start-a-project" class="text-white">
          Get a straight answer
        </VBtn>
      </div>
    </VContainer>
  </div>
</template>