<script setup lang="ts">
import { projects } from '~/data/projects'
import { vScrollReveal } from '~/composables/useScrollReveal'

useSeoMeta({
  title: 'Selected Work',
  description:
    'Selected web projects from FoCo Websites — custom sites, redesigns, and builds for businesses around Northern Colorado.',
})

definePageMeta({
  breadcrumb: 'Selected Work',
})

const allTags = computed(() => [...new Set(projects.flatMap((p) => p.tags))])
const activeTag = ref<string | null>(null)

const visible = computed(() =>
  activeTag.value ? projects.filter((p) => p.tags.includes(activeTag.value!)) : projects,
)
</script>

<template>
  <div>
    <PageHero
      eyebrow="Selected work"
      title="Sites that shipped, and what happened after"
      lede="A sample of recent projects. Each link opens a short case study with the problem, the approach, and the results."
    />

    <VContainer class="pb-10">
      <div class="d-flex flex-wrap ga-2 mb-6" role="group" aria-label="Filter work by tag" v-scroll-reveal>
        <VChip
          :active="activeTag === null"
          variant="tonal"
          label
          @click="activeTag = null"
        >
          All
        </VChip>
        <VChip
          v-for="tag in allTags"
          :key="tag"
          :active="activeTag === tag"
          variant="tonal"
          label
          @click="activeTag = tag"
        >
          {{ tag }}
        </VChip>
      </div>

      <VRow class="reveal-stagger" v-scroll-reveal>
        <VCol v-for="p in visible" :key="p.slug" cols="12" md="6" lg="4" class="d-flex">
          <NuxtLink :to="`/work/${p.slug}/`" class="text-decoration-none w-100">
            <VCard class="h-100" hover>
              <div class="pa-6 pb-2" :style="{ background: p.accent }">
                <span class="text-caption font-weight-bold" :class="p.accent === '#99F6E4' ? 'text-primary' : 'text-white'">
                  {{ p.year }} · {{ p.services.join(' · ') }}
                </span>
              </div>
              <VCardText>
                <h2 class="font-display text-h6 font-weight-medium mb-1">{{ p.client }}</h2>
                <p class="text-body-2 text-medium-emphasis mb-3">{{ p.summary }}</p>
                <div class="d-flex flex-wrap ga-1">
                  <VChip v-for="t in p.tags" :key="t" size="x-small" variant="tonal" label>
                    {{ t }}
                  </VChip>
                </div>
              </VCardText>
              <VCardActions>
                <VBtn variant="text" color="primary" size="small" class="text-none">
                  Read the case study <VIcon end size="small">mdi-arrow-right</VIcon>
                </VBtn>
              </VCardActions>
            </VCard>
          </NuxtLink>
        </VCol>
      </VRow>

      <p v-if="!visible.length" class="text-center text-medium-emphasis mt-6">
        No projects match that tag yet.
      </p>
    </VContainer>

    <CtaBand
      title="Want results like these for your business?"
      body="Every project here started with a conversation. Yours can too."
    />
  </div>
</template>