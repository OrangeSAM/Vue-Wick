import Toast from './toast'

let currentToast

export default {
  install (Vue, options) {
    // 这里的vue是使用传入的，只是引用
    Vue.prototype.$toast = function (message, toastOptions) {
      if (currentToast) {
        currentToast.close()
      }
      currentToast = createToast({Vue, message, propsData: toastOptions, onClose: () => {currentToast = null}})
    }
  }
}
function createToast ({Vue, message, propsData, onclose}) {
  let Constructor = Vue.extend(Toast)
  // 这里应优先使用组件而不是 js 原生API
  // 这样，可以在组件内用@click 形式的事件处理，而不是原生的addEventListener
  let toast = new Constructor({propsData})
  // 要放在mount前面
  toast.$slots.default = [message]
  toast.$mount()
  toast.$on('close', onclose)
  document.body.appendChild(toast.$el)
  return toast
}