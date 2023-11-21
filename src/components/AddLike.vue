<script setup>
import IconsHeart from '~icons/heroicons/heart'
import { callApi } from '@/utils/callApi'
import { apiPostAddLikeList } from '@/api/api'
import { successNotify, errorNotify } from '@/composables/useNotification'

import useUser from '@/composables/useUser.js'

const { checkLoginStatus } = useUser()

const props = defineProps({
  item: {
    type: [Object, String]
  }
})

// 新增收藏
const handleAddLikeList = async () => {
  if (!checkLoginStatus()) return

  const data = { GoodsID: props.item.ID }

  try {
    await callApi(apiPostAddLikeList, data, (res) => {
      successNotify('新增收藏商品成功')
    })
  } catch (error) {
    errorNotify('新增收藏商品失敗', error)
  }
}
</script>

<template>
  <IconsHeart
    class="w-8 h-8 rounded-md bg-[#FFFCF2] shadow-sm text-[#403D39] p-0.5 cursor-pointer hover:text-[#FFFCF2] hover:bg-[#403D39] transition-colors duration-150"
    @click="handleAddLikeList(item)"
  />
</template>
