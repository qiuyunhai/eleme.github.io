<template>
	<div>
		<div class="faxianListLeft">
			<div class="left">
				<div>{{item.mainText}}</div>
				<div>
					{{item.subText}}
				</div>
			</div>
			<div class="right">
				<img src="../../build/logo.png" />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			item:Object,
			index:Number
		}
	}
</script>

<style>
	.faxianListLeft {
		height: 65px;
		width: 50%;
		padding: 10px;
		border: 1px solid gainsboro;
		border-left: none;
		float: left;
		box-sizing: border-box;
	}
	
	.left {
		float: left;
		font-size: 0.5rem;
	}
	
	.left div:nth-child(1) {
		font-size: 1rem;
		color: burlywood;
	}
	
	.left div:nth-child(2) {
		color: gray;
	}
	
	.faxianListLeft .right {
		float: right;
		margin-top: 7px;
		margin-right: 10px;
	}
	
	.faxianListLeft .right img {
		height: 30px;
		border-radius: 50%;
	}
</style>