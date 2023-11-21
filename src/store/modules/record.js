export default {
  namespaced: true,
  state: {
    recordData: null
  },
  mutations: {
    setRecordData(state, recordData) {
      state.recordData = recordData
    }
  },
  actions: {
    updateRecordData({ commit }, recordData) {
      commit('setRecordData', recordData)
    }
  }
}
