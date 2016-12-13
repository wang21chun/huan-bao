"use strict";
import Vue from '../../node_modules/vue/dist/vue.js';
import VueRouter from '../../node_modules/vue-router/dist/vue-router.js';
import Vuex from '../../node_modules/vuex/dist/vuex.js';
import VueResource from '../../node_modules/vue-resource/dist/vue-resource.js';
import routers from './routes.js';
import BootstrapCss from '../../node_modules/bootstrap/dist/css/bootstrap.css';
import jquery from '../../node_modules/jquery/dist/jquery.js';
import BootstrapJS from '../../node_modules/bootstrap/dist/js/bootstrap.js';


Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueResource);

Vue.http.options.emulateHTTP = true;
const router = new VueRouter({
    routes: routers
});

const store = new Vuex.Store({
	state:{
		search:'',
	},
	mutations:{
		setSearch(state, val){
			state.search = val.search;
		}
	},
	getters:{
		checkSearch: state =>{return state.search !== '';}
	}
});

const app = new Vue({
    router: router,
    store:store,
}).$mount('#app');
