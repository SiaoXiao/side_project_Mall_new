<template>
  <RouterView v-if="isRouterAlive"></RouterView>
  <AppConfirmModal />
  <AppNotifications />
</template>

<script setup>
import AppConfirmModal from '@/sections/AppConfirmModal.vue'
import AppNotifications from '@/sections/AppNotifications.vue'
const isRouterAlive = ref(true)
const reload = () => {
  isRouterAlive.value = false
  nextTick(function () {
    isRouterAlive.value = true
  })
}
provide('reload', reload)
</script>
