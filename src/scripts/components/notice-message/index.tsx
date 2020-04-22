import React, { Component } from 'react';
import { Tabs } from 'antd';

import './index.less';

const TabPane = Tabs.TabPane;

const MessageItem = props => (
  <div className="notice-item">
    <h4 className="notice-item-title">加盟商价格导入已处理</h4>
    <p className="notice-item-content">
      加盟商微观价格--出租率折扣-节假日数据导入节假日数据成功
    </p>
    <div className="notice-item-time">2018-08-23 17:20</div>
  </div>
);
class NoticeMessage extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      messageLit: [],
      scheduleList: [1, 2, 3]
    };
  }

  callback = (key: any) => {
    console.log(key);
  };

  render() {
    const { messageLit, scheduleList } = this.state;
    return (
      <div className="notice-message">
        <Tabs defaultActiveKey="1" onChange={this.callback}>
          <TabPane tab="消息通知(6)" key="1">
            {messageLit.length > 0 ? (
              [
                messageLit.map((item: any) => (
                  <MessageItem item={item} key={`msg-${item}`} />
                )),
                <div className="clear-msg" key="clear-msg">
                  清空通知
                </div>
              ]
            ) : (
              <div className="message-empty ">
                <i className="u-bell" />
                <div className="warning-info">你已查看所有通知</div>
              </div>
            )}
          </TabPane>
          <TabPane tab="待办事项(12)" key="2">
            {scheduleList.length > 0 ? (
              [
                scheduleList.map(item => (
                  <MessageItem item={item} key={`schedule-${item}`} />
                )),
                <div className="clear-msg" key="clear-schedule-msg">
                  清空通知
                </div>
              ]
            ) : (
              <div className="message-empty ">
                <i className="u-bell" />
                <div className="warning-info">你已查看所有待办事项</div>
              </div>
            )}
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default NoticeMessage;
