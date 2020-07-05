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
      },
      selected: {
        type: String
      }
    },
    provide () {
      return {
        eventBus: this.eventBus
      }
    },
    mounted () {
      this.eventBus.$emit('update:selected', this.selected)
      this.eventBus.$on('update:selected', (name) => {
        console.log(name)
        this.$emit('update:selected', name)
      })
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