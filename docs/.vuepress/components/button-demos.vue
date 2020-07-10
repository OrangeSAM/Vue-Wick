<template>
  <div>
    <w-button>
      登录
    </w-button>
    <w-button :disabled="true">
      禁用状态的登录
    </w-button>
    <w-button icon="settings" icon-position="right">
      设置
    </w-button>
    <w-button icon="settings">
      设置
    </w-button>
    <w-button icon="loading"
              icon-position="right"
              :loading="loading1"
              @click="loading1 = !loading1">
      加载中，图标在右边
    </w-button>
    <w-button icon="loading"
              :loading="loading1"
              @click="loading1 = !loading1">
      加载中，图标在左边
    </w-button>
  </div>
</template>

<script>
  import Button from '../../../src/button';
  export default {
    name: "demo-button",
    components: {'w-button': Button},
    data () {
      return {
        loading1: false
      }
    }
  }
</script>

<style scoped>

</style>