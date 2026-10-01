import { useTheme } from 'vuetify'

export function useThemeToggle() {
  const theme = useTheme()

  const isDark = computed(() => theme.global.current.value.dark)

  function toggle() {
    theme.global.name.value = isDark.value ? 'light' : 'dark'
  }

  function setTheme(mode: 'light' | 'dark') {
    theme.global.name.value = mode
  }

  return { isDark, toggle, setTheme }
}