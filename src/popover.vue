<template>
  <div class='popover'
       ref="popover"
       @click='wrapClick'>
    <div ref="content"
         class='content-wrapper'
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
      // 定位内容区
      positionContent () {
        document.body.appendChild(this.$refs.content)
        let {top, left} = this.$refs.trigger.getBoundingClientRect()
        this.$refs.content.style.left = left + window.scrollX + 'px'
        this.$refs.content.style.top = top + window.scrollY + 'px'
      },
      onClickDocument (e) {
        if (this.$refs.popover && (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))) return
        this.close()
      },
      open () {
        this.visible = true
        setTimeout(() => {
          this.positionContent()
          document.addEventListener('click', this.onClickDocument)
        }, 0)
      },
      close () {
        this.visible = false
        document.removeEventListener('click', this.onClickDocument)
      },
      // 组件wrap点击
      wrapClick(event) {
        if (this.$refs.trigger.contains(event.target)) {
          if (this.visible === true) {
            this.close()
          } else {
            this.open()
          }
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
    box-shadow: 0 0 10px 0px rgba(0, 0, 0, .3);
    transform: translateY(-100%);
  }
</style>