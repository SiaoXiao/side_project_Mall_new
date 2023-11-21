<template>
  <form class="px-6 py-3 form" @submit.prevent="submit" autocomplete="on">
    <fieldset>
      <legend class="text-center titleText">申請帳號</legend>
      <div class="flex flex-col mb-3 tracking-wider">
        <div
          class="relative flex items-center gap-2 py-2 before:absolute before:content before:w-full before:bottom-0 before:left-0 before:h-[2px] before:bg-[#323232]"
        >
          <IconUserCircle class="text-3xl" />
          <label for="userName" class="whitespace-nowrap">姓名</label>
          <input
            type="text"
            name="userName"
            id="userName"
            class="w-full bg-transparent border-none text-base tracking-wide text-[#323232] focus:ring-0 focus:outline-none"
            v-model="formSignUpData.name.value"
          />
        </div>
        <div class="w-full h-6 px-3 pt-1">
          <p class="text-sm tracking-wide text-[#dc2626]">
            {{ formSignUpData.name.errorMessage }}
          </p>
        </div>
      </div>

      <div class="flex flex-col mb-3 tracking-wider">
        <div
          class="relative flex items-center gap-2 py-2 before:absolute before:content before:w-full before:bottom-0 before:left-0 before:h-[2px] before:bg-[#323232]"
        >
          <IconEmail class="text-3xl" />
          <label for="email" class="whitespace-nowrap">電子信箱</label>
          <input
            type="email"
            name="email"
            id="email"
            class="w-full bg-transparent border-none text-base tracking-wide text-[#323232] focus:ring-0 focus:outline-none"
            v-model="formSignUpData.email.value"
          />
        </div>
        <div class="w-full h-6 px-3 pt-1">
          <p class="text-sm tracking-wide text-[#dc2626]">
            {{ formSignUpData.email.errorMessage }}
          </p>
        </div>
      </div>

      <div class="flex flex-col mb-3 tracking-wider">
        <div
          class="relative flex items-center gap-2 py-2 before:absolute before:content before:w-full before:bottom-0 before:left-0 before:h-[2px] before:bg-[#323232]"
        >
          <IconUserCircle class="text-3xl" />
          <label for="account" class="whitespace-nowrap">帳號</label>
          <input
            type="text"
            name="account"
            id="account"
            class="w-full bg-transparent border-none text-base tracking-wide text-[#323232] focus:ring-0 focus:outline-none"
            v-model="formSignUpData.account.value"
          />
        </div>
        <div class="w-full h-6 px-3 pt-1">
          <p class="text-sm tracking-wide text-[#dc2626]">
            {{ formSignUpData.account.errorMessage }}
          </p>
        </div>
      </div>

      <div class="flex flex-col mb-3 tracking-wider">
        <div
          class="relative flex items-center gap-2 py-2 before:absolute before:content before:w-full before:bottom-0 before:left-0 before:h-[2px] before:bg-[#323232]"
        >
          <IconLockClosed class="text-3xl" />
          <label for="password" class="whitespace-nowrap">密碼</label>
          <input
            ref="inputPwdRef"
            type="password"
            name="password"
            id="password"
            class="w-full bg-transparent border-none text-base tracking-wide text-[#323232] focus:ring-0 focus:outline-none"
            v-model="formSignUpData.password.value"
          />
          <IconEye class="text-3xl cursor-pointer" v-if="!showPwd" @click.prevent="handleShowPwd" />
          <IconEyeOff class="text-3xl cursor-pointer" v-else @click.prevent="handleShowPwd" />
        </div>
        <div class="w-full h-6 px-3 pt-1">
          <p class="text-sm tracking-wide text-[#dc2626]">
            {{ formSignUpData.password.errorMessage }}
          </p>
        </div>
      </div>

      <div class="flex flex-col mb-3 tracking-wider">
        <div
          class="relative flex items-center gap-2 py-2 before:absolute before:content before:w-full before:bottom-0 before:left-0 before:h-[2px] before:bg-[#323232]"
        >
          <IconLockClosed class="text-3xl" />
          <label for="checkPassword" class="whitespace-nowrap">再輸入一次密碼</label>
          <input
            ref="inputCheckPwdRef"
            type="password"
            name="password"
            id="checkPassword"
            class="w-full bg-transparent border-none text-base tracking-wide text-[#323232] focus:ring-0 focus:outline-none"
            v-model="formSignUpData.checkPassword.value"
          />
          <IconEye class="text-3xl cursor-pointer" v-if="!showPwd" @click.prevent="handleShowPwd" />
          <IconEyeOff class="text-3xl cursor-pointer" v-else @click.prevent="handleShowPwd" />
        </div>
        <div class="w-full h-6 px-3 pt-1">
          <p class="text-sm tracking-wide text-[#dc2626]">
            {{ formSignUpData.checkPassword.errorMessage }}
          </p>
        </div>
      </div>

      <div class="flex flex-col mb-3 tracking-wider">
        <div
          class="relative flex items-center gap-2 py-2 before:absolute before:content before:w-full before:bottom-0 before:left-0 before:h-[2px] before:bg-[#323232]"
        >
          <IconPhone class="text-3xl" />
          <label for="phone" class="whitespace-nowrap">連絡電話</label>
          <input
            type="text"
            name="phone"
            id="phone"
            class="w-full bg-transparent border-none text-base tracking-wide text-[#323232] focus:ring-0 focus:outline-none"
            v-model="formSignUpData.phone.value"
          />
        </div>
        <div class="w-full h-6 px-3 pt-1">
          <p class="text-sm tracking-wide text-[#dc2626]">
            {{ formSignUpData.phone.errorMessage }}
          </p>
        </div>
      </div>

      <div class="submit_box">
        <input
          type="submit"
          value="送出"
          @click="handleSubmit"
          class="w-full p-3 rounded-md shadow-md bg-[#FFE8D6] hover:bg-[#DDBEA9] transition-colors duration-150 text-[#252422] hover:text-white"
          :disabled="formSignUpData.isSubmit"
          :class="[
            formSignUpData.isSubmit
              ? 'bg-gray-300 text-gray-400 hover:bg-gray-300 hover:text-gray-400'
              : ''
          ]"
        />
      </div>
    </fieldset>
  </form>
</template>

<script setup>
import IconUserCircle from '~icons/heroicons-outline/user-circle'
import IconEmail from '~icons/heroicons-outline/envelope'
import IconLockClosed from '~icons/heroicons-outline/lock-closed'
import IconPhone from '~icons/heroicons-outline/phone'
import IconEye from '~icons/heroicons-outline/eye'
import IconEyeOff from '~icons/heroicons-outline/eye-off'
import { validateEmail, validateWhiteSpace, Mphone } from '@/utils/validator'
import { callApi } from '@/utils/callApi'
import { apiPostRegister } from '@/api/api'
import { promiseTimeout } from '@vueuse/shared'
import { successNotify, errorNotify } from '@/composables/useNotification'

const router = useRouter()
const showPwd = ref(false)
const inputPwdRef = ref(null)
const inputCheckPwdRef = ref(null)
const formSignUpData = reactive({
  name: {
    value: '',
    errorMessage: ''
  },
  email: {
    value: '',
    errorMessage: ''
  },
  account: {
    value: '',
    errorMessage: ''
  },
  password: {
    value: '',
    errorMessage: ''
  },
  checkPassword: {
    value: '',
    errorMessage: ''
  },
  phone: {
    value: '',
    errorMessage: ''
  },
  isSubmit: false
})

// 顯示密碼
const handleShowPwd = () => {
  showPwd.value = !showPwd.value

  if (showPwd.value) {
    inputPwdRef.value.type = 'text'
    inputCheckPwdRef.value.type = 'text'
  } else {
    inputPwdRef.value.type = 'password'
    inputCheckPwdRef.value.type = 'password'
  }
}

// 表單驗證
const validateCheck = () => {
  const isNameValid = validateWhiteSpace(formSignUpData.name.value)
  const isEmailValid = validateEmail(formSignUpData.email.value)
  const isAccountValid = validateWhiteSpace(formSignUpData.account.value)
  const isPasswordValid = validateWhiteSpace(formSignUpData.password.value)
  const isCheckPasswordValid = validateWhiteSpace(formSignUpData.checkPassword.value)
  const isPhoneValid = Mphone(formSignUpData.phone.value)

  if (!isNameValid) {
    formSignUpData.name.errorMessage = '欄位不能為空白'
    return false
  }

  if (!isEmailValid) {
    formSignUpData.email.errorMessage = '請輸入有效的email格式'
    return false
  }

  if (!isAccountValid) {
    formSignUpData.account.errorMessage = '欄位不能為空白'
    return false
  }

  if (!isPasswordValid) {
    formSignUpData.password.errorMessage = '欄位不能為空白'
    return false
  }

  if (!isCheckPasswordValid) {
    formSignUpData.checkPassword.errorMessage = '欄位不能為空白'
    return false
  }

  if (!isPhoneValid) {
    formSignUpData.phone.errorMessage = '請輸入手機電話'
    return false
  }

  return true
}

const handleSubmit = async () => {
  formSignUpData.isSubmit = true
  await promiseTimeout(1000)
  if (validateCheck()) {
    register()
  } else {
    formSignUpData.isSubmit = false
  }
}

// 註冊
const register = async () => {
  const data = {
    Account: formSignUpData.account.value,
    Password: formSignUpData.password.value,
    Name: formSignUpData.name.value,
    Email: formSignUpData.email.value,
    Phone: formSignUpData.phone.value,
    Admin: true
  }

  try {
    await callApi(apiPostRegister, data, async () => {
      successNotify('會員註冊成功')
      await router.push('/user/login')
    })
  } catch (error) {
    errorNotify('會員註冊失敗', error)
  } finally {
    formSignUpData.isSubmit = false
  }
}

// 監聽名字
watch(
  () => formSignUpData.name.value,
  (newValue) => {
    if (!validateWhiteSpace(newValue)) {
      formSignUpData.name.errorMessage = '欄位不能為空白'
    } else {
      formSignUpData.name.errorMessage = ''
    }
  }
)

// 監聽信箱
watch(
  () => formSignUpData.email.value,
  (newValue) => {
    if (!validateEmail(newValue)) {
      formSignUpData.email.errorMessage = '請輸入有效的email格式'
    } else {
      formSignUpData.email.errorMessage = ''
    }
  }
)

// 監聽帳號
watch(
  () => formSignUpData.account.value,
  (newValue) => {
    if (!validateWhiteSpace(newValue)) {
      formSignUpData.account.errorMessage = '欄位不能為空白'
    } else {
      formSignUpData.account.errorMessage = ''
    }
  }
)

// 監聽電話
watch(
  () => formSignUpData.phone.value,
  (newValue) => {
    if (!Mphone(newValue)) {
      formSignUpData.phone.errorMessage = '請輸入手機電話'
    } else {
      formSignUpData.phone.errorMessage = ''
    }
  }
)

// 監聽password輸入框
watch(
  () => formSignUpData.password.value,
  (newValue) => {
    if (!validateWhiteSpace(newValue)) {
      formSignUpData.password.errorMessage = '密碼不能為空白'
    } else {
      formSignUpData.password.errorMessage = ''
    }
  }
)

// 監聽checkPassword輸入框
watch(
  () => formSignUpData.checkPassword.value,
  (newValue) => {
    if (!validateWhiteSpace(newValue)) {
      formSignUpData.checkPassword.errorMessage = '密碼不能為空白'
    } else if (formSignUpData.checkPassword.value !== formSignUpData.password.value) {
      formSignUpData.checkPassword.errorMessage = '密碼輸入不相同'
    } else {
      formSignUpData.checkPassword.errorMessage = ''
    }
  }
)
</script>
