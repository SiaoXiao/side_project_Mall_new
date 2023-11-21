import axios from 'axios'
import { networkConfig } from '@/api/networkConfig'
import { handleNetworkError } from './tool'

// 創建axios實例
export function requestService(config) {
  const service = axios.create({
    baseURL: networkConfig.baseURL,
    timeout: networkConfig.requestTimeout,
    headers: config.headers,
    transformRequest: [
      (data = config.params) => {
        // Do whatever you want to transform the data
        const tempData = getJwtData(JSON.stringify(data))
        return tempData.data
      }
    ]
  })

  const getJwtData = (data) => {
    // 如果jwt的key中含有空字串或者undefined，刪除該條jwt
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        // if (data.hasOwnProperty(key)) {
        const val = data[key]
        if (val === '' || val === undefined) {
          delete data[key]
        }
      }
    }
    // 第一次 URL 編碼+Base64 編碼+再次進行 URL 編碼
    const jwt = encodeURIComponent(btoa(encodeURIComponent(data)))
    return { data: jwt }
  }

  // request攔截
  service.interceptors.request.use(
    (config) => {
      console.log(config)
      // 如果此請求不需要帶 token，直接返回 config
      if (shouldAddToken(config)) {
        // 檢查Token
        const token = JSON.parse(localStorage.getItem('memberInfo')).token
        // 如果 token 存在，則將其添加到請求頭中
        if (token) {
          config.headers.token = token
        }
      }

      function shouldAddToken(config) {
        return (
          config.url !== '/member/otp' &&
          config.url !== '/member/login' &&
          config.url !== '/member/register' &&
          config.url !== '/member/forget' &&
          config.url !== '/member/forget/reset' &&
          config.url !== '/member/goods/list'
        )
      }

      return config
    },
    (error) => {
      console.log('攔截RequestError', error)
      return Promise.reject(error)
    }
  )

  // response攔截
  service.interceptors.response.use(
    (response) => {
      console.log(response)
      if (response.status >= 200 && response.status < 300) {
        // 狀態碼為 2xx 時視為成功
        // if (response.data.status === "success") {
        return Promise.resolve(response)
        // } else if (response.data.status === "error") {
        //   console.log("error in data");
        //   // 拋出異常或是 reject 一個錯誤
        //   return Promise.reject(new Error("Error in response data"));
        // }
      } else {
        console.log('response status is not 2xx')
        return Promise.reject(response) // 狀態碼非 2xx 時視為失敗
      }
    },
    (error) => {
      console.log('攔截ResponseError', error)
      let newError
      try {
        handleNetworkError(error)
      } catch (e) {
        newError = e
      }
      return Promise.reject(newError)
    }
  )
  return service(config)
}
