import React, { Component } from 'react';
import { Form, Input, Button, Message } from 'antd';
import { email_reg, pwd_reg } from '../../utils/Regexp.js';
import { connect } from 'dva';
import Logo from '../../assets/bg-swim.png'
import style from './index.scss'
import axios from 'axios'
@connect()
class index extends Component {
    constructor(props){
        super(props)
    }
  // 自定义表单校验规则
  validatorForm = (rule, value, callback) => {
    if (value && rule.pattern && !value.match(rule.pattern)) {
      callback(rule.message);
    } else {
      callback();
    }
  };

  // 自定义校验两次密码是否一致
  validatorPwd = (rule, value, callback) => {
    if (value !== this.props.form.getFieldValue('pwd')) {
      callback(rule.message);
      return;
    }
    callback();
  };

  submit
  async handleSubmit(e) {
    e.preventDefault();
    var res  = {}
    this.props.form.validateFields((err,values)=>{
        const {email,password} = values
        res= {
           email,
           password
        }  
   })
   var respose = await   axios.post('http://localhost:4000/swimmimg/users/login',res)
   if(respose.data.msg==true){
    localStorage.setItem('email', res.email);
    this.props
    .dispatch({
        type:'global/setUserInfo',
        payload : res
    })
    .then(()=>{
        this.props.history.push('/')
    });
   }
   else {
       if(respose.data.email == '用户不存在!'){
        Message.error(respose.data.email)
       }
       else {
        Message.error('账号或密码错误!')
       }
   }
  };

  render() {
    return (
      <div className="account">
        <img src={Logo} alt=""/>
        <Form className="account-form" >
          <Form.Item label="邮箱" rules={[{
                  required: true,
                  message: '邮箱不能为空, 请输入邮箱'
                },
                {
                  pattern: email_reg,
                  validator: this.validatorForm,
                  message: '请输入正确的邮箱格式,如: xxxxxxx@qq.com'
                }]}>
          <Input />
          </Form.Item>
          <Form.Item label="密码" rules={[ {
                  required: true,
                  message: '密码不能为空，请输入密码！'
                },
                {
                  pattern: pwd_reg,
                  validator: this.validatorForm,
                  message:
                    '请输入正确的密码格式：6-16位字母、数字或特殊字符 _-.'
                }]} >
          <Input
                maxLength={16}
                type="password"
                placeholder="请输入6-16位字母、数字或特殊字符的密码"
              />
          </Form.Item>
          <Form.Item>
            <Button onClick={(e)=>this.handleSubmit(e)} className="btn" type="primary">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default index;