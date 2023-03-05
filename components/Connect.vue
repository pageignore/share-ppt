<script setup lang="ts">
import { ref, computed } from 'vue'
import { reactify } from '@vueuse/core'
import CItem from './CItem.vue'

function add(a: number, b: number) {
  return a + b
}

const reactAdd = reactify(add)
const reactPow = reactify(Math.pow)

const power = ref(2)
const x = ref(1)
const y = ref(1)

const powX = reactPow(x, power)
const powY = reactPow(y, power)

const z = reactAdd(powX, powY)

const setStyle1 = computed(() => {
  return {
    '--tw-gradient-from': 'rgba(52, 211, 153, .8)',
    '--tw-gradient-to': 'rgba(22, 111, 153, .8)',
  }
})

const setStyle2 = computed(() => {
  return {
    '--tw-gradient-from': 'rgba(96, 165, 250, .8)',
    '--tw-gradient-to': 'rgba(167, 139, 250, .8)',
  }
})

</script>

<template>
  <div>
    <div class="formula">𝒛 = 𝒙<sup>{{ power }}</sup> + 𝒚<sup>{{ power }}</sup> = {{ x }}x{{ x }}+{{ y }}x{{ y }} = {{ z }}</div>
    <div class="flex mb-4">
      <Counter v-model:count="power" />
      <div class="text">次方</div>
    </div>
    <div class="box">
      <div class="row">
        <div class="row-item">
          <CItem :style="setStyle1" name="𝒙" v-model:val="x" :canChange="true" />
          <img class="img-01" src="/arrow_01.png">
        </div>
        <div class="row-item">
          <CItem :style="setStyle2" name="𝒙" v-model:val="powX" :isPow="true" v-model:power="power"/>
        </div>
      </div>
      <div class="row">
        <div class="row-item">
          <CItem :style="setStyle1" name="𝒚" v-model:val="y" :canChange="true" />
          <img class="img-01" src="/arrow_01.png">
        </div>
        <div class="row-item">
          <CItem :style="setStyle2" name="𝒚" v-model:val="powY" :isPow="true" v-model:power="power" />
        </div>
      </div>
      <div class="z-item">
        <CItem :style="setStyle2" name="𝒛" v-model:val="z" />
        <img class="img-02" src="/arrow_02.png">
      </div>
    </div>
  </div>
</template>

<style scoped>
.flex{
  display: flex;
  align-items: center;
}
.text{
  padding-left: 10px;
  color: #555;
}
.box{
  position: relative;
}
.formula{
  margin: 40px 0 20px;
}
.row{
  display: flex;
  margin-bottom: 40px;
}
.row-item{
  margin-right: 70px;
  position: relative;
}
.img-01{
  width: 40px;
  position: absolute;
  left: 98px;
  top: 40px;
}
.z-item{
  position: absolute;
  left: 310px;
  top: 50px;
}
.img-02{
  height: 120px;
  position: absolute;
  left: -78px;
  top: -10px;
}
</style>
