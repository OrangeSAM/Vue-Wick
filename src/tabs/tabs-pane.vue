<template>
  <div class="tabs-pane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "wick-tabs-pane",
    inject: ['eventBus'],
    data() {
      return {
        active: false
      }
    },
    props: {
      name: {
        type: [String, Number],
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
    created() {
      // 前面加个update是什么意思
      this.eventBus.$on('update:selected', (name) => {
        this.active = this.name === name
      })
    }
  }
</script>

<style scoped lang="scss">
  .tabs-pane {
    padding: 1em;
    &.active {
    }
  }
</style>