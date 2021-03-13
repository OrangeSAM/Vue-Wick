<template>
  <div class="content">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "w-content"
  }
</script>

<style scoped>
  .content{
    border: 1px solid lightgray;
    flex-grow: 1;
  }
</style>