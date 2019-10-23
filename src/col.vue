<template>
  <div class="col" :class="colClass">
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
        },
        offset: {
            type: [Number, String],
            default: 0
        }
    },
    computed: {
        colClass () {
            let {span, offset} = this
            // 解构赋值
            return [
                span && `col-${span}`,
                offset && `offset-${offset}`
            ]
        }
    }
}
// todo 自适应系统
</script>

<style lang="scss" scoped>
    .col{
        height: 100px;
        background: beige;
        margin-left: 20px;
        $class-prefix: col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%
            }
        }
        $class-prefix: offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n / 24) * 100%
            }
        }
        // 问题1，如果是行首的话，这样会少了第一个col 的margin-left: 20px， 参照element才是对的，
        // 问题2，row与col的gutter如何实现，目前是参照MDN官网的row 右padding, col 左margin
    }
</style>