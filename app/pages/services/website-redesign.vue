<script setup lang="ts">
useSeoMeta({
  title: 'Website Redesign',
  description:
    'Redesign and modernization for sites that are dated, slow, or quietly losing you business.',
})

definePageMeta({
  breadcrumb: 'Website Redesign',
})

const signals = [
  { text: 'The site looks older than your business actually is' },
  { text: "It's slow, especially on phones, and you feel it in the bounce rate" },
  { text: "It doesn't rank for the terms your customers actually type" },
  { text: 'Making a change — even a price — means calling your old developer' },
]
</script>

<template>
  <div>
    <PageHero
      eyebrow="Service · Website redesign"
      title="Same business, upgraded site"
      lede="You may not need everything rebuilt from nothing — you may just need the website to catch up with the company."
    />

    <VContainer class="pb-10">
      <div class="text-center mx-auto mb-6" style="max-width: 640px">
        <h2 class="font-display text-h4 font-weight-medium mb-3">
          Sound familiar?
        </h2>
        <p class="text-body-1 text-medium-emphasis mb-0 text-pretty">
          Any one of these is a good reason to talk:
        </p>
      </div>
      <div class="mx-auto space-y-3" style="max-width: 520px">
        <div v-for="s in signals" :key="s.text" class="d-flex ga-3 align-center">
          <VIcon color="primary" class="shrink-0">mdi-checkbox-marked-circle-outline</VIcon>
          <span class="text-body-1" style="line-height: 1.6;">{{ s.text }}</span>
        </div>
      </div>
    </VContainer>

    <VContainer class="pb-4">
      <VCard color="background" variant="flat" rounded="xl" class="pa-6 pa-md-10">
        <VRow align="center" class="ga-4">
          <VCol cols="12" md="7">
            <h2 class="font-display text-h5 font-weight-medium mb-3">How I approach a redesign</h2>
            <p class="text-body-1 text-medium-emphasis mb-0 text-pretty">
              I audit what's actually working — your rankings, your content, your customers —
              and keep what earns its keep. Then we modernize the design, tighten the build,
              and improve the pages that matter most. You end up with a fresh site and a running
              start, not a restart from zero.
            </p>
          </VCol>
          <VCol cols="12" md="5" class="text-md-right">
            <VBtn color="accent" size="x-large" to="/start-a-project" class="text-white">
              Get a redesign quote
            </VBtn>
          </VCol>
        </VRow>
      </VCard>
    </VContainer>

    <CtaBand
      title="Your current site is a lead, not a liability."
      body="Send me the URL and I'll tell you what's fixable, what's holding you back, and roughly what a redesign would cost."
    />
  </div>
</template>