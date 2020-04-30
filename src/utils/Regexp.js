// 规则：[大小写字母数字_-.]@[大小写字母数字_-.].[2-8位的大小写字母]
export const email_reg = /^([A-Za-z0-9_\-\.]{6,9})+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/g;

//6-16位字母或数字或特殊字符_-.
export const pwd_reg = /^([A-Za-z0-9_\-\.]{6,16})$/g;

const domain = "http://118.190.107.159:8080/com.colin-1.0-SNAPSHOT/"
// User 普通用户 注册
export const user_general_register   =  domain + "user/regiestUser.do"
// User 工作人员 注册
export const user_work_people_register = domain + "user/regiestWorker.do"

// User 登录 
export const user_all_people_login = domain  + "user/checkUser.do"


