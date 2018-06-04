<template>
	<div id="app">
		<headerNav></headerNav>
		<mainContent></mainContent>
		<footerNav></footerNav>
		<tongzhi class="tongzhi" :class="{'tongzhiInter':toastrPageShow}" style="position: fixed;"></tongzhi>
		<shezhi></shezhi>
		<tongyong></tongyong>
		<about></about>
		<accountSafe></accountSafe>
		<shoucang></shoucang>
		<!--<router-view></router-view>-->
	</div>
</template>

<script>
	import footerNav from './components/footerNav.vue'
	import headerNav from './components/headerNav.vue'
	import mainContent from './components/mainContent.vue'
	import tongzhi from './components/tongzhi.vue'
	import shezhi from './components/shezhi/shezhi.vue'
	import tongyong from "./components/shezhi/tongyong.vue"
	import about from "./components/shezhi/about.vue"
	import accountSafe from "./components/shezhi/accountSafe.vue"
	import shoucang from './components/wode/shoucang.vue'
	export default {
		name: 'App',
		data() {
			return {

			}
		},
		components: {
			footerNav,
			headerNav,
			mainContent,
			tongzhi,
			shezhi,
			tongyong,
			about,
			accountSafe,
			shoucang
		},
		computed: {
			active: {
				get: function() {
					return this.$store.state.titleSelect;
				},
				set: function(newValue) {
					this.$store.state.titleSelect = newValue;
				}
			},
			toastrPageShow: {
				get: function() {
					return this.$store.state.toastrPageShow;
				},
				set: function(newValue) {
					this.$store.state.toastrPageShow = newValue;
				}
			},
		}
	}
</script>

<style>
	* {
		padding: 0;
		margin: 0;
	}
	
	html,
	body {
		width: 100%;
		height: 100%;
		background-color: gainsboro;
	}
	
	#app {
		width: 100%;
		height: 100%;
		position: absolute;
	}
	
	.tongzhi {
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
		z-index: 10000;
		transition: .5s;
		background-color: #f5f5f5;
		transform: translateX(100%);
	}
	
	.tongzhiInter {
		transform: translateX(0);
	}
	
	.mainleft {
		transform: translateX(-100%);
	}
	
	.clear:after {
		display: block;
		clear: both;
		content: "";
	}
	
	.red {
		color: red;
	}
	
	.orange {
		color: orange;
	}
	
	.blue {
		color: blue;
	}
	
	.fl {
		float: left;
	}
	
	.fr {
		float: right;
	}
	
	.minisize {
		font-size: 0.5rem;
	}
	
	.green {
		color: green;
	}
</style>