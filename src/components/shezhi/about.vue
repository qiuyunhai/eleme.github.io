<template>
	<div class="about" :class="{'aboutInter':aboutPageshow}">
		<div class="header">
			<div class="hLeft">
				<span @click="toastrPagehide">
					<  <span>关于饿了么</span>
				</span>
			</div>
		</div>
		<div>
			<img src="../../assets/2.png" />
		</div>
		<div class="update" @click="update">
			检查更新
		</div>
	</div>
</template>

<script>
	import mint from "mint-ui"
	export default {
		methods: {
			toastrPagehide: function() {
				this.$store.commit("aboutPageShow", false)
			},
			update: function() {
				mint.Toast({
					message: "饿了么：您当前已为最新版本",
					position: 'bottom',
					duration: 1000,
					className: "mini"
				})
			}
		},
		computed: {
			aboutPageshow: function() {
				return this.$store.state.aboutPageShow
			}
		}
	}
</script>

<style>
	.about {
		height: 100%;
		width: 100%;
		background-color: white;
		position: fixed;
		top: 0;
		left: 0;
		transition: .5s;
		transform: translateX(100%);
		z-index: 10006;
	}
	
	.aboutInter {
		transform: translateX(0);
	}
	
	.about img {
		width: 100%;
		height: 100%;
	}
	
	.update {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	
	.mint-indicator-wrapper {
		z-index: 10006;
	}
	
	.mint-toast.is-placemiddle {
		z-index: 10007;
	}
	
	.mini {
		z-index: 100006;
	}
	
	.mini .mint-toast-text {
		font-size: 0.5rem;
	}
</style>