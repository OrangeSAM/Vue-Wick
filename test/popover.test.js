const expect = chai.expect;
import Vue from "vue";
import Popover from "../src/popover";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('popover', () => {
  it('存在', () => {
    expect(Popover).to.exist
  })

  it('可以设置position', (done) => {
    Vue.component('w-popover', Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <w-popover position='bottom' ref='divRef'>
        <template slot='content'>
          弹出内容
        </template>
        <button>点我</button>
      </w-popover>
    `
    const vm = new Vue({
      el: div
    })
    vm.$el.querySelector('button').click()
    setTimeout(() => {
      setTimeout(() => {
        const {content} = vm.$refs.divRef.$refs
        console.log(vm.$refs.divRef.$refs)
        expect(content.classList.contains('position-bottom')).to.be.true
      }, 500)
      done()
    }, 400)
  })
})