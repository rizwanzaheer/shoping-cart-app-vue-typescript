import Vue from 'vue';
import * as moment from 'vue-moment';

Vue.use(moment);

// Components
import App from './App.vue';

// Router
import router from './router';

// Store
import store from './store';

// Global style
import '@/styles/index.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
