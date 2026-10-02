/**
 * Feature flags for the optional visual experiments listed in SITE_DOCUMENTATION.md.
 *
 * Every experiment here is decorative and safe to remove. Keeping them behind a flag
 * means an effect that does not earn its place can be switched off in one place instead
 * of being unpicked from templates, styles and composables.
 */
export interface VisualExperimentFlags {
  /**
   * Abstract layers pinned behind the whole home page and driven by scroll
   * position, replacing the photographic hero depth stack.
   */
  pageParallax: boolean
}

const flags: VisualExperimentFlags = {
  pageParallax: true,
}

export function useVisualExperiments() {
  return {
    flags,
    isEnabled: (key: keyof VisualExperimentFlags): boolean => flags[key] === true,
  }
}