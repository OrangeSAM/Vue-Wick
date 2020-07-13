<template>
  <div class="code-wrap">
    <div>
      <div class="intro">
        <slot name="intro"></slot>
      </div>
      <div class="code">
        <pre>
          {{content}}
        </pre>
      </div>

    </div>

    <div class="operate-bar">
      显示代码
    </div>
  </div>
</template>

<script>
  export default {
    name: "code-wrap",
    props: {
      content: {
        type: String
      }
    }
  }
</script>

<style scoped lang="stylus">
  .code-wrap
    padding 20px
    background-color #999999
</style>