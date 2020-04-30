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
        path : '/design',
        component : ()=>import('./routes/Design'),
        model : []
      },
      {
        path : "/recover",
        component : ()=>import('./routes/recover'),
        model : []
      },
      {
        path : "/user_msg",
        component : ()=>import('./routes/User_view'),
        model : [],
        isAuthority,
        routes : [
          {
            path : "/user_msg/change_password",
            component : ()=>import('./routes/change_passpork'),
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
