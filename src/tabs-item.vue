<template>
  <div class="tabs-item" @click="itemClick" :class="classes">
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
          active: this.active,
          disabled: this.disabled
        }
      }
    },
    methods: {
      itemClick () {
        if (this.disabled) return
        this.eventBus.$emit('update:selected', this.name, this)
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
  $blue: lightcoral;
  .tabs-item {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 1em;
    cursor: pointer;
    &.active {
      color: $blue;
    }
    &.disabled {
      color: lightgray;
    }
  }
</style>