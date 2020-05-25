<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: "wick-tabs",
    data () {
      return {
        eventBus: new Vue()
      }
    },
    props: {
      selected: {
        type: String,
        required: true
      },
      direction: {
        type: String,
        default: 'horizontal',
        validator (val) {
          return ['horizontal', 'vertical'].indexOf(val) >= 0
        }
      }
    },
    mounted () {
      this.$children.forEach(vm => {
        if (vm.$options.name === 'wick-tabs-head') {
          vm.$children.forEach(childVm => {
            if (childVm.$options.name === 'wick-tabs-item' && childVm.name === this.selected) {
              console.log(childVm.$el)
              this.eventBus.$emit('update:selected', this.selected, childVm)
            }
          })
        }
      })
    },
    provide () {
      return {
        eventBus: this.eventBus
      }
    }
  }
</script>

<style scoped>
  .tabs {
  }
</style>