<template>
  <el-row>
    <!-- 登录界面-->
    <el-form :model="user" 
		:rules="logonRules" ref="user" 
		label-position="left" label-width="0px" 
		class="demo-ruleForm login-container">
      <h3 class="title">找回密码</h3>
	  <div v-if="step1">
		  <!-- 用户名输入框 -->
		  <el-form-item prop="username" >
		    <el-input type="text" v-model="user.username" auto-complete="on" placeholder="手机号或邮箱"></el-input>
		  </el-form-item>
		  <!-- 发送验证码 -->
		  <el-form-item style="width:100%;" >
		    <el-button type="primary" style="width:100%;" @click="handlerGetCode()">发送验证码</el-button>
		  </el-form-item>
	  </div>
	  
	  <div v-if="step2">
		  <!-- 验证码输入 -->
		  <el-form-item >
		    <el-input type="text" v-model="user.code" auto-complete="off" placeholder="请输入验证码"></el-input>
		  </el-form-item>
		  <el-form-item prop="password" >
		    <el-input type="password" v-model="user.password" auto-complete="off" placeholder="请输入新的密码"></el-input>
		  </el-form-item>
		  <!-- 登录按钮 -->
		  <el-form-item style="width:100%;" >
		    <el-button type="primary" style="width:100%;" @click="handleResetPasword()" :loading="logining">重置密码</el-button>
		  </el-form-item>
	  </div>
    </el-form>
  </el-row>
</template>

<script>
  import { req_logon } from '../api/api';
  export default {
    data() {
      return {
		//输入手机号、邮箱
		step1:true,
		//输入验证码 重置密码
		step2:false,
        //登录用户数据
        user: {
          username: '',
		  code:'',
          password: ''
        },
        //登录验证规则
        logonRules: {
          username: [
            { required: true, message: '请输入账号', trigger: 'blur' },
          ]
        },
        //登录按钮是否显示加载动画
        logining: false
      };
    },
    methods: {
	  handlerGetCode(){
		  this.step1 = false;
		  this.step2 = true;
		  this.$message({
			message: '验证码成功发送到：' + this.user.username ,
			type: 'success',
			duration:5000
		  });
	  },
      //登录操作
      handleResetPasword() {
		  console.log('handleLogon',this.user.username,this.user.code);
		  // 验证码登录成功
			this.$message({
				message: this.user.username + '，密码重置成功' ,
				type: 'success',
				duration:5000
			});
			this.$router.push('/Login');
      }
    }
  }

</script>

<style lang="scss" scoped>
  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 500px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
</style>