import Vue from 'vue';

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
