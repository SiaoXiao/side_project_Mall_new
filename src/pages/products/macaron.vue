<script setup>
import { callApi } from '@/utils/callApi'
import { apiPostGetGoodsList } from '@/api/api'
import defaultImageUrl from '@/assets/default/image.jpg'
import { useStore } from 'vuex'
import IconsMagnifyingGlass from '~icons/heroicons/magnifying-glass-20-solid'
import { errorNotify } from '@/composables/useNotification'
// import useCart from '@/composables/useCart'
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

// 取得馬卡龍列表
const getHotProductItems = async () => {
  state.goodsListSearch.GoodsType = 17
  const data = state.goodsListSearch
  try {
    await callApi(apiPostGetGoodsList, data, (res) => {
      state.goodsList = [...res.Data]
    })
  } catch (error) {
    errorNotify('馬卡龍列表取得失敗', error)
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
      馬卡龍
    </h2>

    <div
      class="grid w-full grid-cols-2 grid-rows-none gap-2 mt-5 md:grid-rows-4 lg:grid-rows-3 md:grid-cols-3 lg:grid-cols-4"
    >
      <template v-if="state.goodsList.length > 0">
        <div
          v-for="item in state.goodsList"
          :key="item.ID"
          class="cursor-pointer group hover:bg-transparent"
        >
          <div class="overflow-hidden bg-white border rounded-md shadow-lg">
            <div class="relative pb-[75%] border-b w-full">
              <picture class="absolute inset-0 block">
                <img
                  :src="
                    item.ImageUrls && item.ImageUrls.length > 0
                      ? item.ImageUrls[0].Url
                      : defaultImageUrl
                  "
                  alt="Card"
                  loading="lazy"
                  class="object-cover object-center w-full h-full"
                />
              </picture>
              <div
                class="absolute inset-0 transition-opacity duration-200 bg-black opacity-0 group-hover:opacity-50"
                @click="handleRouterChange(item)"
              ></div>
              <div
                class="absolute inset-0 items-center justify-center hidden opacity-0 group-hover:opacity-100 md:flex"
              >
                <IconsMagnifyingGlass
                  class="w-8 h-8 rounded-md bg-[#FFFCF2] shadow-sm text-[#403D39] p-0.5 cursor-pointer hover:text-[#FFFCF2] hover:bg-[#403D39] transition-colors duration-150"
                  @click="handleRouterChange(item)"
                />
              </div>
            </div>

            <div class="flex flex-col gap-2 px-2 py-3" @click="handleRouterChange(item)">
              <h3 class="h-12 font-bold text link">{{ item.Name }}</h3>
              <div class="flex items-center justify-between">
                <span
                  class="text text-sm text-[#252422] before:content-['NT$'] before:mr-1 before:text-[#252422]"
                  >{{ item.UnitPrice }}</span
                >

                <CartModal :item="item" />
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
