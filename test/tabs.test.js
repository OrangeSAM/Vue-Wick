const expect = chai.expect;
import Vue from "vue";
import Tabs from "../src/tabs";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Tabs", () => {
  it("存在.", () => {
    expect(Tabs).to.exist;
  });
  // 一个it就是一个测试用例，
  it('子组件只能是 tabs-head 和 tabs-body', (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
        <w-tabs selected="finance">
          <w-tabs-head>
            <w-tabs-item name="woman">beauty</w-tabs-item>
            <w-tabs-item name="finance">finance</w-tabs-item>
          </w-tabs-head>
          <w-tabs-body>
            <w-tabs-pane name="woman">beauty相关</w-tabs-pane>
            <w-tabs-pane name="finance">finance相关</w-tabs-pane>
          </w-tabs-body>
        </w-tabs>
    `
    let vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      console.log(vm.$el)
      let x = vm.$el.querySelector('.tabs-item[data-name="finance]')
      console.log(x)
      console.log('*********')
      expect(x.classList.contains('active')).to.be.true
      done()
    })
  })
});
