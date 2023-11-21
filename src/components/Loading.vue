<template>
  <transition
    enter-active-class="transition-opacity duration-200"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-150"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="show"
      class="absolute inset-0 z-20 flex items-center justify-center bg-white/90 text-primary"
    >
      <LoadingIcon class="w-6 h-6" />
      <span class="ml-2 text-lg">{{ text }}</span>
    </div>
  </transition>
</template>

<script setup>
import LoadingIcon from '@/components/LoadingIcon.vue'

defineProps({
  show: {
    type: Boolean,
    default: false
  },
  text: {
    type: String,
    default: '載入中...'
  }
})
</script>
