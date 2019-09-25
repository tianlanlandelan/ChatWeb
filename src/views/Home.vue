<template>
<el-row class="container">
	<!-- 页头 -->
	<el-row>
		<el-col :span="24" class="header">
			<el-col :span="10" class="logo">
				{{sysName}}
			</el-col>
			<!-- <el-col :span="10">
				<div class="tools" @click.prevent="collapse">
					<i class="fa fa-align-justify"></i>
				</div>
			</el-col> -->
			<el-col :span="4" class="userinfo">
				<el-dropdown trigger="hover">
					<span class="el-dropdown-link userinfo-inner"><img :src="this.sysUserAvatar" /> {{sysUserName}}</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item @click.native="mymessage">我的消息</el-dropdown-item>
						<el-dropdown-item @click.native="mysetting">设置</el-dropdown-item>
						<el-dropdown-item divided @click.native="mylogout">退出登录</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
		</el-col>
	</el-row>
	
	<!-- 页面内容 -->
	<el-row>
		<!--左侧导航-->
		<el-col :span="2" class= "left-bar">
			<div><img class="menu-img" src="../../static/img/icon.png" /></div>
			<div><img class="menu-img" src="../../static/img/icon.png" /></div>
			<div><img class="menu-img" src="../../static/img/icon.png" /></div>
			<div><img class="menu-img" src="../../static/img/icon.png" /></div>
			
		</el-col>

		<!--中间列表-->
		<el-col :span="6" class="middle-list">
			<MessageList></MessageList>
		</el-col>
		<!-- 右侧内容 -->
		<el-col :span="16" class = "right-content">
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
				}
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
	.menu-img{
		width: 40px;
		height: 40px;
		border-radius: 40px;
		margin: 10px;
	}
	.left-bar{
		
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







	.container {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
		.header {
			height: 60px;
			line-height: 60px;
			background: $color-primary;
			color:#fff;
			.userinfo {
				text-align: right;
				padding-right: 35px;
				float: right;
				.userinfo-inner {
					cursor: pointer;
					color:#fff;
					img {
						width: 40px;
						height: 40px;
						border-radius: 20px;
						margin: 10px 0px 10px 10px;
						float: right;
					}
				}
			}
			.logo {
				//width:230px;
				height:60px;
				font-size: 22px;
				padding-left:20px;
				padding-right:20px;
				border-color: rgba(238,241,146,0.3);
				border-right-width: 1px;
				border-right-style: solid;
				img {
					width: 40px;
					float: left;
					margin: 10px 10px 10px 18px;
				}
				.txt {
					color:#fff;
				}
			}
			.logo-width{
				width:230px;
			}
			.logo-collapse-width{
				width:60px
			}
			.tools{
				padding: 0px 23px;
				width:14px;
				height: 60px;
				line-height: 60px;
				cursor: pointer;
			}
		}
		.main {
			display: flex;
			// background: #324057;
			position: absolute;
			top: 60px;
			bottom: 0px;
			overflow: hidden;
			aside {
				flex:0 0 230px;
				width: 230px;
				// position: absolute;
				// top: 0px;
				// bottom: 0px;
				.el-menu{
					height: 100%;
				}
				.collapsed{
					width:60px;
					.item{
						position: relative;
					}
					.submenu{
						position:absolute;
						top:0px;
						left:60px;
						z-index:99999;
						height:auto;
						display:none;
					}

				}
			}
			.menu-collapsed{
				flex:0 0 60px;
				width: 60px;
			}
			.menu-expanded{
				flex:0 0 230px;
				width: 230px;
			}
			.content-container {
				// background: #f1f2f7;
				flex:1;
				// position: absolute;
				// right: 0px;
				// top: 0px;
				// bottom: 0px;
				// left: 230px;
				overflow-y: scroll;
				padding: 20px;
				.breadcrumb-container {
					//margin-bottom: 15px;
					.title {
						width: 200px;
						float: left;
						color: #475669;
					}
					.breadcrumb-inner {
						float: right;
					}
				}
				.content-wrapper {
					background-color: #fff;
					box-sizing: border-box;
				}
			}
		}
	}
</style>
