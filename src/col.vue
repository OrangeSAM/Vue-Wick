<template>
  <div class="col" :class="[`col-${span}`]">
      <slot><slot>
  </div>
</template>

<script>
export default {
    name: 'wick-col',
    props: {
        // 不写span 默认平均分配，
        // 写了span 按需分配
        span: {
            type: [Number, String],
            default: 0
        }
    }
}
</script>

<style lang="scss" scoped>
    .col{
        height: 100px;
        background: beige;
        width: 50%;
        border: 1px solid red;
        $class-prefix: col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%
            }
        }
    }
</style>