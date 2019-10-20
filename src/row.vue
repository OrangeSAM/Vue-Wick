<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  padding-right: 20px;
  border: 1px solid salmon;
}
</style>