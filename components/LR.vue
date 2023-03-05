<template>
  <div class="flex">
    <div class="flex-item">
     <slot name="left"></slot>
    </div>
    <div class="flex-item">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<style scoped>
.flex{
  display: flex;
  justify-content: space-between;
}
.flex-item{
  width: 48%;
}

</style>

