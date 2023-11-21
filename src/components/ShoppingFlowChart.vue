<script setup>
const route = useRoute()
</script>
<template>
  <ul class="flex items-center justify-around">
    <li
      class="relative text flex flex-col items-center w-full after:content-[''] after:absolute after:top-[12px] after:right-0 after:left-0 after:border after:border-[#B7B7A4] after:-z-10"
      :class="{ 'text-[#252422]': route.name === 'OrderInfo' }"
    >
      <span
        class="flex items-center justify-center w-6 h-6 text-sm rounded-full"
        :class="
          route.name === 'OrderInfo'
            ? 'font-bold text-white bg-[#CB997E]'
            : 'text-[#CCC5B9] bg-[#FFE8D6]'
        "
        >1</span
      >
      訂單資訊
    </li>
    <li
      class="relative text flex flex-col items-center w-full after:content-[''] after:absolute after:top-[12px] after:right-0 after:left-0 after:border after:border-[#B7B7A4] after:-z-10"
      :class="{ 'text-[#252422]': route.name === 'FillInfo' }"
    >
      <span
        class="flex items-center justify-center w-6 h-6 text-sm rounded-full"
        :class="
          route.name === 'FillInfo'
            ? 'font-bold text-white bg-[#CB997E]'
            : 'text-[#CCC5B9] bg-[#FFE8D6]'
        "
        >2</span
      >
      填寫資料
    </li>
    <li
      class="relative text flex flex-col items-center w-full after:content-[''] after:absolute after:top-[12px] after:right-0 after:left-0 after:border after:border-[#B7B7A4] after:-z-10"
      :class="{ 'text-[#252422]': route.name === 'Finish' }"
    >
      <span
        class="flex items-center justify-center w-6 h-6 text-sm rounded-full"
        :class="
          route.name === 'Finish'
            ? 'font-bold text-white bg-[#CB997E]'
            : 'text-[#CCC5B9] bg-[#FFE8D6]'
        "
        >3</span
      >
      資料確認
    </li>
  </ul>
</template>
