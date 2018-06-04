<template>
	<div>
		<div class="shezhi" :class="{'shezhiInter':shezhipageshow}">
			<div class="header">
				<div class="hLeft">
					<span @click="shezhiPageShow">
						<  <span>设置</span>
					</span>
				</div>
			</div>
			<div style="margin-top: 45px;">
				<div @click="accountSafePageShow">
					<mt-cell title="账号安全" value="开启小额免密支付"></mt-cell>
				</div>
				<div @click="tongyongPageShow">
					<mt-cell title="通用" style="margin-top: -1px;"></mt-cell>
				</div>
				<div @click="aboutPageShow">
					<mt-cell title="关于饿了么" value="" style="margin: 12px 0;"></mt-cell>
				</div>
				<mt-cell title="退出登录" style="text-align: center;color: brown;"></mt-cell>
			</div>
		</div>

	</div>

</template>

<script>
	export default {
		methods: {
			tongyongPageShow: function() {
				this.$store.commit("tongyongpage", true)
			},
			shezhiPageShow: function() {
				this.$store.commit("shezhipageshow", false)
			},
			aboutPageShow: function() {
				this.$store.commit("aboutPageShow", true)
			},
			accountSafePageShow:function(){
				this.$store.commit("accountSafePageShow", true)
			}
		},
		computed: {
			shezhipageshow: function() {
				return this.$store.state.shezhipageshow
			}
		}
	}
</script>

<style>
	.shezhi {
		position: fixed;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
		z-index: 10000;
		transition: .5s;
		background-color: #f5f5f5;
		transform: translateX(100%);
	}
	
	.shezhiInter {
		transform: translateX(0);
	}
	
	.shezhi .mint-cell-wrapper {
		border-bottom: 0.5px solid gainsboro;
		border-top: 0.5px solid gainsboro;
	}
	
	.shezhi .mint-cell-wrapper:active {
		background-color: lightgray;
		color: white;
	}
	
	.shezhi .mint-cell-wrapper:active .mint-cell-value {
		color: white;
	}
	.mint-cell-value span{
		font-size: 0.8rem;
	}
</style>