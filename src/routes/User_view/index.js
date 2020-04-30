import React, { Component } from 'react'
import style from './index.scss'
import { Menu, Icon } from 'antd';
import { Link,Switch } from 'dva/router';
import Private from '../../utils/Private'
const { SubMenu } = Menu;
class index extends Component {
    constructor(){
        super()
        this.state = {
            SelectedKeys : [],
        }
    }
    componentDidMount(){
    const arr =   this.props.location.pathname.split('/')
    this.handleClick(arr[2])
    
    }
    handleClick(k){
       this.setState({
           SelectedKeys : [k]
       })
    }
    render() {
        const {routes} = this.props
         console.log(routes)
        return (
            <div className="swim-skill">
                <Menu
                 mode="inline"
                 selectedKeys={this.state.SelectedKeys}
                 defaultOpenKeys={['sub1','sub2','sub3']}
                 className="submenu-wrap"
                >
                    <SubMenu
                    key="sub1"
                    title={
                        <span>
                            <span>个人信息</span>
                        </span>
                    }
                    >
                     <Menu.ItemGroup key="g1">
                     <Menu.Item key="change_avatar"><Link to="/user_msg/change_avatar">修改头像</Link></Menu.Item>
                     <Menu.Item key="change_password"><Link to="/user_msg/change_password">修改密码</Link></Menu.Item>
                     <Menu.Item key="celebrity"><Link to="/user_msg/celebrity">实名认证</Link></Menu.Item>
                     </Menu.ItemGroup>
                    </SubMenu>
                    <SubMenu
                    key="sub2"
                    className="submenu-wrap"
                    title={
                        <span>
                            <span>订单管理</span>
                        </span>
                    }
                    >
                        <Menu.ItemGroup key="g2">
                              <Menu.Item key="detail"><Link to="/user_msg/detail">订单信息</Link></Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    {/* <SubMenu
                    key="sub3"
                    className="submenu-wrap"
                    title={
                        <span>
                            <span>泳前/泳后护理</span>
                        </span>
                    }
                    >
                        <Menu.ItemGroup key="g3">
                        <Menu.Item key="before"><Link to="/study/before">泳前</Link></Menu.Item>
                        <Menu.Item key="after"><Link to="/study/after">泳后</Link></Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu> */}
                </Menu>
                <div className="show-wrap">
                    <Switch>
                    {
                    routes.map((route,i)=>{
                    return (
                        <Private {...route} key={i}></Private>
                    )
                    })
                }
                    </Switch>
                </div>
            </div>
        )
    }
}
export default index

