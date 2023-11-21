import { useStore } from 'vuex'
// import { useRouter } from 'vue-router'
import { warningNotify, errorNotify } from '@/composables/useNotification'
import { callApi } from '@/utils/callApi'
import { apiPostAddGoodsCart } from '@/api/api'
import useUser from '@/composables/useUser'

export default function useCart() {
  const store = useStore()
  // const router = useRouter()
  const state = reactive({
    cartForm: {
      GoodsID: null,
      Specs: []
    }
  })

  const { checkLoginStatus } = useUser()

  // 加入購物車的功能
  const addToCart = async (item, quantity = 1, Specs) => {
    // console.log("item", item);
    state.cartForm.GoodsID = item.ID
    // state.cartForm.Specs.push({
    //   SpecID: item.GoodsSpecs[0].ID,
    //   Num: quantity,
    // });
    // 檢查 Specs 是否存在，如果存在則使用 forEach 方法來迭代，否則使用預設值
    if (Specs) {
      Specs.forEach((spec) => {
        state.cartForm.Specs.push({
          SpecID: spec,
          Num: quantity
        })
      })
    } else {
      state.cartForm.Specs.push({
        SpecID: item.GoodsSpecs[0].ID,
        Num: quantity
      })
    }

    const data = state.cartForm

    // 執行加入購物車的 API 操作
    try {
      // 使用您的API函式進行加入購物車的操作，例如：
      await callApi(apiPostAddGoodsCart, data, (res) => {
        // console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaa", res);
      })
      // 更新 store 或 local state
      await store.dispatch('cartModules/updateCartItems')
      // store.commit("cart/addItem", item);
    } catch (error) {
      errorNotify('加入購物車失敗', error)
    }
  }

  // 直接购买的功能
  const buyNow = async (item, quantity = 1, Specs) => {
    if (!checkLoginStatus()) return
    // 执行购买操作的逻辑...

    if (!Specs || !Specs.length) {
      warningNotify('請選擇商品規格')
      return
    } else {
      if (Specs) {
        Specs.forEach((spec) => {
          state.cartForm.Specs.push({
            SpecID: spec,
            Num: quantity
          })
        })
      } else {
        state.cartForm.Specs.push({
          SpecID: item.GoodsSpecs[0].ID,
          Num: quantity
        })
      }
    }

    console.log(Specs)

    if (!quantity || quantity <= 0) {
      warningNotify('請選擇購買數量')
      return
    }

    state.cartForm.GoodsID = item.ID
    const data = state.cartForm

    // 執行加入購物車的 API 操作
    try {
      // 使用您的API函式進行加入購物車的操作，例如：
      await callApi(apiPostAddGoodsCart, data, (res) => {
        // console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaa", res);
      })
      // 更新 store 或 local state
      await store.dispatch('cartModules/updateCartItems')
      // store.commit("cart/addItem", item);
    } catch (error) {
      errorNotify('加入購物車失敗', error)
    }
  }

  return {
    addToCart,
    buyNow
  }
}
