<template>
  <div class="header">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "w-header"
  }
</script>

<style lang="scss" scoped>
  .header {
    border: 1px solid lightgray;
  }
</style>