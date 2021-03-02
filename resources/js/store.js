import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';
import {foreach, result} from 'lodash';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		productData: [],
	},
	actions: {
		getProductData(context) {
			context.commit('getProductData')
		}
	},
	mutations: {
		getProductData(state, obj) {
			// console.log(`${window.base_dir}`)
			// axios.get(`${window.base_dir}/api/products`)
			axios.get('oauth/products')
			.then(response => {
				state.productData = response.data
			})
			.catch(error => {
				console.log(error);
			})
		}
	}
});

export default store;