<template>
	<div class="header">
		<div class="hLeft">
			<span>{{titleSelect}}</span>
			<span class="pull-right iconfont icon-03" v-if="titleSelect=='我的'" @click="shezhiPageShow"></span>
			<span class="pull-right iconfont icon-xiaoxi" v-if="titleSelect=='我的'" @click="toastrPageShow"></span>
		</div>
	</div>
</template>

<script>
	export default {
		name: "headerNav",
		computed: {
			titleSelect: function() {
				return this.$store.state.titleSelect
			}
		},
		methods: {
			toastrPageShow:function(){
				this.$store.commit("toastrPageShow",true)
			},
			shezhiPageShow:function(){
				this.$store.commit("shezhipageshow",true)
			}
		}
	}
</script>

<style>
.header{
	height: 40px;
	width: 100%;
	background-color:#26a2ff;
	color: white;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10000;
}
.hLeft{
	height: 40px;
	line-height: 40px;
	margin-left: 20px;
}
/*#26a2ff*/
</style>