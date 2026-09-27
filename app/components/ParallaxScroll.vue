<script setup lang="ts">
import { onMounted, onUnmounted, ref, shallowRef, computed } from 'vue'

type ParallaxMode = 'border' | 'carousel'

interface Props {
  mode: ParallaxMode
  speed?: number // 0-1, how fast the parallax moves relative to scroll
  direction?: 'left' | 'right'
  class?: string
}

interface BorderSlots {
  default(): any
  border?: () => any
}

interface CarouselSlots {
  default(): any
}

defineProps<Props>()
defineSlots<BorderSlots | CarouselSlots>()

const containerRef = shallowRef<HTMLElement | null>(null)
const progress = ref(0)
const prefersReducedMotion = ref(false)

const scrollDirection = computed(() => props.direction === 'right' ? 1 : -1)
const parallaxSpeed = computed(() => Math.max(0, Math.min(1, props.speed ?? 0.5)))

let rafId: number | null = null
let lastScrollY = 0
let containerHeight = 0
let windowHeight = 0

function updateProgress() {
  if (!containerRef.value) return

  const rect = containerRef.value.getBoundingClientRect()
  const scrollY = window.scrollY || document.documentElement.scrollTop

  // Calculate progress through the container (0 to 1)
  const containerTop = rect.top + scrollY
  const containerBottom = containerTop + containerHeight
  const viewportTop = scrollY
  const viewportBottom = scrollY + windowHeight

  // How much of the container is visible in viewport
  const visibleTop = Math.max(0, viewportTop - containerTop)
  const visibleBottom = Math.min(containerHeight, viewportBottom - containerTop)
  const visibleHeight = Math.max(0, visibleBottom - visibleTop)

  if (visibleHeight <= 0) {
    progress.value = scrollY > containerTop + containerHeight ? 1 : 0
    return
  }

  // Progress through the visible portion
  const totalScrollable = containerHeight - windowHeight
  if (totalScrollable <= 0) {
    progress.value = 0
    return
  }

  const scrolled = Math.max(0, scrollY - (containerTop - windowHeight))
  progress.value = Math.max(0, Math.min(1, scrolled / totalScrollable))
}

function onScroll() {
  if (rafId) return
  rafId = requestAnimationFrame(() => {
    updateProgress()
    rafId = null
  })
}

function onResize() {
  if (!containerRef.value) return
  windowHeight = window.innerHeight
  containerHeight = containerRef.value.offsetHeight
  updateProgress()
}

onMounted(() => {
  prefersReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  windowHeight = window.innerHeight
  if (containerRef.value) containerHeight = containerRef.value.offsetHeight

  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onResize, { passive: true })
  updateProgress()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onResize)
  if (rafId) cancelAnimationFrame(rafId)
})

// Border mode styles
const borderStyle = computed(() => {
  if (props.mode !== 'border') return {}
  const offset = progress.value * 100 * scrollDirection.value * parallaxSpeed.value
  return {
    transform: `translateX(${offset}%)`,
    willChange: 'transform',
    transition: prefersReducedMotion.value ? 'none' : 'transform 0.1s linear',
  }
})

// Carousel mode styles
const carouselStyle = computed(() => {
  if (props.mode !== 'carousel') return {}
  const offset = progress.value * 100 * scrollDirection.value * parallaxSpeed.value
  return {
    transform: `translateX(${offset}%)`,
    willChange: 'transform',
    transition: prefersReducedMotion.value ? 'none' : 'transform 0.1s linear',
  }
})

const containerStyle = computed(() => ({
  overflow: props.mode === 'carousel' ? 'hidden' : 'visible',
}))
</script>

<template>
  <section
    ref="containerRef"
    :class="['parallax-scroll', `parallax-scroll--${mode}`, class]"
    :style="containerStyle"
  >
    <!-- Border Mode: vertical content with horizontal border -->
    <div v-if="mode === 'border'" class="parallax-border-container">
      <div class="parallax-border" :style="borderStyle" v-if="$slots.border">
        <slot name="border" />
      </div>
      <div class="parallax-content">
        <slot />
      </div>
    </div>

    <!-- Carousel Mode: horizontal scrolling content -->
    <div v-else-if="mode === 'carousel'" class="parallax-carousel-container" :style="carouselStyle">
      <slot />
    </div>

    <!-- Fallback -->
    <slot v-else />
  </section>
</template>

<style scoped>
.parallax-scroll {
  position: relative;
  width: 100%;
}

.parallax-border-container {
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.parallax-border {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 0;
}

.parallax-content {
  position: relative;
  z-index: 1;
}

.parallax-carousel-container {
  display: flex;
  flex-wrap: nowrap;
  width: max-content;
  position: relative;
  z-index: 0;
}

@media (prefers-reduced-motion: reduce) {
  .parallax-border,
  .parallax-carousel-container {
    transform: none !important;
    transition: none !important;
  }
}
</style>