import React, { Component } from 'react';
import { Icon, Button } from 'antd';
import history from '@routes/history';

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
      <div className="reset-status">
        <Icon type="close-circle" theme="outlined" className="fail-status" />
        <Icon type="check-circle" theme="outlined" className="success-status" />
        <p className="desc-info">密码已发送到您的租车邮箱</p>

        <p className="other-desc-info">如有问题请致电 400 616 6666</p>
        <div className="opt-btn">
          <Button className="btn-item" type="primary" size="large">
            查看邮箱
          </Button>
          <Button
            className="btn-item"
            size="large"
            onClick={() => history.push('/')}
          >
            返回首页
          </Button>
        </div>
      </div>
    );
  }
}
export default Index;
