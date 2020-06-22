<template>
  <div class='popover'
       ref="popover"
       @click='wrapClick'>
    <div ref="content"
         class='content-wrapper'
         v-if='visible'>
      <slot name='content'></slot>
    </div>
    <span ref="trigger" style='display: inline-block'>
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
        // 因为内容部分被移到popover组件外的document上
        if (this.$refs.content && (this.$refs.content === e.target || this.$refs.content.contains(e.target))) return
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
  $border-color: #999;
  $border-radius: 4px;
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }

  .content-wrapper {
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0.5em 0.7em;
    margin-top: -10px;
    position: absolute;
    /*解决内容部分无节制横向展示问题*/
    max-width: 20em;
    /*单词折行问题*/
    word-break: break-all;
    /*使用box-shadow，而下面的小三角会无法添加到有效的阴影，因为进行了形状处理，所以采用filter实现*/
    /*box-shadow: 0 0 10px 0px rgba(0, 0, 0, .3);*/
    filter: drop-shadow(0 0 2px rgba(0,0,0, .3));
    background-color: white;
    transform: translateY(-100%);
    &::before, &::after{
      content: '';
      display: block;
      border: 10px solid transparent;
      width: 0;
      height: 0;
      position: absolute;
      left: 10px;
    }
    &::before{
      border-top-color: $border-color;
      top: 100%;
    }
    &::after{
      border-top-color: white;
      top: calc(100% - 1px);
    }
  }
</style>