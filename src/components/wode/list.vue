<template>
	<div class="list-item clear" :class="item.margin" @click="pageShow(item.mainText)">
		<span class="iconfont icons" v-if="item.icon" :class="item.icon"></span>
		<svg class="icon icons" v-else-if="item.svgicon" aria-hidden="true">
			<use :xlink:href="item.svgicon"></use>
		</svg>
		<img v-if="item.src" style="height: 40px;" class="fr" :src="item.src" />
		<span class="mainText" :style="{lineHeight:item.src?'40px':''}">{{item.mainText}}</span>
		<span class="fr minisize">{{item.subText}}</span>
		<span v-if="item.newText" class="fr minisize hot">{{item.newText}}</span>
	</div>
</template>

<script>
	export default {
		props: {
			item: Object
		},
		methods: {
			pageShow: function(name) {
				this.$store.commit("shoucangPageShow", true);
				this.$store.commit("shoucangTitle", name);
			}
		}
	}
</script>

<style>
	.list-item {
		background-color: white;
		border-top: 1px solid gainsboro;
		padding: 10px;
	}
	
	.list-item:active {
		background-color: darkgray;
	}
	
	.icons {
		margin-right: 15px;
	}
	
	.minisize {
		color: darkgray;
	}
	
	.margin {
		margin-bottom: 10px;
	}
	
	.hot {
		background-color: red;
		color: white;
		padding: 2px 5px;
		transform: scale(0.7);
		margin-right: 10px;
	}
</style>