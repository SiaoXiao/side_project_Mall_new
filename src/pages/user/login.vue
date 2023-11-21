<template>
  <Layout>
    <main class="flex flex-col items-center justify-center h-full my-10 sm:my-0 sm:h-calc">
      <div>
        <keep-alive>
          <component :is="currentComponent" />
        </keep-alive>

        <div>
          <div v-show="currentTag !== 'register'" class="px-6 text-sm text">
            沒有帳號?
            <span
              class="text-base font-bold tracking-wide transition-colors duration-150 cursor-pointer text-[#CB997E] hover:text-[#DDBEA9]"
              @click="handleChangePage('register')"
              >申請帳號</span
            >
          </div>
          <div v-show="currentTag !== 'login'" class="px-6 mt-3 text-sm text">
            已有帳號
            <span
              class="text-base font-bold tracking-wide transition-colors duration-150 cursor-pointer text-[#CB997E] hover:text-[#DDBEA9]"
              @click="handleChangePage('login')"
              >登入</span
            >
          </div>
        </div>
        <div v-show="currentTag !== 'forgotPassword'" class="px-6 mt-3">
          <span class="text-sm link" @click="handleChangePage('forgotPassword')">忘記密碼?</span>
        </div>
      </div>
    </main>
  </Layout>
</template>

<script setup>
import LoginComponent from '@/components/LoginPage/LoginComponent.vue'
import { useRouter } from 'vue-router'
const ForgotPasswordComponent = defineAsyncComponent(
  () => import('@/components/LoginPage/ForgotPasswordComponent.vue')
)
const RegisterComponent = defineAsyncComponent(
  () => import('@/components/LoginPage/RegisterComponent.vue')
)
const router = useRouter()
const currentTag = ref('login')

// 切換頁
const handleChangePage = (tag) => {
  switch (tag) {
    case 'login':
      currentTag.value = 'login'
      break
    case 'forgotPassword':
      currentTag.value = 'forgotPassword'
      break
    case 'register':
      currentTag.value = 'register'
      break

    default:
      break
  }
}

const currentComponent = computed(() => {
  switch (currentTag.value) {
    case 'login':
      return LoginComponent
    case 'forgotPassword':
      return ForgotPasswordComponent
    case 'register':
      return RegisterComponent
  }
})

// 初始化
onMounted(async () => {
  if (import.meta.env.MODE === 'production') {
    console.log('You are running in production mode.')
  } else {
    console.log('You are running in development mode.')
  }

  const memberInfo = JSON.parse(localStorage.getItem('memberInfo'))
  if (memberInfo?.token !== '' && memberInfo) {
    router.push('/user')
  }
})
</script>
