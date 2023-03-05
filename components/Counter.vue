<script setup lang="ts">
import { ref } from 'vue'
import { useVModels } from '@vueuse/core'

const props = defineProps({
  count: {
    default: 0,
  },
})

const { count } = useVModels(props)
</script>

<template>
  <div flex="~" w="min" border="~ gray-400 opacity-50 rounded-md">
    <button
      border="r gray-400 opacity-50"
      p="2"
      font="mono"
      outline="!none"
      hover:bg="gray-400 opacity-20"
      @click="count -= 1"
    >
      -
    </button>
    <span m="auto" p="2">{{ count }}</span>
    <button
      border="l gray-400 opacity-50"
      p="2"
      font="mono"
      outline="!none"
      hover:bg="gray-400 opacity-20"
      @click="count += 1"
    >
      +
    </button>
  </div>
</template>
