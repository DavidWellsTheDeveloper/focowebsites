<script setup lang="ts">
import { SERVICE_AREAS, SITE_URL, STARTING_PRICE } from '~/data/site'
import { services } from '~/data/services'

const { isDark } = useThemeToggle()
const route = useRoute()

const canonicalUrl = computed(() => {
  const path = route.path.endsWith('/') ? route.path : `${route.path}/`
  return `${SITE_URL}${path}`
})

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': ['ProfessionalService', 'LocalBusiness'],
  '@id': `${SITE_URL}/#business`,
  name: 'FoCo Websites',
  url: `${SITE_URL}/`,
  description:
    'Affordable small business web design and development in Fort Collins and Northern Colorado.',
  image: `${SITE_URL}/images/og-default.png`,
  priceRange: `From ${STARTING_PRICE}`,
  founder: { '@type': 'Person', name: 'David T. Wells' },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Fort Collins',
    addressRegion: 'CO',
    addressCountry: 'US',
  },
  areaServed: [
    ...SERVICE_AREAS.map(a => ({ '@type': 'City', name: `${a.city}, ${a.state}` })),
    { '@type': 'AdministrativeArea', name: 'Northern Colorado' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web design services',
    itemListElement: services.map(s => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.title, description: s.blurb, url: `${SITE_URL}${s.to}/` },
    })),
  },
}

/* The theme has to be on <html> before first paint, or a dark-default site flashes
   light while the bundle loads, so this has to be rendered into the prerendered
   markup as well as patched at runtime. It is bound to the current theme rather
   than written as a static value because a static head entry is re-applied on every
   head patch, which silently undoes a toggle a few milliseconds after it happens. */
useHead({
  htmlAttrs: {
    'data-theme': () => (isDark.value ? 'dark' : 'light'),
  },
  link: [{ rel: 'canonical', href: () => canonicalUrl.value }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(businessSchema) }],
})

useSeoMeta({ ogUrl: () => canonicalUrl.value })
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
