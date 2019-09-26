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
		<el-row class="show-row bg" :style="{height:(height - 60) * 0.6 + 'px'}">
			<!-- 注意需要给 el-scrollbar 设置高度，判断是否滚动是看它的height判断的 -->
			<el-scrollbar 
				style="height: 100%;"
				wrapStyle="overflow-x: hidden;"
				>
			    <Dialogue 
					:portrait="portrait" 
					:title="title" 
					:content="message.message" 
					:isMe="message.from == 1002"
					v-for="message in messages" 
					:key="message.id">
				</Dialogue>
			</el-scrollbar>
		</el-row>
		<!--内容编辑区-->
		<el-row class="edit-row bg" :style="{height:(height - 60) * 0.4 + 'px'}">
			<el-row class="tool">
				
			</el-row>
			<el-row class="input-row" :style="{height:(height - 60) * 0.4 - 40 + 'px'}">
				<textarea class="input" id="text" autofocus></textarea>
			</el-row>
		</el-row>
	</div>
</template>

<script>
	import Dialogue from "../components/dialogue.vue"
	import {testData} from "../data.js"
	export default {
		props:{
			// 窗口高度，窗口高度可能发生变化，需要在监听window.onresize事件的页面中传入动态变化的窗口高度
			height:0
		},
		components:{Dialogue,testData},
		data () {
				return {
				  messages:testData.messages,
				  portrait:testData.portrait,
				  title:"犊子",
				  isMe:false
				}
		},mounted(){
			// 监听键盘按下事件，回车键发送消息
			let _this = this;
			var text = document.getElementById('text'); 
			text.onkeydown = function(e) { 
			  if(e.keyCode == 13) { 
				_this.$message({
				  message: text.value,
				  type: 'success'
				}); 
			  } 
			} 
		},
		methods:{
			
		}
		
	}
</script>

<style>
	.bg{
		border-bottom: 1px solid #d7d6d6;
		border-left: 1px solid #d7d6d6;
		background-color: #F3F3F3;
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
	.tool{
		height: 40px;
		border-bottom: 1px solid #d7d6d6;
	}
	.input-row{
		padding: 20px;
	}
	.input{
		width: 100%;
		height: 100%;
		border: none;
		background-color: #F3F3F3;
		resize:none ;
	}
</style>
