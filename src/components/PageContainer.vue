<script setup>
defineProps({
  childrenPath: {
    type: String
  }
})
</script>

<template>
  <div class="max-w-[1280px] m-auto px-3 py-2">
    <Breadcrumbs :childrenPath="childrenPath" class="mb-5"></Breadcrumbs>
    <slot></slot>
  </div>
</template>
