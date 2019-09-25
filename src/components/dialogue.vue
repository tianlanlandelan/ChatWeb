<!--对话-->
<template>
	<div>
		<el-row class="his-row" v-if="!isMe">
			<el-col class="icon" :span = "2">
				<img :src = "portrait">
			</el-col>
			<el-col class="content" :span = "20">
				<div class="title">
					{{title}}
				</div>
				<div class="text"  v-if="content.length > 50">
					{{content}}
				</div>
				<span class="text" v-if="content.length <= 50">
					{{content}}
				</span>
			</el-col>
		</el-row>
		<el-row class="my-row" v-if="isMe">
			<el-col class="content" :span = "20" :offset="2">
				<div class="text"  v-if="content.length > 50">
					{{content}}
				</div>
				<span class="text" v-if="content.length <= 50">
					{{content}}
				</span>
			</el-col>
			<el-col class="icon" :span = "2">
				<img :src = "portrait">
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default{
		props:{
			portrait:"",
			title:"",
			content:"",
			isMe:false
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
	.his-row,.my-row{
		padding:10px 20px;
	}
	img{
		width: 40px;
	}
	.his-row .icon{
		
	}
	.his-row .content{
		
	}
	.his-row .title{
		font-size: 0.8rem;
		color: #909399;
		margin-bottom: 5px;
	}
	.his-row .text{
		font-size: 1rem;
		color: #303133;
		background-color: #fefefe;
		padding: 10px;
		border-radius: 5px;
	}
	.my-row .content{
		text-align: right;
		margin-top: 1rem;
	}
	.my-row .text{
		text-align: left;
		font-size: 1rem;
		color: #303133;
		background-color: #9de759;
		padding: 10px;
		border-radius: 5px;
		
	}
	.my-row .icon{
		text-align: right;
	}
	.my-row{
		
	}
</style>
