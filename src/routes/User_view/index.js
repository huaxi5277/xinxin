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
            id : 0
        }
    }
    componentDidMount(){
    const arr =   this.props.location.pathname.split('/')
    const id = localStorage.getItem("email")
    this.setState({
        id : id  
    })
    this.handleClick(arr[2])
    
    }
    handleClick(k){
       this.setState({
           SelectedKeys : [k]
       })
    }
    render() {
        const {routes} = this.props
        return (
            <div className="swim-skill">
                <Menu
                 mode="inline"
                 selectedKeys={this.state.SelectedKeys}
                 defaultOpenKeys={['sub1','sub2','sub3','sub4']}
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
                    style = {{display : this.state.id == 1  ?  "block" : "none"}}
                    title={
                        <span>
                            <span>订单管理</span>
                        </span>
                    }
                    >
                        <Menu.ItemGroup key="g2" >
                              <Menu.Item key="detail"><Link to="/user_msg/detail">订单信息</Link></Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <SubMenu
                    key="sub3"
                    className="submenu-wrap"
                    style={{display :"block"}}
                    style = {{display : this.state.id == 2 ?  "block" : "none"}}
                    title={
                        <span>
                            <span>管理员</span>
                        </span>
                    }
                    >
                        <Menu.ItemGroup key="g3">
                        <Menu.Item key="find_user_profile"><Link to="/user_msg/find_user_profile">用户身份</Link></Menu.Item>
                        <Menu.Item key="find_user_power"><Link to="/user_msg/find_user_power">用户权限</Link></Menu.Item>
                        <Menu.Item key="select_artical"><Link to="/user_msg/select_artical">查询所有垃圾</Link></Menu.Item>
                        <Menu.Item key="select_recycle"><Link to="/user_msg/select_recycle">查询所有回收物</Link></Menu.Item>
                        <Menu.Item key="select_all_detail"><Link to="/user_msg/select_all_detail">查询所有订单信息</Link></Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <SubMenu
                    key="sub4"
                    className="submenu-wrap"
                    style = {{display : this.state.id == 3  ?  "block" : "none"}}
                    title={
                        <span>
                            <span>订单管理</span>
                        </span>
                    }
                    >
                        <Menu.ItemGroup key="g2" >
                              <Menu.Item key="work_detail"><Link to="/user_msg/work_detail">订单管理</Link></Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
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

