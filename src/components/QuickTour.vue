<script setup>
const data = reactive([
  [
    {
      to: '/about',
      text: '品牌故事',
      src: 'icon-brand'
    },
    {
      to: '/delivery',
      text: '宅配須知',
      src: 'icon-delivery'
    }
  ],
  [
    {
      to: '/return',
      text: '退換貨政策',
      src: 'icon-private'
    },
    {
      to: '/private',
      text: '隱私權',
      src: 'icon-return'
    }
  ]
])

const getImageUrl = (name) => {
  return new URL(`../assets/icon/${name}.png`, import.meta.url).href
}
</script>
<template>
  <div class="flex flex-col items-center justify-center gap-16 py-5 md:flex-row">
    <div
      v-for="(item, i) in data"
      :key="i"
      class="flex flex-col justify-around w-full gap-16 sm:flex-row md:w-auto md:justify-start"
    >
      <RouterLink
        v-for="link in item"
        :key="link.to"
        :to="link.to"
        class="flex flex-col items-center gap-2 px-2"
      >
        <img
          :src="getImageUrl(link.src)"
          :alt="link.src"
          class="object-cover max-h-[100px]"
          loading="lazy"
        />
        <span class="text">{{ link.text }}</span>
      </RouterLink>
    </div>
  </div>
</template>
