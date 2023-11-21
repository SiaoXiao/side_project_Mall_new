export default {
  namespaced: true,
  state: {
    goods: [],
    currentGoodsID: null
  },

  mutations: {
    SET_GOOD_STATUS(state, payload) {
      state.goods = [...payload]
      localStorage.setItem('goodsInfo', JSON.stringify([...payload]))
    },

    SET_GOODS_DETAIL_ID(state, payload) {
      state.currentGoodsID = payload
      localStorage.setItem('goodsDetailID', JSON.stringify(payload))
    }
  },

  actions: {
    updateGoods({ commit }, goods) {
      commit('SET_GOOD_STATUS', goods)
    }
  }
}
