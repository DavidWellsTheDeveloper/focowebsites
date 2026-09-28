<script setup lang="ts">
import { projects } from '~/data/projects'
import { services } from '~/data/services'
import { vScrollReveal } from '~/composables/useScrollReveal'
import { VParallax } from 'vuetify/components'

useSeoMeta({
  title: 'Custom Websites & Web Development in Northern Colorado',
  ogTitle: 'FoCo Websites — Custom Websites & Web Development in Northern Colorado',
  description:
    'Custom websites that win clients and keep working. Design, build, and ongoing care for businesses around Fort Collins.',
  ogDescription:
    'Custom websites that win clients and keep working. Design, build, and ongoing care for businesses around Fort Collins.',
})

const featured = projects.slice(0, 3)
</script>

<template>
  <div>
    <!-- Hero -->
    <VContainer class="py-12 py-md-16">
      <div class="text-center mx-auto" style="max-width: 800px" v-scroll-reveal>
        <VChip color="primary" variant="tonal" size="small" class="mb-6" label>
          Northern Colorado web development
        </VChip>
        <h1 class="font-display text-h3 text-md-h1 font-weight-medium mb-5 text-pretty">
          Let's build a website that
          <span class="text-primary">actually earns</span> its keep.
        </h1>
        <p class="text-h6 font-weight-regular text-medium-emphasis text-pretty mb-8" style="max-width: 600px; margin-inline: auto">
          I design and build custom websites for businesses that want to look sharp,
          load fast, and turn visitors into paying customers — then I stick around.
        </p>
        <div class="d-flex flex-wrap justify-center ga-3" v-scroll-reveal>
          <VBtn color="accent" size="x-large" to="/start-a-project" class="text-white">
            Start a project
            <VIcon end>mdi-arrow-right</VIcon>
          </VBtn>
          <VBtn color="primary" variant="tonal" size="x-large" to="/work">
            See my work
          </VBtn>
        </div>
      </div>
    </VContainer>

    <!-- Vertical Parallax Section using VParallax (client-only) -->
    <ClientOnly>
      <VParallax
        src="https://picsum.photos/seed/foco-parallax/1920/1080"
        alt="Fort Collins mountains"
        :scale="0.3"
        class="my-16"
        height="500"
      >
        <template #default>
          <VContainer class="fill-height d-flex align-center justify-center">
            <VCard class="pa-8 mx-auto" max-width="700" color="surface-variant">
              <h3 class="font-display text-h4 font-weight-medium mb-4 text-center">
                Built for the Rockies
              </h3>
              <p class="text-body-1 text-medium-emphasis text-center">
                Websites built for businesses that thrive in the mountains — fast, resilient, and built to scale.
              </p>
            </VCard>
          </VContainer>
        </template>
      </VParallax>
    </ClientOnly>

    <!-- Proof / selected work strip -->
    <VContainer v-if="featured.length" class="py-4 pb-10">
      <div class="d-flex align-center justify-space-between mb-4" v-scroll-reveal>
        <h2 class="font-display text-h5 font-weight-medium mb-0">
          Selected work
        </h2>
        <VBtn to="/work" variant="text" color="primary" class="text-none">
          All work <VIcon end size="small">mdi-arrow-right</VIcon>
        </VBtn>
      </div>
      <VRow class="reveal-stagger" v-scroll-reveal>
        <VCol v-for="p in featured" :key="p.slug" cols="12" md="4">
          <NuxtLink :to="`/work/${p.slug}/`" class="text-decoration-none">
            <VCard class="h-100" hover>
              <div class="pa-6 pb-2" :style="{ background: p.accent }">
                <span class="text-caption font-weight-bold" :class="p.accent === '#99F6E4' ? 'text-primary' : 'text-white'">
                  {{ p.year }} · {{ p.services[0] }}
                </span>
              </div>
              <VCardText>
                <h3 class="font-display text-h6 font-weight-medium mb-1">{{ p.client }}</h3>
                <p class="text-body-2 text-medium-emphasis mb-0">{{ p.summary }}</p>
              </VCardText>
            </VCard>
          </NuxtLink>
        </VCol>
      </VRow>
    </VContainer>

    <!-- Services -->
    <VContainer class="py-10 py-md-12">
      <div class="text-center mx-auto mb-8" style="max-width: 640px" v-scroll-reveal>
        <h2 class="font-display text-h3 font-weight-medium mb-3">
          One developer, the whole job
        </h2>
        <p class="text-body-1 text-medium-emphasis mb-0 text-pretty">
          Design, build, launch, and the ongoing care a site needs after go-live.
          No handoffs, no agencies, no mystery.
        </p>
      </div>
      <VRow class="reveal-stagger" v-scroll-reveal>
        <VCol v-for="s in services" :key="s.to" cols="12" sm="6" lg="3" class="d-flex">
          <NuxtLink :to="s.to" class="text-decoration-none w-100">
            <VCard class="h-100" hover>
              <VCardItem>
                <VCardTitle>
                  <VIcon color="primary" size="small" start>{{ s.icon }}</VIcon>
                  {{ s.title }}
                </VCardTitle>
              </VCardItem>
              <VCardText class="text-body-2 text-medium-emphasis">
                {{ s.blurb }}
              </VCardText>
              <VCardActions>
                <VBtn variant="text" color="primary" size="small" class="text-none">
                  Learn more <VIcon end size="small">mdi-arrow-right</VIcon>
                </VBtn>
              </VCardActions>
            </VCard>
          </NuxtLink>
        </VCol>
      </VRow>
    </VContainer>

    <!-- Process teaser -->
    <VContainer class="py-10 py-md-12">
      <VCard color="background" variant="flat" class="pa-6 pa-md-10" rounded="xl">
        <VRow align="center">
          <VCol cols="12" md="6" v-scroll-reveal>
            <VChip color="accent" variant="tonal" size="small" class="mb-4" label>
              How it works
            </VChip>
            <h2 class="font-display text-h3 font-weight-medium mb-3">
              A process that keeps surprises on the table, not in the invoice.
            </h2>
            <p class="text-body-1 text-medium-emphasis mb-6 text-pretty">
              Discovery → Proposal → Design → Build → Launch → Support. You'll know
              where the project is at every step, and nothing ships without your sign-off.
            </p>
            <VBtn color="primary" variant="tonal" to="/process">
              See the full process
            </VBtn>
          </VCol>
          <VCol cols="12" md="6" v-scroll-reveal>
            <VTimeline density="comfortable" side="end">
              <VTimelineItem
                v-for="(step, i) in ['Discovery', 'Proposal', 'Design', 'Build', 'Launch', 'Support']"
                :key="step"
                dot-color="primary"
                size="x-small"
              >
                <span class="text-body-2">
                  <strong class="mr-1">{{ i + 1 }}.</strong>
                  {{ step }}
                </span>
              </VTimelineItem>
            </VTimeline>
          </VCol>
        </VRow>
      </VCard>
    </VContainer>

    <CtaBand
      title="Have a project in mind?"
      body="Tell me what you're building and where it's stuck. I'll reply with an honest take and a clear next step — no obligation."
      cta-label="Start the conversation"
    />
  </div>
</template>