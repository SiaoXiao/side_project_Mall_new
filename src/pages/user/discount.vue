<script setup>
import { callApi } from '@/utils/callApi'
import { apiGatBenefitsList } from '@/api/api'
import { errorNotify } from '@/composables/useNotification'
const discount = ref([])

// 取得優惠卷列表
const getBenefitsList = async () => {
  const data = ''
  try {
    await callApi(apiGatBenefitsList, data, (res) => {
      discount.value = [...res.Data.DiscountTicket]
    })
  } catch (error) {
    errorNotify('優惠卷取得失敗', error)
  }
}

// 初始化
onMounted(async () => {
  await getBenefitsList()
})
</script>

<template>
  <div class="p-0 md:p-8 lg:p-12">
    <h2
      class="titleText text-2xl relative pl-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:top-0 after:border-2 after:border-[#DDBEA9]"
    >
      專屬優惠
    </h2>
    <div class="mt-5 border border-[#DDBEA9] p-3 rounded">
      <h3 class="text-xl font-medium titleText">會員累積消費 - 銅級會員</h3>
      <span class="block mb-3 text-lg text">NT $600</span>
      <div class="mb-1 border rounded-md">1</div>
      <span class="block text-sm text">再消費NT $4400即可升等為銀級會員</span>
    </div>
    <div
      v-if="discount.length === 0"
      class="mt-5 flex items-center justify-center w-full h-full min-h-[200px] text text-xl"
    >
      目前還沒有可以使用的優惠券
    </div>
    <div v-else class="flex flex-wrap w-full mt-5">
      <div v-for="item in discount" :key="item.ID" class="w-full p-2 select-none md:w-1/2">
        <div class="flex rounded">
          <div
            class="relative w-2/5 flex items-center justify-center bg-[#B7B7A4] border-r-2 border-white after:content-[''] after:absolute after:bottom-0 after:right-0 after:border-b-[20px] after:border-l-[20px] after:border-l-[#B7B7A4] after:border-b-white after:w-0 before:content-[''] before:absolute before:top-0 before:right-0 before:border-t-[20px] before:border-l-[20px] before:border-l-[#B7B7A4] before:border-t-white before:w-0"
          >
            <h3 class="text-xl titleText text-[#252422] before:content-['NT$'] before:mr-1">
              {{ item.Amount }}
            </h3>
          </div>
          <div
            class="relative w-3/5 p-4 text-center bg-[#FFE8D6] after:content-[''] after:absolute after:bottom-0 after:left-0 after:border-b-[20px] after:border-r-[20px] after:border-r-[#FFE8D6] after:border-b-white after:w-0 before:content-[''] before:absolute before:top-0 before:left-0 before:border-t-[20px] before:border-r-[20px] before:border-r-[#FFE8D6] before:border-t-white before:w-0"
          >
            <p class="text-sm text">單筆消費滿1000元即可使用一張</p>
            <p class="text-sm text">單筆消費限用一張折價券</p>
            <p class="text-sm text">消費滿2000即贈送一張</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
