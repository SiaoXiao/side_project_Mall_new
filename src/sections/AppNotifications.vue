<template>
  <notifications>
    <template #body="{ item, close }">
      <div
        class="relative mx-4 mb-4 overflow-hidden bg-white rounded-lg shadow-lg notification"
        :class="`notification-${item.type || 'default'}`"
      >
        <div class="flex p-3 border-l-4 notification-inner">
          <!-- icon -->
          <div>
            <IconCheckCircle v-if="item.type === 'success'" class="notification-icon" />
            <IconInformationCircle v-else-if="item.type === 'warn'" class="notification-icon" />
            <IconXCircle v-else-if="item.type === 'error'" class="notification-icon" />
            <IconInformationCircle v-else class="notification-icon" />
          </div>
          <div class="ml-2">
            <div class="mt-0.5 text-text-primary font-normal tracking-wide">
              {{ item.title }}
            </div>
            <div v-if="item.text" class="text-text-secondary text-sm mt-0.5">
              {{ item.text }}
            </div>
            <button
              type="button"
              class="absolute flex items-center justify-center w-6 h-6 transition-colors duration-100 right-2 top-2 text-text-secondary hover:text-text-primary"
              :class="item.text ? 'top-2' : 'top-4'"
              @click="close"
            >
              <IconX class="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </template>
  </notifications>
</template>

<script setup>
import IconCheckCircle from '~icons/heroicons-outline/check-circle'
import IconInformationCircle from '~icons/heroicons-outline/information-circle'
import IconXCircle from '~icons/heroicons-outline/x-circle'
import IconX from '~icons/heroicons-outline/x-mark'
</script>

<style scoped></style>
