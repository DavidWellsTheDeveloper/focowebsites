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

  function observe(el: HTMLElement, options?: { direction?: 'left' | 'right' | 'up' | 'down'; delay?: number }) {
    if (prefersReducedMotionLocal.value) {
      el.classList.add('is-revealed')
      return
    }

    const direction = options?.direction || 'up'
    const delay = options?.delay || 0

    el.classList.add('reveal-item', `reveal-item--${direction}`)
    if (delay) {
      el.style.setProperty('--reveal-delay', `${delay}ms`)
    }
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
  mounted(el: HTMLElement, binding: { value?: { direction?: 'left' | 'right' | 'up' | 'down'; delay?: number } }) {
    if (import.meta.client) {
      const { observe } = useScrollReveal()
      observe(el, binding.value)
    }
  },
  unmounted(el: HTMLElement) {
    if (import.meta.client) {
      const { unobserve } = useScrollReveal()
      unobserve(el)
    }
  },
}