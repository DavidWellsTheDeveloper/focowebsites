<script setup lang="ts">
import { getProject, projects } from '~/data/projects'
import { vScrollReveal } from '~/composables/useScrollReveal'

const route = useRoute()
const slug = computed(() => {
  const params = route?.params ?? {}
  return String(params.projectname ?? params['project-name'] ?? '')
})
const project = computed(() => slug.value ? getProject(slug.value) : null)

useSeoMeta({
  title: () => project.value ? `${project.value.client} — Case Study` : 'Case Study',
  description: () => project.value?.summary ?? '',
})

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found' })
}

const others = projects.filter((p) => p.slug !== slug.value).slice(0, 3)
</script>

<template>
  <div>
    <VContainer class="py-10 py-md-12">
      <div class="mb-6" v-scroll-reveal>
        <VBtn variant="text" color="primary" to="/work" size="small" class="text-none px-0">
          <VIcon start size="small">mdi-arrow-left</VIcon>
          All work
        </VBtn>
      </div>

      <div class="mb-8" v-scroll-reveal>
        <span class="text-caption font-weight-bold text-primary text-uppercase">
          {{ project!.year }} · {{ project!.services.join(' · ') }}
        </span>
        <h1 class="font-display text-h3 text-md-h2 font-weight-medium my-3 text-pretty" style="max-width: 760px">
          {{ project!.client }}
        </h1>
        <p class="text-h6 font-weight-regular text-medium-emphasis text-pretty" style="max-width: 680px">
          {{ project!.headline }}
        </p>
        <div class="d-flex flex-wrap ga-2">
          <VChip v-for="t in project!.tags" :key="t" variant="tonal" label>{{ t }}</VChip>
          <a v-if="project!.liveUrl" :href="project!.liveUrl" target="_blank" rel="noopener noreferrer">
            <VBtn size="small" variant="outlined" class="ml-2">
              Visit the site <VIcon end size="small">mdi-open-in-new</VIcon>
            </VBtn>
          </a>
        </div>
      </div>

      <VRow class="ga-6 reveal-stagger" v-scroll-reveal>
        <VCol cols="12" md="6" v-scroll-reveal>
          <VCard color="background" variant="flat" class="h-100">
            <VCardText class="pa-6">
              <h2 class="font-display text-h5 font-weight-medium mb-3">The challenge</h2>
              <p class="text-body-1 text-medium-emphasis mb-0 text-pretty">
                {{ project!.challenge }}
              </p>
            </VCardText>
          </VCard>
        </VCol>
        <VCol cols="12" md="6" v-scroll-reveal>
          <VCard color="background" variant="flat" class="h-100">
            <VCardText class="pa-6">
              <h2 class="font-display text-h5 font-weight-medium mb-3">The solution</h2>
              <p class="text-body-1 text-medium-emphasis mb-0 text-pretty">
                {{ project!.solution }}
              </p>
            </VCardText>
          </VCard>
        </VCol>
      </VRow>

      <VCard class="mt-6 pa-6 pa-md-10" color="primary" v-scroll-reveal>
        <h2 class="font-display text-h5 font-weight-medium mb-4 text-white">Results</h2>
        <div class="space-y-3">
          <div v-for="r in project!.results" :key="r" class="d-flex ga-3 align-start">
            <VIcon color="accent" class="shrink-0 mt-1">mdi-check-circle</VIcon>
            <span class="text-white text-body-2" style="line-height: 1.6;">{{ r }}</span>
          </div>
        </div>
      </VCard>

      <div class="my-10" v-scroll-reveal>
        <h2 class="font-display text-h5 font-weight-medium mb-4">More work</h2>
        <VRow class="reveal-stagger" v-scroll-reveal>
          <VCol v-for="p in others" :key="p.slug" cols="12" md="4">
            <NuxtLink :to="`/work/${p.slug}/`" class="text-decoration-none">
              <VCard hover>
                <VCardText>
                  <h3 class="font-display text-h6 font-weight-medium mb-1">{{ p.client }}</h3>
                  <p class="text-body-2 text-medium-emphasis mb-0">{{ p.summary }}</p>
                </VCardText>
              </VCard>
            </NuxtLink>
          </VCol>
        </VRow>
      </div>
    </VContainer>

    <CtaBand
      title="A project like this could be yours"
      cta-label="Start yours"
    />
  </div>
</template>