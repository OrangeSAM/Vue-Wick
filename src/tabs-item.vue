<template>
  <div class="tabs-item" @click="xxx">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "wick-tabs-item",
    inject: ['eventBus'],
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: [Number, String],
        required: true
      }
    },
    methods: {
      xxx () {
        this.eventBus.$emit('update:selected', this.name)
      }
    },
    created() {
      this.eventBus.$on('update:selected', (name) => {
        console.log(name)
      })
      console.log(this.eventBus, 'item')
    }
  }
</script>

<style scoped>

</style>