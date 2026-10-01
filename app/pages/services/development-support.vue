<script setup lang="ts">
import { vScrollReveal } from '~/composables/useScrollReveal'
import BaseCard from '~/components/ui/BaseCard.vue'
import BaseIcon from '~/components/ui/BaseIcon.vue'
import BaseButton from '~/components/ui/BaseButton.vue'

useSeoMeta({
  title: 'Development Support',
  description:
    'Ongoing development support: features, fixes, and expert help for websites that outgrew their original builder.',
})

definePageMeta({
  breadcrumb: 'Development Support',
})

const capabilities = [
  { icon: 'mdi-plus-thick', title: 'Features & integrations', body: 'Booking tools, forms, payments, dashboards — extending your site without ripping it out.' },
  { icon: 'mdi-bug-outline', title: 'Fixes, fast', body: 'Something broken and costing you? I diagnose and fix it, then explain what happened.' },
  { icon: 'mdi-message-question-outline', title: 'Second opinions', body: "Stuck with another agency, a plugin, or a stack you didn't choose? I'll untangle it." },
  { icon: 'mdi-check-decagram-outline', title: 'Done right', body: 'Code you can hand to any future developer without apologies, plus docs where it matters.' },
]
</script>

<template>
  <div>
    <section class="page-hero" v-scroll-reveal="{ direction: 'up' }">
      <div class="container">
        <span class="page-hero__eyebrow">Service · Development support</span>
        <h1 class="page-hero__title">A developer in your corner, not just on a contract</h1>
        <p class="page-hero__lede">Feature work, urgent fixes, and expert help when your website needs more than a hobbyist can give it.</p>
      </div>
    </section>

    <section class="section capabilities-section" v-scroll-reveal="{ direction: 'up' }">
      <div class="container">
        <div class="capabilities-section__grid" v-scroll-reveal="{ direction: 'up' }">
          <BaseCard v-for="cap in capabilities" :key="cap.title" variant="default" class="capability-card" v-scroll-reveal="{ direction: 'up' }">
            <BaseIcon :name="cap.icon" size="xl" color="var(--color-primary)" aria-hidden="true" />
            <h3 class="capability-card__title">{{ cap.title }}</h3>
            <p class="capability-card__body">{{ cap.body }}</p>
          </BaseCard>
        </div>
      </div>
    </section>

    <section class="section process-teaser" v-scroll-reveal="{ direction: 'up' }">
      <div class="container">
        <BaseCard variant="flat" class="process-teaser__card" v-scroll-reveal="{ direction: 'up' }">
          <div class="process-teaser__grid">
            <div class="process-teaser__content" v-scroll-reveal="{ direction: 'left' }">
              <h2 class="process-teaser__title">How support works</h2>
              <p class="process-teaser__lede">
                Some clients book a block of hours when a project lands. Others keep me on a
                light retainer so the work is costable and regular. Either way, you get clear
                estimates, honest timelines, and work that&apos;s explained in plain English;
              </p>
            </div>
            <div class="process-teaser__cta" v-scroll-reveal="{ direction: 'right' }">
              <BaseButton variant="accent" size="xl" to="/start-a-project">
                Ask about availability
              </BaseButton>
            </div>
          </div>
        </BaseCard>
      </div>
    </section>

    <section class="cta-band" v-scroll-reveal="{ direction: 'up' }">
      <div class="container">
        <BaseCard variant="default" class="cta-band__card" style="background: var(--color-primary); color: var(--color-on-primary);">
          <h2 class="cta-band__title">Stuck on something right now?</h2>
          <p class="cta-band__body">Screenshot it and send it over. If it&apos;s a quick fix I&apos;ll tell you straight — sometimes the nicest answer is &apos;don&apos;t pay anyone for that.&apos;</p>
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

.capabilities-section__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

@media (min-width: 768px) {
  .capabilities-section__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.capability-card {
  padding: var(--space-6);
}

.capability-card :global(.mdi) {
  margin-bottom: var(--space-3);
}

.capability-card__title {
  font-family: var(--font-display);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  margin: 0 0 var(--space-2);
}

.capability-card__body {
  font-size: var(--font-size-sm);
  color: var(--color-on-background);
  opacity: 0.7;
  margin: 0;
}

.process-teaser__card {
  padding: var(--space-6);
}

@media (min-width: 768px) {
  .process-teaser__card {
    padding: var(--space-10);
  }
}

.process-teaser__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
  align-items: center;
}

@media (min-width: 768px) {
  .process-teaser__grid {
    grid-template-columns: 1fr 1fr;
  }
}

.process-teaser__title {
  font-family: var(--font-display);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-medium);
  margin: 0 0 var(--space-3);
}

@media (min-width: 768px) {
  .process-teaser__title {
    font-size: var(--font-size-2xl);
  }
}

.process-teaser__lede {
  color: var(--color-on-background);
  opacity: 0.8;
  margin: 0;
}

.process-teaser__cta {
  display: flex;
  justify-content: flex-end;
}

@media (max-width: 767px) {
  .process-teaser__cta {
    justify-content: center;
  }
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