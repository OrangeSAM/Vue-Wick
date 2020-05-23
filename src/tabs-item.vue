<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "wick-tabs-item",
    inject: ['eventBus'],
    data() {
      return {
        active: false
      }
    },
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
    computed: {
      classes () {
        return {
          active: this.active
        }
      }
    },
    methods: {
      xxx() {
        this.eventBus.$emit('update:selected', this.name)
      }
    },
    created() {
      this.eventBus.$on('update:selected', (name) => {
          this.active = this.name === name
        }
      )
    }
  }
</script>

<style scoped lang="scss">
  .tabs-item {
    flex-shrink: 0;
    padding: 0 1em;
    cursor: pointer;
    &.active {
      border-bottom: 1px solid lightcoral;
    }
  }
</style>