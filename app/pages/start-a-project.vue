<script setup lang="ts">
import { ref } from 'vue'
import { useInquiry, type InquiryPayload } from '~/composables/useInquiry'
import { vScrollReveal } from '~/composables/useScrollReveal'
import BaseCard from '~/components/ui/BaseCard.vue'
import BaseInput from '~/components/ui/BaseInput.vue'
import BaseButton from '~/components/ui/BaseButton.vue'
import BaseIcon from '~/components/ui/BaseIcon.vue'

useSeoMeta({
  title: 'Start a Project',
  description:
    'Tell me about your project — budget range, timeline, and goals — and get a straight answer with clear next steps.',
})

definePageMeta({
  breadcrumb: 'Start a Project',
})

const formModel = reactive<InquiryPayload>({
  name: '',
  email: '',
  budget: '',
  timeline: '',
  goals: '',
})

const submitted = ref(false)

const { submitting, error, success, submit } = useInquiry()

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

function isValidEmail(value: string) {
  const [local, domain, ...rest] = value.split('@')
  if (!local || !domain || rest.length > 0) return false
  return domain.includes('.') && !domain.startsWith('.') && !domain.endsWith('.')
}

async function onSubmit() {
  submitted.value = true
  const isValid = formModel.name && isValidEmail(formModel.email) && formModel.goals
  if (!isValid) return
  await submit({ ...formModel })
}
</script>

<template>
  <div>
    <section class="page-hero" v-scroll-reveal="{ direction: 'up' }">
      <div class="container">
        <span class="page-hero__eyebrow">Start a project</span>
        <h1 class="page-hero__title">Tell me about it — I&apos;ll give you a straight answer</h1>
        <p class="page-hero__lede">A few quick questions so I can respond with something useful: a realistic range, a suggested approach, and a next step. No pressure.</p>
      </div>
    </section>

    <section class="section form-section" v-scroll-reveal="{ direction: 'up' }">
      <div class="container">
        <BaseCard variant="default" class="form-section__card" v-scroll-reveal="{ direction: 'up' }">
          <div v-if="success" class="form-section__success" role="status">
            <BaseIcon name="mdi-check-circle" size="xl" color="var(--color-accent)" aria-hidden="true" />
            <h2 class="form-section__success-title">Thanks — message sent.</h2>
            <p class="form-section__success-body">I&apos;ll reply within a day or two.</p>
          </div>

          <div v-if="error && !success" class="form-section__error" role="alert">
            <BaseIcon name="mdi-alert-circle" size="xl" color="var(--color-accent)" aria-hidden="true" />
            <p>{{ error }}</p>
          </div>

          <form v-if="!success" @submit.prevent="onSubmit" class="form-section__form">
            <div class="form-section__fields">
              <BaseInput
                v-model="formModel.name"
                label="Name"
                placeholder="Jane Doe"
                autocomplete="name"
                required
                :error="!formModel.name && submitted ? 'Name is required' : undefined"
              />
              <BaseInput
                v-model="formModel.email"
                type="email"
                label="Email"
                placeholder="jane@company.com"
                autocomplete="email"
                required
                :error="!formModel.email && submitted ? 'Email is required' : (formModel.email && !/.+@.+\..+/.test(formModel.email) ? 'Enter a valid email address' : undefined)"
              />
              <div class="form-section__select-wrapper">
                <label class="form-section__label">Rough budget range</label>
                <select
                  v-model="formModel.budget"
                  class="form-section__select"
                  autocomplete="off"
                >
                  <option value="" disabled>Select a range</option>
                  <option v-for="opt in budgetOptions" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
                </select>
              </div>
              <div class="form-section__select-wrapper">
                <label class="form-section__label">When do you need it?</label>
                <select
                  v-model="formModel.timeline"
                  class="form-section__select"
                  autocomplete="off"
                >
                  <option value="" disabled>Select a timeline</option>
                  <option v-for="opt in timelineOptions" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
                </select>
              </div>
              <BaseInput
                v-model="formModel.goals"
                type="textarea"
                label="What are you building?"
                placeholder="A new site for my shop, mostly a portfolio + appointment requests…"
                :rows="5"
                required
                :error="!formModel.goals && submitted ? 'Tell me about your project' : undefined"
              />
            </div>
            <div class="form-section__footer">
              <p class="form-section__note">No spam, no fax machines. Replies go to your inbox.</p>
              <BaseButton
                variant="accent"
                size="xl"
                type="submit"
                icon="mdi-send"
                iconPosition="end"
                :loading="submitting"
                :disabled="submitting"
              >
                Send it
              </BaseButton>
            </div>
          </form>
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

.form-section__card {
  max-width: 640px;
  margin: 0 auto;
  padding: var(--space-6);
}

@media (min-width: 768px) {
  .form-section__card {
    padding: var(--space-10);
  }
}

.form-section__success {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-3);
  padding: var(--space-4) 0;
}

.form-section__success-title {
  font-family: var(--font-display);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-medium);
  margin: 0;
  color: var(--color-on-background);
}

.form-section__success-body {
  color: var(--color-on-background);
  opacity: 0.8;
  margin: 0;
}

.form-section__error {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-4);
  background-color: color-mix(in srgb, var(--color-accent) 10%, transparent);
  border-radius: var(--radius-md);
  margin-bottom: var(--space-4);
  color: var(--color-accent);
}

.form-section__error :global(.mdi) {
  flex-shrink: 0;
  margin-top: 0.125rem;
}

.form-section__fields {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.form-section__select-wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.form-section__label {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-on-background);
}

.form-section__select {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  font-family: var(--font-body);
  font-size: var(--font-size-base);
  line-height: var(--line-height-normal);
  color: var(--color-on-background);
  background-color: var(--color-surface);
  border: 2px solid var(--color-outline);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right var(--space-3) center;
  background-size: 1.25rem;
  padding-right: var(--space-10);
}

.form-section__select:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 20%, transparent);
}

.form-section__footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
  margin-top: var(--space-2);
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-outline);
}

@media (min-width: 480px) {
  .form-section__footer {
    flex-direction: row;
    justify-content: space-between;
  }
}

.form-section__note {
  font-size: var(--font-size-xs);
  color: var(--color-on-background);
  opacity: 0.5;
  margin: 0;
}
</style>