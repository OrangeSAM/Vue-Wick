<template>
  <div class="footer">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "w-footer"
  }
</script>

<style scoped>
  .footer{
    border: 1px solid lightgray;
  }
</style>