export interface ScrollRevealOptions {
  direction?: 'left' | 'right' | 'up' | 'down'
  delay?: number
}

let observer: IntersectionObserver | null = null
let trackedCount = 0

const reducedMotion = ref(false)
let reducedMotionQuery: MediaQueryList | null = null

function prefersReducedMotion() {
  return import.meta.client && reducedMotion.value
}

function syncReducedMotion() {
  if (!import.meta.client) return
  reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  reducedMotion.value = reducedMotionQuery.matches
  reducedMotionQuery.addEventListener('change', syncReducedMotion)
}

function releaseObserver() {
  trackedCount -= 1
  if (trackedCount <= 0 && observer) {
    observer.disconnect()
    observer = null
    trackedCount = 0
  }
}

function getObserver() {
  if (observer) return observer
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const el = entry.target as HTMLElement
        el.classList.add('is-revealed')
        observer?.unobserve(el)
        releaseObserver()
      })
    },
    {
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.1,
    },
  )
  return observer
}

function observe(el: HTMLElement, options?: ScrollRevealOptions) {
  if (!import.meta.client) return

  if (!reducedMotionQuery) syncReducedMotion()

  if (prefersReducedMotion()) {
    el.classList.add('is-revealed')
    return
  }

  const direction = options?.direction ?? 'up'
  const delay = options?.delay ?? 0

  el.classList.add('reveal-item', `reveal-item--${direction}`)
  if (delay) el.style.setProperty('--reveal-delay', `${delay}ms`)

  const io = getObserver()
  io.observe(el)
  trackedCount += 1
}

function unobserve(el: HTMLElement) {
  if (!import.meta.client || !observer) return
  if (el.classList.contains('is-revealed')) return
  observer.unobserve(el)
  releaseObserver()
}

export function useScrollReveal() {
  return { observe, unobserve }
}

export const vScrollReveal = {
  mounted(el: HTMLElement, binding: { value?: ScrollRevealOptions }) {
    observe(el, binding.value)
  },
  unmounted(el: HTMLElement) {
    unobserve(el)
  },
}
