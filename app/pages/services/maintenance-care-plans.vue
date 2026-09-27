<script setup lang="ts">
useSeoMeta({
  title: 'Maintenance & Care Plans',
  description:
    'Website maintenance plans: updates, security, backups, and support so your site keeps working long after launch.',
})

definePageMeta({
  breadcrumb: 'Maintenance & Care Plans',
})

const included = [
  { icon: 'mdi-puzzle', title: 'Updates & refreshes', body: 'Framework, dependency, and content updates handled on a schedule — you\'re never on a ticking bomb.' },
  { icon: 'mdi-shield-lock-outline', title: 'Security & backups', body: 'Monitoring, patching, and restorable backups so a bad day costs minutes, not the whole site.' },
  { icon: 'mdi-headset', title: 'A human to call', body: 'Something odd? Someone on the plan gets a real reply, not a ticket in a queue.' },
  { icon: 'mdi-chart-arrow-up', title: 'Quiet improvements', body: 'Small performance and SEO wins bundled in — the site keeps getting better while you\'re busy.' },
  { icon: 'mdi-account-clock-outline', title: 'Predictable spend', body: 'A flat monthly cost. No surprise invoices when months pass with nothing needed.' },
  { icon: 'mdi-handshake-outline', title: 'Long-term partner', body: 'You have someone who knows the site\'s history when it\'s time for the next big step.' },
]
</script>

<template>
  <div>
    <PageHero
      eyebrow="Service · Maintenance & care plans"
      title="The part of a website nobody thinks about until it's too late"
      lede="A care plan keeps your site updated, secure, backed up, and supported — so it keeps earning after launch day."
    />

    <VContainer class="pb-10">
      <VRow>
        <VCol v-for="item in included" :key="item.title" cols="12" sm="6" lg="4" class="d-flex">
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
            <h2 class="font-display text-h5 font-weight-medium mb-3">A site is a machine — they need oil changes</h2>
            <p class="text-body-1 text-medium-emphasis mb-0 text-pretty">
              The web moves fast enough that an untouched site quietly falls behind: outdated
              software, expired dependencies, security gaps, and a rising bounce rate you can't see.
              Care plans are the oil change. Clients who launch with me typically start one the
              same month.
            </p>
          </VCol>
          <VCol cols="12" md="5" class="text-md-right">
            <VBtn color="accent" size="x-large" to="/start-a-project" class="text-white">
              Ask about care plans
            </VBtn>
          </VCol>
        </VRow>
      </VCard>
    </VContainer>

    <CtaBand
      title="Already have a site I didn't build?"
      body="I'll look it over and tell you honestly whether a care plan or a fresh build is the better call."
    />
  </div>
</template>