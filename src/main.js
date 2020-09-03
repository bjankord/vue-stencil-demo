import Vue from 'vue'
import App from './App.vue'

import { applyPolyfills, defineCustomElements } from 'stencil-boilerplate/loader';

Vue.config.productionTip = false

// Tell Vue to ignore all components defined in the stencil-boilerplate package.
// The regex assumes all components names are prefixed with 'test'
Vue.config.ignoredElements = [/gc-\w*/];

// Bind the custom elements to the window object
applyPolyfills().then(() => {
  defineCustomElements();
});

new Vue({
  render: h => h(App),
}).$mount('#app')
