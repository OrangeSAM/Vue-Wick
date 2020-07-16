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
  </div>
</template>

<script>
  import ExampleWrap from '../util/example-wrap'
  import WButton from '../../../../src/button'
  export default {
    name: "with-icon",
    components: {WButton, ExampleWrap},
    data () {
      return {
        loading: true
      }
    }
  }
</script>

<style scoped lang='stylus'>
  .with-icon
    margin-top 20px
</style>