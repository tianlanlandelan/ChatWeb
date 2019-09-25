<!--小红点-->
<template>
	<!-- 如果传入的参数中有数组，显示大一点的红点，里面是数组； 否则，显示小红点-->
	<div class="span" :style="{ left: left-6 + 'px', top: 0 - top + 'px' }">
		<div class="small" v-if="number < 0 || number >=100"></div>
		<div class="big" v-if="number > 0 && number < 100">{{number}}</div>
	</div>
</template>

<script>
	export default {
		props:{
			//左侧偏移量
			left:0,
			//上部偏移量
			top:0,
			//显示数字
			number:0
		},
	  data () {
		return {
		  
		}
	  }
	  ,mounted() {
		
		console.log("redDot",this.left,this.top,this.number)
	  }
	}
</script>

<style>
	.span{
		height: 20px;
		position: relative;
	}
	
	.small{ 
		border-radius: 50%; 
		background: #FF3333;
		width: 10px; 
		height: 10px; 
		/* position: relative; */
		/* z-index: order; */
		}
	.big{ 
		border-radius: 50%; 
		background: #FF3333;
		width: 16px; 
		height: 16px; 
		position: relative;
		text-align: center;
		z-index: order;
		color:#fff;
		font-size: 0.8rem;
		}
</style>
