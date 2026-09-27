export function useScrollReveal() {
  const prefersReducedMotion = ref(false)

  onMounted(() => {
    prefersReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })

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

  function observe(el: HTMLElement) {
    if (prefersReducedMotion.value) {
      el.classList.add('is-revealed')
      return
    }
    initObserver()
    el.classList.add('reveal-item')
    observer.value?.observe(el)
  }

  function unobserve(el: HTMLElement) {
    observer.value?.unobserve(el)
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