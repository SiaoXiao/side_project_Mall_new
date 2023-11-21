<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

const props = defineProps({
  images: {
    type: Array,
    default: () => []
  }
})

const modules = [FreeMode, Navigation, Thumbs]

const thumbsSwiper = ref(null)

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper
}

console.log(props.images)
</script>

<template>
  <swiper
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff'
    }"
    :spaceBetween="10"
    :navigation="true"
    :thumbs="{ swiper: thumbsSwiper }"
    :modules="modules"
    class="mySwiper2"
  >
    <swiper-slide v-for="(image, i) in images" :key="i">
      <img :src="image.Url" />
    </swiper-slide>
    <!-- <swiper-slide><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide><swiper-slide><img
        src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide><swiper-slide><img
        src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide><swiper-slide><img
        src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide> -->
  </swiper>
  <swiper
    @swiper="setThumbsSwiper"
    :spaceBetween="10"
    :slidesPerView="4"
    :freeMode="true"
    :watchSlidesProgress="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="(image, i) in images" :key="i">
      <img :src="image.Url" />
    </swiper-slide>
    <!-- <swiper-slide><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide><swiper-slide><img
        src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide><swiper-slide><img
        src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide><swiper-slide><img
        src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide> -->
  </swiper>
</template>

<style lang="scss" scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

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

.swiper {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  height: 80%;
  width: 100%;
}

.mySwiper {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
