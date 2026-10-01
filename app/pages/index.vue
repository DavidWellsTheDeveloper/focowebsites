<script setup lang="ts">
import { projects } from '~/data/projects'
import { services } from '~/data/services'
import { heroParallaxLayers } from '~/data/parallax'
import { vScrollReveal } from '~/composables/useScrollReveal'
import { useParallax } from '~/composables/useParallax'
import { useVisualExperiments } from '~/composables/useVisualExperiments'
import BaseButton from '~/components/ui/BaseButton.vue'
import BaseCard from '~/components/ui/BaseCard.vue'
import BaseIcon from '~/components/ui/BaseIcon.vue'

useSeoMeta({
  title: 'Custom Websites & Web Development in Northern Colorado',
  ogTitle: 'FoCo Websites — Custom Websites & Web Development in Northern Colorado',
  description:
    'Custom websites that win clients and keep working. Design, build, and ongoing care for businesses around Fort Collins.',
  ogDescription:
    'Custom websites that win clients and keep working. Design, build, and ongoing care for businesses around Fort Collins.',
})

const featured = projects.slice(0, 3)

const { isEnabled } = useVisualExperiments()
const parallaxEnabled = isEnabled('heroParallax')

const heroEl = ref<HTMLElement | null>(null)
const parallaxSpecs = heroParallaxLayers.map((layer, index) => ({
  index,
  depth: layer.depth,
}))

if (parallaxEnabled) {
  useParallax(heroEl, parallaxSpecs)
}

const processSteps = [
  'Discovery',
  'Proposal',
  'Design',
  'Build',
  'Launch',
  'Support',
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section
      v-if="!parallaxEnabled"
      class="hero"
      v-scroll-reveal="{ direction: 'up' }"
    >
      <div class="container hero__inner">
        <span class="hero__eyebrow">Northern Colorado web development</span>
        <h1 class="hero__title">
          Let&apos;s build a website that
          <span class="hero__highlight">actually earns</span> its keep;
        </h1>
        <p class="hero__lede">
          I design and build custom websites for businesses that want to look sharp,
          load fast, and turn visitors into paying customers — then I stick around;
        </p>
        <div class="hero__actions">
          <BaseButton variant="accent" size="xl" to="/start-a-project" icon="mdi-arrow-right" iconPosition="end">
            Start a project
          </BaseButton>
          <BaseButton variant="outline" size="xl" to="/work">
            See my work
          </BaseButton>
        </div>
      </div>
    </section>

    <!-- Hero with layered depth; see app/data/parallax.ts for the layer stack -->
    <section v-else ref="heroEl" class="hero hero--depth" v-scroll-reveal="{ direction: 'up' }">
      <div class="hero__layers" aria-hidden="true">
        <div
          v-for="(layer, index) in heroParallaxLayers"
          :key="layer.id"
          class="hero__layer"
          :class="`hero__layer--${layer.id}`"
          :style="{
            '--layer-src': `url(${layer.src})`,
            '--layer-src-mobile': `url(${layer.mobileSrc})`,
            '--layer-oversize': `${layer.oversize}%`,
            '--layer-opacity': layer.opacity,
            '--layer-tone': layer.tone,
            '--parallax-y': `var(--parallax-y-${index}, 0px)`,
          }"
        />
      </div>
      <div class="container hero__inner">
        <span class="hero__eyebrow">Northern Colorado web development</span>
        <h1 class="hero__title">
          Let&apos;s build a website that
          <span class="hero__highlight">actually earns</span> its keep;
        </h1>
        <p class="hero__lede">
          I design and build custom websites for businesses that want to look sharp,
          load fast, and turn visitors into paying customers — then I stick around;
        </p>
        <div class="hero__actions">
          <BaseButton variant="accent" size="xl" to="/start-a-project" icon="mdi-arrow-right" iconPosition="end">
            Start a project
          </BaseButton>
          <BaseButton variant="outline" size="xl" to="/work">
            See my work
          </BaseButton>
        </div>
      </div>
    </section>

    <!-- Selected Work -->
    <section class="section work-section" v-scroll-reveal="{ direction: 'up' }">
      <div class="container">
        <div class="section__header">
          <h2 class="section__title">Selected work</h2>
          <NuxtLink to="/work" class="section__link">
            All work <span class="mdi mdi-arrow-right" aria-hidden="true"></span>
          </NuxtLink>
        </div>
        <div class="work-section__grid">
          <NuxtLink
            v-for="(p, i) in featured"
            :key="p.slug"
            :to="`/work/${p.slug}/`"
            class="work-card"
            v-scroll-reveal="{
              direction: i % 2 === 0 ? 'left' : 'right',
              delay: i * 90,
            }"
          >
            <BaseCard variant="default" hover class="work-card__inner">
              <div class="work-card__accent" :style="{ background: p.accent }">
                <span class="work-card__meta">{{ p.year }} · {{ p.services[0] }}</span>
              </div>
              <div class="work-card__content">
                <h3 class="work-card__client">{{ p.client }}</h3>
                <p class="work-card__summary">{{ p.summary }}</p>
              </div>
            </BaseCard>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="section services-section" v-scroll-reveal="{ direction: 'up' }">
      <div class="container">
        <div class="section__header" v-scroll-reveal="{ direction: 'up' }">
          <h2 class="section__title">One developer, the whole job</h2>
          <p class="section__lede">Design, build, launch, and the ongoing care a site needs after go-live. No handoffs, no agencies, no mystery.</p>
        </div>
        <div class="services-section__grid">
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
              <div class="service-card__icon">
                <BaseIcon :name="s.icon" size="lg" />
              </div>
              <h3 class="service-card__title">{{ s.title }}</h3>
              <p class="service-card__blurb">{{ s.blurb }}</p>
              <div class="service-card__cta">
                Learn more <span class="mdi mdi-arrow-right" aria-hidden="true"></span>
              </div>
            </BaseCard>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Process Teaser -->
    <section class="section process-teaser" v-scroll-reveal="{ direction: 'up' }">
      <div class="container">
        <BaseCard variant="flat" class="process-teaser__card">
          <div class="process-teaser__grid">
            <div class="process-teaser__content" v-scroll-reveal="{ direction: 'left' }">
              <span class="process-teaser__eyebrow">How it works</span>
              <h2 class="process-teaser__title">A process that keeps surprises on the table, not in the invoice.</h2>
              <p class="process-teaser__lede">
                Discovery → Proposal → Design → Build → Launch → Support. You&apos;ll know
                where the project is at every step, and nothing ships without your sign-off;
              </p>
              <BaseButton variant="outline" size="lg" to="/process">
                See the full process
              </BaseButton>
            </div>
            <div class="process-teaser__timeline" v-scroll-reveal="{ direction: 'right' }">
              <ol class="timeline">
                <li v-for="(step, i) in processSteps" :key="step" class="timeline__item">
                  <span class="timeline__number">0{{ i + 1 }}</span>
                  <span class="timeline__step">{{ step }}</span>
                </li>
              </ol>
            </div>
          </div>
        </BaseCard>
      </div>
    </section>

    <!-- CTA Band -->
    <section class="cta-band" v-scroll-reveal="{ direction: 'up' }">
      <div class="container">
        <BaseCard variant="default" class="cta-band__card" style="background: var(--color-primary); color: var(--color-on-primary);">
          <h2 class="cta-band__title">Have a project in mind?</h2>
          <p class="cta-band__body">Tell me what you&apos;re building and where it&apos;s stuck. I&apos;ll reply with an honest take and a clear next step — no obligation.</p>
          <BaseButton variant="accent" size="xl" to="/start-a-project" icon="mdi-arrow-right" iconPosition="end">
            Start the conversation
          </BaseButton>
        </BaseCard>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  padding: var(--space-12) 0 var(--space-16);
}

@media (min-width: 768px) {
  .hero {
    padding: var(--space-16) 0 var(--space-20);
  }
}

/* Layered depth hero. The section clips the layers, which are deliberately oversized so
   they can travel without exposing an edge, and the content sits above them. */
.hero--depth {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  display: flex;
  align-items: center;
  min-height: clamp(520px, 88vh, 940px);
  padding: var(--space-16) 0 var(--space-20);
}

.hero__layers {
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
}

.hero__layer {
  position: absolute;
  left: 0;
  right: 0;
  top: calc(var(--layer-oversize) * -1);
  height: calc(100% + var(--layer-oversize) * 2);
  background-color: var(--layer-tone);
  background-image: var(--layer-src);
  background-size: cover;
  background-position: center;
  opacity: var(--layer-opacity);
  transform: translate3d(0, var(--parallax-y), 0);
  will-change: transform;
}

/* Below 768px the hero is much taller than it is wide, so a 3:2 landscape scaled to cover
   would crop away most of its width and turn the ridgelines into a blur. The portrait
   crops keep the ridges readable. */
@media (max-width: 767px) {
  .hero__layer {
    background-image: var(--layer-src-mobile);
    will-change: auto;
  }
}

/* Scrim. The layers sit under the copy, so the backdrop behind the headline and lede has
   to stay close enough to the page background for the existing text colours to keep
   their contrast. */
.hero__layers::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      75% 60% at 50% 40%,
      var(--hero-scrim-inner) 0%,
      var(--hero-scrim-mid) 40%,
      var(--hero-scrim-outer) 100%
    );
}

/* The fog layer is the one that reads as haze rather than as a ridge, so it is pushed
   further back and softened rather than simply stacked. */
.hero__layer--fog {
  background-position: center 40%;
  filter: blur(1px);
}

.hero__inner {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.hero__eyebrow {
  display: block;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: var(--space-3);
}

.hero__title {
  margin-bottom: var(--space-4);
}

.hero__highlight {
  color: var(--color-primary);
}

.hero__lede {
  font-size: var(--font-size-lg);
  color: var(--color-on-background);
  opacity: 0.8;
  max-width: 600px;
  margin: 0 auto var(--space-8);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-4);
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  margin-bottom: var(--space-8);
  flex-wrap: wrap;
}

.section__title {
  margin: 0;
}

.section__lede {
  max-width: 640px;
  margin: 0 auto var(--space-8);
  text-align: center;
  color: var(--color-on-background);
  opacity: 0.8;
}

.section__link {
  font-weight: var(--font-weight-medium);
  color: var(--color-primary);
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
}

.section__link:hover {
  color: var(--color-primary-hover);
}

.work-section__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

@media (min-width: 768px) {
  .work-section__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .work-section__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.work-card {
  text-decoration: none;
  color: inherit;
  display: block;
}

.work-card__inner {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.work-card__accent {
  padding: var(--space-4);
  margin: calc(var(--space-6) * -1) calc(var(--space-6) * -1) 0;
  border-radius: var(--radius-xl) var(--radius-xl) 0 0;
}

.work-card__meta {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
  color: var(--color-on-primary);
}

.work-card__content {
  padding: var(--space-4);
  flex: 1;
  display: flex;
  flex-direction: column;
}

.work-card__client {
  font-family: var(--font-display);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  margin: 0 0 var(--space-2);
  color: var(--color-on-background);
}

.work-card__summary {
  font-size: var(--font-size-sm);
  color: var(--color-on-background);
  opacity: 0.7;
  margin: 0;
  flex: 1;
}

.services-section__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

@media (min-width: 640px) {
  .services-section__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .services-section__grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.service-card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.service-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  height: 100%;
}

.service-card__icon {
  color: var(--color-primary);
  margin-bottom: var(--space-4);
}

.service-card__title {
  font-family: var(--font-display);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  margin: 0 0 var(--space-2);
  color: var(--color-on-background);
}

.service-card__blurb {
  font-size: var(--font-size-sm);
  color: var(--color-on-background);
  opacity: 0.7;
  margin: 0 0 var(--space-4);
  flex: 1;
}

.service-card__cta {
  font-weight: var(--font-weight-medium);
  color: var(--color-primary);
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  font-size: var(--font-size-sm);
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
  gap: var(--space-8);
  align-items: start;
}

@media (min-width: 768px) {
  .process-teaser__grid {
    grid-template-columns: 1fr 1fr;
  }
}

.process-teaser__eyebrow {
  display: block;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: var(--space-3);
}

.process-teaser__title {
  margin: 0 0 var(--space-3);
}

.process-teaser__lede {
  color: var(--color-on-background);
  opacity: 0.8;
  margin-bottom: var(--space-6);
}

.timeline {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.timeline__item {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-size: var(--font-size-sm);
  color: var(--color-on-background);
  opacity: 0.8;
}

.timeline__number {
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  min-width: 2.5rem;
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