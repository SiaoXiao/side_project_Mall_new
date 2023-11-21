// useUser.js
import { useStore } from 'vuex'
import { useConfirm } from '@/composables/useConfirmModal'
import { warningNotify } from '@/composables/useNotification'

export default function useUser() {
  const store = useStore()
  const router = useRouter()

  // 檢查使用者是否已登錄
  const isLogin = computed(() => store.getters.isLoggedIn)

  // 檢查是否已登入
  const checkLoginStatus = () => {
    if (!isLogin.value) {
      warningNotify('請先登入會員')
      return false
    }
    return true
  }

  // 登出
  const logOut = () => {
    useConfirm('確定要登出嗎?').then((result) => {
      if (result) {
        store.commit('RESET_LOGIN_STATUS', false)
        router.push('/').then(() => router.go())
      }
    })
  }

  return {
    isLogin,
    checkLoginStatus,
    logOut
  }
}
