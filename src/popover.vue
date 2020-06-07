<template>
  <div class='popover' @click.stop='wrapClick'>
    <div ref="content"
         class='content-wrapper'
         @click.stop
         v-if='visible'>
      <slot name='content'></slot>
    </div>
    <span ref="trigger">
      <slot></slot>
    </span>
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
        if (this.visible === true) {
          setTimeout(() => {
            document.body.appendChild(this.$refs.content)
            let {top, left} = this.$refs.trigger.getBoundingClientRect()
            this.$refs.content.style.left = left + window.scrollX +'px'
            this.$refs.content.style.top = top + window.scrollY +'px'
            let eventHandler = () => {
              this.visible = false
              document.removeEventListener('click', eventHandler)
            }
            document.addEventListener('click', eventHandler)
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
  }
  .content-wrapper {
    position: absolute;
    box-shadow: 0 0 10px 0px rgba(0,0,0,.3);
    transform: translateY(-100%);
  }
</style>