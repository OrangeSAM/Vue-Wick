<template>
  <svg class="w-icon">
    <use :xlink:href="`#w-${name}`" />
  </svg>
</template>

<script>
export default {
  props: ["name"]
};
</script>

<style>
/* 图标跟字一样高就好了 */
.w-icon {
  width: 1em;
  height: 1em;
}
</style>