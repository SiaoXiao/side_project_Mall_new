<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="handleCancel" class="relative z-20">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-50"></div>
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex items-center justify-center min-h-full p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-sm overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl sm:max-w-lg rounded-2xl"
            >
              <div class="px-6 py-4">
                <slot name="icon"></slot>
                <slot name="title">
                  <DialogTitle as="h3" class="text-2xl font-medium text-center text-text-primary">
                    {{ title }}
                  </DialogTitle>
                </slot>
                <slot name="content"></slot>
              </div>

              <div class="p-6">
                <slot name="footer">
                  <PrimaryButton class="w-full py-1.5" @click="handleSuccess"> 確定 </PrimaryButton>
                </slot>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'

const props = defineProps({
  modelValue: Boolean,
  title: {
    type: String,
    default: 'Title'
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
