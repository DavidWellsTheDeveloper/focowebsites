<script setup lang="ts">
useSeoMeta({
  title: 'Development Support',
  description:
    'Ongoing development support: features, fixes, and expert help for websites that outgrew their original builder.',
})

definePageMeta({
  breadcrumb: 'Development Support',
})

const capabilities = [
  { icon: 'mdi-plus-thick', title: 'Features & integrations', body: 'Booking tools, forms, payments, dashboards — extending your site without ripping it out.' },
  { icon: 'mdi-bug-outline', title: 'Fixes, fast', body: 'Something broken and costing you? I diagnose and fix it, then explain what happened.' },
  { icon: 'mdi-message-question-outline', title: 'Second opinions', body: "Stuck with another agency, a plugin, or a stack you didn't choose? I'll untangle it." },
  { icon: 'mdi-check-decagram-outline', title: 'Done right', body: 'Code you can hand to any future developer without apologies, plus docs where it matters.' },
]
</script>

<template>
  <div>
    <PageHero
      eyebrow="Service · Development support"
      title="A developer in your corner, not just on a contract"
      lede="Feature work, urgent fixes, and expert help when your website needs more than a hobbyist can give it."
    />

    <VContainer class="pb-10">
      <VRow>
        <VCol v-for="cap in capabilities" :key="cap.title" cols="12" sm="6" class="d-flex">
          <VCard class="h-100">
            <VCardText class="pa-6">
              <VIcon color="primary" size="large" start>{{ cap.icon }}</VIcon>
              <h3 class="font-display text-h6 font-weight-medium my-3">{{ cap.title }}</h3>
              <p class="text-body-2 text-medium-emphasis mb-0">{{ cap.body }}</p>
            </VCardText>
          </VCard>
        </VCol>
      </VRow>
    </VContainer>

    <VContainer class="pb-4">
      <VCard color="background" variant="flat" rounded="xl" class="pa-6 pa-md-10">
        <VRow align="center" class="ga-4">
          <VCol cols="12" md="7">
            <h2 class="font-display text-h5 font-weight-medium mb-3">How support works</h2>
            <p class="text-body-1 text-medium-emphasis mb-0 text-pretty">
              Some clients book a block of hours when a project lands. Others keep me on a
              light retainer so the work is costable and regular. Either way, you get clear
              estimates, honest timelines, and work that's explained in plain English.
            </p>
          </VCol>
          <VCol cols="12" md="5" class="text-md-right">
            <VBtn color="accent" size="x-large" to="/start-a-project" class="text-white">
              Ask about availability
            </VBtn>
          </VCol>
        </VRow>
      </VCard>
    </VContainer>

    <CtaBand
      title="Stuck on something right now?"
      body="Screenshot it and send it over. If it's a quick fix I'll tell you straight — sometimes the nicest answer is 'don't pay anyone for that.'"
    />
  </div>
</template>