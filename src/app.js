import Vue from "vue"
import Button from "./button/button"
import Icon from "./icon/icon"
import ButtonGroup from "./button/button-group"
import Input from "./input/input"
import Row from './layout/row'
import Col from './layout/col'
import Layout from './layout/layout'
import Aside from './container/aside'
import Footer from './container/footer'
import Content from './container/content'
import Header from './container/header'
import Plugin from './toast/plugin'
import Tabs from './tabs/tabs'
import TabsBody from './tabs/tabs-body'
import TabsHead from './tabs/tabs-head'
import TabsItem from './tabs/tabs-item'
import TabsPane from './tabs/tabs-pane'
import Popover from './popover/popover'
import Collapse from './collapse/collapse'
import CollapseItem from './collapse/collapse-item'


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