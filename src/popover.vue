<template>
  <div class='popover' @click='popoverClick'>
    <div class='content-wrapper' v-if='visible'>
      <slot name='content'></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "WickPopover",
    data () {
      return {
        visible: false,
      }
    },
    methods: {
      popoverClick () {
        this.visible = !this.visible
      }
    }
  }
</script>

<style scoped lang='scss'>
  .popover{
    display: inline-block;
    vertical-align: top;
    position: relative;
    .content-wrapper{
      position: absolute;
      bottom: 100%;
      left: 0;
      border: 1px solid lightcoral;
    }
  }
</style>