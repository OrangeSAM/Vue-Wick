<template>
  <div>
    <button class="w-button" :class="{[`icon-${iconPosition}`]: true}">
      <w-icon v-if="icon" :name="icon"></w-icon>
      <div class="content">
        <slot></slot>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String
    },
    iconPosition: {
      type: String,
      default: "left",
      // 防止用户传up这种预料之外的position过来
      validator(value) {
        // 举例right right !== left(true) right !== right (false)
        // 举例up up !== left(true) up !== right(true)
        // 即 既不满足left 还不满足right 那就不行了
        if (value !== "left" && value !== "right") {
          return false;
        } else {
          return true;
        }
        // 更牛逼的写法
        // return value === 'left' || value === 'right'
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.w-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  > .content {
    order: 2;
    margin-left: 5px;
  }
  > .w-icon {
    order: 1;
  }
  &.icon-right {
    > .content {
      order: 1;
      margin-left: 0;
      margin-right: 5px;
    }
    > .w-icon {
      order: 2;
    }
  }
}
</style>