<!--对话-->
<template>
	<div>
		<el-row class="his-row">
			<el-col class="icon" :span = "4">
				<img :src = "portrait">
			</el-col>
			<el-col class="content" :span = "20">
				<div class="title">
					{{title}}
				</div>
				<div class="text"  v-if="content.length > 30">
					{{content}}
				</div>
				<span class="text" v-if="content.length <= 30">
					{{content}}
				</span>
			</el-col>
		</el-row>
		<el-row class="my-row">
			<el-col class="icon" :span = "4">
				<img :src = "portrait">
			</el-col>
			<el-col class="content" :span = "20">
				<div class="title">
					{{title}}
				</div>
				<div class="text"  v-if="content.length > 30">
					{{content}}
				</div>
				<span class="text" v-if="content.length <= 30">
					{{content}}
				</span>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default{
		props:{
			portrait:"",
			title:"",
			content:""
		},
		components:{},
		data(){
			return{
					
			}
		},mounted(){
			console.log(this.content.length);
		}
	}
</script>

<style>
	.his-row{
		padding: 10px 20px;
	}
	img{
		width: 40px;
	}
	.icon{
		max-width: 40px;
	}
	.his-row .content{
		padding: 0 10px;
	}
	.his-row .title{
		font-size: 0.8rem;
		color: #909399;
		margin-bottom: 5px;
	}
	.his-row .text{
		font-size: 1rem;
		color: #303133;
		background-color: #F2F6FC;
		padding: 5px;
		border-radius: 5px;
	}
</style>
