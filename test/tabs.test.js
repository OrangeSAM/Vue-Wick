const expect = chai.expect;
import Vue from "vue";
import Tabs from "../src/tabs";
import TabsHead from "../src/tabs-head";
import TabsBody from "../src/tabs-body";
import TabsItem from "../src/tabs-item";
import TabsPane from "../src/tabs-pane";

Vue.component('w-tabs', Tabs)
Vue.component('w-tabs-head', TabsHead)
Vue.component('w-tabs-body', TabsBody)
Vue.component('w-tabs-item', TabsItem)
Vue.component('w-tabs-pane', TabsPane)

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Tabs", () => {
  it("存在", () => {
    expect(Tabs).to.exist;
  });
  // 一个it就是一个测试用例，
  it('接受selected属性', (done) => {
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
      let x = vm.$el.querySelector('.tabs-item[data-name="finance"]')
      expect(x.classList.contains('active')).to.be.true
      done()
    })
  })
  it('可以接受 direction prop', () => {

  })
});
