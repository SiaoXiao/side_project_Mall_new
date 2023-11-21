<template>
  <form data-test="form" class="px-6 py-3" @submit.prevent="submit" autocomplete="on">
    <fieldset>
      <legend class="mb-3 text-center titleText">忘記密碼</legend>

      <div v-if="!formForgotData.key" class="flex flex-col mb-3 tracking-wider">
        <div
          class="relative flex items-center gap-2 py-2 before:absolute before:content before:w-full before:bottom-0 before:left-0 before:h-[2px] before:bg-[#323232]"
        >
          <IconEmail class="w-9 h-9" />
          <label for="forgotEmail" class="whitespace-nowrap">Email</label>
          <input
            data-test="email"
            type="email"
            name="email"
            id="forgotEmail"
            class="w-full bg-transparent border-none text-base tracking-wide text-[#323232] focus:ring-0 focus:outline-none"
            v-model="formForgotData.email.value"
          />
        </div>
        <div class="w-full h-6 px-3 pt-1">
          <p data-test="errorMsg" class="text-sm tracking-wide text-[#dc2626]">
            {{ formForgotData.email.errorMessage }}
          </p>
        </div>
      </div>

      <div v-else class="flex flex-col mb-3 tracking-wider">
        <div
          class="relative flex items-center gap-2 py-2 before:absolute before:content before:w-full before:bottom-0 before:left-0 before:h-[2px] before:bg-[#323232]"
        >
          <IconLockClosed class="w-9 h-9" />
          <label for="password" class="whitespace-nowrap">新密碼</label>
          <input
            type="text"
            name="password"
            id="password"
            class="w-full bg-transparent border-none text-base tracking-wide text-[#323232] focus:ring-0 focus:outline-none"
            v-model="formForgotData.newPassword.value"
          />
        </div>
        <div class="w-full h-6 px-3 pt-1">
          <p data-test="errorMsg" class="text-sm tracking-wide text-[#dc2626]">
            {{ formForgotData.newPassword.errorMessage }}
          </p>
        </div>
      </div>

      <div v-if="!formForgotData.key" class="submit_box">
        <input
          type="submit"
          value="送出"
          @click="handleSubmit"
          class="w-full p-3 rounded-md shadow-md bg-[#FFE8D6] hover:bg-[#DDBEA9] transition-colors duration-150 text-[#252422] hover:text-white"
          :disabled="formForgotData.isSubmit"
        />
      </div>

      <div v-else class="submit_box">
        <input
          type="submit"
          value="更新密碼"
          @click="updatePassword"
          class="w-full p-3 rounded-md shadow-md bg-[#FFE8D6] hover:bg-[#DDBEA9] transition-colors duration-150 text-[#252422] hover:text-white"
          :disabled="formForgotData.isSubmit"
        />
      </div>
    </fieldset>
  </form>
</template>

<script setup>
import IconEmail from '~icons/heroicons-outline/envelope'
import IconLockClosed from '~icons/heroicons-outline/lock-closed'
import { validateEmail, validateWhiteSpace } from '@/utils/validator'
import { promiseTimeout } from '@vueuse/shared'
import { callApi } from '@/utils/callApi'
import { apiPostForgetPassword, apiPostUpdatePassword } from '@/api/api'
import { successNotify, errorNotify } from '@/composables/useNotification'

// const router = useRouter()
const formForgotData = reactive({
  email: {
    value: '',
    errorMessage: ''
  },
  newPassword: {
    value: '',
    errorMessage: ''
  },
  key: '',
  submitted: false,
  isSubmit: false
})

// 表單驗證
const validateCheck = () => {
  const isEmailValid = validateEmail(formForgotData.email.value)

  if (!isEmailValid) {
    formForgotData.email.errorMessage = '請輸入有效的email格式'
    return false
  }

  return true
}

// 送出修改
const handleSubmit = async () => {
  formForgotData.submitted = true
  await promiseTimeout(1000)
  if (validateCheck()) {
    forgetPassword()
  } else {
    formForgotData.isSubmit = false
  }
}

// 忘記密碼
const forgetPassword = async () => {
  const data = {
    Email: formForgotData.email.value
  }
  try {
    await callApi(apiPostForgetPassword, data, (res) => {
      formForgotData.key = res.Data.Verify
    })
  } catch (error) {
    errorNotify('失敗', error)
  } finally {
    formForgotData.isSubmit = false
  }
}
const reload = inject('reload')
// 更新密碼
const updatePassword = async () => {
  formForgotData.submitted = true
  await promiseTimeout(1000)

  if (validateWhiteSpace(formForgotData.newPassword.value)) {
    forgetPassword()
  }

  const data = {
    Verify: formForgotData.key,
    NewPassword: formForgotData.newPassword.value
  }
  try {
    await callApi(apiPostUpdatePassword, data, () => {
      successNotify('密碼更新成功')
      formForgotData.email.value = ''
      formForgotData.newPassword.value = ''
      formForgotData.key = ''
      reload()
    })
  } catch (error) {
    errorNotify('密碼更新失敗', error)
  } finally {
    formForgotData.isSubmit = false
  }
}

watch(
  () => formForgotData.email.value,
  (newValue) => {
    if (!validateEmail(newValue)) {
      formForgotData.email.errorMessage = '請輸入有效的email格式'
    } else {
      formForgotData.email.errorMessage = ''
    }
  }
)

// 監聽password輸入框
watch(
  () => formForgotData.newPassword.value,
  (newValue) => {
    if (!validateWhiteSpace(newValue)) {
      formForgotData.newPassword.errorMessage = '密碼不能為空白'
    } else {
      formForgotData.newPassword.errorMessage = ''
    }
  }
)
</script>
