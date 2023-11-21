// 時間格式化
export const formattedDate = (time) => {
  const dateObject = new Date(time * 1000)

  // 獲取年、月和日
  const year = dateObject.getFullYear()
  const month = String(dateObject.getMonth() + 1).padStart(2, '0') // padStart 確保月份為兩位數字
  const day = String(dateObject.getDate()).padStart(2, '0') // padStart 確保日期為兩位數字

  // 組成 "yyyy-mm-dd" 格式
  return `${year}-${month}-${day}`
}

// 反轉時間化格式
export const formatDate = (timestamp) => {
  // 由于 JavaScript 的 Date 期望毫秒为单位的时间戳，所以你可能需要将你的时间戳乘以 1000
  const date = new Date(timestamp * 1000)

  // 使用 toISOString 方法获取日期字符串，然后截取前10个字符（即日期部分，忽略时间）
  return date.toISOString().substring(0, 10)
}

// 時間格式化
export const formattedTime = (time) => {
  const dateObject = new Date(time * 1000)

  // 获取年、月、日、小时和分钟
  const year = dateObject.getFullYear()
  const month = String(dateObject.getMonth() + 1).padStart(2, '0') // padStart 确保月份为两位数字
  const day = String(dateObject.getDate()).padStart(2, '0') // padStart 确保日期为两位数字
  const hour = String(dateObject.getHours()).padStart(2, '0') // padStart 确保小时为两位数字
  const minutes = String(dateObject.getMinutes()).padStart(2, '0') // padStart 确保分钟为两位数字

  // 组成 "yyyy-mm-dd hh:mm" 格式
  return `${year}-${month}-${day} ${hour}:${minutes}`
}
