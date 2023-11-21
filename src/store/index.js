import { createStore } from 'vuex'
import recordModules from './modules/record'
import memberModules from './modules/member'
import goodsModules from './modules/goods'
import cartModules from './modules/cartStatus'

const store = createStore({
  state: {
    isLoggedIn: false
  },
  mutations: {
    SET_LOGIN_STATUS(state, status) {
      state.isLoggedIn = status
    },

    RESET_LOGIN_STATUS(state, status) {
      state.isLoggedIn = status
      localStorage.removeItem('memberInfo')
      localStorage.removeItem('goodsInfo')
      localStorage.removeItem('goodsDetailID')
      localStorage.removeItem('cartInfo')
      localStorage.removeItem('cartTotal')
    }
  },
  getters: {
    isLoggedIn: (state) => state.isLoggedIn
  },

  modules: {
    recordModules,
    memberModules,
    goodsModules,
    cartModules
  }
})

export default store
