<!--消息列表-->
<template>
	<div>
		<el-row class="row" v-for= "message in messageList" :key = "message.id">
			<!--头像-->
			<el-col class="left" :span="4">
				<img class="portrait" :src="message.portrait" >
				<RedDot :top="40" :left="40" :number="message.number" v-if="message.number > 0"></RedDot>
			</el-col>
			<!--消息-->
			<el-col class="middle" :span="16">
				<div class = "title">{{message.title}}</div>
				<div class="text">{{message.text}}</div>
			</el-col>
			<!--时间-->
			<el-col class="right" :span="4">
				<div class="date-time">{{message.dateTime}}</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import {testData} from "../data.js";
	import RedDot from "../components/redDot.vue";
	export default {
		props:{
			
		},
	  components:{testData,RedDot},
	  data () {
		return {
		  messageList:[]
		}
	  }
	  ,mounted() {
		this.messageList = testData.messageList;
	  }
	}
</script>

<style>
	.row{
		border-width: 1px;
		border-style: solid;
		border-color: #DCDFE6;
		padding:10px;
		background-color: #EBEEF5;
		min-width:300px;
	}
	.left{
		height: 40px;
	}
	.middle{
		padding-left: 10px;
	}
	.right{
		text-align: right;
	}
	.portrait{
		width: 40px;
		border-radius: 20px;
	}
	.title{
		color: #303133;
		font-size: 16px;
	}
	.text{
		color: #909399;
		font-size: 12px;
	}
	.date-time{
		color: #909399;
		font-size: 12px;
	}
	
	
</style>
