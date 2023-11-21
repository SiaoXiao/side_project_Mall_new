<script setup>
import IconsLogo from '~icons/vscode-icons/file-type-htmlhint'
import IconsUser from '~icons/heroicons/user-20-solid'
import IconsShoppingCart from '~icons/heroicons/shopping-cart'
import IconsTrash from '~icons/heroicons/trash'
import { useStore } from 'vuex'
import { callApi } from '@/utils/callApi'
import { apiPostDeleteGoodsCart } from '@/api/api'
import { useConfirm } from '@/composables/useConfirmModal'
import useUser from '@/composables/useUser'
import { successNotify, errorNotify } from '@/composables/useNotification'

const { isLogin, logOut } = useUser()
const store = useStore()
const dataLoaded = ref(false) // 購物車按鈕渲染
const menuItems = reactive([
  { to: '/about', text: '關於WhyShop' },
  { to: '/products', text: '商品分類' },
  { to: '/user', text: '會員專區' },
  { to: '/questionsAns', text: '常見問題' },
  { to: '/foodData', text: 'WhyShop資料庫' }
])

const showMenu = ref(false)
let mql

const toggleMenu = () => (showMenu.value = !showMenu.value)

const userMenuIconRef = ref(null)
const isUserMenuOpen = ref(false)
// 顯示使用者選單
const handleShowUserMenu = () => {
  isUserMenuOpen.value = !isUserMenuOpen.value

  onClickOutside(userMenuIconRef, (event) => {
    if (!isUserMenuOpen.value) return
    isUserMenuOpen.value = !isUserMenuOpen.value
  })
}

const cartMenuIconRef = ref(null)
const isCartMenuOpen = ref(false)
// 顯示購物車選單
const handleShowCartMenu = () => {
  isCartMenuOpen.value = !isCartMenuOpen.value

  onClickOutside(cartMenuIconRef, (event) => {
    if (!isCartMenuOpen.value) return
    isCartMenuOpen.value = !isCartMenuOpen.value
  })
}

// 選單判斷開關
const handleScreenChange = () => {
  if (mql.matches) {
    showMenu.value = false
  }
}

// 刪除收藏
const deleteLikeList = async (id) => {
  const data = { ID: id }
  try {
    await callApi(apiPostDeleteGoodsCart, data, async (res) => {
      successNotify('購物車商品刪除成功')
      await store.dispatch('cartModules/updateCartItems')
    })
  } catch (error) {
    errorNotify('收藏商品刪除失敗', error)
  }
}

// 刪除
const handleDelete = (id) => {
  useConfirm(`確定要刪除商品?`).then((result) => {
    if (result) {
      deleteLikeList(id)
    }
  })
}

// 初始化
onMounted(async () => {
  mql = window.matchMedia('(min-width: 1024px)')
  mql.addEventListener('change', handleScreenChange)
  handleScreenChange()

  try {
    await store.dispatch('memberModules/checkMemberStatus')
    await store.dispatch('cartModules/updateCartItems')
  } catch (error) {
  } finally {
    dataLoaded.value = true
  }
})

// 移除監聽
onUnmounted(() => {
  mql.removeEventListener('change', handleScreenChange)
})

const cartCount = computed(() => store.state.cartModules.cartStatus.goodsList)
</script>

<template>
  <!-- 選單 -->
  <header
    class="relative z-20 h-[56px] box-border flex items-center justify-between px-3 py-2 bg-[#FFE8D6]"
  >
    <!-- Logo -->
    <div class="h-full w-[150px]">
      <RouterLink to="/" class="flex items-center">
        <IconsLogo class="w-10 h-10 mr-2" />
        <span class="text-xl font-medium tracking-wider text-[#252422]">WhyShop</span>
      </RouterLink>
    </div>

    <!-- 主要選單 -->
    <div class="flex">
      <ul class="items-center hidden gap-6 mr-10 lg:flex">
        <li
          v-for="item in menuItems"
          :key="item.text"
          class="px-2 py-1 text-base tracking-wide cursor-pointer whitespace-nowrap link"
        >
          <RouterLink :to="item.to" class="link">
            {{ item.text }}
          </RouterLink>
        </li>
      </ul>
      <!-- 會員資訊 -->
      <div class="relative flex gap-3">
        <RouterLink
          v-if="!isLogin"
          to="/user"
          class="hidden lg:flex lg:items-center lg:justify-center"
          @click="handleShowUserMenu"
        >
          <IconsUser
            class="w-8 h-8 border-2 border-[#6B705C] rounded-full cursor-pointer link hover:border-[#B7B7A4]"
          />
        </RouterLink>
        <IconsUser
          v-else
          class="hidden lg:flex w-8 h-8 border-2 border-[#6B705C] rounded-full cursor-pointer link hover:border-[#B7B7A4]"
          @click="handleShowUserMenu"
        />

        <div class="relative" @click="handleShowCartMenu">
          <IconsShoppingCart class="w-8 h-8 cursor-pointer link" />
          <span
            class="absolute select-none flex items-center text-white justify-center w-5 h-5 text-xs font-bold bg-[#CCC5B9] rounded-full -right-1/4 -top-1/4"
            >{{ cartCount.length }}</span
          >
        </div>
        <!-- 漢堡選單 -->
        <button
          class="flex items-center justify-center w-9 h-9 lg:hidden"
          @click.prevent="toggleMenu"
        >
          <MenuIcon class="w-8 h-8" :isOpen="showMenu" />
        </button>

        <!-- 會員專區 -->
        <transition
          enter-active-class="transition duration-100 ease-out origin-top-right"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-out"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <template v-if="isLogin">
            <div
              v-if="isUserMenuOpen"
              ref="userMenuIconRef"
              class="absolute flex flex-col items-center justify-center gap-4 px-6 py-3 rounded-md shadow-md -left-full bg-[#CB997E] text text-white text-center top-[110%] right-2/3 whitespace-nowrap"
            >
              <RouterLink to="/user" class="hover:text-[#403D39]"> 會員專區 </RouterLink>
              <span class="cursor-pointer hover:text-[#403D39]" @click="logOut">登出</span>
            </div>
          </template>
        </transition>

        <!-- 購物車 -->
        <transition
          enter-active-class="transition duration-100 ease-out origin-top-right"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-out"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <div
            v-if="isCartMenuOpen"
            ref="cartMenuIconRef"
            class="absolute w-[300px] z-20 p-3 rounded-md shadow-md right-0 bg-white border-2 border-[#B7B7A4] top-[110%]"
          >
            <template v-if="cartCount.length !== 0">
              <div class="flex flex-col gap-2 overflow-y-auto max-h-[250px]">
                <div v-for="item in cartCount" :key="item.ID" class="flex w-full gap-2">
                  <img :src="item.ImageUrls" alt="" class="w-12" />
                  <div class="flex items-center justify-between w-full">
                    <div class="flex flex-col items-start text">
                      <p class="text-sm truncate w-[150px] text-left">
                        {{ item.Goods.Name }}
                      </p>
                      <span class="text-xs">商品數量：1</span>
                    </div>
                    <button
                      class="text hover:text-red-500 whitespace-nowrap"
                      @click="handleDelete(item.ID)"
                    >
                      <IconsTrash class="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </template>

            <div v-else class="text-center text">您的購物車是空的</div>

            <div v-if="dataLoaded" class="mt-2 text-center text">
              <RouterLink v-if="isLogin && cartCount.length > 0" to="/cart" class="link">
                立即結帳
              </RouterLink>
              <RouterLink v-else to="/products" class="link"> 馬上選購 </RouterLink>
            </div>
          </div>
        </transition>
      </div>
    </div>

    <!-- 手機板選單 -->
    <transition
      enter-active-class="transition duration-500 ease-out origin-top-bottom"
      enter-from-class="transform opacity-0 "
      enter-to-class="transform opacity-100 "
      leave-active-class="transition duration-500 ease-out"
      leave-from-class="transform opacity-100"
      leave-to-class="transform opacity-0"
    >
      <div
        v-show="showMenu"
        ref="mobileMenuRef"
        class="z-10 absolute inset-0 bg-[#FFE8D6] border-t-2 border-[#CB997E] top-full h-[200vh]"
      >
        <ul class="py-3 space-y-6 text-center">
          <li
            v-for="item in menuItems"
            :key="item.text"
            class="px-2 py-1 text-base tracking-wide cursor-pointer whitespace-nowrap link"
          >
            <RouterLink :to="item.to" class="link">
              {{ item.text }}
            </RouterLink>
          </li>
          <div v-if="isLogin" class="mt-2 border-t-2 border-[#DDBEA9]">
            <div class="inline-flex mt-2">
              <span class="px-4 py-2 link" @click="logOut">登出</span>
            </div>
          </div>
        </ul>
      </div>
    </transition>
  </header>
</template>
