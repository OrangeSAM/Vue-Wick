<template>
  <div class='toast'>
    <slot></slot>
    <div class='line'></div>
    <span v-if='closeBtn' class='close' @click='onClickCloseBtn'>{{closeBtn.text}}</span>
  </div>
</template>

<script>
  export default {
    name: 'wickToast',
    // 只是个配置
    props: {
      autoClose: {
        type: Boolean,
        default: true
      },
      delayTime: {
        type: Number,
        default: 3
      },
      closeBtn: {
        type: Object,
        // 不同于上面的3，对象是引用，每次创建一个新组件，里头默认值会是一样的(即改动一个组件的props, 会影响另一个组件的)
        // 所以每次都需要重新返回一个对象
        // 有点像data里的return，
        // 但凡是对象，都要用函数return
        default () {
          return {
            text: '关闭',
            callback: undefined
          }
        }
      },
      enableHTML: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      close () {
        // remove和destroy 分别作了什么
        // 把对象从它所属的 DOM 树中删除。
        // 对应 Vue 实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁。
        this.$el.remove()
        // destroy并不会删除dom
        this.$destroy()
      },
      log () {
        console.log(2)
      },
      onClickCloseBtn () {
        this.close()
        // 传了这个props 且是函数才执行
        if (this.closeBtn && typeof this.closeBtn.callback === 'function') {
          // 如果用户的回调想获取组件内的东西
          // 传一个当前的实例this给他
          this.closeBtn.callback(this)
        }
      }
    },
    mounted () {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.delayTime * 1000)
      }
    }
  }
</script>

<style scoped lang='scss'>
  $font-size: 14px;
  $toast-min-height: 40px;
  $toast-bg: rgba(0, 0, 0, .75);
  .toast {
    height: $toast-min-height;
    background: $toast-bg;
    color: white;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
    padding: 0 16px;
    position: fixed;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
  }
  .close {
    padding-left: 15px;
  }
  .line {
    width: 1px;
    height: 100%;
    border-left: 1px solid #666666;
    margin-left: 15px;
  }
</style>