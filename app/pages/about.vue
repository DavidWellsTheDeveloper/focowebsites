<script setup lang="ts">
import { vScrollReveal } from '~/composables/useScrollReveal'

useSeoMeta({
  title: 'About',
  description:
    'About FoCo Websites — a freelance web developer in Northern Colorado building custom sites for businesses that want more from their website.',
})

definePageMeta({
  breadcrumb: 'About',
})

const values = [
  { icon: 'mdi-bullseye-arrow', title: 'Websites must work', body: 'Pretty is table stakes. Every page needs a job, and results are the measure.' },
  { icon: 'mdi-message-text-outline', title: 'Plain talk', body: 'No jargon, no vanishing. You get straight answers and honest timelines.' },
  { icon: 'mdi-hand-heart-outline', title: 'This is a practice', body: 'Small by choice. I take on fewer projects so each one gets the attention it deserves.' },
  { icon: 'mdi-lock-clock-outline', title: 'Built to last', body: 'Sites are maintained, not abandoned. What ships today still runs in five years.' },
]

const reasons = [
  'One person owns the whole project — design, code, launch, support. No handoff game.',
  'You talk to the person doing the work, not an account manager relaying it.',
  'Overhead stays low, so your budget goes into the site instead of office space.',
  'After launch, I\'m still the one who answers. That rarely happens at an agency.',
]
</script>

<template>
  <div>
    <PageHero
      eyebrow="About"
      title="A freelance web developer who treats your project like it's the only one"
      lede="FoCo Websites is me: a designer-developer in Northern Colorado building custom sites for businesses that want more from their website."
    />

    <VContainer class="pb-10">
      <VRow align="start" class="ga-6 reveal-stagger" v-scroll-reveal>
        <VCol cols="12" md="6" v-scroll-reveal>
          <VCard class="pa-6 h-100">
            <h2 class="font-display text-h4 font-weight-medium mb-3">The short version</h2>
            <div class="text-body-1 text-medium-emphasis text-pretty">
              <p>
                I build websites for businesses that are tired of this cycle: pay a template theater
                to make something that looks nice, wait weeks for edits, and watch it quietly stop
                working.
              </p>
              <p>
                Instead, clients get a site built to a plan, launched on a date, and supported by
                someone who knows exactly how it was made. Local, friendly, and direct — a little
                like Northern Colorado itself.
              </p>
              <p class="mb-0">
                When I'm not coding you'll find me [placeholder: out on the trails / propping up the
                counter at a local coffee shop] — happy to swap site ISPs over a solid pour-over.
              </p>
            </div>
          </VCard>
        </VCol>
        <VCol cols="12" md="5" v-scroll-reveal>
          <VCard color="primary" class="text-white pa-6">
            <h2 class="font-display text-h6 font-weight-medium mb-4">Why work with a freelancer</h2>
            <div class="space-y-3">
              <div v-for="r in reasons" :key="r" class="d-flex ga-3 align-start">
                <VIcon color="accent" class="shrink-0 mt-1">mdi-check</VIcon>
                <span class="text-white text-body-2" style="line-height: 1.6;">{{ r }}</span>
              </div>
            </div>
          </VCard>
        </VCol>
      </VRow>
    </VContainer>

    <VContainer class="pb-4">
      <div class="text-center mx-auto mb-8" style="max-width: 640px" v-scroll-reveal>
        <h2 class="font-display text-h4 font-weight-medium mb-2">What I care about</h2>
      </div>
      <VRow class="reveal-stagger" v-scroll-reveal>
        <VCol v-for="v in values" :key="v.title" cols="12" sm="6" lg="3" class="d-flex">
          <VCard class="h-100" v-scroll-reveal>
            <VCardText class="pa-6">
              <VIcon color="primary" size="large" start>{{ v.icon }}</VIcon>
              <h3 class="font-display text-h6 font-weight-medium my-3">{{ v.title }}</h3>
              <p class="text-body-2 text-medium-emphasis mb-0">{{ v.body }}</p>
            </VCardText>
          </VCard>
        </VCol>
      </VRow>
    </VContainer>

    <VContainer class="pb-4">
      <VCard color="background" variant="flat" rounded="xl" class="pa-6 pa-md-10" v-scroll-reveal>
        <h2 class="font-display text-h5 font-weight-medium mb-2">A word from past clients</h2>
        <p class="text-body-2 text-medium-emphasis mb-4">[Placeholder — replace with real testimonials]</p>
        <VRow class="reveal-stagger" v-scroll-reveal>
          <VCol cols="12" sm="6" v-scroll-reveal>
            <VCard variant="tonal" color="primary">
              <VCardText class="pa-6">
                <p class="text-body-1 text-pretty mb-3">"We'd put off redesigning for two years. The process was calm, the deadline was real, and our phone actually rings more now."</p>
                <span class="text-caption font-weight-medium">— Owner, local service business</span>
              </VCardText>
            </VCard>
          </VCol>
          <VCol cols="12" sm="6" v-scroll-reveal>
            <VCard variant="tonal" color="primary">
              <VCardText class="pa-6">
                <p class="text-body-1 text-pretty mb-3">"I expected the usual agency runaround. Instead I got someone who answered emails on time and explained what he was building."</p>
                <span class="text-caption font-weight-medium">— Founder, local & Company</span>
              </VCardText>
            </VCard>
          </VCol>
        </VRow>
      </VCard>
    </VContainer>

    <CtaBand
      title="Want to talk to the person who'd actually build it?"
      body="That's the easiest part. Pick a time, tell me what you're building."
    />
  </div>
</template>