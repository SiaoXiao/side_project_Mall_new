import { callApi } from '@/utils/callApi'
import { apiGatGoodsCart } from '@/api/api'

export default {
  namespaced: true,
  state: {
    cartStatus: {
      payment: '',
      delivery: '',
      recipient: '',
      phone: '',
      addr: '',
      total: '',
      mark: '',
      discount: null,
      goodsList: []
    }
  },

  mutations: {
    SET_CART_ITEMS(state, goodsList) {
      state.cartStatus.goodsList = goodsList
    },

    SET_CART_INFO(state, payload) {
      state.cartStatus.payment = payload.PaymentMethod
      state.cartStatus.delivery = payload.DeliveryMethod
      state.cartStatus.recipient = payload.Recipient
      state.cartStatus.phone = payload.Phone
      state.cartStatus.addr = payload.Addr
      state.cartStatus.mark = payload.OrderMark
      localStorage.setItem(
        'cartInfo',
        JSON.stringify({
          payment: payload.PaymentMethod,
          delivery: payload.DeliveryMethod,
          recipient: payload.Recipient,
          phone: payload.Phone,
          addr: payload.Addr,
          mark: payload.OrderMark
        })
      )
    },

    UPDATE_CART_PAYMENT(state, payload) {
      console.log(payload)
      state.cartStatus.payment = payload.paymentValue
      state.cartStatus.delivery = payload.deliveryValue

      if (payload.discountID) {
        state.cartStatus.discount = payload.discountID
      } else {
        state.cartStatus.discount = null
      }

      const localStorageData = {
        payment: payload.paymentValue,
        delivery: payload.deliveryValue
      }

      if (payload.discountID) {
        localStorageData.discount = payload.discountID
      }

      localStorage.setItem('cartInfo', JSON.stringify(localStorageData))
    },
    UPDATE_CART_TOTAL(state, payload) {
      state.cartStatus.total = payload
      localStorage.setItem('cartTotal', JSON.stringify({ total: payload }))
    }
  },

  actions: {
    updateGoods({ commit }, goods) {
      commit('setGoods', goods)
    },

    async updateCartItems({ commit, rootGetters }) {
      const memberStorage = JSON.parse(localStorage.getItem('memberInfo'))
      const isLoggedIn = rootGetters.isLoggedIn

      if (memberStorage && isLoggedIn) {
        const data = ''
        // try {
        await callApi(apiGatGoodsCart, data, async (res) => {
          console.log('cart res=> ', res)
          if (res.Data.length > 0) {
            res.Data.forEach((item) => {
              item.ImageUrls = `${import.meta.env.VITE_SERVER_TARGET}/imgs/${item.ImageUrls[0].Url}`
              item.total = item.TimestampPice * item.Specs[0].Num
            })
          }
          commit('SET_CART_ITEMS', res.Data)
        })
        // } catch (error) {
        //   throw error
        // }
      }
    }
  },

  getters: {
    goodsList: (state) => state.cartStatus.goodsList,

    cartStatus(state) {
      if (localStorage.getItem('cartInfo') !== null) {
        state.cartStatus.payment = JSON.parse(localStorage.getItem('cartInfo')).payment
        state.cartStatus.delivery = JSON.parse(localStorage.getItem('cartInfo')).delivery
        state.cartStatus.discount = JSON.parse(localStorage.getItem('cartInfo')).discount
        state.cartStatus.recipient = JSON.parse(localStorage.getItem('cartInfo')).recipient
        state.cartStatus.phone = JSON.parse(localStorage.getItem('cartInfo')).phone
        state.cartStatus.addr = JSON.parse(localStorage.getItem('cartInfo')).addr
      }
      return state.cartStatus
    },
    cartTotal(state) {
      if (localStorage.getItem('cartTotal').total !== '') {
        state.cartStatus.total = JSON.parse(localStorage.getItem('cartTotal')).total
      }
      return state.cartStatus.total
    }
  }
}
