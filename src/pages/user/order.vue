<script setup>
import { callApi } from '@/utils/callApi'
import { apiPostGetOrderList } from '@/api/api'
import { errorNotify } from '@/composables/useNotification'
import { formattedDate } from '@/utils/formatted'

const data = ref([])
const columns = ref([
  { key: 'ID', label: '訂單編號' },
  { key: 'CheckoutAt', label: '訂單日期' },
  { key: 'OrderStage', label: '狀態' },
  { key: 'DeliveryStage', label: '寄送日期' },
  { key: 'DeliveryMethod', label: '寄送方式' }
])

// 取得收藏列表
const getOrderList = async () => {
  const orderData = {}

  try {
    await callApi(apiPostGetOrderList, orderData, (res) => {
      data.value = [...res.Data]
      data.value.forEach((item) => {
        item.OrderStage = item.OrderStage === '0' ? '未出貨' : '已出貨'
        item.DeliveryStage = item.DeliveryStage === '0' ? '' : item.DeliveryStage
        item.CheckoutAt = formattedDate(item.CheckoutAt)
      })
    })
  } catch (error) {
    errorNotify('訂單資訊取得失敗', error)
  }
}

// 初始化
onMounted(async () => {
  await getOrderList()
})
</script>

<template>
  <div class="p-0 overflow-hidden md:p-8 lg:p-12">
    <h2
      class="titleText text-2xl relative pl-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:top-0 after:border-2 after:border-[#DDBEA9]"
    >
      訂單查詢
    </h2>
    <div
      v-if="data.length === 0"
      class="mt-5 flex flex-col gap-3 items-center justify-center w-full h-full min-h-[200px] text text text-xl"
    >
      還沒有購買商品，趕快去選購吧
      <RouterLink to="/" class="px-3 py-1 rounded-md link bg-[#FFE8D6]"> GO </RouterLink>
    </div>
    <div v-else class="relative min-h-[calc(100vh-5rem)] mt-5">
      <div class="absolute top-0 bottom-0 w-full space-y-6 overflow-y-auto">
        <Table :columns="columns" :data="data" emptyText="當前沒有訂單資料">
          <template #actions="{ record }">
            <ShowOrderModal :record="record" />
          </template>
        </Table>
      </div>
    </div>
  </div>
</template>
