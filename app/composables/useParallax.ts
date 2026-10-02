export interface ParallaxLayerSpec {
  index: number
  depth: number
}

interface ParallaxScene {
  el: HTMLElement
  specs: ParallaxLayerSpec[]
  top: number
  visible: boolean
}

/**
 * Scroll distance a layer's travel is spread across, in viewport heights.
 *
 * Measuring against the scene's own height instead would make the effect page-dependent:
 * speed works out to `depth * viewportHeight / pageHeight`, so a short page races and a
 * long one crawls. A fixed length gives every route the same rate. The cost is that a
 * page taller than this runs out of travel and then holds still — which is the cheap half
 * of the trade, since the alternative is a layer box tall enough to cover any page.
 */
const REFERENCE_VIEWPORTS = 3

const scenes = new Map<HTMLElement, ParallaxScene>()

let rafId: number | null = null
let resizeRafId: number | null = null
let reducedMotionQuery: MediaQueryList | null = null
let motionAllowed = false
let visibilityObserver: IntersectionObserver | null = null
let sizeObserver: ResizeObserver | null = null
let listening = false

function clamp(value: number, min: number, max: number) {
  return value < min ? min : value > max ? max : value
}

/**
 * Re-reads a scene's document position. Called on mount, on viewport resize, and from
 * the size observer — a client-side navigation changes how tall the scene is without
 * firing a resize, and a stale `top` or a stale travel length silently skews every layer.
 */
function measure(scene: ParallaxScene) {
  const rect = scene.el.getBoundingClientRect()
  scene.top = rect.top + window.scrollY
}

function render() {
  rafId = null
  const viewportHeight = window.innerHeight
  const scrollY = window.scrollY

  scenes.forEach((scene) => {
    if (!scene.visible) return

    // Measured from the scene's resting position rather than from the point where it
    // leaves the viewport. Anchoring it to the viewport would mean every layer starts
    // partway through its travel, because the scene is already partly in view when the
    // page loads and the part of the range below scroll 0 can never be reached.
    const progress = clamp(
      (scrollY - scene.top) / (REFERENCE_VIEWPORTS * viewportHeight),
      0,
      1,
    )

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
 * A client-side navigation replaces the page's content without firing a window resize,
 * so the scene's position goes stale and the layers compute progress from the wrong
 * starting point. Watching the scene itself catches that, along with late font and image
 * loads that shift the layout. Kept off entirely under reduced motion so nothing writes a
 * travel value the listener was never attached to drive.
 */
function observeSize(scene: ParallaxScene) {
  if (!sizeObserver) {
    sizeObserver = new ResizeObserver(() => {
      if (motionAllowed) scheduleMeasure()
    })
  }
  sizeObserver.observe(scene.el)
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
      observeSize(scene)
      render()
    }
  })

  onBeforeUnmount(() => {
    const scene = el.value ? scenes.get(el.value) : undefined
    if (!scene) return
    visibilityObserver?.unobserve(scene.el)
    sizeObserver?.unobserve(scene.el)
    scenes.delete(scene.el)
    if (scenes.size === 0) {
      stop()
      visibilityObserver?.disconnect()
      visibilityObserver = null
      sizeObserver?.disconnect()
      sizeObserver = null
    }
  })
}