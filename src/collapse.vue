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
        type: Array
      }
    },
    provide () {
      return {
        eventBus: this.eventBus
      }
    },
    mounted () {
      this.eventBus.$emit('update:selected', this.selected)

      this.eventBus.$on('update:addSelected', (name) => {
        let selectedCopy = JSON.parse(JSON.stringify(this.selected))
        if (this.single) {
          selectedCopy = [name]
        } else {
          selectedCopy.push(name)
        }
        this.eventBus.$emit('update:selected', selectedCopy)
        this.$emit('update:selected', selectedCopy)
      })

      this.eventBus.$on('update:removeSelected', (name) => {
        let selectedCopy = JSON.parse(JSON.stringify(this.selected))

        let index = selectedCopy.indexOf(name)
        selectedCopy.splice(index, 1)
        this.eventBus.$emit('update:selected', selectedCopy)
        this.$emit('update:selected', selectedCopy)
      })
      this.$children.forEach(vm => {
        vm.single = this.single
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