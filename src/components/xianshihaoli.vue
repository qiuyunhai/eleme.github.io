<template>
	<div class="xianshihaoli">
			<div class="hearder">
				<span>{{item.mainText}}</span>
			</div>
			<div style="margin: 10px 0;">
				<img src="../../build/logo.png" />
			</div>
			<div>
				{{item.subText}}
			</div>
			<div style="margin-top: 10px;">
				<span style="color: red;">{{item.price}}</span><span style="text-decoration: line-through; font-size: 0.3rem;color: gray;">￥5</span>
			</div>
	</div>
</template>

<script>
	export default{
		props:{
			item:Object,
			index:Number
		}
	}
</script>

<style>
	.xianshihaoli {
		padding: 10px;
		font-size: 0.8rem;
		width: 33.33%;
		float: left;
		box-sizing: border-box;
	}
	
	/*.xianshihaoli>div {
		width: 33.33%;
		float: left;
	}*/
	
	.xianshihaoli img {
		width: 50%;
	}
	
	.xianshihaoli .hearder span {
		background-color: black;
		color: white;
		padding: 0 10px;
	}
</style>