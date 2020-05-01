import React, { Component } from 'react'
import { Input, Button, Form, Message } from 'antd';
import style from '../../routes/change_avatar/index.scss'
import { pwd_reg, user_all_people_login } from '../../utils/Regexp.js';
import axios from 'axios'
class index extends Component {

    render() {
        const onFinish = values => {
            axios.get(user_all_people_login, {
                params: {
                    name: values.name,
                    password: values.password
                }
            })
                .then((res) => {
                    console.log(res.data.data)
                    if (3 == res.data.data.status) {
                        Message.error("登录失败,您被系统认为为非法用户，请联系管理员")
                    }
                    else {
                        localStorage.setItem("email", res.data.data.access);
                        this.props.history.push('/user_msg')
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
                        label="旧密码"
                        name="old_password"
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
