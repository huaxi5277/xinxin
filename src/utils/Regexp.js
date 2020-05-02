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


// 用户上传订单信息

export const current_user_update_msg = domain + "recycle/clickArticle.do"

// 首页 分词查询 
export const main_view_seach_by_input = domain + "search/searchByName.do"
























// 页面 初始化   回收 

export const   init_recover1_thing = domain + 'manage/selectAllDetail.do';
export const   init_recover2_thing = domain + 'manage/selectAllMoreDetail.do';

// 管理员 查询 所有垃圾

export const manage_select_artical = domain + "manage/selectArtical.do"

// 管理员 删除 垃圾

export const manage_delete_artical = domain + "manage/deleteArtical.do"

// 管理员 增添垃圾

export const manage_insert_artical = domain + "manage/insertArtical.do"


// 管理员 查看 回收物 

export const manage_select_recycle = domain + "manage/selectAllRecycle.do"
// 管理员 增加 回收物
export const manage_insert_recycle = domain + "manage/insertRecycle.do"
// 管理员 删除回收物
export const manage_delete_recycle = domain + "manage/deleteRecycle.do"

// 管理员 用户 查询 订单信息

export const manage_select_all_order = domain + "manage/selectAllOrder.do"


// 管理员 通过 订单 

export const manage_check_order = domain + "manage/checkOrder.do"

// 管理员删除 订单

export const manage_delete_order = domain + "manage/deleteOrder.do"