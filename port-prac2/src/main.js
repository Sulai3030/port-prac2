import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap-vue";
import "./assets/app.scss";
import { BCard } from 'bootstrap-vue'
Vue.component('b-card', BCard)

import { BContainer } from 'bootstrap-vue'
Vue.component('b-container', BContainer)

import { BCardText } from 'bootstrap-vue'
Vue.component('b-card-text', BCardText)

import { BCol } from 'bootstrap-vue'
Vue.component('b-col', BCol)

import { BRow } from 'bootstrap-vue'
Vue.component('b-row', BRow)

import { BCardGroup } from 'bootstrap-vue'
Vue.component('b-card-group', BCardGroup)

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  template: "<BContainer></BConatiner>",
  components: { },
  router,
  store,
  render: h => h(App)
}).$mount("#app");
