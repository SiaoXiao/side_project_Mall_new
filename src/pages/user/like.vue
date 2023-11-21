<script setup>
import { callApi } from '@/utils/callApi'
import { apiGatAllLikeList, apiPostDeleteLikeList } from '@/api/api'
import IconsTrash from '~icons/heroicons/trash'
import { useConfirm } from '@/composables/useConfirmModal'
import { successNotify, errorNotify } from '@/composables/useNotification'
import defaultImageUrl from '../../assets/default/macaron.jpg'

const likeData = ref([])

// 取得收藏列表
const getAllLikeList = async () => {
  try {
    await callApi(apiGatAllLikeList, '', (res) => {
      likeData.value = [...res.Data]
    })
  } catch (error) {
    errorNotify('收藏商品取得失敗', error)
  }
}

// 刪除收藏
const deleteLikeList = async (id) => {
  const data = { GoodsID: id }
  try {
    await callApi(apiPostDeleteLikeList, data, async () => {
      successNotify('收藏商品刪除成功')
      await getAllLikeList()
    })
  } catch (error) {
    errorNotify('收藏商品刪除失敗', error)
  }
}

// 刪除
const handleDelete = (item) => {
  useConfirm(`確定要刪除${item.Goods.Name}嗎?`).then((result) => {
    if (result) {
      deleteLikeList(item.GoodsID)
    }
  })
}

// 初始化
onMounted(async () => {
  await getAllLikeList()
})
</script>

<template>
  <div class="p-0 overflow-hidden md:p-8 lg:p-12">
    <h2
      class="titleText text-2xl relative pl-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:top-0 after:border-2 after:border-[#DDBEA9]"
    >
      收藏清單
    </h2>
    <div
      v-if="likeData.length === 0"
      class="mt-5 flex flex-col gap-3 items-center justify-center w-full h-full min-h-[200px] text text text-xl"
    >
      還沒有收藏的商品，趕快去選購吧
      <RouterLink to="/products" class="px-3 py-1 rounded-md link bg-[#FFE8D6]"> GO </RouterLink>
    </div>
    <div v-else class="relative h-[calc(100vh-5rem)] mt-5">
      <div class="absolute top-0 bottom-0 w-full space-y-6 overflow-y-auto">
        <div
          v-for="item in likeData"
          :key="item.ID"
          class="flex border border-[#DDBEA9] p-3 rounded"
        >
          <img :src="defaultImageUrl" alt="" class="h-[150px] max-w-[250px] object-cover flex-1" />
          <div
            class="flex flex-col items-center justify-center flex-1 px-5 md:justify-end md:flex-row"
          >
            <div class="mb-3 md:mr-5 md:mb-0">
              <h4 class="mb-1 text-xl titleText">{{ item.Goods.Name }}</h4>
              <p
                class="titleText text-xl text-red-500 before:content-['NT$'] before:mr-1 before:text-[#252422]"
              >
                {{ item.Goods.UnitPrice }}
              </p>
            </div>

            <button
              class="text px-3 py-1 hover:text-red-500 border border-[#6B705C] rounded-md hover:border-red-500 flex flex-row md:flex-col items-center whitespace-nowrap"
              @click="handleDelete(item)"
            >
              <IconsTrash class="w-5 h-5 md:w-8 md:h-8" />
              刪除
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
