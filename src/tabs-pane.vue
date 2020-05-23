<template>
  <div class="tabs-pane">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "wick-tabs-pane",
    inject: ['eventBus'],
    created() {
      console.log(this.eventBus, 'pane')
    }
  }
</script>

<style scoped>

</style>