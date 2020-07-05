<template>
  <div class="collapse-item">
    <div class='title' @click='toggle'>{{title}}</div>
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
    inject: ['eventBus'],
    data () {
      return {
        open: false
      }
    },
    methods: {
      toggle () {
        if (this.open) {
          this.open = false
        } else {
          this.open = true
          this.eventBus && this.eventBus.$emit('update:selected', this)
        }
      },
      close () {
        this.open = false
      }
    },
    mounted () {
      this.eventBus && this.eventBus.$on('update:selected', (vm) => {
        if (vm !== this) {
          this.close()
        }
      })
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