<template>
	<div>
		<div class="tongyong" :class="{'tongyongInter':tongyongpage}">
			<div class="header">
				<div class="hLeft">
					<span @click="tongyongPageShow">
						<  <span>通用</span>
					</span>
				</div>
			</div>
			<div style="margin-top: 40px;">
				<div @click="qinghuancun(getCash)">
					<mt-cell title="清除图片缓存" class="clickState">{{getCash}}MB</mt-cell>
				</div>
				<div @click="showmask('mask1')">
					<mt-cell title="非Wifi下图片质量" value="" class="clickState">{{radioRalueGet}}</mt-cell>
				</div>
				<div @click="showmask('mask2')">
					<mt-cell title="自动下载最新安装包" class="clickState">{{radioRalue2}}</mt-cell>
				</div>
				<mt-cell title="推送通知" label="包含订单状态、优惠促销等重要信息的推送">
					<mt-switch v-model="value1"></mt-switch>
				</mt-cell>
				<mt-cell title="摇一摇，截屏反馈问题">
					<mt-switch v-model="value2"></mt-switch>
				</mt-cell>
			</div>
			<div class="mask1" ref="mask1">
				<div class="maskgary" @click="hidemask('mask1')"></div>
				<div class="maskContent">
					<div>
						<div>
							非wifi下下载图片质量
						</div>
						<mt-radio title="" v-model="radioRalue1" :options="['普通 ( 节省流量 )', '高清  (最佳效果)']">
						</mt-radio>
					</div>
				</div>
			</div>
			<div class="mask2" ref="mask2">
				<div class="maskgary" @click="hidemask('mask2')"></div>
				<div class="maskContent">
					<div>
						<div>
							自动下载最新安装包
						</div>
						<mt-radio title="" v-model="radioRalue2" :options="['仅wi-fi网络', '从不']">
						</mt-radio>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import mint from "mint-ui"
	export default {
		data() {
			return {
				value1: true,
				value2: true,
				radioRalue1: "普通 ( 节省流量 )",
				radioRalue2: "从不",
			}
		},
		methods: {
			qinghuancun: function(Cash) {
				if(Cash == 0) {
					mint.Toast({
						message: "缓存已经清理干净"
					})
				} else {
					mint.Indicator.open({
						text: '正在清除缓存..'
					});
					setTimeout(() => {
						mint.Indicator.close();
						mint.Toast({
							message: "清除成功"
						})
						this.$store.state.cash = 0;
					}, 2000)
				}
			},
			showmask: function(mask) {
				this.$refs[mask].style.display = "block"
			},
			hidemask: function(mask) {
				this.$refs[mask].style.display = "none"
			},
			tongyongPageShow: function() {
				this.$store.commit("tongyongpage", false)
			}
		},
		computed: {
			getCash: function() {
				return this.$store.state.cash
			},
			radioRalueGet: function() {
				return this.radioRalue1.substring(0, this.radioRalue1.indexOf("("))
			},
			tongyongpage: function() {
				return this.$store.state.tongyongpage;
			}
		},
		watch: {
			radioRalue1: function() {
				setTimeout(() => {
					document.getElementsByClassName("mask1")[0].style.display = "none"
				}, 500)
			},
			radioRalue2: function() {
				setTimeout(() => {
					document.getElementsByClassName("mask2")[0].style.display = "none"
				}, 500)
			},
			value1: function() {
				mint.Toast({
					message: "更改成功",
					duration: "500"
				})
			},
			value2: function() {
				mint.Toast({
					message: "更改成功",
					duration: "500"
				})
			}
		}
	}
</script>

<style>
	.tongyong {
		position: fixed;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
		z-index: 10001;
		transition: .5s;
		background-color: white;
		transform: translateX(100%);
	}
	
	.tongyongInter {
		transform: translateX(0);
	}
	
	.tongyong .mint-cell-wrapper {
		border-bottom: 1px solid gainsboro;
		border-top: 1px solid gainsboro;
	}
	
	.tongyong .clickState:active {
		background-color: lightgray;
		color: white;
	}
	
	.tongyong .clickState:active .mint-cell-value {
		color: white;
	}
	
	.mint-indicator-wrapper {
		z-index: 10006;
	}
	
	.mint-toast.is-placemiddle {
		z-index: 10007;
	}
	/*.mask .mint-cell-wrapper {
		margin-top: 0;
	}*/
	
	.tongyong .mask1 {
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		z-index: 10001;
		transition: .5s;
		display: none;
	}
	
	.tongyong .mask1 .maskgary {
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background-color: gray;
		opacity: 0.8;
	}
	
	.tongyong .mask1 .maskContent {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 80%;
		background-color: #fff;
		border-radius: 3px;
		padding: 20px;
	}
	
	.tongyong .mask2 {
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		z-index: 10001;
		transition: .5s;
		display: none;
	}
	
	.tongyong .mask2 .maskgary {
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background-color: gray;
		opacity: 0.8;
	}
	
	.tongyong .mask2 .maskContent {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 80%;
		background-color: #fff;
		border-radius: 3px;
		padding: 20px;
	}
</style>