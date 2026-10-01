<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { getProject, projects, type Project } from '~/data/projects'
import { vScrollReveal } from '~/composables/useScrollReveal'
import BaseCard from '~/components/ui/BaseCard.vue'
import BaseChip from '~/components/ui/BaseChip.vue'
import BaseButton from '~/components/ui/BaseButton.vue'

const route = useRoute()
const slug = computed(() => {
  const params = route?.params ?? {}
  return String(params['projectName'] ?? '')
})
const project = computed(() => slug.value ? getProject(slug.value) : null)

useSeoMeta({
  title: () => project.value ? `${project.value.client} — Case Study` : 'Case Study',
  description: () => project.value?.summary ?? '',
})

const projectData = computed(() => {
  if (!project.value) {
    throw createError({ statusCode: 404, statusMessage: 'Project not found' })
  }
  return project.value
})

const others = computed(() => projects.filter((p: Project) => p.slug !== slug.value).slice(0, 3))
</script>

<template>
  <div>
    <section class="case-study" v-scroll-reveal="{ direction: 'up' }">
      <div class="container">
        <div class="case-study__back" v-scroll-reveal="{ direction: 'left' }">
          <NuxtLink to="/work" class="case-study__back-link">
            <span class="mdi mdi-arrow-left" aria-hidden="true"></span>
            All work
          </NuxtLink>
        </div>

        <header class="case-study__header" v-scroll-reveal="{ direction: 'up' }">
          <div class="case-study__meta">
            <span>{{ projectData.year }} · {{ projectData.services.join(' · ') }}</span>
          </div>
          <h1 class="case-study__client">{{ projectData.client }}</h1>
          <p class="case-study__headline">{{ projectData.headline }}</p>
          <div class="case-study__tags">
            <BaseChip v-for="t in projectData.tags" :key="t" variant="tonal" label>{{ t }}</BaseChip>
            <a v-if="projectData.liveUrl" :href="projectData.liveUrl" target="_blank" rel="noopener noreferrer" class="case-study__visit">
              <BaseButton variant="outline" size="sm">
                Visit the site <span class="mdi mdi-open-in-new" aria-hidden="true"></span>
              </BaseButton>
            </a>
          </div>
        </header>

        <div class="case-study__grid" v-scroll-reveal="{ direction: 'up' }">
          <BaseCard variant="flat" class="case-study__card" v-scroll-reveal="{ direction: 'left' }">
            <h2 class="case-study__card-title">The challenge</h2>
            <p class="case-study__card-body">{{ projectData.challenge }}</p>
          </BaseCard>
          <BaseCard variant="flat" class="case-study__card" v-scroll-reveal="{ direction: 'right' }">
            <h2 class="case-study__card-title">The solution</h2>
            <p class="case-study__card-body">{{ projectData.solution }}</p>
          </BaseCard>
        </div>

        <BaseCard variant="default" class="case-study__results" v-scroll-reveal="{ direction: 'up' }" style="background: var(--color-primary); color: var(--color-on-primary);">
          <h2 class="case-study__results-title">Results</h2>
          <div class="case-study__results-list">
            <div v-for="r in projectData.results" :key="r" class="case-study__result">
              <span class="mdi mdi-check-circle" aria-hidden="true"></span>
              <span>{{ r }}</span>
            </div>
          </div>
        </BaseCard>

        <section class="case-study__more" v-scroll-reveal="{ direction: 'up' }">
          <h2 class="case-study__more-title">More work</h2>
          <div class="case-study__more-grid" v-scroll-reveal="{ direction: 'up' }">
            <NuxtLink v-for="p in others" :key="p.slug" :to="`/work/${p.slug}/`" class="more-work-card">
              <BaseCard variant="default" hover class="more-work-card__inner">
                <h3 class="more-work-card__client">{{ p.client }}</h3>
                <p class="more-work-card__summary">{{ p.summary }}</p>
              </BaseCard>
            </NuxtLink>
          </div>
        </section>
      </div>
    </section>

    <section class="cta-band" v-scroll-reveal="{ direction: 'up' }">
      <div class="container">
        <BaseCard variant="default" class="cta-band__card" style="background: var(--color-primary); color: var(--color-on-primary);">
          <h2 class="cta-band__title">A project like this could be yours</h2>
          <BaseButton variant="accent" size="xl" to="/start-a-project" icon="mdi-arrow-right" iconPosition="end">
            Start yours
          </BaseButton>
        </BaseCard>
      </div>
    </section>
  </div>
</template>

<style scoped>
.case-study {
  padding: var(--space-10) 0 var(--space-16);
}

@media (min-width: 768px) {
  .case-study {
    padding: var(--space-12) 0 var(--space-20);
  }
}

.case-study__back-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-primary);
  text-decoration: none;
  padding: var(--space-1) 0;
}

.case-study__back-link:hover {
  color: var(--color-primary-hover);
}

.case-study__header {
  margin: var(--space-8) 0;
}

.case-study__meta {
  display: inline-block;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--space-3);
}

.case-study__client {
  font-family: var(--font-display);
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-medium);
  margin: 0 0 var(--space-2);
  max-width: 760px;
}

@media (min-width: 768px) {
  .case-study__client {
    font-size: var(--font-size-4xl);
  }
}

.case-study__headline {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-regular);
  color: var(--color-on-background);
  opacity: 0.8;
  max-width: 680px;
  margin: 0 0 var(--space-4);
}

@media (min-width: 768px) {
  .case-study__headline {
    font-size: var(--font-size-xl);
  }
}

.case-study__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  align-items: center;
}

.case-study__visit {
  display: inline-flex;
}

.case-study__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
  margin-bottom: var(--space-8);
}

@media (min-width: 768px) {
  .case-study__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.case-study__card {
  padding: var(--space-6);
}

.case-study__card-title {
  font-family: var(--font-display);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-medium);
  margin: 0 0 var(--space-3);
}

.case-study__card-body {
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
  color: var(--color-on-background);
  opacity: 0.8;
  margin: 0;
}

.case-study__results {
  padding: var(--space-6);
  margin-bottom: var(--space-10);
  border-radius: var(--radius-xl);
}

@media (min-width: 768px) {
  .case-study__results {
    padding: var(--space-8) var(--space-10);
  }
}

.case-study__results-title {
  font-family: var(--font-display);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-medium);
  margin: 0 0 var(--space-4);
  color: var(--color-on-primary);
}

@media (min-width: 768px) {
  .case-study__results-title {
    font-size: var(--font-size-2xl);
  }
}

.case-study__results-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.case-study__result {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  font-size: var(--font-size-sm);
  line-height: 1.6;
  color: var(--color-on-primary);
}

.case-study__result :global(.mdi) {
  color: var(--color-accent);
  flex-shrink: 0;
  margin-top: 0.125rem;
  font-size: 1.25rem;
}

.case-study__more {
  margin-bottom: var(--space-10);
}

.case-study__more-title {
  font-family: var(--font-display);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-medium);
  margin: 0 0 var(--space-6);
}

.case-study__more-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

@media (min-width: 768px) {
  .case-study__more-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.more-work-card {
  text-decoration: none;
  color: inherit;
  display: block;
}

.more-work-card__inner {
  padding: var(--space-4);
}

.more-work-card__client {
  font-family: var(--font-display);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  margin: 0 0 var(--space-2);
}

.more-work-card__summary {
  font-size: var(--font-size-sm);
  color: var(--color-on-background);
  opacity: 0.7;
  margin: 0;
}

.cta-band {
  padding: var(--space-10) 0 var(--space-12);
}

.cta-band__card {
  padding: var(--space-6);
  text-align: center;
  border-radius: var(--radius-xl);
}

@media (min-width: 768px) {
  .cta-band__card {
    padding: var(--space-10);
  }
}

.cta-band__title {
  font-family: var(--font-display);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-medium);
  margin: 0 0 var(--space-3);
  color: var(--color-on-primary);
}

@media (min-width: 768px) {
  .cta-band__title {
    font-size: var(--font-size-2xl);
  }
}
</style>
