import Vue from "vue"
import Button from "./button"
import Icon from "./icon"
import ButtonGroup from "./button-group"
import Input from "./input"
import Row from './row'
import Col from './col'
import Layout from  './layout'
import Aside from './aside'
import Footer from './footer'
import Content from './content'
import Header from './header'
import Plugin from './plugin'
import Tabs from './tabs'
import TabsBody from './tabs-body'
import TabsHead from './tabs-head'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'


// 这里注册时的w-button, 是供在template里使用组件时编写的
// 而在组件内部声明的name, 可以在vue-devtools中看到组件的名称，
// 可以用来标识组件，但并非唯一。
Vue.component("w-button", Button);
Vue.component("w-icon", Icon);
Vue.component("w-button-group", ButtonGroup);
Vue.component("w-input", Input);
Vue.component("w-row", Row)
Vue.component("w-col", Col)
Vue.component("w-layout", Layout)
Vue.component("w-header", Header)
Vue.component("w-content", Content)
Vue.component("w-footer", Footer)
Vue.component("w-aside", Aside)
Vue.use(Plugin)
Vue.component('w-tabs', Tabs)
Vue.component('w-tabs-body', TabsBody)
Vue.component('w-tabs-head', TabsHead)
Vue.component('w-tabs-item', TabsItem)
Vue.component('w-tabs-pane', TabsPane)
Vue.component('w-popover', Popover)
Vue.component('w-collapse', Collapse)
Vue.component('w-collapse-item', CollapseItem)
new Vue({
  el: "#app",
  data: {
    loading1: true,
    message: '我支持双向绑定',
    selectedTab: 'woman',
    selectedCollapse: ['2']
  },
  methods: {
    myInputChange(event) {
      console.log(event)
    },
    myInputInput(event) {
      console.log(event)
    },
    showMe () {
      this.$toast('我是一条message111', {
        autoClose: 41,
        closeBtn: {
          text: '关闭吧',
          callback: (toast) => {
            toast.log()
            console.log('用户信息')
          }
        }
      })
    },
    showMe1 () {
      this.$toast('<p>这是第一个P元素</p><p>这是第二个</p><p>这是第三个</p><p>这是第四个</p>', {
        enableHTML: true, position: 'bottom'
      })
    },
    showMe2 () {
      this.$toast('我是一条message', {
        position: 'middle'
      })
    },
    popoverClick () {
      console.log('使用popover时的点击')
    }
  }
});