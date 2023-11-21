<script setup>
import IconsLogo from '~icons/vscode-icons/file-type-htmlhint'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="px-3 py-2 bg-[#FFE8D6]">
    <div
      class="flex items-center justify-between flex-col md:flex-row gap-5 py-3 md:py-1 max-w-[1280px] m-auto"
    >
      <div class="h-full w-[150px]">
        <RouterLink to="/" class="flex items-center">
          <IconsLogo class="w-10 h-10 mr-2" />
          <span class="text-xl font-medium tracking-wider text-[#252422]">WhyShop</span>
        </RouterLink>
      </div>
      <div class="w-full max-w-[280px]">
        <span
          class="relative block pb-2 text-xl font-medium tracking-wider text-[#CB997E] text-center md:text-start before:content before:border-[#CB997E] before:border-b-2 before:absolute before:w-full before:bottom-0 before:left-0"
          >聯絡我們</span
        >
        <ul class="mt-3 space-y-2 text whitespace-nowrap">
          <li>
            服務時間：<time datetime="9:00">9:00</time>&nbsp;-&nbsp;<time datetime="18:00"
              >18:00</time
            >
          </li>
          <li>客服專線：(123)45678910</li>
          <li>
            客服信箱：
            <a href="mailto: whygogoinc@gmail.com">
              <span>whygogoinc@gmail.com</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="w-full max-w-[280px]">
        <span
          class="relative block pb-2 text-xl font-medium tracking-wider text-[#CB997E] text-center md:text-start before:content before:border-[#CB997E] before:border-b-2 before:absolute before:w-full before:bottom-0 before:left-0"
          >客戶服務</span
        >
        <ul class="mt-3 space-y-2 text-base tracking-wide">
          <li>
            <RouterLink to="/delivery" class="link"> 宅配須知 </RouterLink>
          </li>
          <li>
            <RouterLink to="/private" class="link"> 服務條款細則與隱私權保護 </RouterLink>
          </li>
          <li>
            <RouterLink to="/return" class="link"> 退換貨政策 </RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="mt-3 py-1 text-sm tracking-wider text-center text-[#252422]">
      Copyright © Keith.Lee <time :datetime="year">{{ year }}</time
      >. All Rights Reserved.
    </div>
  </footer>
</template>
