<script setup>
import Modal from '@/components/Modal.vue'
import { formattedTime } from '@/utils/formatted'
import { errorNotify } from '@/composables/useNotification'
import { callApi } from '@/utils/callApi'
import { apiPostGetOrderDetail } from '@/api/api'
import defaultImageUrl from '@/assets/default/macaron.jpg'

const props = defineProps({
  record: Object
})

const showInfoModal = ref(false)
const goodsInfo = ref({})
const orderInfo = ref({
  Addr: '',
  CreatedAt: '',
  DeliveryMethod: '',
  Phone: '',
  Recipient: '',
  PaymentMethod: '',
  DeliveryStage: '',
  Discounts: [],
  OrderRemark: ''
})

const computedNum = computed(() => {
  if (orderInfo.value?.OrderItem?.[0]?.Specs?.[0]) {
    return orderInfo.value.OrderItem[0].Specs[0].Num
  }
  return 0
})

// 取得訂單詳細資料
const getOrderDetail = async () => {
  const data = { ID: props.record.ID }

  try {
    await callApi(apiPostGetOrderDetail, data, (res) => {
      orderInfo.value = { ...res.Data }
      orderInfo.value.Discounts =
        orderInfo.value.Discounts.length === 0
          ? '未使用優惠券'
          : orderInfo.value.Discounts[0].Amount

      if (orderInfo.value.OrderItem && orderInfo.value.OrderItem.length > 0) {
        const orderId = orderInfo.value.OrderItem[0].GoodsID
        goodsInfo.value = JSON.parse(localStorage.getItem('goodsInfo')).find(
          (item) => item.ID === orderId
        )
      }
    })
  } catch (error) {
    errorNotify('訂單資料取得失敗', error)
  }
}

// 開啟會員資訊彈窗
const handleOpenModal = async () => {
  showInfoModal.value = !showInfoModal.value
  await getOrderDetail()
}

// 關閉會員彈窗
const handleCloseModal = () => {
  showInfoModal.value = !showInfoModal.value
}
</script>

<template>
  <button
    type="button"
    class="text py-1.5 px-3 rounded-md shadow-md bg-[#FFE8D6] hover:bg-[#DDBEA9] transition-colors duration-150 text-[#252422] hover:text-white"
    @click="handleOpenModal"
  >
    詳細資料
  </button>

  <Modal v-model="showInfoModal">
    <template #title>
      <div class="flex items-center justify-start pb-2 border-b border-[#FFE8D6]">
        <h3 class="text-xl titleText">訂單詳細資訊</h3>
      </div>
    </template>

    <template #content>
      <div class="mt-6 space-y-3">
        <div class="space-y-2">
          <h4 class="text-lg font-medium titleText">商品資訊</h4>
          <div class="flex border border-[#DDBEA9] p-3 rounded">
            <img
              :src="goodsInfo?.ImageUrls?.[0]?.Url || defaultImageUrl"
              alt=""
              class="h-[100px] max-w-[200px] object-cover"
            />
            <div class="flex flex-col items-start justify-center gap-1 px-2">
              <h4 class="text-lg whitespace-normal titleText">
                {{ goodsInfo?.Name }}
              </h4>
              <p
                class="text font-medium text-red-500 before:content-['NT$'] before:mr-1 before:text-[#252422]"
              >
                {{ goodsInfo?.UnitPrice }}
              </p>
              <span class="text before:content-['×'] before:mr-1 before:text-[#252422]">
                {{ computedNum }}
              </span>
            </div>
          </div>
        </div>

        <div class="space-y-2">
          <h4 class="text-lg font-medium titleText">配送資訊</h4>
          <div
            class="relative h-[300px] md:h-auto flex flex-col border border-[#DDBEA9] rounded overflow-hidden"
          >
            <div
              class="absolute top-0 bottom-0 w-full overflow-y-auto md:static md:top-auto md:bottom-auto"
            >
              <div class="w-full md:w-auto">
                <div class="flex flex-col px-3 py-2 font-medium text-left text md:flex-row">
                  訂購人：
                  <span class="text flex-1 text-[#403D39]">{{ orderInfo.Recipient }}</span>
                </div>
                <div class="flex flex-col px-3 py-2 font-medium text-left text md:flex-row">
                  收件人：
                  <span class="text flex-1 text-[#403D39]">{{ orderInfo.Recipient }}</span>
                </div>
                <div class="flex flex-col px-3 py-2 font-medium text-left text md:flex-row">
                  收件地址：
                  <span class="text flex-1 text-[#403D39]">{{ orderInfo.Addr }}</span>
                </div>
                <div class="flex flex-col px-3 py-2 font-medium text-left text md:flex-row">
                  聯絡電話：
                  <span class="text flex-1 text-[#403D39]">{{ orderInfo.Phone }}</span>
                </div>
                <div class="flex flex-col px-3 py-2 font-medium text-left text md:flex-row">
                  訂單成立時間：
                  <span class="text flex-1 text-[#403D39]">{{
                    formattedTime(orderInfo.CreatedAt)
                  }}</span>
                </div>
              </div>
              <div class="w-full md:w-auto">
                <div class="flex flex-col px-3 py-2 font-medium text-left text md:flex-row">
                  配送方式：
                  <span class="text flex-1 text-[#403D39]">{{ orderInfo.DeliveryMethod }}</span>
                </div>
                <div class="flex flex-col px-3 py-2 font-medium text-left text md:flex-row">
                  訂單狀態：
                  <span class="text flex-1 text-[#403D39]">{{ orderInfo.DeliveryStage }}</span>
                </div>
                <div class="flex flex-col px-3 py-2 font-medium text-left text md:flex-row">
                  支付方式：
                  <span class="text flex-1 text-[#403D39]">{{ orderInfo.PaymentMethod }}</span>
                </div>
                <div class="flex flex-col px-3 py-2 font-medium text-left text md:flex-row">
                  運費：
                  <span class="text flex-1 text-[#403D39]">資料資料</span>
                </div>
                <div class="flex flex-col px-3 py-2 font-medium text-left text md:flex-row">
                  優惠劵：
                  <span class="text flex-1 text-[#403D39]">{{ orderInfo.Discounts }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="px-4 py-2 font-medium text-left border border-[#DDBEA9] rounded text">
            備註：
            <span class="text text-[#403D39]">{{ orderInfo.OrderRemark }}</span>
          </div>
        </div>
      </div>
    </template>

    <template #footer>
      <div
        class="relative flex items-center justify-center gap-4 after:absolute after:content after:h-[1px] after:w-full after:bg-[#FFE8D6] after:-top-4"
      >
        <SecondaryButton @click="handleCloseModal">確定</SecondaryButton>
      </div>
    </template>
  </Modal>
</template>
