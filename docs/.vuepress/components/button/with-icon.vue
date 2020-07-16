<template>
  <div class='with-icon'>
    <example-wrap>
      <w-button icon='search'></w-button>
      <w-button type='primary' icon='download'>主要按钮</w-button>
      <w-button type='success' icon='laud'>成功按钮</w-button>
      <w-button type='info' icon='laud'>成功按钮</w-button>
      <w-button type='warning' :loading='loading'>成功按钮</w-button>
      <w-button type='error' icon='laud'>成功按钮</w-button>
    </example-wrap>
    <code-wrap :content="withIcon">
      <template v-slot:intro="scope">
        图标按钮
      </template>
    </code-wrap>
  </div>
</template>

<script>
  import ExampleWrap from '../util/example-wrap'
  import WButton from '../../../../src/button'
  import CodeWrap from '../util/code-wrap'

  export default {
    name: "with-icon",
    components: {WButton, ExampleWrap, CodeWrap},
    data () {
      return {
        loading: true,
        withIcon: `
    <w-button icon='search'></w-button>
    <w-button type='primary' icon='download'>主要按钮</w-button>
    <w-button type='success' icon='laud'>成功按钮</w-button>
    <w-button type='info' icon='laud'>成功按钮</w-button>
    <w-button type='warning' :loading='loading'>成功按钮</w-button>
    <w-button type='error' icon='laud'>成功按钮</w-button>`
      }
    }
  }
</script>

<style scoped lang='stylus'>
  .with-icon
    margin-top 20px
</style>