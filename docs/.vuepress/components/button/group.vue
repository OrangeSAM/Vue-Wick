<template>
  <div class='btn-group'>
    <example-wrap>
      <w-button-group>
        <w-button icon="left">上一页</w-button>
        <w-button icon="right" icon-position="right">下一页</w-button>
      </w-button-group>
    </example-wrap>
    <code-wrap :content="group">
      <template v-slot:intro="scope">
        按钮组
      </template>
    </code-wrap>
  </div>
</template>

<script>
  import ExampleWrap from '../util/example-wrap'
  import WButton from '../../../../src/button/button'
  import WButtonGroup from '../../../../src/button/button-group'
  import CodeWrap from '../util/code-wrap'
  export default {
    name: "group",
    components: {WButton, ExampleWrap, CodeWrap, WButtonGroup},
    data () {
      return {
        group: `
    <w-button-group>
      <w-button icon="left">上一页</w-button>
      <w-button icon="right" icon-position="right">下一页</w-button>
    </w-button-group>`
      }
    }
  }
</script>

<style scoped lang='stylus'>
  .btn-group
    margin-top 20px
</style>