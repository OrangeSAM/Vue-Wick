<template>
  <div class="tabs-item" @click="itemClick" :class="classes" :data-name='name'>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "wick-tabs-item",
    inject: ['eventBus'],
    data () {
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
        this.eventBus && this.eventBus.$emit('update:selected', this.name, this)
        this.$emit('click', this)
      }
    },
    created () {
      if (this.eventBus) {
        this.eventBus.$on('update:selected', (name) => {
            this.active = this.name === name
          }
        )
      }
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
      cursor: not-allowed;
    }
  }
</style>