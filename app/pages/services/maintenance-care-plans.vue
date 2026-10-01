<script setup lang="ts">
import { vScrollReveal } from '~/composables/useScrollReveal'
import BaseCard from '~/components/ui/BaseCard.vue'
import BaseIcon from '~/components/ui/BaseIcon.vue'
import BaseButton from '~/components/ui/BaseButton.vue'

useSeoMeta({
  title: 'Maintenance & Care Plans',
  description:
    'Website maintenance plans: updates, security, backups, and support so your site keeps working long after launch.',
})

definePageMeta({
  breadcrumb: 'Maintenance & Care Plans',
})

const included = [
  { icon: 'mdi-puzzle', title: 'Updates & refreshes', body: 'Framework, dependency, and content updates handled on a schedule — you&apos;re never on a ticking bomb.' },
  { icon: 'mdi-shield-lock-outline', title: 'Security & backups', body: 'Monitoring, patching, and restorable backups so a bad day costs minutes, not the whole site.' },
  { icon: 'mdi-headset', title: 'A human to call', body: 'Something odd? Someone on the plan gets a real reply, not a ticket in a queue.' },
  { icon: 'mdi-chart-arrow-up', title: 'Quiet improvements', body: 'Small performance and SEO wins bundled in — the site keeps getting better while you&apos;re busy.' },
  { icon: 'mdi-account-clock-outline', title: 'Predictable spend', body: 'A flat monthly cost. No surprise invoices when months pass with nothing needed.' },
  { icon: 'mdi-handshake-outline', title: 'Long-term partner', body: 'You have someone who knows the site&apos;s history when it&apos;s time for the next big step.' },
]
</script>

<template>
  <div>
    <section class="page-hero" v-scroll-reveal="{ direction: 'up' }">
      <div class="container">
        <span class="page-hero__eyebrow">Service · Maintenance & care plans</span>
        <h1 class="page-hero__title">The part of a website nobody thinks about until it&apos;s too late</h1>
        <p class="page-hero__lede">A care plan keeps your site updated, secure, backed up, and supported — so it keeps earning after launch day.</p>
      </div>
    </section>

    <section class="section included-section" v-scroll-reveal="{ direction: 'up' }">
      <div class="container">
        <div class="included-section__grid" v-scroll-reveal="{ direction: 'up' }">
          <BaseCard v-for="item in included" :key="item.title" variant="default" class="included-card" v-scroll-reveal="{ direction: 'up' }">
            <BaseIcon :name="item.icon" size="xl" color="var(--color-primary)" aria-hidden="true" />
            <h3 class="included-card__title">{{ item.title }}</h3>
            <p class="included-card__body">{{ item.body }}</p>
          </BaseCard>
        </div>
      </div>
    </section>

    <section class="section process-teaser" v-scroll-reveal="{ direction: 'up' }">
      <div class="container">
        <BaseCard variant="flat" class="process-teaser__card" v-scroll-reveal="{ direction: 'up' }">
          <div class="process-teaser__grid">
            <div class="process-teaser__content" v-scroll-reveal="{ direction: 'left' }">
              <h2 class="process-teaser__title">A site is a machine — they need oil changes</h2>
              <p class="process-teaser__lede">
                The web moves fast enough that an untouched site quietly falls behind: outdated
                software, expired dependencies, security gaps, and a rising bounce rate you can&apos;t see;
                Care plans are the oil change. Clients who launch with me typically start one the
                same month;
              </p>
            </div>
            <div class="process-teaser__cta" v-scroll-reveal="{ direction: 'right' }">
              <BaseButton variant="accent" size="xl" to="/start-a-project">
                Ask about care plans
              </BaseButton>
            </div>
          </div>
        </BaseCard>
      </div>
    </section>

    <section class="cta-band" v-scroll-reveal="{ direction: 'up' }">
      <div class="container">
        <BaseCard variant="default" class="cta-band__card" style="background: var(--color-primary); color: var(--color-on-primary);">
          <h2 class="cta-band__title">Already have a site I didn&apos;t build?</h2>
          <p class="cta-band__body">I&apos;ll look it over and tell you honestly whether a care plan or a fresh build is the better call.</p>
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

.included-section__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

@media (min-width: 640px) {
  .included-section__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .included-section__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.included-card {
  padding: var(--space-6);
}

.included-card :global(.mdi) {
  margin-bottom: var(--space-3);
}

.included-card__title {
  font-family: var(--font-display);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  margin: 0 0 var(--space-2);
}

.included-card__body {
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