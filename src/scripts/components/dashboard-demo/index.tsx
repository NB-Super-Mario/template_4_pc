import React, { Component } from 'react';
import { Row, Col, Tooltip, Icon, Tabs, DatePicker, Card } from 'antd';
import numeral from 'numeral';
import moment from 'moment';
import ChartCard from '../charts/chart-card';
import Trend from '../trend';
import Field from '../charts/field';
import MiniArea from '../charts/min-area';
import MiniBar from '../charts/min-bar';
import MiniProgress from '../charts/min-progress';
import Bar from '../charts/bar';
import { getTimeDistance } from '@util/index';
import './index.less';

const { TabPane } = Tabs;
const { RangePicker } = DatePicker;
const colResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 6,
  lg: 6,
  xl: 6
};

class DashboardDemo extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      rangePickerValue: getTimeDistance('year'),
      loading: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 1000);
  }

  selectDate = type => {
    this.setState({
      rangePickerValue: getTimeDistance(type)
    });
  };

  handleRangePickerChange(rangePickerValue) {
    this.setState({
      rangePickerValue
    });
  }

  isActive(type) {
    const { rangePickerValue } = this.state;
    const value = getTimeDistance(type);
    if (!rangePickerValue[0] || !rangePickerValue[1]) {
      return '';
    }
    if (
      rangePickerValue[0].isSame(value[0], 'day') &&
      rangePickerValue[1].isSame(value[1], 'day')
    ) {
      return 'current-date';
    }
    return '';
  }

  render() {
    const visitData = [];
    const beginDay = new Date().getTime();

    const fakeY = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5];
    for (let i = 0; i < fakeY.length; i += 1) {
      visitData.push({
        x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format(
          'YYYY-MM-DD'
        ),
        y: fakeY[i]
      });
    }

    const salesData = [];
    for (let i = 0; i < 12; i += 1) {
      salesData.push({
        x: `${i + 1}月`,
        y: Math.floor(Math.random() * 1000) + 200
      });
    }

    const rankingListData = [];
    for (let i = 0; i < 7; i += 1) {
      rankingListData.push({
        title: `PC模版号${i}店`,
        total: 323234
      });
    }

    const salesExtra = (
      <div className="sales-extra-wrap">
        <div className={`sales-extra`}>
          <a
            className={this.isActive('today')}
            onClick={() => this.selectDate('today')}
          >
            今日
          </a>
          <a
            className={this.isActive('week')}
            onClick={() => this.selectDate('week')}
          >
            本周
          </a>
          <a
            className={this.isActive('month')}
            onClick={() => this.selectDate('month')}
          >
            本月
          </a>
          <a
            className={this.isActive('year')}
            onClick={() => this.selectDate('year')}
          >
            本年
          </a>
        </div>
        <RangePicker
          value={this.state.rangePickerValue}
          onChange={this.handleRangePickerChange}
          style={{ width: 256 }}
        />
      </div>
    );
    const { loading } = this.state;
    return (
      <div className="dashboard-demo">
        <Row gutter={24}>
          <Col {...colResponsiveProps}>
            <ChartCard
              loading={loading}
              title="总销售额"
              total={`¥ ${numeral(12423).format('0,0')}`}
              action={
                <Tooltip title="指标说明">
                  <Icon type="info-circle-o" />
                </Tooltip>
              }
              footer={
                <Field
                  label="日销售额"
                  value={`￥${numeral(12423).format('0,0')}`}
                />
              }
              contentHeight={46}
            >
              <Trend flag="up" style={{ marginRight: 16 }}>
                周同比
                <span style={{ marginLeft: 8 }}>12%</span>
              </Trend>
              <Trend flag="down" style={{ marginRight: 16 }}>
                周同比
                <span style={{ marginLeft: 8 }}>11%</span>
              </Trend>
            </ChartCard>
          </Col>
          <Col {...colResponsiveProps}>
            <ChartCard
              loading={loading}
              title="访问量"
              total={`${numeral(8846).format('0,0')}`}
              action={
                <Tooltip title="指标说明">
                  <Icon type="info-circle-o" />
                </Tooltip>
              }
              footer={
                <Field
                  label="日访问量"
                  value={`￥${numeral(8846).format('0,0')}`}
                />
              }
              contentHeight={46}
            >
              <MiniArea color="#975FE4" data={visitData} />
            </ChartCard>
          </Col>
          <Col {...colResponsiveProps}>
            <ChartCard
              loading={loading}
              title="支付笔数"
              total={`${numeral(8846).format('0,0')}`}
              action={
                <Tooltip title="指标说明">
                  <Icon type="info-circle-o" />
                </Tooltip>
              }
              footer={<Field label="转化率" value={`60%`} />}
              contentHeight={46}
            >
              <MiniBar color="#975FE4" data={visitData} />
            </ChartCard>
          </Col>
          <Col {...colResponsiveProps}>
            <ChartCard
              loading={loading}
              title="运营活动效果"
              total={`${numeral(8846).format('0,0')}`}
              action={
                <Tooltip title="指标说明">
                  <Icon type="info-circle-o" />
                </Tooltip>
              }
              footer={
                <div style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
                  <Trend flag="up" style={{ marginRight: 16 }}>
                    周同比
                    <span style={{ marginLeft: 8 }}>12%</span>
                  </Trend>
                  <Trend flag="down" style={{ marginRight: 16 }}>
                    周同比
                    <span style={{ marginLeft: 8 }}>11%</span>
                  </Trend>
                </div>
              }
              contentHeight={46}
            >
              <MiniProgress
                percent={78}
                strokeWidth={8}
                target={80}
                color="#13C2C2"
              />
            </ChartCard>
          </Col>
        </Row>

        <div className="sales-card">
          <Card loading={loading} bordered={false}>
            <Tabs
              tabBarExtraContent={salesExtra}
              size="large"
              tabBarStyle={{ marginBottom: 24 }}
            >
              <TabPane tab="销售额" defaultMessage="Sales" key="sales">
                <Row>
                  <Col xl={16} lg={12} md={12} sm={24} xs={24}>
                    <Bar height={295} title="销售趋势" data={salesData} />
                  </Col>
                  <Col xl={8} lg={12} md={12} sm={24} xs={24}>
                    <div className="sales-rank">
                      <h4 className="ranking-title">门店销售额排名</h4>
                      <ul className="ranking-list">
                        {rankingListData.map((item, i) => (
                          <li key={item.title}>
                            <span
                              className={`ranking-item-number ${
                                i < 3 ? 'active' : ''
                              }`}
                            >
                              {i + 1}
                            </span>
                            <span
                              className="ranking-item-title"
                              title={item.title}
                            >
                              {item.title}
                            </span>
                            <span>{numeral(item.total).format('0,0')}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab="访问量" defaultMessage="Visits" key="views">
                <Row>
                  <Col xl={16} lg={12} md={12} sm={24} xs={24}>
                    <Bar height={295} title="销售趋势" data={salesData} />
                  </Col>
                  <Col xl={8} lg={12} md={12} sm={24} xs={24}>
                    <div className="sales-rank">
                      <h4 className="ranking-title">门店销售额排名</h4>
                      <ul className="ranking-list">
                        {rankingListData.map((item, i) => (
                          <li key={item.title}>
                            <span
                              className={`ranking-item-number ${
                                i < 3 ? 'active' : ''
                              }`}
                            >
                              {i + 1}
                            </span>
                            <span
                              className="ranking-item-title"
                              title={item.title}
                            >
                              {item.title}
                            </span>
                            <span>{numeral(item.total).format('0,0')}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                </Row>
              </TabPane>
            </Tabs>
          </Card>
        </div>
      </div>
    );
  }
}

export default DashboardDemo;
