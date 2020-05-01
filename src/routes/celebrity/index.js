import React, { Component } from 'react'
import style from '../change_avatar/index.scss'
import { Input, Button, Form, Message } from 'antd';
import {phone_reg,real_name,init_real_name} from '../../utils/Regexp'
import axios from 'axios';
export default class index extends Component {

    constructor(){
        super()
        this.state = {
            
                isActivate : false,
                read_name : "",
                phone : "",
                address : ""
            
        }
    }

   async componentDidMount(){
        const id = localStorage.getItem("current_id")
       let response = await axios.get(init_real_name,{
            params : {
                id : id
            }
        })
        if(response.data.code == 200 && response.data.data.status){
            this.setState({
                isActivate : true,
                read_name : response.data.data.realName,
                phone : response.data.data.phone,
                address : response.data.data.address
            })            
        }
    }



    render() {
        const {init} = this.state
        const onFinish = values => {
           console.log(values)
           const id = localStorage.getItem("current_id")
           console.log(id)
           
           axios.get(real_name, {
            params: {
              id: id,
              realName : values.realName,
              address : values.address,
              phone : values.phone
            }
          })
          .then((res)=>{
              console.log(res.data)
            //   if(res.data.code == 200){
            //       window.onload()
            //   }
              if(res.data.code == 500){
                  Message.error(res.data.msg)
              }
          })
        };
        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };
        return (
            <div className="celebrity_wrap">
                <Form
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="姓&nbsp;&nbsp;&nbsp;名"
                        name="realName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your realName!',
                            }
                        ]}
                    >
                        <Input disabled = {this.state.isActivate == true ? true : false}  placeholder={this.state.isActivate ? this.state.realName : ""} />
                    </Form.Item>
                    <Form.Item
                        label="手机号"
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your phone_number!',
                            },
                            {
                                required: true,
                                pattern: phone_reg,
                                message: "Please input correct phone"

                            }
                        ]}
                    >
                        <Input disabled = {this.state.isActivate == true ? true : false}  placeholder={this.state.isActivate == true ? this.state.phone : ""} value="ni" />
                    </Form.Item>
                    <Form.Item
                        label="地&nbsp;&nbsp;&nbsp;址"
                        name="address"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your address!',
                            }
                        ]}
                    >
                        <Input disabled = {this.state.isActivate == true ? true : false}  placeholder={this.state.isActivate ? this.state.address : ""} />
                    </Form.Item>
                    <Form.Item name="submit">
                        <Button type="primary" htmlType="submit" disabled={this.state.isActivate == true ? true : false}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
