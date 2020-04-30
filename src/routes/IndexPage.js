import React,{Component} from 'react';
import { connect } from 'dva';
import styles from './IndexPage.scss';
import {Layout} from 'antd'
import Navbar from './navbar'
import {Switch} from 'dva/router'
import Private,{RedirectRoute,NoMatchRoute} from '../utils/Private';
import 'normalize.css'
const {Header,Content} = Layout
class IndexPage extends Component {
  constructor(props){
    super(props)
  }
  render(){
    const { routes } = this.props
    return (
     <div>
       <Layout className={styles.layout}>
       <Header className={styles.header}>
         <Navbar {...this.props} />
       </Header>
       <Content className={styles.content}>
         <Switch>
           {
            routes.map((route,i)=>{
              return (
                <Private key={i} {...route}></Private>
              )
            })
           }
            <RedirectRoute from="/" exact={true} routes={routes}></RedirectRoute>
         <NoMatchRoute></NoMatchRoute>
         </Switch>
       </Content>
       </Layout>
     </div>
    )
  }
}

export default connect()(IndexPage);
