import axios from 'axios';
import md5 from 'js-md5';
/** 需要先登录再访问的路由 */
let api = 'api';

/** 不需要登录就能访问的路由 */
let base = 'base';
let Base64 = require('js-base64').Base64;
let url = "http://localhost:8080";

/**
 * 登录接口
 * @param {用户名、手机号、邮箱} userName 
 * @param {密码} password 
 */
export const req_logon = (userName,password) => { 
    // return axios.post(`${base}/logon`, {
    //     userName:userName,
    //     password:password
    // }).then(res => res.data); 
    let result = {
        success:0,
        data:{
            id:1001,
            nickName:"小圆圆"
        }
    }
    return axios.get(url, {})
              .then(res => result);
};
/**
 * 注册接口
 * @param {手机号或邮箱} userName 
 * @param {密码} password 
 * @param {验证码} code 
 */
export const req_register = (userName,password,code) => { 
    // return axios.post(`${base}/register`, {
    //     userName:userName,
    //     password:password,
    //     verificationCode:code
    // }).then(res => res.data); 
};

/**
 * 发送邮件验证码接口
 * @param {邮箱} email 
 */
export const req_sendEmailVCode = (email) => { 
    // return axios.get(`${base}/sendEmailCode`,{
    //         params:{
    //             email:email
    //         }
    // }).then(res => res.data); 
};