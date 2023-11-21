// 自訂驗證規則: 身分證ID格式
export const idCard = (value) => {
  const regex = /^[A-Za-z][12]\d{8}$/
  return regex.test(value)
}

// 檢查是否為空白
export const validateWhiteSpace = (value) => {
  return value.trim() !== ''
}

// 網址是否有效
export const webUrl = (value) => {
  const regex = /^((ht|f)tps?):\/\/[\w-]+(\.[\w-]+)+([\w-.,@?^=%&:/~+#]*[\w@?^=%&/~+#])?$/
  return regex.test(value)
}

// 信箱是否有效
export const validateEmail = (email) => {
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  return regex.test(email)
}

// 檢查HTML TAG
export const htmlTag = (value) => {
  const regex = /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/
  return regex.test(value)
}

// 檢查台灣手機電話
export const Mphone = (value) => {
  const regex = /^(886)?09\d{8}$/
  return regex.test(value)
}

// 檢查台灣電話
export const phone = (value) => {
  const regex = /^(886)?0\d{1,2}-\d{6,8}$/
  return regex.test(value)
}
