import { callApi } from '@/utils/callApi'
import { apiPostLogin } from '@/api/api'

export default {
  namespaced: true,
  state: {
    memberInfo: {
      id: null,
      account: '',
      username: '',
      email: '',
      phone: '',
      address: ''
    },
    authData: {
      token: ''
    },

    memberStatus: {
      id: null,
      account: '',
      username: '',
      email: '',
      phone: ''
    }
  },

  mutations: {
    SET_MEMBER_INFO(state, payload) {
      console.log('vuex payload=> ', payload)
      state.memberInfo.id = payload.Info.ID
      state.memberInfo.account = payload.Info.Account
      state.memberInfo.username = payload.Info.Name
      state.memberInfo.email = payload.Info.Email
      state.memberInfo.phone = payload.Info.Phone
      state.memberInfo.address = payload.Info.Address
      state.authData.token = payload.Token
      localStorage.setItem(
        'memberInfo',
        JSON.stringify({
          id: payload.Info.ID,
          account: payload.Info.Account,
          username: payload.Info.Name,
          phone: payload.Info.Phone,
          email: payload.Info.Email,
          address: payload.Info.Address,
          token: payload.Token
        })
      )
    }
  },

  actions: {
    // 更新會員資訊
    updateMemberInfo({ commit }, memberInfo) {
      commit('SET_MEMBER_INFO', memberInfo)
    },

    // 更新使用者登入狀態
    updateLoginStatus({ commit }) {
      const memberStorage = JSON.parse(localStorage.getItem('memberInfo'))

      if (memberStorage) {
        commit('SET_LOGIN_STATUS', true, { root: true })
      }
    },

    // 確認會員登入狀態
    async checkMemberStatus({ dispatch }) {
      await dispatch('updateLoginStatus')
    },

    // 會員登入
    async loginMember({ dispatch }, loginForm) {
      // try {
      await callApi(apiPostLogin, loginForm, async (res) => {
        const data = res.Data

        dispatch('updateMemberInfo', data)
        dispatch('updateLoginStatus')
      })
      // } catch (error) {
      //   throw error
      // }
    }
  },

  getters: {
    memberInfo: (state) => state.memberInfo
  }
}
