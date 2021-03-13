<template>
  <div class="row" :style="{marginLeft: -gutter/2 + 'px', marginRight: -gutter/2 + 'px'}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "wick-row",
  props: {
    gutter: {
      type: [Number, String]
    }
  },
  provide: function() {
    return {
      gutter: this.gutter
    };
  }
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
}
</style>