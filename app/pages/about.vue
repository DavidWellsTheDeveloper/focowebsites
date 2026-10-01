<script setup lang="ts">
import { vScrollReveal } from '~/composables/useScrollReveal'
import BaseCard from '~/components/ui/BaseCard.vue'
import BaseIcon from '~/components/ui/BaseIcon.vue'
import BaseButton from '~/components/ui/BaseButton.vue'

useSeoMeta({
  title: 'About',
  description:
    'About FoCo Websites — a freelance web developer in Northern Colorado building custom sites for businesses that want more from their website.',
})

definePageMeta({
  breadcrumb: 'About',
})

const values = [
  { icon: 'mdi-bullseye-arrow', title: 'Websites must work', body: 'Pretty is table stakes. Every page needs a job, and results are the measure.' },
  { icon: 'mdi-message-text-outline', title: 'Plain talk', body: 'No jargon, no vanishing. You get straight answers and honest timelines.' },
  { icon: 'mdi-hand-heart-outline', title: 'This is a practice', body: 'Small by choice. I take on fewer projects so each one gets the attention it deserves.' },
  { icon: 'mdi-lock-clock-outline', title: 'Built to last', body: 'Sites are maintained, not abandoned. What ships today still runs in five years.' },
]

const reasons = [
  'One person owns the whole project — design, code, launch, support. No handoff game.',
  'You talk to the person doing the work, not an account manager relaying it.',
  'Overhead stays low, so your budget goes into the site instead of office space.',
  'After launch, I&apos;m still the one who answers. That rarely happens at an agency.',
]
</script>

<template>
  <div>
    <section class="page-hero" v-scroll-reveal="{ direction: 'up' }">
      <div class="container">
        <span class="page-hero__eyebrow">About</span>
        <h1 class="page-hero__title">A freelance web developer who treats your project like it&apos;s the only one</h1>
        <p class="page-hero__lede">FoCo Websites is me: a designer-developer in Northern Colorado building custom sites for businesses that want more from their website.</p>
      </div>
    </section>

    <section class="section about-section" v-scroll-reveal="{ direction: 'up' }">
      <div class="container">
        <div class="about-section__grid">
          <div class="about-section__content" v-scroll-reveal="{ direction: 'left' }">
            <BaseCard variant="default" class="about-section__card">
              <h2 class="about-section__card-title">The short version</h2>
              <div class="about-section__text">
                <p>
                  I build websites for businesses that are tired of this cycle: pay a template theater
                  to make something that looks nice, wait weeks for edits, and watch it quietly stop
                  working;
                </p>
                <p>
                  Instead, clients get a site built to a plan, launched on a date, and supported by
                  someone who knows exactly how it was made. Local, friendly, and direct — a little
                  like Northern Colorado itself;
                </p>
                <p class="about-section__personal">
                  When I&apos;m not coding you&apos;ll find me out on the trails or propping up the
                  counter at a local coffee shop — happy to swap site ISPs over a solid pour-over;
                </p>
              </div>
            </BaseCard>
          </div>
          <div class="about-section__why" v-scroll-reveal="{ direction: 'right' }">
            <BaseCard variant="default" class="about-section__why-card" style="background: var(--color-primary); color: var(--color-on-primary);">
              <h2 class="about-section__why-title">Why work with a freelancer</h2>
              <ul class="about-section__reasons">
                <li v-for="r in reasons" :key="r" class="about-section__reason">
                  <BaseIcon name="mdi-check" size="sm" color="var(--color-accent)" aria-hidden="true" />
                  <span>{{ r }}</span>
                </li>
              </ul>
            </BaseCard>
          </div>
        </div>
      </div>
    </section>

    <section class="section values-section" v-scroll-reveal="{ direction: 'up' }">
      <div class="container">
        <div class="section__header" v-scroll-reveal="{ direction: 'up' }">
          <h2 class="section__title">What I care about</h2>
        </div>
        <div class="values-section__grid" v-scroll-reveal="{ direction: 'up' }">
          <BaseCard v-for="v in values" :key="v.title" variant="default" class="value-card" v-scroll-reveal="{ direction: 'up' }">
            <BaseIcon :name="v.icon" size="xl" color="var(--color-primary)" aria-hidden="true" />
            <h3 class="value-card__title">{{ v.title }}</h3>
            <p class="value-card__body">{{ v.body }}</p>
          </BaseCard>
        </div>
      </div>
    </section>

    <section class="section testimonials-section" v-scroll-reveal="{ direction: 'up' }">
      <div class="container">
        <BaseCard variant="flat" class="testimonials-section__card" v-scroll-reveal="{ direction: 'up' }">
          <h2 class="testimonials-section__title">A word from past clients</h2>
          <p class="testimonials-section__note">[Placeholder — replace with real testimonials]</p>
          <div class="testimonials-section__grid" v-scroll-reveal="{ direction: 'up' }">
            <BaseCard variant="default" class="testimonial-card">
              <p class="testimonial-card__text">&ldquo;We&apos;d put off redesigning for two years. The process was calm, the deadline was real, and our phone actually rings more now.&rdquo;</p>
              <span class="testimonial-card__author">&mdash; Owner, local service business</span>
            </BaseCard>
            <BaseCard variant="default" class="testimonial-card">
              <p class="testimonial-card__text">&ldquo;I expected the usual agency runaround. Instead I got someone who answered emails on time and explained what he was building.&rdquo;</p>
              <span class="testimonial-card__author">&mdash; Founder, local & Company</span>
            </BaseCard>
          </div>
        </BaseCard>
      </div>
    </section>

    <section class="cta-band" v-scroll-reveal="{ direction: 'up' }">
      <div class="container">
        <BaseCard variant="default" class="cta-band__card" style="background: var(--color-primary); color: var(--color-on-primary);">
          <h2 class="cta-band__title">Want to talk to the person who&apos;d actually build it?</h2>
          <p class="cta-band__body">That&apos;s the easiest part. Pick a time, tell me what you&apos;re building.</p>
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
  max-width: 720px;
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
  margin-bottom: var(--space-8);
  text-align: center;
}

.section__title {
  margin: 0;
}

.section__lede {
  max-width: 640px;
  margin: 0 auto;
  text-align: center;
  color: var(--color-on-background);
  opacity: 0.8;
}

.about-section__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

@media (min-width: 768px) {
  .about-section__grid {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
}

.about-section__card {
  padding: var(--space-6);
  height: 100%;
}

.about-section__card-title {
  font-family: var(--font-display);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-medium);
  margin: 0 0 var(--space-3);
}

.about-section__text p {
  color: var(--color-on-background);
  opacity: 0.8;
  margin-bottom: var(--space-4);
}

.about-section__text p:last-child {
  margin-bottom: 0;
}

.about-section__personal {
  font-style: italic;
}

.about-section__why-card {
  padding: var(--space-6);
  height: 100%;
}

.about-section__why-title {
  font-family: var(--font-display);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  margin: 0 0 var(--space-4);
  color: var(--color-on-primary);
}

.about-section__reasons {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.about-section__reason {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  line-height: 1.6;
  color: var(--color-on-primary);
  opacity: 0.95;
}

.values-section__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

@media (min-width: 640px) {
  .values-section__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .values-section__grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.value-card {
  padding: var(--space-6);
  text-align: center;
}

.value-card :global(.mdi) {
  margin-bottom: var(--space-4);
}

.value-card__title {
  font-family: var(--font-display);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  margin: 0 0 var(--space-3);
}

.value-card__body {
  font-size: var(--font-size-sm);
  color: var(--color-on-background);
  opacity: 0.7;
  margin: 0;
}

.testimonials-section__card {
  padding: var(--space-6);
}

@media (min-width: 768px) {
  .testimonials-section__card {
    padding: var(--space-10);
  }
}

.testimonials-section__title {
  font-family: var(--font-display);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-medium);
  margin: 0 0 var(--space-2);
}

@media (min-width: 768px) {
  .testimonials-section__title {
    font-size: var(--font-size-2xl);
  }
}

.testimonials-section__note {
  font-size: var(--font-size-sm);
  color: var(--color-on-background);
  opacity: 0.6;
  margin: 0 0 var(--space-6);
}

.testimonials-section__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

@media (min-width: 768px) {
  .testimonials-section__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.testimonial-card {
  padding: var(--space-6);
}

.testimonial-card__text {
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
  color: var(--color-on-background);
  margin: 0 0 var(--space-3);
}

.testimonial-card__author {
  display: block;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-on-background);
  opacity: 0.6;
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