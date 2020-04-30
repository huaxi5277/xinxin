import React, { Component } from 'react';
import { Form, Input, Button, Message, Checkbox, Radio } from 'antd';
import { pwd_reg, user_general_register, user_work_people_register } from '../../utils/Regexp.js';
import { connect } from 'dva';
import Tree_5 from '../../assets/tree_5.jpg'
import style from '../Login/index'
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
      if (this.state.value == 1) {
        axios.get(user_general_register, { params: { name: values.name, password: values.password } })
          .then((res) => {
            if (res.data.code == 200 ) {
              this.props.history.push('/login')
            }
            if(res.data.code == 500 ){
              Message.error(res.data.msg)
            }
          })
      }

      if (this.state.value == 2) {
        axios.get(user_work_people_register, { params: { name: values.name, password: values.password } })
          .then((res) => {
            console.log(this.props.history)
            if (res.data.code == 200) {
              this.props.history.push('/login')
            }
            if(res.data.code == 500 ){
              Message.error(res.data.msg)
            }
          })
      }
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
            <div className="title_header">xxx注册</div>
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
            <Form.Item name="passport" valuePropName="checked">
              <Radio.Group onChange={this.onChange} value={this.state.value}>
                <Radio value={1}>普通用户</Radio>
                <Radio value={2}>回收人员</Radio>
              </Radio.Group>

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
