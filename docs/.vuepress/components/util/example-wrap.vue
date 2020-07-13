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
    transition all .3s
    border-radius 5px
    border 1px solid #f1f1f1
    &:hover
      cursor pointer
      border-radius 3px
      box-shadow 0 2px 6px 0px lightgray
</style>