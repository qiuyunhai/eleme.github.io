<template>
	<div class="accountSafe" :class="{'accountSafeInter':accountSafePageShow}">
		<div class="head">
			<div class="hLeft">
				<span @click="accountSafePageHide">
						<  <span>账户与安全</span>
				</span>
			</div>
		</div>
		<div class="accountMain">
			<list v-for="(item,index) in listData" :item="item" :key="index"></list>
		</div>
	</div>
</template>

<script>
	import list from "../wode/list"
	import "../../assets/css/iconfont.js"
	export default {
		data() {
			return {
				listData: [{
						mainText: "头像",
						src: require("../../assets/logo.png")
					}, {
						mainText: "用户名",
						subText: "43024545155412",
						margin: "margin"
					}, {
						mainText: "账号绑定"
					}, {
						svgicon: "#icon-shouji",
						mainText: "手机",
						subText: "18620247825"
					}, {
						icon: "icon-weixin green",
						mainText: "微信",
						subText: "未绑定"
					}, {
						svgicon: "#icon-social-qq",
						mainText: "QQ",
						subText: "已绑定"
					}, {
						svgicon: "#icon-weibo",
						mainText: "微博",
						subText: "未绑定"
					}, {
						svgicon: "#icon-taobao",
						mainText: "淘宝",
						subText: "未绑定",
						margin: "margin"
					}, {
						mainText: "安全设置"
					},
					{
						mainText: "登录密码",
						subText: "修改"
					}, {
						mainText: "支付密码",
						subText: "未设置"
					}, {
						mainText: "小额免支付"
					}, {
						mainText: "安全设置"
					},
					{
						mainText: "登录密码",
						subText: "修改"
					}, {
						mainText: "支付密码",
						subText: "未设置"
					}, {
						mainText: "小额免支付"
					}
				]
			}
		},
		components: {
			list
		},
		computed: {
			accountSafePageShow: {
				get: function() {
					return this.$store.state.accountSafePageShow
				},
				set: function(news) {
					this.$store.state.accountSafePageShow = news
				}
			}
		},
		methods: {
			accountSafePageHide: function() {
				this.$store.commit("accountSafePageShow", false)
			}
		}
	}
</script>

<style>
	.accountSafe {
		position: fixed;
		height: 100%;
		width: 100%;
		left: 100%;
		top: 0;
		z-index: 10000000;
		background-color: gainsboro;
		transition: .5s;
	}
	
	.accountSafeInter {
		left: 0;
	}
	
	.accountSafe .head {
		height: 40px;
		width: 100%;
		background-color: #26a2ff;
		color: white;
	}
	
	.icon {
		width: 1em;
		height: 1em;
		vertical-align: -0.15em;
		fill: currentColor;
		overflow: hidden;
	}
	
	.list-item:nth-child(3),
	.list-item:nth-child(9) {
		font-size: 0.8rem;
		color: gray;
	}
</style>