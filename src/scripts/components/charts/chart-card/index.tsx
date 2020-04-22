import React, { Component } from 'react';
import { Card } from 'antd';
import './index.less';

class ChartCard extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      messageLit: []
    };
  }

  callback = key => {
    console.log(key);
  };

  render() {
    const {
      contentHeight,
      title,
      avatar,
      action,
      total,
      footer,
      children,
      loading
    } = this.props;
    return (
      <Card loading={loading} bordered={false}>
        <div className="chart-card">
          <div className="chart-card-top">
            <span className="chart-card-title">{title}</span>
            <span className="chart-card-action">{action}</span>
          </div>
          <div className="chart-card-total">{total}</div>
          {children && (
            <div
              className="chart-card-content"
              style={{ height: contentHeight || 'auto' }}
            >
              <div className={contentHeight && 'content-fixed'}>{children}</div>
            </div>
          )}
          {footer && <div className="chart-card-footer">{footer}</div>}
        </div>
      </Card>
    );
  }
}

export default ChartCard;
