<script setup lang="ts">
import { vScrollReveal } from '~/composables/useScrollReveal'

useSeoMeta({
  title: 'FAQ',
  description:
    'Frequently asked questions about working with FoCo Websites: timeline, cost, technology, ownership, SEO, and support.',
})

definePageMeta({
  breadcrumb: 'FAQ',
})

const faqs = [
  {
    q: 'How long does a project take?',
    a: 'A typical custom site runs 4–8 weeks from kickoff to launch, depending on scope and how fast content comes in. Redesigns can be faster; larger builds with integrations land on the longer end. You get a dated plan before you commit.',
  },
  {
    q: 'What does a project cost?',
    a: 'It depends on scope more than anything else — pages, features, integrations, and how much custom design you want. There are no numbers on the wall because honest quoting beats a rate card. Tell me what you\'re building and I\'ll give you a real range before any engagement.',
  },
  {
    q: 'What technology do you build with?',
    a: 'I build primarily with Nuxt and Vue — a modern, fast, and flexible stack that compiles down to plain static files. That means the site is quick, secure, and cheap to host. I\'m transparent about the whole stack and why each piece is there.',
  },
  {
    q: 'Who owns the site?',
    a: 'You do. The design, the code, the content, and the domain all belong to you. Everything is delivered in a way you can take to any other developer in the future — no lock-in, no hostage files.',
  },
  {
    q: 'Is it search-engine friendly?',
    a: 'Yes — SEO is designed in, not bolted on later. Clean semantic markup, fast load times, proper metadata, a sitemap, and pages structured around the terms your customers search for. I\'ll also hand you a page-checklist of launch tasks if you don\'t have an SEO person.',
  },
  {
    q: 'What happens after launch?',
    a: 'Most clients keep me on a care plan: updates, security, backups, and support so the site keeps running well. If you don\'t want that, you still get a launch checklist and I stay reachable for questions. Either way, launch isn\'t a goodbye.',
  },
]
</script>

<template>
  <div>
    <PageHero
      eyebrow="FAQ"
      title="Answers before you even have to ask"
      lede="The questions every client asks at some point — timeline, cost, tech, ownership, SEO, and support."
    />

    <VContainer class="pb-10">
      <VExpansionPanels variant="accordion" elevation="0" class="mx-auto reveal-stagger" style="max-width: 720px" v-scroll-reveal>
        <VExpansionPanel v-for="f in faqs" :key="f.q" v-scroll-reveal>
          <VExpansionPanelTitle class="font-weight-medium">
            {{ f.q }}
          </VExpansionPanelTitle>
          <VExpansionPanelText class="text-body-1 text-medium-emphasis text-pretty">
            {{ f.a }}
          </VExpansionPanelText>
        </VExpansionPanel>
      </VExpansionPanels>
      <p class="text-center text-body-2 text-medium-emphasis mt-8 mb-0" v-scroll-reveal>
        Something else on your mind? <NuxtLink to="/start-a-project" class="text-primary">Ask it here.</NuxtLink>
      </p>
    </VContainer>
  </div>
</template>