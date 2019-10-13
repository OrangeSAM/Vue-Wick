<template>
  <div class="wrapper" :class="error">
    <input :value="value" type="text" :disabled="disabled" :readonly="readOnly" />
  </div>
</template>

<script>
export default {
  name: "wick-input",
  props: {
    value: {
      type: String
    },
    disabled: {
      value: {
        type: Boolean,
        default: false
      }
    },
    readOnly: {
      value: {
        type: Boolean,
        default: false
      }
    },
    error: {
      value: {
        type: String
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$font-size: 14px;
$border-color-hover: #666;
$box-shadow-color: rgba(0, 0, 0, 0.5);
.wrapper {
  display: inline;
  font-size: $font-size;
  &.error {
      > input 
  }
  > input {
    height: 32px;
    border: 1px solid $border-color;
    border-radius: 4px;
    padding: 0 8px;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      outline: none;
      box-shadow: inset 0 1px 3px $box-shadow-color;
    }
    &[disabled] {
      cursor: not-allowed;
    }
  }
}
</style>