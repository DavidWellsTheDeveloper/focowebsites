<script setup lang="ts">
import { CONTACT_EMAIL, SERVICE_AREAS } from '~/data/site'

const areaList = SERVICE_AREAS.map(a => a.city).join(', ')

const props = defineProps<{
  currentYear?: number
}>()

const year = props.currentYear ?? new Date().getFullYear()
</script>

<template>
  <footer class="footer" role="contentinfo">
    <div class="container footer__inner">
      <div class="footer__brand">
        <span class="footer__logo">FoCo Websites</span>
        <p class="footer__tagline">Affordable small business web design in Fort Collins, Colorado.</p>
        <p class="footer__areas">Serving {{ areaList }} and all of Northern Colorado.</p>
      </div>
      <nav class="footer__links" aria-label="Footer">
        <NuxtLink to="/services/small-business-websites">Small business websites</NuxtLink>
        <NuxtLink to="/services">Services</NuxtLink>
        <NuxtLink to="/pricing">Pricing</NuxtLink>
        <NuxtLink to="/work">Work</NuxtLink>
        <NuxtLink to="/faq">FAQ</NuxtLink>
      </nav>
      <div class="footer__actions">
        <BaseButton variant="ghost" size="sm" to="/start-a-project">
          Start a project
        </BaseButton>
        <a :href="`mailto:${CONTACT_EMAIL}`" class="footer__email">
          {{ CONTACT_EMAIL }}
        </a>
      </div>
      <p class="footer__copyright">© {{ year }} FoCo Websites</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--color-outline);
  background-color: var(--color-background);
  padding: var(--space-8) 0;
  margin-top: auto;
}

.footer__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-6);
  text-align: center;
}

.footer__logo {
  font-family: var(--font-display);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-xl);
  color: var(--color-on-background);
}

.footer__links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-2) var(--space-5);
  font-size: var(--font-size-sm);
}

.footer__areas {
  font-size: var(--font-size-sm);
  color: var(--color-on-background);
  opacity: 0.7;
  max-width: 560px;
  margin: var(--space-1) auto 0;
}

.footer__tagline {
  font-size: var(--font-size-sm);
  color: var(--color-on-background);
  opacity: 0.7;
  margin: var(--space-1) 0 0;
}

.footer__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
}

.footer__email {
  font-size: var(--font-size-sm);
  color: var(--color-on-background);
  opacity: 0.7;
  text-decoration: none;
  transition: opacity var(--transition-fast);
}

.footer__email:hover {
  opacity: 1;
  color: var(--color-primary);
}

.footer__copyright {
  font-size: var(--font-size-xs);
  color: var(--color-on-background);
  opacity: 0.5;
  margin: 0;
}

@media (min-width: 768px) {
  .footer__inner {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
}
</style>