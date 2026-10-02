/**
 * Abstract wash pinned behind the whole site, back to front.
 *
 * Three layers rather than four: the silver mid layer was the least chromatic of the set
 * and the main reason the wash read as grey haze, and dropping it also takes about a fifth
 * of the stack's raster. Far -> deep -> near still runs pale to dark, which is what makes
 * stacked layers read as distance instead of as three unrelated pictures.
 *
 * `depth` is how far a layer travels across the scene, as a fraction of viewport height,
 * and it is the only thing that sets scroll speed. Travel is spread over a fixed
 * `REFERENCE_VIEWPORTS` in `useParallax` rather than the page's own height, so these three
 * numbers produce the same rate on every route. The values are stepped apart so each layer
 * drifts at a visibly different rate — that difference is what reads as depth. The source
 * images' aspect ratio has no bearing on any of this: it only changes how zoomed the
 * artwork looks inside its box.
 *
 * `oversize` is the percentage the layer is grown beyond the viewport on its top and
 * bottom edges, and exists purely so a layer never runs out of image while it is
 * travelling. It has to stay comfortably above the travel each layer can reach, otherwise
 * a gap opens up at the viewport's edges as soon as the page is scrolled. The values
 * below sit at roughly 1.2x that travel, which is also why raising `depth` always means
 * raising `oversize` with it: a taller box costs upscale, so it is the expensive half of
 * the pair.
 *
 * `opacity` deliberately lives in CSS rather than here, because it has to be per theme:
 * light and dark each need a different balance to keep the wash visible without pushing
 * the composite past the text's contrast floor. See `--wash-opacity-*` in tokens.css.
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
  tone: string
}

export const pageParallaxLayers: ParallaxLayer[] = [
  {
    id: 'far',
    src: '/images/wash/far-1600.webp',
    mobileSrc: '/images/wash/far-800.webp',
    depth: 0.22,
    oversize: 27,
    tone: '#A8CAA9',
  },
  {
    id: 'deep',
    src: '/images/wash/deep-1600.webp',
    mobileSrc: '/images/wash/deep-800.webp',
    depth: 0.44,
    oversize: 54,
    tone: '#247E7F',
  },
  {
    id: 'near',
    src: '/images/wash/near-1600.webp',
    mobileSrc: '/images/wash/near-800.webp',
    depth: 0.66,
    oversize: 80,
    tone: '#002D32',
  },
]
