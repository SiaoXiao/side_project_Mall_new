<template>
  <component
    :is="tag"
    :type="buttonType"
    :to="to"
    class="btn bg-[#FFE8D6] hover:bg-[#DDBEA9] text-[#6B705C] hover:text-white disabled:brightness-50"
    :disabled="loading"
  >
    <LoadingIcon v-if="loading" class="w-4 h-4 mr-1" />
    <slot></slot>
  </component>
</template>

<script setup>
import useButton from '@/composables/useButton'
import LoadingIcon from '@/components/LoadingIcon.vue'

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
