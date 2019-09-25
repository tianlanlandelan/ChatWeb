<template>
<el-row class="container">
	<!-- 页面内容 -->
	<el-row>
		<!--左侧导航-->
		<el-col :span="1" class= "left-bar" :style="{height:height  + 'px'}">
			<img class="menu-img" src="../../static/img/icon.png" />
			<img class="menu-img" src="../../static/img/icon.png" />
			<img class="menu-img" src="../../static/img/icon.png" />
			<img class="menu-img" src="../../static/img/icon.png" />
		</el-col>

		<!--中间列表-->
		<el-col :span="6" class="middle-list">
			<MessageList></MessageList>
		</el-col>
		<!-- 右侧内容 -->
		<el-col :span="17" class = "right-content">
			<Chat></Chat>
		</el-col>
	</el-row>

</el-row>
</template>

<script>
	import MessageList from "../components/messageList.vue";
	import {testData} from "../data.js";
	import Chat from "../components/chat.vue"
	export default {
		components:{MessageList,Chat,testData},
		data() {
			return {
				sysName:'内部培训',
				sysUserName: '',
				sysUserAvatar: '',
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				height:window.innerHeight
			}
		},
		methods: {
			//控制左侧导航栏展开收起
			collapse(){
				this.isCollapse=!this.isCollapse;
			},
			onSubmit() {
				console.log('submit!');
			},
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			//个人消息
			mymessage(){
				console.log("个人消息");
			},
			//设置
			mysetting(){
				console.log("设置");
			},
			//退出登录
			mylogout: function () {
				var _this = this;
				this.$confirm('确认退出吗?', '提示', {
					//type: 'warning'
				}).then(() => {
					sessionStorage.removeItem('user');
					_this.$router.push('/login');
				}).catch(() => {

				});
			}
			
		},
		mounted() {
			window.onresize = () => {
				this.height = window.innerHeight;
				console.log("home.vue",this.height);
			};
			var user = sessionStorage.getItem('user');
			if (user) {
				user = JSON.parse(user);
				this.sysUserName = user.name || '';
				this.sysUserAvatar = user.avatar || '';
			}
		}
	}

</script>
<style scoped lang="scss">
	@import '~scss_vars';
	// 浏览器默认字体大小都是16px  也就是 1rem
	html{
		font-size: 16px;
	}
	html,body,div{
		padding:0;
		margin: 0;
	}
	.menu-img{
		width: 40px;
		height: 40px;
		border-radius: 40px;
		margin: 10px;
	}
	.left-bar{
		border-right: 1px solid #DCDFE6;
		height: 100%;
		background-color: #475669;
		max-width: 60px;
	}
	
	.middle-list{
		
	}

	.right-content{
		
	}


	.Success{
		color:#67C23A;
	}
	.Blue{
		color:#409EFF;
	}
	.Info{
		color:#909399;
	}
</style>
