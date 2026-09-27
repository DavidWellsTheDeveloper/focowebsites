<script setup lang="ts">
import { useRoute } from 'vue-router'

interface NavItem {
  label: string
  to?: string
  exact?: boolean
}

interface Props {
  items: NavItem[]
}

defineProps<Props>()

const route = useRoute()

function isActive(item: NavItem) {
  return item.exact ? route.path === item.to : route.path.startsWith(item.to ?? '')
}

const isOpen = ref(false)

defineModel<boolean>()

function close() {
  isOpen.value = false
}
</script>

<template>
  <VNavigationDrawer v-model="isOpen" temporary location="right">
    <VList nav>
      <VListItem
        v-for="item in items"
        :key="item.label"
        :to="item.to"
        :title="item.label"
        @click="close"
      />
      <VListItem to="/start-a-project" title="Start a project" @click="close" />
    </VList>
  </VNavigationDrawer>
</template>