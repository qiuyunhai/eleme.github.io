<template>
	<div class="waimai">
		<div class="position clear" v-if="searchShow">
			<div class="fl" style="line-height: 31px;">
				<span class="iconfont icon-dingwei"></span>
				<span>湖南株洲天元区</span>
				<span class="iconfont icon-xiasanjiao"></span>
			</div>
			<div class="fr">
				<div class="fl zhua">
					<div>抓龙虾</div>
					<div>拿红包</div>
				</div>
				<span class="iconfont icon-if_Food_C_ red lr"></span>
			</div>
		</div>
		<div style="height: 52px;" class="clear search">
			<div class="searchLeft" v-if="!searchShow" @click="searchHide">
				<- </div>
					<div class="searchk" @click="searchStart">
						<mt-search v-model="search" cancel-text="取消" placeholder="搜索内容" :result.sync="result" :ref="searchStart" :autofocus="!searchShow">
						</mt-search>
					</div>
			</div>
			<div v-if="searchShow">
				<div>
					<ul class="eat-type">
						<li>花甲粉</li>
						<li>炸鸡</li>
						<li>米粉</li>
						<li>炒面</li>
						<li>烤鸡</li>
						<li>肠粉</li>
						<li>馄饨</li>
						<li>土豆</li>
					</ul>
				</div>
				<div class="lin">
					<img src="../../assets/5.png" />
				</div>
				<div class="swiper">
					<mt-swipe :auto="4000">
						<mt-swipe-item>
							<div class="swiper-item">
								<div class="clear">
									<div class="fl">
										<div>
											<img src="../../../build/logo.png" />
										</div>
										<div>
											美食
										</div>
									</div>
									<div class="fl">
										<div>
											<img src="../../../build/logo.png" />
										</div>
										<div>
											美食
										</div>
									</div>
									<div class="fl">
										<div>
											<img src="../../../build/logo.png" />
										</div>
										<div>
											美食
										</div>
									</div>
									<div class="fl">
										<div>
											<img src="../../../build/logo.png" />
										</div>
										<div>
											美食
										</div>
									</div>
									<div class="fl">
										<div>
											<img src="../../../build/logo.png" />
										</div>
										<div>
											美食
										</div>
									</div>
								</div>
								<div class="clear">
									<div class="fl">
										<div>
											<img src="../../../build/logo.png" />
										</div>
										<div>
											美食
										</div>
									</div>
									<div class="fl">
										<div>
											<img src="../../../build/logo.png" />
										</div>
										<div>
											美食
										</div>
									</div>
									<div class="fl">
										<div>
											<img src="../../../build/logo.png" />
										</div>
										<div>
											美食
										</div>
									</div>
									<div class="fl">
										<div>
											<img src="../../../build/logo.png" />
										</div>
										<div>
											美食
										</div>
									</div>
									<div class="fl">
										<div>
											<img src="../../../build/logo.png" />
										</div>
										<div>
											美食
										</div>
									</div>
								</div>
							</div>
						</mt-swipe-item>
						<mt-swipe-item>
							<div class="swiper-item">
								<div class="clear">
									<div class="fl">
										<div>
											<img src="../../assets/logogray.png" />
										</div>
										<div>
											美食
										</div>
									</div>
									<div class="fl">
										<div>
											<img src="../../assets/logogray.png" />
										</div>
										<div>
											美食
										</div>
									</div>
									<div class="fl">
										<div>
											<img src="../../assets/logogray.png" />
										</div>
										<div>
											美食
										</div>
									</div>
									<div class="fl">
										<div>
											<img src="../../assets/logogray.png" />
										</div>
										<div>
											美食
										</div>
									</div>
									<div class="fl">
										<div>
											<img src="../../assets/logogray.png" />
										</div>
										<div>
											美食
										</div>
									</div>
								</div>
								<div class="clear">
									<div class="fl">
										<div>
											<img src="../../assets/logogray.png" />
										</div>
										<div>
											美食
										</div>
									</div>
									<div class="fl">
										<div>
											<img src="../../assets/logogray.png" />
										</div>
										<div>
											美食
										</div>
									</div>
									<div class="fl">
										<div>
											<img src="../../assets/logogray.png" />
										</div>
										<div>
											美食
										</div>
									</div>
									<div class="fl">
										<div>
											<img src="../../assets/logogray.png" />
										</div>
										<div>
											美食
										</div>
									</div>
									<div class="fl">
										<div>
											<img src="../../assets/logogray.png" />
										</div>
										<div>
											美食
										</div>
									</div>
								</div>
							</div>
						</mt-swipe-item>
					</mt-swipe>
				</div>
				<div class="lin">
					<img src="../../assets/6.png" />
				</div>
				<div class="tuiTitle">
					<div>
						<span>——  </span>推荐商家<span>  ——</span>
					</div>
					<div class="tuiType">
						<ul>
							<li>综合排序<span class="iconfont icon-xiasanjiao" style="font-size: 0.5rem;margin-left: 10px;"></span></li>
							<li style="color: gray;">好评优先</li>
							<li style="color: gray;">距离最近</li>
							<li style="color: gray;">筛选<span class="iconfont icon-x_icon_sizer"></span></li>
						</ul>
					</div>
				</div>
				<div class="dianjia">
					<dianjia v-for="(item,index) in dianjiaList" :item="item" :key="index"></dianjia>
				</div>
			</div>
		</div>
</template>

<script>
	import Vue from "vue"
	import dianjia from "./dianjia"
	import dianjiaList from "../../data/dianjiaList.js";
//	import axios from "../../assets/js/axios.js"
//	import "../../assets/js/vue-resource.min.js"
//	Vue.prototype.$http = axios;
	export default {
		data() {
			return {
				search: "",
				dianjiaList,
				searchShow: true,
				result: ['蔬菜', "肉类", "大豆"]
			}
		},
		components: {
			dianjia
		},
		methods: {
			searchStart: function() {
				this.searchShow = false;
				document.getElementsByClassName("mint-searchbar-core")[0].focus()
			},
			searchHide: function() {
				this.search = "";
				this.searchShow = true;
			},
			ajaxJsonp: function() {
				this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su', {
					params: {
						wd: 'html'
					},
					jsonp: "cb"
				}).then(function(resp) {
					console.log(decodeURI(resp.data.s))
				})
			}
		}
	}
</script>

<style>
	.waimai {
		margin: 40px 0 55px 0;
		background-color: white;
	}
	
	.waimai .position {
		background-color: #26a2ff;
		color: white;
		padding: 10px 15px;
	}
	
	.waimai .zhua {
		font-size: 0.5rem;
		transform: scale(0.8);
	}
	
	.waimai .icon-if_Food_C_ {
		font-size: 30px;
	}
	
	.waimai .eat-type {
		display: flex;
		list-style: none;
		justify-content: space-between;
		font-size: 0.7rem;
		padding: 10px;
		background-color: #26a2ff;
		color: white;
	}
	
	.waimai .mint-searchbar {
		background-color: #26a2ff;
	}
	
	.waimai .mint-searchbar-cancel {
		color: white;
	}
	
	.waimai .lin img {
		width: 100%;
	}
	
	.waimai .swiper {
		height: 120px;
	}
	
	.waimai .swiper-item img {
		width: 20px;
	}
	
	.waimai .swiper-item .fl {
		width: 20%;
		text-align: center;
		height: 50px;
	}
	
	.waimai .mint-swipe-indicator {
		width: 15px;
		height: 3px;
		border-radius: 0%;
	}
	
	.waimai .tuiTitle {
		text-align: center;
	}
	
	.waimai .tuiType ul {
		display: flex;
		list-style: none;
		justify-content: space-between;
		padding: 15px;
	}
	
	.waimai .mint-search {
		height: auto;
	}
	
	.search {
		display: flex;
		justify-content: space-between;
	}
	
	.searchLeft {
		width: 40px;
		background-color: #26a2ff;
		line-height: 52px;
		text-align: center;
		position: relative;
		z-index: 1000;
	}
	
	.searchk {
		width: 100%;
		transition: .5s;
	}
	
	.mint-search-list-warp {
		margin-top: 48px;
	}
</style>