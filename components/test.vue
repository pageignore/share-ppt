<script setup lang="ts">
import { ref } from 'vue'
import { reactify } from '@vueuse/core'

const useFloor= reactify(Math.floor)
const usePow = reactify(Math.pow)

const x = ref(2.4)
const res = usePow(useFloor(x), 2) // res = 4

console.log(res.value, 'res')

x.value = 3.6 // res = 9


</script>

<template>
  <div flex="~" w="min" border="~ gray-400 opacity-50 rounded-md">
    {{ x }} he {{ res }}
  </div>
</template>
