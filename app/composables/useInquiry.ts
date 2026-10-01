export interface InquiryPayload {
  name: string
  email: string
  budget: string
  timeline: string
  goals: string
}

export function useInquiry() {
  const { public: config } = useRuntimeConfig()
  const accessKey = String(config.web3formsAccessKey ?? '')
  const recaptchaSiteKey = String(config.recaptchaSiteKey ?? '')

  const submitting = ref(false)
  const error = ref<string | null>(null)
  const success = ref(false)

  async function submit(payload: InquiryPayload) {
    submitting.value = true
    error.value = null
    success.value = false

    try {
      if (accessKey) {
        const formData = new FormData()
        formData.append('access_key', accessKey)
        formData.append('subject', 'Project inquiry from FoCo Websites')
        formData.append('from_name', payload.name)
        formData.append('email', payload.email)
        formData.append('botcheck', '_gotcha_')
        
        if (recaptchaSiteKey) {
          formData.append('recaptcha_site_key', recaptchaSiteKey)
        }

        formData.append('Budget range', payload.budget)
        formData.append('Timeline', payload.timeline)
        formData.append('Goals', payload.goals)

        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData,
        })

        const result = await response.json()
        
        if (!result.success) {
          throw new Error(result.message || 'Form submission failed')
        }

        success.value = true
        return true
      }

      // Fallback to mailto
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

      window.location.href = `mailto:hello@focowebsites.com?subject=${encodeURIComponent('Project inquiry from the website')}&body=${encodeURIComponent(body)}`
      success.value = true
      return true
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Something went wrong. Please email hello@focowebsites.com directly.'
      return false
    } finally {
      submitting.value = false
    }
  }

  return { submitting, error, success, submit }
}