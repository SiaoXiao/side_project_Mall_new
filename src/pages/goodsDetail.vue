<script setup>
import IconsCart from '~icons/heroicons/shopping-cart'
import IconsCard from '~icons/heroicons/credit-card'
import { callApi } from '@/utils/callApi'
import { apiPostGetGoodsList } from '@/api/api'
import { warningNotify, errorNotify } from '@/composables/useNotification'
import useCart from '@/composables/useCart'
import useUser from '@/composables/useUser'

const router = useRouter()
const { addToCart } = useCart()
const { checkLoginStatus } = useUser()
const goodsData = ref({})
// 購買數量
const quantity = ref(0)
// 選擇規格
const selectedSpecs = ref([])

const decrease = () => {
  if (quantity.value > 0) {
    quantity.value -= 1
  }
}

const increase = () => {
  quantity.value += 1
}

// 取得商品資訊
const getGoodsDetailData = async () => {
  const data = { ID: localStorage.getItem('goodsDetailID') * 1 }

  try {
    await callApi(apiPostGetGoodsList, data, (res) => {
      goodsData.value = { ...res.Data }

      goodsData.value.ImageUrls.forEach((item) => {
        item.Url = `${import.meta.env.VITE_SERVER_TARGET}/imgs/${item.Url}`
      })
    })
  } catch (error) {
    errorNotify('商品資訊取得失敗', error)
  }
}

// 加入購物車
const handleAddToCart = async () => {
  if (!checkLoginStatus()) return

  if (!selectedSpecs.value || !selectedSpecs.value.length) {
    warningNotify('請選擇商品規格')
    return
  }

  if (!quantity.value || quantity.value <= 0) {
    warningNotify('請選擇購買數量')
    return
  }

  await addToCart(goodsData.value, quantity.value, selectedSpecs.value)
}

// 直接購買
const handleBuyNow = async () => {
  if (!checkLoginStatus()) return

  if (!selectedSpecs.value || !selectedSpecs.value.length) {
    warningNotify('請選擇商品規格')
    return
  }

  if (!quantity.value || quantity.value <= 0) {
    warningNotify('請選擇購買數量')
    return
  }

  await addToCart(goodsData.value, quantity.value, selectedSpecs.value)
  router.push('/cart')
}

// 初始化
onMounted(async () => {
  await getGoodsDetailData()
})
</script>

<template>
  <Layout>
    <PageContainer :childrenPath="goodsData.Name">
      <main class="mb-10">
        <template v-if="Object.keys(goodsData).length > 0">
          <div class="flex flex-col mb-10 md:flex-row">
            <div class="w-full md:w-1/2">
              <GoodsSlider :images="goodsData.ImageUrls" />
            </div>

            <div class="flex flex-col justify-between w-full p-5 md:w-1/2">
              <div class="space-y-8">
                <div class="flex items-center justify-between">
                  <h2 class="titleText text-[#252422]">{{ goodsData.Name }}</h2>
                  <AddLike :item="goodsData" />
                </div>

                <div class="flex flex-col w-full gap-4">
                  <div class="flex items-center justify-between">
                    <span class="font-medium text">選擇商品規格：</span>
                    <span class="text-sm text"
                      >可選擇 {{ goodsData.GoodsSpecs.length }} 種，已選
                      {{ selectedSpecs.length }} 種</span
                    >
                  </div>

                  <div class="flex flex-wrap gap-3">
                    <label v-for="(item, i) in goodsData.GoodsSpecs" :key="i">
                      <input
                        v-model="selectedSpecs"
                        class="sr-only peer"
                        :name="item.ID"
                        type="checkbox"
                        :value="item.ID"
                      />
                      <div
                        class="flex items-center justify-center border rounded-lg px-3 py-1 text peer-checked:font-semibold peer-checked:bg-[#CB997E] peer-checked:text-white"
                      >
                        {{ item.Specs }}
                      </div>
                    </label>
                  </div>
                </div>

                <div class="flex flex-col w-full gap-1">
                  <span class="font-medium text">購買數量：</span>
                  <div class="flex items-center">
                    <button @click="decrease" class="px-2 py-1 border border-gray-300 rounded-l-md">
                      -
                    </button>
                    <input
                      type="text"
                      readonly
                      :value="quantity"
                      class="w-12 py-1 text-center border-t border-b border-gray-300 focus:ring-0 focus:outline-none"
                    />
                    <button @click="increase" class="px-2 py-1 border border-gray-300 rounded-r-md">
                      +
                    </button>
                  </div>
                </div>

                <div class="flex flex-col w-full gap-1">
                  <span class="font-medium text">建議售價：</span>
                  <p
                    class="titleText text-xl text-[#252422] before:content-['NT$'] before:mr-1 before:text-[#252422]"
                  >
                    {{ goodsData.UnitPrice }}
                  </p>
                  <span class="text-sm font-medium text-red-500 text"
                    >*若您有其他疑問，歡迎直接與我們聯絡</span
                  >
                </div>
                <textarea
                  rows="5"
                  cols="30"
                  class="w-full p-1 border-2 border-[#FFE8D6] rounded-md focus:ring-0 focus:outline-[#CB997E] resize-none"
                  placeholder="有任何額外需求請打在此處"
                ></textarea>
              </div>
              <div class="flex w-full gap-6">
                <SecondaryButton class="w-full py-1.5" @click="handleAddToCart">
                  <IconsCart class="w-5 h-5 mr-1" />
                  加入購物車
                </SecondaryButton>
                <PrimaryButton class="w-full py-1.5" @click="handleBuyNow">
                  <IconsCard class="w-5 h-5 mr-1" />
                  直接購買
                </PrimaryButton>
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center justify-center mb-10">
            <h3 class="titleText">商品詳細資訊</h3>
            <p class="p-10 whitespace-pre-line text">
              {{ goodsData.Description }}
            </p>
          </div>
        </template>
      </main>
    </PageContainer>
  </Layout>
</template>
