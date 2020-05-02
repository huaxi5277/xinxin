import React, { Component } from 'react'
import axios from 'axios'
import { Menu, Icon } from 'antd';
import { init_recover1_thing, init_recover2_thing } from '../../utils/Regexp'
import { Link, Switch } from 'dva/router'
import Private from '../../utils/Private'
import style from './index.scss'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;

class index extends Component {
    constructor() {
        super()
        this.state = {
            init_list_first: [],
            init_list_second: [],
            SelectedKeys : []
        }
    }
    componentDidMount() {
      
        const arr = this.props.location.pathname.split('/')
        let result =   `${arr[2]}/${arr[3]}/${arr[4]}`
        this.handleClick(result)
        axios.get(init_recover1_thing)
            .then((res) => {
                this.setState({
                    init_list_first: res.data.data
                })
            })
        axios.get(init_recover2_thing).then((res) => {
            this.setState({
                init_list_second: res.data.data
            })
        })
    }
    handleClick(k){
        this.setState({
            SelectedKeys : [k]
        })
     }
    render() {
        const { routes  } = this.props
        const {init_list_first,init_list_second} = this.state
        return (
            <div className="recover-container">
                 <Menu
        style={{ width: 256 }}
        selectedKeys={this.state.SelectedKeys}
        defaultOpenKeys={['sub1','sub2','sub3']}
        mode="inline"
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <span>{init_list_first[0] == undefined ? "" :init_list_first[0].d_name }</span>
            </span>
          }
        >
          <Menu.ItemGroup key="g1">
              {
                  this.state.init_list_second.map((item,index)=>{
                      if(index > 5){
                          return 
                      }
                      else {
                          return(
                            <Menu.Item key={`detail/${1}/${index+1}`}><Link to={`/recover/detail/${1}/${index+1}`}>{item.m_name}</Link></Menu.Item>
                          )
                      }
                  })
              }
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu
        key="sub2"
        title={
          <span>
            <span>{init_list_first[1] == undefined ? "" :init_list_first[1].d_name }</span>
          </span>
        }
        >
                      <Menu.ItemGroup key="g2">
              {
                  this.state.init_list_second.map((item,index)=>{
                    if(index <6 || index > 18){
                        return 
                    }
                    else {
                        return(
                          <Menu.Item key={`detail/${2}/${index+1}`}><Link to={`/recover/detail/${2}/${index+1}`}>{item.m_name}</Link></Menu.Item>
                        )
                    }
                })
              }
          </Menu.ItemGroup>

        </SubMenu>


        <SubMenu
         key="sub3"
         title={
           <span>
             <span>{init_list_first[2] == undefined ? "" :init_list_first[2].d_name }</span>
           </span>
         }
        >
        <Menu.ItemGroup key="g3">
              {
                  this.state.init_list_second.map((item,index)=>{
                    if(index <19 ){
                        return 
                    }
                    else {
                        return(
                          <Menu.Item key={`detail/${3}/${index+1}`}><Link to={`/recover/detail/${3}/${index+1}`}>{item.m_name}</Link></Menu.Item>
                        )
                    }
                }) 
              }
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