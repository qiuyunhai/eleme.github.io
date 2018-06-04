<template>
	<div class="dingdan">
		<div v-if="show">
			<img src="../../build/logo.png" class="img" />
			<div class="j">
				近三个月无外卖订单记录
			</div>
			<div class="g" @click="hideshow">
				查看更早订单
			</div>
		</div>
		<div v-else>
			<div v-for='(item,index) in list'>
				<mt-cell-swipe :title="item" :right="[{
					content: 'Delete',
					style: {
						background: 'red',
						color: '#fff'
					},
					handler: ()=>{leftButtonHandler(index)}
				}]">
				</mt-cell-swipe>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list: ["1", "2", "3", "8", "9", "1", "2", "3", "8", "9", "1", "2", "3", "8", "9", "1", "2", "3", "8", "9"],
			}
		},
		computed:{
			show:{
				get:function(){
					return this.$store.state.show
				},
				set:function(newdata){
					this.$
				}
			}
		},
		mounted() {},
		components: {},
		methods: {
			leftButtonHandler(index) {
				this.list.splice(index, 1)
			},
			hideshow:function(){
				this.$store.commit("hideshow",false)
			}
		}
	}
</script>

<style>
	.dingdan {
		text-align: center;
		height: auto;
	}
	
	.dingdan .img {
		margin-top: 40px;
	}
	
	.dingdan .j {
		font-size: 0.5rem;
		margin: 15px 0;
	}
	
	.dingdan .g {
		font-weight: 1000;
		border: 1px solid darkgray;
		display: inline-block;
		padding: 5px 10px;
		border-radius: 3px;
	}
</style>