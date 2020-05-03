import React, { Component } from 'react';
import { Form, Input, Button, Message, Checkbox } from 'antd';
import { pwd_reg, user_all_people_login } from '../../utils/Regexp.js';
import { Link } from 'dva/router'
import { connect } from 'dva';
import Tree_5 from '../../assets/tree_5.jpg'
import style from './index.scss'
import axios from 'axios'
@connect()

class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 1,
      timeId: null,
      show: false
    }
  }
  componentDidMount() {
    this.state.timeId = setTimeout(() => {
      this.setState({
        show: true
      })
    }, 1000)
  }
  componentWillUnmount() {
    clearTimeout(this.state.timeId)
  }
  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };
  render() {
    const onFinish = values => {
      axios.get(user_all_people_login, {
        params: {
          name: values.name,
          password: values.password
        }
      })
        .then((res) => {
          if(res.data.code == 500 && res.data.msg == "请先注册"){
            Message.error("请先注册")
            return
          }
          if (3 == res.data.data.status) {
            Message.error("登录失败,您被系统认为为非法用户，请联系管理员")
          }
          else {
            localStorage.setItem("email", res.data.data.access);
            localStorage.setItem('current_id',res.data.data.id );
            localStorage.setItem('address', "");
              this.props.history.push('/user_msg')
          }

        })
    };
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };
    return (
      <div className="account">
        <img src={Tree_5} alt="" />
        <div className={` form_view ${this.state.show == true ? "active" : ""}   `}>
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <div className="title_header">xxx登录</div>
            <Form.Item
              label="Username"
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Please input your name!',
                }
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
                {
                  required: true,
                  pattern: pwd_reg,
                  message: "Please enter 6-16 digit password "

                }
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
              <div className="go_register"><Link to="/register">无账号立即注册</Link></div>
            </Form.Item>

            <Form.Item name="submit">
              <Button type="primary" htmlType="submit">
                Submit
        </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default index;