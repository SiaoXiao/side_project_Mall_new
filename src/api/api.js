import { requestService } from '@/api/request'

// Get OTP碼
export function apiGetOTP(params) {
  return requestService({
    url: '/member/otp',
    method: 'GET',
    headers: {
      'Content-Type': 'text/plain'
    },
    params
  })
}

/* 會員相關 */
// Post 會員註冊
export function apiPostRegister(data) {
  return requestService({
    url: '/member/register',
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain'
    },
    data
  })
}

// Post 忘記密碼 確認信箱
export function apiPostForgetPassword(data) {
  return requestService({
    url: '/member/forget',
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain'
    },
    data
  })
}

// Post 忘記密碼 修改密碼
export function apiPostUpdatePassword(data) {
  return requestService({
    url: '/member/forget/reset',
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain'
    },
    data
  })
}

// Post 會員登入
export function apiPostLogin(data) {
  return requestService({
    url: '/member/login',
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain'
    },
    data
  })
}

// Get 取得當前會員資料
export function apiGetMemberData(params) {
  return requestService({
    url: '/member/center/info/r',
    method: 'get',
    headers: {
      'Content-Type': 'text/plain'
    },
    params
  })
}

// Post 更新當前會員資料
export function apiPostUpdateMemberData(data) {
  return requestService({
    url: '/member/center/info/u',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data
  })
}

/* Goods List */
// Post 取得所有商品資料
export function apiPostGetGoodsList(data) {
  return requestService({
    url: '/member/goods/list',
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain'
    },
    data
  })
}

// Get 取得所有收藏列表
export function apiGatAllLikeList(params) {
  return requestService({
    url: '/member/favor/r',
    method: 'GET',
    headers: {
      'Content-Type': 'text/plain'
    },
    params
  })
}

// Post 新增商品至收藏清單
export function apiPostAddLikeList(data) {
  return requestService({
    url: '/member/favor/c',
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain'
    },
    data
  })
}
// Post 刪除喜愛清單
export function apiPostDeleteLikeList(data) {
  return requestService({
    url: '/member/favor/d',
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain'
    },
    data
  })
}

/* order List */
// Post 獲得所有訂單
export function apiPostGetOrderList(data) {
  return requestService({
    url: '/member/center/order/list',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data
  })
}

// Post 獲得訂單詳細資料
export function apiPostGetOrderDetail(data) {
  return requestService({
    url: '/member/center/order/detail',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data
  })
}

/* Goods Type List */

// Get 取得購物車裡所有商品列表
export function apiGatGoodsCart(params) {
  return requestService({
    url: '/member/cartInfo/r',
    method: 'GET',
    headers: {
      'Content-Type': 'text/plain'
    },
    params
  })
}

// Post 加入購物車
export function apiPostAddGoodsCart(data) {
  return requestService({
    url: '/member/cartInfo/c',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data
  })
}

// Post 更新訂單資料
export function apiPostUpdateCartInfo(data) {
  return requestService({
    url: '/member/cartInfo/u',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data
  })
}

// Post 刪除購物車裡商品
export function apiPostDeleteGoodsCart(data) {
  return requestService({
    url: '/member/cartInfo/d',
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain'
    },
    data
  })
}

// Post 送出購物車裡商品
export function apiPostSubmitGoodsCart(data) {
  return requestService({
    url: '/member/cartInfo/checkout',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data
  })
}

// Get 取得優惠卷詳細資料
export function apiGatBenefitsList(params) {
  return requestService({
    url: '/member/center/benefits',
    method: 'GET',
    headers: {
      'Content-Type': 'text/plain'
    },
    params
  })
}
