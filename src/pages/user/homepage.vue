<template>
  <div class="p-0 md:p-8 lg:p-12">
    <div class="flex items-center gap-2 px-1 py-3">
      <IconsUser class="w-8 h-8 border-2 border-[#6B705C] rounded-full text-[#6B705C]" />
      <div class="font-medium tracking-wide">{{ data.account }}</div>
      <span
        class="px-3 ml-3 rounded-md md:px-5 text"
        :class="[levelInfo.color, levelInfo.textColor]"
        >{{ levelInfo.name }}</span
      >
    </div>
    <div class="flex flex-col gap-5 px-1 py-3">
      <div class="flex items-center gap-2">
        <IconsPencil class="w-8 h-8 border-2 border-[#6B705C] rounded-full text-[#6B705C]" />
        <div class="font-medium tracking-wide">編輯會員資料</div>
      </div>

      <div
        class="relative w-full space-y-2 before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:border pb-5 before:border-[#DDBEA9]"
      >
        <div class="flex flex-col w-full gap-1 py-2 md:flex-row">
          <label
            for="name"
            class="flex items-center w-full text md:w-1/5 after:content-['*'] after:ml-0.5 after:text-red-500"
            >姓名</label
          >
          <input
            type="text"
            name="name"
            id="name"
            v-model="data.name"
            class="w-full md:w-4/5 py-1 px-2 bg-transparent border-2 rounded-md border-[#DDBEA9] text-base tracking-wide text-[#323232] focus:ring-0 focus:outline-none"
          />
        </div>

        <div class="flex flex-col w-full gap-1 py-2 md:flex-row">
          <label
            class="flex items-center w-full text md:w-1/5 after:content-['*'] after:ml-0.5 after:text-red-500"
            >電子信箱</label
          >
          <span
            class="block w-full select-none md:w-4/5 py-1 px-2 border-2 rounded-md border-[#DDBEA9] text-base tracking-wide text-[#323232]"
            >{{ data.mail }}</span
          >
        </div>

        <div class="flex flex-col w-full gap-1 py-2 md:flex-row">
          <label for="phone" class="flex items-center w-full text md:w-1/5">聯絡電話</label>
          <input
            type="text"
            name="phone"
            id="phone"
            v-model="data.phone"
            class="w-full md:w-4/5 py-1 px-2 bg-transparent border-2 rounded-md border-[#DDBEA9] text-base tracking-wide text-[#323232] focus:ring-0 focus:outline-none"
          />
        </div>

        <div class="flex flex-col w-full gap-1 py-2 md:flex-row">
          <label for="address" class="flex items-center w-full text md:w-1/5">寄件地址</label>
          <input
            type="text"
            name="address"
            id="address"
            v-model="data.address"
            class="w-full md:w-4/5 py-1 px-2 bg-transparent border-2 rounded-md border-[#DDBEA9] text-base tracking-wide text-[#323232] focus:ring-0 focus:outline-none"
          />
        </div>
      </div>

      <div
        class="relative w-full space-y-2 before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:border pb-5 before:border-[#DDBEA9]"
      >
        <span class="block text">如若不需更改密碼，請直接留空</span>
        <div class="flex flex-col w-full gap-1 py-2 md:flex-row">
          <label for="password" class="flex items-center w-full text md:w-1/5">原始密碼</label>
          <input
            type="text"
            name="password"
            id="password"
            v-model="data.password"
            class="w-full md:w-4/5 py-1 px-2 bg-transparent border-2 rounded-md border-[#DDBEA9] text-base tracking-wide text-[#323232] focus:ring-0 focus:outline-none"
          />
        </div>

        <div class="flex flex-col w-full gap-1 py-2 md:flex-row">
          <label for="newPassword" class="flex items-center w-full text md:w-1/5">設定新密碼</label>
          <input
            type="text"
            name="newPassword"
            id="newPassword"
            v-model="data.newPassword"
            class="w-full md:w-4/5 py-1 px-2 bg-transparent border-2 rounded-md border-[#DDBEA9] text-base tracking-wide text-[#323232] focus:ring-0 focus:outline-none"
          />
        </div>

        <div class="flex flex-col w-full gap-1 py-2 md:flex-row">
          <label for="checkPassword" class="flex items-center w-full text md:w-1/5"
            >確認新密碼</label
          >
          <input
            type="text"
            name="checkPassword"
            id="checkPassword"
            v-model="data.checkPassword"
            class="w-full md:w-4/5 py-1 px-2 bg-transparent border-2 rounded-md border-[#DDBEA9] text-base tracking-wide text-[#323232] focus:ring-0 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <div class="flex flex-col w-full gap-1 py-2 md:flex-row">
          <label class="flex items-center w-full text md:w-1/5">電子報</label>
          <div class="w-full py-2 space-x-2">
            <input type="radio" id="one" value="One" v-model="data.sub" class="peer/one" />
            <label for="one" class="text peer-checked/one:text-sky-500">訂閱</label>
            <input type="radio" id="two" value="Two" v-model="data.sub" class="peer/Two" />
            <label for="two" class="text peer-checked/Two:text-sky-500">不訂閱</label>
          </div>
        </div>
        <span class="text-xs text"
          >訂閱商品/活動訊息，我們將不定期透過email通知最新商品活動及優惠訊息。</span
        >
      </div>

      <div class="flex gap-5 mt-10">
        <SecondaryButton class="w-full">重新填寫</SecondaryButton>
        <PrimaryButton type="submit" :loading="loading" @click="handleSubmit" class="w-full"
          >儲存變更</PrimaryButton
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import IconsUser from '~icons/heroicons/user-20-solid'
import IconsPencil from '~icons/heroicons/pencil-square-20-solid'
import { callApi } from '@/utils/callApi'
import { apiGetMemberData, apiPostUpdateMemberData } from '@/api/api'
import { successNotify, errorNotify } from '@/composables/useNotification'
import { promiseTimeout } from '@vueuse/shared'

const data = ref({
  account: '',
  name: '',
  mail: '',
  phone: '',
  address: '',
  password: '',
  newPassword: '',
  checkPassword: '',
  sub: 'One'
})
const levels = reactive([
  {
    threshold: 0,
    name: '銅級會員',
    color: 'bg-[#b87333]',
    textColor: 'text-white'
  },
  {
    threshold: 5000,
    name: '銀級會員',
    color: 'bg-[#c0c0c0]',
    textColor: 'text-white'
  },
  {
    threshold: 10000,
    name: '金級會員',
    color: 'bg-[#ffd700]',
    textColor: 'text-[#403D39]'
  },
  {
    threshold: 20000,
    name: '白金會員',
    color: 'bg-[#e5e4e2]',
    textColor: 'text-[#403D39]'
  }
])
const loading = ref(false)

const levelInfo = computed(() => {
  let level
  for (let i = levels.length - 1; i >= 0; i--) {
    // if (store.state.user.userInfo.Consumption >= levels[i].threshold) {
    if (levels[i].threshold <= 0) {
      level = levels[i]
      break
    }
  }
  return level
})

// 取得當前會員資料
const getMemberInfo = async () => {
  const memberData = ''
  try {
    await callApi(apiGetMemberData, memberData, (res) => {
      data.value.account = res.Data.Account
      data.value.name = res.Data.Name
      data.value.mail = res.Data.Email
      data.value.phone = res.Data.Phone
      data.value.address = res.Data.Address
    })
  } catch (error) {
    errorNotify('會員資料取得失敗', error)
  }
}

// 送出修改會員資料
const handleSubmit = async () => {
  loading.value = true
  await promiseTimeout(1000)
  await updateMemberData()
  await getMemberInfo()
}

// 更新會員資料
const updateMemberData = async () => {
  const memberData = {
    name: data.value.name,
    phone: data.value.phone,
    address: data.value.address,
    password: data.value.password,
    newPassword: data.value.newPassword,
    checkPassword: data.value.checkPassword
  }
  try {
    await callApi(apiPostUpdateMemberData, memberData, () => {
      successNotify('會員資料更新成功')
    })
  } catch (error) {
    errorNotify('會員資料更新失敗', error)
  } finally {
    loading.value = false
  }
}

// 初始化
onMounted(async () => {
  await getMemberInfo()
})
</script>
