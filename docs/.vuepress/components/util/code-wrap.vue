<!--代码包裹组件，代码通过props传入-->
<template>
  <div v-highlight class="code-wrap">
    <div v-show='showCode' class='detail-wrap'>
      <div class="intro">
        <slot name="intro"></slot>
      </div>
      <div class="code">
        <pre class='pre'>
          {{content}}
        </pre>
      </div>
    </div>

    <div class="operate-bar" @click='showCode = !showCode'>
      <span>{{ !showCode ? '显示代码' : '隐藏代码'}}</span>
    </div>
  </div>
</template>

<script>
  import hljs from 'highlight.js'
  import 'highlight.js/styles/monokai-sublime.css'
  export default {
    name: "code-wrap",
    props: {
      content: {
        type: String
      }
    },
    data () {
      return {
        showCode: false
      }
    },
    methods: {
    },
    directives: {
      highlight: {
        inserted: function (el) {
          let blocks = el.querySelectorAll('pre');
          blocks.forEach((block)=>{
            hljs.highlightBlock(block)
          })
        }
      }
    },
  }
</script>

<style scoped lang="stylus">
  .code-wrap
    font-size 14px
    color #5e6d82
    transition all .3s
    padding 20px
    border-radius 0 0 5px 5px
    background-color #fafafa
    &:hover
      cursor pointer
      box-shadow 0 2px 6px 0 lightgray
    .detail-wrap
      transition all 3s
      .intro
        padding 1em
        background-color white
        border 1px solid #ebebeb
        border-radius 3px
      .code
        .pre
          font-family sans-serif
          background-color black

    .operate-bar
      text-align center
</style>