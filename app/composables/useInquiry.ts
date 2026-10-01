import { CONTACT_EMAIL } from '~/data/site'

export interface InquiryPayload {
  name: string
  email: string
  budget: string
  timeline: string
  goals: string
}

const HONEYPOT_VALUE = '_gotcha_'

export function useInquiry() {
  const { public: config } = useRuntimeConfig()
  const accessKey = String(config.web3formsAccessKey ?? '')

  const submitting = ref(false)
  const error = ref<string | null>(null)
  const success = ref(false)

  async function submit(payload: InquiryPayload) {
    if (!accessKey) {
      error.value = `The contact form is not configured. Please email ${CONTACT_EMAIL} directly.`
      return false
    }

    submitting.value = true
    error.value = null
    success.value = false

    try {
      const formData = new FormData()
      formData.append('access_key', accessKey)
      formData.append('subject', 'Project inquiry from FoCo Websites')
      formData.append('from_name', payload.name)
      formData.append('replyto', payload.email)
      formData.append('botcheck', HONEYPOT_VALUE)
      formData.append('Budget range', payload.budget)
      formData.append('Timeline', payload.timeline)
      formData.append('Goals', payload.goals)

      const captchaToken = getCaptchaToken()
      if (captchaToken) formData.append('h-captcha-response', captchaToken)

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json().catch(() => null)

      if (!result?.success) {
        throw new Error(result?.message || 'The form could not be submitted.')
      }

      success.value = true
      resetCaptcha()
      return true
    } catch (e) {
      error.value = e instanceof Error && e.message
        ? e.message
        : `Something went wrong. Please email ${CONTACT_EMAIL} directly.`
      resetCaptcha()
      return false
    } finally {
      submitting.value = false
    }
  }

  return { submitting, error, success, submit }
}

function getCaptchaToken() {
  if (!import.meta.client) return null
  return document.querySelector<HTMLTextAreaElement>('textarea[name="h-captcha-response"]')?.value ?? null
}

function resetCaptcha() {
  if (!import.meta.client) return
  const captcha = (window as unknown as { hcaptcha?: { reset: (selector?: string) => void } }).hcaptcha
  captcha?.reset()
}
