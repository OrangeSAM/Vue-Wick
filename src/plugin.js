import Toast from './toast'
export default {
  install(Vue, options) {
    // 这里的vue是使用传入的，只是引用
    Vue.prototype.$toast = function (message) {
      let Constructor = Vue.extend(Toast)
      let toast = new Constructor()
      // 要放在mount前面
      toast.$slots.default = [message]
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}