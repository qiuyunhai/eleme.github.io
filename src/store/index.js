import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
var store = new Vuex.Store({
	state: {
		titleSelect: "外卖",
		ye: '0',
		show: true,
		toastrPageShow: false,
		cash: 100, //缓存数据,
		tongyongpage: false, //通用页面是否显示
		shezhipageshow: false, //设置页面
		aboutPageShow: false, //关于页面,
		accountSafePageShow: false,
		shoucangPageShow: false,
		shoucangTitle: "11"
	},
	mutations: {
		setTitleSelect: function(state, newState) {
			state.titleSelect = newState;
		},
		setye: function(state, newState) {
			state.ye = newState;
		},
		hideshow: function(state, newState) {
			state.show = newState;
		},
		toastrPageShow: function(state, newState) {
			state.toastrPageShow = newState;
		},
		deliteCah: function(state, newState) {
			state.cash = newState;
		},
		tongyongpage: function(state, newState) {
			state.tongyongpage = newState;
		},
		shezhipageshow: function(state, newState) {
			state.shezhipageshow = newState;
		},
		aboutPageShow: function(state, newState) {
			state.aboutPageShow = newState;
		},
		accountSafePageShow: function(state, newState) {
			state.accountSafePageShow = newState;
		},
		shoucangPageShow: function(state, newState) {
			state.shoucangPageShow = newState;
		},
		shoucangTitle: function(state, newState) {
			console.log(newState)
			state.shoucangTitle = newState;
		},
	},
	getters: {
		setTitleSelect: function(state) {
			return state.titleSelect
		}
	}
})
export default store;