<script setup>
const route = useRoute()
const menuItems = reactive([
  { to: '/products', text: '所有商品', name: 'Products' },
  { to: '/products/hot', text: '熱銷排行', name: 'Hot' },
  { to: '/products/chiffon', text: '戚風蛋糕', name: 'Chiffon' },
  { to: '/products/cupcake', text: '杯子蛋糕', name: 'Cupcake' },
  { to: '/products/macaron', text: '馬卡龍', name: 'Macaron' },
  { to: '/products/other', text: '其他', name: 'Other' }
])
</script>

<template>
  <Layout>
    <PageContainer>
      <PageHeader>
        <template #title>商品分類</template>
      </PageHeader>
      <main class="flex flex-col w-full mb-10 md:gap-5 md:flex-row">
        <ul class="w-1/4 p-3 border-2 border-[#DDBEA9] box-border hidden md:block">
          <li v-for="item in menuItems" :key="item.to" class="p-3 pb-2 menuLink">
            <RouterLink :to="item.to" class="block">
              {{ item.text }}
            </RouterLink>
          </li>
        </ul>
        <div
          class="flex items-center justify-between gap-2 md:hidden border-2 border-b-0 border-[#DDBEA9] box-border"
        >
          <span
            v-for="item in menuItems"
            :key="item.to"
            class="p-2 font-medium cursor-pointer text"
            :class="{ 'bg-[#DDBEA9] text-white': route.name === item.name }"
          >
            <RouterLink :to="item.to" class="block">
              {{ item.text }}
            </RouterLink>
          </span>
        </div>
        <div class="w-full md:w-3/4 p-3 border-2 border-[#DDBEA9] box-border h-full min-h-screen">
          <router-view></router-view>
        </div>
      </main>
    </PageContainer>
  </Layout>
</template>
