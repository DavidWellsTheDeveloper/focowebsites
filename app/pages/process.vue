<script setup lang="ts">
import { vScrollReveal } from '~/composables/useScrollReveal'

useSeoMeta({
  title: 'Process',
  description:
    'How a FoCo Websites project runs: discovery, proposal, design, build, launch, and support.',
})

definePageMeta({
  breadcrumb: 'Process',
})

const steps = [
  {
    title: 'Discovery',
    body: 'We talk about your business, customers, and what the site needs to do. I ask the obvious questions and the slightly annoying ones — it\'s faster this way.',
  },
  {
    title: 'Proposal',
    body: 'You get a plain-English proposal: what you\'ll get, what it costs, and when it ships. No pages of legalese, no hidden line items.',
  },
  {
    title: 'Design',
    body: 'I design in the open — share the direction, get your notes, iterate. You approve the look before a single line of build code is written.',
  },
  {
    title: 'Build',
    body: 'The design becomes a working site: fast, accessible, and structured for search. You can watch it take shape and browser-test it along the way.',
  },
  {
    title: 'Launch',
    body: 'DNS moves over, we verify everything, and the site goes live. You get a checklist of what to watch during the first week.',
  },
  {
    title: 'Support',
    body: 'Launch is a checkpoint, not a goodbye. Fixes, questions, and care plans keep the site healthy long after day one.',
  },
]
</script>

<template>
  <div>
    <PageHero
      eyebrow="The process"
      title="Six steps, zero mystery"
      lede="The same honest process for every project. You'll always know what's happening, what's next, and what it's costing."
    />

    <VContainer class="pb-10">
      <VTimeline density="compact" side="end" class="mx-auto reveal-stagger" style="max-width: 680px" v-scroll-reveal>
        <VTimelineItem
          v-for="(step, i) in steps"
          :key="step.title"
          dot-color="primary"
          size="small"
        >
          <VCard variant="flat" color="background" class="mb-4">
            <VCardText class="pa-5">
              <div class="d-flex align-center mb-1">
                <span class="text-primary font-weight-bold mr-2 text-body-2">0{{ i + 1 }}</span>
                <h2 class="font-display text-h6 font-weight-medium mb-0">{{ step.title }}</h2>
              </div>
              <p class="text-body-2 text-medium-emphasis mb-0 mt-2 text-pretty">{{ step.body }}</p>
            </VCardText>
          </VCard>
        </VTimelineItem>
      </VTimeline>
    </VContainer>

    <CtaBand
      title="The next step is a conversation"
      body="Two questions, no sales pitch: what are you building, and when do you need it?"
    />
  </div>
</template>