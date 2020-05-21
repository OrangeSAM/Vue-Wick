<template>
  <div class="aside">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "w-aside"
  }
</script>

<style scoped>
  .aside{
    border: 1px solid lightgray;
  }
</style>