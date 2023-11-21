<template>
  <ConfirmModal
    v-model="showModal"
    :title="confirmTitle"
    @success="handleSuccess"
    @cancel="handleCancel"
  />
</template>

<script setup>
import ConfirmModal from '@/components/ConfirmModal.vue'
import { useConfirmModal } from '@/composables/useConfirmModal'

const { showModal, confirmTitle, handleSuccess, handleCancel } = useConfirmModal()
</script>
