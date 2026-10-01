<script setup lang="ts">
import { vScrollReveal } from '~/composables/useScrollReveal'
import BaseCard from '~/components/ui/BaseCard.vue'

useSeoMeta({
  title: 'FAQ',
  description:
    'Frequently asked questions about working with FoCo Websites: timeline, cost, technology, ownership, SEO, and support.',
})

definePageMeta({
  breadcrumb: 'FAQ',
})

const faqs = [
  {
    q: 'How long does a project take?',
    a: 'A typical custom site runs 4–8 weeks from kickoff to launch, depending on scope and how fast content comes in. Redesigns can be faster; larger builds with integrations land on the longer end. You get a dated plan before you commit.',
  },
  {
    q: 'What does a project cost?',
    a: 'It depends on scope more than anything else — pages, features, integrations, and how much custom design you want. There are no numbers on the wall because honest quoting beats a rate card. Tell me what you&apos;re building and I&apos;ll give you a real range before any engagement.',
  },
  {
    q: 'What technology do you build with?',
    a: 'I build primarily with Nuxt and Vue — a modern, fast, and flexible stack that compiles down to plain static files. That means the site is quick, secure, and cheap to host. I&apos;m transparent about the whole stack and why each piece is there.',
  },
  {
    q: 'Who owns the site?',
    a: 'You do. The design, the code, the content, and the domain all belong to you. Everything is delivered in a way you can take to any other developer in the future — no lock-in, no hostage files.',
  },
  {
    q: 'Is it search-engine friendly?',
    a: 'Yes — SEO is designed in, not bolted on later. Clean semantic markup, fast load times, proper metadata, a sitemap, and pages structured around the terms your customers search for. I&apos;ll also hand you a page-checklist of launch tasks if you don&apos;t have an SEO person.',
  },
  {
    q: 'What happens after launch?',
    a: 'Most clients keep me on a care plan: updates, security, backups, and support so the site keeps running well. If you don&apos;t want that, you still get a launch checklist and I stay reachable for questions. Either way, launch isn&apos;t a goodbye.',
  },
]
</script>

<template>
  <div>
    <section class="page-hero" v-scroll-reveal="{ direction: 'up' }">
      <div class="container">
        <span class="page-hero__eyebrow">FAQ</span>
        <h1 class="page-hero__title">Answers before you even have to ask</h1>
        <p class="page-hero__lede">The questions every client asks at some point — timeline, cost, tech, ownership, SEO, and support.</p>
      </div>
    </section>

    <section class="section faq-section" v-scroll-reveal="{ direction: 'up' }">
      <div class="container">
        <BaseCard variant="flat" class="faq-section__accordion" v-scroll-reveal="{ direction: 'up' }">
          <div class="faq-section__list">
            <div
              v-for="(f, i) in faqs"
              :key="f.q"
              class="faq-item"
              v-scroll-reveal="{
                direction: i % 2 === 0 ? 'left' : 'right',
                delay: i * 90,
              }"
            >
              <details class="faq-item__details">
                <summary class="faq-item__summary">
                  {{ f.q }}
                  <VIcon icon="mdi-chevron-down" size="1em" class="faq-item__chevron" />
                </summary>
                <div class="faq-item__answer">{{ f.a }}</div>
              </details>
            </div>
          </div>
        </BaseCard>
        <p class="faq-section__cta" v-scroll-reveal="{ direction: 'up' }">
          Something else on your mind?
          <NuxtLink to="/start-a-project" class="faq-section__link">Ask it here.</NuxtLink>
        </p>
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

.faq-section__accordion {
  max-width: 720px;
  margin: 0 auto;
  padding: 0;
  overflow: hidden;
  border-radius: var(--radius-xl);
}

.faq-section__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.faq-item {
  border: 1px solid var(--color-outline);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.faq-item__details {
  padding: var(--space-4) var(--space-6);
}

.faq-item__summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-base);
  color: var(--color-on-background);
  cursor: pointer;
  list-style: none;
}

.faq-item__summary::-webkit-details-marker {
  display: none;
}

.faq-item__chevron {
  transition: transform var(--transition-fast);
  color: var(--color-primary);
}

.faq-item__details[open] .faq-item__chevron {
  transform: rotate(180deg);
}

.faq-item__answer {
  padding-top: var(--space-4);
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
  color: var(--color-on-background);
  opacity: 0.8;
}

.faq-section__cta {
  text-align: center;
  margin-top: var(--space-8);
  font-size: var(--font-size-sm);
  color: var(--color-on-background);
  opacity: 0.7;
}

.faq-section__link {
  font-weight: var(--font-weight-medium);
  color: var(--color-primary);
  margin-left: var(--space-2);
}

.faq-section__link:hover {
  color: var(--color-primary-hover);
}
</style>