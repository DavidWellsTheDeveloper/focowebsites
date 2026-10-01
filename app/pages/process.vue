<script setup lang="ts">
import { vScrollReveal } from '~/composables/useScrollReveal'
import BaseCard from '~/components/ui/BaseCard.vue'
import BaseButton from '~/components/ui/BaseButton.vue'

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
    body: 'We talk about your business, customers, and what the site needs to do. I ask the obvious questions and the slightly annoying ones — it&apos;s faster this way.',
  },
  {
    title: 'Proposal',
    body: 'You get a plain-English proposal: what you&apos;ll get, what it costs, and when it ships. No pages of legalese, no hidden line items.',
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
    <section class="page-hero" v-scroll-reveal="{ direction: 'up' }">
      <div class="container">
        <span class="page-hero__eyebrow">The process</span>
        <h1 class="page-hero__title">Six steps, zero mystery</h1>
        <p class="page-hero__lede">The same honest process for every project. You&apos;ll always know what&apos;s happening, what&apos;s next, and what it&apos;s costing.</p>
      </div>
    </section>

    <section class="section process-section" v-scroll-reveal="{ direction: 'up' }">
      <div class="container">
        <div class="process-section__timeline" v-scroll-reveal="{ direction: 'up' }">
          <ol class="timeline">
            <li v-for="(step, i) in steps" :key="step.title" class="timeline__item" v-scroll-reveal="{ direction: i % 2 === 0 ? 'left' : 'right' }">
              <BaseCard variant="flat" class="timeline__card">
                <div class="timeline__card-content">
                  <div class="timeline__number">0{{ i + 1 }}</div>
                  <h2 class="timeline__title">{{ step.title }}</h2>
                  <p class="timeline__body">{{ step.body }}</p>
                </div>
              </BaseCard>
            </li>
          </ol>
        </div>
      </div>
    </section>

    <section class="cta-band" v-scroll-reveal="{ direction: 'up' }">
      <div class="container">
        <BaseCard variant="default" class="cta-band__card" style="background: var(--color-primary); color: var(--color-on-primary);">
          <h2 class="cta-band__title">The next step is a conversation</h2>
          <p class="cta-band__body">Two questions, no sales pitch: what are you building, and when do you need it?</p>
          <BaseButton variant="accent" size="xl" to="/start-a-project" icon="mdi-arrow-right" iconPosition="end">
            Start a project
          </BaseButton>
        </BaseCard>
      </div>
    </section>
  </div>
</template>

<style module>
.page-hero {
  padding: var(--space-10) 0 var(--space-14);
  text-align: center;
}

.page-hero__eyebrow {
  display: inline-block;
  padding: var(--space-1) var(--space-3);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-primary);
  background-color: color-mix(in srgb, var(--color-primary) 10%, transparent);
  border-radius: var(--radius-full);
  margin-bottom: var(--space-4);
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

.process-section__timeline {
  max-width: 680px;
  margin: 0 auto;
}

.timeline {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.timeline__card {
  padding: var(--space-5);
  border-radius: var(--radius-xl);
}

.timeline__card-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.timeline__number {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
}

.timeline__title {
  font-family: var(--font-display);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  margin: 0;
}

.timeline__body {
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

.cta-band__body {
  color: var(--color-on-primary);
  opacity: 0.9;
  max-width: 560px;
  margin: 0 auto var(--space-6);
}
</style>