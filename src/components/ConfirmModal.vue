<template>
  <Modal v-model="isOpen" @cancel="handleCancel">
    <template #icon>
      <IconsExclamation class="w-12 h-12 mx-auto mt-8 text-red-500" />
    </template>
    <template #title>
      <DialogTitle
        as="h3"
        class="mt-2 mb-4 text-2xl tracking-wider font-medium text-center text-[#252422]"
      >
        {{ title }}
      </DialogTitle>
    </template>

    <template #footer>
      <div class="grid grid-cols-2 gap-4">
        <SecondaryButton class="w-full py-1.5" @click="handleCancel"> 取消 </SecondaryButton>
        <PrimaryButton class="w-full py-1.5" @click="handleSuccess"> 確定 </PrimaryButton>
      </div>
    </template>
  </Modal>
</template>

<script setup>
import Modal from '@/components/Modal.vue'
import { DialogTitle } from '@headlessui/vue'
import IconsExclamation from '~icons/heroicons/exclamation-triangle'

const props = defineProps({
  modelValue: Boolean,
  title: {
    type: String,
    default: '確定要刪除嗎?'
  }
})

const emit = defineEmits(['update:modelValue', 'success', 'cancel'])

const isOpen = useVModel(props)

const closeModal = () => {
  isOpen.value = false
}

const handleSuccess = () => {
  emit('success')
  closeModal()
}

const handleCancel = () => {
  emit('cancel')
  closeModal()
}
</script>
