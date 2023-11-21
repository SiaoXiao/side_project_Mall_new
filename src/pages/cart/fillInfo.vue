<script setup>
import { callApi } from '@/utils/callApi'
import { apiPostSubmitGoodsCart } from '@/api/api'
import { useStore } from 'vuex'
import { useConfirm } from '@/composables/useConfirmModal'
import { warningNotify, errorNotify } from '@/composables/useNotification'

const reload = inject('reload')
const router = useRouter()
const store = useStore()
const purchaserChecked = ref(false)
const recipientChecked = ref(false)
const state = reactive({
  memberForm: {
    Name: '',
    Phone: '',
    Email: '',
    Address: ''
  },
  recipientForm: {
    Discounts: store.getters['cartModules/cartStatus'].discount
      ? [store.getters['cartModules/cartStatus'].discount]
      : null,
    Recipient: '',
    Phone: '',
    Addr: '',
    OrderRemark: '',
    Email: '',
    PaymentMethod: store.getters['cartModules/cartStatus'].payment,
    DeliveryMethod: store.getters['cartModules/cartStatus'].delivery
  },
  date: null,
  orderTotal: store.getters['cartModules/cartTotal']
})

// 購買人資料與會員資料相同
const purChecked = () => {
  if (purchaserChecked.value === true) {
    const goodsInfo = JSON.parse(localStorage.getItem('memberInfo'))

    state.memberForm.Name = goodsInfo.username
    state.memberForm.Phone = goodsInfo.phone
    state.memberForm.Email = goodsInfo.email
    state.memberForm.Address = goodsInfo.address
  }
}

// 收件人資料與購買者相同
const recChecked = () => {
  if (recipientChecked.value === true) {
    state.recipientForm.Addr = state.memberForm.Address
    state.recipientForm.Recipient = state.memberForm.Name
    state.recipientForm.Phone = state.memberForm.Phone
    state.recipientForm.Email = state.memberForm.Email
  }
}

// 確認欄位是否有填寫
const checkFormCompletion = () => {
  // 使用 Object.values 和 Array.every 來檢查所有欄位是否已填寫
  const isMemberFormComplete = Object.values(state.memberForm).every((value) => value !== '')
  const isRecipientFormComplete = Object.values(state.recipientForm).every((value) => value !== '')

  // 如果任何表單不完整，則返回 false
  if (!isMemberFormComplete || !isRecipientFormComplete) {
    return false
  }

  // 如果所有表單都完整，則返回 true
  return true
}

// 前往結帳
const confirmAndCheckout = () => {
  if (!checkFormCompletion()) {
    warningNotify('請填寫所有的欄位')
  } else {
    useConfirm(`確定要送出訂單嗎?`).then((result) => {
      if (result) {
        submitOrder()
      }
    })
  }
}

// 訂單提交
const submitOrder = async () => {
  const data = state.recipientForm

  try {
    await callApi(apiPostSubmitGoodsCart, data, () => {
      store.commit('cartModules/SET_CART_INFO', state.recipientForm)
      reload()
      router.push('/cart/finish')
    })
  } catch (error) {
    errorNotify('訂單提交失敗', error)
  }
}
</script>

<template>
  <main class="mb-10">
    <ShoppingFlowChart />

    <div class="relative min-h-[calc(100vh-5rem)] mt-5">
      <div class="flex flex-col w-full gap-5 mt-5 sm:flex-row">
        <div class="w-full space-y-5 pb-9">
          <div class="w-full border border-[#DDBEA9] pb-9">
            <h3 class="text-xl titleText bg-[#FFE8D6] px-2 py-1">購買人資訊</h3>
            <div class="flex items-center w-full gap-2 px-4 py-1">
              <input
                type="checkbox"
                name="sameAsMemberInfo"
                id="sameAsMemberInfo"
                class="w-4 h-4"
                v-model="purchaserChecked"
                @change="purChecked"
              />
              <label for="sameAsMemberInfo" class="text">購買人資料與會員資料相同</label>
            </div>
            <div class="flex flex-col w-full gap-1 px-4 py-1">
              <label class="flex items-center w-full text md:w-1/5">姓名</label>
              <input
                type="text"
                name="name"
                v-model="state.memberForm.Name"
                class="w-full py-1 px-2 bg-transparent border-2 rounded-md border-[#DDBEA9] text-base tracking-wide text-[#323232] focus:ring-0 focus:outline-none"
              />
            </div>
            <div class="flex flex-col w-full gap-1 px-4 py-1">
              <label class="flex items-center w-full text md:w-1/5">電話號碼</label>
              <input
                type="tel"
                name="phone"
                v-model="state.memberForm.Phone"
                class="w-full py-1 px-2 bg-transparent border-2 rounded-md border-[#DDBEA9] text-base tracking-wide text-[#323232] focus:ring-0 focus:outline-none"
              />
            </div>
            <div class="flex flex-col w-full gap-1 px-4 py-1">
              <label class="flex items-center w-full text md:w-1/5">電子信箱</label>
              <input
                type="email"
                name="email"
                v-model="state.memberForm.Email"
                class="w-full py-1 px-2 bg-transparent border-2 rounded-md border-[#DDBEA9] text-base tracking-wide text-[#323232] focus:ring-0 focus:outline-none"
              />
            </div>
            <div class="flex flex-col w-full gap-1 px-4 py-1">
              <label class="flex items-center w-full text md:w-1/5">收件地址</label>
              <input
                type="text"
                name="address"
                v-model="state.memberForm.Address"
                class="w-full py-1 px-2 bg-transparent border-2 rounded-md border-[#DDBEA9] text-base tracking-wide text-[#323232] focus:ring-0 focus:outline-none"
              />
            </div>
          </div>

          <div class="w-full border border-[#DDBEA9] pb-9">
            <h3 class="text-xl titleText bg-[#FFE8D6] px-2 py-1">備註</h3>
            <div class="w-full p-3">
              <textarea
                rows="5"
                cols="30"
                v-model="state.recipientForm.OrderRemark"
                class="w-full p-1 border-2 border-[#FFE8D6] rounded-md focus:ring-0 focus:outline-[#CB997E] resize-none"
                placeholder="有任何額外需求請打在此處"
              ></textarea>
            </div>
          </div>
        </div>

        <div class="w-full border border-[#DDBEA9] pb-9">
          <h3 class="text-xl titleText bg-[#FFE8D6] px-2 py-1">送貨資訊</h3>
          <div class="flex items-center w-full gap-2 px-4 py-1">
            <input
              type="checkbox"
              name="sameAsBuyerInfo"
              id="sameAsBuyerInfo"
              v-model="recipientChecked"
              class="w-4 h-4"
              @change="recChecked"
            />
            <label for="sameAsBuyerInfo" class="text">收件人資料與購買人相同</label>
          </div>
          <div class="flex flex-col w-full gap-1 px-4 py-1">
            <label class="flex items-center w-full text md:w-1/5">收件人姓名</label>
            <input
              type="text"
              name="recipientName"
              v-model="state.recipientForm.Recipient"
              class="w-full py-1 px-2 bg-transparent border-2 rounded-md border-[#DDBEA9] text-base tracking-wide text-[#323232] focus:ring-0 focus:outline-none"
            />
          </div>
          <div class="flex flex-col w-full gap-1 px-4 py-1">
            <label class="flex items-center w-full text md:w-1/5">聯絡電話</label>
            <input
              type="tel"
              name="recipientPhone"
              v-model="state.recipientForm.Phone"
              class="w-full py-1 px-2 bg-transparent border-2 rounded-md border-[#DDBEA9] text-base tracking-wide text-[#323232] focus:ring-0 focus:outline-none"
            />
          </div>
          <div class="flex flex-col w-full gap-1 px-4 py-1">
            <label class="flex items-center w-full text md:w-1/5">電子信箱</label>
            <input
              type="email"
              name="recipientEmail"
              v-model="state.recipientForm.Email"
              class="w-full py-1 px-2 bg-transparent border-2 rounded-md border-[#DDBEA9] text-base tracking-wide text-[#323232] focus:ring-0 focus:outline-none"
            />
          </div>
          <div class="flex flex-col w-full gap-1 px-4 py-1 mb-5">
            <label class="flex items-center w-full text md:w-1/5">收件地址</label>
            <input
              type="text"
              name="recipientAddress"
              v-model="state.recipientForm.Addr"
              class="w-full py-1 px-2 bg-transparent border-2 rounded-md border-[#DDBEA9] text-base tracking-wide text-[#323232] focus:ring-0 focus:outline-none"
            />
          </div>
          <div class="w-full px-4 py-1">
            <div
              class="py-1 pt-3 relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:border before:border-[#DDBEA9]"
            >
              <span class="text">寄出時間/自取時間</span>
              <ul class="pl-5 text-sm text-red-500 list-disc text">
                <li>請謹慎選擇日期，若要更改需加收150元人工費</li>
                <li>出貨後2天內會到貨，時間會依照物流人員當天狀況而決定</li>
                <li>重大國定假日/年節/中秋或天災 (颱風/地震）有可能延遲到貨 (4天內到達)</li>
                <li>自取請在備註填寫自取時間</li>
              </ul>
            </div>
            <div class="py-1">
              <span class="text">選擇日期</span>
              <input
                type="date"
                name="recipientDate"
                v-model="state.date"
                class="w-full py-1 px-2 bg-transparent border-2 rounded-md border-[#DDBEA9] text-base tracking-wide text-[#323232] focus:ring-0 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-end w-full mt-5">
        <PrimaryButton class="w-full sm:w-1/5" @click="confirmAndCheckout">提交訂單</PrimaryButton>
      </div>
    </div>
  </main>
</template>
