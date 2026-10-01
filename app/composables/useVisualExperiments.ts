/**
 * Feature flags for the optional visual experiments listed in SITE_DOCUMENTATION.md.
 *
 * Every experiment here is decorative and safe to remove. Keeping them behind a flag
 * means an effect that does not earn its place can be switched off in one place instead
 * of being unpicked from templates, styles and composables.
 */
export interface VisualExperimentFlags {
  /** Layered depth in the home hero, driven by scroll position. */
  heroParallax: boolean
}

const flags: VisualExperimentFlags = {
  heroParallax: true,
}

export function useVisualExperiments() {
  return {
    flags,
    isEnabled: (key: keyof VisualExperimentFlags): boolean => flags[key] === true,
  }
}