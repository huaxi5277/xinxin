import React, { Component } from 'react'
import axios from 'axios'
import { Menu, Icon } from 'antd';
import { init_recover1_thing, init_recover2_thing } from '../../utils/Regexp'
import { Link, Switch } from 'dva/router'
import Private from '../../utils/Private'
import style from './index.scss'
const { SubMenu } = Menu;
class index extends Component {
    constructor() {
        super()
        this.state = {
            SelectedKeys: [],
            init_list_first: [],
            init_list_second: [],
            init_k: [],
            out_key : 1
        }
    }
    componentDidMount() {
        axios.get(init_recover1_thing)
            .then((res) => {
                this.setState({
                    init_list_first: res.data.data
                })
                console.log(this.state.init_list_first)
            })
        axios.get(init_recover2_thing).then((res) => {
            this.setState({
                init_list_second: res.data.data
            })
        })
    }
    handleClick(k) {
        console.log(k.key)
        this.setState({
            out_key : 3
        })
        console.log(this.state.out_key)
    }
    render() {
        const { routes } = this.props
        return (
            <div className="recover-container">
                <Menu
                    onClick={(k)=>this.handleClick(k)}
                    style={{ width: 256 }}
                    defaultOpenKeys={['sub1','sub2']}
                    mode="inline"
                >
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                
                                <span>Navigation One</span>
                            </span>
                        }
                    >
                        <Menu.ItemGroup key="g1">
                            {
                                this.state.init_list_first.map((item,index)=>{
                                    return(
                                     
                                           <Menu.Item key={(index+1).toString()}  className={ this.state.out_key==index+1 ? "active" : ""} ><Link to= {`/recover/detail/${1}/${index+1}`}>{item.d_name}</Link></Menu.Item>
                                    
                                    )
                                })
                            }
                        </Menu.ItemGroup>
                    </SubMenu>
                    <SubMenu key="sub2"  title="Navigation Two">
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>

                    </SubMenu>
                </Menu>
                <div className="show-wrap">
                    <Switch>
                        {
                            routes.map((route, i) => {
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