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
            default: 0
        },
        offset: {
            type: [Number, String],
            default: 0
        }
    },
    computed: {
        colClass () {
            let {span, offset} = this
            return [
                span && `col-${span}`,
                offset && `offset-${offset}`
            ]
        }
    }
}
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
    }
</style>