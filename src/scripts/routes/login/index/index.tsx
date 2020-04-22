import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Footer from '@components/footer';
import ResetPassword from '../reset/index';
import Login from '../login/index';
import ResetStatus from '../reset-state/index';
import RouteWithSubRoutes from '@routes/routeWithSubRoutes';
import './index.less';

const routes = [
  {
    path: '/login/reset',
    component: ResetPassword
  },
  {
    path: '/login/resetStatus',
    component: ResetStatus
  },
  {
    path: '/login/*',
    component: () => <Redirect to="/404" />
  }
];
class Index extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      initData: '初始化数据'
    };
  }
  render() {
    const { match } = this.props;
    return (
      <div>
        <Switch>
          <Route exact path={match.url} render={() => <Login />} />
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>

        <Footer />
      </div>
    );
  }
}
export default Index;
