<template>
  <NuxtLayout>
    <Transition name="page" mode="out-in">
      <NuxtPage />
    </Transition>
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s ease-out;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>