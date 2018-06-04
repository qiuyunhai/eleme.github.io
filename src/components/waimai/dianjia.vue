<template>
	<div class="dianjia-item">
		<div class="first">
			<img :src="item.img" />
		</div>
		<div class="secend">
			<div>
				{{item.name}} <span class="iconfont icon-sandian1 fr"></span>
			</div>
			<div class="pinjia">
				<span class="iconfont icon-wujiaoxing1 orange"></span>
				<span class="iconfont icon-wujiaoxing1 orange"></span>
				<span class="iconfont icon-wujiaoxing1 orange"></span>
				<span class="iconfont icon-wujiaoxing1 orange"></span>
				<span class="iconfont icon-wujiaoxing1 orange"></span>
				<span>{{item.star}}.0</span>
				<span>{{item.sale}}</span>
			</div>
			<div class="small-size">
				{{item.sentRequest}}<span class="fr">{{item.timeAndDistance}}</span>
			</div>
			<div class="small-size">
				<span class="iconfont icon-shop"></span>{{item.type}}
			</div>
			<div v-for="(items,index) in item.others" :key="index">
				<div class="small-size" v-if="index<=1" :class="{'fi':index==0}">
					<span class="brand">{{items.name}}</span> {{items.content}} <span v-if="index==0 && item.others.length>2" class="iconfont fr" @click="changeState" :class="[hideshow ? 'icon-youjiantou' : 'icon-xiasanjiao']"></span>
				</div>
			</div>
			<div class="hideshow" :style="{height: height +'px'}">
				<div class="small-size" v-for="(items,index) in item.others" :key="index" v-if="index>1">
					<span class="brand">{{items.name}}</span> {{items.content}}
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				hideshow: false,
				height: 0,
				initHeitht:0
			}
		},
		props: {
			item: Object
		},
		mounted: function(){
			var div = document.getElementsByClassName("fi")[0];
			this.initHeitht=div.clientHeight + 6
		},
		watch: {
			hideshow: function() {
				if(this.hideshow) {
					this.height = this.initHeitht * (this.item.others.length - 2);
				} else {
					this.height = 0;
				}
			}
		},
		methods: {
			changeState: function() {
				var div = document.getElementsByClassName("fi")[0];
				console.log(div.clientHeight + 6)
				this.hideshow = !this.hideshow;
			}
		}
	}
</script>

<style>
	@import url("../../assets/css/animate.css");
	.dianjia-item {
		margin: 0 10px;
		padding: 10px 0;
		border-bottom: 1px solid gainsboro;
		display: flex;
		justify-content: space-between;
	}
	
	.first {
		width: 60px;
	}
	
	.first img {
		width: 60px;
		height: 60px;
	}
	
	.secend {
		width: 100%;
		padding-left: 10px;
	}
	
	.secend>div {
		margin: 3px 0;
	}
	
	.pinjia span {
		font-size: 0.5rem;
	}
	
	.small-size {
		font-size: 0.5rem;
	}
	
	.hideshow div {
		margin: 3px 0;
	}
	
	.hideshow {
		overflow: hidden;
		transition: all 0.5s;
	}
	
	.brand {
		background-color: orange;
	}
	
	.icon-sandian1 {
		font-size: 1.5rem;
	}
</style>