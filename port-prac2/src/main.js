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

import { BListGroup } from 'bootstrap-vue'
Vue.component('b-list-group', BListGroup)

import { BListGroupItem } from 'bootstrap-vue'
Vue.component('b-list-group-item', BListGroupItem)

import { BMedia } from 'bootstrap-vue'
Vue.component('b-media', BMedia)

import { BImg } from 'bootstrap-vue'
Vue.component('b-img', BImg)

import { BLink } from 'bootstrap-vue'
Vue.component('b-link', BLink)

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  template: "<BContainer></BConatiner>",
  components: { },
  router,
  store,
  render: h => h(App)
}).$mount("#app");
