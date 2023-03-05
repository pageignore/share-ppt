<script setup lang="ts">
import { reactive, ref } from 'vue'

const str = ref('hello world')
const num = ref(10086)
const obj = ref({a: 1})

const state = reactive({
  list: [1, 2 ,3]
})

console.log(str)
console.log(num)
console.log(obj)
console.log(state);


</script>

<template>
  <div flex="~" w="min" border="~ gray-400 opacity-50 rounded-md">
  </div>
</template>
