<script setup lang="ts">
import { useTheme } from 'vuetify'

const theme = useTheme()

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

function activeClasses(item: { to?: string }) {
  return [
    'font-weight-medium',
    'text-body',
  ].join(' ')
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
          <VBtn
            v-for="item in navItems"
            :key="item.label"
            :to="item.to"
            variant="text"
            :class="activeClasses(item)"
            aria-current="page"
          >
            {{ item.label }}
          </VBtn>

          <VBtn
            v-if="!isDark"
            icon="mdi-white-balance-sunny"
            variant="text"
            aria-label="Switch to dark theme"
            @click="toggleTheme"
            class="theme-toggle-btn"
          />
          <VBtn
            v-else
            icon="mdi-weather-night"
            variant="text"
            aria-label="Switch to light theme"
            @click="toggleTheme"
            class="theme-toggle-btn"
          />

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

    <VNavigationDrawer v-model="drawer" temporary location="right">
      <VList nav>
        <VListItem
          v-for="item in navItems"
          :key="item.label"
          :to="item.to"
          :title="item.label"
          @click="drawer = false"
        />
        <VListItem to="/start-a-project" title="Start a project" @click="drawer = false" />
      </VList>
    </VNavigationDrawer>

    <VMain>
      <slot />
    </VMain>

    <VFooter class="border-t" color="background">
      <VContainer class="py-8">
        <VRow justify="space-between" align="center" class="ga-4 ga-md-0">
          <VCol cols="12" md="auto" class="text-center text-md-left">
            <span class="font-display font-weight-semibold text-h6">
              FoCo Websites
            </span>
            <p class="text-body-2 text-medium-emphasis mt-1 mb-0">
              Custom websites for businesses around Northern Colorado.
            </p>
          </VCol>
          <VCol cols="12" md="auto" class="text-center text-md-right">
            <div class="d-flex flex-wrap justify-center justify-md-end ga-2">
              <VBtn variant="text" size="small" :to="{ path: '/start-a-project' }">
                Start a project
              </VBtn>
              <VBtn variant="text" size="small" href="mailto:hello@focowebsites.com">
                hello@focowebsites.com
              </VBtn>
            </div>
            <p class="text-caption text-medium-emphasis mt-2 mb-0">
              © {{ currentYear }} FoCo Websites
            </p>
          </VCol>
        </VRow>
      </VContainer>
    </VFooter>
  </VApp>
</template>