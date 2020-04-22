import React, { Component } from 'react';
import WrappedNormalLoginForm from './form';

import './index.less';

class Index extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      initData: '初始化数据'
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  render() {
    return (
      <div className="login">
        <div className="login-banner">
          <div className="login-logo u-logo" />
          <div className="login-desc">
            PC模版-接机、送机，预约用车，专人专车，随叫随到！
          </div>
        </div>
        <WrappedNormalLoginForm />
      </div>
    );
  }
}
export default Index;
