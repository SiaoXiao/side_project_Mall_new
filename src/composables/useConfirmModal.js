import { ref } from 'vue'
import mitt from 'mitt'

const emitter = mitt() // mitt Event Bus

const showModal = ref(false)
const confirmTitle = ref('')

const handleSuccess = () => {
  emitter.emit('success')
  console.log('from useConfirmModal handleSuccess')
}
const handleCancel = () => {
  emitter.emit('cancel')
  console.log('from useConfirmModal handleCancel')
}

export function useConfirmModal() {
  return { showModal, confirmTitle, handleSuccess, handleCancel }
}

export function useConfirm(title) {
  confirmTitle.value = title
  showModal.value = true

  return new Promise((resolve, reject) => {
    emitter.on('success', () => {
      resolve(true)
    })
    emitter.on('cancel', () => {
      resolve(false)
    })
  })
}
