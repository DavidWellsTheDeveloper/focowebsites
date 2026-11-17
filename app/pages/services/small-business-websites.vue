<script setup lang="ts">
import { vScrollReveal } from '~/composables/useScrollReveal'
import BaseCard from '~/components/ui/BaseCard.vue'
import BaseButton from '~/components/ui/BaseButton.vue'
import { SERVICE_AREAS, STARTING_PRICE, SITE_URL } from '~/data/site'

useSeoMeta({
  title: 'Small Business Website Design in Fort Collins, CO',
  description: `Affordable small business websites in Fort Collins and Northern Colorado, starting at ${STARTING_PRICE}. Fast, mobile-friendly sites built to bring in local customers.`,
  ogTitle: 'Small Business Website Design in Fort Collins, CO — FoCo Websites',
  ogDescription: `Affordable small business websites in Fort Collins and Northern Colorado, starting at ${STARTING_PRICE}.`,
})

definePageMeta({
  breadcrumb: 'Small Business Websites',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Small business website design',
        serviceType: 'Web design and development',
        url: `${SITE_URL}/services/small-business-websites/`,
        provider: { '@id': `${SITE_URL}/#business` },
        areaServed: SERVICE_AREAS.map(a => ({ '@type': 'City', name: `${a.city}, ${a.state}` })),
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'PriceSpecification',
            minPrice: 1500,
            priceCurrency: 'USD',
          },
        },
      }),
    },
  ],
})

const includes = [
  { text: 'A custom, mobile-friendly design that fits your brand, not a recycled template' },
  { text: 'Fast load times and clean markup so Google and your customers both like the site' },
  { text: 'Local SEO basics: Google-friendly titles, a sitemap, and pages built around what your customers search' },
  { text: 'A contact form or booking link that actually reaches you' },
  { text: 'A site you own outright, with no lock-in and no monthly platform fee' },
]
</script>

<template>
  <div>
    <section class="page-hero" v-scroll-reveal="{ direction: 'up' }">
      <div class="container">
        <span class="page-hero__eyebrow">Service · Small business websites</span>
        <h1 class="page-hero__title">Affordable small business websites in Fort Collins</h1>
        <p class="page-hero__lede">Professional web design for local businesses, starting at {{ STARTING_PRICE }}. You get a fast, good-looking site that brings in customers, without agency pricing.</p>
      </div>
    </section>

    <section class="section signals-section" v-scroll-reveal="{ direction: 'up' }">
      <div class="container">
        <div class="section__header" v-scroll-reveal="{ direction: 'up' }">
          <h2 class="section__title">What a small business site includes</h2>
          <p class="section__lede">Everything a local business needs to get found and get calls:</p>
        </div>
        <div class="signals-section__list">
          <div
            v-for="(s, i) in includes"
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
              <h2 class="process-teaser__title">Local, and easy to work with</h2>
              <p class="process-teaser__lede">
                I'm a freelance web developer based in Fort Collins, so you talk to the person
                building your site. Projects start at {{ STARTING_PRICE }} for a focused small business
                site, and larger scopes are quoted up front, so the number you agree to is the number you pay.
                See <NuxtLink to="/work">recent work</NuxtLink>, read the <NuxtLink to="/faq">FAQ</NuxtLink>,
                or compare a <NuxtLink to="/services/website-redesign">redesign</NuxtLink> if you already have a site.
              </p>
            </div>
            <div class="process-teaser__cta" v-scroll-reveal="{ direction: 'right' }">
              <BaseButton variant="accent" size="xl" to="/pricing">
                See pricing
              </BaseButton>
            </div>
          </div>
        </BaseCard>
      </div>
    </section>

    <section class="section areas-section" v-scroll-reveal="{ direction: 'up' }">
      <div class="container">
        <div class="section__header" v-scroll-reveal="{ direction: 'up' }">
          <h2 class="section__title">Serving small businesses across Northern Colorado</h2>
          <p class="section__lede">Based in Fort Collins and working with businesses in:</p>
        </div>
        <ul class="areas-section__list">
          <li v-for="a in SERVICE_AREAS" :key="a.city" class="areas-section__item">{{ a.city }}, {{ a.state }}</li>
        </ul>
      </div>
    </section>

    <section class="cta-band" v-scroll-reveal="{ direction: 'up' }">
      <div class="container">
        <BaseCard variant="default" class="cta-band__card" style="background: var(--color-primary); color: var(--color-on-primary);">
          <h2 class="cta-band__title">Ready for a website that works as hard as you do?</h2>
          <p class="cta-band__body">Tell me about your business and I'll send back a straight answer and a real price.</p>
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


.areas-section__list {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  max-width: 720px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-2) var(--space-4);
  color: var(--color-on-background);
}

.areas-section__item {
  font-size: var(--font-size-base);
}
</style>
