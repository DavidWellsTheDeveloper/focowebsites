<script setup lang="ts">
import { ref, computed } from 'vue'
import { projects, type Project } from '~/data/projects'
import { vScrollReveal } from '~/composables/useScrollReveal'
import BaseCard from '~/components/ui/BaseCard.vue'
import BaseChip from '~/components/ui/BaseChip.vue'
import BaseButton from '~/components/ui/BaseButton.vue'

useSeoMeta({
  title: 'Selected Work',
  description:
    'Selected web projects from FoCo Websites — custom sites, redesigns, and builds for businesses around Northern Colorado.',
})

definePageMeta({
  breadcrumb: 'Selected Work',
})

const allTags = computed(() => [...new Set(projects.flatMap((p: Project) => p.tags))])
const activeTag = ref<string | null>(null)

const visible = computed(() =>
  activeTag.value ? projects.filter((p: Project) => p.tags.includes(activeTag.value!)) : projects,
)
</script>

<template>
  <div>
    <section class="page-hero" v-scroll-reveal="{ direction: 'up' }">
      <div class="container">
        <span class="page-hero__eyebrow">Selected work</span>
        <h1 class="page-hero__title">Sites that shipped, and what happened after</h1>
        <p class="page-hero__lede">A sample of recent projects. Each link opens a short case study with the problem, the approach, and the results.</p>
      </div>
    </section>

    <section class="section work-section" v-scroll-reveal="{ direction: 'up' }">
      <div class="container">
        <div class="work-section__filters" role="group" aria-label="Filter work by tag" v-scroll-reveal="{ direction: 'up' }">
          <BaseChip
            :active="activeTag === null"
            variant="tonal"
            @click="activeTag = null"
            label
          >
            All
          </BaseChip>
          <BaseChip
            v-for="tag in allTags"
            :key="tag"
            :active="activeTag === tag"
            variant="tonal"
            @click="activeTag = tag"
            label
          >
            {{ tag }}
          </BaseChip>
        </div>

        <div class="work-section__grid" v-scroll-reveal="{ direction: 'up' }">
          <NuxtLink v-for="p in visible" :key="p.slug" :to="`/work/${p.slug}/`" class="work-card">
            <BaseCard variant="default" hover class="work-card__inner">
              <div class="work-card__accent" :style="{ background: p.accent }">
                <span class="work-card__meta">{{ p.year }} · {{ p.services.join(' · ') }}</span>
              </div>
              <div class="work-card__content">
                <h2 class="work-card__client">{{ p.client }}</h2>
                <p class="work-card__summary">{{ p.summary }}</p>
                <div class="work-card__tags">
                  <BaseChip v-for="t in p.tags" :key="t" size="sm" variant="tonal" label>
                    {{ t }}
                  </BaseChip>
                </div>
              </div>
<div class="work-card__cta">
  <BaseButton variant="ghost" size="sm">
    Read the case study <span class="mdi mdi-arrow-right" aria-hidden="true"></span>
  </BaseButton>
</div>
            </BaseCard>
          </NuxtLink>
        </div>

        <p v-if="!visible.length" class="work-section__empty" v-scroll-reveal="{ direction: 'up' }">
          No projects match that tag yet;
        </p>
      </div>
    </section>

    <section class="cta-band" v-scroll-reveal="{ direction: 'up' }">
      <div class="container">
        <BaseCard variant="default" class="cta-band__card" style="background: var(--color-primary); color: var(--color-on-primary);">
          <h2 class="cta-band__title">Want results like these for your business?</h2>
          <p class="cta-band__body">Every project here started with a conversation. Yours can too.</p>
          <BaseButton variant="accent" size="xl" to="/start-a-project" icon="mdi-arrow-right" iconPosition="end">
            Start a project
          </BaseButton>
        </BaseCard>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-hero {
  padding: var(--space-10) 0 var(--space-14);
  text-align: center;
}

.page-hero__eyebrow {
  display: block;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: var(--space-3);
}

.page-hero__title {
  margin-bottom: var(--space-4);
}

.page-hero__lede {
  font-size: var(--font-size-lg);
  color: var(--color-on-background);
  opacity: 0.8;
  max-width: 640px;
  margin: 0 auto;
}

.section {
  padding: var(--space-12) 0;
}

@media (min-width: 768px) {
  .section {
    padding: var(--space-16) 0;
  }
}

.work-section__filters {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  justify-content: center;
  margin-bottom: var(--space-6);
}

.work-section__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

@media (min-width: 768px) {
  .work-section__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .work-section__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.work-card {
  text-decoration: none;
  color: inherit;
  display: block;
}

.work-card__inner {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.work-card__accent {
  padding: var(--space-4);
  margin: calc(var(--space-6) * -1) calc(var(--space-6) * -1) 0;
  border-radius: var(--radius-xl) var(--radius-xl) 0 0;
}

.work-card__meta {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
  color: var(--color-on-primary);
}

.work-card__content {
  padding: var(--space-4);
  flex: 1;
  display: flex;
  flex-direction: column;
}

.work-card__client {
  font-family: var(--font-display);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  margin: 0 0 var(--space-2);
  color: var(--color-on-background);
}

.work-card__summary {
  font-size: var(--font-size-sm);
  color: var(--color-on-background);
  opacity: 0.7;
  margin: 0 0 var(--space-3);
  flex: 1;
}

.work-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1);
  margin-bottom: var(--space-3);
}

.work-card__cta {
  padding: 0 var(--space-4) var(--space-4);
}

.work-section__empty {
  text-align: center;
  color: var(--color-on-background);
  opacity: 0.6;
  margin: var(--space-8) 0 0;
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

.cta-band__body {
  color: var(--color-on-primary);
  opacity: 0.9;
  max-width: 560px;
  margin: 0 auto var(--space-6);
}
</style>