<script setup>
import IconsHome from '~icons/heroicons/home'

const props = defineProps({
  childrenPath: {
    type: String
  }
})

const route = useRoute()
const isUserPage = ref(false)
const path = ref({
  name: '',
  children: ''
})

watch(
  () => route.fullPath,
  () => {
    if (route.path.startsWith('/user')) {
      isUserPage.value = true
      path.value = {
        name: '會員專區',
        children: route.meta.title
      }
    } else if (route.path.startsWith('/products')) {
      isUserPage.value = true
      path.value = {
        name: '商品分類',
        children: route.meta.title
      }
    } else {
      isUserPage.value = false
      path.value = {
        name: route.meta.title,
        children: ''
      }
    }
  },
  { immediate: true }
)

watch(
  () => props.childrenPath,
  () => {
    path.value.name = props.childrenPath
  },
  { immediate: true }
)

onMounted(() => {
  path.value.name = route.meta.title
})
</script>

<template>
  <div class="flex items-center gap-2">
    <RouterLink to="/" class="link">
      <IconsHome class="w-6 h-6" />
    </RouterLink>
    <span
      class="w-2 h-2 rotate-45 border-2 border-b-0 border-l-0 select-none border-slate-400"
    ></span>
    <span class="select-none text">{{ path.name }}</span>
    <span
      v-if="isUserPage"
      class="w-2 h-2 rotate-45 border-2 border-b-0 border-l-0 select-none border-slate-400"
    ></span>
    <span v-if="isUserPage" class="select-none text">{{ path.children }}</span>
  </div>
</template>
