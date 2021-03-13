<template>
  <div class='not-allowed'>
    <example-wrap>
      <div style='margin-bottom: 20px'>
        <w-button disabled>默认按钮</w-button>
        <w-button disabled type='primary'>主要按钮</w-button>
        <w-button disabled type='success'>成功按钮</w-button>
        <w-button disabled type='info'>信息按钮</w-button>
        <w-button disabled type='warning'>警告按钮</w-button>
        <w-button disabled type='error'>危险按钮</w-button>
      </div>
      <div>
        <w-button disabled round >默认按钮</w-button>
        <w-button disabled round type='primary'>主要按钮</w-button>
        <w-button disabled round type='success'>成功按钮</w-button>
        <w-button disabled round type='info'>信息按钮</w-button>
        <w-button disabled round type='warning'>警告按钮</w-button>
        <w-button disabled round type='error'>危险按钮</w-button>
      </div>
    </example-wrap>
    <code-wrap :content="notAllowed">
      <template v-slot:intro="scope">
        按钮的禁用状态
      </template>
    </code-wrap>
  </div>
</template>

<script>
  import WButton from '../../../../src/button/button';
  import ExampleWrap from '../util/example-wrap';
  import CodeWrap from '../util/code-wrap'

  export default {
    name: "not-allowed",
    components: {WButton, ExampleWrap, CodeWrap},
    data () {
      return {
        loading1: false,
        notAllowed:`
    <w-button disabled>默认按钮</w-button>
    <w-button disabled type='primary'>主要按钮</w-button>
    <w-button disabled type='success'>成功按钮</w-button>
    <w-button disabled type='info'>信息按钮</w-button>
    <w-button disabled type='warning'>警告按钮</w-button>
    <w-button disabled type='error'>危险按钮</w-button>

    <w-button disabled round >默认按钮</w-button>
    <w-button disabled round type='primary'>主要按钮</w-button>
    <w-button disabled round type='success'>成功按钮</w-button>
    <w-button disabled round type='info'>信息按钮</w-button>
    <w-button disabled round type='warning'>警告按钮</w-button>
    <w-button disabled round type='error'>危险按钮</w-button>`
      }
    },
  }
</script>

<style scoped lang='stylus'>
  .not-allowed
    margin-top 20px
</style>