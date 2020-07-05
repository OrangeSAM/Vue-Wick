<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: "wick-collapse",
    data () {
      return {
        eventBus: new Vue()
      }
    },
    props:{
      single: {
        type: Boolean,
        default: false
      }
    },
    provide () {
      if (this.single) {
        return {
          eventBus: this.eventBus
        }
      }
    }
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