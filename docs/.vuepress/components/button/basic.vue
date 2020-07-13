<template>
  <div class='basic'>
    <example-wrap>
      <div class='code-wrap'>
        <w-button>默认按钮</w-button>
        <w-button type='primary'>主要按钮</w-button>
        <w-button type='success'>成功按钮</w-button>
        <w-button type='info'>信息按钮</w-button>
        <w-button type='warning'>警告按钮</w-button>
        <w-button type='error'>危险按钮</w-button>
      </div>
      <div class='code-wrap'>
        <w-button round >默认按钮</w-button>
        <w-button round type='primary'>主要按钮</w-button>
        <w-button round type='success'>成功按钮</w-button>
        <w-button round type='info'>信息按钮</w-button>
        <w-button round type='warning'>警告按钮</w-button>
        <w-button round type='error'>危险按钮</w-button>
      </div>
    </example-wrap>
  </div>
</template>

<script>
  import WButton from '../../../../src/button';
  import ExampleWrap from '../util/example-wrap'
  export default {
    name: "demo-button",
    components: {WButton, ExampleWrap},
    data () {
      return {
        loading1: false
      }
    },
  }
</script>

<style scoped lang='stylus'>
  .basic
    .code-wrap
      margin 20px
</style>