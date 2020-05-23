<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions-wrap">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "wick-tabs-head",
    inject: ['eventBus'],
    created() {
    }
  }
</script>

<style scoped lang="scss">
  $tab-height: 40px;
  .tabs-head{
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    align-items: center;
    >.actions-wrap {
      margin-left: auto;
    }
  }
</style>