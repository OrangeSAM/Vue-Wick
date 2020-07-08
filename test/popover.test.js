const expect = chai.expect;
import Vue from "vue";
import Popover from "../src/popover";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('popover', () => {
  it('存在', () => {
    expect(Popover).to.be.ok()
  })
})