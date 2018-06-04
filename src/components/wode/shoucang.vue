<template>
	<div class="shoucang" :class="{'shoucangInter':shoucangPageShow}">
		<div class="header">
			<div class="hLeft">
				<span @click="shoucangPageHide">
					<  <span>{{shoucangTitle}}</span>
				</span>
			</div>
		</div>
		<div>
			<img src="../../assets/4.png"/>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			shoucangPageHide:function(){
				this.$store.commit("shoucangPageShow",false)
			}
		},
		computed:{
			shoucangPageShow:{
				get:function(){
					return this.$store.state.shoucangPageShow
				},
				set:function(newstate){
					this.$store.state.shoucangPageShow = newstate
				}
			},
			shoucangTitle:{
				get:function(){
					return this.$store.state.shoucangTitle
				},
				set:function(newstate){
					this.$store.state.shoucangTitle = newstate
				}
			}
		}
	}
</script>

<style>
	.shoucang img{
		width: 100%;
		height: 100%;
	}
	.shoucang {
		position: fixed;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
		z-index: 10000;
		transition: .5s;
		background-color: #f5f5f5;
		transform: translateX(100%);
		overflow: hidden;
	}
	
	.shoucangInter {
		transform: translateX(0);
	}
</style>