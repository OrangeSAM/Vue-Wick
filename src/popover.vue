<template>
  <div class='popover' @click='wrapClick'>
    <div class='content-wrapper' v-if='visible'>
      <slot name='content'></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "WickPopover",
    data() {
      return {
        visible: false,
      }
    },
    methods: {
      wrapClick() {
        this.visible = !this.visible
        console.log('切换visible')
        if (this.visible === true) {
          setTimeout(() => {
            document.addEventListener('click', () => {
              this.visible = false
              console.log('点击body就关闭popover')
            })
          }, 0)
        }
      }
    }
  }
</script>

<style scoped lang='scss'>
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;

    .content-wrapper {
      position: absolute;
      bottom: 100%;
      border: 1px solid lightcoral;
    }
  }
</style>