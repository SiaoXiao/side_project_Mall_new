<template>
  <IconsShopping
    class="w-8 h-8 rounded-md bg-[#FFFCF2] shadow-sm text-[#403D39] p-0.5 cursor-pointer hover:text-[#FFFCF2] hover:bg-[#403D39] transition-colors duration-150"
    @click="handleOpenModal"
  />

  <Modal v-model="showCartModal">
    <template #title>
      <div class="flex items-center justify-end">
        <IconX
          class="w-5 h-5 cursor-pointer hover:text-[#CCC5B9] transition-colors duration-150"
          @click="handleCloseModal"
        />
      </div>
    </template>
    <template #content>
      <div class="mt-6">
        <div class="flex flex-col md:flex-row">
          <div class="w-full md:w-1/2">
            <img
              :src="
                item.ImageUrls && item.ImageUrls.length > 0
                  ? item.ImageUrls[0].Url
                  : defaultImageUrl
              "
              alt=""
              class="block object-cover w-full h-full"
            />
          </div>
          <div class="flex flex-col justify-between w-full px-5 md:w-1/2">
            <div class="flex items-center justify-between">
              <h2 class="text font-bold text-[#252422]">{{ item.Name }}</h2>
            </div>
            <div class="flex flex-col w-full gap-1 mt-3">
              <div class="flex flex-col">
                <span class="font-medium text">選擇商品規格：</span>
                <span class="text-sm text"
                  >可選擇 {{ item.GoodsSpecs.length }} 種，已選 {{ selectedSpecs.length }} 種</span
                >
              </div>
              <div class="flex flex-wrap gap-3 mt-1">
                <label v-for="(tag, i) in item.GoodsSpecs" :key="i">
                  <input
                    v-model="selectedSpecs"
                    class="sr-only peer"
                    :name="tag.ID"
                    type="checkbox"
                    :value="tag.ID"
                  />
                  <div
                    class="flex items-center justify-center border rounded-lg px-3 py-1 text peer-checked:font-semibold peer-checked:bg-[#CB997E] peer-checked:text-white"
                  >
                    {{ tag.Specs }}
                  </div>
                </label>
              </div>
            </div>
            <div class="flex flex-col w-full gap-1 mt-3">
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
            <div class="flex flex-col w-full gap-1 mt-3">
              <span class="font-medium text">建議售價：</span>
              <p class="text before:content-['NT$'] before:mr-1">
                {{ item.UnitPrice }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <div
        class="relative flex items-center justify-center gap-4 after:absolute after:content after:h-[1px] after:w-full after:bg-text-secondary after:-top-4"
      >
        <PrimaryButton @click="handleAddToCart">加入購物車</PrimaryButton>
      </div>
    </template>
  </Modal>
</template>
<script setup>
import Modal from '@/components/Modal.vue'
import IconsShopping from '~icons/heroicons/shopping-bag-20-solid'
import IconX from '~icons/heroicons-outline/x-mark'
import useCart from '@/composables/useCart'
const { buyNow } = useCart()
const props = defineProps({
  item: Object
})

const showCartModal = ref(false)

// 選擇規格
const selectedSpecs = ref([])

// 開啟購物車彈窗
const handleOpenModal = () => {
  showCartModal.value = !showCartModal.value
  console.log('open')
}

// 關閉購物車彈窗
const handleCloseModal = () => {
  showCartModal.value = !showCartModal.value
}

// 加入購物車
const handleAddToCart = async () => {
  await buyNow(props.item, quantity.value, selectedSpecs.value)
  handleCloseModal()
}

// 購買數量
const quantity = ref(1)

const decrease = () => {
  if (quantity.value > 0) {
    quantity.value -= 1
  }
}

const increase = () => {
  quantity.value += 1
}
</script>
