import { useTheme } from 'vuetify'

export function useThemeToggle() {
  const theme = useTheme()

  const isDark = computed(() => theme.global.current.value.dark)

  watch(
    isDark,
    (dark) => {
      if (import.meta.client) {
        document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
      }
    },
    { immediate: true },
  )

  function toggle() {
    theme.global.name.value = isDark.value ? 'light' : 'dark'
  }

  function setTheme(mode: 'light' | 'dark') {
    theme.global.name.value = mode
  }

  return { isDark, toggle, setTheme }
}
