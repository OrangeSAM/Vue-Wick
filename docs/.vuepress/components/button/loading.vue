<template>
  <div class='loading'>
    <example-wrap>
      <w-button type='warning' :loading='isLoading' @click='loading = !loading'>提交</w-button>
      <w-button type='success' :loading='isLoading' @click='loading = !loading'>成功按钮</w-button>
      <w-button type='info' :loading='isLoading' @click='loading = !loading'>成功按钮</w-button>
      <w-button type='error' :loading='isLoading' @click='loading = !loading'>成功按钮</w-button>
    </example-wrap>
    <code-wrap :content="loading">
      <template v-slot:intro="scope">
        按钮加载中效果
      </template>
    </code-wrap>
  </div>
</template>

<script>
  import ExampleWrap from '../util/example-wrap'
  import WButton from '../../../../src/button'
  import CodeWrap from '../util/code-wrap'
  export default {
    name: "loading",
    components: {WButton, ExampleWrap, CodeWrap},
    data () {
      return {
        isLoading: false,
        loading: `
    <w-button type='warning' :loading='loading'>提交</w-button>
    <w-button type='success' :loading='loading'>成功按钮</w-button>
    <w-button type='info' :loading='loading'>成功按钮</w-button>
    <w-button type='error' :loading='loading'>成功按钮</w-button>
        `
      }
    }
  }
</script>

<style scoped lang="stylus">
  .loading
    margin-top 20px
</style>