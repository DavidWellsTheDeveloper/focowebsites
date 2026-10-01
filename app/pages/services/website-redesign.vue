<script setup lang="ts">
import { vScrollReveal } from '~/composables/useScrollReveal'
import BaseCard from '~/components/ui/BaseCard.vue'
import BaseButton from '~/components/ui/BaseButton.vue'

useSeoMeta({
  title: 'Website Redesign',
  description:
    'Redesign and modernization for sites that are dated, slow, or quietly losing you business.',
})

definePageMeta({
  breadcrumb: 'Website Redesign',
})

const signals = [
  { text: 'The site looks older than your business actually is' },
  { text: "It&apos;s slow, especially on phones, and you feel it in the bounce rate" },
  { text: "It doesn&apos;t rank for the terms your customers actually type" },
  { text: 'Making a change — even a price — means calling your old developer' },
]
</script>

<template>
  <div>
    <section class="page-hero" v-scroll-reveal="{ direction: 'up' }">
      <div class="container">
        <span class="page-hero__eyebrow">Service · Website redesign</span>
        <h1 class="page-hero__title">Same business, upgraded site</h1>
        <p class="page-hero__lede">You may not need everything rebuilt from nothing — you may just need the website to catch up with the company.</p>
      </div>
    </section>

    <section class="section signals-section" v-scroll-reveal="{ direction: 'up' }">
      <div class="container">
        <div class="section__header" v-scroll-reveal="{ direction: 'up' }">
          <h2 class="section__title">Sound familiar?</h2>
          <p class="section__lede">Any one of these is a good reason to talk:</p>
        </div>
        <div class="signals-section__list">
          <div
            v-for="(s, i) in signals"
            :key="s.text"
            class="signal-item"
            v-scroll-reveal="{
              direction: i % 2 === 0 ? 'left' : 'right',
              delay: i * 90,
            }"
          >
            <VIcon icon="mdi-checkbox-marked-circle-outline" size="2rem" color="var(--color-primary)" />
            <span>{{ s.text }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section process-teaser" v-scroll-reveal="{ direction: 'up' }">
      <div class="container">
        <BaseCard variant="flat" class="process-teaser__card" v-scroll-reveal="{ direction: 'up' }">
          <div class="process-teaser__grid">
            <div class="process-teaser__content" v-scroll-reveal="{ direction: 'left' }">
              <h2 class="process-teaser__title">How I approach a redesign</h2>
              <p class="process-teaser__lede">
                I audit what&apos;s actually working — your rankings, your content, your customers —
                and keep what earns its keep. Then we modernize the design, tighten the build,
                and improve the pages that matter most. You end up with a fresh site and a running
                start, not a restart from zero;
              </p>
            </div>
            <div class="process-teaser__cta" v-scroll-reveal="{ direction: 'right' }">
              <BaseButton variant="accent" size="xl" to="/start-a-project">
                Get a redesign quote
              </BaseButton>
            </div>
          </div>
        </BaseCard>
      </div>
    </section>

    <section class="cta-band" v-scroll-reveal="{ direction: 'up' }">
      <div class="container">
        <BaseCard variant="default" class="cta-band__card" style="background: var(--color-primary); color: var(--color-on-primary);">
          <h2 class="cta-band__title">Your current site is a lead, not a liability.</h2>
          <p class="cta-band__body">Send me the URL and I&apos;ll tell you what&apos;s fixable, what&apos;s holding you back, and roughly what a redesign would cost.</p>
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

.section__header {
  max-width: 640px;
  margin: 0 auto var(--space-6);
  text-align: center;
}

.section__title {
  margin: 0 0 var(--space-2);
}

.section__lede {
  color: var(--color-on-background);
  opacity: 0.8;
  margin: 0;
}

.signals-section__list {
  max-width: 520px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.signal-item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  font-size: var(--font-size-base);
  line-height: 1.6;
  color: var(--color-on-background);
}

.signal-item .v-icon {
  flex-shrink: 0;
  margin-top: 0.125rem;
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