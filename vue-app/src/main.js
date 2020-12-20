import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./scss/_normalize.scss";
import "./scss/styles.scss";

Vue.config.productionTip = false;

// Шина
export const eventEmitter = new Vue();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
