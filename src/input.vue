<template>
  <div class="wrapper" :class="{error}">
    <input
      :value="value"
      type="text"
      :disabled="disabled"
      :readonly="readonly"
      @change="$emit('change', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
      @input="$emit('input', $event.target.value)"
    />
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
    readonly: {
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
// 为什么用readOnly做变量名就不行，导致属性只能传递到div上，
// 而必须使用readonly
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