import Vue from "vue";

import Button from "./button";
import Icon from "./icon";
import ButtonGroup from "./button-group";

import Input from "./input";
Vue.component("w-button", Button);
Vue.component("w-icon", Icon);
Vue.component("w-button-group", ButtonGroup);
Vue.component("w-input", Input);
new Vue({
  el: "#app",
  data: {
    loading1: true
  }
});

// 单元测试
import chai from "chai";
import spies from "chai-spies";
chai.use(spies);
const expect = chai.expect;
// 测试icon
{
  const Constructor = Vue.extend(Button);
  const button = new Constructor({
    propsData: {
      icon: "settings"
    }
  });
  button.$mount();
  let useElement = button.$el.querySelector("use");
  expect(useElement.getAttribute("xlink:href")).to.eq("#w-settings"); // 测试通过
  button.$el.remove();
  button.$destroy();
}
// 测试loading
{
  const Constructor = Vue.extend(Button);
  const button = new Constructor({
    propsData: {
      icon: "settings",
      loading: true
    }
  });
  button.$mount();
  let useElement = button.$el.querySelector("use");
  let href = useElement.getAttribute("xlink:href");
  expect(href).to.eq("#w-loading");
  button.$el.remove();
  button.$destroy();
}
// 测试icon位子
{
  const div = document.createElement("div");
  document.body.appendChild(div);
  const Constructor = Vue.extend(Button);
  const button = new Constructor({
    propsData: {
      icon: "settings",
      loadPosition: "right"
    }
  });
  button.$mount(div);
  let svg = button.$el.querySelector("svg");
  let { order } = window.getComputedStyle(svg);
  expect(order).to.eq("1");
  button.$el.remove();
  button.$destroy();
}
// 测试click函数
{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: "settings"
    }
  });
  vm.$mount();
  let spy = chai.spy(function() {});
  vm.$on("click", spy);
  let button = vm.$el;
  button.click();
  expect(spy).to.have.been.called();
}
