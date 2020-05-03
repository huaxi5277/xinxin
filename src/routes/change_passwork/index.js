import React, { Component } from 'react'
import { Input, Button, Form, Message } from 'antd';
import style from '../../routes/change_avatar/index.scss'
import { pwd_reg, user_all_people_login , revise_password } from '../../utils/Regexp.js';
import axios from 'axios'
class index extends Component {

    render() {
        const id = localStorage.getItem("current_id")
        const onFinish = values => {
            axios.get(revise_password, {
                params: {
                    id: id,
                    password: values.new_password
                }
            })
                .then((res) => {
                  if(res.data.code == 200){
                      Message.success("修改成功,请重新登录")
                      window.localStorage.clear();
                      this.props.history.push('/login')
                  }
                  

                })
        };
        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };
        return (
            <div className="change_password">
                <Form
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="新密码"
                        name="new_password"
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

                    <Form.Item name="submit">
                        <Button type="primary" htmlType="submit" className="revise_button">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}



export default index
