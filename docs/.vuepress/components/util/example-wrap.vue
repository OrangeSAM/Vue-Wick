<template>
  <div class='example-wrap'>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "example-wrap"
  }
</script>

<style scoped lang='stylus'>
  .example-wrap
    padding 20px
    transition all .3s
    border-radius 5px 5px 0 0
    border 1px solid #f1f1f1
    &:hover
      cursor pointer
      box-shadow 0 2px 6px 0 lightgray
</style>