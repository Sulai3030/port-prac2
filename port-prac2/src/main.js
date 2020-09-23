import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap-vue";
import "./assets/app.scss";


Vue.component(
  "b-link",
  "b-card",
  "b-card-text",
  "b-container",
  "b-row",
  "b-col"
);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  template: '<App>',
  components: { App },
  router,
  store,
  render: h => h(App)
}).$mount("#app");
