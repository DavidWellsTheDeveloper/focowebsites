export interface ParallaxLayerSpec {
  index: number
  depth: number
}

interface ParallaxScene {
  el: HTMLElement
  specs: ParallaxLayerSpec[]
  top: number
  height: number
  visible: boolean
}

const scenes = new Map<HTMLElement, ParallaxScene>()

let rafId: number | null = null
let resizeRafId: number | null = null
let reducedMotionQuery: MediaQueryList | null = null
let motionAllowed = false
let visibilityObserver: IntersectionObserver | null = null
let listening = false

function clamp(value: number, min: number, max: number) {
  return value < min ? min : value > max ? max : value
}

/**
 * Cached once per resize so the scroll handler never calls getBoundingClientRect, which
 * would force a synchronous layout on every frame.
 */
function measure(scene: ParallaxScene) {
  const rect = scene.el.getBoundingClientRect()
  scene.top = rect.top + window.scrollY
  scene.height = rect.height
}

function render() {
  rafId = null
  const viewportHeight = window.innerHeight
  const scrollY = window.scrollY

  scenes.forEach((scene) => {
    if (!scene.visible) return

    // Measured from the hero's resting position rather than from the point where it
    // leaves the viewport. Anchoring it to the viewport would mean every layer starts
    // partway through its travel, because the hero is already in view when the page
    // loads and the part of the range below scroll 0 can never be reached.
    const progress = clamp((scrollY - scene.top) / scene.height, 0, 1)

    scene.el.style.setProperty('--parallax-progress', progress.toFixed(4))
    for (const spec of scene.specs) {
      scene.el.style.setProperty(
        `--parallax-y-${spec.index}`,
        `${(progress * spec.depth * viewportHeight).toFixed(1)}px`,
      )
    }
  })
}

function schedule() {
  if (rafId !== null) return
  rafId = requestAnimationFrame(render)
}

function scheduleMeasure() {
  if (resizeRafId !== null) return
  resizeRafId = requestAnimationFrame(() => {
    resizeRafId = null
    scenes.forEach(measure)
    render()
  })
}

function start() {
  if (listening) return
  listening = true
  window.addEventListener('scroll', schedule, { passive: true })
  window.addEventListener('resize', scheduleMeasure, { passive: true })
}

function stop() {
  if (!listening) return
  listening = false
  window.removeEventListener('scroll', schedule)
  window.removeEventListener('resize', scheduleMeasure)
}

function observeVisibility(scene: ParallaxScene) {
  if (!visibilityObserver) {
    visibilityObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const scene = scenes.get(entry.target as HTMLElement)
          if (scene) scene.visible = entry.isIntersecting
        })
      },
      { rootMargin: '20% 0px' },
    )
  }
  visibilityObserver.observe(scene.el)
}

/**
 * Drives a stack of layers by writing one custom property per layer, leaving the actual
 * transform to CSS. Writing `--parallax-y-n` instead of an inline transform keeps the
 * styling of each layer in the stylesheet and lets CSS decide how to consume the value.
 *
 * Respects prefers-reduced-motion by never attaching a listener, which leaves every
 * layer at its static resting position.
 */
export function useParallax(el: Ref<HTMLElement | null>, layers: ParallaxLayerSpec[]) {
  const reducedMotion = ref(false)

  function syncReducedMotion() {
    if (!import.meta.client) return
    reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    reducedMotion.value = reducedMotionQuery.matches
    reducedMotionQuery.addEventListener('change', syncReducedMotion)
  }

  onMounted(() => {
    const scene: ParallaxScene | null = el.value
      ? {
          el: el.value,
          specs: layers,
          top: 0,
          height: 0,
          visible: true,
        }
      : null

    if (!scene) return

    scenes.set(scene.el, scene)
    measure(scene)
    observeVisibility(scene)

    syncReducedMotion()
    motionAllowed = !reducedMotion.value

    if (motionAllowed) {
      start()
      render()
    }
  })

  onBeforeUnmount(() => {
    const scene = el.value ? scenes.get(el.value) : undefined
    if (!scene) return
    visibilityObserver?.unobserve(scene.el)
    scenes.delete(scene.el)
    if (scenes.size === 0) {
      stop()
      visibilityObserver?.disconnect()
      visibilityObserver = null
    }
  })
}