<template>
  <form class="px-6 py-3 form" @submit.prevent="login" autocomplete="on">
    <fieldset>
      <legend class="mb-3 text-center titleText">會員登入</legend>
      <div class="flex flex-col mb-3 tracking-wider">
        <div
          class="relative flex items-center gap-2 pr-2 before:absolute before:content before:w-full before:bottom-0 before:left-0 before:h-[2px] before:bg-[#323232]"
        >
          <IconUserCircle class="w-9 h-9" />
          <label for="email" class="whitespace-nowrap">帳號</label>
          <input
            type="email"
            name="email"
            id="email"
            class="w-full bg-transparent border-none text-base tracking-wide text-[#323232] focus:ring-0 focus:outline-none"
            v-model="formLoginData.email.value"
          />
        </div>
        <div class="w-full h-6 px-3 pt-1">
          <p class="text-sm tracking-wide text-[#dc2626]">
            {{ formLoginData.email.errorMessage }}
          </p>
        </div>
      </div>
      <div class="flex flex-col mb-3 tracking-wider">
        <div
          class="relative flex items-center gap-2 py-2 before:absolute before:content before:w-full before:bottom-0 before:left-0 before:h-[2px] before:bg-[#323232]"
        >
          <IconLockClosed class="w-9 h-9" />
          <label for="password" class="whitespace-nowrap">密碼</label>
          <input
            ref="inputPwdRef"
            type="password"
            name="password"
            id="password"
            class="w-full bg-transparent border-none text-base tracking-wide text-[#323232] focus:ring-0 focus:outline-none"
            v-model="formLoginData.password.value"
          />
          <IconEye class="cursor-pointer w-9 h-9" v-if="!showPwd" @click.prevent="handleShowPwd" />
          <IconEyeOff class="cursor-pointer w-9 h-9" v-else @click.prevent="handleShowPwd" />
        </div>
        <div class="w-full h-6 px-3 pt-1">
          <p class="text-sm tracking-wide text-[#dc2626]">
            {{ formLoginData.password.errorMessage }}
          </p>
        </div>
      </div>
      <div class="flex items-center justify-between mb-6 select-none">
        <div>
          <input type="checkbox" name="remember" id="remember" class="mr-2" v-model="isRemember" />
          <label for="remember" class="text-sm tracking-wide text-[#323232]">記住帳號</label>
        </div>
        <div class="flex">
          <input
            v-model="formLoginData.otp"
            type="text"
            class="w-[60px] text-center text-base tracking-wide focus:outline-none border-2 border-gray-500"
          />
          <div class="p-2 bg-gray-500">
            <span class="text-base font-bold tracking-wider text-white">{{ OTP }}</span>
          </div>
        </div>
      </div>
      <div class="submit_box">
        <button
          class="w-full p-3 rounded-md shadow-md bg-[#FFE8D6] hover:bg-[#DDBEA9] transition-colors duration-150 text-[#252422] hover:text-white"
          @click="handleSubmit"
          :disabled="formLoginData.isSubmit"
          :class="[
            formLoginData.isSubmit
              ? 'bg-gray-300 text-gray-400 hover:bg-gray-300 hover:text-gray-400'
              : ''
          ]"
        >
          登入
        </button>
      </div>
    </fieldset>
  </form>
</template>

<script setup>
import IconUserCircle from '~icons/heroicons-outline/user-circle'
import IconLockClosed from '~icons/heroicons-outline/lock-closed'
import IconEye from '~icons/heroicons-outline/eye'
import IconEyeOff from '~icons/heroicons-outline/eye-off'
import { promiseTimeout } from '@vueuse/shared'
import { validateWhiteSpace } from '@/utils/validator'
import { callApi } from '@/utils/callApi'
import { apiGetOTP } from '@/api/api'
import { successNotify, errorNotify } from '@/composables/useNotification'
import { useStore } from 'vuex'

const inputPwdRef = ref(null)
const showPwd = ref(false)
const isRemember = ref(false)
const BACKSTAGE_REMEMBER_KEY = ref('isRemember')
const store = useStore()
const router = useRouter()
const formLoginData = reactive({
  email: {
    value: 'test00001',
    errorMessage: ''
  },
  password: {
    value: '12345678',
    errorMessage: ''
  },
  otp: '',
  isSubmit: false
})
const OTP = ref('')

// 顯示密碼
const handleShowPwd = () => {
  showPwd.value = !showPwd.value
  inputPwdRef.value.type = showPwd.value ? 'text' : 'password'
}

// 表單驗證
const validateCheck = () => {
  const isEmailValid = validateWhiteSpace(formLoginData.email.value)
  const isPasswordValid = validateWhiteSpace(formLoginData.password.value)
  if (!isEmailValid) {
    formLoginData.email.errorMessage = '帳號不能為空白'
    return false
  }

  if (!isPasswordValid) {
    formLoginData.password.errorMessage = '密碼不能為空白'
    return false
  }
  return true
}

// 表單送出
const handleSubmit = async () => {
  formLoginData.isSubmit = true
  await promiseTimeout(1000)
  if (validateCheck()) {
    login()
  } else {
    formLoginData.isSubmit = false
  }
}

// 登入
const login = async () => {
  const loginForm = {
    Account: formLoginData.email.value,
    Password: formLoginData.password.value,
    OTP: formLoginData.otp
  }

  try {
    await store.dispatch('memberModules/loginMember', loginForm)
    await handleRouterChange()
  } catch (error) {
    errorNotify('登入失敗', error)
  } finally {
    formLoginData.isSubmit = false
  }
}

// 路由切換
const handleRouterChange = async () => {
  successNotify('登入成功')
  await router.push('/')
}

// 取得OTP碼
const callGetOTP = async () => {
  try {
    await callApi(apiGetOTP, '', (res) => {
      OTP.value = res.Data.OTP
    })
  } catch (error) {
    errorNotify('OTP Error', error)
  }
}

// 初始化
onMounted(async () => {
  await callGetOTP()
  const isRememberData = localStorage.getItem(BACKSTAGE_REMEMBER_KEY.value)
  if (isRememberData) {
    const { account, pwd } = JSON.parse(isRememberData)
    isRemember.value = true
    formLoginData.email.value = account
    formLoginData.password.value = pwd
  } else {
    isRemember.value = false
  }
})

// 監聽email輸入框
watch(
  () => formLoginData.email.value,
  (newValue) => {
    if (!validateWhiteSpace(newValue)) {
      formLoginData.email.errorMessage = '帳號不能為空白'
    } else {
      formLoginData.email.errorMessage = ''
    }
  }
)

// 監聽password輸入框
watch(
  () => formLoginData.password.value,
  (newValue) => {
    if (!validateWhiteSpace(newValue)) {
      formLoginData.password.errorMessage = '密碼不能為空白'
    } else {
      formLoginData.password.errorMessage = ''
    }
  }
)

// 監聽 記住帳號按鈕
watch(isRemember, (newVal) => {
  const { email, password } = formLoginData

  newVal
    ? localStorage.setItem(
        BACKSTAGE_REMEMBER_KEY.value,
        JSON.stringify({
          account: email.value,
          pwd: password.value
        })
      )
    : localStorage.removeItem(BACKSTAGE_REMEMBER_KEY.value)
})
</script>
