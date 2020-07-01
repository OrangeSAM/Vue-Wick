<template>
  <div class="collapse-item">
    <div class='title' @click='open = !open'>{{title}}</div>
    <div class='content' v-show='open'>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "wick-collapse-item",
    props: {
      title: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        open: false
      }
    }
  }
</script>

<style scoped lang='scss'>
  $border-color: #ddd;
  .collapse-item{
    .title {
      border-bottom: 1px solid $border-color;
      min-height: 32px;
      display: flex;
      align-items: center;
      padding: 0 10px;
    }
    /*本来想在这里写:not(:last-child)来去除最后一个内容的border, 但其实这个组件内只有一个content*/
    .content{
      padding: 10px;
      color: red;
      border-bottom: 1px solid $border-color;
    }
  }
</style>