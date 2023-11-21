<script setup>
import IconExclamation from '~icons/heroicons-outline/exclamation-circle'
import { useStore } from 'vuex'

const store = useStore()
const recipientForm = reactive({
  recipient: store.getters['cartModules/cartStatus'].recipient,
  phone: store.getters['cartModules/cartStatus'].phone,
  addr: store.getters['cartModules/cartStatus'].addr,
  payment: store.getters['cartModules/cartStatus'].payment,
  delivery: store.getters['cartModules/cartStatus'].delivery,
  total: store.getters['cartModules/cartTotal']
})

const menuItems = reactive([
  { to: '/products', text: '繼續購物' },
  { to: '/', text: '聯絡客服' },
  { to: '/user/order', text: '查詢訂單' }
])

onBeforeMount(() => {
  localStorage.removeItem('cartInfo')
  localStorage.removeItem('cartTotal')
})
</script>

<template>
  <main class="mb-10">
    <ShoppingFlowChart />

    <div class="flex flex-col w-full gap-5 mt-5 sm:flex-row min-h-[calc(100vh-5rem)]">
      <div class="w-full space-y-5 pb-9">
        <div class="w-full border border-[#DDBEA9]">
          <div class="bg-[#FFE8D6] px-2 py-1 text-center">
            <h3 class="text-xl titleText">感謝您的訂購!</h3>
            <RouterLink to="/user/order" class="inline-block mt-1 link">查看明細</RouterLink>
          </div>
          <div class="flex flex-col gap-3 px-4 py-2">
            <div class="flex items-center justify-between">
              <span class="font-medium text">取件人姓名：</span>
              <p class="text">{{ recipientForm.recipient }}</p>
            </div>
            <div class="flex items-center justify-between">
              <span class="font-medium text">取件人電話：</span>
              <p class="text">{{ recipientForm.phone }}</p>
            </div>
            <div class="flex items-center justify-between">
              <span class="font-medium text">取貨方式：</span>
              <p class="text">{{ recipientForm.delivery }}</p>
            </div>
            <div class="flex items-center justify-between">
              <span class="font-medium text">付款方式：</span>
              <p class="text">{{ recipientForm.payment }}</p>
            </div>
            <div class="flex items-center justify-between">
              <span class="font-medium text">收件地址：</span>
              <p class="text">{{ recipientForm.addr }}</p>
            </div>
            <div
              class="flex items-center pt-3 justify-between relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:border before:border-[#DDBEA9]"
            >
              <span class="font-medium text">合計：</span>
              <p class="text">{{ recipientForm.total }}</p>
            </div>
          </div>
          <div class="flex flex-col items-center justify-center gap-1 px-2 py-5">
            <IconExclamation class="w-6 h-6 text-red-500" />
            <span class="text-sm text-red-500 text"
              >請在時間內至指定門市取貨。若逾期未取將列為黑名單，影響您在本商店訂購的權利！</span
            >
          </div>
        </div>

        <div class="w-full border border-[#DDBEA9]">
          <ul class="w-full p-3">
            <li v-for="(item, i) in menuItems" :key="i" class="p-3 pb-2 before:border-b-0 menuLink">
              <RouterLink :to="item.to" class="block">
                {{ item.text }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>
