<script setup lang="ts">
import { services } from '~/data/services'
import { vScrollReveal } from '~/composables/useScrollReveal'
import BaseCard from '~/components/ui/BaseCard.vue'
import BaseIcon from '~/components/ui/BaseIcon.vue'
import BaseButton from '~/components/ui/BaseButton.vue'

useSeoMeta({
  title: 'Services',
  description:
    'Custom website design, redesigns, development support, and maintenance care plans for businesses around Northern Colorado.',
})

definePageMeta({
  breadcrumb: 'Services',
})
</script>

<template>
  <div>
    <section class="page-hero" v-scroll-reveal="{ direction: 'up' }">
      <div class="container">
        <span class="page-hero__eyebrow">Services</span>
        <h1 class="page-hero__title">Everything a website needs, from one developer</h1>
        <p class="page-hero__lede">Whether you&apos;re starting from zero, modernizing what you have, or just need a developer in your corner, these are the ways we work together.</p>
      </div>
    </section>

    <section class="section services-grid" v-scroll-reveal="{ direction: 'up' }">
      <div class="container">
        <div class="services-grid__list">
          <NuxtLink
            v-for="(s, i) in services"
            :key="s.to"
            :to="s.to"
            class="service-card-link"
            v-scroll-reveal="{
              direction: i % 2 === 0 ? 'left' : 'right',
              delay: i * 90,
            }"
          >
            <BaseCard variant="default" hover class="service-card">
              <BaseIcon :name="s.icon" size="xl" color="var(--color-primary)" aria-hidden="true" />
              <h2 class="service-card__title">{{ s.title }}</h2>
              <p class="service-card__blurb">{{ s.blurb }}</p>
<BaseButton variant="ghost" size="sm" class="service-card__cta">
  Explore <span class="mdi mdi-arrow-right" aria-hidden="true"></span>
</BaseButton>
            </BaseCard>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="cta-band" v-scroll-reveal="{ direction: 'up' }">
      <div class="container">
        <BaseCard variant="default" class="cta-band__card" style="background: var(--color-primary); color: var(--color-on-primary);">
          <h2 class="cta-band__title">Not sure which direction fits?</h2>
          <p class="cta-band__body">Send a quick note about what you&apos;re working on and I&apos;ll point you at the right one — free.</p>
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

.services-grid__list {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

@media (min-width: 768px) {
  .services-grid__list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .services-grid__list {
    grid-template-columns: repeat(4, 1fr);
  }
}

.service-card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.service-card {
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  height: 100%;
}

.service-card :global(.mdi) {
  margin-bottom: var(--space-3);
}

.service-card__title {
  font-family: var(--font-display);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-medium);
  margin: 0 0 var(--space-2);
}

.service-card__blurb {
  font-size: var(--font-size-sm);
  color: var(--color-on-background);
  opacity: 0.7;
  margin: 0 0 var(--space-4);
  flex: 1;
}

.service-card__cta {
  align-self: flex-start;
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