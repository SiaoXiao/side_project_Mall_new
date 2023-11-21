// import { createRouter, createWebHistory } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'Hone',
    component: () => import('../pages/index.vue'),
    meta: {
      title: '首頁',
      name: '首頁',
      requiresAuth: false
    }
  },

  {
    path: '/user/login',
    name: 'Login',
    component: () => import('../pages/user/login.vue'),
    meta: {
      title: '登入',
      name: '登入',
      requiresAuth: false
    }
  },

  {
    path: '/user',
    name: 'User',
    component: () => import('../pages/user/index.vue'),
    meta: {
      title: '會員專區',
      name: '會員專區',
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'Homepage',
        component: () => import('../pages/user/homepage.vue'),
        meta: {
          title: '我的帳戶',
          name: '我的帳戶',
          requiresAuth: true
        }
      },
      {
        path: 'order',
        name: 'Order',
        component: () => import('../pages/user/order.vue'),
        meta: {
          title: '訂單查詢',
          name: '訂單查詢',
          requiresAuth: true
        }
      },
      {
        path: 'discount',
        name: 'Discount',
        component: () => import('../pages/user/discount.vue'),
        meta: {
          title: '專屬優惠',
          name: '專屬優惠',
          requiresAuth: true
        }
      },
      {
        path: 'like',
        name: 'Like',
        component: () => import('../pages/user/like.vue'),
        meta: {
          title: '收藏清單',
          name: '收藏清單',
          requiresAuth: true
        }
      }
    ]
  },

  {
    path: '/products',
    name: 'Products',
    component: () => import('../pages/products/index.vue'),
    meta: {
      title: '商品分類',
      name: '商品分類',
      requiresAuth: false
    },
    children: [
      {
        path: '',
        name: 'Goods',
        component: () => import('../pages/products/goods.vue'),
        meta: {
          title: '所有商品',
          name: '所有商品',
          requiresAuth: false
        }
      },
      {
        path: 'hot',
        name: 'Hot',
        component: () => import('../pages/products/hot.vue'),
        meta: {
          title: '熱銷排行',
          name: '熱銷排行',
          requiresAuth: false
        }
      },
      {
        path: 'chiffon',
        name: 'Chiffon',
        component: () => import('../pages/products/chiffon.vue'),
        meta: {
          title: '戚風蛋糕',
          name: '戚風蛋糕',
          requiresAuth: false
        }
      },
      {
        path: 'cupcake',
        name: 'Cupcake',
        component: () => import('../pages/products/cupcake.vue'),
        meta: {
          title: '杯子蛋糕',
          name: '杯子蛋糕',
          requiresAuth: false
        }
      },
      {
        path: 'macaron',
        name: 'Macaron',
        component: () => import('../pages/products/macaron.vue'),
        meta: {
          title: '馬卡龍',
          name: '馬卡龍',
          requiresAuth: false
        }
      },
      {
        path: 'other',
        name: 'Other',
        component: () => import('../pages/products/other.vue'),
        meta: {
          title: '其他',
          name: '其他',
          requiresAuth: false
        }
      }
    ]
  },

  {
    path: '/goodsDetail',
    name: 'GoodsDetailNoId',
    component: () => import('../pages/goodsDetail.vue'),
    meta: {
      title: '商品頁面',
      name: '商品頁面',
      requiresAuth: false
    }
  },

  {
    path: '/goodsDetail/:id',
    name: 'GoodsDetail',
    component: () => import('../pages/goodsDetail.vue'),
    meta: {
      title: '商品頁面',
      name: '商品頁面',
      requiresAuth: false
    }
  },

  {
    path: '/delivery',
    name: 'Delivery',
    component: () => import('../pages/delivery.vue'),
    meta: {
      title: '宅配須知',
      name: '宅配須知',
      requiresAuth: false
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../pages/about.vue'),
    meta: {
      title: '關於我',
      name: '關於我',
      requiresAuth: false
    }
  },
  {
    path: '/private',
    name: 'Private',
    component: () => import('../pages/private.vue'),
    meta: {
      title: '隱私權保護政策',
      name: '隱私權保護政策',
      requiresAuth: false
    }
  },
  {
    path: '/return',
    name: 'Return',
    component: () => import('../pages/return.vue'),
    meta: {
      title: '退款政策',
      name: '退款政策',
      requiresAuth: false
    }
  },
  {
    path: '/questionsAns',
    name: 'QuestionsAns',
    component: () => import('../pages/questionsAns.vue'),
    meta: {
      title: '常見問題',
      name: '常見問題',
      requiresAuth: false
    }
  },
  {
    path: '/foodData',
    name: 'FoodData',
    component: () => import('../pages/foodData.vue'),
    meta: {
      title: 'WhyShop資料庫',
      name: 'WhyShop資料庫',
      requiresAuth: false
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../pages/cart/index.vue'),
    meta: {
      title: '購物車',
      name: '購物車',
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'OrderInfo',
        component: () => import('../pages/cart/orderInfo.vue'),
        meta: {
          title: '購物車',
          name: '購物車',
          requiresAuth: true
        }
      },
      {
        path: 'fillInfo',
        name: 'FillInfo',
        component: () => import('../pages/cart/fillInfo.vue'),
        meta: {
          title: '購物車',
          name: '購物車',
          requiresAuth: true
        }
      },
      {
        path: 'finish',
        name: 'Finish',
        component: () => import('../pages/cart/finish.vue'),
        meta: {
          title: '購物車',
          name: '購物車',
          requiresAuth: true
        }
      }
    ]
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../pages/[...all].vue'),
    meta: {
      title: '404 Not Found',
      name: '404 page',
      requiresAuth: false,
      permissionId: ''
    }
  }
]

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

router.beforeEach(async (to, from, next) => {
  const memberInfo = JSON.parse(localStorage.getItem('memberInfo'))

  const title = 'Why Shop'
  document.title = `${title} - ${to.meta.title}` || title
  if (to.meta.requiresAuth) {
    if (memberInfo) {
      next()
    } else {
      next('/user/login')
      store.commit('RESET_LOGIN_STATUS', false)
    }
  } else {
    next()
  }
})

export default router
