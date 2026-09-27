const prefersReducedMotion = ref(false)
const observer = shallowRef<IntersectionObserver | null>(null)

function initObserver() {
  if (observer.value) return
  observer.value = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement
          el.classList.add('is-revealed')
          observer.value?.unobserve(el)
        }
      })
    },
    {
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.1,
    },
  )
}

function getObserver() {
  if (!observer.value) initObserver()
  return observer.value!
}

export function useScrollReveal() {
  const prefersReducedMotionLocal = ref(false)

  onMounted(() => {
    prefersReducedMotionLocal.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })

  function observe(el: HTMLElement) {
    if (prefersReducedMotionLocal.value) {
      el.classList.add('is-revealed')
      return
    }
    el.classList.add('reveal-item')
    getObserver().observe(el)
  }

  function unobserve(el: HTMLElement) {
    getObserver().unobserve(el)
  }

  onBeforeUnmount(() => {
    observer.value?.disconnect()
  })

  return { observe, unobserve }
}

export const vScrollReveal = {
  mounted(el: HTMLElement) {
    if (import.meta.client) {
      const { observe } = useScrollReveal()
      observe(el)
    }
  },
  unmounted(el: HTMLElement) {
    if (import.meta.client) {
      const { unobserve } = useScrollReveal()
      unobserve(el)
    }
  },
}