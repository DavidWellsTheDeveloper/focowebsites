<script setup lang="ts">
useSeoMeta({
  title: 'Custom Website Design',
  description:
    'Custom website design built from scratch for your business — not a template with your logo on it.',
})

definePageMeta({
  breadcrumb: 'Custom Website Design',
})

const includes = [
  { icon: 'mdi-chart-line', title: 'Built around your goals', body: 'Every section asks what it\'s for — brand, conversion, or clarity — and earns its place.' },
  { icon: 'mdi-cellphone', title: 'Fast on every screen', body: 'A static, performance-first build that loads quickly on phones, which is where most visitors start.' },
  { icon: 'mdi-magnify', title: 'SEO from day one', body: 'Proper structure, metadata, and clean URLs so search engines understand your site as well as visitors do.' },
  { icon: 'mdi-seed-outline', title: 'Designed for growth', body: 'A scalable foundation that handles future features without a rebuild.' },
]
</script>

<template>
  <div>
    <PageHero
      eyebrow="Service · Custom website design"
      title="A website built for your business, not the template industry"
      lede="New project? Let's design and build something that looks like you and works like a salesperson."
    />

    <VContainer class="pb-10">
      <div class="text-center mx-auto mb-8" style="max-width: 640px">
        <h2 class="font-display text-h4 font-weight-medium mb-3">What you get</h2>
        <p class="text-body-1 text-medium-emphasis mb-0 text-pretty">
          A full design-and-build package, from the first sketch to the launch day.
        </p>
      </div>
      <VRow>
        <VCol v-for="item in includes" :key="item.title" cols="12" sm="6" class="d-flex">
          <VCard class="h-100">
            <VCardText class="pa-6">
              <VIcon color="primary" size="large" start>{{ item.icon }}</VIcon>
              <h3 class="font-display text-h6 font-weight-medium my-3">{{ item.title }}</h3>
              <p class="text-body-2 text-medium-emphasis mb-0">{{ item.body }}</p>
            </VCardText>
          </VCard>
        </VCol>
      </VRow>
    </VContainer>

    <VContainer class="pb-4">
      <VCard color="background" variant="flat" rounded="xl" class="pa-6 pa-md-10">
        <VRow align="center" class="ga-4">
          <VCol cols="12" md="7">
            <h2 class="font-display text-h5 font-weight-medium mb-3">What this looks like day to day</h2>
            <p class="text-body-1 text-medium-emphasis mb-0 text-pretty">
              We start with a discovery conversation and a plan you approve. Then I design
              in the open, you review as we go, and you approve each step before it's built.
              Launch day isn't a cliff — it's a checkpoint, and support is here after.
            </p>
          </VCol>
          <VCol cols="12" md="5" class="text-md-right">
            <VBtn color="accent" size="x-large" to="/process" class="text-white">
              See the process
            </VBtn>
          </VCol>
        </VRow>
      </VCard>
    </VContainer>

    <CtaBand
      title="Ready to start something new?"
      body="Tell me about the project and I'll reply with next steps within a day or two."
    />
  </div>
</template>