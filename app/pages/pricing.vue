<script setup lang="ts">
import { vScrollReveal } from '~/composables/useScrollReveal'
import BaseCard from '~/components/ui/BaseCard.vue'
import BaseButton from '~/components/ui/BaseButton.vue'
import BaseIcon from '~/components/ui/BaseIcon.vue'

useSeoMeta({
  title: 'Pricing',
  description:
    'How FoCo Websites pricing works: engagement models and the cost factors behind a project — no surprise invoices.',
})

definePageMeta({
  breadcrumb: 'Pricing',
})

const models = [
  {
    title: 'New build',
    body: 'Design and development of a brand-new site, scoped and priced as a fixed project. You know the total before work starts.',
    to: '/services/custom-website-design',
  },
  {
    title: 'Redesign',
    body: 'Modernizing an existing site. Scope varies, so the quote is honest: what we keep, what we rebuild, and what it lands at.',
    to: '/services/website-redesign',
  },
  {
    title: 'Care plan',
    body: 'A flat monthly rate for updates, security, backups, and support. Predictable spend, no surprise invoices.',
    to: '/services/maintenance-care-plans',
  },
  {
    title: 'Dev support',
    body: 'Booked hours or a light retainer for feature work, fixes, and help when your site needs more than maintenance.',
    to: '/services/development-support',
  },
]

const factorRows = [
  { factor: 'Scope', detail: 'How many pages, what features, and how much custom design.' },
  { factor: 'Content', detail: 'Having copy, photos, and a logo ready saves real time — I can help source or produce it too.' },
  { factor: 'Integrations', detail: 'Forms, booking, payments, and third-party systems add tasteful complexity.' },
  { factor: 'Timeline', detail: 'Flexible timelines cost less; tight ones cost more. The plan is built around your dates.' },
  { factor: 'Support after launch', detail: 'Most clients pick a care plan for the first year — it changes the numbers, not the quality.' },
]
</script>

<template>
  <div>
    <section class="page-hero" v-scroll-reveal="{ direction: 'up' }">
      <div class="container">
        <span class="page-hero__eyebrow">Pricing</span>
        <h1 class="page-hero__title">No prices on the wall, no surprises on the invoice</h1>
        <p class="page-hero__lede">Every project is different, so I won&apos;t fake a rate card. Here&apos;s how pricing actually works — the models, the factors, and what moves the number.</p>
      </div>
    </section>

    <section class="section models-section" v-scroll-reveal="{ direction: 'up' }">
      <div class="container">
        <div class="section__header" v-scroll-reveal="{ direction: 'up' }">
          <h2 class="section__title">Ways we engage</h2>
          <p class="section__lede">Pick a lane or mix and match.</p>
        </div>
        <div class="models-section__grid" v-scroll-reveal="{ direction: 'up' }">
          <NuxtLink v-for="m in models" :key="m.title" :to="m.to" class="model-card-link">
            <BaseCard variant="default" hover class="model-card">
              <h3 class="model-card__title">{{ m.title }}</h3>
              <p class="model-card__body">{{ m.body }}</p>
<div class="model-card__cta">
  <BaseButton variant="ghost" size="sm">
    See details <span class="mdi mdi-arrow-right" aria-hidden="true"></span>
  </BaseButton>
</div>
            </BaseCard>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="section factors-section" v-scroll-reveal="{ direction: 'up' }">
      <div class="container">
        <div class="section__header" v-scroll-reveal="{ direction: 'up' }">
          <h2 class="section__title">What moves the number</h2>
          <p class="section__lede">These factors do more to set the price than anything else.</p>
        </div>
        <BaseCard variant="flat" class="factors-section__card" v-scroll-reveal="{ direction: 'up' }">
          <div class="factors-section__list">
            <div v-for="f in factorRows" :key="f.factor" class="factor-item">
              <div class="factor-item__icon">
                <BaseIcon name="mdi-cog-outline" size="md" color="var(--color-primary)" aria-hidden="true" />
              </div>
              <div class="factor-item__content">
                <div class="factor-item__factor">{{ f.factor }}</div>
                <div class="factor-item__detail">{{ f.detail }}</div>
              </div>
            </div>
          </div>
        </BaseCard>
        <div class="factors-section__cta" v-scroll-reveal="{ direction: 'up' }">
          <p class="factors-section__note">Better than a rate card: tell me what you&apos;re building and I&apos;ll quote the real thing.</p>
          <BaseButton variant="accent" size="xl" to="/start-a-project" icon="mdi-arrow-right" iconPosition="end">
            Get a straight answer
          </BaseButton>
        </div>
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
  margin: 0 auto var(--space-8);
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

.models-section__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

@media (min-width: 768px) {
  .models-section__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .models-section__grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.model-card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.model-card {
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.model-card__title {
  font-family: var(--font-display);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  margin: 0 0 var(--space-2);
}

.model-card__body {
  font-size: var(--font-size-sm);
  color: var(--color-on-background);
  opacity: 0.7;
  margin: 0 0 var(--space-4);
  flex: 1;
}

.model-card__cta {
  margin-top: auto;
}

.factors-section__card {
  padding: var(--space-6);
  margin-bottom: var(--space-8);
  border-radius: var(--radius-xl);
}

@media (min-width: 768px) {
  .factors-section__card {
    padding: var(--space-8);
  }
}

.factors-section__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.factor-item {
  display: flex;
  gap: var(--space-3);
  align-items: flex-start;
}

.factor-item__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: color-mix(in srgb, var(--color-primary) 10%, transparent);
  color: var(--color-primary);
  border-radius: var(--radius-lg);
  flex-shrink: 0;
}

.factor-item__content {
  flex: 1;
}

.factor-item__factor {
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-base);
  color: var(--color-on-background);
}

.factor-item__detail {
  font-size: var(--font-size-sm);
  color: var(--color-on-background);
  opacity: 0.7;
  margin-top: var(--space-1);
}

.factors-section__cta {
  text-align: center;
}

.factors-section__note {
  font-size: var(--font-size-sm);
  color: var(--color-on-background);
  opacity: 0.7;
  margin: 0 0 var(--space-4);
}
</style>