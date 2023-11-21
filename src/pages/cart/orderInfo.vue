<script setup>
import IconX from '~icons/heroicons-outline/x-mark'
import { callApi } from '@/utils/callApi'
import { apiPostUpdateCartInfo, apiPostDeleteGoodsCart, apiGatBenefitsList } from '@/api/api'
import { useStore } from 'vuex'
import { useConfirm } from '@/composables/useConfirmModal'
import { successNotify, warningNotify, errorNotify } from '@/composables/useNotification'

const router = useRouter()
const store = useStore()
const columns = ref([
  { key: 'ID', label: '商品詳情' },
  { key: 'CheckoutAt', label: '數量' },
  { key: 'OrderStage', label: '小計' }
])
const state = reactive({
  goodsList: [],
  goodsSpecs: [], // 所有規格
  discountID: null,
  updateCartForm: {
    ID: 0,
    GoodsID: 0,
    Specs: [
      {
        ID: 0,
        SpecID: 0,
        Num: 0
      }
    ]
  },
  deliveryValue: null,
  paymentValue: null,
  deliveryFee: 0,
  discountFee: 0,
  total: 0
})

// 取得購物車列表
const getOrderList = async () => {
  await store.dispatch('cartModules/updateCartItems')
  state.goodsList = store.getters['cartModules/goodsList']
  getGoodsSpecs()
  specsChange()
}

// 所有商品的金額總數
const allGoodsTotal = computed(() => {
  let total = 0
  for (const i in state.goodsList) {
    total += state.goodsList[i].total
  }
  return total
})

// 整筆訂單的金額總數
const orderTotal = computed(() => {
  let total = 0
  for (const i in state.goodsList) {
    total += state.goodsList[i].total
  }
  return total + state.deliveryFee - state.discountFee
})

// 根據選擇的寄送方式運費不同
const feeMethodSelect = () => {
  state.deliveryValue === '自取' ? (state.deliveryFee = 0) : (state.deliveryFee = 150)
}

// 刪除購物車商品
const deleteCartItemFromAPI = async (id) => {
  const data = { ID: id }
  try {
    await callApi(apiPostDeleteGoodsCart, data, async (res) => {
      successNotify('購物車商品刪除成功')
      await getOrderList()
      await store.dispatch('cartModules/updateCartItems')
    })
  } catch (error) {
    errorNotify('購物車商品刪除失敗', error)
  }
}

// 刪除
const handleCartItemDeletion = (id) => {
  useConfirm(`確定要刪除商品?`).then((result) => {
    if (result) {
      deleteCartItemFromAPI(id)
    }
  })
}

// 選擇優惠券
const handleUpdateSelectedDiscount = (selectedDiscount) => {
  state.discountID = selectedDiscount[0]
  const selectedDiscountItem = discountList.value.find((item) => item.ID === selectedDiscount[0])

  if (selectedDiscountItem) {
    state.discountFee = selectedDiscountItem.Amount
  }
}

// 前往結帳
const handleSubmit = () => {
  if (!state.deliveryValue) {
    warningNotify('請選擇送貨方式')
    return
  }

  if (!state.paymentValue) {
    warningNotify('請選擇付款方式')
    return
  }

  store.commit('cartModules/UPDATE_CART_PAYMENT', state)
  store.commit('cartModules/UPDATE_CART_TOTAL', orderTotal.value)
  router.push('/cart/fillInfo')
}

// 初始化
onMounted(async () => {
  await getOrderList()
  await getDiscountsList()
})

// 更新購物車的商品數量
const changeCart = async (method, item) => {
  state.updateCartForm.ID = item.ID
  state.updateCartForm.GoodsID = item.GoodsID
  state.updateCartForm.Specs[0].ID = item.Specs[0].ID
  state.updateCartForm.Specs[0].SpecID = item.Specs[0].SpecID
  if (method === 'plus' && item.Specs[0].Num < 99)
    state.updateCartForm.Specs[0].Num = item.Specs[0].Num + 1
  else if (method === 'minus' && item.Specs[0].Num > 1)
    state.updateCartForm.Specs[0].Num = item.Specs[0].Num - 1
  const data = state.updateCartForm
  try {
    await callApi(apiPostUpdateCartInfo, data, async () => {
      successNotify('購物車商品更新成功')
      await getOrderList()
      await store.dispatch('cartModules/updateCartItems')
    })
  } catch (error) {
    errorNotify('購物車商品更新失敗', error)
  }
}

// 監聽運費變更
const feeChange = computed(() => {
  return state.deliveryFee * 1
})

// 得到所有商品規格
const getGoodsSpecs = () => {
  const goodsInfo = JSON.parse(localStorage.getItem('goodsInfo'))
  const specs = goodsInfo.map((item) => {
    return item.GoodsSpecs
  })
  state.goodsSpecs = specs.flat(Infinity)
}

// 針對一筆商品內規格作轉換
const specsCommon = (orderSpecs) => {
  for (const i in state.goodsSpecs) {
    if (orderSpecs.Specs[0].SpecID === state.goodsSpecs[i].ID) {
      orderSpecs.specsName = state.goodsSpecs[i].Specs
    }
  }
}

// 針對一筆商品內規格作轉換(macaron/cupcake)
const specsAdded = (orderSpecs) => {
  for (const i in orderSpecs.Specs) {
    for (const j in state.goodsSpecs) {
      if (orderSpecs.Specs[i].SpecID === state.goodsSpecs[j].ID) {
        orderSpecs.specsName.push(state.goodsSpecs[j].Specs)
      }
    }
  }
  orderSpecs.specsName.splice(0, 1)
  orderSpecs.specsName = orderSpecs.specsName.join()
}

// 取得訂單中規格超過一筆的資料
const specsChange = () => {
  for (const i in state.goodsList) {
    if (state.goodsList[i].Specs.length > 1) {
      state.goodsList[i].specsName = []
      specsAdded(state.goodsList[i])
    } else if (state.goodsList[i].Specs.length === 1) {
      specsCommon(state.goodsList[i])
    }
  }
}

const discountList = ref([])

// 取得優惠卷列表
const getDiscountsList = async () => {
  const data = ''
  try {
    await callApi(apiGatBenefitsList, data, (res) => {
      discountList.value = [...res.Data.DiscountTicket]
    })
  } catch (error) {
    errorNotify('優惠卷取得失敗', error)
  }
}
</script>

<template>
  <main class="mb-10">
    <ShoppingFlowChart />

    <div class="relative h-[calc(100vh-5rem)] mt-5 border border-[#DDBEA9]">
      <div class="absolute top-0 bottom-0 w-full space-y-6 overflow-y-auto">
        <table class="w-full">
          <thead>
            <tr class="border-b border-[#DDBEA9]">
              <th
                v-for="column in columns"
                :key="column.key"
                class="px-5 py-3 text-sm font-medium tracking-wider text-left text-[#CB997E] bg-[#FFE8D6] whitespace-nowrap"
              >
                {{ column.label }}
              </th>
              <th
                class="px-5 py-3 text-sm font-medium tracking-wider text-left text-[#CB997E] bg-[#FFE8D6] whitespace-nowrap"
              ></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="record in state.goodsList" :key="record.id">
              <td class="px-5 py-3 whitespace-nowrap text">
                <div class="flex w-full gap-2">
                  <img :src="record.ImageUrls" alt="" class="w-12" />
                  <div class="flex items-center justify-between w-full">
                    <div class="flex flex-col items-start text">
                      <p class="truncate w-[150px] text-left">
                        {{ record.Goods.Name }}
                      </p>
                      <p class="text-xs truncate w-[150px] text-left">
                        {{ record.specsName }}
                      </p>
                      <span class="text-xs before:content-['NT$'] before:mr-1">{{
                        record.TimestampPice
                      }}</span>
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-5 py-3 text">
                <div class="flex items-center">
                  <button
                    @click="changeCart('minus', record)"
                    class="px-2 py-1 border border-gray-300 rounded-l-md"
                  >
                    -
                  </button>
                  <input
                    type="text"
                    readonly
                    :value="record.Specs[0].Num"
                    class="w-12 py-1 text-center border-t border-b border-gray-300 focus:ring-0 focus:outline-none"
                  />
                  <button
                    @click="changeCart('plus', record)"
                    class="px-2 py-1 border border-gray-300 rounded-r-md"
                  >
                    +
                  </button>
                </div>
              </td>
              <td class="px-5 py-3 text">{{ record.total }}</td>
              <td class="px-5 py-3 whitespace-nowrap text-text-secondary">
                <IconX
                  class="w-5 h-5 cursor-pointer hover:text-[#CCC5B9] transition-colors duration-150"
                  @click="handleCartItemDeletion(record.ID)"
                />
              </td>
            </tr>
            <!-- 沒有資料時 -->
            <tr v-if="!state.goodsList.length">
              <td colspan="4" class="py-12 text-center text">您的購物車是空的</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="flex flex-col w-full gap-5 mt-5 sm:flex-row">
      <div class="w-full border border-[#DDBEA9] pb-9">
        <h3 class="text-xl titleText bg-[#FFE8D6] px-2 py-1">送貨以及付款方式</h3>
        <div class="px-4 py-1 sent_options">
          <p class="text">送貨方式</p>
          <select
            v-model="state.deliveryValue"
            class="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            @change="feeMethodSelect"
          >
            <option value="null" disabled selected>請選擇送貨方式</option>
            <option value="自取">自取</option>
            <option value="冷藏包裹">冷藏包裹</option>
          </select>
        </div>
        <div class="px-4 py-1 sent_options">
          <p class="text">付款方式</p>
          <select
            v-model="state.paymentValue"
            class="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="null" disabled selected>請選擇付款方式</option>
            <option value="現金">現金</option>
            <option value="信用卡">信用卡</option>
            <option value="匯款">匯款</option>
          </select>
        </div>
      </div>

      <div class="w-full sm:w-2/5 border border-[#DDBEA9] pb-9">
        <h3 class="text-xl titleText bg-[#FFE8D6] px-2 py-1">訂單資訊</h3>
        <div class="flex flex-col gap-2 px-4 py-1">
          <div class="flex items-center justify-between text">
            商品總計：
            <span>{{ allGoodsTotal }}</span>
          </div>
          <div class="flex items-center justify-between text">
            運費
            <span>{{ feeChange }}</span>
          </div>
          <div class="flex items-center justify-between text">
            優惠券
            <span>{{ state.discountFee > 0 ? `-${state.discountFee}` : '' }}</span>
          </div>
          <div class="text-right text border-b border-[#DDBEA9] pb-2">
            <DiscountModal
              :discountList="discountList"
              @update-selected-discount="handleUpdateSelectedDiscount"
            />
          </div>
          <div class="flex items-center justify-between mt-3 text">
            合計：
            <span>{{ orderTotal }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-end w-full mt-5">
      <PrimaryButton class="w-full sm:w-1/5" @click="handleSubmit">前往結帳</PrimaryButton>
    </div>
  </main>
</template>
