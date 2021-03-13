<template>
  <div class='basic'>
    <example-wrap>
      <div style='margin-bottom: 20px'>
        <w-button>默认按钮</w-button>
        <w-button type='primary'>主要按钮</w-button>
        <w-button type='success'>成功按钮</w-button>
        <w-button type='info'>信息按钮</w-button>
        <w-button type='warning'>警告按钮</w-button>
        <w-button type='error'>危险按钮</w-button>
      </div>
      <div>
        <w-button round >默认按钮</w-button>
        <w-button round type='primary'>主要按钮</w-button>
        <w-button round type='success'>成功按钮</w-button>
        <w-button round type='info'>信息按钮</w-button>
        <w-button round type='warning'>警告按钮</w-button>
        <w-button round type='error'>危险按钮</w-button>
      </div>
    </example-wrap>
    <code-wrap :content="basicCode">
      <template v-slot:intro="scope">
        基础的按钮用法
      </template>
    </code-wrap>
  </div>
</template>

<script>
  import WButton from '../../../../src/button/button';
  import ExampleWrap from '../util/example-wrap'
  import CodeWrap from '../util/code-wrap'
  export default {
    name: "demo-button",
    components: {WButton, ExampleWrap, CodeWrap},
    data () {
      return {
        loading1: false,
        basicCode: `
    <w-button>默认按钮</w-button>
    <w-button type='primary'>主要按钮</w-button>
    <w-button type='success'>成功按钮</w-button>
    <w-button type='info'>信息按钮</w-button>
    <w-button type='warning'>警告按钮</w-button>
    <w-button type='error'>危险按钮</w-button>

    <w-button round >默认按钮</w-button>
    <w-button round type='primary'>主要按钮</w-button>
    <w-button round type='success'>成功按钮</w-button>
    <w-button round type='info'>信息按钮</w-button>
    <w-button round type='warning'>警告按钮</w-button>
    <w-button round type='error'>危险按钮</w-button>`
      }
    },
    mounted () {
    }
  }
</script>

<style scoped lang='stylus'>
  .basic
    margin-top 20px
</style>