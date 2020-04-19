import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ShineDirective from "./shared/shine-directive";
import currencyFilter from "./shared/filters/currencyFilter";

Vue.directive("shine", ShineDirective);
Vue.filter("currency", currencyFilter);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
