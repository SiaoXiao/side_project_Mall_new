export const handleNetworkError = (error) => {
  const status = error.response.status
  let errMessage = '未知錯誤'

  if (error) {
    switch (status) {
      case 400:
        errMessage = '錯誤的請求'
        break
      case 401:
        errMessage = '未授權，請重新登入'
        break
      case 403:
        errMessage = '拒絕訪問'
        break
      case 404:
        errMessage = '請求錯誤，未找到該資源'
        break
      case 405:
        errMessage = '請求方法未允許'
        break
      case 408:
        errMessage = '請求超時'
        break
      case 500:
        errMessage = '服務器端出錯'
        break
      case 501:
        errMessage = '網路未實現'
        break
      case 502:
        errMessage = '錯誤的網關'
        break
      case 503:
        errMessage = '暫停服務'
        break
      case 504:
        errMessage = '網關超時'
        break
      case 505:
        errMessage = 'HTTP版本不支持該請求'
        break
      default:
        errMessage = `其它連接錯誤 --${error}`
    }
  } else {
    errMessage = '無法連接到伺服器'
  }

  throw new Error(errMessage)
}
