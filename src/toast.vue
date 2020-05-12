<template>
  <div class='toast'>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'wickToast'
  }
</script>

<style scoped lang='scss'>
  $font-size: 14px;
  $toast-height: 40px;
  $toast-bg: rgba(0,0,0,.75);
  .toast{
    border: 1px solid lightcoral;
    position: fixed;
    height: $toast-height;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    background: $toast-bg;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0,0,0, 0.5);
    padding: 0 16px;
  }
</style>