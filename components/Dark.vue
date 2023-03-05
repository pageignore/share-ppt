<script setup lang="ts">
import { computed , ref} from '@vue/reactivity';
import { useColorMode ,useDark, useToggle } from '@vueuse/core'
import { isRef } from 'vue';
const mode = useColorMode()
mode.value = 'dark' // 默认设置黑色
const isDark = useDark()
const toggleDark = useToggle(isDark)

</script>

<template>
  <div flex="~" w="min" border="~ gray-400 opacity-50 rounded-md">
    <button
      border="r gray-400 opacity-50"
      p="2"
      font="mono"
      outline="!none"
      hover:bg="gray-400 opacity-20"
      @click="toggleDark()"
    >
    {{ isDark ? 'light' : 'dark' }}
    </button>
  </div>
</template>
