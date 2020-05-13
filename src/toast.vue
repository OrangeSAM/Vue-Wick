<template>
  <div class='toast'>
    <slot></slot>
    <div class='line'></div>

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
        // 不同于上面的3，对象是引用
        // 所以每次都需要重新返回一个对象
        // 有点像data里的return
        default: () => {
          return {
            text: '关闭',
            callback: (toast) => {
              toast.close()
            }
          }
        }
      }
    },
    methods: {
      close () {
        console.log(this)
        // remove和destroy 分别作了什么
        // 把对象从它所属的 DOM 树中删除。
        // 对应 Vue 实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁。
        this.$el.remove()
        // 并不会删除dom
        this.$destroy()
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
  $toast-height: 40px;
  $toast-bg: rgba(0, 0, 0, .75);
  .toast {
    position: fixed;
    height: $toast-height;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    background: $toast-bg;
    color: white;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
    padding: 0 16px;
  }
</style>