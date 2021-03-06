const expect = chai.expect;
import Vue from "vue";
import Toast from "../src/toast";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Toast", () => {
  it("存在.", () => {
    expect(Toast).to.exist;
  });
  // 一个it就是一个测试用例，
  describe('props', function () {
    it('接受autoClose', (done) => {
      let div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          autoClose: 1
        }
      }).$mount(div)
      vm.$on('close', () => {
        expect(document.body.contains(vm.$el)).to.eq(false)
        done()
      }).catch(done())
    })
    it('接受 closeButton', (done) => {
      const callback = sinon.fake();
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          closeBtn: {
            text: '关闭吧',
            callback
          }
        }
      }).$mount()
      let closeButton = vm.$el.querySelector('.close')
      expect(closeButton.textContent.trim()).to.eq('关闭吧')
      setTimeout(() => {
        closeButton.click()
        expect(callback).to.have.been.called
        done()
      },200)
    })
    it('接受 HTML', () => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {enableHTML: true}
      })
      vm.$slots.default = ['<strong id="test">test</strong>']
      vm.$mount()
      let strong = vm.$el.querySelector('#test')
      expect(strong).to.exist
    });
    it('接受position', () => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {position: 'bottom'}
      }).$mount()
      expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
    });
  })
});
