<script setup>
import { callApi } from '@/utils/callApi'
import { apiPostGetGoodsList } from '@/api/api'
import defaultImageUrl from '@/assets/default/image.jpg'
import { useStore } from 'vuex'
import IconsMagnifyingGlass from '~icons/heroicons/magnifying-glass-20-solid'
// import useCart from '@/composables/useCart'
import { errorNotify } from '@/composables/useNotification'
// const { addToCart } = useCart()
const state = reactive({
  goodsList: [],
  goodsListSearch: {
    ID: 0,
    Page: 0,
    PageLimit: 0,
    GoodsName: '',
    GoodsType: 0
  }
})

const store = useStore()
const router = useRouter()

// 取得杯子蛋糕列表
const getHotProductItems = async () => {
  state.goodsListSearch.GoodsType = 16
  const data = state.goodsListSearch
  try {
    await callApi(apiPostGetGoodsList, data, (res) => {
      state.goodsList = [...res.Data]
    })
  } catch (error) {
    errorNotify('杯子蛋糕列表取得失敗', error)
  }
}

// 切換路由
const handleRouterChange = async (item) => {
  const id = item.ID
  store.commit('goodsModules/SET_GOODS_DETAIL_ID', id)
  router.push({ name: 'GoodsDetail', params: { id } })
}

// 加入購物車
// const handleAddToCart = (item) => {
//   addToCart(item)
// }

// 初始化
onMounted(async () => {
  await getHotProductItems()
})
</script>

<template>
  <div class="p-0 overflow-hidden md:p-3">
    <h2
      class="titleText text-2xl relative pl-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:top-0 after:border-2 after:border-[#DDBEA9]"
    >
      杯子蛋糕
    </h2>

    <div class="flex flex-wrap w-full mt-5">
      <template v-if="state.goodsList.length > 0">
        <div
          v-for="item in state.goodsList"
          :key="item.ID"
          class="w-1/2 p-2 cursor-pointer group sm:w-1/3 md:w-1/4 hover:bg-transparent"
        >
          <div class="relative bg-white border rounded">
            <div class="relative">
              <picture class="block bg-gray-200 border-b">
                <img
                  class="block"
                  :src="
                    item.ImageUrls && item.ImageUrls.length > 0
                      ? item.ImageUrls[0].Url
                      : defaultImageUrl
                  "
                  alt="Card"
                  loading="lazy"
                />
              </picture>
              <div
                class="absolute inset-0 transition-opacity duration-200 bg-black opacity-0 group-hover:opacity-50"
                @click="handleRouterChange(item)"
              ></div>
              <div
                class="absolute inset-0 items-center justify-center hidden opacity-0 group-hover:opacity-100 md:flex"
              >
                <div class="flex gap-5">
                  <IconsMagnifyingGlass
                    class="w-8 h-8 rounded-md bg-[#FFFCF2] shadow-sm text-[#403D39] p-0.5 cursor-pointer hover:text-[#FFFCF2] hover:bg-[#403D39] transition-colors duration-150"
                    @click="handleRouterChange(item)"
                  />
                  <CartModal :item="item" />
                </div>
              </div>
            </div>
            <div class="p-4 text-center">
              <h3 class="font-bold text link" @click="handleRouterChange(item)">
                {{ item.Name }}
              </h3>
              <span
                class="text text-sm text-[#252422] before:content-['NT$'] before:mr-1 before:text-[#252422] mb-4"
                >{{ item.UnitPrice }}</span
              >
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
