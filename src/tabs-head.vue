<template>
  <div class="tabs-head">
    <slot></slot>
    <slot name="actions"></slot>
  </div>
</template>

<script>
  export default {
    name: "wick-tabs-head",
    inject: ['eventBus'],
    created() {
      console.log(this.eventBus, 'head')
    }
  }
</script>

<style scoped>

</style>