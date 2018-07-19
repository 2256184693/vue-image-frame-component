import Vue from 'vue';

import demo from './demo.vue';

new Vue({
  el: '#app',
  render(createElement) {
    return createElement(demo)
  }
});