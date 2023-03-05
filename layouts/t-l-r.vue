<template>
  <div class="slidev-layout default">
    <div>
      <slot name="top" />
    </div>
    <div class="flex">
      <div class="flex-item">
        <slot name="left" />
      </div>
      <div class="flex-item">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.flex{
  display: flex;
  justify-content: flex-start;
  .flex-item{
    flex: 1;
    margin-right: 20px;
  }
}
</style>
