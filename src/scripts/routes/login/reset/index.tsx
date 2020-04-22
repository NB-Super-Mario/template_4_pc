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

  render() {
    return (
      <div className="reset-password">
        <h2 className="title-info">找回密码</h2>
        <p className="desc-info">将密码发送到专车邮箱</p>

        <WrappedNormalLoginForm />
        <p className="other-desc-info">如有问题请致电 400 616 6666</p>
      </div>
    );
  }
}
export default Index;
