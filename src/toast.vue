<template>
  <div class="wrap" :class='toastClass'>
    <div class='toast' ref='toast'>
      <div class='message'>
        <slot v-if='!enableHTML'></slot>
        <div v-else v-html='$slots.default[0]'></div>
      </div>
      <div class='line' ref='line'></div>
      <span v-if='closeBtn' class='close' @click='clickCloseBtn'>{{closeBtn.text}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'wickToast',
    // 只是个配置
    props: {
      // 是否自动关闭
      autoClose: {
        type: Number,
        default: 3,
        validator(value) {
          return typeof value === 'number'
        }
      },
      // 关闭按钮
      closeBtn: {
        type: Object,
        // 不同于上面的3，对象是引用，每次创建一个新组件，里头默认值会是一样的(即改动一个组件的props, 会影响另一个组件的)
        // 所以每次都需要重新返回一个对象
        // 有点像data里的return，
        // 但凡是对象，都要用函数return
        default() {
          return {
            text: '关闭',
            callback: undefined
          }
        }
      },
      // 是否允许传入HTML
      enableHTML: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'top',
        validator(value) {
          return ['top', 'bottom', 'middle'].indexOf(value) >= 0
        }
      }
    },
    computed: {
      toastClass() {
        return {
          [`position-${this.position}`]: true
        }
      }
    },
    methods: {
      // 关闭toast的清理
      close() {
        // remove和destroy 分别作了什么
        // 把对象从它所属的 DOM 树中删除。
        // 对应 Vue 实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁。
        this.$el.remove()
        // destroy并不会删除dom
        this.$destroy()
      },
      log() {
        console.log('组件内部的点击回调事件')
      },
      // 用户点击关闭按钮
      clickCloseBtn() {
        this.close()
        // 传了这个props 且是函数才执行
        if (this.closeBtn && typeof this.closeBtn.callback === 'function') {
          // 如果用户的回调想获取组件内的东西
          // 传一个当前的实例this给他
          this.closeBtn.callback(this)
        }
      },
      // 执行自动 关闭
      execAutoClose() {
        if (this.autoClose) {
          setTimeout(() => {
            this.close()
          }, this.autoClose * 1000)
        }
      },
      // 用tricky的方式来设定竖线的高度
      setLineHeight() {
        this.$nextTick(() => {
          this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
        })
      }
    },
    mounted() {
      this.execAutoClose()
      this.setLineHeight()
    }
  }
</script>

<style scoped lang='scss'>
  $font-size: 14px;
  $toast-min-height: 40px;
  $toast-bg: rgba(0, 0, 0, .75);
  $animation-duration: 600ms;
  @keyframes slide-up {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
  @keyframes slide-down {
    0% {
      opacity: 0;
      transform: translateY(-100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .wrap {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);

    &.position-top {
      top: 0px;
      .toast {
        border-radius: 0 0 4px 4px;
        animation: slide-down $animation-duration;
      }
    }

    &.position-bottom {
      bottom: 0px;
      .toast {
        border-radius: 4px 4px 0 0;
        animation: slide-up $animation-duration;
      }
    }

    &.position-middle {
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      .toast {
        animation: fade-in $animation-duration;
      }
    }
  }

  .toast {
    /*用最小高度会导致line中的height 100%不生效*/
    min-height: $toast-min-height;
    background: $toast-bg;
    color: white;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
    padding: 0 16px;
    display: flex;
    align-items: center;

    .message {
      padding: 5px 0;
    }

    .close {
      cursor: pointer;
      padding-left: 15px;
      flex-shrink: 0;
    }

    .line {
      width: 1px;
      height: 100%;
      border-left: 1px solid #666666;
      margin-left: 15px;
    }

  }
</style>