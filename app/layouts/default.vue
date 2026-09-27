<script setup lang="ts">
import { useTheme } from 'vuetify'
import { useRoute } from 'vue-router'
import Footer from '~/components/Footer.vue'
import NavBar from '~/components/NavBar.vue'
import ThemeToggle from '~/components/ThemeToggle.vue'
import MobileDrawer from '~/components/MobileDrawer.vue'

const theme = useTheme()
const route = useRoute()

const drawer = ref(false)

const isDark = computed(() => theme.global.current.value.dark)

function toggleTheme() {
  theme.global.name.value = isDark.value ? 'light' : 'dark'
}

interface NavItem {
  label: string
  to?: string
  exact?: boolean
}

const navItems: NavItem[] = [
  { label: 'Work', to: '/work' },
  { label: 'Services', to: '/services' },
  { label: 'Process', to: '/process' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About', to: '/about' },
  { label: 'FAQ', to: '/faq' },
]

function activeClasses(item: NavItem) {
  const active = isActive(item)
  return [
    'font-weight-medium',
    active ? 'text-primary' : 'text-body',
    active ? 'bg-primary-lighten-5' : '',
  ].filter(Boolean).join(' ')
}

function isActive(item: NavItem) {
  return item.exact ? route.path === item.to : route.path.startsWith(item.to ?? '')
}

const currentYear = new Date().getFullYear()
</script>

<template>
  <VApp>
    <VAppBar flat class="border-b" color="background">
      <VAppBarTitle>
        <NuxtLink to="/" class="d-inline-flex align-center ga-2 text-decoration-none">
          <VAvatar color="primary" size="34" rounded="lg" class="text-white font-weight-bold">
            <span class="font-display">Fo</span>
          </VAvatar>
          <span class="font-display font-weight-semibold text-h6" color="inherit">
            FoCo Websites
          </span>
        </NuxtLink>
      </VAppBarTitle>

      <template #append>
        <div class="d-none d-md-flex align-center ga-1 mr-2">
          <NavBar :items="navItems" />
          <ThemeToggle :isDark="isDark" @toggle="toggleTheme" />
          <VBtn to="/start-a-project" color="accent" class="mr-2 d-none d-md-inline-flex">
            Start a project
          </VBtn>

          <VAppBarNavIcon
            class="d-md-none"
            aria-label="Open menu"
            @click.stop="drawer = !drawer"
          />
        </div>
      </template>
    </VAppBar>

    <MobileDrawer :items="navItems" v-model="drawer" @close="drawer = false" />

    <VMain>
      <slot />
    </VMain>

    <Footer :currentYear="currentYear" />
  </VApp>
</template>