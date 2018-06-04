<template>
	<!--<mt-tab-container v-model="selected">
			<mt-tab-container-item id="外卖">
				1155
				<span class="iconfont icon-chongdian"></span>
			</mt-tab-container-item>
			<mt-tab-container-item id="发现">
				<div class="li">
					<faxianList v-for="(item,index) in faxianData" :item="item" :inidex="index" :key="index"></faxianList>
				</div>
				<div class="grayLine">

				</div>
				<div class="b">
					<div>
						<div>限时好礼</div>
						<div style="font-size: 0.5rem; color: gray;">
							金币换豪礼
						</div>
						<xianshihaoli v-for="(item,index) in xianshihaoli" :item="item" :inidex="index" :key="index"></xianshihaoli>
						<div>
							<a href="">查看更多 ></a>
						</div>
					</div>
				</div>
			</mt-tab-container-item>
			<mt-tab-container-item id="订单">
				<nodingdan></nodingdan>
			</mt-tab-container-item>
			<mt-tab-container-item id="我的">
				<mt-cell v-for="n in 7" title="tab-container 3" :key="n"></mt-cell>
			</mt-tab-container-item>
		</mt-tab-container>-->
	<mt-tabbar class="footer" v-model="selected" fixed style="border-top: 1px solid gainsboro;">
		<mt-tab-item v-for="(item,index) in footerList" :id="item.name" :key="item.index" @click="changeState(item)">
			<div>
				<span :class="item.class"></span>
			</div>
			<div style="margin-top: 13px;">
				{{item.name}}
			</div>
		</mt-tab-item>
	</mt-tabbar>
</template>

<script>
	import faxianList from "./faxianList.vue";
	import xianshihaoli from "./xianshihaoli.vue";
	import faxianData from "../data/faxianList.js";
	import footerList from '../data/footerList.js';
	import nodingdan from "./nodingdan.vue";
	export default {
		name: 'footerNav',
		data() {
			return {
				footerList,
				faxianData,
				xianshihaoli: [{
					mainText: "限时优惠",
					subText: '5元饿了么红包',
					img: require("../assets/logogray.png"),
					url: "",
					price: "150金币"
				}, {
					mainText: "特价换购",
					subText: '无线蓝牙耳机',
					img: require("../assets/logogray.png"),
					url: "",
					price: "9金币"
				}, {
					mainText: "特价换购",
					subText: '机械手感键鼠套装',
					img: require("../assets/logogray.png"),
					url: "",
					price: "9金币"
				}]
			}
		},
		computed: {
			selected: {
				get: function() {
					return this.$store.state.titleSelect
				},
				set: function(newValue) {
					this.$store.state.titleSelect = newValue;
				}
			}
		},
		methods: {
			changeState(index) {
				for(var i = 0; i < this.footerList.length; i++) {
					if(i == index) {
						this.footerList[i].active = true;
					} else {
						this.footerList[i].active = false;
					}
				}
			}
		},
		watch: {
			selected: function(val, oldVal) {
				console.log(this)
				this.$store.commit("setTitleSelect", val)
			}
		},
		components: {
			faxianList,
			xianshihaoli,
			nodingdan
		}
	}
</script>
<style>
	.li {
		margin-top: 2px;
	}
	
	.li:after {
		content: "";
		display: block;
		clear: both;
	}
	
	.li .faxianListLeft(even) {
		border-right: none;
	}
	
	.b {
		text-align: center;
		margin-top: 15px;
	}
	
	.grayLine {
		height: 10px;
		background-color: gainsboro;
	}
	
	.iconfont {}
</style>