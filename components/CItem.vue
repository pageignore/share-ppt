<script setup lang="ts">
import { useVModels } from '@vueuse/core'

const props = defineProps({
  name: {
    default: '',
  },
  power: {
    default: 2,
  },
  isPow: {
    default: false,
  },
  val: {
    default: 0,
  },
  canChange: {
    default: false,
  },
})

const name = props.name
const isPow = props.isPow
const { val, power } = useVModels(props)

function change(type) {
  type ? val.value++ : val.value > 1 ? val.value-- : ''
}

</script>

<template>
  <div class="box">
    <div class="name">{{ name }}<sup v-if="isPow">{{ power }}</sup></div>
    <div class="left"> {{ val }}</div>
    <div class="right" v-if="canChange">
      <div class="sign" @click="change(1)">+</div>
      <div class="sign" @click="change(0)">-</div>
    </div>
  </div>
</template>

<style scoped>

.box{
  min-width: 84px;
  height: 84px;
  border-radius: 20px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  background-image: radial-gradient(farthest-corner at 0 0, var(--tw-gradient-from) 30%, var(--tw-gradient-to));
}
.name{
  position: absolute;
  left: 12px;
  top: 5px;
  opacity: .6;
  font-size: 24px;
}
.left{
  min-width: 56px;
  font-size: 32px;
  box-sizing: border-box;
  padding-left: 30px;
  padding-right: 10px;
  padding-top: 5px;
  box-sizing: border-box;
}
.right{
  min-width: 24px;
  box-sizing: border-box;
  padding-right: 14px;
  text-align: center;
  padding: 5px 0;
}
.sign{
  width: 24px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  opacity: .6;
  cursor: pointer;
}
</style>
