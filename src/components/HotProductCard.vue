<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import IconsSparkles from '~icons/heroicons/sparkles-20-solid'
import defaultImageUrl from '../assets/default/image.jpg'
import { useStore } from 'vuex'

defineProps({
  products: {
    type: Array,
    default: () => []
  }
})
const router = useRouter()
const store = useStore()
const modules = [Navigation, Pagination, Autoplay]
const breakpoints = ref({
  640: {
    slidesPerView: 2,
    spaceBetween: 20
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 40
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 50
  }
})

// 切換路由
const handleRouterChange = async (item) => {
  const id = item.ID
  store.commit('goodsModules/SET_GOODS_DETAIL_ID', id)
  router.push({ name: 'GoodsDetail', params: { id } })
}
</script>

<template>
  <div>
    <div class="flex items-center justify-center mb-10">
      <IconsSparkles class="w-10 h-10 mr-2 text-[#ffd700]" />
      <h2 class="titleText">熱銷排行</h2>
    </div>
    <swiper
      :navigation="true"
      :spaceBetween="10"
      :slidesPerView="1"
      :loop="true"
      :autoplay="{
        delay: 7000,
        disableOnInteraction: false
      }"
      :breakpoints="breakpoints"
      :modules="modules"
      class="mySwiper"
    >
      <template v-for="item in products" :key="item.ID">
        <swiper-slide v-if="item.Show">
          <div
            class="relative border-2 rounded cursor-pointer shadow-lg min-w-[250px] w-[250px] min-h-[350px] flex flex-col"
            @click="handleRouterChange(item)"
          >
            <div class="absolute top-0 right-0 px-2 py-3 space-y-2">
              <AddLike :item="item" @click.stop />
            </div>
            <img
              :src="
                item.ImageUrls && item.ImageUrls.length > 0
                  ? item.ImageUrls[0].Url
                  : defaultImageUrl
              "
              class="min-h-[250px] max-h-[250px] w-auto object-cover"
              loading="lazy"
            />
            <div class="h-[100px] flex flex-col items-center justify-center px-1 py-5">
              <h4 class="mb-1 text-xl titleText">{{ item.Name }}</h4>
              <p
                class="titleText text-xl text-red-500 before:content-['NT$'] before:mr-1 before:text-[#252422] mb-4"
              >
                {{ item.UnitPrice }}
              </p>
            </div>
          </div>
        </swiper-slide>
      </template>
    </swiper>
  </div>
</template>

<style lang="scss" scoped>
:deep(.swiper-button-next::after) {
  content: '>';
}

:deep(.swiper-button-prev::after) {
  content: '<';
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  width: 50px;
  height: 50px;
  background: #cb997e;
  transition: all 0.5s;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #ffe8d6;
  }

  &::after {
    line-height: 50px;
    font-size: 30px;
    font-weight: bolder;
    color: #ffffff;
  }

  &:hover::after {
    color: #403d39;
  }
}

.swiper {
  width: 100%;
  height: 100%;
  user-select: none;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  // background: #fff;

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
  margin-left: auto;
  margin-right: auto;
}
</style>
