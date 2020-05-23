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
      this.eventBus.$emit('update:selected', this.selected)
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
    border: 1px solid lightcoral;
  }
</style>