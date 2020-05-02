// 规则：[大小写字母数字_-.]@[大小写字母数字_-.].[2-8位的大小写字母]
export const email_reg = /^([A-Za-z0-9_\-\.]{6,9})+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/g;

//6-16位字母或数字或特殊字符_-.
export const pwd_reg = /^([A-Za-z0-9_\-\.]{6,16})$/g;
// 表单手机号验证
export const phone_reg = /^(\d{11,11})$/g

const domain = "http://118.190.107.159:8080/com.colin-1.0-SNAPSHOT/";
// User 普通用户 注册
export const user_general_register   =  domain + "user/regiestUser.do";
// User 工作人员 注册
export const user_work_people_register = domain + "user/regiestWorker.do";

// User 登录 
export const user_all_people_login = domain  + "user/checkUser.do";


// 1级 2级 查询 数据
export const frist_second_get_msg = domain + "recycle/defaultPage.do"; 


// 页面 初始化   回收 

export const   init_recover1_thing = domain + 'manage/selectAllDetail.do';
export const   init_recover2_thing = domain + 'manage/selectAllMoreDetail.do';

// 实名认证 默认值  接口   

export const  init_real_name = domain + "user/findAllUser.do";

// 实名认证  接口 

export const  real_name = domain + "user/realUser.do"




// 管理员 查询 用户权限接口


export const user_profile_access = domain + "user/selectAllByAccess.do"



// 管理员 查询 用户状态接口


export const user_profile_status = domain + "user/selectAllByStatus.do"


// 管理员 黑名单接口 

export const will_user_black_house = domain + "user/deleteUser.do"

// 首页 分词查询 
export const main_view_seach_by_input = domain + "search/searchByName.do"

