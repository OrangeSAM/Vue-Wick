<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "wick-collapse",
  }
</script>

<style scoped lang='scss'>
  .collapse{
    border: 1px solid #ddd;
    border-bottom: none;
    border-radius: 4px;
    overflow: hidden;
  }
</style>