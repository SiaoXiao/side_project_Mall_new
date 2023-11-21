<script setup>
import Modal from '@/components/Modal.vue'
import IconX from '~icons/heroicons-outline/x-mark'

const emit = defineEmits(['update-selected-discount'])
defineProps({
  discountList: {
    type: Array,
    default: () => []
  }
})

const selectedDiscount = ref([])
const showDiscountModal = ref(false)

// 開關優惠卷彈窗
const handleOpenCloseDiscountModal = async () => {
  showDiscountModal.value = !showDiscountModal.value
}

// 選擇優惠券
const handleSubmit = () => {
  showDiscountModal.value = !showDiscountModal.value
  if (selectedDiscount.value.length === 0) {
    selectedDiscount.value[0] = 0
  }
  emit('update-selected-discount', selectedDiscount.value)
}
</script>

<template>
  <span class="underline cursor-pointer text" @click="handleOpenCloseDiscountModal"
    >使用優惠券</span
  >

  <Modal v-model="showDiscountModal">
    <template #title>
      <div class="flex items-center justify-between">
        <span class="text-xl titleText">優惠券</span>
        <IconX
          class="w-5 h-5 cursor-pointer hover:text-[#CCC5B9] transition-colors duration-150"
          @click="handleOpenCloseDiscountModal"
        />
      </div>
    </template>
    <template #content>
      <div class="flex flex-wrap w-full mt-6 overflow-y-auto max-h-[250px]">
        <template v-if="discountList.length > 0">
          <div v-for="item in discountList" :key="item.ID" class="w-1/2 p-2">
            <input
              :id="item.ID"
              type="checkbox"
              :value="item.ID"
              class="hidden"
              v-model="selectedDiscount"
            />
            <label :for="item.ID">
              <div
                class="relative p-2 transition-colors duration-150 border-2 rounded cursor-pointer group"
                :class="[
                  selectedDiscount.includes(item.ID)
                    ? 'bg-[#DDBEA9]'
                    : 'bg-white hover:bg-[#DDBEA9]'
                ]"
              >
                <h3
                  class="titleText text-center text-xl before:content-['NT$'] before:mr-1 mb-2"
                  :class="[
                    selectedDiscount.includes(item.ID) ? 'text-white' : 'group-hover:text-white'
                  ]"
                >
                  {{ item.Amount }}
                </h3>
                <p class="text-sm text">單筆消費滿1000元即可使用一張</p>
                <p class="text-sm text">使用日期：2022/12/31</p>
              </div>
            </label>
          </div>
        </template>
      </div>
    </template>

    <template #footer>
      <div class="flex items-center justify-center gap-4">
        <SecondaryButton class="w-full" @click="handleOpenCloseDiscountModal">
          取消
        </SecondaryButton>
        <PrimaryButton class="w-full" @click="handleSubmit"> 確定 </PrimaryButton>
      </div>
    </template>
  </Modal>
</template>
