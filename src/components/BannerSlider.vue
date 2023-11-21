<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'

defineProps({
  images: {
    type: Array,
    default: () => []
  }
})
const modules = [Autoplay, EffectFade]
</script>

<template>
  <swiper
    :slidesPerView="1"
    :effect="'fade'"
    :loop="true"
    :autoplay="{
      delay: 5000,
      disableOnInteraction: false
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="(image, i) in images" :key="i">
      <img :src="image" class="object-cover w-full h-auto" loading="lazy" />
    </swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>
.swiper {
  width: 100%;
  height: 100%;
  user-select: none;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
