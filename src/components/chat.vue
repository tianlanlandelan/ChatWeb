<!--聊天窗口-->
<template>
	<div>
		<!--联系人昵称-->
		<el-row class="title-row bg">
			<el-col class="title" :span="12">
				犊子
			</el-col>
			<el-col class="icon" :span="12">
				<img src="../../static/icon/me.png">
			</el-col>
		</el-row>
		<!--聊天内容界面-->
		<el-row class="show-row bg" :style="{height:(height - 120) * 0.6 + 'px'}">
			<!-- 注意需要给 el-scrollbar 设置高度，判断是否滚动是看它的height判断的 -->
			<el-scrollbar 
				style="height: 100%;"
				wrapStyle="overflow-x: hidden;"
				>
			    <Dialogue :portrait="portrait" :title="title" :content="message.message" v-for="message in messages" :key="message.id"></Dialogue>
			</el-scrollbar>
		</el-row>
		<!--内容编辑区-->
		<el-row class="edit-row bg" :style="{height:(height - 120) * 0.4 + 'px'}">
			11
			
		</el-row>
	</div>
</template>

<script>
	import Dialogue from "../components/dialogue.vue"
	import {testData} from "../data.js"
	export default {
		props:{
			
		},
		components:{Dialogue,testData},
		data () {
				return {
				  messages:testData.messages,
				  portrait:testData.portrait,
				  title:"犊子",
				  height:window.innerHeight
				}
		},mounted(){
			window.onresize = () => {
				this.height = window.innerHeight;
				console.log(this.innerHeight);
			};
			
		}
		
	}
</script>

<style>
	.bg{
		border-width: 1px;
		border-style: solid;
		border-color: #DCDFE6;
		background-color: #EBEEF5;
	}
	.title-row{
		padding:10px;
		height: 60px;
		line-height: 40px;
	}
	.title-row .title{
		font-size:1.2rem;
	}
	.title-row .icon{
		text-align: right;
	}
	.title-row img{
		width: 1.2rem;
	}
	.show-row{
		
	}
	
	.edit-row{
		
	}
</style>
