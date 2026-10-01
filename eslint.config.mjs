// @ts-check
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  features: {
    tooling: true,
    stylistic: false,
  },
}).append({
  ignores: ['.output', '.nuxt', 'dist', 'node_modules'],
})
