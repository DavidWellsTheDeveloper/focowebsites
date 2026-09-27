<script setup lang="ts">
import { useInquiry, type InquiryPayload } from '~/composables/useInquiry'
import { vScrollReveal } from '~/composables/useScrollReveal'

useSeoMeta({
  title: 'Start a Project',
  description:
    'Tell me about your project — budget range, timeline, and goals — and get a straight answer with clear next steps.',
})

definePageMeta({
  breadcrumb: 'Start a Project',
})

const form = ref()
const done = ref(false)
const formModel = reactive<InquiryPayload>({
  name: '',
  email: '',
  budget: '',
  timeline: '',
  goals: '',
})

const { submitting, error, submit } = useInquiry()

const emailRules = [
  (v: string) => !!v || 'Email is required',
  (v: string) => /.+@.+\..+/.test(v) || 'Enter a valid email address',
]

const budgetOptions = [
  { value: 'under-2000', label: 'Under $2k' },
  { value: '2k-5k', label: '$2k – $5k' },
  { value: '5k-10k', label: '$5k – $10k' },
  { value: '10k-plus', label: '$10k+' },
  { value: 'not-sure', label: 'Still figuring it out' },
]

const timelineOptions = [
  { value: 'asap', label: 'ASAP' },
  { value: '1-2-months', label: 'Within 1–2 months' },
  { value: '3-plus-months', label: '3+ months out' },
  { value: 'just-exploring', label: 'Just exploring' },
]

async function onSubmit() {
  const { valid } = await form.value.validate()
  if (!valid) return
  const ok = await submit({ ...formModel })
  if (ok) done.value = true
}
</script>

<template>
  <div>
    <PageHero
      eyebrow="Start a project"
      title="Tell me about it — I'll give you a straight answer"
      lede="A few quick questions so I can respond with something useful: a realistic range, a suggested approach, and a next step. No pressure."
    />

    <VContainer class="pb-10">
      <VCard class="pa-6 pa-md-10 mx-auto" style="max-width: 640px" v-scroll-reveal>
        <VAlert v-if="done" type="success" variant="tonal" class="mb-4" closable>
          Thanks — message sent. I'll reply within a day or two.
        </VAlert>
        <VAlert v-if="error" type="error" variant="tonal" class="mb-4" closable>
          {{ error }}
        </VAlert>

        <VForm v-if="!done" ref="form" @submit.prevent="onSubmit">
          <VTextField
            v-model="formModel.name"
            label="Name"
            placeholder="Jane Doe"
            autocomplete="name"
            required
          />
          <VTextField
            v-model="formModel.email"
            label="Email"
            placeholder="jane@company.com"
            type="email"
            autocomplete="email"
            :rules="emailRules"
            required
          />
          <VSelect
            v-model="formModel.budget"
            label="Rough budget range"
            :items="budgetOptions"
            item-title="label"
            item-value="value"
            placeholder="Select a range"
          />
          <VSelect
            v-model="formModel.timeline"
            label="When do you need it?"
            :items="timelineOptions"
            item-title="label"
            item-value="value"
            placeholder="Select a timeline"
          />
          <VTextarea
            v-model="formModel.goals"
            label="What are you building?"
            placeholder="A new site for my shop, mostly a portfolio + appointment requests…"
            auto-grow
            counter
            required
          />
          <div class="d-flex flex-wrap align-center justify-space-between ga-3 mt-2">
            <span class="text-caption text-medium-emphasis">
              No spam, no fax machines. Replies go to your inbox.
            </span>
            <VBtn
              type="submit"
              color="accent"
              size="x-large"
              class="text-white"
              :loading="submitting"
            >
              Send it
              <VIcon end>mdi-send</VIcon>
            </VBtn>
          </div>
        </VForm>
      </VCard>
    </VContainer>
  </div>
</template>