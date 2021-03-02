require('./bootstrap');

import Vue from 'vue';
import Vuetify from 'vuetify';
import VueTheMask from 'vue-the-mask';
// import VueTour from 'vue-tour';
import router from './router'
import store from './store'
import LongPress from 'vue-directive-long-press'

import HomeApp from './layouts/HomeApp.vue';

window.$ = require('jquery');

Vue.use(Vuetify);
Vue.use(VueTheMask);

Vue.component(
	'passport-clients',
	require('./components/passport/Clients.vue').default
);

Vue.component(
	'passport-authorized-clients',
	require('./components/passport/AuthorizedClients.vue').default
);

Vue.component(
	'passport-personal-access-tokens',
	require('./components/passport/PersonalAccessTokens.vue').default
);

Vue.directive('long-press', LongPress);

const app = new Vue({
	el: '#app',
	router,
	store,
	directives: {
		'long-press': LongPress
	},
	components: {
		HomeApp
	},
	vuetify: new Vuetify()
}).$mount('#app');