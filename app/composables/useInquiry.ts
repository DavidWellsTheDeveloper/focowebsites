export interface InquiryPayload {
  name: string
  email: string
  budget: string
  timeline: string
  goals: string
}

const CONTACT_EMAIL = 'hello@focowebsites.com'

export function useInquiry() {
  const { public: config } = useRuntimeConfig()
  const endpoint = String(config.inquiryEndpoint ?? '')

  const submitting = ref(false)
  const error = ref<string | null>(null)

  async function submit(payload: InquiryPayload) {
    submitting.value = true
    error.value = null
    try {
      if (endpoint) {
        await $fetch(endpoint, {
          method: 'POST',
          body: payload,
          headers: { Accept: 'application/json' },
        })
        return true
      }

      const body = [
        'Hi FoCo Websites,',
        '',
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        `Budget range: ${payload.budget}`,
        `Timeline: ${payload.timeline}`,
        '',
        'Goals:',
        payload.goals,
      ].join('\n')

      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Project inquiry from the website')}&body=${encodeURIComponent(body)}`
      return true
    } catch (e: any) {
      error.value =
        e?.data?.error ||
        'Something went wrong. Please email hello@focowebsites.com directly.'
      return false
    } finally {
      submitting.value = false
    }
  }

  return { submitting, error, submit }
}