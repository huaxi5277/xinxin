import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Private from './utils/Private'
const isAuthority = false
let routeArr = [
  {
    path : "/",
    component : ()=>import('../src/routes/IndexPage'),
    model : [],
    routes : [
      {
        path : "/home",
        component : ()=>import('./routes/main_view'),
        model : [],
        isAuthority
      },
      {
        path : "/login",
        component : ()=>import('./routes/Login'),
        model : []
      },
      {
        path : '/design',
        component : ()=>import('./routes/Design'),
        model : []
      },
      {
        path : "/find",
        component : ()=>import('./routes/find_msg'),
        model : []
      },
      {
        path : "/recover",
        component : ()=>import('./routes/recover'),
        model : []
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
