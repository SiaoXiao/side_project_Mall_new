<template>
  <div class="flex items-center justify-start" :class="position">
    <h1 class="mb-3 titleText">
      <slot name="title"></slot>
    </h1>
  </div>
</template>

<script setup>
defineProps({
  position: {
    type: String,
    default: ''
  }
})
</script>
