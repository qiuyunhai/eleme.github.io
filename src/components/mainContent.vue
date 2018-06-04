<template>
	<div style="position: absolute;height: 100%;width: 100%;">
		<div v-if="selected=='外卖'">
			<waimai></waimai>
		</div>
		<div v-else-if="selected=='发现'" style="width: 100%;background-color: white;padding: 40px 0 15px 0;">
			<div class="clear">
				<faxianList v-for="(item,index) in faxianData" :item="item" :inidex="index" :key="index"></faxianList>
			</div>
			<div class="grayLine"></div>
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
		</div>
		<div v-else-if="selected=='订单'" style="height: 100%;width: 100%;background-color: white;position: absolute;">
			<div style="position: absolute;width: 100%;top: 0;margin-top: 40px;margin-bottom: 56px;">
				<nodingdan></nodingdan>
			</div>
		</div>
		<div v-else="selected=='我的'" style="margin-top: 40px;">
			<My></My>
		</div>
	</div>
</template>

<script>
	import faxianList from "./faxianList.vue";
	import xianshihaoli from "./xianshihaoli.vue";
	import faxianData from "../data/faxianList.js";
	import nodingdan from "./nodingdan.vue";
	import My from "./My.vue";
	import waimai from "./waimai/waimai.vue";
	export default {
		name: "mainContent",
		data() {
			return {
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
					console.log(this.$store.state.titleSelect)
					return this.$store.state.titleSelect
				},
				set: function(newValue) {
					this.$store.state.titleSelect = newValue;
				}
			}
		},
		components: {
			faxianList,
			xianshihaoli,
			nodingdan,
			My,
			waimai
		}
	}
</script>

<style>

</style>