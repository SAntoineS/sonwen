import Vue from 'vue'
import hub from './hub/hub.vue'
import notFound from './404notFound/notFound.vue'
import './index.css'
import VueRouter from 'vue-router';
import VueCustomTooltip from '@adamdehaven/vue-custom-tooltip'
import app from "@/app";
import weather from "@/weather/weather";
import twitch from "@/twitch/twitch";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

library.add(fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueCustomTooltip)
Vue.use(VueRouter);

Vue.config.silent = true;
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/hub', alias: '/', component: hub },
    { path: '/weather', component: weather },
    { path: '/twitch', component: twitch },
    { path: '*', component: notFound}
  ]
});

new Vue({

  router,
  render: h => h(app),
}).$mount('#app')
