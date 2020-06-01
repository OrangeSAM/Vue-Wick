<template>
  <div class="tabs-head">
    <slot></slot>
    <div class='line' ref='line'></div>
    <div class="actions-wrap">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "wick-tabs-head",
    inject: ['eventBus'],
    mounted() {
      this.eventBus.$on('update:selected', (item, vm) => {
        let {width, height, top, left} = vm.$el.getBoundingClientRect()
        this.$refs.line.style.width = `${width}px`
        this.$refs.line.style.left = `${left}px`
      })
    }
  }
</script>

<style scoped lang="scss">
  $tab-height: 40px;
  $blue: lightcoral;
  $border-color: lightGray;
  .tabs-head{
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    border-bottom: 1px solid $border-color;
    >.line{
      position: absolute;
      bottom: 0;
      transition: all .3s;
      border-bottom: 1px solid $blue;
    }
    >.actions-wrap {
      display: flex;
      align-items: center;
      margin-left: auto;
    }
  }
</style>