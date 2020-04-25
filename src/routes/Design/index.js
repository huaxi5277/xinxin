import React, { Component } from 'react'
import style from './index.scss'
import {Descriptions} from 'antd'
 class index extends Component {
    render() {
        return (
            <div className="go-design-view">
                <div className="go-design-view-title">
                <Descriptions title="Descriptions">
                <Descriptions.Item label="UserName">Liu xiao bo</Descriptions.Item>
                <Descriptions.Item label="Telephone">17545123671</Descriptions.Item>
                <Descriptions.Item label="Profession">a front-end engineer </Descriptions.Item>
                <Descriptions.Item label="Live">fengtai beijing</Descriptions.Item>
                <Descriptions.Item label="Address">
                 No. 18, Wantang Road, feitai District,  beijing, China
                </Descriptions.Item>
                <Descriptions.Item label="summarized account">
                    走在前端技术最前面的男人 热爱编程 热爱技术 
                </Descriptions.Item>
                <Descriptions.Item label="skill">
                   css html js node react webpack vue ..... 
                </Descriptions.Item>
                </Descriptions>
                </div>
            </div>
        )
    }
}
export default index
