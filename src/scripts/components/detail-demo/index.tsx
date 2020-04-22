import React, { Component } from 'react';
import { Divider, Tooltip, Icon } from 'antd';
import PageHeader from '../page-header';
import DetailList from '../detail-list';
import PreviewImage from '../preview-image';
import { decodeBase64, getUrlParam } from '@util/index';
import './index.less';

const DetailItem = DetailList.DetailItem;
class FormDemo extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      orderId: decodeBase64(getUrlParam('params')).orderId
    };
  }

  render() {
    console.log(`----orderId:${this.state.orderId}`);
    return (
      <div className="detail-demo">
        <PageHeader titleText="分配客户经理" />
        <Divider />
        <DetailList title="测试标题" col={4}>
          <DetailItem
            isRequired
            title={
              <span>
                所属门店
                <Tooltip title="所属门店说明文字">
                  <Icon
                    style={{ color: 'rgba(0, 0, 0, 0.43)', marginLeft: 4 }}
                    type="info-circle-o"
                  />
                </Tooltip>
              </span>
            }
          >
            ddddd
          </DetailItem>
          <DetailItem isRequired title="维护人姓名">
            李迎
          </DetailItem>
          <DetailItem isRequired title="维护人姓名">
            李迎
          </DetailItem>
          <DetailItem isRequired title="维护人姓名">
            李迎
          </DetailItem>
          <DetailItem title="维护人姓名">李迎</DetailItem>
          <DetailItem title="维护人姓名">李迎</DetailItem>
        </DetailList>
        <DetailList title="测试标题" col={4}>
          <DetailItem
            isRequired
            title={
              <span>
                所属门店
                <Tooltip title="所属门店说明文字">
                  <Icon
                    style={{ color: 'rgba(0, 0, 0, 0.43)', marginLeft: 4 }}
                    type="info-circle-o"
                  />
                </Tooltip>
              </span>
            }
          >
            xxxxxx
          </DetailItem>
          <DetailItem isRequired title="维护人姓名">
            李迎
          </DetailItem>
          <DetailItem isRequired title="维护人姓名">
            李迎
          </DetailItem>
          <DetailItem isRequired title="维护人姓名">
            李迎
          </DetailItem>
          <DetailItem title="维护人姓名">李迎</DetailItem>
          <DetailItem title="维护人姓名">
            <PreviewImage
              thumb="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </DetailItem>
        </DetailList>
      </div>
    );
  }
}

export default FormDemo;
