import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Private from './utils/Private'
const isAuthority = true
let routeArr = [
  {
    path : "/",
    component : ()=>import('../src/routes/IndexPage'),
    model : [],
    routes : [
      {
        path : "/home",
        component : ()=>import('./routes/main_view'),
        model : []
      },
      {
        path : "/login",
        component : ()=>import('./routes/Login'),
        model : []
      },
      {
        path : "/register",
        component : ()=>import('./routes/Register'),
        model : []
      },
      {
        path : "/recover",
        component : ()=>import('./routes/recover'),
        model : [],
        isAuthority,
        routes : [
          {
            path : "/recover/detail",
            component : ()=>import('./routes/recover/detail'),
            model : [],
          },
        ]
      },
      {
        path : "/user_msg",
        component : ()=>import('./routes/User_view'),
        model : [],
        isAuthority,
        routes : [
          {
            path : "/user_msg/change_password",
            component : ()=>import('./routes/change_passwork'),
            model : [],
          },
          {
            path : "/user_msg/work_detail",
            component : ()=>import('./routes/work_detail'),
            model : [],
          },
          {
            path : "/user_msg/select_recycle",
            component : ()=>import('./routes/selectRecycle'),
            model : [],
          },
          {
            path : "/user_msg/select_artical",
            component : ()=>import('./routes/selectArtical'),
            model : [],
          },
          {
            path : "/user_msg/change_avatar",
            component : ()=>import('./routes/change_avatar'),
            model : [],
          },
          {
            path : "/user_msg/celebrity",
            component : ()=>import('./routes/celebrity'),
            model : [],
          },
          {
            path : "/user_msg/detail",
            component : ()=>import('./routes/detail'),
            model : [],
          },
          {
            path : "/user_msg/user_recover",
            component : ()=>import('./routes/user_recover'),
            model : []
          },
          {
            path : "/user_msg/find_user_profile",
            component : ()=>import('./routes/find_user_profile'),
            model : []
          },
          {
            path : "/user_msg/find_user_power",
            component : ()=>import('./routes/find_user_power'),
            model : []
          },
          {
            path : "/user_msg/select_all_detail",
            component : ()=>import('./routes/select_all_detail'),
            model : []
          }
        ]
      }
    ]
  }
]
function RouterConfig({ history,app}) {
  return (
    <Router history={history}>
      <Switch>
        {
          routeArr.map((route,i)=>{
            return (
             <Private {...route} key={i} app={app}></Private>
            )
          })
        }
      </Switch>
    </Router>
  );
}

export default RouterConfig;
