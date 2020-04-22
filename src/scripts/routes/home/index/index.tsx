import React from 'react';
import { Route, withRouter, Redirect, Switch } from 'react-router-dom';

import Home from '../home';

import RouteWithSubRoutes from '@routes/routeWithSubRoutes';

import LoadableComponent from '@routes/loadable-component';

import './index.less';

const routes = [
  {
    path: '/home/detail',
    component: LoadableComponent(() => import('@routes/home/detail'))(),
  },
  {
    path: '/home/*',
    component: () => <Redirect to="/404" />,
  },
];

const Index = (props: any) => (
  <Switch>
    {routes.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route} />
    ))}
    <Route
      exact
      path={props.match.url}
      render={(): React.ReactNode => <Home />}
    />
  </Switch>
);
export default withRouter(Index);
