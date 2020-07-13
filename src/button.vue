<template>
  <button class="w-button"
          :disabled="disabled"
          :class="buttonClass"
          @click="wClick">
    <!--只要传了loading属性，那就不适用第一类icon-->
    <w-icon class="ml" v-if="icon && !loading" :name="icon" ></w-icon>
    <w-icon class="loading ml" v-if="loading" name="loading"></w-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
// 对于这里不是很明白，项目在之前不是已经全局注册了icon组件
// 因为app.js的注册，是供在index.html中用的？因为#app的挂载是html文件上，而不是在单文件组件中的原因？
import WIcon from "./icon";
export default {
  name: "wick-button",
  components: {WIcon},
  computed: {
    buttonClass () {
      // icon位置类
      let classArr = [`icon-${this.iconPosition}`]
      // 如果设置了禁用状态，添加禁用类
      if (this.disabled) {
        classArr.push('disabled')
      }
      if (this.round) {
        classArr.push('round')
      }
      return classArr
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    },
    loading: {
      // Boolean是类型，boolean是typeof 时的一个值
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
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
  },
  methods: {
    wClick() {
      this.$emit("click");
    }
  },
  mounted() {
  }
};
</script>

<style lang="scss" scoped>
  $font-size: 16px;
  $button-height: 32px;
  $button-bg: white;
  $border-radius: 4px;
  $color: #333;
  $border-color: #999;
  $border-color-hover: #666;
  $background-color-hover: #f1f1f1;
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.w-button {
  vertical-align: middle;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: $font-size;
  height: $button-height;
  /*为了按钮内的图标和文字水平对齐*/
  line-height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background-color: $button-bg;
  &:hover {
    cursor: pointer;
    border-color: $border-color-hover;
    background-color: $background-color-hover;
  }
  &:active {
    /*如果想让这个效果消失的慢点，该咋办呢，transition设置了，box-shadow会失效*/
    box-shadow: 0 0 10px 0 lightgray;
  }
  &:focus {
    /*去除useragent自带外边框*/
    outline: none;
  }
  &.disabled {
    box-shadow: none;
    cursor: not-allowed;
  }
  &.round {
    border-radius: 30px;
  }
  > .ml {
    margin-right: 5px;
  }
  > .content {
    order: 2;
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
    > .ml {
      margin-right: 0;
    }
    > .w-icon {
      order: 2;
    }
  }
  .loading {
    animation: spin 1.5s infinite linear;
  }

}
</style>