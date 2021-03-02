import Vue from 'vue';
import Router from 'vue-router'
Vue.use(Router);

import HomePage from './components/HomePage.vue';

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/home',
			name: 'home',
			component: HomePage,
		},
	]
});