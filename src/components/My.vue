<template>
	<div class="My clear">
		<div style="background-color: #26a2ff;color: white;">
			<div class="m-img pull-left">
				<img src="../../build/logo.png" />
			</div>
			<div class="clear" @click="accountSafePageShow">
				<div class="pull-left">
					<div style="margin-top: 5px;">
						21010120
					</div>
					<div style="margin-top: 12px;">
						<span class="iconfont icon-dingwei1"></span>18620253658
					</div>
				</div>
				<div class="pull-right" style="margin-top: 35px;">
					<span class="iconfont icon-youjiantou" style="font-size: 30px;"></span>
				</div>
			</div>
		</div>
		<div class="flex clear">
			<div>
				<div class="blue">
					0.00 <span>元</span>
				</div>
				<div class="mintFontSize">
					钱包
				</div>
			</div>
			<div>
				<div class="red">
					0 <span>个</span>
				</div>
				<div class="mintFontSize">
					红包
				</div>
			</div>
			<div>
				<div class="orange">
					0 <span>个</span>
				</div>
				<div class="mintFontSize">
					金币
				</div>
			</div>
		</div>
		<div class="vipImage">
			<img src="../assets/3.png" />
		</div>
		<div class="list">
			<list v-for="(item,index) in listData" :item="item" :key="index"></list>
		</div>
	</div>
</template>

<script>
	import list from "./wode/list.vue";
	export default {
		data() {
			return {
				listData: [{
					icon: "icon-dingwei1 blue",
					mainText: "收货地址",
					subText: "",
					margin: "",
					newText: ""
				}, {
					icon: "icon-shoucang red",
					mainText: "我的收藏",
					subText: "",
					margin: "margin",
					newText: ""
				}, {
					icon: "icon-qiapian blue",
					mainText: "饿了么联名卡",
					subText: "免费领百元红包",
					margin: "",
					newText: "NEW"
				}, {
					icon: "icon-liwu orange",
					mainText: "推荐有奖",
					subText: "5元现金拿不停",
					margin: "",
					newText: ""
				}, {
					icon: "icon-fenqishangcheng green",
					mainText: "金币商城",
					subText: "0元好物在这里",
					margin: "",
					newText: ""
				}, {
					icon: "icon-drxx81 blue",
					mainText: "城市代理申请",
					subText: "最高6个月免抽佣",
					margin: "",
					newText: "NEW"
				}, {
					icon: "icon-qianbi orange",
					mainText: "我要借款",
					subText: "低门槛极速放款",
					margin: "",
					newText: "HOT"
				}, {
					icon: "icon-youxi red",
					mainText: "玩游戏领红包",
					subText: "大额红包任性领",
					margin: "",
					newText: ""
				}, {
					icon: "icon-ai-SIM blue",
					mainText: "免费流量",
					subText: "每月最高500M",
					margin: "",
					newText: ""
				}, {
					icon: "icon-liebiaodaohang_gongyi blue",
					mainText: "饿公益",
					subText: "点餐也能做公益",
					margin: "margin",
					newText: ""
				}, {
					icon: "icon-service blue",
					mainText: "我的客服",
					subText: "",
					margin: "",
					newText: ""
				}, {
					icon: "icon--damuzhi blue",
					mainText: "欢迎评分",
					subText: "",
					margin: "",
					newText: ""
				}, {
					icon: "icon-shop blue",
					mainText: "加盟合作",
					subText: "",
					margin: "",
					newText: ""
				}]
			}
		},
		components: {
			list
		},
		methods: {
			accountSafePageShow: function() {
				this.$store.commit("accountSafePageShow", true)
			}
		}
	}
</script>

<style>
	.My .m-img img {
		width: 60px;
		border-radius: 50%;
		border: 1px solid;
	}
	
	.My .pull-left {
		float: left;
	}
	
	.My .m-img {
		margin: 20px;
	}
	
	.My .clear .pull-left {
		margin-top: 20px;
	}
	
	.pull-right {
		float: right;
		margin-right: 20px;
	}
	
	.My .flex {
		background-color: white;
	}
	
	.My .flex>div {
		width: 33.33333%;
		float: left;
		box-sizing: border-box;
		border: 1px solid gainsboro;
		text-align: center;
		padding: 10px 0;
	}
	
	.mintFontSize {
		font-size: 0.7rem;
		margin-top: 8px;
	}
	
	.vipImage {
		margin: 10px 0;
		border-top: 1px solid gainsboro;
		border-bottom: 1px solid gainsboro;
	}
	
	.list {
		margin-bottom: 65px;
	}
	
	.vipImage img {
		width: 100%;
	}
</style>