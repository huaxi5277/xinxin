import React, { Component } from 'react'
import {Menu,Dropdown,Icon} from 'antd'
import {Link} from 'dva/router'
import style from './index.scss'
 class index extends Component {
     constructor(){
         super()
         this.state = {
            selectedKeys : []
         }
     }
      /**
   * 当页面刷新时，组件会重新加载，会执行 componentDidMount(cdm) 钩子函数
   * 为解决刷新页面菜单与路由不同步问题，解决方法则放在 cdm 钩子函数里执行
   */
  componentDidMount() {
    this.handleSetSelectedKeys(this.props.location.pathname);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { pathname } = this.props.location;
    if (nextProps.location.pathname !== pathname) {
      // 当路由发生改变时, 改变当前菜单选中key值
      this.handleSetSelectedKeys(nextProps.location.pathname);
    }
  }
     handleSetSelectedKeys(pathname) {
        // /admin = ["/","admin"]
        // 根据'/'把路由地址分割成一个数组
        const temp = pathname.split('/');
        // 如果数组的长度小于2,表示的是只有根路径/,设置为Home. 否则取数组中第二个值
        const key = temp && temp.length < 2 ? 'home' : temp[1];
        this.setState({
          selectedKeys: [key]
        });
      }
      handleClickMenu = ({ key }) => {
        if (key === 'logout') {
          window.localStorage.clear();
          this.props.history.push('/login');
        }
      };
      menu = (
        <Menu onClick={(key)=>this.handleClickMenu(key)}>
          <Menu.Item key="user_msg">
            <span><Link to="/user_msg/change_avatar">个人信息</Link></span>
          </Menu.Item>
          <Menu.Item key="logout">
            <span>退出</span>
          </Menu.Item>
        </Menu>
      );
      go_find(){
        if(this.props.history.location.pathname == '/home'){
          // 继续判断 窗口大小
          if(document.body.clientWidth > 968){
            document.documentElement.scrollTop = document.body.scrollTop = 1700
          }
          else {
            document.documentElement.scrollTop = document.body.scrollTop = 2500
          }
          
        }
        else {
          this.props.history.push('/home')
        }
      }
    render() {
        return (
            <div>
                <nav className="top-nav">
                  <Menu style={{borderRight:'none'}}
                  mode="horizontal"
                  defaultSelectedKeys={['1']}
                  selectedKeys={this.state.selectedKeys}
                  >
                      <Menu.Item key="home">
                          <Link to="/"
                          style={{fontWeight:'600',color:"#2c3e50", fontSize:"28px"}}
                          >Recover</Link>
                      </Menu.Item>
                      <Menu.Item key="find" className="go-find" onClick={()=>{this.go_find()}}>
                          查询
                      </Menu.Item>
                      <Menu.Item key="recover" className="go-recover"  >
                          <Link to="/recover">
                              回收
                          </Link>
                      </Menu.Item>
                      <Menu.Item key="design" className="go-design">
                          <Link to="/design">
                              Design
                          </Link>
                      </Menu.Item>
                      {
                          localStorage.email ?
                           <Dropdown overlay={this.menu} className="go-login">
                          <a className="ant-dropdown-link">
                            <span className={style.email}>
                              <img src="https://avatar.bbs.miui.com/images/noavatar_small.gif" alt=""/>
                              </span>{' '}
                            <Icon className={style.icon} type="down" />
                          </a>
                        </Dropdown> 
                        : <Menu.Item key="login" className="go-login">
                          <Link to="/login">Login</Link>
                      </Menu.Item>
                      }
                  </Menu>
                </nav>
            </div>
        )
    }
}
export default index
