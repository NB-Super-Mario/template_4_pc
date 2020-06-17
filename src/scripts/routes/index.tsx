import React from 'react';

import { Redirect, Switch } from 'react-router-dom';
import RouteWithSubRoutes from './routeWithSubRoutes';

import LoadableComponent from '@routes/loadable-component';
/* import Guide from '@components/guide'; */
// 顶级路由配置
const routes = [
  {
    exact: true, // 是否是默认
    path: '/',
    component: () => <Redirect to="/home" />,
  },

  {
    path: '/home',
    component: LoadableComponent(() => import('@routes/home/index/index'))(),
  },
  {
    path: '/404',
    component: LoadableComponent(() => import('@routes/no-match/index'))(),
  },
  {
    path: '/*',
    component: () => <Redirect to="/404" />,
  },
];

const BaseRouter = () => (
  <div className="main">
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Switch>
    {/* <Guide /> */}
  </div>
);

/**
 * 根据json 动态配置路由
 * @param {*} route
 */

export default BaseRouter;
