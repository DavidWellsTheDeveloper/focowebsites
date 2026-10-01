<script setup lang="ts">
import { vScrollReveal } from '~/composables/useScrollReveal'
import BaseCard from '~/components/ui/BaseCard.vue'
import BaseIcon from '~/components/ui/BaseIcon.vue'
import BaseButton from '~/components/ui/BaseButton.vue'

useSeoMeta({
  title: 'Custom Website Design',
  description:
    'Custom website design built from scratch for your business — not a template with your logo on it.',
})

definePageMeta({
  breadcrumb: 'Custom Website Design',
})

const includes = [
  { icon: 'mdi-chart-line', title: 'Built around your goals', body: 'Every section asks what it&apos;s for — brand, conversion, or clarity — and earns its place.' },
  { icon: 'mdi-cellphone', title: 'Fast on every screen', body: 'A static, performance-first build that loads quickly on phones, which is where most visitors start.' },
  { icon: 'mdi-magnify', title: 'SEO from day one', body: 'Proper structure, metadata, and clean URLs so search engines understand your site as well as visitors do.' },
  { icon: 'mdi-seed-outline', title: 'Designed for growth', body: 'A scalable foundation that handles future features without a rebuild.' },
]
</script>

<template>
  <div>
    <section class="page-hero" v-scroll-reveal="{ direction: 'up' }">
      <div class="container">
        <span class="page-hero__eyebrow">Service · Custom website design</span>
        <h1 class="page-hero__title">A website built for your business, not the template industry</h1>
        <p class="page-hero__lede">New project? Let&apos;s design and build something that looks like you and works like a salesperson.</p>
      </div>
    </section>

    <section class="section includes-section" v-scroll-reveal="{ direction: 'up' }">
      <div class="container">
        <div class="section__header" v-scroll-reveal="{ direction: 'up' }">
          <h2 class="section__title">What you get</h2>
          <p class="section__lede">A full design-and-build package, from the first sketch to the launch day.</p>
        </div>
        <div class="includes-section__grid" v-scroll-reveal="{ direction: 'up' }">
          <BaseCard v-for="item in includes" :key="item.title" variant="default" class="include-card" v-scroll-reveal="{ direction: 'up' }">
            <BaseIcon :name="item.icon" size="xl" color="var(--color-primary)" aria-hidden="true" />
            <h3 class="include-card__title">{{ item.title }}</h3>
            <p class="include-card__body">{{ item.body }}</p>
          </BaseCard>
        </div>
      </div>
    </section>

    <section class="section process-teaser" v-scroll-reveal="{ direction: 'up' }">
      <div class="container">
        <BaseCard variant="flat" class="process-teaser__card" v-scroll-reveal="{ direction: 'up' }">
          <div class="process-teaser__grid">
            <div class="process-teaser__content" v-scroll-reveal="{ direction: 'left' }">
              <h2 class="process-teaser__title">What this looks like day to day</h2>
              <p class="process-teaser__lede">
                We start with a discovery conversation and a plan you approve. Then I design
                in the open, you review as we go, and you approve each step before it&apos;s built;
                Launch day isn&apos;t a cliff — it&apos;s a checkpoint, and support is here after;
              </p>
            </div>
            <div class="process-teaser__cta" v-scroll-reveal="{ direction: 'right' }">
              <BaseButton variant="accent" size="xl" to="/process">
                See the process
              </BaseButton>
            </div>
          </div>
        </BaseCard>
      </div>
    </section>

    <section class="cta-band" v-scroll-reveal="{ direction: 'up' }">
      <div class="container">
        <BaseCard variant="default" class="cta-band__card" style="background: var(--color-primary); color: var(--color-on-primary);">
          <h2 class="cta-band__title">Ready to start something new?</h2>
          <p class="cta-band__body">Tell me about the project and I&apos;ll reply with next steps within a day or two.</p>
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

.includes-section__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

@media (min-width: 768px) {
  .includes-section__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.include-card {
  padding: var(--space-6);
  text-align: left;
}

.include-card :global(.mdi) {
  margin-bottom: var(--space-3);
}

.include-card__title {
  font-family: var(--font-display);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  margin: 0 0 var(--space-2);
}

.include-card__body {
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