<template>
  <div class='popover'
       ref="popover">
    <div ref="content"
         :class="{[`position-${position}`]: true}"
         class='content-wrapper'
         v-if='visible'>
      <slot name='content' :close='close'></slot>
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
    props: {
      position: {
        type: String,
        default: 'top',
        validator(val) {
          return ['top', 'left', 'right', 'bottom'].indexOf(val) >= 0
        }
      },
      trigger: {
        type: String,
        default: 'hover',
        validator(val) {
          return ['hover', 'click'].indexOf(val) >= 0
        }
      }
    },
    mounted() {
      if (this.trigger === 'click') {
        this.$refs.popover.addEventListener('click', this.wrapClick)
      } else {
        this.$refs.popover.addEventListener('mouseenter', this.open)
        this.$refs.popover.addEventListener('mouseleave', this.close)
      }
    },
    destroyed() {
      if (this.trigger === 'click') {
        this.$refs.popover.removeEventListener('click', this.wrapClick)
      } else {
        this.$refs.popover.removeEventListener('mouseenter', this.open)
        this.$refs.popover.removeEventListener('mouseleave', this.close)
      }
    },
    methods: {
      // 定位内容区
      positionContent () {
        const {content, trigger} = this.$refs
        document.body.appendChild(content)
        const {top, left, height, width} = trigger.getBoundingClientRect()
        const {height: height2} = content.getBoundingClientRect()
        let positionMap = {
          top: {
            top: top + window.scrollY,
            left: left + window.scrollX
          },
          bottom: {
            top: top + height +  window.scrollY,
            left: left + window.scrollX
          },
          left: {
            top: top + window.scrollY - Math.abs(height - height2) / 2,
            left: left + window.scrollX,
          },
          right: {
            top: top + window.scrollY - Math.abs(height - height2) / 2,
            left: left + window.scrollX + width
          }
        }
        content.style.left = positionMap[this.position].left + 'px'
        content.style.top = positionMap[this.position].top + 'px'

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
    position: absolute;
    /*解决内容部分无节制横向展示问题*/
    max-width: 20em;
    /*单词折行问题*/
    word-break: break-all;
    /*使用box-shadow，而下面的小三角会无法添加到有效的阴影，因为进行了形状处理，所以采用filter实现*/
    /*box-shadow: 0 0 10px 0px rgba(0, 0, 0, .3);*/
    filter: drop-shadow(0 0 2px rgba(0,0,0, .3));
    background-color: white;
    &::before, &::after{
      content: '';
      display: block;
      border: 10px solid transparent;
      width: 0;
      height: 0;
      position: absolute;
    }
    &.position-top{
      transform: translateY(-100%);
      margin-top: -10px;
      &::before, &::after{
        left: 10px;
      }
      &::before{
        border-bottom: none;
        border-top-color: $border-color;
        /*鼠标移到三角形周边，内容会一直抖动的原因*/
        /*检测到移除trigger后，内容区隐藏，隐藏后，鼠标又在trigger上了，如此循环往复*/
        /*修改border-color可观察清楚*/
        top: 100%;
      }
      &::after{
        border-bottom: none;
        border-top-color: white;
        top: calc(100% - 1px);
      }
    }
    &.position-bottom{
      margin-top: 10px;
      &::before, &::after{
        left: 10px;
      }
      &::before{
        border-top: none;
        border-bottom-color: $border-color;
        bottom: 100%;
      }
      &::after{
        border-top: none;
        border-bottom-color: white;
        bottom: calc(100% - 1px);
      }
    }
    &.position-left{
      transform: translateX(-100%);
      margin-left: -10px;
      &::before, &::after{
        transform: translateY(-50%);
        top: 50%;
      }
      &::before{
        border-right: none;
        left: 100%;
        border-left-color: $border-color;
      }
      &::after{
        border-right: none;
        left: calc(100% - 1px);
        border-left-color: white;
      }
    }
    &.position-right{
      margin-left: 10px;
      &::before, &::after{
        transform: translateY(-50%);
        top: 50%;
      }
      &::before{
        border-left: none;
        right: 100%;
        border-right-color: $border-color;
      }
      &::after{
        border-left: none;
        right: calc(100% - 1px);
        border-right-color: white;
      }
    }
  }
</style>