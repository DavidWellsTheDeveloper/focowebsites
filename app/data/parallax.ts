/**
 * Depth stack for the home hero, back to front.
 *
 * `depth` is how far a layer travels as the hero crosses the viewport, as a fraction of
 * viewport height. Larger values are nearer the viewer, which is what sells the depth.
 *
 * `oversize` is the percentage the layer is grown beyond the hero on its top and bottom
 * edges, and exists purely so a layer never runs out of image while it is travelling. It
 * has to stay comfortably above `depth`, otherwise a gap opens up at the hero's edges as
 * soon as the page is scrolled. The values below sit at roughly 1.2x the travel each
 * layer can reach.
 *
 * `tone` is the layer's average colour, used as a background colour while the image
 * decodes so the stack never flashes white.
 */
export interface ParallaxLayer {
  id: string
  src: string
  mobileSrc: string
  depth: number
  oversize: number
  opacity: number
  tone: string
}

export const heroParallaxLayers: ParallaxLayer[] = [
  {
    id: 'sky',
    src: '/images/parallax/sky-1800.webp',
    mobileSrc: '/images/parallax/sky-760.webp',
    depth: 0.05,
    oversize: 8,
    opacity: 0.72,
    tone: '#60737a',
  },
  {
    id: 'fog',
    src: '/images/parallax/fog-1800.webp',
    mobileSrc: '/images/parallax/fog-760.webp',
    depth: 0.11,
    oversize: 16,
    opacity: 0.6,
    tone: '#e1e3da',
  },
  {
    id: 'mid',
    src: '/images/parallax/mid-1800.webp',
    mobileSrc: '/images/parallax/mid-760.webp',
    depth: 0.17,
    oversize: 24,
    opacity: 0.66,
    tone: '#557786',
  },
  {
    id: 'near',
    src: '/images/parallax/near-1800.webp',
    mobileSrc: '/images/parallax/near-760.webp',
    depth: 0.24,
    oversize: 32,
    opacity: 0.62,
    tone: '#3c687e',
  },
]