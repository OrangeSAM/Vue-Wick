<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "w-layout",

    data () {
      return {
        hasAside: false
      }
    },
    computed: {
      layoutClass () {
        let classArr = []
        if (this.hasAside) {
          classArr.push('has-aside')
        }
        return classArr
      }
    },
    mounted() {
      // 判断子组件中是否含有aside组件，如果有则添加相关类
      this.$children.forEach(vm => {
        if (vm.$options.name === 'w-aside') {
          this.hasAside = true
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  .layout{
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    &.has-aside {
      flex-direction: row;
     }
  }
</style>