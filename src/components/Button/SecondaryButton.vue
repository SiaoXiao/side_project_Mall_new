<template>
  <component
    :is="tag"
    :type="buttonType"
    :to="to"
    class="btn bg-[#D7D7D7] hover:bg-[#CCC5B9] text-[#6B705C] hover:text-white disabled:brightness-50"
  >
    <slot></slot>
  </component>
</template>
<script setup>
import useButton from '@/composables/useButton'

const props = defineProps({
  is: String,
  type: String,
  to: String,
  loading: {
    type: Boolean,
    default: false
  }
})

const { tag, buttonType } = useButton(props)
</script>
