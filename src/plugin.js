export default {
  install(Vue, options) {
    // 这里的vue是使用传入的，只是引用
    Vue.prototype.$toast = function () {
      console.log(' iam toast')
    }
  }
}