<template>
  <div>
    <w-button>默认按钮</w-button>
    <w-button icon='settings'>默认按钮</w-button>
  </div>
</template>

<script>
  import Button from '../../../src/button';
  export default {
    name: "demo-button",
    components: {'w-button': Button}
  }
</script>

<style scoped>

</style>