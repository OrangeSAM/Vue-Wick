<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "wick-tabs-body",
    inject: ['eventBus'],
    created() {
      console.log(this.eventBus, 'body')
    }
  }
</script>

<style scoped>

</style>