<template>
	<div>
		<div class="header">
			<div class="hLeft">
				<span @click="toastrPagehide">
					<  <span>通知中心</span>
				</span>
			</div>
		</div>
		<div>
			<img src="../assets/1.png"/>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			toastrPagehide:function(){
				this.$store.commit("toastrPageShow",false)
			}
		}
	}
</script>

<style>
	.tongzhi img{
		width: 100%;
		height: 100%;
	}
</style>