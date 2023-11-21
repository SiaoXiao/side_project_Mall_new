<template>
  <div class="overflow-x-auto" v-bind="$attrs">
    <table class="w-full">
      <thead>
        <tr class="border-b border-[#DDBEA9]">
          <th
            v-for="column in columns"
            :key="column.key"
            class="px-5 py-3 text-sm font-medium tracking-wider text-left text-[#CB997E] whitespace-nowrap"
          >
            {{ column.label }}
          </th>
          <th
            v-if="showActions"
            class="px-5 py-3 text-sm font-medium tracking-wider text-left text-[#CB997E] whitespace-nowrap"
          >
            操作
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="record in data" :key="record.id">
          <td v-for="column in columns" :key="column.key" class="px-5 py-3 whitespace-nowrap text">
            <slot
              :name="`column-${column.key}`"
              :column="column"
              :record="record"
              :value="record[column.key]"
            >
              {{ record[column.key] }}
            </slot>
          </td>

          <td v-if="showActions" class="px-5 py-3 whitespace-nowrap text-text-secondary">
            <slot name="actions" :record="record" :value="record.Name ? record.Name : ''"> </slot>
          </td>
        </tr>
        <!-- 沒有資料時 -->
        <tr v-if="!data.length">
          <td :colspan="columnsCount" class="py-12 text-center text">
            {{ emptyText }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- <Pagination v-if="showPaginator" v-model:current-page="currentPage" :total-page="totalPage"
    class="border-t border-text-secondary" /> -->
</template>

<script setup>
// import Pagination from "@/components/Paginator.vue";
// import { useConfirm } from '@/composables/useConfirmModal'

// const emit = defineEmits(['delete-selected'])
const props = defineProps({
  columns: {
    type: Array,
    required: true
  },
  data: {
    type: Array,
    required: true
  },
  emptyText: {
    type: String,
    default: '當前沒有任何資料'
  },
  confirmDeleteText: {
    type: String,
    default: '確定要執行刪除嗎?'
  },

  showActions: {
    type: Boolean,
    default: true
  }
})

const columnsCount = computed(() => {
  return props.columns.length + Number(props.showActions)
})

// Pagination
// const currentPage = ref(1)
// const totalPage = ref(10)

// 刪除行
// const deleteRows = async () => {
//   if (await useConfirm(props.confirmDeleteText)) {
//     emit('delete-selected', selectedIds.value)
//     await nextTick()
//   }
// }
</script>
