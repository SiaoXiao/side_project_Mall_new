<script setup>
import { useStore } from 'vuex'
import { callApi } from '@/utils/callApi'
import { apiPostGetGoodsList } from '@/api/api'
import { errorNotify } from '@/composables/useNotification'

const store = useStore()
const data = reactive({
  goodsList: []
})

// 取主視覺圖
const images = import.meta.globEager('../assets/kv/*.png')
const bannerImages = Object.values(images).map((img) => img.default)
const imagesRef = ref(bannerImages)

// 取得熱銷排行產品
const getHotProductItems = async () => {
  try {
    await callApi(apiPostGetGoodsList, {}, (res) => {
      data.goodsList = [...res.Data]
      store.commit('goodsModules/SET_GOOD_STATUS', res.Data)
    })
  } catch (error) {
    errorNotify('取得熱銷排行失敗', error)
  }
}

// 初始化
onMounted(async () => {
  await getHotProductItems()
})
</script>

<template>
  <Layout>
    <div class="max-w-[1280px] m-auto px-3 py-2">
      <BannerSlider :images="imagesRef" class="mt-[44px]" />
      <HotProductCard :products="data.goodsList" class="mt-20" />
      <QuickTour class="my-20" />
    </div>
  </Layout>
</template>
